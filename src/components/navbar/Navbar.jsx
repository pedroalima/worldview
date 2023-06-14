import './navbar.sass';
import { BsFillMoonStarsFill} from "react-icons/bs";
import { useState } from 'react'

export default function Navbar(){
    const [ icons ] = useState(() => <BsFillMoonStarsFill />)

    const handleThemeClick = ({ target }) => {
        document.querySelector('html').classList.toggle('dark')
        target.parentNode.children[1].innerText = "Light Mode";

        // if(icons == BsFillMoonStarsFill) {
        //     setIcons(BsFillSunFill)
        //     target.parentNode.children[1].innerText = "Light Mode";
        // } else {
        //     setIcons(BsFillMoonStarsFill)
        //     target.parentNode.children[1].innerText = "Dark Mode";
        // }
        
    }

    return (
        <nav className='nav'>
            <h1 className='nav-title'>Where in the world?</h1>
            <button onClick={handleThemeClick} className='nav-button'>
                {icons}
                <span className='nav-button-theme'>Dark Mode</span>
            </button>
        </nav>
    )
}