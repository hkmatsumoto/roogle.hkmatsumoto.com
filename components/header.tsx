import { useContext } from "react";
import { useRouter } from "next/router"
import Link from "next/link"
import { useForm } from "react-hook-form"

import { ScopesContext } from "../contexts/scopes";

type FormData = {
    query: string,
    scope: string,
}

export default function Header() {
    const router = useRouter();
    const { register, handleSubmit } = useForm({
        defaultValues: {
            query: "",
            scope: "set:libstd"
        }
    });
    const { scopes } = useContext(ScopesContext);

    const onSubmit = (data: FormData) => {
        router.push({
            pathname: "/search",
            query: {
                query: data.query,
                scope: data.scope,
            }
        })
    }

    return (
        <div>
            <Link href="/">
                <a>Roogle</a>
            </Link>

            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("scope")}>
                    {
                        scopes.map((scope, idx) => (
                            <option value={scope} key={idx}>{scope}</option>
                        ))
                    }
                </select>
                <input type="text" {...register("query")} placeholder="Search for ..." />
            </form>
        </div>
    )
}