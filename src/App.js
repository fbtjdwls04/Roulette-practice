import React, {useState} from "react";
import './App.css';


function App() {
  let [name, setNum] = useState('');
  const rNum = (min, max) => Math.random() * (min-max) + min;
  const rn = {
    rotate: `${rNum(3960,4320)}deg`,
    transition: 'rotate 10s'
  }
  function twinActive(){
    if(name == 'moving'){
      return rn;
    }
  }

  return (
    <>
      <div className={"arrow red"}>
      </div>
      <div className={"circle " + name} style={twinActive()}>
        <div className="menu">응애</div>
      </div>
      <div className="btn-box">
        <button className="btn-type run" onClick={()=> setNum("moving")}>시작하기</button>
        <button className="btn-type stop" onClick={()=> setNum("stop")}>정지하기</button>
      </div>
    </>
  );
}

export default App;
