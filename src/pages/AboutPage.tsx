import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function AboutPage() {
	//Titles and text content of Collapse components
	const collapseTitlesArray: string[] = [
		"Fiabilité",
		"Respect",
		"Service",
		"Sécurité"
	];

	const reliabilityTextContent: string =
		"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.";
	const respectTextContent: string =
		"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.";
	const serviceTextContent: string =
		"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.";
	const securityTextContent: string =
		"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

	const collapseTextContentArray: string[] = [
		reliabilityTextContent,
		respectTextContent,
		serviceTextContent,
		securityTextContent
	];

	return (
		<main className="main-about">
			<Banner page="about" />

			<section className="collapses-section">
				{collapseTitlesArray.map((title, index) => {
					return (
						<Collapse
							key={`${title}-${index}`}
							page="about"
							title={title}
							textContent={collapseTextContentArray[index]}
						/>
					);
				})}
			</section>
		</main>
	);
}

export default AboutPage;
