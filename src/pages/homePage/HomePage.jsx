// import { Link } from "react-router"
import AboutComponent from "../../components/aboutComponent/AboutComponent"
import HomeComponent from "../../components/homeComponent/HomeComponent"
import ExpertiseComponent from "../../components/expertiseComponent/ExpertiseComponent"
import QualificationComponent from "../../components/qualificationComponent/QualificationComponent"
import MyWorksComponent from "../../components/myWorksPageComponent/MyWorksComponent"
import ReviewsComponent from "../../components/reviewsComponent/ReviewsComponent"

const HomePage = () => {


  return (
    <div>
        <>

          <HomeComponent/>
          <AboutComponent/>
          <MyWorksComponent/>
          <ExpertiseComponent/>
          <QualificationComponent/>
          <ReviewsComponent />
  
        </>
    </div>
  )
}

export default HomePage