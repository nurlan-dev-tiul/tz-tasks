import {ReactNode} from 'react';
import styles from './layout.module.scss';

type LayoutProps = {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className={styles.wrapper}> 
            {children}
        </div>
    )
}