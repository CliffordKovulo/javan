import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 bg-slate-900">
      <Link href="/">
        <Image src="/javan-logo.svg" alt="logo" width={74} height={29}/>
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="text-slate-100 regular-16 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-slate-300">
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden">
            <Button 
              type = 'button'
              title = 'Login'
              icon = {<FontAwesomeIcon icon={faUser} />}
              variant = "btn_dark_green"
            />
        </div>
    </nav>
  )
}

export default Navbar