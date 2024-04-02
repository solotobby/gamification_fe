import { kickstartJourney } from "../../data/homeData";

const KickstartJourney = () => {
    return (
        <div className="container mt-8">
            <p className="w-3/4 mt-20 text-5xl font-medium leading-10 font-bricolage-grotesque">Kick-start your journey to financial emancipation</p>
            <p className="mb-8">Here’s how Freebyz works.</p>
                <div className="flex gap-4 ">
                    {
                        kickstartJourney.map((el, i) => (
                            <div key={i} className="flex-grow p-5 bg-customGray">
                                <p className='text-3xl font-medium leading-10'>{el.title}</p>
                                <p>{el.description}</p>
                                <img src={el.image} alt="kickstart-journey-image" />
                            </div>
                        ))
                    }
                </div>
                <button className="p-4 my-8 text-white rounded-full bg-customBlue">Sign up for free</button>
    </div>
    )
};

export default KickstartJourney;