import React from 'react';
import Title from "./Title";
import {services} from "../data";
import ServiceItem from "./ServiceItem";

function Services() {
    return (
        <section className="section services" id="services">
            <Title title={'our'} subtitle={"services"}/>

            <div className="section-center services-center">
                {services.map(service => (
                    <ServiceItem {...service} key={service.id}/>
                ))}
            </div>
        </section>
    );
}

export default Services;