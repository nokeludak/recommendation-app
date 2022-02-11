import React, { useEffect, useState } from "react";
import { getSingleBook } from "../services/apiServices";
import BookModal from "./BookModal";

 function MsgBox({ query }) {
  const [bool, setBool] = useState(false);
  const [modal, setModal] = useState(false);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (query === "") {
      setBool(true);
    } else {
      setBool(false);
      getSingleBook(
        query,
        setImage,
        setTitle,
        setAuthor,
        setPageCount,
        setLink
      );
    }
  }, [query]);

  const style = {
    background: bool ? "#3476f1" : "#f9feff",
    color: bool ? "#f9feff" : "#3476f1",
  };

  const clickHandler = (e) => {
    if (query === "") return;

    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="msg-box">
      <button
        className="msg-box-filled"
        disabled={bool}
        style={style}
        onClick={clickHandler}
      >
        {query === "" ? (
          <p className="msg-box-filled-p">
            Search the books and choose recommended
          </p>
        ) : (
          <p className="msg-box-empty">Recommended books</p>
        )}
      </button>

      {modal ? (
        <BookModal
          images={image}
          authors={author}
          titles={title}
          pageCount={pageCount}
          links={link}
          closeModal={closeModal}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default MsgBox;