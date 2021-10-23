import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Hit from "../components/hit";

export default function Search() {
    const router = useRouter();
    const [hits, setHits] = useState([]);

    useEffect(() => {
        // NOTE: This is a workaround for *not* executing query before hydration; without this
        // `execQuery` is run with empty `router.query`.
        if (!Object.keys(router.query).length) {
            return
        }
        execQuery()
    }, [router.query])

    const execQuery = async () => {
        const params = new URLSearchParams(router.query as Record<string, string>)
        await fetch(`http://localhost:8000/search?${params}`)
            .then(response => response.json())
            .then(hits => setHits(hits))
            .catch((err) => console.error(err))
    }

    return (
        <div>
            <p>
                Result for {router.query.query}
            </p>
            <ul>
                {
                    hits.map((hit, idx) => {
                        return (
                            <li key={idx}>
                                <Hit hit={hit} />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
