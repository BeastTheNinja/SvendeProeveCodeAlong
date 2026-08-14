import { EstateCards } from "../Components/Cards/EstateCards"
import { FlexContainer } from "../Components/FlexContainer/FlexContainer"
import { Slider } from "../Components/Slider/SliderImages"
import { StaffSection } from "../Components/Staff/StaffSection"
import { Testimonies } from "../Components/Testimonies/Testimonies"
import { useFetch } from "../hooks/useFetch"
import type { DataEstate } from "../types/dataTypes"
import type { ReviewDataTypes } from "../types/reviewData"
import type { StaffDataTypes } from "../types/StaffData"

export const HomePage = () => {
    const { data: estateData } = useFetch<DataEstate[]>(
        import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates"
    )

    const { data: reviewData } = useFetch<ReviewDataTypes[]>(
        import.meta.env.VITE_PUBLIC_BASE_URL + "/api/reviews"
    )

    const { data: staffData } = useFetch<StaffDataTypes[]>(
        import.meta.env.VITE_PUBLIC_BASE_URL + "/api/staff"
    )

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

            {reviewData && <Testimonies reviewData={reviewData ?? []} />}
            {staffData && <StaffSection staffData={staffData ?? []} />}
        </>
    )
}