import { Navigate,useParams } from "react-router-dom";
import { HousingData,useFetchData } from "../utils/hooks";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect,useState } from "react";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import HousingTag from "../components/HousingTag";
import StarRating from "../components/StarRating";

function Housing() {
    //Retrieve housing ID in URL params
    const { housingID } = useParams();

    //Fetch mocked data, error and loading state with custom hook
    const { dataArray,error,isDataLoading } = useFetchData('http://localhost:3000/data/logements.json');

    //To store current housing data (or undefined if housing ID isn't valid)
    const [currentHousingData,setCurrentData] = useState<HousingData | undefined | null>(null);

    useEffect(() => {
        //When dataArray is loaded, try to find current housing data
        if (dataArray.length > 0) {
            setCurrentData(dataArray.find(data => data.id === housingID));
        }
    },[dataArray,housingID]);

    //API error handling
    if (error) {
        return (<main className="main-housing">
            <p className="error-msg">Oups! Suite à une erreur, les données du logement n'ont pu être chargées.</p>
        </main>);
    }

    //redirect to Error Page if housing ID isn't valid
    if (currentHousingData === undefined) {
        return (<Navigate to="/error" replace />);
    }

    return (<main className="main-housing">
        {isDataLoading ? (
            <LoadingSpinner />
        ) : (
            currentHousingData &&
            <>
                <Slideshow
                    pictureArray={currentHousingData.pictures}
                    housingTitle={currentHousingData.title}
                />

                <section className="general-infos-section">
                    <div className="housing-left-part">
                        <h1>{currentHousingData.title}</h1>

                        <p>{currentHousingData.location}</p>

                        <div className="housing-left-part__tags">
                            {currentHousingData.tags.map((tag,index) => <HousingTag key={index} tag={tag} />)}
                        </div>
                    </div>

                    <div className="housing-right-part">
                        <div className="housing-host">
                            <span className="housing-host__name">{currentHousingData.host.name}</span>

                            <span className="housing-host__pic">
                                <img src={currentHousingData.host.picture} alt={currentHousingData.host.name} />
                            </span>
                        </div>

                        <div className="housing-right-part__rating">
                            <StarRating rating={currentHousingData.rating} />
                        </div>
                    </div>
                </section>

                <section className="spec-infos-section">
                    <Collapse page="housing" title="Description" textContent={currentHousingData.description} />

                    <Collapse page="housing" title="Équipements" textContent={currentHousingData.equipments} />
                </section>
            </>
        )}
    </main>);
}

export default Housing;