// // Redux action
// export function uploadSuccess({ data }) {
//   return {
//     type: 'UPLOAD_DOCUMENT_SUCCESS',
//     data,
//   };
// }
//
// export function uploadFail(error) {
//   return {
//     type: 'UPLOAD_DOCUMENT_FAIL',
//     error,
//   };
// }
//
// export function uploadDocumentRequest({ file, name }) {
//   let data = new FormData();
//   data.append('file', document);
//   data.append('name', name);
//
//   return (dispatch) => {
//     axios.post('/files', data)
//       .then(response => dispatch(uploadSuccess(response))
//       .catch(error => dispatch(uploadFail(error));
//   };
// }
//
// /*
//  ... A lot of Redux / React boilerplate happens here
//  like mapDispatchToProps and mapStateToProps and @connect ...
// */
//
// // Component method
// handleFileUpload({ file }) {
//   const file = files[0];
//   this.props.actions.uploadRequest({
//      file,
//      name: 'Awesome Cat Pic'
//   })
// }
//
// // Component render
// <input type="file" onChange={this.handleFileUpload} />
