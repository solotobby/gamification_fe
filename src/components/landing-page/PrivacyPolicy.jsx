import { useRef } from "react";

const PrivacyPolicy = () => {
    const overviewRef = useRef()
    const childInfoRef = useRef()
    const infoWeCollectRef = useRef()
    const consent = useRef()
    const hoWeManageYourInfoRef = useRef()
    const logFilesRef = useRef()
    const cookiesAndWebRef = useRef()
    const thirdPartyRef = useRef()
    const advertisingPartnersRef = useRef()
    const gdprRef = useRef()
    const goToRef = (ref) => {
        const offset = 160;
        const element = ref.current;
        
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top: topPosition, behavior: "smooth" });
        }
    };
    return (
        <div className="container relative min-h-screen pt-20">
            <div className="md:fixed flex-col hidden my-8 md:flex w-[15rem] h-full relative">
                <h1 className="mb-2 font-bold">Privacy policy</h1>
                <span
                    className="py-1 pl-1 pr-2 text-sm transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(overviewRef)}
                >
                    Overview
                </span>
                <span
                    className="py-1 pl-1 pr-2 text-sm transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(consent)}
                >
                    Consent
                </span>
                <span
                    className="py-1 pl-1 pr-2 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(infoWeCollectRef)}
                >
                    Information <br/> we collect
                </span>
                <span
                    className="py-1 pl-1 pr-2 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(hoWeManageYourInfoRef)}
                >
                    How we use <br/> your information
                </span>
                <span
                    className="py-1 pl-1 pr-2 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(logFilesRef)}
                >
                    Log Files
                </span>
                <span
                    className="py-1 pl-1 pr-2 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(cookiesAndWebRef)}
                >
                    Cookies and Web <br/> Beacons
                </span>
                <span
                    className="py-1 pl-1 pr-2 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(advertisingPartnersRef)}
                >
                    Advertising Partners <br/> Privacy Policy
                </span>
                <span
                    className="py-1 pl-1 pr-2 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(thirdPartyRef)}
                >
                    Third Party <br/> Privacy Policy
                </span>
                <span
                    className="py-1 pl-1 duration-300 rounded cursor-pointer pr-2transition hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(gdprRef)}
                >
                    GDPR Data <br/> Protection Rights
                </span>
                <span
                    className="py-1 pl-1 pr-2 mb-20 transition duration-300 rounded cursor-pointer hover:text-white hover:bg-blue-500"
                    onClick={() => goToRef(childInfoRef)}
                >
                    Children&apos;s <br/> Information
                </span>
            </div>
            <div className="md:ml-[15rem] ml-0 bg-[#F0F8FF]">
                <div className="pl-10">
                    <h1 className="my-8 text-3xl font-bold">Privacy policy</h1>
                    <div ref={overviewRef}>
                        <h2 className="my-8 text-2xl font-bold">
                            Overview
                        </h2>
                        <p className="mb-4">
                            At <a href="https://freebyz.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Freebyz</a>, accessible from <a href="https://freebyz.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">https://freebyz.com/</a>, one of our main priorities is the privacy of our visitors.
                            This Privacy Policy document contains types of information that is collected and recorded by Freebyz and how we use it.
                            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                        </p>
                       
                        <p className="mb-4">
                            This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the
                            information that they shared and/or collect in Freebyz. This policy is not applicable to any information collected offline
                            or via channels other than this website.
                        </p>
                        <p className="mb-4">Our privacy policy was created with the help of the free privacy policy generator.</p>
                    </div>

                    <p className="mb-4 text-2xl font-bold">Consent</p>
                    <p className="mb-4" ref={consent}>
                        By using our website, you hereby consent to our Privacy policy and agree to its terms.
                    </p>
                    <p className="mb-4 text-2xl font-bold">Information we collect</p>
                    <div ref={infoWeCollectRef}>
                        <p className="mb-4">
                            The personal information that you are asked to provide, and the reasons why you are asked to provide it,
                            will be made clear to you at the point we ask you to provide your personal information.
                        </p>
                        <p className="mb-4">
                            If you contact us directly, we may receive additional information about you such as your name, email address, phone number,
                            the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        </p>
                        <p className="mb-4">
                            When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
                        </p>
                    </div>
                    <p className="my-6 text-2xl font-bold">How we use your information</p>
                    <div ref={hoWeManageYourInfoRef}>
                        <p className="mb-4">
                            We use the information we collect in various ways, including to:
                        </p>
                        <ul className="pl-6 list-decimal">
                            <li className="mb-4">Provide, operate, and maintain our website.</li>
                            <li className="mb-4">Improve, personalize, and expand our website.</li>
                            <li className="mb-4">Understand and analyze how you use our website.</li>
                            <li className="mb-4">Develop new products, services, features, and functionality.</li>
                            <li className="mb-4">
                                Communicate with you, either directly or through one of our partners, including for
                                customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.
                            </li>
                            <li className="mb-4">Send you emails.</li>
                            <li className="mb-4">Find and prevent fraud.</li>
                        </ul>
                    </div>
                    <p className="mb-4 text-2xl font-bold">Log files</p>
                    <div ref={logFilesRef}>
                        <p className="mb-4">
                            Freebyz follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.
                        </p>
                        <p className="mb-4">
                            The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
                            These are not linked to any information that is personally identifiable.
                        </p>
                        <p className="mb-4">
                            The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
                        </p>
                    </div>
                    <p className="mb-4 text-2xl font-bold">Cookies and web beacons</p>
                    <div ref={cookiesAndWebRef}>
                        <p className="mb-4">
                            Like any other website, Freebyz uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited.
                        </p>
                        <p className="mb-4">
                            The information is used to optimize the users' experience by customizing our web page content based on visitors&apos; browser type and/or other information.
                        </p>
                    </div>
                    <p className="mb-4 text-2xl font-bold">
                        Advertising partners privacy policies
                    </p>
                    <div ref={advertisingPartnersRef}>
                        <p className="mb-4">
                            You may consult this list to find the Privacy Policy for each of the advertising partners of Freebyz. Third-party ad servers or ad networks uses technologies like cookies, JavaScript,
                            or Web Beacons that are used in their respective advertisements and links that appear on Freebyz, which are sent directly to users&apos; browser.
                        </p>
                        <p className="mb-4">
                            They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                        </p>
                        <p className="mb-4">
                            Note that Freebyz has no access to or control over these cookies that are used by third-party advertisers.
                        </p>
                    </div>
                    <p className="mb-4 text-2xl font-bold">Third party privacy policies</p>
                    <div ref={thirdPartyRef}>
                        <p className="mb-4">
                        <a href="https://freebyz.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Freebyz</a>&apos;s privacy policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.
                            It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options.
                        </p>
                        <p className="mb-4">
                            To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites. CCPA Privacy Rights (Do Not Sell My Personal Information). Under the CCPA, among other rights, California consumers have the right to:
                        </p>
                        <ul className="pl-6 list-decimal">
                            <li className="mb-4">Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                            <li className="mb-4">Request that a business delete any personal data about the consumer that a business has collected.</li>
                            <li className="mb-4">Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data..</li>
                        </ul>
                        <p className="mb-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                    </div>
                    <p className="mb-4 text-2xl font-bold">GDPR data protection rights</p>
                    <div ref={gdprRef}>
                        <p className="mb-4">
                            We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
                        </p>
                        <ul className="pl-6 list-decimal">
                            <li className="mb-4">The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                            <li className="mb-4">The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. </li>
                            <li className="mb-4">The right to erasure – You have the right to request that we erase your personal data, under certain conditions..</li>
                            <li className="mb-4">The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain condition</li>
                            <li className="mb-4">The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions. </li>
                            <li className="mb-4">TThe right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions. </li>
                        </ul>
                        <p className="mb-4">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>
                    </div>

                    <div ref={childInfoRef}>
                        <p className="mb-4 text-2xl font-bold">Children&apos;s information</p>
                        <p className="mb-4">
                            Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                        </p>
                        <p className="mb-4">
                        <a href="https://freebyz.com/" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Freebyz</a> does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website,
                            we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy;