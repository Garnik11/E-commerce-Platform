import {Link} from "react-router-dom";

export default function Header(){
    return(
        <nav>
            <div className = "navRight">
                
                <Link to='/'><img src="logo.png" /></Link>
                <Link to='/shop'>SHOP</Link>
                <Link to='/team'>TEAM</Link>
                <Link to='/events'>EVENTS</Link>
                <Link to='/experience'>EXPERIENCE</Link>
                <Link to='/company'>COMPANY</Link>
                <Link to='/contact'>CONTACT</Link>

            </div>

            <div className = "navLeft" >
                <i className="fas fa-lock fa-lg"></i>
                <i className="fas fa-search fa-lg"></i>
            </div>



        </nav>
    )
}