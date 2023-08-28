import React, {useState} from "react";
import "./image.css";
export default function ImageGenerator() {
  const [images, setimages] = useState(
    "https://static.vecteezy.com/system/resources/previews/000/365/820/original/question-mark-vector-icon.jpg"
  );
  const [input, setinput] = useState("");
  const handelapi = () => {
    fetch(
      "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({inputs: input}),
        Authoriztion: "Bearer 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",
      }
    )
      .then((res) => res.blob())
      .then((blob) => {
        // const tab = window.open((target = "_blank"));
        // tab.location.href = window.URL.createObjectURL(blob);
        console.log(URL.createObjectURL(blob));
        setimages(URL.createObjectURL(blob));
      });
  };
  return (
    <div className="Image-contain">
      <h2 className="nameimage">ImageGenerator</h2>
      <div className="input-contain">
        <div class="input-group">
          <input
            required=""
            type="text"
            name="text"
            autocomplete="off"
            class="input"
            placeholder="Type prompt you want"
            onChange={(e) => setinput(e.target.value)}
          />
        </div>
      </div>
      <div className="butt">
        <div className="gn-btn" onClick={handelapi}>
          Generat
        </div>
        {/*  */}
      </div>
      <div className="gn">
        <img className="pic-gn" src={images} />
      </div>
    </div>
  );
}
