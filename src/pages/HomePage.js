import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import {Button} from 'reactstrap';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Welcome! I am Pranamya Vadlamani, a second-year Computer Science graduate student at Indiana University, Bloomington. Through this website, I'd like to take you through my professional background.</p>
            <p>With my experience as a software engineer at OpenText for almost two years, I consider myself to be fortunate enough to work on several interesting projects where I could create an impact over several key metric areas such as performance, latency, throughput and overall product experience as well. In this regard, I received accolades from principal architects and senior engineering management for my improvement to the code base to reduce the overall memory footprint.</p>
            </Content>

            
            
        </div>
    );
}
export default HomePage;
