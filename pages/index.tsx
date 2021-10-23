import Link from "next/link";

type Example = {
  query: string,
  scope: string,
}

const SET_LIBSTD = "set:libstd"
const SET_RUSTC = "set:rustc_private"

const EXAMPLES: Example[] = [
  { query: "fn (&char) -> bool", scope: SET_LIBSTD },
  { query: "fn (&mut HashMap<K, V>, K, V) -> Option<V>", scope: SET_LIBSTD },
  { query: "fn get_ref(&Option<T>) -> Option<&T>", scope: SET_LIBSTD },
  { query: "fn (Option<Option<T>>) -> Option<T>", scope: SET_LIBSTD },
  { query: "fn (&mut Vec<T>, &mut Vec<T>)", scope: SET_LIBSTD },
  { query: "fn generics(TyCtxt, DefId) -> &Generics", scope: SET_RUSTC }
]

export default function Home() {
  return (
    <div>
      <p>Examples</p>
      <ul>
        {EXAMPLES.map((example, idx) => (
          <li key={idx}>
            <Link href={{
              pathname: "/search",
              query: example
            }}>
              {example.query}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
