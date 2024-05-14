import React from "react";

export default function UncontrolledComponent() {
  const inputRef = React.useRef(null);
  const fileRef = React.useRef(null);
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleSubmit = React.useCallback(() => {
    console.log(inputRef.current);
    console.log(document.getElementById("haha"));
  }, []);

  const handleChangeFile = React.useCallback((e: any) => {
    setSelectedFile(e.target.files[0]);
    const formData = new FormData();
    formData.append("myFile", e.target.files[0], e.target.files[0].name);
    // axios.post("api/upload-file", formData)
  }, []);
  return (
    <div>
      <form action="" onClick={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="Name"
            id="haha"
            ref={inputRef}
            defaultValue={"abc"}
          />
          <input
            ref={fileRef}
            type="file"
            name="Upload file"
            id=""
            onChange={handleChangeFile}
          />
        </label>
        <input type="submit" name="Submit" />
      </form>
    </div>
  );
}
