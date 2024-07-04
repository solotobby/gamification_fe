import React, { useState } from 'react';
import Layout from '../../pageLayout';

const CurrencyConverter = () => {
    const [nairaAmount, setNairaAmount] = useState('');
    const [dollarAmount, setDollarAmount] = useState('');

    const handleNairaChange = (event) => {
        setNairaAmount(event.target.value);
    };

    const handleConvert = () => {
        const conversionRate = 1200;
        const convertedAmount = nairaAmount / conversionRate;
        setDollarAmount(convertedAmount.toFixed(2));
    };

    const isConvertEnabled = nairaAmount;

    return (
        <Layout>
            <div className="h-screen p-12 overflow-x-auto overflow-y-auto">
                <div className="bg-white p-14">
                    <div className="mb-8">
                        <p className="mb-2 text-base text-gray-500">Wallet Balance</p>
                        <p className="text-2xl font-semibold">&#8358; 5,000,000.00</p>
                        <div className="h-px mt-2 mb-8 bg-gray-300"></div>
                    </div>

                    <div className="mb-8">
                        <p>You convert</p>
                        <div className="w-1/2">
                            <input
                                type="number"
                                placeholder="₦"
                                value={nairaAmount}
                                onChange={handleNairaChange}
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <div className="flex justify-between mt-2">
                                <p>Rate:</p>
                                <p>$1 = ₦1,200</p>
                            </div>
                        </div>
                    </div>

                    <img src="/images/convert.png" alt="conversion-icon" className="mb-8" />

                    <div className="mb-8">
                        <p>You get</p>
                        <div className="w-1/2">
                            <input
                                type="text"
                                placeholder="$"
                                value={dollarAmount}
                                readOnly
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <div className="flex justify-between mt-2">
                                
                            </div>
                        </div>
                    </div>

                    <button
                        className={`px-8 py-4 rounded-full ${isConvertEnabled ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}
                        disabled={!isConvertEnabled}
                        onClick={handleConvert}
                    >
                        Convert
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default CurrencyConverter;