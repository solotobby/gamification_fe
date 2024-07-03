import { useState } from 'react';
import Layout from "../../pageLayout";

const ViewCampaign = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [slideModalVisible, setSlideModalVisible] = useState(false);
    const [workerCount, setWorkerCount] = useState('');

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
        setSlideModalVisible(false);
    };

    const handleAddWorkersClick = () => {
        setSlideModalVisible(true);
        setModalVisible(false);
    };

    const images = {
        view: '/images/chartLine.png',
        add: '/images/addPlus.png',
        pause: '/images/pauseCircle.png',
    };

    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
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
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Campaign Title</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Approved</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Unit price</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Total price</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Status</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(13).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Like, comment and repost my tweet on X</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">40/40</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358; 20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">N1,000</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Live</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">
                                            <button onClick={handleDotClick}>...</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                                <button onClick={handleAddWorkersClick} className="flex items-center w-full text-left">
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

                {slideModalVisible && (
                    <div className="fixed top-0 right-0 z-50 w-1/3 h-full p-6 bg-white shadow-lg">
                        <button className="absolute text-gray-500 top-4 right-4" onClick={closeModal}>✕</button>
                        <h2 className="my-12 text-2xl font-semibold">Add More Workers</h2>
                        <div className='flex gap-8 mb-12 text-sm'>
                            <div>
                                <p>Total workers</p>
                                <p className='font-semibold'>40</p>
                            </div>

                            <div>
                                <p>
                                    Value per job
                                </p>
                                <p className='font-semibold'>N 20</p>
                            </div>

                            <div>
                                <p>Total value of job</p>
                                <p className='font-semibold'>N 1,000</p>
                            </div>
                        </div>
                        <p>Number of workers</p>
                        <input
                            type="number"
                            value={workerCount}
                            onChange={(e) => setWorkerCount(e.target.value)}
                         
                            className="w-full p-2 mb-4 border border-gray-300 rounded"
                        />
                        <button
                            className={` px-4 py-2 mt-8 text-white rounded-full ${workerCount ? 'bg-blue-500' : 'bg-gray-200'}`}
                            disabled={!workerCount}
                        >
                            Add
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ViewCampaign;