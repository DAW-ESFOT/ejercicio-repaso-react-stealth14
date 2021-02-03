import React, { useEffect, useState } from "react";
import BookItem from "./BookItem";
import { List } from "antd";

const BOOKS_URL = "https://stark-spire-22280.herokuapp.com/api/books";
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

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
  );
}
