import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css"

function Nav() {
    const [store] = useStoreContext();

    return(
        <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand logoname" href="/">
                reMemory
            </a>
            {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
            <a className="navbar-brand logoutlink" href="/">Logout</a>
        </nav>
    );
}

export default Nav;