import { useFetchData } from "../utils/hooks";
import LoadingSpinner from "../components/LoadingSpinner";
import Banner from "../components/Banner";
import HousingCard from "../components/HousingCard";

function HomePage() {
	//Fetch mocked data, error and loading state with custom hook
	const { dataArray, error, isDataLoading } = useFetchData(
		"data/logements.json"
	);

	//Banner's title text content
	const TitleText: string = "Chez vous, partout et ailleurs";

	return (
		<main className="main-home">
			{isDataLoading ? (
				<LoadingSpinner />
			) : (
				<>
					<Banner page="home" text={TitleText} />

					<section className="housing-offers">
						{error ? (
							<p className="error-msg">
								Oups! Suite à une erreur, les données des
								logements n'ont pu être chargées.
							</p>
						) : (
							<ul className="housing-offers__list">
								{dataArray.map(housingOffer => {
									return (
										<li key={housingOffer.id}>
											<HousingCard
												offerID={housingOffer.id}
												offerTitle={housingOffer.title}
												offerCover={housingOffer.cover}
											/>
										</li>
									);
								})}
							</ul>
						)}
					</section>
				</>
			)}
		</main>
	);
}

export default HomePage;
