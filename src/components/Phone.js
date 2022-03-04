const Phone = (props) => {
  return (
    <div className="relative h-[712px] w-[350px] bg-black rounded-[60px]  border-white border-[14px] shadow-xl">
      <div className="absolute top-0 inset-x-0">
        <div className="h-6 w-40 mx-auto bg-white rounded-b-3xl"></div>
        <div className="relative">
          <div className="text-white">test</div>
        </div>
      </div>
      {props.children}
    </div>
  );
};

export default Phone;
