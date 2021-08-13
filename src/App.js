import {useEffect} from 'react';
import { useState } from 'react';
import {firestore} from "./firebase";
import "./App.css";

function App() {
  let [postdata, setpostdata]= useState([]);


  useEffect(()=>{
    let f= async ()=>{
      await firestore.collection("posts").onSnapshot((querySnapshot)=>{
        let tempArr=[];
        querySnapshot.forEach((doc)=>{
            tempArr.push({
              id:doc.id,
              data:doc.data()
            });
        });
        setpostdata(tempArr);
      });
     
      
    }
    f();
  },[]);
  return (
    <div>
        <ul>
          {postdata.map((el)=>{
            return <li key={el.id}>{el.data.Body}</li>
          })}
        </ul>

        <input type="text" placeholder="What's on your mind buddy?" onKeyDown={(e)=>{
          if(e.code==="Enter"){
            let post= e.currentTarget.value;
            firestore.collection("posts").add({Body:post});
            e.currentTarget.value="";
          }
        }}/>
    </div>
    
  );
}

export default App;
