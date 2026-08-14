import { EstateCards } from "../Components/Cards/EstateCards";
import { GridContainer } from "../Components/GridContainer/GridContainer";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import type { DataEstate } from "../types/dataTypes";

export const EstatePage = () => {
    const { data: estateData } = useFetch<DataEstate[]>(
        import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates"
    );

    const [sortOption, setSortOption] = useState<"none" | "price" | "size" | "rooms">("none");
    const [filterOption, setFilterOption] = useState<"all" | "villa" | "estate" | "coop">("all");

    const sortArray = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSortOption(event.target.value as "none" | "price" | "size" | "rooms");
    };

    const filterArray = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterOption(event.target.value as "all" | "villa" | "estate" | "coop");
    };

    const displayedEstates = [...(estateData ?? [])]
        .filter((estate) => {
            if (filterOption === "villa") return estate.type.name === "Villa";
            if (filterOption === "estate") return estate.type.name === "Ejendomsbolig";
            if (filterOption === "coop") return estate.type.name === "Andelsbolig";
            return true;
        })
        .sort((a, b) => {
            if (sortOption === "price") return b.price - a.price;
            if (sortOption === "size") return b.floorSpace - a.floorSpace;
            if (sortOption === "rooms") return b.numRooms - a.numRooms;
            return 0;
        });
    return (
        <>
            <div>
                <h1>Estate</h1>

                <select value={sortOption} onChange={sortArray}>
                    <option value={"none"}>Ingen sortering</option>
                    <option value={"price"}>Pris</option>
                    <option value={"size"}>Størrelse</option>
                    <option value={"rooms"}>Værelser</option>
                </select>

                <select value={filterOption} onChange={filterArray}>
                    <option value={"all"}>Alle boligtyper</option>
                    <option value={"villa"}>Villa</option>
                    <option value={"estate"}>Ejendomsbolig</option>
                    <option value={"coop"}>Andelsbolig</option>
                </select>
            </div>

            <GridContainer
                styleProps={{
                    gridTemplateColumns: "repeat(3, 1fr)",
                    width: "80%",
                    margin: "auto",
                }}
            >
                {displayedEstates.map((estate: DataEstate) => (
                    <EstateCards EstateData={estate} key={estate.id} />
                ))}
            </GridContainer>
        </>
    );
};