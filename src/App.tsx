import "./index.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SukoonVillaPage from "./SukoonVillaPage";
import { useRef, useState, useEffect, CSSProperties } from "react";

const images = ["/r2.png", "/r1.png", "/r2.png", "/s1.jpg"];

export default function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    scrollToImage(0);
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

  const arrowStyle = (position: "left" | "right"): CSSProperties => ({
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    [position]: "calc(50% - 34.3%)", // ✅ Places it into the gap, not overlapping
    color: "#fff",
    cursor: "pointer",
    zIndex: 20,
    fontSize: "22px",
  });

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="main-header">
                <Link to="/sukoon-villa" className="logo">
                  StikkmanUX
                </Link>
                <nav className="main-nav">
                  <a href="#">Projects</a>
                  <a href="#">Careers</a>
                  <a href="#">Services</a>
                  <a href="#">Contact Us</a>
                </nav>
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </header>
              <div style={{ color: "white" }}>
                <div className="hyperbolasUpper">djbvjdfbvhjfbdjvjhdf</div>

                <div style={{ width: "100%" }}>
                  {/* Arrows */}
                  <button onClick={scrollLeft} style={arrowStyle("left")}>
                    &#8592;
                  </button>
                  <button onClick={scrollRight} style={arrowStyle("right")}>
                    &#8594;
                  </button>

                  {/* Image Scroll Container */}
                  <div
                    ref={scrollRef}
                    style={{
                      display: "flex",
                      overflowX: "auto",
                      scrollBehavior: "smooth",
                      gap: "70px",
                      padding: "0 80px",
                      scrollSnapType: "x mandatory",
                    }}
                  >
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`image-${index}`}
                        ref={(el) => {
                          imageRefs.current[index] = el;
                        }}
                        style={{
                          width: "70%",
                          height: "730px",
                          flexShrink: 0,
                          scrollSnapAlign: "center",
                          marginLeft: index === 0 && index !== images.length-1 ? "200px" : "0px",
                          marginRight:
                            index === images.length-1 && index !== 0 ? "200px" : "0px",
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="hyperbolasLower">djbjdfbvjbdfjvbhjdfbv</div>
              </div>
            </>
          }
        />
        <Route path="/sukoon-villa" element={<SukoonVillaPage />} />
      </Routes>
    </Router>
  );
}
