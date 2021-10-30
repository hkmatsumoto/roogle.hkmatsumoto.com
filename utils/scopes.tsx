export default async function getScopes(): Promise<string[]> {
  return fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/scopes`)
    .then(response => response.json())
    .then(scopes => scopes)
    .catch((err) => console.log(err));
}
