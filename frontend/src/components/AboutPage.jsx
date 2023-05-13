// AboutPage.jsx
import {Link} from "react-router-dom";

const AboutPage = () => {
    return ( 
        <div className="jumbotron">
            <h1>About</h1>
            <p>This app uses React, Redux, React Router, and many other helpful libraries.</p>
            <Link to="/" className="btn btn-primary btn-lg">
                Back home
            </Link>
        </div>
     );
}
 
export default AboutPage;