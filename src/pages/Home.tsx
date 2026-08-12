import { EstateCards } from "../Components/Cards/EstateCards"
import { Slider } from "../Components/Slider/SliderImages"
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
        <div >
            <Slider />
            {data && getRandomEstates(data).map((estate: DataEstate) => {
                return (
                    <EstateCards EstateData={estate} key={estate.id} />
                )
            })}
        </div>
    )
}