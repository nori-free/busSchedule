import * as React from "react";
import styled from "styled-components";
// import busData from "./data";
import {
    Body,
    Header,
    Card,
} from "../../components";

const Content = styled.table({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "1024px",
})

const Tbody = styled.tbody({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    padding: "0 22px",
})

const Sec = styled.section({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: "50px",
    // borderBottom: "solid 1px rgba(255, 255, 255, .16)",
})

const Title = styled.div({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    margin: "10px 0",
    fontSize: "28px",
    color: "#fff",
    fontWeight: 600,
    lineHeight: 1.14286,
})

const TimeTable = () => {
    return (
        <Body>
            <Header />
            <Content>
                <Tbody>
                    <Sec>
                        <Title>まもなく発車</Title>
                        <Card props={{
                            system: "北3",
                            theme: "#007ac0",
                            departureTime: "9:41",
                            boundsFor: {japanese: "北大路バスターミナル", english: "Kitaoji Bus Terminal"},
                            soon: true
                        }} />
                    </Sec>

                    <Sec>
                        <Title>発車案内</Title>
                        <Card props={{
                            system: "上賀茂シャトル",
                            theme: "#007ac0",
                            departureTime: "9:42",
                            boundsFor: {japanese: "上賀茂神社", english: "Kamigamo-jinja shrine"},
                        }} />

                        <Card props={{
                            system: "35rapid",
                            theme: "#00bae8",
                            departureTime: "9:45",
                            boundsFor: {japanese: "出町柳駅前", english: "Demachi-yanagi terminal"},
                        }} />
                        <Card props={{
                            system: "36直行",
                            theme: "#339966",
                            departureTime: "18:00",
                            boundsFor: {japanese: "出町柳駅前", english: "Demachi-yanagi terminal"},
                        }} />
                        <Card props={{
                            system: "40直行",
                            theme: "#f68b1e",
                            departureTime: "18:05",
                            boundsFor: {japanese: "国際会館駅前", english: "Kokusai-kaikan station"},
                        }} />
                        <Card props={{
                            system: "40",
                            theme: "#008000",
                            departureTime: "18:05",
                            boundsFor: {japanese: "国際会館駅前", english: "Kokusai-kaikan station"},
                        }} />
                        <Card props={{
                            system: "二軒茶屋シャトル",
                            theme: "#09357F",
                            departureTime: "18:06",
                            boundsFor: {japanese: "二軒茶屋駅前", english: "Nikenchaya station"},
                        }} />
                    </Sec>
                    

                    
                </Tbody>
                
            </Content>
            {/* <h1>timetable</h1> */}
        </Body>
    )
}

export default TimeTable