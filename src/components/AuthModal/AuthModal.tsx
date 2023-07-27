import React, { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

import AuthWindow from '../AuthWindow/AuthWindow';

import styles from './AuthModal.module.scss';

interface AuthModalProps {
  opened: boolean;
  theme: string;
  authType: string;
}
const AuthModal: FC<AuthModalProps> = ({ opened, theme, authType }) => {
  const [openedModal, setOpenedModal] = useState<boolean>(opened);
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const closeModalHandler = () => {
    setOpenedModal(false);
  };

  useEffect(() => {
    setOpenedModal(opened);
  }, [opened]);

  return (
    <div
      className={openedModal ? styles.modalContainer : ''}
      onClick={closeModalHandler}
      aria-hidden
    >
      <div
        className={
          openedModal
            ? clsx(
                `${styles[`authModal__${theme}`]}`,
                `${styles[`authModal__${theme}__active`]}`,
              )
            : styles.authModal
        }
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        <button
          className={styles[`closeBtn__${theme}`]}
          type="button"
          onClick={closeModalHandler}
        />

        <AuthWindow changingPhone={false} sendingSmsCode={false} autologinToken={null} />
      </div>
    </div>
  );
};

export default AuthModal;
