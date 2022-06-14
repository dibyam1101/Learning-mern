import React, { useState } from 'react';
import "./TinderCards.css"
import TinderCard from 'react-tinder-card';

function TinderCards() {

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
    }

    const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
    }

    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://imageio.forbes.com/specials-images/imageserve/5f47d4de7637290765bce495/0x0.jpg?format=jpg&crop=2146,2145,x1699,y559,safe&height=416&width=416&fit=bounds"
        },

        {
            name: 'Jeff Bezos',
            url: "https://pbs.twimg.com/profile_images/669103856106668033/UF3cgUk4_400x400.jpg"
        }
    ]);

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className='swipe'
                        key={person.name}
                        onSwipe={onSwipe}
                        onCardLeftScreen={() => onCardLeftScreen('fooBar')}
                        preventSwipe={['up', 'down']}
                    >

                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card">

                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>

        </div>
    );
}

export default TinderCards;