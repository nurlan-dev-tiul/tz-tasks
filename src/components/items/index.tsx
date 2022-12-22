import { useState, useEffect } from 'react';
import styles from './styles.module.scss';

interface ListItem {
    id: number;
    seconds: number;
}

export const Items = () => {

    const [list, setList] = useState<ListItem[]>([]);

    //! Добавляем  новый элемент
    const addItem = () => {
        const newItem: ListItem = {
            id: list.length + 1,
            seconds: 10 + Math.floor(Math.random() * 20),
        };
        setList([...list, newItem]);
    };

    //! Удаляем элемент по истечению времени
    function handleRemove(id: number) {
        setList(list.filter(item => item.id !== id));
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setList((prevList) => {
                return prevList.map((item) => {
                    //! Запускаем таймер
                    if (item.seconds > 0) {
                        return {
                            ...item,
                            seconds: item.seconds - 1,
                        };
                    }
                    //! Удаляем если равен нулю
                    if (item.seconds === 0) {
                        handleRemove(item.id)
                    }
                    return item;
                });
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [list]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Задание 2</h2>
                <div className={styles.btn_container}>
                    <button className={styles.btn} onClick={addItem}>Добавить элемент</button>
                </div>
                <ul>
                    {list.map((item, index) => (
                        <li className={styles.list} key={item.id}>
                            {index + 1}. Исчезнет через {item.seconds} секунд
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}