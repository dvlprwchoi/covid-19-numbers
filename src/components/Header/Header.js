import { Link } from "react-router-dom";

function Header () {
    return (
        <div className = "navBar">
            <nav>
                <Link to = "/">
                    <h3>Home</h3>
                </Link>
                <Link to = "/worldSummary">
                    <h3>World Summary</h3>
                </Link>
            </nav>
            {/* <main>

            </main> */}
        </div>
    );
}

export default Header;