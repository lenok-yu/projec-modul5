import { useState } from 'react';
import { data } from './data';

function Slides(){
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
    return(
        <div>
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
        </div>
    )

}

export default Slides;