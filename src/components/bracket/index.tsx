import { useState, ChangeEvent } from 'react';
import { countCorrectBrackets } from '../../utils/bracket';
import styles from './styles.module.scss';

export const Bracket = () => {

    const [text, setText] = useState('');

    const brackets = countCorrectBrackets(text);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    return (
        <div className={styles.wrapper}>
            <div>
            <h2>Задание 1</h2>
                <div className={styles.form}>
                    <input 
                        type="text"
                        placeholder='Введите текст'
                        className={styles.inp}
                        value={text}
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.count}>
                    <h5>Правильные скобки {brackets.correctCount}</h5>
                    <h5>Неправильные скобки {brackets.incorrectCount}</h5>
                </div>
            </div>
        </div>
    )
}