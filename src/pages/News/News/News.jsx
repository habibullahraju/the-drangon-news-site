import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsigths from '../EditorsInsigths/EditorsInsigths';

const News = () => {
    const news = useLoaderData();
    const {_id, title, details,image_url, category_id, author,rating,total_view }= news;
    return (
      <div>
          <Card>
        <Card.Img className='p-3' variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {details}
          </Card.Text>
          <Link to={`/category/${category_id}`}><Button variant="danger">All news in this category</Button></Link>
        </Card.Body>
      </Card>
      <div className='mt-4'>
        <EditorsInsigths></EditorsInsigths>
      </div>
      </div>
    );
};

export default News;