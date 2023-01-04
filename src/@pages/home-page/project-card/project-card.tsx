import './project-card.scss';
import { useNavigate } from 'react-router-dom';

export const ProjectCard = (props: any) => {
    const navigate = useNavigate();
    const { patternConfig } = props;
    if (!patternConfig) navigate('/error');
    const { path } = patternConfig;
    if (!path) navigate('/error');
    const fullPath =`pattern/${path}`;
    return (     
        <div
            className="project-card"
            onClick={() => navigate(fullPath)}
        >
        </div>
    );
};
