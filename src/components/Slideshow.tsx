import { useCallback, useEffect, useState } from "react";
import arrowLeft from "../assets/utils/arrow-left.svg";
import arrowRight from "../assets/utils/arrow-right.svg";

type Props = {
	housingTitle: string;
	pictureArray: string[];
};

function Slideshow({ housingTitle, pictureArray }: Props) {
	//to store the current index of picture array
	const [currentIndex, setIndex] = useState<number>(0);

	//change picture in the slideshow
	const previousPicture = (): void => {
		currentIndex === 0
			? setIndex(pictureArray.length - 1)
			: setIndex(previousState => previousState - 1);
	};

	const previousPictureCB = useCallback(previousPicture, [
		currentIndex,
		pictureArray
	]);

	const nextPicture = (): void => {
		currentIndex === pictureArray.length - 1
			? setIndex(0)
			: setIndex(previousState => previousState + 1);
	};

	const nextPictureCB = useCallback(nextPicture, [
		currentIndex,
		pictureArray
	]);

	useEffect(() => {
		const keyboardPreviousPicture = (event: KeyboardEvent) => {
			event.key === "ArrowLeft" && previousPictureCB();
			event.key === "ArrowRight" && nextPictureCB();
		};

		document.addEventListener("keydown", keyboardPreviousPicture);

		return () => {
			document.removeEventListener("keydown", keyboardPreviousPicture);
		};
	}, [previousPictureCB, nextPictureCB]);

	return (
		<section className="ss-section">
			<div className="ss-section__slideshow">
				<img
					src={pictureArray[currentIndex]}
					alt={`${housingTitle}-${currentIndex + 1}`}
				/>
				{pictureArray.length > 1 && (
					<div className="ss-commands">
						<div
							className="ss-commands__previous"
							onClick={previousPicture}>
							<img src={arrowLeft} alt="" />
						</div>

						<span className="ss-commands__counter">{`${
							currentIndex + 1
						}/${pictureArray.length}`}</span>

						<div
							className="ss-commands__next"
							onClick={nextPicture}>
							<img src={arrowRight} alt="" />
						</div>
					</div>
				)}
			</div>
		</section>
	);
}

export default Slideshow;
