import slider1 from '../../assets/sliderImages/apartment-1.jpg'
import slider2 from '../../assets/sliderImages/apartment-2.jpg'
import slider3 from '../../assets/sliderImages/apartment-3.jpg'
import { useState } from 'react'
import styles from './SliderImage.module.scss'

export const Slider = () => {

    // billederne skal i et array
    // back and forth
    const [sliderIndex, setSliderIndex] = useState(0)
    const SliderImages = [slider1, slider2, slider3]

    const forward = () => {
        if (sliderIndex >= SliderImages.length - 1) {
            setSliderIndex(0)
        } else {
            setSliderIndex(prev => prev + 1)
        }
    }
    const backward = () => {
        if (sliderIndex === 0) {
            setSliderIndex(SliderImages.length - 1)
        } else {
            setSliderIndex(prev => prev - 1)
        }
    }

    return (
        <figure className={styles.sliderStyle}>

            <img src={SliderImages[sliderIndex]} alt="Apartment-1" />
            <figcaption>
                <button onClick={backward}>Previous</button>
                <button onClick={forward}>Forward</button>
            </figcaption>
        </figure>
    )
}