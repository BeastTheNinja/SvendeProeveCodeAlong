import { EstateCards } from "../Components/Cards/EstateCards"
import { FlexContainer } from "../Components/FlexContainer/FlexContainer"
import { Slider } from "../Components/Slider/SliderImages"
import { Testimonies } from "../Components/Testimonies/Testimonies"
import { useFetch } from "../hooks/useFetch"
import type { DataEstate } from "../types/dataTypes"

export const HomePage = () => {



    const { data: estateData } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates")

    const { data: reviewData } = useFetch(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/reviews")

    console.log(reviewData)

    const getRandomEstates = (estates: DataEstate[]) => {
        const shuffled = [...estates].sort(() => Math.random() - 0.5)
        return shuffled.slice(0, 3)
    }

    return (
        <>
            <Slider />
            <FlexContainer gap={8} dir={"row"} position={"absolute"} xPosition={"10vh"} yPosition={"45vh"}>

                {estateData && getRandomEstates(estateData).map((estate: DataEstate) => {
                    return (
                        <EstateCards EstateData={estate} key={estate.id} />
                    )
                })}
            </FlexContainer>
            <Testimonies reviewData={reviewData ?? []} />
        </>
    )
}