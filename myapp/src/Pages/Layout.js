import {Outlet,Link} from "react-router-dom";
function Layout(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to='/' className="Link">Home</Link></li>
                    <li><Link to='/signin' className="Link">Signin</Link></li>
                    <li><Link to='/signup'className="Link">Signup</Link></li>
                    <li><Link to='/contact'className="Link">Contact</Link></li>
                    <li><Link to='/product'className="Link">Product</Link></li>

                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default  Layout;