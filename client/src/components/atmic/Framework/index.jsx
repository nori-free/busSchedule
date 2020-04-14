import * as React from "react";
import styled from "styled-components";
import { color } from "../../style";

export const Body = styled.div({
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    background: color.jetBlack,
    color: color.pureWhite,
})

const headerFontStyle = {
    color: color.pureWhite,
    fontSize: "21px",
    fontWeight: 600,
    lineHeight: "24px",
    fontFamily: '"SF Pro JP", "SF Pro Display", "SF Pro Icons", "Hiragino Kaku Gothic Pro", "ヒラギノ角ゴ Pro W3", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "Helvetica Neue", Helvetica, Arial, sans-serif'
}

const HeaderComponent = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "52px",
    borderBottom: "solid 1px rgba(255, 255, 255, .16)",
    alignItems: "center",
    padding: "10px 15px",
    boxSizing: "border-box",
})

const HeaderCore = styled.div({
    display: "flex",
    width: "100%",
    maxWidth: "1024px",
    height: "51px",
    padding: "0 22px",
    boxSizing: "border-box",
})

const Title = styled.h1({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flex: 1,
    ...headerFontStyle,
})

// const animationKeyframes = {
//     "0%": {
//         opacity: 0,
//     },
//     "40%": {
//         opacity: 0.95,
//     },
//     "50%": {
//         opacity: 1,
//     },
//     "60%": {
//         opacity: 0.95,
//     },
//     "100%": {
//         opacity: 0,
//     }
// }

const TickCore = styled.span({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: "10px",
    boxSizing: "border-box",
    ...headerFontStyle,
    // animation: "flash 1.5s infinite linear",
    // webkitAnimation: "flash 1.5s infinite linear",
    // mozAnimation: "flash 1.5s infinite linear",
    // "@keyframes flash": animationKeyframes,
    // "@-webkit-keyframes flash": animationKeyframes,
    // "@-moz-keyframes flash": animationKeyframes
})

const Tick = () => {
    const [date, setDate] = React.useState(new Date())
    const tick = () => setDate(new Date())
    React.useEffect(() => {
        const timerId = setInterval(
            () => tick(),
            1000
        )
        return (
            clearInterval(timerId)
        )
    })
    if (Number(date.getHours()) < 10) {
        return (<TickCore>{(" " + date.getHours())}:{("0" + date.getMinutes()).slice(-2)}</TickCore>)
    }else {
        return (<TickCore>{("0" + date.getHours()).slice(-2)}:{("0" + date.getMinutes()).slice(-2)}</TickCore>)
    }
}

export const Header = () => {
    // setInterval(Tick, 1000)
    return (
        <HeaderComponent>
            <HeaderCore>
                <Title>バス発車標</Title>
                <Tick />
            </HeaderCore>
        </HeaderComponent>
    )
}