// import './App.css'
import { Outlet } from 'react-router'
// import RouteComponent from './routes/Routes'
import HeaderComponent from './commons/HeaderComponent/HeaderComponent'
import HomePage from './pages/homePage/HomePage'
import FooterComponent from './commons/FooterComponent/FooterComponent'

function App() {

  return (
    <>
      <HeaderComponent />
      <HomePage />
      <FooterComponent />
      {/* <RouteComponent /> */}
      <Outlet />
    </>
  )
}

export default App
