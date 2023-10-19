import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center flex-col mt-10">
            <h4 className="text-3xl font-semibold"> Something wrong.. Sorry For that ..</h4>
            <Link to='/'><button className="btn btn-primary mt-5"> Go Back </button></Link>
        </div>
    );
};

export default ErrorPage;