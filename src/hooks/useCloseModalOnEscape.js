import { useEffect } from 'react';

import { closeModal } from '/src/redux/contacts/slice';

export const useCloseModalOnEscape = dispatch => {
  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') dispatch(closeModal());
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);
};
