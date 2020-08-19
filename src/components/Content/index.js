import React, { useState, useEffect } from "react";
import Reddit from "../../assets/reddit.svg";

import "./styles.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const apiData = await fetch("https://api.reddit.com/r/reactjs/hot");
      const json = await apiData.json();
      setData(json.data.children);
    }
    getData();
  }, []);

  useEffect(() => {
    if (data) return;
  }, [data]);

  return (
    <>
      {data.length > 0 && data[0].author}
      {console.log(data[0])}
      {data.map((post) => {
        const dataPost = post.data;
        return (
          <li key={dataPost.id}>
            <img key="img" alt="Reddit imag" src={Reddit}></img>
            <div className="content">
              <h2 key={dataPost.author}>
                Author: <strong>{dataPost.author}</strong>
              </h2>
              <p key={dataPost.title}>{dataPost.title}</p>
              <a href={dataPost.url}>Reddit post</a>
            </div>
          </li>
        );
      })}
    </>
  );
}

export default App;
