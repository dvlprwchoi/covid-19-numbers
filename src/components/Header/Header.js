import { Link } from "react-router-dom";

function Header () {
    return (
        <div className = "navBar">
            <nav>
                <Link to = "/">
                    <h3>Home</h3>
                </Link>
                <Link to = "/globalSummary">
                    <h3>Global Summary</h3>
                </Link>
                <Link to = "/usSummary">
                    <h3>US Summary</h3>
                </Link>
            </nav>
            {/* <main>

            </main> */}
        </div>
    );
}

export default Header;