import React, { Component } from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader'
// const upload = require('superagent')

 export default class ProfileImageUpload extends React.Component{
    onDrop: function (files) {
      upload.post('/upload')
      .attach('theseNamesMustMatch', files[0])
      .end((err, res) => {
        if (err) console.log(err);
        alert('File uploaded!');
      })
    }

    render(){
      return (
          <div>
            <Dropzone onDrop={this.onDrop} multiple=false>
              <div>Try dropping a file here, or click to select a file to upload.</div>
            </Dropzone>
          </div>
      );
    }
};

export default ProfileImageUpload;



// import React, { Component } from 'react';
// import axios from 'axios';
//
// class uploadMyFile extends Component {
//   ProfileImageUpload = (event) => {
//     const data = new FormData();
//     data.append('file', event.target.files[0]);
//     data.append('name', 'some value user types');
//     data.append('description', 'some value user types');
//     // '/files' is your node.js route that triggers our middleware
//     axios.post('/files', data).then((response) => {
//       console.log(response); // do something with the response
//     });
//
//     render() {
//       <div>
//         <input type="file" onChange={this.handleUploadFile} />
//       </div>
//     }
// }
//
// export default ProfileImageUpload;
