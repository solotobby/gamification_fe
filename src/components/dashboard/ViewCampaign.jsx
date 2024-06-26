import { useState } from 'react';
import Layout from "../pageLayout";


const ViewCampaign = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

    const handleDotClick = (event) => {
        const rect = event.target.getBoundingClientRect();
        setModalPosition({
            top: rect.top + window.scrollY,
            left: rect.left + window.scrollX - 150,
        });
        setModalVisible(!modalVisible);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const images = {
        view: '/images/chartLine.png',
        add: '/images/addPlus.png',
        pause: '/images/pauseCircle.png',
    };

    return (
        <Layout className="px-4 pt-4">
            <div className="p-12 overflow-x-auto">
                <div className="flex justify-between mb-8">
                    <div>
                        <p className="mb-2 text-2xl font-semibold">Campaign List</p>
                        <p className="text-gray-500">Here is the List of campaign you have created</p>
                    </div>

                    <div className="flex items-center gap-1 p-1 border-2 border-gray-200 rounded-md">
                        <img src="/images/search-icon.png" alt="search-icon" className="w-6" />
                        <input
                            type="text"
                            placeholder="Search.."
                            className="bg-transparent border-0 outline-none w-96 flex-grow-1"
                        />
                    </div>
                </div>

                <div className="w-full overflow-x-auto">
                    <div>
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Campaign Title</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Approved</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-end">Unit price</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-end">Total price</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-end">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-end">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(13).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Like, comment and repost my tweet on X</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">40/40</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-end">N20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-end">N1,000</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-end">Live</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-end">
                                            <button onClick={handleDotClick}>...</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {modalVisible && (
                <div
                    className="absolute bg-white border border-gray-300 rounded shadow-lg"
                    style={{ top: modalPosition.top, left: modalPosition.left }}
                >
                    <ul className="p-4 space-y-2">
                        <li>
                            <button onClick={closeModal} className="flex items-center w-full text-left">
                                <img src={images.view} alt="View activities" className="w-4 h-4 mr-2" />
                                View activities
                            </button>
                        </li>
                        <li>
                            <button onClick={closeModal} className="flex items-center w-full text-left">
                                <img src={images.add} alt="Add more workers" className="w-4 h-4 mr-2" />
                                Add more workers
                            </button>
                        </li>
                        <li>
                            <button onClick={closeModal} className="flex items-center w-full text-left">
                                <img src={images.pause} alt="Pause campaign" className="w-4 h-4 mr-2" />
                                Pause campaign
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </Layout>
    );
};

export default ViewCampaign;