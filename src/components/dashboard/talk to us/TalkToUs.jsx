import Layout from "../../pageLayout";
import { useNavigate } from "react-router-dom";

const TalkToUs = () => {

    const navigate = useNavigate();

    const handleOpenNewTicket = () => {
        navigate("/open-new-ticket");
    };

    return (
        <Layout>
            <div className="h-screen p-12 overflow-x-auto overflow-y-auto">
                <div className="bg-white p-14">
                    <div className="flex justify-between mb-8 ">
                        <div>
                            <p className="text-2xl font-semibold">Talk to us</p>
                            <p className="mb-2 text-base text-gray-500">Please let us know how you feel about Freebyz.</p>

                        </div>

                        <div className="flex gap-8">
                        <button
                                className="px-6 text-white bg-blue-600 rounded-full"
                                onClick={handleOpenNewTicket}
                            >
                                Open new ticket
                            </button>
                        </div>

                    </div>
                    <div className="p-8 mb-8 border border-gray-400 rounded-2xl">
                        <button className="p-4 mb-4 text-yellow-600 bg-yellow-100 rounded-2xl">Reporting a worker</button>
                        <p className="mb-8">Hello, I would like to report a worker. Hello, I would like to report a worker. Hello, I would like to report a worker.Hello, I would like to report a worker. </p>
                        <p className="text-gray-500">15 April, 2024 12:00 PM</p>
                    </div>
                    <div className="p-8 mb-8 border border-gray-400 rounded-2xl">
                        <button className="p-4 mb-4 text-green-600 bg-green-100 rounded-2xl">Feedback</button>
                        <p className="mb-8">Hello, I would like to report a worker. Hello, I would like to report a worker. Hello, I would like to report a worker.Hello, I would like to report a worker.  </p>
                        <p className="text-gray-500">15 April, 2024 12:00 PM</p>
                    </div>

                    <div className="p-8 mb-8 border border-gray-400 rounded-2xl">
                        <button className="p-4 mb-4 text-blue-600 bg-blue-100 rounded-2xl">Complaint</button>
                        <p className="mb-8">Hello, I would like to report a worker. Hello, I would like to report a worker. Hello, I would like to report a worker.Hello, I would like to report a worker. </p>
                        <p className="text-gray-500">15 April, 2024 12:00 PM</p>
                    </div>
                    <div className="p-8 border border-gray-400 rounded-2xl">
                        <button className="p-4 mb-4 text-red-600 bg-red-100 rounded-2xl">Transfer issues</button>
                        <p className="mb-8">Hello, I would like to report a worker. Hello, I would like to report a worker. Hello, I would like to report a worker.Hello, I would like to report a worker. </p>
                        <p className="text-gray-500">15 April, 2024 12:00 PM</p>
                    </div></div>
            </div>
        </Layout>
    );
};

export default TalkToUs;