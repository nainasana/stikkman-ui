// components/ImageCarousel.tsx
import { useRef, useState, useEffect } from "react";
import "./ImageCarousel.css";
import { useNavigate } from "react-router-dom";

const images = ["/r1.png", "/r2.png", "/s1.jpg"];
const imageCaptions = [
  "Project One | Web Design",
  "Garuda Aerospace | Web UX",
  "Project Three | UI Revamp",
];

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);

  const navigate = useNavigate();

  const scrollToImage = (index: number) => {
    const container = scrollRef.current;
    const targetImg = imageRefs.current[index];

    if (container && targetImg) {
      const containerRect = container.getBoundingClientRect();
      const imgRect = targetImg.getBoundingClientRect();
      const scrollDiff =
        imgRect.left -
        containerRect.left -
        (container.offsetWidth - targetImg.offsetWidth) / 2;

      container.scrollBy({ left: scrollDiff, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToImage(currentIndex);
  }, []);

  const scrollLeft = () => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    scrollToImage(newIndex);
  };

  const scrollRight = () => {
    const newIndex = Math.min(currentIndex + 1, images.length - 1);
    setCurrentIndex(newIndex);
    scrollToImage(newIndex);
  };

  const handleClick = () => {
    navigate("/sukoon-villa");
  }

  return (
    <div className="carousel-wrapper">
      <button onClick={scrollLeft} className="arrow-button left">&#8592;</button>
      <button
        onClick={currentIndex === images.length - 1 ? () => {} : scrollRight}
        className="arrow-button right"
      >
        &#8594;
      </button>

      <div ref={scrollRef} className="image-scroll-container">
        {images.map((image, index) => (
          <div className="image-slide" key={index}>
            <img
              src={image}
              alt={`image-${index}`}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
              
              className="carousel-image"
            />
          </div>
        ))}
      </div>

      <div className="image-caption">
        {imageCaptions[currentIndex]}
        <span className="view-project" onClick={handleClick}>View Project →</span>
      </div>
    </div>
  );
}
