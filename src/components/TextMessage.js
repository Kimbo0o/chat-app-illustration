const TextMessage = (props) => {
  let classNames =
    "inline-block max-w-[60%] text-[8px] px-[7px] py-[5px] rounded-[12px]";
  let wrapClassNames = "mt-[10px] flex";
  switch (props.type) {
    case "received":
      classNames +=
        " bg-mediumGrayishViolet text-moderateViolet rounded-bl-[5px]";
      break;
    case "sent":
      classNames +=
        " bg-white text-desaturatedDarkViolet rounded-br-[5px] shadow-lg";
      wrapClassNames += " justify-end ml-auto mr-0";
      break;
    default:
      break;
  }
  return (
    <div className={wrapClassNames}>
      <div className={classNames}>{props.text}</div>
    </div>
  );
};

export default TextMessage;
