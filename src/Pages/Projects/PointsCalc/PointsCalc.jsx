import React, { useEffect, useState } from "react";
import data from '../../../Data/WorldAthletics.json';
import Select from "react-dropdown-select";

import "./PointsCalc.css"

export default function PointsCalculator() {
    useEffect(() => {
    }, [])

    const [gender, setGender] = useState({ value: 0, name: "Male" });
    const [event, setEvent] = useState({ Event: "100m" });
    const [category, setCategory] = useState({ value: 1, name: "Outdoor" });
    const [hours, sethours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [milliseconds, setMilliseconds] = useState(false);
    const [performanceBool, setMode] = useState(false);
    const [points, setPoints] = useState(null);
    const [totals, updateTotalArray] = useState([]);

    const CalculateTotal = () => {
        var perf;
        //var time = (hours * 60 * 60) + (minutes * 60) + seconds + (milliseconds / 100);
        var secondshours = hours * 60 * 60;
        var secondsmins = minutes * 60;
        var secondMilliseconds = milliseconds / 100;
        var time =  secondshours + secondsmins + Math.round(seconds) + secondMilliseconds; 
        

        if (!performanceBool) {
            perf = findPoints(time, gender[0].name, "outdoor", event[0].Event);
        } else {
            if (points <= 1400 && points >= 0) {
                perf = findPerformance(points, gender[0].name, "outdoor", event[0].Event);
            }
        }
        if (!totals.includes(perf) && perf != undefined) {
            updateTotalArray((oldarray) => [...oldarray, perf]);
        }

    }

    const handleRemoveItem = (e) => {
        updateTotalArray(totals.filter(item => item !== e));
    };


    return (
        <div className="container">
            <div className="points-container">
                <h2 className="project-header">World Athletics Points Calculator</h2>
                <p>I could not find an athletics table points for the 2023 atheltics year.
                    So, naturally I made my own. The 2023 tables are valid with points from 0 to 1400 points.
                    <br />
                    <br />
                    Compare equivalent performances across different athletics events. Scores aren???t designed to compare men???s and women???s performances.
                </p>
                <div className="points-grid">
                    <h5 className="project-subheader">Event Filters</h5>
                    <div className="points-grid--select">
                        <Select className="points-input" options={OutdoorEvents} labelField="Event" placeholder="Event" valueField="Event" onChange={(e) => setEvent(e)} />
                        <Select className="points-input" options={GenderArr} labelField="name" placeholder="Gender" valueField="value" onChange={(e) => setGender(e)} />
                        <Select className="points-input" options={Category} labelField="name" placeholder="Category" valueField="value" onChange={(e) => setCategory(e)} disabled={true}/>
                    </div>
                    <h5 className="project-subheader">Performance/Points
                        <input
                            placeholder="Performance"
                            type="checkbox"
                            onChange={(x) => setMode(!performanceBool)} />
                    </h5>
                    <div className="points-grid--performance">
                        <div className="points-grid--performanceThings">
                            <input className="points-input" placeholder="Hours"
                                type="text" onChange={(e) => sethours(e.target.value)} disabled={performanceBool} />:

                            <input className="points-input" placeholder="Minutes"
                                type="text" onChange={(e) => setMinutes(e.target.value)} disabled={performanceBool} />:

                            <input className="points-input" placeholder="Seconds"
                                type="text" onChange={(e) => setSeconds(e.target.value)} disabled={performanceBool} />:
                            <input className="points-input" placeholder="Milliseconds"
                                type="text" onChange={(e) => setMilliseconds(e.target.value)} disabled={performanceBool} />
                        </div>
                        <input className="points-input points" placeholder="Points"
                            type="text" onChange={(e) => setPoints(e.target.value)} disabled={!performanceBool} />
                    </div>
                    <div className="points-button--container">
                        <button type="button" id="calc-button" disabled={performance == undefined && points == undefined} onClick={() => CalculateTotal()}
                        >Calculate</button>
                    </div>
                    <div className="points-table ">
                        <h5>Event</h5>
                        <h5>Points</h5>
                        <h5>Mark</h5>
                        <h5>Gender</h5>
                        <h5>Category</h5>
                    </div>
                    {totals.map((item, key) =>
                        <div className="points-table" key={key}>
                            <div>{item.Event}</div>
                            <div>{item.Points}</div>
                            <div>{item.Event == "100m" ||
                                item.Event == "200m" ||
                                item.Event == "200m" ||
                                item.Event == "400m" ||
                                item.Event == "800m" ||
                                item.Event == "300m"
                                ? item.Mark : fancyTimeFormat(item.Mark)}</div>
                            <div>{item.Gender}</div>
                            <div>{item.Category}</div>
                            <div className="points-table--remove-button" onClick={() => handleRemoveItem(item)} >Remove</div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}

function fancyTimeFormat(duration) {
    // Hours, minutes and seconds
    const hrs = ~~(duration / 3600);
    const mins = ~~((duration % 3600) / 60);
    const secs = ~~duration % 60;

    let ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
}
//finds a performance matching the parameters. If there is no performance matching the points
//then it will recursively call until it finds a close match. However, definitely needs some refinement. 
const findPerformance = (points, gender, category, event) => {
    var foundItem = data.filter(item =>
        item.Points == points &&
        item.Gender == gender &&
        item.Category == category &&
        item.Event == event
    )[0];
    if (foundItem === undefined && points > 1) {
        foundItem = findPerformance(points - 1, gender, category, event);
    }
    console.log(foundItem);
    return foundItem;
}

const findPoints = (performance, gender, category, event) => {
    var foundItem = data.filter(item =>
        item.Mark == performance &&
        item.Gender == gender &&
        item.Category == category &&
        item.Event == event
    )[0];
    if (foundItem === undefined && performance > 1) {

        foundItem = findPoints(Math.round((performance - 0.01 ) * 100 )/ 100 , gender, category, event);
    }
    console.log(foundItem);
    return foundItem;
}

const GenderArr = [
    { value: 0, name: "male" },
    { value: 1, name: "female" },
]
const Category = [
    { value: 0, name: "indoor" },
    { value: 1, name: "outdoor" },
]

const OutdoorEvents = [
    { Event: "10 Miles" }, { Event: "10,000m" }, { Event: "10,000mW" }, { Event: "1000m" }, { Event: "100km" },
    { Event: "100m" }, { Event: "100mH" }, { Event: "10km" }, { Event: "10kmW" }, { Event: "110mH" },
    { Event: "15,000mW" }, { Event: "1500m" }, { Event: "15km" }, { Event: "15kmW" }, { Event: "2 Miles" },
    { Event: "20,000mW" }, { Event: "2000m" }, { Event: "2000mSC" }, { Event: "200m" }, { Event: "20km" },
    { Event: "20kmW" }, { Event: "25km" }, { Event: "30,000mW" }, { Event: "3000m" }, { Event: "3000mSC" },
    { Event: "3000mW" },
    { Event: "300m" }, { Event: "30km" }, { Event: "30kmW" }, { Event: "35,000mW" }, { Event: "35kmW" },
    { Event: "3kmW" },
    { Event: "400m" }, { Event: "400mH" }, { Event: "4x100m" }, { Event: "4x200m" }, { Event: "4x400m" },
    { Event: "50,000mW" },
    { Event: "5000m" },
    { Event: "5000mW" }, { Event: "500m" }, { Event: "50kmW" }, { Event: "5km" }, { Event: "5kmW" },
    { Event: "600m" }, { Event: "800m" }, { Event: "DT" },
    { Event: "Heptathlon" }, { Event: "Decathlon" }, { Event: "HJ" }, { Event: "HM" },
    { Event: "HT" }, { Event: "JT" },
    { Event: "LJ" }, { Event: "Marathon" }, { Event: "Mile" }, { Event: "PV" }, { Event: "SP" }, { Event: "TJ" }
]