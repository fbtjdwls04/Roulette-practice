import React, {useState} from "react";
import './App.css';


function App() {
  let [num, setNum] = useState(0);
  let name = "";
  if(num == 1){
    name = "moving";
  }
  else if(num == 2){
    name = "";
    num = 0;
  }
  const rNum = (min, max) => Math.random() * (min-max) + min;
  console.log(rNum(3600,3960));
  return (
    <>
      <div className={"test " + name} onClick={()=>setNum(num+1)}>
        <div className={"circle red"}></div>
      </div>
    </>
  );
}

export default App;
