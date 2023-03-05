import React, { useEffect, useState } from "react";
import data from '../../Data/WorldAthletics.json';
import Select from "react-dropdown-select";

import "./Projects.css"

export default function Projects() {
    return (
        <div className="projects-container">
            <PointsCalculator />
        </div>

    )
}

function PointsCalculator() {
    useEffect(() => {
    }, [])

    const [gender, setGender] = useState({ value: 0, name: "Male" });
    const [event, setEvent] = useState({ Event: "100m" });
    const [category, setCategory] = useState({ value: 1, name: "Outdoor" });
    const [performance, setPerformance] = useState(0);
    const [points, setPoints] = useState(null);
    const [total, setTotal] = useState();

    const CalculateTotal = () => {
        var perf = findPerformance(points, gender[0].value, category[0].value, event[0].Event);
        console.log(perf);
        Performances.push(perf);
    }



    return (
        <div className="points-container">
            <h2 className="project-header">World athletics points calculator</h2>
            <p>I could not find an athletics table points for the 2023 atheltics year
                So, naturally I made my own. The 2023 tables are valid with points from 0 to 1400 points.
                <br />
                <br />
                Compare equivalent performances across different athletics events. Note, scores aren’t designed to compare men’s and women’s performances.
                The formula used by this calculator closely matches the official 2017 IAAF Scoring Tables - which are the most recent as of 2019.
            </p>
            <div className="points-grid">
                <h5 className="project-subheader">Event Filters</h5>
                <div className="points-grid--select">
                    <Select options={GenderArr} labelField="name" placeholder="Gender" valueField="value" onChange={(e) => setGender(e)} />
                    <Select options={Events} labelField="Event" placeholder="Event" valueField="Event" onChange={(e) => setEvent(e)} />
                    <Select options={Category} labelField="name" placeholder="Category" valueField="value" onChange={(e) => setCategory(e)} />
                </div>
                <h5 className="project-subheader">Performance</h5>
                <div className="points-grid--performance">
                    {/* <input className="points-input" placeholder="Performance" type="number" onChange={(x) => setPerformance(x)} /> */}
                    <input className="points-input" placeholder="Points" type="text" onChange={(e) => setPoints(e.target.value)} />
                </div>
                <div className="points-button--container">
                    <button type="button" id="calc-button" onClick={() => CalculateTotal()}
                       >Calculate</button>
                </div>
            </div>
            <PerformanceList/>
        </div>
    )
}

function PerformanceList() {
    return (
        <div className="points-table">
            {Performances.map((item) =>
                <div key={item}>
                    {item.Event}
                    {item.Points}
                    {item.Gender}
                    {item.Category}
                </div>
            )}
        </div>
    );
}



var Performances = [];



const findPerformance = (points, gender, category, event) => {
    var foundItem = data.filter(item =>
        item.Points === points// &&
        //item.Gender === gender &&
        //item.Category === category &&
        //item.Event === event
        )[0]; //finds the first event with somewhat matching values
    return foundItem;
}

const GenderArr = [
    { value: 0, name: "Male" },
    { value: 1, name: "Female" },
]
const Category = [
    { value: 0, name: "Indoor" },
    { value: 1, name: "Outdoor" },
]

const Events = [
    { Event: "10 Miles" }, { Event: "10,000m" }, { Event: "10,000mW" }, { Event: "1000m" }, { Event: "100km" },
    { Event: "100m" }, { Event: "100mH" }, { Event: "10km" }, { Event: "10kmW" }, { Event: "110mH" },
    { Event: "15,000mW" }, { Event: "1500m" }, { Event: "15km" }, { Event: "15kmW" }, { Event: "2 Miles" },
    { Event: "20,000mW" }, { Event: "2000m" }, { Event: "2000mSC" }, { Event: "200m" }, { Event: "20km" }, { Event: "20kmW" },
    { Event: "25km" }, { Event: "30,000mW" }, { Event: "3000m" }, { Event: "3000mSC" }, { Event: "3000mW" }, { Event: "300m" },
    { Event: "30km" }, { Event: "30kmW" }, { Event: "35,000mW" }, { Event: "35kmW" }, { Event: "3kmW" }, { Event: "400m" }, { Event: "400mH" },
    { Event: "4x100m" }, { Event: "4x200m" }, { Event: "4x400m" }, { Event: "50,000mW" }, { Event: "5000m" }, { Event: "5000mW" }, { Event: "500m" },
    { Event: "50kmW" }, { Event: "5km" }, { Event: "5kmW" }, { Event: "600m" }, { Event: "800m" }, { Event: "DT" },
    { Event: "Heptathlon" }, { Event: "Decathlon" }, { Event: "HJ" }, { Event: "HM" }, { Event: "HT" }, { Event: "JT" }, { Event: "LJ" },
    { Event: "Marathon" }, { Event: "Mile" }, { Event: "PV" }, { Event: "SP" }, { Event: "TJ" }
]