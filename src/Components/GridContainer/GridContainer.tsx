import type { CSSProperties, ReactNode } from "react"
import style from "./GridContainer.module.scss"

interface GridContainerProps {
    children: ReactNode
    styleProps?: CSSProperties
}

export const GridContainer = ({ children, styleProps }: GridContainerProps) => {
    return (
        <section className={style.gridContainer} style={styleProps}>
            {children}
        </section>
    )
}