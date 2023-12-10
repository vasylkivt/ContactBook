import { toast } from 'react-hot-toast';

export const add = contact => {
  toast.success(`${toCapitalize(contact.name)} added to your contact list.`);
};
export const addNameError = data => {
  toast.error(`${data.name}  is already in contacts. `);
};
export const addNumberError = data => {
  toast.error(`Number "${data.number}" is already in contacts. `);
};

export const remove = name => {
  toast.success(`${toCapitalize(name)} deleted from your contacts list.`);
};
export const update = (prevData, nextData) => {
  let message = '';
  if (nextData.name) {
    message += `✍️ '${toCapitalize(prevData.name)}' changed to '${toCapitalize(
      nextData.name
    )}' \n`;
  }
  if (nextData.number) {
    message += `✍️ '${prevData.number}' changed to '${nextData.number}' \n`;
  }

  toast.success(message);
};

export const registerSuccess = data => {
  toast.success(
    `${toCapitalize(data.user.name)}, you have successfully registered.`
  );
};

export const registerError = error => {
  if (error.response.status === 400) {
    toast.error(`This email already exists 😢,\n enter another email...`);
    return;
  }
  if (error.response.status === 500) {
    toast.error(
      `It seems that the server is overloaded, please try again later... \n ❓${error.message}`
    );
    return;
  }
  toast.error(`Unknown error... \n ${error.message}`);
};

export const loginSuccess = data => {
  toast.success(
    `You are successfully logged in as  ${toCapitalize(data.user.name)}`
  );
};
export const loginError = () => {
  toast.error(`Wrong login or password `);
};
export const logoutSuccess = () => {
  toast.success(`You are successfully logged in 🥲, come back soon 🥹.`);
};
export const logoutError = error => {
  toast.error(`Unknown error... \n ${error.message}`);
};
export const refreshSuccess = data => {
  toast.success(`Welcome back ${toCapitalize(data.name)}`);
};
export const refreshNoToken = () => {
  toast.success(`Welcome to the CONTACTBOOK app. `);
};
export const refreshError = error => {
  toast.error(`Unknown error... \n ${error.message}`);
};

function toCapitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
