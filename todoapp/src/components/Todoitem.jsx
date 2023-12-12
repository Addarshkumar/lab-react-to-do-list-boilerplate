import React from 'react';

export default class TodoItem extends React.Component{
    constructor(){
        super()
    }

    render(){
        console.log("props",this.props)
        let {e,idx,updateItem,deleteItem}= this.props
        return <>
         <div key={idx} id='edit'>
          <input className='input-box' type="text" value={e} onChange={(event)=>{
            updateItem(event.target.value,idx)
          }}/>
          <button className='delete' style={{
            backgroundColor:"blueviolet",
            fontWeight:'bolder'
          }} onClick={()=>{
            deleteItem(idx)
          }}>D E L E T E</button>
         </div>
        </>
    }
}