import { Link, Outlet }from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <Link to="home">Home</Link> |
        <Link to="About">About</Link> |
        <Link to="Contact">Contact</Link>
       
        <Outlet/>
        <hr size="4" color="blue"/>
        www.mycompany.com
        <hr size="4" color="blue"/>
     
        </>
    )
}
export default Layout;