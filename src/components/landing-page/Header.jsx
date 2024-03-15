const header = () => {
    return (
        <div className="flex items-center my-9 justify-evenly">
            <div>
                <h1>Logo</h1>
            </div>

            <div className="flex space-x-2">
                <p>Home</p>
                <p>Make money</p>
                <p>FAQs</p>
                <p>About us</p>
                <p>Contact</p>
            </div>

            <p>Login</p>
            <button className="text-white rounded-full bg-customBlue">Sign up for free</button>
        </div>
    )
}

export default header;
