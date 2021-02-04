import React, { useContext } from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, CheckCircleFilled, CheckCircleOutlined, DollarCircleOutlined } from "@ant-design/icons";
import { BooksContext } from "./../App";
import "./books.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function BookItem({ item }) {
  const { title, id, author, cover_page } = item;
  const { showModal, setDetails } = useContext(BooksContext);
  return (
    <div className="overlay">
      <List.Item
        key={id}
        actions={[
          <IconText
            icon={DollarCircleOutlined}
            text={item.price}
            key="list-vertical-star-o"
          />,
          <IconText
            icon={item.available ? CheckCircleFilled : CheckCircleOutlined}
            text={item.available ? "Available": "Unavailable"}
            key="list-vertical-like-o"
          />,
        ]}
        onClick={() =>{ 
          showModal();
          setDetails(item);
        }}
        extra={<img width={272} alt="logo" src={cover_page} />}
      >
        <List.Item.Meta
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    </div>
  );
}
