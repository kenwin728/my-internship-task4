const ImageModal = ({ imageSrc, closeImageToView }) => {
  const downloadImage = (name, src) => {
    const link = document.createElement("a");
    link.href = src;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <aside className="fixed top-0 left-0 w-full h-full p-8 bg-black bg-opacity-70 z-10 flex flex-col items-center justify-center">
      <img
        src={imageSrc}
        className="w-full h-auto max-h-full"
        alt="ImageToView"
      ></img>
      <button
        type="button"
        className="uppercase rounded mt-9 border border-solid py-2 px-4 bg-transparent border-[#645cff] text-[#645cff] hover:bg-[#a29dff] shadow-[0_1px_3px_rgba(0,0,0,0.2)] cursor-pointer text-sm transition-all duration-[0.3s] ease-linear font-bold inline-block tracking-[0.25rem]"
        onClick={() => downloadImage("image", imageSrc)}
      >
        Download
      </button>
      <button
        type="button"
        className="uppercase rounded mt-9 border border-solid py-2 px-4 bg-transparent border-[hsl(360,67%,44%)] text-[hsl(360,67%,44%)] hover:bg-[hsl(360,71%,66%)] hover:text-[hsl(360,67%,44%)] hover:border-[hsl(360,71%,66%)] shadow-[0_1px_3px_rgba(0,0,0,0.2)] cursor-pointer text-sm transition-all duration-[0.3s] ease-linear font-bold inline-block tracking-[0.25rem]"
        onClick={closeImageToView}
      >
        X
      </button>
    </aside>
  );
};

export default ImageModal;
