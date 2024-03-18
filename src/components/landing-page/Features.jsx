import {features} from '../../data/homeData';

const Features = () => {
    return (
       <div className="container mt-8">
            <p className="w-3/4 my-20 text-5xl font-medium leading-10 font-bricolage-grotesque">Amazing platform packed with powerful features just-for-you!!</p>
            <div className='flex items-center gap-8'>
                <div className="flex flex-col w-1/2 gap-4 shrink-0">
                    {
                        features.map((el, i) => (
                            <div key={i}>
                                <p className='text-3xl font-medium leading-10'>{el.title}</p>
                                <p>{el.description}</p>
                            </div>
                        ))
                    }
                </div>
                <img src="/public/images/we.png" alt="we-image" />
            </div>
       </div>
    )
}

export default Features;