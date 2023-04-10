import React, { useEffect, useState } from "react";
import PointsData from '../../../Data/WorldAthletics.json';
import Select from "react-dropdown-select";

import "./PointsCalc.css"

var error = "";


export default function PointsCalculator() {
    useEffect(() => {
    }, [])

    const [gender, setGender] = useState({ value: 0, name: "Male" });
    const [event, setEvent] = useState({ Event: "100m" });
    const [category, setCategory] = useState({ value: 1, name: "Outdoor" });
    const [time, setTime] = useState("0");
    const [calcPoints, setCalcPoints] = useState(true)
    const [points, setPoints] = useState(null);
    const [totals, updateTotalArray] = useState([]);

    const CalculateTotal = () => {
        var perf;
        if (calcPoints) { //caclulate the points based on the performance 
            var performanceList = time.split(':')
            var secondslist = time.split('.')
            var hr = performanceList[0] * 3600;
            var min = performanceList[1] * 60;
            var sec = secondslist[0].split(":").at(-1) * 1.00;
            var ms = secondslist[1] / 100;
            var total = hr + min + sec + ms;

            perf = findPoints(total, gender[0].name, "outdoor", event[0].Event);
        } else { //calculate the performance based on the points
            if (points <= 1400 && points >= 0) {
                perf = findPerformance(points, gender[0].name, "outdoor", event[0].Event);
            }
        }
        if (!totals.includes(perf) && perf !== undefined) {
            updateTotalArray((oldarray) => [...oldarray, perf]);
        }
    }
    const handleRemoveItem = (e) => {
        updateTotalArray(totals.filter(item => item !== e));
    }

    const handleChangeRadio = (value) => {
        setCalcPoints(value);
    }

    return (
        <div className="container">
            <div className="points-container">
                <h2 className="project-header">World Athletics Points Calculator</h2>
                <p>I could not find an athletics table points for the 2023 atheltics year.
                    So, naturally I made my own. The 2023 tables are valid with points from 0 to 1400 points.
                    <br />
                    <br />
                    Compare equivalent performances across different athletics events. Scores aren’t designed to compare men’s and women’s performances.
                </p>
                <div className="points-grid">
                    <div className="points-grid--select">
                        <div>
                        <h3>Event</h3>
                            <Select className="points-input" options={OutdoorEvents} labelField="Event" placeholder="Event" valueField="Event" onChange={(e) => setEvent(e)} />
                        </div>
                        <div>
                        <h3>Gender</h3>
                            <Select className="points-input" options={GenderArr} labelField="name" placeholder="Gender" valueField="value" onChange={(e) => setGender(e)} />
                        </div>
                        <div>
                        <h3>Category</h3>
                            <Select className="points-input" options={Category} labelField="name" placeholder="Category" valueField="value" onChange={(e) => setCategory(e)} disabled={true} />
                        </div>
                    </div>
                    <div className="points-grid--performance">
                        <div>
                            <h3>Time (hh:mm:ss.ms)</h3>
                            <div>
                                <input type="radio" value={true} id="performance"
                                    onChange={() => handleChangeRadio(true)} name="calc" />
                                <input className="points-input" placeholder="hh:mm:ss.ms"
                                    type="text" onChange={(e) => setTime(e.target.value)} disabled={!calcPoints} />
                            </div>
                        </div>
                        <div>
                            <h3>Points (0 - 1400)</h3>
                            <div>
                                <input type="radio" value={false} id="points"
                                    onChange={() => handleChangeRadio(false)} name="calc" />
                                <input className="points-input points" placeholder="Points"
                                    type="text" onChange={(e) => setPoints(e.target.value)} disabled={calcPoints} />
                            </div>
                        </div>

                    </div>
                    <div className="points-button--container">
                        <button type="button" id="calc-button" onClick={() => CalculateTotal()}
                        >Calculate</button>
                    </div>

                    <table className="results-table">
                        <thead>
                            <tr>
                                <th>Event</th>
                                <th>Points</th>
                                <th>Mark</th>
                                <th>Gender</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {totals.map((item, key) =>
                                <tr key={key}>
                                    <td>{item.Event}</td>
                                    <td>{item.Points}</td>
                                    <td>{item.MarkTime}</td>
                                    <td>{item.Gender}</td>
                                    <td>{item.Category}</td>
                                    <td className="points-table--remove-button" onClick={() => handleRemoveItem(item)} >Remove</td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )
}

const findPerformance = (points, gender, category, event) => {
    try {
        var foundItem = PointsData.filter(item =>
            item.Points === points &&
            item.Gender === gender &&
            item.Category === category &&
            item.Event === event
        )[0];
        if (foundItem === undefined && points >= 1) {
            foundItem = findPerformance(points - 1, gender, category, event);
        }

        return foundItem;
    } catch (error) {
        console.log("The was an error searching for the performance");
    }
}

//works for times will need to adjust it for other events which use distance and heights
const findPoints = (performance, gender, category, event) => {
    try {
        var foundItem = PointsData.filter(item =>
            item.Mark == performance &&
            item.Gender === gender &&
            item.Category === category &&
            item.Event === event
        )[0];
        if (foundItem === undefined && performance > 0.00) {
            performance = (performance - 0.01).toFixed(2);;
            foundItem = findPoints(performance, gender, category, event);
        }
        if (foundItem === undefined) {
            return;
        }
        return foundItem;
    } catch (error) {
        console.log("There was an error - Performance out of range")
        error = "There was an error - Performance out of range";
    }
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
    { Event: "3000mW" }, { Event: "300m" }, { Event: "30km" }, { Event: "30kmW" }, { Event: "35,000mW" }, { Event: "35kmW" },
    { Event: "3kmW" }, { Event: "400m" }, { Event: "400mH" }, { Event: "4x100m" }, { Event: "4x200m" }, { Event: "4x400m" },
    { Event: "50,000mW" }, { Event: "5000m" }, { Event: "5000mW" }, { Event: "500m" }, { Event: "50kmW" }, { Event: "5km" }, { Event: "5kmW" },
    { Event: "600m" }, { Event: "800m" }, { Event: "DT" }, { Event: "Heptathlon" }, { Event: "Decathlon" }, { Event: "HJ" }, { Event: "HM" },
    { Event: "HT" }, { Event: "JT" }, { Event: "LJ" }, { Event: "Marathon" }, { Event: "Mile" }, { Event: "PV" }, { Event: "SP" }, { Event: "TJ" }
]