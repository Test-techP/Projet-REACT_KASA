import { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/icons/arrow_back_ios-24px.svg";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleCollapse() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse">
            <button
                className="collapse__header"
                onClick={toggleCollapse}
                aria-expanded={isOpen}
            >
                <span>{title}</span>

                <img
                    src={arrow}
                    alt=""
                    className={`collapse__arrow ${
                        isOpen ? "collapse__arrow--open" : ""
                    }`}
                />
            </button>

            <div
                className={`collapse__wrapper ${
                    isOpen ? "collapse__wrapper--open" : ""
                }`}
            >
                <div className="collapse__content">
                    {Array.isArray(content) ? (
                        <ul className="collapse__list">
                            {content.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{content}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Collapse;