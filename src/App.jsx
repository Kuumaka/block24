// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from 'react'
import {puppyList} from './data.js'

// console.log(puppyList);

function App() {
  // const [count, setCount] = useState(0)
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  console.log("puppyList: ", puppyList);

  function handleClick() {
    // some logic here
  }

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)

  console.log(featuredPup);

  return (
    <div className="App">
      {puppies.map((puppy) => {
        return (
          <p onClick={()=>{ setFeatPupId(puppy.id) }} key={puppy.id}>
            {puppy.name}
          </p>
        );
      })}
      
      {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
    </div>
  );

  // return (
  //   <div className="App">
  //     {
  //       puppies.map((puppy) => {
  //            return <p key={puppy.id}>{puppy.name}</p>;
  //          })
  //      }
  //   </div>
  // );
  
  // return (
  //   <div>
  //     {
  //       puppies.map((puppy) => {
  //         return <p>{puppy.name}</p>
  //       })
  //     }
  //   </div>
  // )


}

export default App
