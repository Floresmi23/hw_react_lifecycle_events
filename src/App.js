import React from "react";

function Home(){
  const [data, setData]=React.useState(["itm1", "itm2", "itm3"])
  const [list, setList] =React.useState([])
  const [change, setChange]=React.useState(false);
  const [change2, setChange2]=React.useState(false);
  const [color, setColor]=React.useState("yellow");

  const [likes,addLikes]=React.useState(0);

  const setLikes=()=> {
    addLikes(likes + 1)
  }





  React.useEffect(()=>{
    setList(data);
  },[data, change]);

  React.useEffect(()=>{
    if(change2){
      setColor("green");
    }else{
      setColor("yellow");
    }
  },[change2])

  let eles = list.map((itm, idx)=>
      <div key={idx}>{itm}</div>
  )


  const addList =()=>{
    let newList = data;
    newList.push("box");
    setData(newList);
    setChange(!change);

  }


  return(
      <div style={{backgroundColor: color}}>
        <div style={{color: color}}>
          <button onClick={setLikes}>Increase by 1</button>
          <button onClick={addList}>Click Me</button>
          <button onClick={()=>setChange2(!change2)}>Restart</button>
        </div>


        <div>
          <div>
            {likes}
            {eles}
          </div>

        </div>
      </div>


  )
}

export default Home;