import React, {useState} from "react";
import {BiSolidDownload} from "react-icons/bi";
export default function Removebg() {
  const Api_key = "SsLmzp8yA5mGpPSWE9z3SodM";
  const url = "https://api.remove.bg/v1.0/removebg";
  const [img, setimg] = useState(null);
  const [file, setfile] = useState(null);
  const formData = new FormData();
  const reader = new FileReader();

  const src = (e) => {
    if (e.target.files.length > 0) {
      var src = URL.createObjectURL(e.target.files[0]);
      // formData.append("image_file", e.target.files[0], e.target.files[0].name);
      // formData.append("size", "auto");
      setfile(e.target.files[0]);
      console.log(formData);
      setimg(src);
      document.querySelector(".video").style.display = "none";
      document.querySelector("#start").style.display = "block";
      document.querySelector(".img").style.display = "block";
    }
  };
  const start = () => {
    setimg("./Pulse-1s-200px.gif");
    formData.append("image_file", file, file.name);
    formData.append("size", "auto");
    console.log(formData);
    fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": Api_key,
      },
      body: formData,
    })
      .then((res) => res.blob())
      .then((blob) => {
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          setimg(reader.result);
          document.querySelector("#start").style.display = "none";
          document.querySelector("#down").style.display = "block";
        };
        console.log(blob);
      });
  };
  return (
    <div className="Image-contain">
      <h2 className="nameimage">Removebg</h2>
      <div className="card-cotainer">
        <div className="card">
          <video className="video" muted autoPlay>
            <source src="./emilia_compressed.mp4" type="video/mp4" />
          </video>

          <img className="img" src={img} />
          <div className="form-input">
            <button className="gn-btn" id="start" onClick={start}>
              Start
            </button>

            <input type="file" id="file-ip-1" accept="image/*" onChange={src} />
            <label className="gn-btn" for="file-ip-1">
              Upload Image
            </label>
            <a href={img} className="gn-btn" id="down" download>
              <BiSolidDownload /> Download Image
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
