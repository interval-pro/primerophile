import './home-page.scss';
import { ProjectCard } from './project-card/project-card';
import { introText } from './text';

export const HomePage = () => {
    return (     
        <div className="home-page">
            <div className="prime-info">
                <span className='large'>A prime number</span>
                 <span className='rest'>is a whole number greater than 1 whose only factors are 1 and itself</span>
            </div>
            <div className="empty" style={{margin: "3rem 0"}}/>
            <div className="middle-box">{ introText }</div>
            <div className="empty" style={{margin: "3rem 0"}}/>
            <div className="project-list">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className="empty" style={{margin: "3rem 0"}}/>
            <div className="footer">
                <p>Valentin Peshev</p>
                <p>dev.peshev@gmail.com</p>
                <p>Interval Pro® 2022</p>
            </div>
        </div>
    );
};
