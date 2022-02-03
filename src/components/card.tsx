import {ReactNode} from 'react';
import styles from '../styles/components/card.module.sass';

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function Card({children, className}: Props) {
  return (
    <div className={`${styles.card} ${className ? className : ''}`}>
      {children}
    </div>
  );
}
