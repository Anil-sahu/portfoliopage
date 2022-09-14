

import React from "react";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;

function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);


    const myIntro = [
        <div className="heading2"> HELLO! I'M ANIL.<br></br><strong>&</strong> <br></br>I'M A DEVELOPER.</div>,

        <h3 className="heading3">Developer, FLutter Framework, Firebase,.<br></br> Dart programming language, Java programming Language,<br></br> HTML&HTML5, CSS&CSS3,SASS, javaScript, RestApi</h3>,
        <div className="paragraph">I'm a Flutter Android Application developer and web Developer, <br></br>but still exploring other technologies and frameworks that catch my interest!<br></br> if you're looking for a developer to add to your team,<br></br> I'd love to hear from you</div>
        // "<h4><strong>Note:-</strong> Now I'm looking an opportunity</h4> "
    ];

    return (
        <div className="slideshow">
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {colors.map((backgroundColor, index) => (
                    <div
                        className="slide"
                        key={index}
                        style={{ backgroundColor }}>



                        {myIntro[index]}

                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {colors.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default Slideshow;