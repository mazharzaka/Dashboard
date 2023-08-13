import React from "react";
import "./wordtopdf.css";
import {useState} from "react";
import ConvertApi from "convertapi-js";
export default function WordtoPdf() {
  const [url, seturl] = useState("");
  let convertApi;
  let params;
  const src = (e) => {
    if (e.target.files.length > 0) {
      seturl(e.target.files[0]);
      document.querySelector("#form-pdf").style.display = "none";
      document.querySelector("#start-pdf").style.display = "flex";
    }
  };

  const start = async () => {
    console.log(url);
    convertApi = ConvertApi.auth("UDfgygbnTt71fSnP");
    params = convertApi.createParams();
    params.add("File", url);
    let result = await convertApi.convert("doc", "pdf", params);
    console.log(result.dto.Files[0].Url);
    seturl(result.dto.Files[0].Url);
    downloadFile(result.dto.Files[0].Url);
  };
  const downloadFile = (file) => {
    const element = document.createElement("a");
    element.setAttribute("href", file);
    element.setAttribute("download", file);

    element.style.display = "none";

    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
  };
  return (
    <div className="Image-contain">
      <h2 className="nameimage">Word to Pdf</h2>
      <div className="titlepdf">
        Make DOC and DOCX files easy to read by converting them to PDF.
      </div>
      <div>
        <div className="form-input" id="form-pdf">
          <input
            type="file"
            id="file-ip-1"
            onChange={src}
            accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          />
          <label className="gn-btn" id="pdf-btn" for="file-ip-1">
            Upload file word
          </label>
        </div>
        <div className="form-input" id="start-pdf">
          <button className="gn-btn" id="pdf-start" onClick={start}>
            start
          </button>
        </div>
      </div>
    </div>
  );
}
