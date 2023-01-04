import "./patterns-page.scss";
import { useParams } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { TestPattern } from "./test-pattern/test-pattern";

export const projectsList = [
    { name: 'test', path: 'test', C: TestPattern},
    { name: 'p2', path: 'p2', C: () => <div> This is Pattern 2</div>},
    { name: 'p3', path: 'p3', C: () => <div> This is Pattern 3</div>},
];

export const PatternsPage = () => {
    const params = useParams();
    const pattern = params.pattern;
    const currentPattern = projectsList.find(p => p.path === pattern);
    if (!currentPattern?.C) return <Navigate to='/error' />;
    const PatternComponent = currentPattern.C;
    return (
        <div className="patterns-page">
            <div className="pattern">
                <PatternComponent />
            </div>
        </div>
    )
};
