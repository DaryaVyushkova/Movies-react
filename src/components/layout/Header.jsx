import React from "react"

function Header(){
    return(
        <>
            <nav className="teal lighten-1">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">React movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Home</a></li>
                    </ul>
                 </div>
            </nav>
        </>
    )
}

export { Header}