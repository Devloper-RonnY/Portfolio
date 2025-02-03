import { useState } from "react"
import { navLinks } from "../constants"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    
    const toggleMenu = () => setIsOpen(!isOpen)

    const NavItems = () => {
        return (
            <ul className="nav-ul">
                {navLinks.map(({id, name, href}) => (
                    <li key={id} className="nav-li">
                        <a href={href} className="nav-ul-a">
                            {name}
                        </a>
                    </li>
                ))}
            </ul>
        )
    }
    

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
        <div className="max-w-7xl">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <p href="/" className="text-neutral-400 font-bold text-2xl hover:text-white transition-colors flex items-center gap-1">
                R<img src="/assets/profile.png" className="w-5 h-5"/>   
                    shan Pawar
                    
                </p>
                <button onClick={toggleMenu} className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex" aria-label="toggle menu">
                    <img src={ isOpen ? "assets/close.svg" :"assets/menu.svg"} alt="toggle" className="w-6 h-6" />
                </button>

                <nav className="sm:flex hidden">
                    <NavItems />
                </nav>
            </div>
        </div>
        <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
            <NavItems />
        </nav>
        </div>
    </header>
  )
}

export default Navbar