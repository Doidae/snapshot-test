import React from 'react';
import { Card } from 'react-bootstrap';

const GitHubCard = ({ username, imageUrl, blurb }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{username}</Card.Title>
                <Card.Text>{blurb}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default GitHubCard;