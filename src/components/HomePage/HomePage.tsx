import { linkedinIcon } from '../../assets/icons';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1 className="greeting">Hi, I'm Jonathan</h1>
      <h1 className="div1">Test Div 1</h1>

      <h1 className="div2">Test Div 2</h1>

      <h1 className="div3">Test Div 3</h1>

      <div className="social-media-icons">
        <a href="https://www.linkedin.com/in/jonathan-calso/"><img src={linkedinIcon} alt="LinkedIn"/></a>
      </div>
    </div>
  );
}

export default HomePage;