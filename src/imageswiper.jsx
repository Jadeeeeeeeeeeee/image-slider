import React, { useState } from "react";
import Porsche from "./assets/porscheCayMan.jpg";
import Nissan from "./assets/nissanS13.jpg";
import arrow from "./assets/left-arrow-28-64 (1).png";
import bmw from "./assets/bmwm4.jpg";

export default function ImageSwiper() {
    const [imageNumber, setImageNumber] = useState(1);

    function NextNumber() {
        setImageNumber(imageNumber + 1);
    }

    function previusNumber() {
        setImageNumber(imageNumber - 1);
    }

    function checkIfLast() {
        if (imageNumber === 3) {
            setImageNumber(1);
        }
    }

    function checkIfFirst() {
        if (imageNumber === 1) {
            setImageNumber(3);
        }
    }

    if (imageNumber === 1) {
        return (
            <>
                <h1>Porsche 918 Cayman</h1>
                <img src={Porsche} className="image" />
                <div className="explenation">
                    <p>max power: 300 hp</p>
                    <p>0-100 kmh: 5s</p>
                    <p>top tracke speed: 273 kmh</p>
                </div>
                <img className="leftArrow" src={arrow} onClick={checkIfFirst} />
                <img className="rightArrow" src={arrow} onClick={NextNumber} />
            </>
        );
    } else if (imageNumber === 2) {
        return (
            <>
                <h1>nissan silvia sx200 s13</h1>
                <img src={Nissan} className="image" />
                <div className="explenation">
                    <p>max power: 171 hp</p>
                    <p>0-100 kph: 7.3s</p>
                    <p>top tracke speed: 225kmh</p>
                </div>
                <img className="leftArrow" src={arrow} onClick={previusNumber} />
                <img className="rightArrow" src={arrow} onClick={NextNumber} />
            </>
        );
    } else if (imageNumber === 3) {
        return (
            <>
                <h1>bmw m4 </h1>
                <img src={bmw} className="image" />
                <div className="explenation">
                    <p>max power: 550 hp</p>
                    <p>0-100 kph: 3.7s</p>
                    <p>top tracke speed: 307 kph</p>
                </div>
                <img className="leftArrow" src={arrow} onClick={previusNumber} />
                <img className="rightArrow" src={arrow} onClick={checkIfLast} />
            </>
        );
    }
}
