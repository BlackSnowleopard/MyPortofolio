import { Link } from "react-router"
const FooterComponent = () => {
  return (
    <footer >
      <h3>Quick Links</h3>                      
      
      <ul className="footer-links">
        <li >
          <Link   to="/"><a>Home</a></Link>
        </li>
        <li >
          <Link   to="myworks" ><a>Works</a></Link>
        </li>
        <li >
          <Link   to="expertise" ><a>Expertise</a></Link>
        </li>
        <li >
          <Link   to="about" ><a>About<span></span></a></Link>
        </li>
      </ul>
      <hr  style={{ margin:"auto" , width:"280px"}}  />
      <p style={{marginTop:"10px"}}>myemail@gmail.com | +233 000 00 000 | Ghana</p>

      <p>© 2024 Esmund Tsegah. All Rights Reserved.</p>



      

      </footer>


  )
}

export default FooterComponent