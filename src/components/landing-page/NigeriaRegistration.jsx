import { Link } from "react-router-dom";


const NigeriaRegistration = () => {
    return (
        <div className="relative grid h-screen grid-cols-1 bg-white md:grid-cols-3">
           
            <div className="w-full h-32 pl-2 md:pl-8 md:h-full bg-customBlue left-class shrink-0 background-map2">
                <img className="pt-10" src="/images/Freebyz-logo-white.png" alt="freebyz-logo" />
                <h1 className="w-1/2 mt-20 text-2xl text-white">Work online and earn daily in dollar and naira!</h1>
                
            </div>
    
            
            <div className='flex h-full col-span-2'>
                    <div className="flex flex-col mt-40 login-content lg:w-[40%] ml-0 md:ml-10 lg:ml-32 w-full px-4 md:px-0">
                        <h2 className="text-3xl font-bold">Sign up for free</h2>
                        <p className="text-gray-400 ">Please ensure that you provide the your active phone number</p>
                        <form className="mt-10" >
                            <div className="flex flex-col form-group">
                                <label htmlFor="email-address">Phone number</label>
                                <input 
                                    type="text" 
                                    id="email-address" 
                                    name="email-address" 
                                    className="mt-2 placeholder-gray-400 rounded-md" 
                                    placeholder="0813**********" 
                                    
                                />
                            </div>
                            <button 
                                className='px-4 py-2 mt-8 text-white bg-blue-500 rounded-full' 
                                type="submit" 
                                
                            >
                                Sign up
                            </button>
                            <p className="pb-10 mt-7 "></p>
                            
                        </form>
                    </div>
                </div>

                <div className='absolute top-32 right-8 md:top-10'>
                    <p className="mx-8 mt-10"> Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                </div>
        </div>
    );
   
};



export default NigeriaRegistration;