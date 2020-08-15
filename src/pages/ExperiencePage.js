import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import {View} from 'react-view';

function ExperiencePage(props) {
    const floatcontainer = {
        color: 'black',
        // padding: 'rem'
    }
    const floatchild22 = {
        width: '20%',
        float: 'left',
        paddingTop: '9.2rem',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        border: '2px solid white'
    }
    const floatchild = {
        width: '20%',
        float: 'left',
        padding: '10px',
        border: '2px solid white'
    }
    const floatchild2 = {
        width: '20%',
        float: 'left',
        paddingTop: '9.2rem',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        border: '2px solid white'
    }
    const floatchild1 = {
        width: '80%',
        float: 'left',
        padding: '10px',
        border: '2px solid white'
    }
    const floatchild3 = {
        width: '40%',
        float: 'right',
        padding: '10px',
        border: '2px solid white'
    }
    return(
        <div>
            <Hero title={props.title} />

             <Content>

                <div style = {floatcontainer}>

                    <div style = {floatchild}>
                    <div class="green">Part time IT Support Assistant</div>
                    </div>

                    <div style = {floatchild1}>
                    <div class="blue">
                    Designed and developed internal data visualization platform using which helps high volumes of users to design and
                    deploy dashboards and reports. Developed an automation framework of the data visualization platform using Selenium Web driver using which
                    efficiency of the application increased significantly.
                    </div>
                    </div>

                    <div style = {floatchild3}>
                    <div class="blue"> 
                    <ul>
                        <li><b>Experience</b></li>
                        <li>Opportunity for professional development</li>
                        <li>Improved Communication skills</li>
                        <li>Volunteered for the welfare club</li> 
                    </ul>
                    </div>
                    </div>
                    
                    <div style = {floatchild3}>
                    <div class="blue"> 
                    <ul>
                        <li><b>Responsibilities</b></li>
                        <li>JavaScript</li>
                        <li>HTML and CSS</li>
                        <li>Agile Model</li>
                    </ul>
                    </div>
                </div>
                <br></br>
                <div style = {floatcontainer}>

                    <div style = {floatchild22}>
                    <div class="green">Software Developer</div>
                    </div>

                    <div style = {floatchild1}>
                    <div class="blue">Developed key features for media management product using Angular which enables enterprise
                    customers to efficiently manage several thousands of active contents. Developed SmartCompose UI which enables customers to intelligently crop content and effectively curate them. Developed a workflow configuration tool that empowers marketers to easily configure and automate common marketing requests to suit their business needs using a modern web interface uniquely tied to Media Management.</div>
                    </div>

                    <div style = {floatchild3}>
                    <div class="blue"> 
                        <ul>
                            <li><b>Experience</b></li>
                            <li>Opportunity for professional development</li>
                            <li>Improved Communication skills</li>
                            <li>Volunteered for the welfare club</li> 
                        </ul>
                    </div>
                    </div>
                    
                    <div style = {floatchild3}>
                    <div class="blue"> 
                    <ul>
                        <li><b>Responsibilities</b></li>
                        <li>JavaScript</li>
                        <li>HTML and CSS</li>
                        <li>Agile Model</li>
                    </ul>
                    </div>
                    </div>

                </div>
                
                <br></br>

                <div style = {floatcontainer}>

                    <div style = {floatchild2}>
                    <div class="green">Software Engineering Intern</div>
                    </div>

                    <div style = {floatchild1}>
                    <div class="blue">
                    Designed and developed internal data visualization platform using which helps high volumes of users to design and
                    deploy dashboards and reports. Developed an automation framework of the data visualization platform using Selenium Web driver using which
                    efficiency of the application increased significantly.
                    </div>
                    </div>

                    <div style = {floatchild3}>
                    <div class="blue"> 
                    <ul>
                        <li><b>Experience</b></li>
                        <li>Opportunity for professional development</li>
                        <li>Improved Communication skills</li>
                        <li>Volunteered for the welfare club</li> 
                    </ul>
                    </div>
                    </div>
                    
                    <div style = {floatchild3}>
                    <div class="blue"> 
                    <ul>
                        <li><b>Responsibilities</b></li>
                        <li>JavaScript</li>
                        <li>HTML and CSS</li>
                        <li>Agile Model</li>
                    </ul>
                    </div>
                    </div>
                </div>

            </div>
            </Content>
        </div>
    );
}


export default ExperiencePage;