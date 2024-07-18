import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { addImage } from "../features/data/dataSlice";

const Dropzone = () => {
  const dispatch = useDispatch();
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result.split(",")[1];
        const payload = {
          filename: file.name,
          base64String: base64String,
        };
        dispatch(addImage(payload));
      };

      reader.readAsDataURL(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
  });

  return (
    <div>
      <div
        {...getRootProps({ className: "dropzone" })}
        style={{
          border: "2px dashed #cccccc",
          padding: "20px",
          margin: "10px",
          textAlign: "center",
        }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpg and *.png images will be accepted)</em>
      </div>
    </div>
  );
};

export default Dropzone;
