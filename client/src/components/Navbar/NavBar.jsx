import {Link} from "react-router-dom";
import "./NavBar.css"
const navItems = [
    {
        text:"Projects",
        path:"/projects"
    }, {
        text:"Create Rubric",
        path:"/create-rubric"
    }]

function NavBar(){
return (
    <header className="nav-bar">
        <div className="site-home">
            <Link className="site-name" to={{pathname:"/"}}>Feedback Generator</Link>
        </div>
        <nav className="nav-links">
            {
                navItems.map((navlink, i)=>{
                    return(
                        <Link key={i} className="nav-link" to={{pathname:navlink.path}}>{navlink.text}</Link>
                    )
                })
            }
        </nav>
    </header>
)
}

export default NavBar;