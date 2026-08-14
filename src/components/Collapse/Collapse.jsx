import { useState } from "react";
import "./Collapse.css";

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

                <span
                    className={`collapse__arrow ${isOpen ? "collapse__arrow--open" : ""
                        }`}
                >
                    ▲
                </span>
            </button>

            {isOpen && (
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
            )}
        </div>
    );
}

export default Collapse;