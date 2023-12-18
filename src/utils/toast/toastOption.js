import { theme } from '../../styles';

export const toastOptions = {
  // Define default options

  style: {
    background: `#00000037`,
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '20px',
    backdropFilter: 'blur(15px)',
    color: `${theme.colors.white}`,
  },

  // Default options for specific types
  success: {
    style: {
      boxShadow: `0px 0px 5px 0px ${theme.colors.green}`,
    },
    iconTheme: {
      primary: `${theme.colors.green}`,
    },
  },

  error: {
    style: {
      boxShadow: `0px 0px 5px 0px ${theme.colors.red}`,
    },
    iconTheme: {
      primary: `${theme.colors.red}`,
    },
  },
};
