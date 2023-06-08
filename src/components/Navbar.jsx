import '../style/components/navbar.sass';
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar(){
    return (
        <nav className='nav'>
            <h1 className='nav-title'>Where in the world?</h1>
            <button className='nav-button'>
                <BsFillMoonStarsFill />
                <span className='nav-button-theme'>Dark Mode</span>
            </button>
        </nav>
    )
}