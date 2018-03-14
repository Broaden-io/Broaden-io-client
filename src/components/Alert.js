import { ToastContainer, toast } from 'react-toastify';

export const Alert = (type) => {
  switch (type) {
    case 'loginError':
      toast.error('Could not login', {
        autoClose: 3000
      });
      break
    case 'signupError':
      toast.error('Could not signup', {
        autoClose: 3000
      });
      break
  }
}
