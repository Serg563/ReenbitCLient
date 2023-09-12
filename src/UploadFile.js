import React, { useRef, useState } from "react";
import "./App.css";
import axios from "axios";

export default function UploadFile() {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [isValid, setIsValid] = useState(true);
  const formRef = useRef(null);
  const [emailError, setEmailError] = useState("");

  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  }
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    if (!validateEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const saveFile = (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];
    const validFileType =
      selectedFile.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    setFile(e.target.files[0]);
    setIsValid(validFileType);
    setFileError(
      validFileType ? "" : "Invalid file type. Please upload a .docx file."
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const formData = new FormData();
    formData.append("email", email);
    formData.append("file", file);
    try {
      const res = await axios.post(
        "https://reenbitapi.azurewebsites.net//api/FormFile/UploadFile",
        formData
      );
      console.log(res);
    } catch (error) {
      alert("Error uploading file.");
      console.error(error);
    }
    if (formRef.current) {
      formRef.current.reset();
    }
    setEmail("");
    setFile(null);
    setFileError("");
    setEmailError("");
  };

  return (
    <div className="center">
      <div className="card" style={{ backgroundColor: "#0d304e" }}>
        <div className="card-content">
          <h3 className="headerCentre">Upload File</h3>
          <div className="form">
            <form id="quiz-form" onSubmit={handleSubmit} ref={formRef}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  style={{ backgroundColor: "transparent" }}
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <div
                  className="error-message"
                  id="email-error"
                  style={{ color: "red" }}
                >
                  {emailError}
                </div>
              </div>
              <div className="form-group">
                <label>Load your .docx file</label>
                <input
                  id="file-upload"
                  type="file"
                  accept=".docx"
                  onChange={saveFile}
                  required
                />
                {fileError && (
                  <div className="error-message" style={{ color: "red" }}>
                    {fileError}
                  </div>
                )}
                <div className="error-message" id="name-error"></div>
              </div>
              <button
                type="submit"
                disabled={!isValid || emailError}
                // style={{
                //   backgroundColor: !isValid ? "#003d7b" : "#007bff",
                //   color: !isValid ? "white" : "",
                // }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
