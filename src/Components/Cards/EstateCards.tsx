import type { DataEstate, EstateImage } from "../../types/dataTypes"
import styles from "./EstateCards.module.scss"

type EstateCardsProps = {
    EstateData: DataEstate
}

export const EstateCards = ({ EstateData }: EstateCardsProps) => {
    const getVillaImage = (imageArray: EstateImage[]) => {
        const hasVillaLabel = imageArray.find((item: EstateImage) =>
            item.image.description.toLowerCase().includes("villa")
        )

        if (hasVillaLabel) {
            return hasVillaLabel.image.filename
        }

        const exteriorImage = imageArray.find((item: EstateImage) => {
            const description = item.image.description.toLowerCase()
            return description.includes("hus") || description.includes("house") || description.includes("eksteriør") || description.includes("exterior")
        })

        return exteriorImage?.image.filename ?? imageArray[0]?.image.filename ?? ""
    }

    const imageSrc = getVillaImage(EstateData.estateImages)

    return (
        <div className={styles.estateCard}>
            <figure>
                <img src={imageSrc} alt={`${EstateData.address}`} />
                <figcaption>
                    <h5>{EstateData.address}</h5>
                    <p>{EstateData.city.name}</p>
                    <p>{EstateData.numRooms} værelser</p>
                    <p>{EstateData.price} kr.</p>
                </figcaption>
            </figure>
        </div>
    )
}