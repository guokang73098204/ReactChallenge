import { useEffect, useState } from "react";
import TrafficLight from "./TrafficLight";

const initialState1 = {

    red: {
        color: 'red',
        on: true,
        duration: 4000,
        next: 'green'
    },

    yellow: {
        color: 'yellow',
        on: false,
        duration: 500,
        next: 'red'
    }, 
    
    green: {
        color: 'green',
        on: false,
        duration: 3000,
        next: 'yellow'
    }
};

const initialState2 = {

    purple: {
        color: 'purple',
        on: true,
        duration: 4000,
        next: 'orange'
    },

    blue: {
        color: 'blue',
        on: false,
        duration: 500,
        next: 'white'
    }, 
    
    orange: {
        color: 'orange',
        on: false,
        duration: 3000,
        next: 'purple'
    }
};


const TrafficLightManager = () => {
    return (
        <>
            <h1>Round Circles</h1>
            <TrafficLight config={initialState1} startColor="green" layout="vertical"/>
            <TrafficLight config={initialState2} startColor="orange" layout="horizontal"/>
        </>
    )
    
}


export default TrafficLightManager;