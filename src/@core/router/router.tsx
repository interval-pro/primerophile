import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../../@pages/error-page/error-page';
import { HomePage } from '../../@pages/home-page/home-page';
import { PatternsPage } from '../../@pages/patterns-page/patterns-page';

export const MainRouter = () => {
    return (     
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/pattern/:pattern' element={ <PatternsPage />}></Route>
                <Route path='/error' element={<ErrorPage />} />
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
};
