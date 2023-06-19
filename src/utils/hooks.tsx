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

    useEffect(() => {
        if (!url) { return; }

        function fetchData(): void {
            fetch(url)
                .then((response) => response.json())
                .then((json: HousingData[]) => setDataArray(json))
                .catch((error: unknown) => {
                    setError(true);
                    console.log(error);
                });
        }

        fetchData();
    },[url])

    return { dataArray,error };
}