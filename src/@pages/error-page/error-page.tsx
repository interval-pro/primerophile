import './error-page.scss';

export const ErrorPage = () => {
    return (     
        <div className="error-page">
            <span>404 Page Not Found</span>
            <a href='/' className='back'>&lt;&lt; Go to Home Page</a>
        </div>
    );
};
