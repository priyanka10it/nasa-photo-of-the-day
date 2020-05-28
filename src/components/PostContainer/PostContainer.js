import React from "react";
import "./postcontainer.css";
import { Card, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';


const PostContainer = props => {
    return (
        <div>
            <Card body inverse style={{ backgroundColor: 'yellow', borderColor: '#333' }}></Card>
    <h2 className="title-heading">{props.title}</h2>
    <img alt="" src={props.url} className="main-image"></img>
    
    <Card body inverse color="yellow">
    <CardTitle>{props.date}</CardTitle>
    <CardBody>
    <CardText>{props.explanation}</CardText>
    
    <CardFooter>copyright:{props.copyright}</CardFooter>
    </CardBody>
    </Card>
</div>
    );
};

export default PostContainer;