import {ReactNode, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from '../../styles/components/modal.module.sass';

interface Props {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export default function Modal({open, onClose, children, className}: Props) {
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(true);
  const sleep = ms => new Promise(res => setTimeout(res, ms));

  useEffect(() => {
    setMounted(true);
    setFadeOut(true);
    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    return () => {
      setMounted(false);
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
    };
  }, []);

  const closeOnEscapeKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  if (!open || !mounted) {
    return null;
  }

  async function closeModal(event){ //must be async func
    const modal = document.getElementById("myModal");
        if (event.target != modal) {
          setFadeOut(false)
          await sleep(1000) //wait 5 seconds
          setFadeOut(true)
          onClose()
        }
  }

  return ReactDOM.createPortal(
    <div
      id="myModal"
      className={`${styles.modal} ${className ? className : ''}`}
      onClick={(e)=>closeModal(e)}
    >
      <main  className={` ${fadeOut ? styles.tilein : styles.tileout} ${styles.main} }`} >
        {children}
      </main>
    </div>,
    document.getElementById('__next')!
  );
}
