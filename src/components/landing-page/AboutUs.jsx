import JobNumbers from "./JobNumbers";
import OurGoal from "./OurGoal";

const AboutUs = () => {
    return (
            <div>
                    <div className="container">
                        <div className="flex flex-col items-center justify-between text-xl md:flex md:flex-row md:items-start md:justify-between md:text-sm">
                            <h1 className="mt-20 text-4xl font-medium leading-10 w-fit md:text-3xl">We are making it easy for you to make money legitimately. </h1>
                            <p className="mt-20 text-sm">Freebyz is an affiliate marketing and remote jobs portal by Dominahl Technology LLC.
                            Freebyz is a project borne out of our keen passion to connect small and medium scale businesses,
                            creators and entrepreneurs globally with online workers who will work and earn money online legitimately.</p>
                    </div> 
                
                    <div className="flex justify-center gap-6 mt-8">
                        <img src="/images/keyboard.png" alt="keyboard-image" />
                     
                        <img src="/images/keyboard2.png" alt="keyboard-image2" className="hidden md:block" />
                      
                        <img src="/images/dollar.png" alt="dollar-image" className="hidden lg:block" />
                    </div>

                    <div className="mt-8">
                        <p className="mt-8">
                        Since 2018, we have published Job opportunities to millions of Job seekers via our blog - www.myhotjobz.com.
                        Our new digital solution, Freebyz was designed to help millions of online businesses, digital creators and
                        freelancers and remote job seekers create wealth from online jobs and our affiliate marketing referral rewards.
                        </p>
                        <p className="mt-8">
                        Dominahl Technology LLC is a software company that develops digital solutions in the Fintech, Online & on-site Jobs,
                        Educations and Business Ecosystems. Our Web based solutions are subscription based services rendered via our online platforms.
                        Our digital solutions are based on our core values of integrity and promised value delivery. We aim at excellence and maintain
                        decency and best practices in all our partnership deals.
                        </p>
                        <p className="mt-8">
                        We have about 4 products currently in the market, we have two Job portals; myhotjobz.com for on-site jobs and freebyz.com for online/remote jobs;
                        e-portal for automating teaching and results processing in primary, secondary & tertiary institutions; and a products in pipeline for telecommunication services.
                        We equally offer digital training and certifications to our clients and customers.
                        </p>
                    </div>
                    <JobNumbers />
                
                </div>
                <OurGoal />
        </div>
    )
}

export default AboutUs;