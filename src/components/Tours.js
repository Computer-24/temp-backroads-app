import React from 'react';
import Title from "./Title";
import {tours} from "../data";
import TourItem from "./TourItem";

function Tours() {
    return (
        <section className="section" id="tours">
            <Title title={'featured'} subtitle={'tours'}/>

            <div className="section-center featured-center">
                {tours.map(tour => (
                    <TourItem key={tour.id} {...tour}/>
                ))}
            </div>
        </section>
    );
}

export default Tours;