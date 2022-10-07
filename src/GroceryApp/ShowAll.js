import "./Styles/ShowAll.css";
import { useEffect, useState } from "react";

const ShowAll = (props) => {
  const data = props.data;
  const pdata = props.pdata;
  const addItem = props.addItem;
  const handleKeyPress = props.handleKeyPress;
  const handleUpdate = props.handleUpdate;
  const handleDelete = props.handleDelete;

  const [month, setMonth] = useState("");

  useEffect(() => {
    /* set month */
    const arr = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const d = new Date();
    setMonth(arr[d.getMonth()]);
  }, []);

  return (
    <div id={"outerdata"}>
      <p>Plan for the month of {month}</p>
      <form>
        <input
          type="text"
          placeholder="Add Shopping Item"
          onChange={(e) => addItem(e)}
          onKeyPress={(e) => handleKeyPress(e)}
        ></input>
      </form>
      <div id={"alldata"}>
        {data.map((item) => (
          <div key={item._id} id={"eachitem"}>
            <div>{item.groceryItem}</div>
            <div>
              <button onClick={() => handleUpdate(item._id)} id={"btn1"}>
                Purchased
              </button>
              <button onClick={() => handleDelete(item._id)} id={"btn2"}>
                X
              </button>
            </div>
          </div>
        ))}
        {pdata.map((item) => (
          <div key={item._id} id={"eachitem"}>
            <div>
              <del>{item.groceryItem}</del>
            </div>
            <div>
              <button onClick={() => handleUpdate(item.id)} id={"btn1"}>
                Purchased
              </button>
              <button onClick={() => handleDelete(item.id)} id={"btn2"}>
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowAll;
