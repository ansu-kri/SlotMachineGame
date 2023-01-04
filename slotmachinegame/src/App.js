import React from "react";
import SlotM from "./SlotMachine";



// const SlotM=(props)=>{

//   const slot_inner={
//     textAlign:"center"
//   }


//   // let x='😂';
//   // let y='😂';
//   // let z='😁';

//   // let x=props.x;
//   // let y=props.y;
//   // let z=props.z;
// let {x,y,z}=props;
//   //if((props.x===props.y) && (props.y===props.z) )

//   if(x===y && y===z ){
//   return(
//     <>
//       <div className="slot_inner" style={slot_inner}>
//       <h1>
//         {x} {y} {z}
//       </h1>
//       <h1>This is Matching</h1>
//       <hr/>
//       </div>
//     </>
//   );

// } else {
//   return(
//     <>
//     <div className="slot_inner" style={slot_inner}>
//     <h1>
//       {x} {y} {z}
//     </h1>
//     <h1>This is Not Matching</h1>
//     <hr/>
//     </div>
//   </>
//   )
// }
// }

function App() {
const heading_style={
   
  textAlign:"center",
  padding:"30px 0",
  textTransform: "uppercas",
  fontSize: "25px",
  letterSpacing: "3px",
  fontWeight: "500",
  backgroundColor: "lightblue",
  marginBottom: "30px",
}

  return (
    <>
      <h1 className='heading_style' style={heading_style}>
      🖥 Welcome to <span style={{fontWeight:"bold"}}>Slot Machine game</span>🖥
      </h1>
      <hr/>
      <div style={{backgroudColor:"red",width:"40%",height:"auto",margin:"auto",border:"5px solid blue"}}>
      <SlotM x='😃' y='😃' z='😃' />
      <SlotM  x='😂' y='😃' z='😃'/>
      <SlotM  x='😍' y='😎' z='😎'/>
      <SlotM  x='🥰' y='🥰' z='🥰'/>
      </div>
      
    </>
  );
}

export default App;
