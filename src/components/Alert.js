import { toast } from 'react-toastify';

export const Alert = (type) => {
  switch (type) {
    case 'loginError':
      toast('Could not login', {
        autoClose: 3000,
        className: "alert alert-rose",
        render: '<h2><strong>Could not login</strong></h2>'
      });
      break
    case 'signupError':
      toast('Could not signup', {
        autoClose: 3000,
        className: "alert alert-rose",
        render: '<h2><strong>Could not login</strong></h2>'
      });
      break
    default:
      break
  }
}
