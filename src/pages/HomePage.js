import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import {Button} from 'reactstrap';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} />
            <Content>
            <p>Welcome! I am Pranamya Vadlamani, a second-year Computer Science graduate student at Indiana University, Bloomington.</p>
            <p>With my experience as a software engineer at OpenText for almost two years, I consider myself to be fortunate enough to work on several interesting projects where I could create an 
            impact over several key metric areas such as performance, latency, throughput and overall product experience as well. In this regard, I received accolades from principal architects and senior engineering management for my improvement to the code base to reduce the overall memory footprint. During my Bachelors, I specialized in Computer Science Engineering.</p>
            <p>I am from Hyderabad, a city in the Southern India. I learnt Indian classical music for a few years. Apart from this, I also enjoy cooking different cuisines. I believe, there's always something to learn in life. 
            This makes me curious to learn about different successful personalities, be it Mrs Barack Obama or my grandmother, learn their success secrets and lessons from their failures. Recently, WHO has included microgreens in their list of super foods. 
            That's how I landed up in growing my share too, and I thoroughly enjoy including such greens in my diet.
            </p>
            <p>This website focuses on elaborating my professional background and related technical projects.</p>
            </Content>

            
            
        </div>
    );
}
export default HomePage;
