import JobNumbers from "./JobNumbers";
import OurGoal from "./OurGoal";
import { useState, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";


const steps = [
    {
        title: "Connecting Job Seekers",
        content:
            "Since 2018, we have published job opportunities to millions of job seekers via our blog - www.myhotjobz.com.",
    },
    {
        title: "Empowering Online Workers",
        content:
            "Freebyz was designed to help online businesses, digital creators, and freelancers create wealth from online jobs and our affiliate marketing referral rewards.",
    },
    {
        title: "Innovative Digital Solutions",
        content:
            "Dominahl Technology LLC develops digital solutions in Fintech, Online & On-site Jobs, Education, and Business Ecosystems.",
    },
    {
        title: "Training and Certifications",
        content:
            "We offer digital training and certifications to our clients and customers, ensuring best practices and value delivery.",
    },
];

const AboutUs = () => {
    const [activeStep, setActiveStep] = useState(0);
    const controls = useAnimationControls();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;
            const stepHeights = steps.map((_, index) =>
                document.getElementById(`step-${index}`)?.offsetTop || 0
            );

            let newStep = activeStep;
            for (let i = 0; i < stepHeights.length; i++) {
                if (scrollPosition >= stepHeights[i]) {
                    newStep = i;
                }
            }

            if (newStep !== activeStep) {
                setActiveStep(newStep);
                controls.start({ height: `${(newStep / (steps.length - 1)) * 100}%`, backgroundColor: "#2563eb" });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeStep, controls]);

    return (
        <div>
            <div className="container relative">
                <div className="absolute top-0 left-0 z-20 w-full text-center md:top-10">
                    <p className="text-xl font-bold text-blue-500 md:text-2xl">OUR JOURNEY</p>
                    <div className="w-32 h-1 mx-auto mt-1 bg-blue-500"></div>
                </div>

                <div className="container relative flex flex-col pt-10 mt-20 md:flex-row md:pt-32">
                   
                    <div className="flex flex-col md:w-full">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                id={`step-${index}`}
                                className={`flex items-center my-10 ${index % 2 === 0 ? "justify-start" : "justify-start md:justify-end"}`}
                            >
                                <div
                                    className={`p-6 rounded-lg w-3/4 md:w-1/2 shadow-lg transition-all duration-500 ${activeStep >= index ? "bg-blue-500 text-white" : "bg-gray-200 text-black"}`}
                                >
                                    <h2 className="text-xl font-bold md:text-2xl">{step.title}</h2>
                                    <p className="mt-2 text-xs md:text-xl">{step.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                   
                    <div className="absolute flex flex-col items-center h-full px-4 right-5 md:left-1/2 -translate-x-0 md:-translate-x-1/2">
                        <motion.div
                            className="absolute w-1 bg-gray-300 rounded"
                            initial={{ height: "10%", backgroundColor: "#D1D5DB" }}
                            animate={controls}
                            style={{ maxHeight: "calc(100% - 130px)" }}
                        />
                    </div>
                </div>

               
                <div className="relative" id="jobNumbers">
                    <JobNumbers />
                </div>
            </div>
            <OurGoal />
        </div>
    );
};
export default AboutUs;