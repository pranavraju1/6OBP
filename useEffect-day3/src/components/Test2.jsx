// A reace condtion happens when multiple requests are in flight and response arrive
// in a different order than they started, which can make the UI show stale(old) data
import { useEffect, useState } from "react";

function fakeFetch(id) {
  return new Promise((resolve) => {
    const delay = Math.random() * 2000; // 0–2 seconds
    setTimeout(() => {
      resolve(`Student ${id} data`);
    }, delay);
  });
}



const Test2 = () => {
    const [id, setId] = useState(1);
    const [data, setData] = useState("");

    useEffect(() => {

        let isActive = true; 

        fakeFetch(id).then((result) => {
            if(isActive){
                setData(result);
            }
        });

        return ()=>{
            isActive = false;  //cancel old update
        }


    }, [id]);

  return (
    <div>
      <h2>Simple Race Condition</h2>

      <button onClick={() => setId(1)}>Student 1</button>
      <button onClick={() => setId(2)}>Student 2</button>
      <button onClick={() => setId(3)}>Student 3</button>

      <p>Current ID: {id}</p>
      <p>Data shown: {data}</p>
    </div>
  );
}

export default Test2
