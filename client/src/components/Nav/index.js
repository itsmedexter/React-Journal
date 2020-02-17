import React from "react";
import { useStoreContex } from "../../utils/GlobalState";

function Nav() {
    const [store] = useStoreContex();

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
                A drift on Memory Bliss
            </a>
            {store.loading ? <a className="navbar-brand ml-auto">Loading...</a> : <></>}
        </nav>
    );
}

export default Nav;