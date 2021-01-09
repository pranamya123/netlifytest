import React from 'react';

import Card from '../components/Card';

import yelp from '../assets/images/yelp.png';
import prevue from '../assets/images/prevuelogo.png';
import googlemaps from '../assets/images/googlemaps.png';
import amazonreviews from '../assets/images/amazonreviews.jpeg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Booking Management System',
                    subTitle: 'React',
                    imgSrc: prevue,
                    link: 'https://medium.com/@vadlamanipranamya/prevue-movies-58d60af2da63',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Recommendation system',
                    subTitle: 'Yelp Dataset',
                    imgSrc: yelp,
                    link: 'https://medium.com/@vadlamanipranamya/recommendation-system-for-yelp-dataset-5451261575e',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Sentiment Analysis',
                    subTitle: 'Amazon dataset',
                    imgSrc: amazonreviews,
                    text: "For the given dataset, sentiment analysis performed on reviews with 2,3,4 stars has given the following results:- Sentiment Percentage Distribution. - Negative: 50 - Neutral: 50%",
                    link: 'https://medium.com/@vadlamanipranamya/sentiment-analysis-on-customer-reviews-using-amazon-reviews-dataset-4357e3d72b54',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;