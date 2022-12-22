import{ useState, useEffect } from 'react';
import styles from './styles.module.scss';

type ListItemProps = {
    serialNumber: number
    seconds: number
    onRemove: (serialNumber: number) => void
}

export const ListItem = ({serialNumber, seconds, onRemove}: ListItemProps) => {
    const [times, setTimes] = useState(seconds);
    useEffect(() => {
  
            const interval = setInterval(() => {
                setTimes(times => times - 1);
            }, 1000);
            return () => clearInterval(interval);

    }, []);
    
    useEffect(() => {
        if (times === 0) {
            onRemove(serialNumber);
        }
    }, [times]);

    return (
        <div className={styles.list}>{serialNumber}. Исчезнет через {seconds} секунд</div>
    )
}