import React from 'react';
import { Popup, Button, Image, Card } from 'semantic-ui-react';

const Book = ({ book }) => {

    return (
        <Card style={{ marginTop: "5px", justifyContent: "center", alignItems: "center" }}>
            <Card.Content>
                {book.volumeInfo.imageLinks ? <Image src={book.volumeInfo.imageLinks.smallThumbnail} alt="book-cover" size='small' />
                    : <div></div>}
            </Card.Content>
            <Card.Description>
                <div>{book.volumeInfo.title}</div>
                <div>{book.volumeInfo.authors}</div>
            </Card.Description>
            <Popup content={<div><div>Publisher: {book.volumeInfo.publisher}</div>
                <div>Page Count: {book.volumeInfo.pageCount}</div>
                <div>Average Rating: {book.volumeInfo.averageRating}</div>
                <div>Ratings Count: {book.volumeInfo.ratingsCount}</div></div>} on='click' pinned
                trigger={<Button content="Details" className="ui primary button" />} />
        </Card>
    )
}

export default Book;