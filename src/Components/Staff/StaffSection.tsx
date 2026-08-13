import styles from './StaffSection.module.scss'
import type { StaffDataTypes } from '../../types/StaffData'

interface StaffSectionProps {
    staffData: StaffDataTypes[]
}

export const StaffSection = ({ staffData }: StaffSectionProps) => {
    return (
        <section className={styles.staffSectionStyle}>
            <h2>Mød vores ansatte</h2>

            <div className={styles.staffGrid}>
                {staffData.map((staffMember) => (
                    <figure key={staffMember.id}>
                        <img
                            src={staffMember.image}
                            alt={`${staffMember.firstname} ${staffMember.lastname}`}
                        />

                        <figcaption>
                            <div className={styles.basicInfo}>
                                <h3>
                                    {staffMember.firstname} {staffMember.lastname}
                                </h3>
                                <p>{staffMember.position}</p>
                            </div>

                            <div className={styles.contactInfo}>
                                <p>Email: {staffMember.email}</p>
                                <p>Telefon: {staffMember.phone}</p>
                            </div>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}