import { useParams } from "react-router"
import { useFetch } from "../hooks/useFetch"
import type { EstateDataByID } from "../types/DataTypesById"



export const EstateDetails = () => {

    const { id } = useParams()
    const { data } = useFetch<EstateDataByID>(import.meta.env.VITE_PUBLIC_BASE_URL + "/api/estates/" + id)

    console.log(data)
    return (
        <>
           
        </>
    )
}