import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const NewsCard = ({news}) => {
    const {_id, title, details,image_url, author,rating,total_view }= news;
    return (
        <Card className="mb-4">
        <Card.Header className='d-flex align-items-center'>
        <Image style={{height:'40px'}} src={author?.img} roundedCircle />
            <div className='flex-grow-1 ms-2'>
                <p className='mb-0'>{author?.name}</p>
            <p className='mb-0'><span>{moment(author?.published_date).format('yyyy-MM-DD')}</span></p>
            </div>
            <FaRegBookmark></FaRegBookmark>
            <FaShareAlt></FaShareAlt>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text>
            {details.length < 250? <>{details}</>: <>
                {details.slice(0,250)}... <Link to={`/news/${_id}`}>Read more</Link>
            </>}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted d-flex align-items-center">
            <div className='flex-grow-1 d-flex gap-1 '>
                <Rating
                    placeholderRating={rating?.number}
                    emptySymbol={<FaRegStar ></FaRegStar>}
                    placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                    fullSymbol={<FaStar></FaStar>}
                    readonly
                >
                    
                </Rating>
                <p>{rating?.number}</p>
            </div>
            <div>
                <FaEye className='me-1'></FaEye> 
                {total_view}
            </div>
        </Card.Footer>
      </Card>
    );
};

export default NewsCard;