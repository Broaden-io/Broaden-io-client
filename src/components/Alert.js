import { toast } from 'react-toastify';

export const Alert = (type) => {
  switch (type) {
    case 'loginError':
      toast.info('Could not login', {
        autoClose: 3000
      });
      break
    case 'signupError':
      toast.info('Could not signup', {
        autoClose: 3000
      });
      break
  }
}
