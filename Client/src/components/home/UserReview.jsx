import Review from "./Review";

const UserReview = () => {
    return (
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Review />
            <Review />
            <Review />
            <Review />
        </div>
    );
};

export default UserReview;