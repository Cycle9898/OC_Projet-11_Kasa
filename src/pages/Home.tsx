import { useFetchData,HousingData } from "../utils/hooks";
import Banner from '../components/Banner';
import HousingCard from "../components/HousingCard";

function Home() {
    //Fetch mocked data and error state with custom hook
    const { dataArray,error }: { dataArray: HousingData[],error: boolean } = useFetchData('http://localhost:3000/data/logements.json');

    //Banner's title text content
    const TitleText: string = "Chez vous, partout et ailleurs";

    return (<main>
        <Banner page="home" text={TitleText} />

        <section className="housing-offers">
            {error ?
                (<p className="error-msg">Oups! Suite à une erreur, les données des logements n'ont pu être chargées.</p>)
                :
                (<ul className="housing-offers__list">
                    {dataArray.map((housingOffer) => <li key={housingOffer.id}>
                        <HousingCard
                            offerID={housingOffer.id}
                            offerTitle={housingOffer.title}
                            offerCover={housingOffer.cover}
                        />
                    </li>)}
                </ul>)
            }
        </section>
    </main>);
}

export default Home;