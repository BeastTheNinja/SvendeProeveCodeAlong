import style from "./FlexContainer.module.scss"

interface FlexContainerProps {
    children: React.ReactNode
    gap: React.CSSProperties["gap"]
    dir: React.CSSProperties["flexDirection"]
    align?: React.CSSProperties["alignItems"]
    justify?: React.CSSProperties["justifyContent"]
    position: React.CSSProperties["position"]
    xPosition: React.CSSProperties["left"]
    yPosition: React.CSSProperties["top"]
}




export const FlexContainer = ({ children, gap, dir, align, justify, position, xPosition, yPosition }: FlexContainerProps) => {

    const _gap = gap || "8px";
    const _dir = dir || "row";
    const _align = align || "center";
    const _justify = justify || "center";
    const _position = position || "relative";
    const x_Position = xPosition || 0;
    const y_Position = yPosition || 0;

    const local_style: React.CSSProperties = {
        gap: _gap,
        flexDirection: _dir,
        alignItems: _align,
        justifyContent: _justify,
        position: _position,
        left: x_Position,
        top: y_Position
    }


    return <section style={local_style} className={style.flexContainer}>{children}</section>

}