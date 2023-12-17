import ModalWindow from 'components/ModalWindow/ModalWindow';
import { ButtonWrap, ModalWrap } from './ModalRefresh.styled';
import { useEffect, useState } from 'react';

export default function ModalRefresh() {
  const [textLanguage, setTextLanguage] = useState('en');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let id;
    id = setTimeout(setIsLoading, 3000, true);
    return () => {
      clearTimeout(id);
    };
  }, [isLoading]);

  return (
    <ModalWindow onShow={isLoading}>
      <ModalWrap>
        <ButtonWrap>
          <button onClick={() => setTextLanguage('uk')}>🇺🇦</button>
          <button onClick={() => setTextLanguage('en')}>🇬🇧</button>
        </ButtonWrap>
        {textLanguage === 'en' ? (
          <>
            <p>Hello!</p>
            <p>
              If you see this message, it means that the server is not ready
              yet.
            </p>
            <p>This is due to the fact that it is hosted on a free service.</p>
            <p>
              This window will close when the server is ready (the average
              waiting time is 20-40 seconds).
            </p>
            <p>Thank you for your attention!</p>
          </>
        ) : (
          <>
            <p>Привіт!</p>
            <p>
              Якщо ви бачите це повідомлення, це означає, що сервер ще не
              готовий.
            </p>
            <p>
              Це пов'язано з тим, що він розміщений на безкоштовному сервісі.
            </p>
            <p>
              Це вікно закриється, коли сервер буде готовий (середній час
              очікування 20-40 секунд).
            </p>
            <p>Дякую за вашу увагу!</p>
          </>
        )}
      </ModalWrap>
    </ModalWindow>
  );
}
