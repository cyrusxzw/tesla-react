import React, { useState } from 'react';

function App() {
    const [people, setPeople] = useState([
      {
        name: "jordan"
      },
      {
        name: "kobe"
      }
    ])
    const [person, setPerson] = useState({});

    const onChange = (e) => {
      const name = e.target.value;
      setPerson({
        name: name
      });
    }

    const onSubmit = (e) => {
      e.preventDefault();
      setPeople([
        ...people,
        person
      ]);
      console.log(person)
    }
    return(
      <div>
        {people.map((p, index) => <div key={index}>{p.name}</div>)}
        <div>
          <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange}/>
            <button type="submit">Submit</button>
          </form> 
        </div>
      </div>


    )
}


export default App;
