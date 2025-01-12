import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import Container from "./Container";
import SectionTitle from "./SectionTitle";

const ProgrammingBook = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // console.log("data", data);

  useEffect(() => {
    const fetchData = () => {
      fetch("/book.json")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
    fetchData();
  }, []);
  return (
    <Container>
      <SectionTitle title={"All Progming Books"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
        {data.slice(5, 9).map((item) => (
          <BookCard item={item} key={item.id} />
        ))}
      </div>
    </Container>
  );
};

export default ProgrammingBook;
