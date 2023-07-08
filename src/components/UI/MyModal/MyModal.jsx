import React from 'react';
import styles from './MyModyle.module.css';

const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [styles.myModal];

  if (visible === 'true') {
    rootClasses.push(styles.myModalActive);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;