import React, { useState } from "react";
import { storage,fs } from "../../firebase-config";
const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imageError, setImageError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [uploadError, setUploadError] = useState("");
  const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"];
  const handleProductImg = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && types.includes(selectedFile.type)) {
        setImage(selectedFile);
        setImageError("");
      } else {
        setImage(null);
        setImageError("Please select a valid image file type (png or jpg)");
      }
    }else{
      console.log("Please select your file");
    }
  }
  const handleAddProducts=(e)=>{
    e.preventDefault();
    // console.log(name,description,price);
    // console.log(image);
  const uploadTask= storage.ref (`product-image/${image.name}`).put(image);
  uploadTask.on('state_changed',snapshot=>{
    const progress =(snapshot.bytesTrasferred/snapshot.totalBytes)*100
    console.log(progress);
   }, error=>setUploadError(error.message),()=>{
      storage.ref("product-image").child(image.name).getDownloadURL().then(url=>{
        fs.collection('products').add({
          name,
          description,
          price:Number(price),
          url
        }).then(()=>{
          setSuccessMsg("product added successfully");
          setName('');
          setDescription('');
          setPrice('');
          document.getElementById('file').value="";
          setImageError('')
          setUploadError('')
          setTimeout(()=>{
            setSuccessMsg('');

          },3000
          )
        }).catch(error=>setUploadError(error.message))
      })
    })
  }
    return (
      <section className="text-white bg-purple-100">
        <div className="flex flex-col items-center w-40 h-full overflow-hidden text-indigo-300 bg-indigo-900 rounded">
         <hr></hr>{successMsg&& <><div className="success-msg">{successMsg}</div> <br></br>
         </> } <a className="flex items-center w-full px-3 mt-3" href="#">
            <svg
              className="w-8 h-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="ml-2 text-sm font-bold">The App</span>
          </a>
          <div className="w-full px-2">
            <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Dasboard</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Search</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 text-gray-400 bg-indigo-700 text-indigo-100 rounded"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Insights</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Docs</span>
              </a>
            </div>
            <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Products</span>
              </a>
              <a
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Settings</span>
              </a>
              <a
                className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-indigo-700"
                href="#"
              >
                <svg
                  className="w-6 h-6 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
                <span className="ml-2 text-sm font-medium">Messages</span>
                <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full" />
              </a>
            </div>
          </div>
          <a
            className="flex items-center justify-center w-full h-16 mt-auto bg-indigo-800 hover:bg-indigo-700"
            href="#"
          >
            <svg
              className="w-6 h-6 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="ml-2 text-sm font-medium">Account</span>
          </a>
        </div>

        <div className="pb-10   ml-40 w-96   pl-10 pt-10  bg-purple-100 ">
          <div className=" w-full  mx-96 rounded-2xl  border border-white-700 border-opacity-70   p-5  relative md:rounded-2xl border border-gray-400 border-opacity-70  bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900  backdrop-blur-xl shadow-2xl m  transition duration-700 group-hover:scale-95">
            <div className="text-3xl text-center">Add Items</div>{" "}
            <form autoComplete="off"
              action=""
              className="p-8  mb-0 space-y-4 rounded-lg shadow-2xl"
            onSubmit={handleAddProducts}>
              <div>
                <label for="Name" class="text-sm font-medium">
                  Item Name
                </label>

                <div className="relative mt-1">
                  <input
                    className="w-full p-4 pr-12 text-sm text-black border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter Item Name"
                    type="text"
                    required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
              </div>
              <div>
                <label for="password" class="text-sm font-medium">
                  Description
                </label>

                <div class="relative mt-1">
                  <input
                    className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter Item Description"
                    type="text"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                  />
                </div>
              </div>
              <div>
                <label for="number" className="text-sm font-medium">
                  Pricing
                </label>

                <div class="relative mt-1">
                  <input
                    className="w-full p-4 pr-12 text-sm  text-black border-gray-200 rounded-lg shadow-sm"
                    placeholder="Enter Item Price"
                    type="number"
                    required
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                  />
                </div>
              </div>{" "}
              <div className="w-full space-y-0.5">
                <label  className="text-xs font-medium text-sm ">
                  {" "}
                  Product Image{" "}
                </label>
                <input
                  type="file" id="file"
                  className="block text-black w-full cursor-pointer appearance-none rounded-md border border-gray-200 bg-white px-3 py-2 text-sm transition focus:border-black focus:outline-none focus:ring-1 focus:ring-black disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75      form-control "
             required 
                  onChange={handleProductImg}
                />
                {imageError && 
                  <>
                    <br></br>
                    <div className="error-msg">{imageError}</div>
                  </>
                }{" "}
                <br></br>
              </div>
              <div style={{display:'flex', justifyContent:'flex-end'}}>
                    <button type="submit" className='btn btn-success btn-md'>
                        SUBMIT
                    </button>
                </div>
            </form>
            {uploadError&&<>
                    <br></br>
                    <div className='error-msg'>{uploadError}</div>
                    
                </>}

        </div>
        </div>
      </section>
    );
  };

export default CreateProduct;
