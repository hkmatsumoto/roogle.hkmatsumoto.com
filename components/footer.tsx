import { FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="flex flex-col container items-center m-3 space-y-1">
      <a href="https://github.com/hkmatsumoto/roogle" className="text-xl focus text-black hover:text-blue-600" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <p className="font-serif text-sm">&copy; 2021 Hirochika Matsumoto</p>
      <p className="font-serif text-xs mx-3">
        If you find this useful, please consider <a href="https://github.com/sponsors/hkmatsumoto" className="link">financially helping me</a> pay a monthly fee for the server.
      </p>
    </footer>
  )
}