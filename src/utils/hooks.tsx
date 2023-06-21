import { useState,useEffect } from "react";

export type HousingData = {
    id: string,
    title: string,
    cover: string,
    pictures: string[],
    description: string,
    host: { name: string,picture: string },
    rating: string,
    location: string,
    equipments: string[],
    tags: string[]
}

export function useFetchData(url: string) {
    //to store API or mocked data
    const [dataArray,setDataArray] = useState<HousingData[]>([]);

    //to store API or mocked error state
    const [error,setError] = useState<boolean>(false);

    //to store if the loading spinner needs to appear or not
    const [isDataLoading,setDataLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!url) { return; }

        setDataLoading(true);

        function fetchData(): void {
            fetch(url)
                .then((response) => response.json())
                .then((json: HousingData[]) => setDataArray(json))
                .catch((error: unknown) => {
                    setError(true);
                    console.log(error);
                });
            setDataLoading(false);
        }

        //Check if mocked data are used and, if needed, simulate network latency to show loading spinner
        if (url.startsWith("http://localhost:3000")) {
            setTimeout(fetchData,300);
        } else {
            fetchData();
        }

    },[url])

    return { dataArray,error,isDataLoading };
}