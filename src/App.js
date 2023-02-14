import { useState } from 'react';
import { data } from './data';
import { events } from './data';
import './App.css';

function App() {

  const [animal, setAnimal] = useState(0);
  const {id, name, description, photo, showMore} = data[animal];

  const previousAnimal = () => {
    setAnimal((animal => {
      animal--;
      if (animal < 0) animal = data.length - 1;
      return animal;
    }))
  }
  const nextAnimal = () => {
    setAnimal((animal => {
      animal++;
      if (animal > data.length - 1) animal = 0;
      return animal;
    }))
  }

  const [showText, setShowText] = useState(false);
  const showTextClick = (item) => {
    item.showMore = !item.showMore;
    setShowText(!showText);
  }

  const [myEvents,setMyEvents] = useState(events);
  
  const removeEvent = (id) => {
    let newEvents = myEvents.filter(event => event.id !== id);
    setMyEvents(newEvents);
  }

  return (
    <div>
      <h1> My Melbourne </h1>
      <div className='btn'>
          <button onClick={previousAnimal}> Previous </button>
          <h2> Animals in the city</h2>
          <button onClick={nextAnimal}> Next </button>
      </div>
      <div className='container'>
        <div>
          <h3> {id}. {name} </h3>
        </div>
        <div>
          <img src={photo} width='300px' alt='animal'/>
        </div>
        <div>
          <p> 
            {showMore ? description : description.substring(0,120) + "..."}
            <button className='btnShowMore' onClick={() => showTextClick(data[animal])}>{showMore ? "Show less" : "Show more"}</button>
          </p>
        </div>
      </div>

      <div className='container1'>
        <h2>List of {myEvents.length} events</h2>
        {myEvents.map( item => {
          const {id, event, place, day} = item;
          return(
            <div key={id} className="item">
              <div>
                <h3> {id}. {event} </h3>
                <p> {place} </p>
                <p> {day} </p>
              </div>
              <div>
                <button className='btn1' onClick={() => removeEvent(id)}>Remove</button>
              </div>
            </div>
            
          )
        })}
        <div>
          <button className='btn1' onClick={() => setMyEvents([])}> Delete all</button>
        </div>
      </div>
    </div>
  );
}

export default App;
