import { Fragment, memo } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PropTypes from 'prop-types';

const _Modal = ({
    isOpen,
    children,
    large,
}) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => {}}
                    static
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-opacity-65 bg-slate-400" />
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
                                    className={`w-full  ${large ? "max-w-7xl" : "max-w-2xl"
                                        } transform rounded-2xl bg-white py-6 px-1 text-left align-middle shadow-xl transition-all`}
                                >
                                    <div className=" max-h-[90vh] overflow-y-auto px-3">
                                       
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
    children: PropTypes.element,
    large: PropTypes.bool,
    name: PropTypes.string
};

export const Modal = memo(_Modal);