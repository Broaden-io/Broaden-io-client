import { toast } from 'react-toastify';

export const Alert = (type, msg) => {
  switch (type) {
    case 'loginError':
      toast('Could not login. '+msg, {
        autoClose: 3000,
        className: "alert alert-rose",
        render: '<h2><strong>Could not login</strong></h2>'
      });
      break
    case 'signupError':
      toast('Could not signup. '+msg, {
        autoClose: 3000,
        className: "alert alert-rose",
        render: '<h2><strong>Could not signup</strong></h2>'
      });
      break
    default:
      break
  }
}
