import { ReactNode } from "react"
import Header from "./header"
import Footer from "./footer"

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col w-full items-center min-h-screen">
      <Header />
      <main className="flex flex-col flex-grow m-3 items-center w-full">{children}</main>
      <Footer />
    </div>
  )
}