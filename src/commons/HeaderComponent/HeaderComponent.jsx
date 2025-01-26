import { Link } from "react-router"
const HeaderComponent = () => {
  return (
    <>
      <div className="header">

        <div className="logo " >
          <img src="#" alt="logo"/>
        </div>

        <nav className="nav">
        <ul>
            <li >
              <Link   to="/"><a>Home<span></span></a></Link>
            </li>
            <li >
              <Link   to="about" ><a>About<span></span></a></Link>
            </li>
            <li >
              <Link   to="expertise" ><a>Expertise<span></span></a></Link>
            </li>
            <li >
              <Link   to="myworks" ><a>My Works<span></span></a></Link>
            </li>
            <li >
              <Link   to="qualification" ><a>Qualification<span></span></a></Link>
            </li>
            <li className="contact-link">
              <Link   to="contact" ><a>Contact<span></span></a></Link>
            </li>
          </ul>
        </nav>


        {/* <nav className="nav header">
              <a href="#">Home<span></span></a>
              <a href="#">About<span></span></a>
              <a href="#">Contact<span></span></a>
              <a href="#">Expertise<span></span></a>
              <a href="#">My Works<span></span></a>
              <a href="#">Qualification<span></span></a>
        </nav> */}


      </div>
    </>
  )
}

export default HeaderComponent