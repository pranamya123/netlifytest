import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import {Button} from 'reactstrap';

function HomePage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, my name is Pranamya. I'm a Masters in Computer Science student at Indiana University Bloomington</p>
            <Button color="primary">Java</Button>{' '}
            <Button color="danger">JavaScript</Button>{' '}
            <Button color="success">HTML</Button>{' '}
            <Button color="info">CSS</Button>{' '}
            <Button color="warning">Python</Button>{' '}
            </Content>

            
            
        </div>
    );
}
export default HomePage;
