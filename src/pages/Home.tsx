import { EstateCards } from "../Components/Cards/EstateCards"
import { FlexContainer } from "../Components/FlexContainer/FlexContainer"
import { Slider } from "../Components/Slider/SliderImages"
import { Testimonies } from "../Components/Testimonies/Testimonies"
import { useFetch } from "../hooks/useFetch"
import type { DataEstate } from "../types/dataTypes"

export const HomePage = () => {
    const { data } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates")

    const getRandomEstates = (estates: DataEstate[]) => {
        const shuffled = [...estates].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 3)
    }

    console.log(data)
    return (
        <>
            <Slider />
            <FlexContainer gap={8} dir={"row"} position={"absolute"} xPosition={"10vh"} yPosition={"45vh"}>

                {data && getRandomEstates(data).map((estate: DataEstate) => {
                    return (
                        <EstateCards EstateData={estate} key={estate.id} />
                    )
                })}
            </FlexContainer>
            <Testimonies />
        </>
    )
}