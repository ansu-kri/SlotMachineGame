import React from "react";

const SlotM=(props)=>{

    const slot_inner={
      textAlign:"center"
    }
  
  
    // let x='😂';
    // let y='😂';
    // let z='😁';
  
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
  let {x,y,z}=props;
    //if((props.x===props.y) && (props.y===props.z) )
  
    if(x===y && y===z ){
    return(
      <>
        <div className="slot_inner" style={slot_inner}>
        <h1>
          {x} {y} {z}
        </h1>
        <h1>This is Matching</h1>
        <hr/>
        </div>
      </>
    );
  
  } else {
    return(
      <>
      <div className="slot_inner" style={slot_inner}>
      <h1>
        {x} {y} {z}
      </h1>
      <h1>This is Not Matching</h1>
      <hr/>
      </div>
    </>
    )
  }
  }
  export default SlotM;