import { useEffect, useState } from 'react';
import styles from './styles.module.css'
type Props = {
  text: string;
  speed?: number; // ms per character
};

export default function TypingAnimation({ text, speed = 20 }: Props) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, ++i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      <span className={styles.cursor}>▌</span>
    </span>
  );
}
