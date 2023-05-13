// HomePage.jsx
import {Link} from "react-router-dom";

const HomePage = () => {
    return ( 
        <div className="jumbotron">
            <h1>E-Learning</h1>
            <p>React, Redux, and React Router.</p>
            <Link to="about" className="btn btn-primary btn-lg">
                Learn more
            </Link>
        </div>
     );
}
 
export default HomePage ;