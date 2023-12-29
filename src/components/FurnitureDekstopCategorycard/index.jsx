import React from "react";

import { Button, Img, Text } from "components";

const FurnitureDekstopCategorycard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="absolute h-[178px] inset-y-[0] my-auto object-cover right-[2%] w-[53%]"
          alt="imagefromrawp"
          src={props?.userimage}
        />
        <div className="absolute flex flex-col gap-3 h-max inset-y-[0] items-center justify-center left-[9%] my-auto w-auto">
          <Text
            className="text-2xl md:text-[22px] text-gray-900 sm:text-xl w-auto"
            size="txtRubikMedium24"
          >
            {props?.diningtablestext}
          </Text>
          <Button
            className="!text-black-900 cursor-pointer font-inter font-semibold min-w-[99px] rounded-[20px] text-center text-sm tracking-[0.30px]"
            color="white_A700"
            size="sm"
            variant="fill"
          >
            {props?.seemorebutton}
          </Button>
        </div>
      </div>
    </>
  );
};

FurnitureDekstopCategorycard.defaultProps = {
  userimage: "images/img_imagefromrawp.png",
  diningtablestext: "Dining Tables",
  seemorebutton: "See More",
};

export default FurnitureDekstopCategorycard;
