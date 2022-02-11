import {ReactNode, useEffect, useState} from 'react';
import {ReactNode} from 'react';
import styles from '../../styles/components/modal.module.sass';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ModalContent({children, className}: Props) {

     useEffect(() => {
          document.body.style.overflow = 'hidden';
          return ()=> document.body.style.overflow = 'unset';
       }, []);

  return (
    <div className={`${styles.tile} ${styles.modalContent} ${className ? className : ''}`}  >
      {children}
    </div>
  );
}
