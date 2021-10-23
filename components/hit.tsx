type Hit = {
    name: string,
    path: string[],
    link: string[],
    docs: string | null
}

type HitProps = {
    hit: Hit
}

export default function Hit({hit}: HitProps) {
    let {path, link, docs} = hit;

    return (
        <div>
            <a href={constructLink(link)} target="_blank" rel="noreferrer">
                {path.join("::")}
            </a>
            <p>
                {
                   docs 
                }
            </p>
        </div>
    )
}

const constructLink = (link: string[]): string => {
    if (["std", "core", "alloc"].includes(link[0])) {
        return `https://docs.rust-lang.org/nightly/${link.join('/')}`;
    } else if (link[0].includes("primitive")) {
        return `https://docs.rust-lang.org/nightly/std/${link.join('/')}`;
    } else {
        // FIXME: include crate version so that this link would work
        return `https://docs.rs/${link.join('/')}`;
    }
}
