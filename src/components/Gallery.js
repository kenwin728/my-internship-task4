import { useSelector } from "react-redux";

const Gallery = ({ setImageToView }) => {
  const { images } = useSelector((store) => store.data);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {images.map((src, index) => (
        <div key={index} onClick={() => setImageToView(src)}>
          <img
            className="h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={src}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
