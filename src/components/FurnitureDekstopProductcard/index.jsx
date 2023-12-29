import React from "react";

import { Img, Text } from "components";

const FurnitureDekstopProductcard = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="h-[311px] sm:h-auto object-cover w-[294px] md:w-full"
          src="images/img_imageproduct.png"
          alt="imageproduct"
        />
        <div className="flex flex-col gap-2 items-start justify-start px-[18px] py-3 w-[294px] md:w-full">
          <Text
            className="text-gray-800 text-xl w-full"
            size="txtRubikRomanSemiBold20"
          >
            {props?.productname}
          </Text>
          <div className="flex flex-row gap-2.5 items-center justify-between w-full">
            <div className="flex flex-row gap-3.5 items-center justify-center w-auto">
              <Text
                className="line-through text-base text-gray-500_02 tracking-[-0.32px] w-auto"
                size="txtRubikMedium16"
              >
                {props?.productprice}
              </Text>
              <Text
                className="text-gray-900 text-lg tracking-[-0.36px] w-auto"
                size="txtRubikMedium18"
              >
                {props?.productdiscountedprice}
              </Text>
            </div>
            <Img
              className="h-[37px] rounded-[50%] w-[37px]"
              src="images/img_cart.svg"
              alt="cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

FurnitureDekstopProductcard.defaultProps = {
  productname: "Fabric Chair",
  productprice: "$105.00",
  productdiscountedprice: "$95.00",
};

export default FurnitureDekstopProductcard;
