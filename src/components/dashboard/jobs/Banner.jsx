const Banner = ({ imageUrl }) => {
    return (
        <div className="flex justify-center my-4">
            <img src={imageUrl} alt="Advertisement" className="h-auto max-w-full rounded-lg shadow-lg" />
        </div>
    );
};

export default Banner;