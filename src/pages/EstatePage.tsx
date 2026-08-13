import { EstateCards } from "../Components/Cards/EstateCards";
import { GridContainer } from "../Components/GridContainer/GridContainer";

import { useFetch } from "../hooks/useFetch";
import type { DataEstate } from "../types/dataTypes";


export const EstatePage = () => {
    const { data: estateData } = useFetch<DataEstate[]>(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates")


    const sortArray = () => {
        
    }


    return (
        <>
            <div>
                <h1>Estate</h1>
                <select onChange={(event) => { }}>
                    <option value={'price'}>Pris</option>
                    <option value={'size'}>Størrelse</option>
                    <option value={'onMarket'}>Liggetid</option>
                </select>
            </div>
            <GridContainer styleProps={{
                gridTemplateColumns: "repeat(3, 1fr)",
                width: "80%",
                margin: "auto",
            }}>
                {estateData && estateData.map((estate: DataEstate) => {
                    return (
                        <EstateCards EstateData={estate} key={estate.id} />
                    )
                })}
            </GridContainer>
        </>
    )
}