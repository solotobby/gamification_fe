import { Link } from "react-router-dom";


const Sidenav = () => {
    return (
        <div>
            <Link to="/"> <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" /></Link>
           <div>
            <img src="/public/images/dashboard-icon.png" alt="dashboard-icon" />
                <p>
                    Dashboard
                </p>
           </div>
        </div>
    )
}

export default Sidenav;