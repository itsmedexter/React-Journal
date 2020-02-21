import React from "react";
import { useStoreContext } from "../../utils/GlobalState";

function Nav() {
    const [store] = useStoreContext();

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
            <a className="navbar-brand" href="/">
                ReMemory
            </a>
            {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
            <a className="navbar-brand" href="/">Logout</a>
        </nav>
    );
}

export default Nav;