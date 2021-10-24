import { useContext, useEffect } from "react";
import Link from "next/link";

import { ScopesContext } from "../contexts/scopes";
import getScopes from "../utils/scopes";

type Example = {
  query: string,
  scope: string,
}

const SET_LIBSTD = "set:libstd"
const CRATE_RUSTC_MIDDLE = "crate:rustc_middle"

const EXAMPLES: Example[] = [
  { query: "fn (&char) -> bool", scope: SET_LIBSTD },
  { query: "fn (&mut HashMap<K, V>, K, V) -> Option<V>", scope: SET_LIBSTD },
  { query: "fn get_ref(&Option<T>) -> Option<&T>", scope: SET_LIBSTD },
  { query: "fn (Option<Option<T>>) -> Option<T>", scope: SET_LIBSTD },
  { query: "fn (&mut Vec<T>, &mut Vec<T>)", scope: SET_LIBSTD },
  { query: "fn generics(TyCtxt, DefId) -> &Generics", scope: CRATE_RUSTC_MIDDLE }
]

type HomeProps = {
  scopes: string[]
}

export default function Home({ scopes }: HomeProps) {
  const { setScopes } = useContext(ScopesContext);

  useEffect(() => {
    setScopes(scopes)
  }, [setScopes])

  return (
    <div className="flex flex-col items-baseline">
      <p className="text-2xl">Examples</p>
      <ul>
        {EXAMPLES.map((example, idx) => (
          <li key={idx}>
            <Link href={{
              pathname: "/search",
              query: example
            }}>
              <a className="font-mono link">
                {example.query}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      scopes: getScopes()
    }
  }
}
