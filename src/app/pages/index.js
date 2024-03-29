import App from "../components/App"
import ExpandingButton from "../components/ExpandingButton"
const pageName = {
  name: 'Index Page'
}

export default () =>
  <App>
    <link rel="stylesheet" href="/css/index.css"></link>
    <div className="mtxt--bx">
      <a className="ttl anitxt__1"> Classes are 10x  better with friends <br /> </a>
      <a className="subttl anitxt__2"> Tired of having to manually compare schedules every time? <br /> </a>
      <ExpandingButton />
    </div>
    <img className="arrow__1" src="/assets/images/892499.svg" />
    <div className="wave">
      <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#FFFFFF" fillOpacity="1" d="M0,96L48,106.7C96,117,192,139,288,138.7C384,139,480,117,576,128C672,139,768,181,864,197.3C960,213,1056,203,1152,170.7C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path></svg>
    </div>
    
      </App>