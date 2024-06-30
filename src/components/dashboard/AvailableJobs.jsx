import Layout from "../pageLayout"
import { Link } from 'react-router-dom';



const AvailableJobs = () => {
    return (
        <Layout className="px-4 pt-4">
        <>
            <div className="h-screen px-8 py-8 overflow-y-auto">

                <Link to="/first-job">
                    <div className="p-4 mt-8 bg-white cursor-pointer">
                        <div className="flex justify-between">
                            <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                            <p>&#8358;15.00</p>
                        </div>
                        <div className="relative w-full h-2 mt-16 bg-gray-300">
                            <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                        </div>
                        <div className="flex justify-between mt-12">
                            <p>Facebook jobs</p>
                            <p>14 / 20 workers completed</p>
                        </div>
                    </div>
                </Link>
                <div className="p-4 mt-8 bg-white">
                    <div className="flex justify-between">
                        <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                        <p>&#8358;15.00</p>
                    </div>
                    <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                        <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex justify-between mt-12">
                        <p>Facebook jobs</p>
                        <p>14 / 20 workers completed</p>
                    </div>
                </div>
                <div className="p-4 mt-8 bg-white">
                    <div className="flex justify-between">
                        <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                        <p>&#8358;15.00</p>
                    </div>
                    <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                        <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex justify-between mt-12">
                        <p>Facebook jobs</p>
                        <p>14 / 20 workers completed</p>
                    </div>
                </div>
                <div>
                    <img src="/images/advertise.png" alt="advert-banner" className="w-full py-8" />
                </div>
                <div className="p-4 mt-8 bg-white">
                    <div className="flex justify-between">
                        <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                        <p>&#8358;15.00</p>
                    </div>
                    <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                        <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex justify-between mt-12">
                        <p>Facebook jobs</p>
                        <p>14 / 20 workers completed</p>
                    </div>
                </div>
                <div className="p-4 mt-8 bg-white">
                    <div className="flex justify-between">
                        <p>UNLOCK ₦15,000 BIG BONUS ON PALMPAY</p>
                        <p>&#8358;15.00</p>
                    </div>
                    <div className="relative w-full h-2 mt-16 bg-gray-300 rounded">
                        <div className="absolute h-2 bg-blue-600" style={{ width: '50%' }}></div>
                    </div>
                    <div className="flex justify-between mt-12">
                        <p>Facebook jobs</p>
                        <p>14 / 20 workers completed</p>
                    </div>
                </div>
            </div>

        </>

    </Layout>
    )
}

export default AvailableJobs;