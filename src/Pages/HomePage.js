import React from "react"
import "./HomePage.css";
import Card from "../Components/Card"
function HomePage() {
    return (
        <div className="home-container ">
            <h1>Home</h1>
            <div className="home-grid">
                <Card title={"IAAF Table Converter"} />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default HomePage;