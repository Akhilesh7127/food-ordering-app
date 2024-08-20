import React from "react";
import ReactDOM from "react-dom/client";

const Logo = () => {
    return (
        <div className="logo">
            <img src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg" />
        </div>
    )
}

const HeaderComponent = () => {
    return (
        <div className="header">
            <Logo />
            {/* <NavItems/> */}
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)