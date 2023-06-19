import { Link } from "react-router-dom";

type Props = {
    offerID: string
    offerTitle: string
    offerCover: string
}

function HousingCard({ offerID,offerTitle,offerCover }: Props) {
    return (<Link to={`/housing/${offerID}`} className="card-link">
        <article className="main-card">
            <div className="main-card__img">
                <img src={offerCover} alt={offerTitle} />
            </div>

            <div className="main-card__title">
                <h2>{offerTitle}</h2>
            </div>
        </article>
    </Link>);
}

export default HousingCard;