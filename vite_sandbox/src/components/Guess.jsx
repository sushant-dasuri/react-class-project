export function Guess({guess, centerLetter}) {
    return (
        <section className="guess">
            <p className="guess-letters">
                {guess.split('').map((letter, index) => {
                    return <b key={index} className={'guess-letter '+ (letter === centerLetter ? "guess-center" : "guess-outer")}>{letter}</b>
                })}
                </p>
        </section>
    )
}