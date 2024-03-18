const Footer = () => {
    return (
        <div className="mt-8 bg-customBlue">
            <div className="container flex justify-around p-10">
                <div>
                    <img src="/public/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                </div>

                <div className="text-white ">
                    <h1>Quick links</h1>
                    <p>Home</p>
                    <p>Make money</p>
                    <p>Login</p>
                    <p>Sign up</p>
                </div>

                <div className="text-white ">
                    <h1>Company</h1>
                    <p>About us</p>
                    <p>Track record</p>
                    <p>FAQs</p>
                </div>

                <div className="text-white ">
                    <h1>Legal</h1>
                    <p>Terms of use</p>
                    <p>Privacy policy</p>
                </div>
            
                <div className="text-white ">
                        <h1>Contact</h1>
                        <p>Contact support</p>
                        <p>Live chat</p>
                </div>
            </div>

            <div className="container my-4 border-t border-white"></div>

            <div className="container flex justify-between my-10">
                <div className="text-white">
                    <p>All copyright © reserved by Freebyz 2024</p>
                    <p>Freebyz By Dominahl Technology LLC</p>
                </div>

                <div className="flex my-10">
                    <img src="/public/images/freebyz-facebook.png" alt="facebook-icon" />
                    <img src="/public/images/freebyz-ig.png" alt="instagram-icon" />
                    <img src="/public/images/freebyz-x.png" alt="twitter-icon" />
                </div>
            </div>
        </div>
       
    )
};

export default Footer;