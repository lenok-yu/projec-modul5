import { useState } from 'react';
import { events } from './data';

function Events(){
    const [myEvents,setMyEvents] = useState(events);
    
    const removeEvent = (id) => {
        let newEvents = myEvents.filter(event => event.id !== id);
        setMyEvents(newEvents);
    }

    return(
        <div>
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
    )

}

export default Events;