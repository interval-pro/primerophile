import "./test-pattern.scss";
import { useState, useEffect } from 'react';

const isPrime = (num: number) => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
};


export const TestPattern = () => {
    const _numbers = new Array(10000).fill(true).map((q, i) => i + 1)
    const [ numbers, setNumbers ] = useState(_numbers);
    const [ columns, setColumns ] = useState(10);
    const [ factorTwo, setFactorTwo ] = useState(false);
    const [ factorThree, setFactorThree ] = useState(false);
    const [ factorFive, setFactorFive ] = useState(false);
    const [ factorSeven, setFactorSeven ] = useState(false);

    useEffect(() => {
        reloadNumbers();
    }, [factorTwo, factorThree, factorFive, factorSeven ]);

    const reloadNumbers = () => {
        const newNumbers = _numbers
            .filter(q => factorTwo ? (q % 2 !== 0) : true)
            .filter(q => factorThree ? (q % 3 !== 0) : true)
            .filter(q => factorFive ? (q % 5 !== 0) : true)
            .filter(q => factorSeven ? (q % 7 !== 0) : true);
        setNumbers(newNumbers);
    }
    const toggleFactor = (f: number, isChecked: boolean) => {
        if (f === 2) setFactorTwo(isChecked);
        if (f === 3) setFactorThree(isChecked);
        if (f === 5) setFactorFive(isChecked);
        if (f === 7) setFactorSeven(isChecked);
    };

    return (
        <div className="test-pattern">
            <div className="settings">
                Columns: { columns }
                <input type='range' value={columns} min={2} max={32} onChange={(event) => setColumns(parseFloat(event.target.value))}></input>
                <span>
                    <input onChange={(event) => toggleFactor(2, event.target.checked)} type='checkbox'  />
                    <span>Remove Factors of 2 </span>
                </span>
                <span>
                    <input onChange={(event) => toggleFactor(3, event.target.checked)} type='checkbox' />
                    <span>Remove Factors of 3 </span>
                </span>
                <span>
                    <input onChange={(event) => toggleFactor(5, event.target.checked)} type='checkbox' />
                    <span>Remove Factors of 5</span>
                </span>
                <span>
                    <input onChange={(event) => toggleFactor(7, event.target.checked)} type='checkbox' />
                    <span>Remove Factors of 7</span>
                </span>
            </div>
            <div className="payload">
                {
                    numbers.map((q,n) => {
                        return (
                            <>
                                <div className="number" style={{color: isPrime(q) ? 'red' : 'blue'}}> { q } </div>
                                { (n+1) % columns === 0 ? <div className="break" ></div> : <></>}
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
};
