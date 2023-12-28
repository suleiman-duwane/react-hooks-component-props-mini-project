function CoffeeCupDisplay({ minutes }) {
    if (minutes < 30) {
        const coffeeCups = Math.ceil(minutes / 5);
        return (
          <p>
            {Array(coffeeCups).fill('☕️').map((coffee, index) => (
              <span key={index}>{coffee}</span>
            ))}
            {` ${minutes} min read`}
          </p>
        );
    } else{
        const bentoBoxes = Math.ceil(minutes / 10);
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

export default CoffeeCupDisplay