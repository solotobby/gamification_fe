const header = () => {
    return (
        <div className="flex items-center my-9 justify-evenly ">

            <img src="/public/images/freebyzlogo-blue.png" alt="freebyz-logo" />
            <div className="flex gap-8">
                <p>Home</p>
                <p>Make money</p>
                <p>FAQs</p>
                <p>About us</p>
                <p>Contact</p>
            </div>

            <div className="flex items-center gap-6">
                <p>Login</p>
                <button className="p-4 text-white rounded-full bg-customBlue">Sign up for free</button>
            </div>
        </div>
    )
}

export default header;
