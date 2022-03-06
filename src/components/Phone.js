import Back from "./Icons/Back";
import avatar from "../assets/img/avatar.jpg";
import DotsVertical from "./Icons/DotsVertical";
import TextMessage from "./TextMessage";
import ImagesMessage from "./ImagesMessage";
import dogImage1 from "../assets/img/dog-image-1.jpg";
import dogImage2 from "../assets/img/dog-image-2.jpg";
import dogImage3 from "../assets/img/dog-image-3.jpg";
import Offer from "./Offer";
import ChevronRight from "./Icons/ChevronRight";

const Phone = () => {
  const dogImages = [
    {
      src: dogImage1,
      alt: "dog image 1",
    },
    {
      src: dogImage2,
      alt: "dog image 2",
    },
    {
      src: dogImage3,
      alt: "dog image 3",
    },
  ];
  return (
    <div className=" z-10 relative h-[510px] w-[250px] bg-lightGrayishViolet rounded-[30px] border-[10px] border-white shadow-xl overflow-hidden flex flex-col justify-between">
      {/* header */}
      <div className="bg-gradient-to-r from-lightViolet to-lightMagenta pt-[20px] pb-[10px] rounded-[5px] text-white shadow-md">
        {/* notch */}
        <div className="absolute top-0 inset-x-0">
          <div className="h-[16px] w-[130px] mx-auto bg-white rounded-b-[10px]"></div>
        </div>
        {/* header-content */}
        <div className="mt-[7px] flex items-center justify-between px-2">
          <Back />
          <img
            src={avatar}
            alt="avatar"
            className="w-[24px] h-[24px] rounded-full border-white border-[1px]"
          />
          <div className="ml-[8px] mr-auto">
            <h3 className="text-[11px]">Samuel Green</h3>
            <div className="text-[8px] text-paleViolet">Available to Walk</div>
          </div>
          <div className="opacity-80">
            <DotsVertical />
          </div>
        </div>
      </div>
      {/* chat content */}
      <div className="mb-auto px-2 mt-1">
        <TextMessage
          type="received"
          text="That sounds great. I’d be happy with that."
        />
        <TextMessage
          type="received"
          text="Could you send over some pictures of your dog, please?"
        />
        <ImagesMessage images={dogImages} />
        <TextMessage
          type="sent"
          text="Here are a few pictures. She’s a happy girl!"
        />
        <TextMessage type="sent" text="Can you make it?" />
        <TextMessage
          type="received"
          text="She looks so happy! The time we discussed works. How long shall I take her out for?"
        />
        <Offer text="30 minute walk" price="$29" />
        <Offer text="1 hour walk" price="$49" />
      </div>
      {/* new message */}
      <div className="px-2 py-3">
        <div className="w-full bg-white p-1.5 rounded-full flex justify-between items-center">
          <div className="text-[9px] ml-[10px] text-grayishBlue">
            Type a Message...
          </div>
          <div className="bg-veryDarkDesaturatedViolet text-white p-[3px] rounded-full">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
