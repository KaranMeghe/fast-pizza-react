import { Link } from "react-router-dom";
import { SearchOrder } from "../features";

const Header = () => {
    return (
        <header>
            <Link to='/'>Fast Pizza Co.</Link>
            <SearchOrder />
        </header>
    );
};

export default Header;