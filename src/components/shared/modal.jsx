import { Fragment, memo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from 'prop-types';

const _Modal = ({
    isOpen,
    closeModal,
    header,
    description,
    children,
    large,
}) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto over">
                        <div className="flex items-center justify-center h-full p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className={`w-full  ${large ? "max-w-3xl" : "max-w-lg"
                                        } transform rounded-2xl bg-white py-6 px-1 text-left align-middle shadow-xl transition-all`}
                                >
                                    <div className=" max-h-[90vh] overflow-y-auto px-3">
                                        <span className="flex items-center gap-2 pb-2 mb-5 border-b-2 border-slate-200">
                                            <span className="flex items-center justify-center text-orange-400 rounded-full bg-slate-100 w-14 h-14">
                                              
                                            </span>
                                            <span>
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-semibold leading-6 text-slate-800"
                                                >
                                                    {header}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm font-semibold text-center text-slate-500">
                                                        {description}
                                                    </p>
                                                </div>
                                            </span>
                                        </span>
                                        {children}
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};

_Modal.propTypes = {
    isOpen: PropTypes.bool,
    closeModal: PropTypes.func,
    header: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.element,
    large: PropTypes.bool,
    name: PropTypes.string
};

export const Modal = memo(_Modal);