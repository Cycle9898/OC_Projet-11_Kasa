import { useState } from "react";
import chevronDown from '../assets/utils/chevron-down.svg';
import chevronUp from '../assets/utils/chevron-up.svg';

type Props = {
    page: string,
    title: string,
    textContent: string | string[]
}

function Collapse({ page,title,textContent }: Props) {
    //Opening state of the collapsed element
    const [isOpen,setIsOpen] = useState<boolean>(false);

    //Change the opening state of the collapsed element
    const handleCollapseOpening = () => setIsOpen((previousState: boolean) => !previousState);

    return (<article className={`collapse collapse--${page}`} >
        <div className={`collapse__title collapse__title--${page}`} onClick={handleCollapseOpening}>
            <h2>{title}</h2>
            <div>
                <img src={isOpen ? chevronUp : chevronDown} alt="" />
            </div>
        </div>

        {isOpen && (
            <div className={`collapse__content collapse__content--${page}`}>
                {typeof textContent === "string" ? (
                    <p>{textContent}</p>
                ) : (
                    <ul>
                        {
                            textContent.map((text,index) => <li key={index}><p>{text}</p></li>)
                        }
                    </ul>
                )
                }
            </div>
        )}
    </article>);
}

export default Collapse;