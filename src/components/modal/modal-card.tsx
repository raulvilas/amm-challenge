import Card from '../card';
import styles from '../../styles/components/modal.module.sass';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ModalCard({children, className}: Props) {
  return (
    <Card className={`${styles.modalCard} ${styles.tile} ${className ? className : ''}`}>
      {children}
    </Card>
  );
}
