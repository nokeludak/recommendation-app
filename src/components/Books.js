import React, { useState } from 'react';
import Book from './Book';
import { Image, Modal, Button } from 'semantic-ui-react'
import _ from 'lodash';

const Books = ({ books }) => {
    const [showReco, setShowReco] = useState(false)

    let randomBook = _.sample(books);

    if (!books) {
        return <div></div>
    }

    return (<div className="container">
        <Modal style={{ width: "500px" }} onClose={() => setShowReco(false)} onOpen={() => setShowReco(true)} open={showReco}
            trigger={<Button className="ui primary button" style={{ margin: "15px" }}>Click To Check Our Recommendation</Button>}>
            <Modal.Content image>
                {randomBook.volumeInfo.imageLinks ? <Image src={randomBook.volumeInfo.imageLinks.thumbnail} /> : null}
                <Modal.Description>
                    <div style={{ marginBottom: "10px" }}>{randomBook.volumeInfo.title}</div>
                    <div style={{ marginBottom: "10px" }}>{randomBook.volumeInfo.authors}</div>
                    <div style={{ marginBottom: "10px" }}>Page Count: {randomBook.volumeInfo.pageCount}</div>
                    <div style={{ marginBottom: "10px" }}><a href={randomBook.volumeInfo.previewLink}>Read book online</a></div>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setShowReco(false)}>OK</Button>
            </Modal.Actions>
        </Modal>
        <div className="ui four cards" >
            {books.map((book) => {
                return (
                    <Book key={book.id} book={book} />)
            })}
        </div>
    </div>)
}

export default Books