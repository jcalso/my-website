import { linkedinIcon } from '../../assets/icons';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="greeting">Hi, I'm Jonathan</h1>
      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/jonathan-calso/"><img src={linkedinIcon} alt="LinkedIn"/></a>
      </div>
    </div>
  );
}

export default HomePage;