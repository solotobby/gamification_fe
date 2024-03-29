import { Link } from "react-router-dom";
const header = () => {
    return (
        <div className="flex items-center my-9 justify-evenly ">

           <Link to='/'> <img src="/images/freebyzlogo-blue.png" alt="freebyz-logo" /></Link>
            <div className="flex gap-8">
                <Link to="/">Home</Link>
                <Link>Make money</Link>
                <Link to='/contact-us'>FAQs</Link>
                <Link  to='/about-us'>About us</Link>
                <Link  to='/contact-us'>Contact</Link>
            </div>

            <div className="flex items-center gap-6">
                <p>Login</p>
                <button className="p-4 text-white rounded-full bg-customBlue">Sign up for free</button>
            </div>
        </div>
    )
}

export default header;
