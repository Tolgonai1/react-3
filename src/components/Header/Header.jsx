import "./header.css"
import {NavLink, useParams} from "react-router-dom";

export function Header(){
    const {id}= useParams()
    return (
        <header>
            <div>
                <a className='logo' href="">Logo</a>
            </div>
            <nav>
                <ul className="header-list">
                    <li className='header-item'>
                        <NavLink to="/">Главная</NavLink>
                    </li>
                    <li className='header-item'>
                        <NavLink to="/users">Пользователи</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}