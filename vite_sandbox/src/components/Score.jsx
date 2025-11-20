

export function Score({correctGuesses}) {

    let score = correctGuesses.reduce(
      (score, word) => score + (word.length === 4 ? 1 : word.length),
      0
    );

    return (
    <p className="score">Score: {score}</p>
)
    
}


