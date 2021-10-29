import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { githubGist } from "react-syntax-highlighter/dist/esm/styles/hljs";

import style from "../styles/markdown.module.css";

type Hit = {
  name: string,
  path: string[],
  link: string[],
  docs: string | null
}

type HitProps = {
  hit: Hit
}

export default function Hit({ hit }: HitProps) {
  let { path, link, docs } = hit;

  return (
    <div className="flex flex-col">
      <a href={constructLink(link)} target="_blank" rel="noreferrer" className="font-mono font-semibold break-all text-2xl link">
        {path.join("::")}
      </a>
      <p className="prose-sm">
        {
          docs
            ? <ReactMarkdown className={style.markdown} components={{
              code({ node, inline, className, children, ...props }) {
                return !inline ? (
                  <SyntaxHighlighter
                    style={githubGist}
                    language="rust"
                    PreTag="div"
                    customStyle={{padding: 0}}
                    wrapLongLines={true}
                    className="font-mono"
                    {...props as any} // FIXME: Make this typecheck without an ugly assertion.
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                )
              }
            }}>
              {docs}
            </ReactMarkdown>
            : null
        }
      </p>
    </div>
  )
}

const constructLink = (link: string[]): string => {
  if (["std", "core", "alloc"].includes(link[0])) {
    return `https://docs.rust-lang.org/nightly/${link.join('/')}`;
  } else if (link[0].includes("rustc")) {
    return `https://doc.rust-lang.org/nightly/nightly-rustc/${link.join('/')}`;
  } else if (link[0].includes("primitive")) {
    return `https://docs.rust-lang.org/nightly/std/${link.join('/')}`;
  } else {
    // FIXME: include crate version so that this link would work
    return `https://docs.rs/${link.join('/')}`;
  }
}
