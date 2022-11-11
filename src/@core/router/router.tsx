import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../../@pages/error-page/error-page';
import { HomePage } from '../../@pages/home-page/home-page';

export const MainRouter = () => {
    return (     
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
