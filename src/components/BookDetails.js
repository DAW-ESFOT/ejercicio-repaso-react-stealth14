import React, { useState } from "react";

export default function BookDetail({bookDetails}) {
  return (
    <>
      <p>{bookDetails.title}</p>
      <p>{bookDetails.id}</p>
      <p>{bookDetails.title}</p>
      <p>{bookDetails.back_cover}</p>
      <p>{bookDetails.cover_page}</p>

    </>
  );
}
