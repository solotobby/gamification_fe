import { useState } from 'react';
import Layout from "../pageLayout";

const YourWallet = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');

    const toggleModal = (type) => {
        setModalType(type);
        setModalVisible(!modalVisible);
    };

    const [amount, setAmount] = useState('');
    const [option, setOption] = useState('');

    const isFormValid = amount && option;

    return (
        <Layout className="px-4 pt-4">
            <div className='h-screen overflow-y-auto'>
                <div className="p-12 overflow-x-auto">
                    <div className="flex justify-between mb-8">
                        <div>
                            <p className="mb-2 text-sm">Wallet Balance</p>
                            <p className="text-2xl font-semibold">&#8358; 5,000,000.00</p>
                        </div>

                        <div className="flex gap-8">
                            <button
                                className="px-4 text-white bg-blue-600 rounded-full"
                                onClick={() => toggleModal('Fund')}
                            >
                                Fund wallet
                            </button>
                            <button
                                className="px-4 text-blue-600 bg-blue-100 rounded-full"
                                onClick={() => toggleModal('Withdraw')}
                            >
                                Withdraw funds
                            </button>
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-100">
                                <tr className="rounded-sm">
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">S/N</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Amount</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Transaction date and time</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Beneficiary bank</th>
                                    <th scope="col" className="px-6 py-3 text-lg font-medium text-gray-800 uppercase text-start">Beneficiary name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[...Array(10).keys()].map(index => (
                                    <tr key={index} className={`odd:bg-white even:bg-gray-100 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                        <td className="px-6 py-4 text-base font-medium text-gray-800 whitespace-nowrap text-start">{index + 1}</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">&#8358;20</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">23-03-17 23:59:34</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Access bank</td>
                                        <td className="px-6 py-4 text-base text-gray-800 whitespace-nowrap text-start">Damilola Oluwaseun Rawlings</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {modalVisible && (
                    <div className="fixed top-0 right-0 z-50 w-1/3 h-full p-6 bg-white shadow-lg">
                        <button className="absolute text-gray-500 top-4 right-4" onClick={() => toggleModal('')}>✕</button>
                        {modalType === 'Fund' ? (
                            <>
                                <h2 className="my-12 text-2xl font-semibold">Fund Wallet</h2>
                                <p className="mb-4">
                                    Fund your wallet by making a transfer to the account details below.
                                    Your wallet gets credited in less than 1 minute.
                                </p>
                                <div className="p-4 mb-6 bg-blue-100 border-2 border-blue-400 border-dotted ">
                                    <p className="text-lg font-medium">Account Name: XYZ Bank</p>
                                    <p className="text-lg font-medium">Bank Name: 1234567890</p>
                                    <p className="text-lg font-medium">Account Number: XYZ Bank</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="my-12 text-2xl font-semibold">Withdraw Funds</h2>
                                <div className="mb-4">
                                    <label className="block mb-2 text-lg font-medium">Amount</label>
                                    <input
                                        type="text"
                                        placeholder="₦"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block mb-2 text-lg font-medium">Select an option</label>
                                    <select
                                        value={option}
                                        onChange={(e) => setOption(e.target.value)}
                                        className="w-full p-2 border border-gray-300 rounded"
                                    >
                                        <option value="" disabled>Select</option>
                                        <option value="Option 1">Option 1</option>
                                        <option value="Option 2">Option 2</option>
                                    </select>
                                </div>
                                <button
                                    className={`rounded-full py-2 text-white px-4 ${isFormValid ? 'bg-blue-600' : 'bg-gray-300'}`}
                                    disabled={!isFormValid}
                                >
                                    Withdraw Funds
                                </button>

                                <p className='p-2 mt-8 bg-red-100 border-2 border-red-400 border-dotted rounded-2xl'>
                                Note: Withdrawals are made every FRIDAY of the week. Only verified users can withdraw.
                                </p>
                            </>
                        )}
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default YourWallet;