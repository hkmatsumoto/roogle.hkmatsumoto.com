import { ReactNode } from "react"
import Header from "./header"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}