import React from 'react'

function Article({title, date = "January 1, 1970", preview, minutes}) {

    function coffeeCupDisplay(minutes) {
        if (minutes < 30) {
            const coffeeCups = Math.round(minutes / 5);
            return (
              <p>
                {Array(coffeeCups).fill('☕️').map((coffee, index) => (
                  <span key={index}>{coffee}</span>
                ))}
                {` ${minutes} min read`}
              </p>
            );
        } else if (minutes >= 30){
            const bentoBoxes = Math.round(minutes / 10);
            return (
                <p>
                {Array(bentoBoxes).fill('🍱').map((bento, index) => (
                    <span key={index}>{bento}</span>
                ))}
                {` ${minutes} min read`}
                </p>
            );
        }
    }

    return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
        <p>{preview}</p>
        {coffeeCupDisplay(minutes)}
    </article>
    )
}

export default Article
