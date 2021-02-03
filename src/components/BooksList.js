import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import { List } from "antd";
import "./books.css";

const BOOKS_URL = "https://stark-spire-22280.herokuapp.com/api/books";

export default function BookList() {
  const [books, setBooks] = useState([]);
  const fetchBooks = async () => {
    const response = await fetch(BOOKS_URL);
    const json = await response.json();
    console.log(json);
    setBooks(json.data);
    return json;
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="books-list">
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={books}
        footer={
          <div>
            <b>Books</b> Store
          </div>
        }
        renderItem={(item) => <BookItem item={item} />}
      />
    </div>
  );
}
