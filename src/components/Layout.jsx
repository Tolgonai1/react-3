import {Header} from "./Header/Header.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "./Footer/Footer.jsx";

export function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}