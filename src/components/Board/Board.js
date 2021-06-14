import React from 'react';
import { useBoard } from '../../hooks/board';

import styles from './Board.module.css';

const Board = () => {
    const { map, handleClear, handleStep } = useBoard();
    console.log(map);

    return (
        <div className={styles.box}>
            <div className={styles.control}>
                <button className={styles.clear} onClick={handleClear}>Clear</button>
            </div>
            <div className={styles.board}>
                <ul className={styles.map}>
                    {map && map.map((field, index) => (
                        <li key={index} className={styles.cell}>
                            {field === 'none'
                                ? <button onClick={() => handleStep(index)} >{field}</button>
                                : <>{field}</>
                            }
                        </li>
                    ))}                    
                </ul>
            </div>
        </div>
        
    )
}

export default Board;