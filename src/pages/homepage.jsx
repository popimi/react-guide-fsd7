import axios from "axios";
import { useState } from "react";
import List from "../components/list";
import { dataLikes } from "../constants/data";

const HomePage = () => {
  const [data, setData] = useState(dataLikes);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");
  const [bookData, setBookData] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setInputText(e.target.value);
    fetchData();
  }

  async function fetchData() {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?apikey=202a113f&s=%27${inputText}%27&short=full`,
        data
      );
      const data = response.data.Search;
      if (data) {
        setBookData(data);
      } else {
        setBookData([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-700 min-h-dvh">
      <div className="pt-10">
        {data.map((item, index) => (
          <div key={item.id + index}>
            <List item={item} data={data} setData={setData} />
          </div>
        ))}
      </div>
      <div className="bg-red-200 flex justify-center items-center text-xl">
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
          className="bg-red-200 p-2"
        >
          add
        </button>
      </div>
      <form className="bg-slate-400 p-4">
        <label className="flex gap-2">
          ค้นหาจ้า
          <input
            type="text"
            value={inputText}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </form>
      {loading && (
        <div className="flex item-center justify-center">Loading. . .</div>
      )}
      {!bookData.length && !loading && (
        <div className="flex item-center justify-center">No Data. . .</div>
      )}
      {bookData.map((item, index) => (
        <div className="flex item-center justify-center" key={item.key + index}>
          <div>{item.Title}</div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
