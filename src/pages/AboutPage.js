import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Pranamya. I'm a Masters in Computer Science student at Indiana University Bloomington</p>
            </Content>
        </div>
    );

}

export default AboutPage;