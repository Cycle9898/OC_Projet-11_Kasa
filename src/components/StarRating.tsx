//import the SVG file as a react component to easily change color
import { ReactComponent as StarSvg } from '../assets/utils/star-rating.svg';

function StarRating({ rating }: { rating: string }) {
    //Convert the rating to number type
    const ratingNumber: number = parseInt(rating);

    //Initialise an array with 5 states "empty" to use it later with class names
    const starStateArray: string[] = new Array(5).fill("empty");

    //Replace some "empty" by "full" according to the rating number
    starStateArray.fill("full",0,ratingNumber);

    return (<>
        {starStateArray.map((state,index) => <StarSvg key={index} className={`star-logo--${state}`} />)}
    </>);
}

export default StarRating;