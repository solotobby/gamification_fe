import { kickstartJourney } from "../../data/homeData";

const TrustUs = () => {
    return (
        <div className="py-8 mt-8 bg-blue-500">
            <div className="container">
            <p className="w-3/4 mx-auto mt-20 text-5xl font-medium leading-10 text-center text-white font-bricolage-grotesque">Don’t take our word for it. Over 100k people trust us.</p>
            <p className="my-8 text-center text-white mt-">We don’t just say it, we put it to action and take pride in delivering results to all our users.</p>
                {/* <div className="flex gap-4 ">
                    {
                        kickstartJourney.map((el, i) => (
                            <div key={i} className="flex-grow p-5 bg-customGray">
                                <p className='text-3xl font-medium leading-10'>{el.title}</p>
                                <p>{el.description}</p>
                                <img src={el.image} alt="kickstar-image" />
                            </div>
                        ))
                    }
                </div>
                <button className="p-4 my-8 text-white rounded-full bg-customBlue">Sign up for free</button> */}
                <div className="w-1/2 mx-auto mb-10 bg-white p-14">
                    <h1>“I earn steady income on Freebyz by performing a simple social media tasks,
                    I also use my earnings to buy airtime. It is fast and reliable. Sign up now to get started.”</h1>
                    <h2 className="pt-6">- Salau Muhibat Nifemi Oyefusi</h2>
                </div>
    </div>
        </div>
    )
};

export default TrustUs;