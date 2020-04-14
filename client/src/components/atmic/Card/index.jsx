import * as React from "react";
import styled, { css, keyframes } from "styled-components";

const center = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}

const keyframeA = `{ opacity: 0; }`
const keyframeB = `{ opacity: 0.95; }`
const keyframeC = `{ opacity: 1; }`

const animationKeyframes = keyframes`
    0% ${ keyframeA }
    40% ${ keyframeB }
    50% ${ keyframeC }
    60% ${ keyframeB }
    100% ${ keyframeA }
`

const CardWrapper = styled.tr`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 101px;
    padding: 10px 15px;
    border-bottom: solid 1px rgba(255, 255, 255, .16);
    box-sizing: border-box;
    ${props => props.soon && (
        css`animation: 1s ${animationKeyframes} infinite linear;
        -webkit-animation: 1s ${animationKeyframes} infinite linear;
        -moz-animation: 1s ${animationKeyframes} infinite linear;
    `)}
`

const SystemWrapper = styled.td({
    ...center,
    justifyContent: "flex-start",
    flexDirection: "row",
    flex: 1,
    maxWidth: "400px"
})

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 40px;
    height: 40px;
    line-height: 20px;
    margin: 24px;
    border-radius: 6px;
    border: solid 6px ${props => props.borderColor || "#fff"};
    background: ${props => props.background || "#000"};
    color: ${props => props.color || "#fff"};
    font-weight: 700;
    font-size: 20px;
`

const IconDummy = styled.div({
    display: "flex",
    width: "40px",
    height: "40px",
    margin: "30px",
})

const Text = styled.td({
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "column",
    lineHeight: "50px",
    margin: "25px 15px",
})

const Japanese = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    lineHeight: "32px",
    color: "#fff",
    fontWeight: 700,
    fontSize: "36px",
})

const English = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    lineHeight: "20px",
    color: "#fff",
    fontWeight: "normal",
    fontSize: "15px",
})

const SystemIcon = ({system, theme}) => {
    switch(system) {
        case "北3":
            return (
                <Icon borderColor={theme} background={"#fff"} color={"#000"}>北3</Icon>
            )
        case "40":
            return (
                <Icon borderColor={theme} background={"#fff"} color={"#000"}>40</Icon>
            )
        case "40直行":
            return (
                <Icon borderColor={theme} background={"#fff"} color={"#000"}>40<br /><small>直行</small></Icon>
            )
        case 32:
            break
        case "34":
            break
        case "35":
            break
        case "35rapid":
            return (
                <Icon borderColor={theme} background={"#fff"} color={"#000"}>35<br /><small>快速</small></Icon>
            )
        case "36":
            break
        case "36直行":
            return (
                <Icon borderColor={theme} background={"#fff"} color={"#000"}>36<br /><small>直行</small></Icon>
            )
        default:
            return (
                <IconDummy />
            )
    }
    return <></>
}

const JandE = ({japanese, english, ...style}) => {
    return (
        <Text style={{...style, maxWidth: "300px"}}>
            <Japanese>{japanese}</Japanese>
            <English>{english}</English>
        </Text>
    )
}

const JandE2 = ({japanese, english, style}) => {
    return (
        <Text style={style}>
            <Japanese style={{justifyContent: "center"}}>{japanese} 行き</Japanese>
            <English>Bounds for {english}</English>
        </Text>
    )
}

const JandE3 = ({time, style}) => {
    return (
        <Text style={{...style, width: "110px", alignItems: "flex-end"}}>
            <Japanese style={{justifyContent: "center", marginBottom: "20px"}}>{time}</Japanese>
        </Text>
    )
}

const System = ({system}) => {
    switch(system) {
        case "北3":
            return (
                <JandE japanese={`${system}系統`} english={`The north No3 Bus`} style={{flex: 1}} />
            )
        case "32":
        case "34":
        case "35":
        case "36":
        case "40":
            return (
                <JandE japanese={`${system}系統`} english={`The Kyoto bus No${system}`} style={{flex: 1}} />
            )
        case "35rapid":
            return (
                <JandE japanese={`35系統 快速`} english={`The Kyoto bus No${system} rapid service`} style={{flex: 1}} />
            )
        case "36直行":
            return (
                <JandE japanese={`36系統 直行`} english={`The Kyoto bus No36 nonstop service`} style={{flex: 1}} />
            )
        case "40直行":
            return (
                <JandE japanese={`40系統 直行`} english={`The Kyoto bus No40 nonstop service`} style={{flex: 1}} />
            )
        case "上賀茂シャトル":
            return (
                <JandE japanese={`上賀茂シャトル`} english={`Kamigamo shuttle bus`} style={{flex: 1}} />
            )
        case "二軒茶屋シャトル":
            return (
                <JandE japanese={`二軒茶屋シャトル`} english={`Niken-chaya shuttle bus`} style={{flex: 1}} />
            )
    }
    return <></>
}

const BoundsFor = ({props}) => {
    return <JandE2 japanese={props.japanese} english={props.english} style={{maxWidth: "450px", flex: 1}}/>
}

export const Card = ({props}) => {
    console.log(animationKeyframes)
    return (
        <CardWrapper soon={props.soon}>
            <SystemWrapper>
                <SystemIcon system={ props.system } theme={ props.theme } />
                <System system={ props.system } />
            </SystemWrapper>
            <JandE3 time={props.departureTime} />
            {/* <DepartureTime>{props.departureTime}</DepartureTime> */}
            <BoundsFor props={props.boundsFor} />
        </CardWrapper>
    )
}