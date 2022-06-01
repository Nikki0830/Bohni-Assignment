import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Youtube.css";

export default function Youtube() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  var [items, setItems] = useState(0);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    items = items + 1;
    setItems(items);
  };
  console.log(value);
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        // `https://www.googleapis.com/youtube/v3/search?part=snippet&q${value}&key=AIzaSyAF-ByPKNvBqma0OD-IB-viyqvF9SGU_BM`
        " https://ce4kvluf13.execute-api.ap-south-1.amazonaws.com/stage/video-list "
      );
      setData(res.data.items);
      console.log(res.data.items[0]);
    }
    getData();
  }, [items]);

  return (
    <>
      <div className="main_div">
        <div className="icon_input">
          <div className="icon">
            <img src={process.env.PUBLIC_URL + "/img/y.png"} alt="" />
          </div>
          <div className="input_box">
            <input
              type="text"
              placeholder="Search"
              onChange={handleChange}
            ></input>
            <button onClick={handleClick}>Search</button>
          </div>
        </div>
        <di className="youtube_box">
          {data.map((e) => {
            return (
              <>
                <div className="youtube_box2">
                  <img className = "y_img" src={e.snippet.thumbnails.default.url}></img>
                  <h3>{e.snippet.title}</h3>
                  <p>{e.snippet.description}</p>
                </div>
              </>
            );
          })}
        </di>
      </div>
    </>
  );
}
