//======================== IGNORE==================
// import React from "react";
// import { useEffect, useState } from "react";
// import RemixIco from "../navigation/components/RemixIco";
// // import "./AddPostDialogStyle.css";
// import { Link } from "react-router-dom";
// import PostInfoDialog from "./PostInfoDialog";


// // COPY OF POSTINFODIALOG.JS

// const AddPostDialog = () => {
//   const [text, setText] = useState({
//     name: "",
//     desc: "",
//     image: null,
//   });
//   const [images, setImages] = useState([]);
//   useEffect(() => {
//     async function fetchImage() {
//       const url = "http://localhost:3001/posts/Posts";
//       const options = {
//         method: "GET",
//       };
//       try {
//         const response = await fetch(url, options);
//         const data = await response.json();
//         console.log(data);
//         setImages(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     fetchImage();
//   }, []);
//   const post = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", text.name);
//     formData.append("desc", text.desc);
//     formData.append("image", text.image);
//     const url = "http://localhost:3001/posts/Posts";
//     const options = {
//       method: "POST",
//       body: formData,
//     };
//     try {
//       const response = await fetch(url, options);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleChange = (e) => {
//     setText({ ...text, [e.target.name]: e.target.value });
//   };
//   const setPhoto = (e) => {
//     setText({ ...text, image: e.target.files[0] });
//   };

//   return (
//     <div>
//       <h1>To upload image on mongodb</h1>
//       <hr />
//       <div>
//         <form action="/" method="POST" enctype="multipart/form-data">
//           <div>
//             <label for="name">Image Title</label>
//             <input
//               type="text"
//               id="name"
//               placeholder="Name"
//               value={text.name}
//               onChange={handleChange}
//               name="name"
//               required
//             />
//           </div>
//           <div>
//             <label for="desc">Image Description</label>
//             <textarea
//               id="desc"
//               name="desc"
//               value={text.desc}
//               onChange={handleChange}
//               rows="2"
//               placeholder="Description"
//               required
//             ></textarea>
//           </div>
//           <div>
//             <label for="photo">Upload Image</label>
//             <input
//               type="file"
//               accept=".png, .jpg, .jpeg"
//               name="photo"
//               onChange={setPhoto}
//             />
//           </div>
//           <div>
//             <button type="submit" onClick={post}>
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//       <div>
//         <h1>Image List</h1>
//         <div>
//           {images.map((image, index) => {
//             return (
//               <div key={index}>
//                 <h2>{image.name}</h2>
//                 <p>{image.desc}</p>
//                 <p>{image.img.data}</p>
//                 <p>{image.img.contentType}</p>
//                 <img
//                   src={`data:${
//                     image.img.contentType
//                   };base64,${image.img.data.toString("base64")}`}
//                   alt={image.name}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default AddPostDialog;

