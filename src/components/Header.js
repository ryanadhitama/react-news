import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <div className="logo">
                <h3>ryanadhitama</h3>
            </div>
            <div className="menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/categories">Categories</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;