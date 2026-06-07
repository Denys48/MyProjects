const Results = ({ winners }) => {
    const votes = winners[0].votes;

    return (
        <div>
            <h2>Результати голосування</h2>

            {winners.length === 1 ? (
                <>
                    <p>Переможець: {winners[0].symbol}</p>
                    <p>Кількість голосів: {votes}</p>
                </>
            ) : (
                <>
                    <p>Нічия між: {winners.map(winner => winner.symbol).join(" ")}</p>
                    <p>Кількість голосів: {votes}</p>
                </>
            )}
        </div>
    );
};

export default Results;