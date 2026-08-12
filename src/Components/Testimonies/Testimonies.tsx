import style from './Testimonies.module.scss'


export const Testimonies = () => {
    return (
        <article className={style.testimonies}>
            <h2>Det siger vores kunder</h2>

            <section>
                <b>Vi fandt vores drømmehus</b>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia saepe perferendis odit voluptate quod sit obcaecati hic reiciendis ipsam necessitatibus, fuga minus, vero et fugiat dignissimos atque dicta dolore esse!
                </p>
                <span>
                    <button>skriv en anmeldelse</button>
                </span>
            </section>
        </article>
    )
}