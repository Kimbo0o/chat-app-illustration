const ImagesMessage = (props) => {
  return (
    <ul className="flex flex-wrap space-x-2 mt-[10px] justify-end">
      {props.images.map((image) => {
        return (
          <li>
            <img
              className="w-[40px] h-[40px] rounded-lg"
              src={image.src}
              alt={image.alt}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImagesMessage;
