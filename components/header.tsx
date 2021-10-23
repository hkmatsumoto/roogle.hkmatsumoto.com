import { useRouter } from "next/router"
import Link from "next/link"
import { useForm } from "react-hook-form"

type FormData = {
    query: string,
    scope: string,
}

export default function Header() {
    const router = useRouter();
    const { register, handleSubmit } = useForm();

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
                    <option value="set:libstd">set:libstd</option>
                    <option value="set:rustc_private">set:rustc_private</option>
                    <option value="set:crates.io">set:crates.io</option>
                </select>
                <input type="text" {...register("query")} placeholder="Search for ..." />
            </form>
        </div>
    )
}