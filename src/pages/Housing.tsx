import { useParams } from "react-router-dom";

function Housing() {
    const { housingID } = useParams();

    return (<div>Housing page : {housingID}</div>);
}

export default Housing;