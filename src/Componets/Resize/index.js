import React from "react";
import {useState, useEffect} from "react";
import {BiSolidDownload} from "react-icons/bi";
import {TextField} from "@mui/material";
import Resizer from "react-image-file-resizer";
export default function Resize() {
  const [img, setimg] = useState(null);
  const [color, setcolor] = useState(null);
  const [file, setfile] = useState(null);
  const [width, setwidth] = useState(400);
  const [height, setheight] = useState(400);
  const formData = new FormData();
  const reader = new FileReader();
  useEffect(() => {
    document.querySelector(".pic-emogy").classList.add("active");
    document.querySelector(".emogy").classList.add("active");

    const images = [
      {pic: "./CryptoFluff_0179-removebg-preview.png", color: "#350678"},
      {pic: "./CryptoFluff_0037-removebg-preview.png", color: "#B26501"},
      {pic: "./CryptoFluff_0017-removebg-preview.png", color: "#BB0C45"},
      {pic: "./CryptoFluff_0059-removebg-preview.png", color: "#066501"},
      {pic: "./fullff.png", color: "#ad3700"},
    ];
    const image = images[Math.floor(Math.random() * images.length)];
    console.log(image);
    console.log(Math.floor(Math.random() * images.length));

    setimg(image.pic);
    setcolor(image.color);
  }, []);

  const src = (e) => {
    if (e.target.files.length > 0) {
      setimg("./Pulse-1s-200px.gif");
      document.querySelector(".pic-emogy").classList.remove("active");

      var src = URL.createObjectURL(e.target.files[0]);
      // formData.append("image_file",file,file.name);
      // formData.append("size", "auto");

      document.querySelector(".emogy").classList.remove("active");
      document.querySelector(".nums").classList.add("active");
      setimg(src);
      console.log(src);
      setcolor("#fff");
      document.querySelector("#start").style.display = "block";

      setfile(e.target.files[0]);
    }
  };
  const start = () => {
    setimg("./Pulse-1s-200px.gif");
    document.querySelector(".nums").classList.remove("active");

    var fileInput = false;
    console.log(file);
    if (file) {
      fileInput = true;
    }
    if (fileInput) {
      try {
        Resizer.imageFileResizer(
          file,
          width,
          height,
          "JPEG",
          100,
          0,
          (uri) => {
            console.log(uri);
            setimg(uri);
          },
          "base64"
        );
        document.querySelector("#start").style.display = "none";
        document.querySelector("#down").style.display = "block";
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="Image-contain">
      <h2 className="nameimage">Resize Image</h2>
      <div className="card-cotainer">
        <div className="card">
          <div className="pic-emogy" style={{backgroundColor: color}}>
            <img className="emogy" src={img} />
          </div>
          <div className="nums">
            <div class="inputGroup">
              <TextField
                id="outlined-basic"
                label="Width"
                variant="outlined"
                type="number"
                onChange={(e) => setwidth(e.target.value)}
              />
            </div>
            <div class="inputGroup">
              <TextField
                id="outlined-basic"
                label="Height"
                variant="outlined"
                type="number"
                onChange={(e) => setheight(e.target.value)}
              />
            </div>
          </div>
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
