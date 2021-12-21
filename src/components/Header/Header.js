import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navBar">
      <div className="navMenuHome">
        <Link to="/">Home</Link>
      </div>
      <div className="navMenuGlobalSummary">
        <Link to="/globalSummary">Global Summary</Link>
      </div>
      <div className="navMenuUsSummary">
        <Link to="/usSummary">US Summary</Link>
      </div>
      <div className="navMenuSearchByState">
        <Link to="/searchByState">Search by State</Link>
      </div>
      <div className="navMenuGlobalVaccination">
        <Link to="/globalVaccination">Global Vaccination</Link>
      </div>
      <div className="navMenuUsSummary">
        <Link to="/usSummary">US Summary</Link>
      </div>
      {/* <nav>
                <Link to = "/">
                    <h3>Home</h3>
                </Link>
                <Link to = "/globalSummary">
                    <h3>Global Summary</h3>
                </Link>
                <Link to = "/usSummary">
                    <h3>US Summary</h3>
                </Link>
            </nav> */}
      {/* <main>

            </main> */}
    </div>
  );
}

export default Header;
