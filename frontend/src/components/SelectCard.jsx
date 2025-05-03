import {useState, useEffect, useRef} from "react";
import '../CSS/Background.css';
import '../CSS/Global.css';
import '../CSS/SelectCard.css';
import '../CSS/Utility.css';

const SelectCard = (props) => {
    const [isHovering, setIsHovering] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const cardRef = useRef(null);

    const {title, children} = props;
    
    return (
    <div ref={cardRef} className={`card-border primary-border select-card ${isHovering && 'mouse-effect'} ${isOpen && 'border-opened'}`}>
        <div className={`card-heading ${isOpen && 'card-heading-open'}`}>
            <button id="card-button" className="select-card-button" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onClick={() => setIsOpen(!isOpen)}>
                <h2 className={`select-card-title ${isOpen && `select-card-title-open`}`}>{title}</h2>
            </button>
            <span id="state-icon" className={`select-card-icon ${isOpen && 'rotate-icon'}`}>+</span>
        </div>

        {isOpen && (
                <div className="card-content">
                    {children}
                </div>
            )
        }
    </div>
    )
}

export default SelectCard;