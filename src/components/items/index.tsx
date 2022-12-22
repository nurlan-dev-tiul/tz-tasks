import React, { useState } from 'react';
import { ListItem } from './list';
import styles from './styles.module.scss';

interface Item {
    serialNumber: number;
    seconds: number;
}

export const Items = () => {

    const [items, setItems] = useState<Item[]>([]);
    const [serialNumber, setSerialNumber] = useState<number>(0);

    function handleAdd() {
        setSerialNumber(serialNumber + 1);
        const seconds = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
        setItems([...items, { serialNumber, seconds }]);
    }

    function handleRemove(serialNumber: number) {
        setItems(items.filter(item => item.serialNumber !== serialNumber));
    }


    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>Задание 2</h2>
                <button className={styles.btn} onClick={handleAdd}>Добавить элемент</button>
                {items.map(item => (
                    <ListItem
                        key={item.serialNumber}
                        serialNumber={item.serialNumber}
                        seconds={item.seconds}
                        onRemove={handleRemove}
                    />
                ))}
            </div>
        </div>
    )
}