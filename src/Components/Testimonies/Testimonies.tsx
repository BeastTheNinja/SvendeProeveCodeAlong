import style from './Testimonies.module.scss'
import type { ReviewDataTypes } from '../../types/reviewData'
import { useEffect, useState } from 'react'

interface TestimoniesProps {
    reviewData: ReviewDataTypes[]
}

export const Testimonies = ({ reviewData }: TestimoniesProps) => {
    const [reviewIndex, setReviewIndex] = useState(0)

    useEffect(() => {
        if (reviewData.length === 0) return

        const interval = setInterval(() => {
            setReviewIndex((currentIndex) =>
                currentIndex >= reviewData.length - 1 ? 0 : currentIndex + 1
            )
        }, 300000) // 5 minutes in milliseconds

        return () => clearInterval(interval)
    }, [reviewData.length])

    const currentReview = reviewData[reviewIndex]

    if (!currentReview) return null

    return (
        <article className={style.testimonies}>
            <h2>Det siger vores kunder</h2>

            <section>
                <b>{currentReview.user.firstname} {currentReview.user.lastname}</b>
                <p>{currentReview.comment}</p>
                <span>
                    <button>skriv en anmeldelse</button>
                </span>
            </section>
        </article>
    )
}