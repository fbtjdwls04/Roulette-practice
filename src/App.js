import React, {useState} from "react";

function App() {
  const [num, setNum] = useState(0);
  
  const onBtnIncreaseClicked = () => setNum(num + 1);
  const onBtnTenIncreaseClicked = () => setNum(num + 10);
  const onBtnMinusClicked = () => setNum(num - 1);
  const onBtnTenMinusClicked = () => setNum(num - 10);

  return (
    <>
      <div>NUM : {num}</div>
      <button onClick={() => setNum( num + 1 )}>+1</button>
      <br/>
      <button onClick={() => setNum( num + 10 )}>+10</button>
      <br/>
      <button onClick={() => setNum( num - 1 )}>-1</button>
      <br/>
      <button onClick={() => setNum( num - 10 )}>-10</button>
    </>
  );
}

export default App;
