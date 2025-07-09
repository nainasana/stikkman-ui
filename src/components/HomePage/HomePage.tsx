import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const HomePage=()=> {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate("/sukoon-villa");
    }
  
    return (
      <>
        <Header />
        <div className="page-container">
          <div className="hyperbolasUpper">
            <div className="projects-title">
              Our <span className="highlight">Projects</span>
            </div>
            <span className="subtext">
              Web UX <span className="arrow">⌄</span>
            </span>
          </div>
  
          <ImageCarousel />
  
          <div className="hyperbolasLower">
            <button className="all-projects-button" onClick={handleClick}>+ All Projects</button>
          </div>
        </div>
      </>
    );
  }

export default HomePage;