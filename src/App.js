import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import BooksList from "./components/BooksList";
import { Modal, Button } from "antd";
import BookDetails from './components/BookDetails';
export const BooksContext = React.createContext();

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [bookDetails, setBookDetails] = useState({});

  const setDetails = bookDetails => {
    setBookDetails(bookDetails);
  }

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <BooksContext.Provider value={{ showModal, setDetails }}>
      <div className="App">
        <BooksList />
        <Modal
          title={<h2>{bookDetails.title}</h2>}
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {bookDetails != {} && (
            <BookDetails bookDetails={bookDetails}/>
          )}
        </Modal>
      </div>
    </BooksContext.Provider>
  );
}

export default App;
