import { Navigate,useParams } from "react-router-dom";
import { HousingData,useFetchData } from "../utils/hooks";
import LoadingSpinner from "../components/LoadingSpinner";
import { useEffect,useState } from "react";
import Slideshow from "../components/Slideshow";

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
            </>
        )}
    </main>);
}

export default Housing;