const Offer = (props) => {
  return (
    <div className="w-[75%] mt-[10px] p-[7px] rounded-[12px] rounded-bl-[5px] flex justify-between items-center bg-gradient-to-r from-lightMagenta to-lightViolet text-white">
      <div className="w-[12px] h-[12px] border border-white opacity-30  rounded-full"></div>
      <div className="text-[8px] opacity-70 ml-[10px] mr-auto">
        {props.text}
      </div>
      <div className="text-[12px] font-semibold mr-[12px]">{props.price}</div>
    </div>
  );
};

export default Offer;
