// import React, { useState } from "react";
// import axios from "axios";

// export default function UploadFile() {
//   const [email, setEmail] = useState("");
//   const [file, setFile] = useState(null);
//   const saveFile = (e) => {
//     console.log(e.target.files[0]);
//     setFile(e.target.files[0]);
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(file);
//     const formData = new FormData();
//     formData.append("email", email);
//     formData.append("file", file);
//     try {
//       const res = await axios.post(
//         "https://reenbitapi.azurewebsites.net//api/FormFile/UploadFile",
//         formData
//       );
//       console.log(res);
//     } catch (error) {
//       alert("Error uploading file.");
//       console.error(error);
//     }
//   };
//   const handleClick = async () => {
//     const res = await axios.get(
//       "https://reenbitapi.azurewebsites.net/api/FormFile/GetEmail"
//     );
//     console.log(res);
//   };
//   return (
//     <div>
//       <h1>Upload File</h1>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "100vh",
//         }}
//       >
//         <form
//           style={{
//             backgroundColor: "#001e3c",
//             width: "500px",
//           }}
//         >
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//               placeholder="Enter email"
//             />
//             <small id="emailHelp" className="form-text text-muted">
//               We'll never share your email with anyone else.
//             </small>
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputPassword1">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Password"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// // <h1>File Upload Form</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="Email">Email:</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="File">File:</label>
// //           <input type="file" name="file" onChange={saveFile} required />
// //         </div>

// //         <div>
// //           <button type="submit">Upload</button>
// //         </div>
// //       </form>
// //       <button type="submit" onClick={handleClick}>
// //         Check Data
// //       </button>
