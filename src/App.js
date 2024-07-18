import Dropzone from "./components/Dropzone";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getImages } from "./features/data/dataSlice";
import ImageModal from "./components/ImageModal";

function App() {
  const dispatch = useDispatch();
  const [imageToView, setImageToView] = useState("");
  useEffect(() => {
    dispatch(getImages());
  }, [dispatch]);
  const closeImageToView = () => {
    setImageToView("");
  };
  return (
    <div>
      {imageToView && (
        <ImageModal
          imageSrc={imageToView}
          closeImageToView={closeImageToView}
        />
      )}
      <Gallery setImageToView={setImageToView} />
      <Dropzone />
    </div>
  );
}

export default App;
