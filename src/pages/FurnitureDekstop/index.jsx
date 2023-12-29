import React from "react";

import { Button, Img, Input, Line, List, RatingBar, Text } from "components";
import FurnitureDekstopCategorycard from "components/FurnitureDekstopCategorycard";
import FurnitureDekstopProductcard from "components/FurnitureDekstopProductcard";
import FurnitureDekstopProductcard1 from "components/FurnitureDekstopProductcard1";

const FurnitureDekstopPage = () => {
  const furnitureDekstopCategorycardPropList = [
    { diningtablestext: "Sofa", userimage: "images/img_imagefromrawp_8.png" },
    {
      diningtablestext: "nightstand",
      userimage: "images/img_imagefromrawp_9.png",
    },
    {
      diningtablestext: "Bedroom",
      userimage: "images/img_imagefromrawp_10.png",
    },
  ];

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-poppins sm:gap-10 md:gap-10 gap-[60px] items-center justify-start mx-auto py-6 w-auto sm:w-full md:w-full">
        <div className="flex flex-col gap-2.5 items-center justify-start max-w-[1466px] mx-auto pb-[54px] md:px-5 w-full">
          <header className="flex flex-col items-center justify-center w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[113px] mr-[107px] mt-3 w-[84%]">
              <div className="flex flex-row gap-[23.47px] h-[22px] md:h-auto items-start justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-[35%]">
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_call.svg"
                      alt="call"
                    />
                    <Text
                      className="text-[13.2px] text-blue_gray-900"
                      size="txtPoppinsRegular132"
                    >
                      +xx xxx xxx x
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[58%]">
                  <div className="flex flex-row gap-3 items-start justify-start w-full">
                    <Img
                      className="h-[17px] w-[17px]"
                      src="images/img_email.svg"
                      alt="email"
                    />
                    <Text
                      className="mt-0.5 text-[13.2px] text-blue_gray-900"
                      size="txtPoppinsRegular132"
                    >
                      xxxxxxxxxx@xxxxxx.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[23.47px] h-[17px] md:h-auto items-start justify-start w-auto">
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_instagram.svg"
                  alt="instagram"
                />
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_facebook.svg"
                  alt="facebook"
                />
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_twitter.svg"
                  alt="twitter"
                />
                <Img
                  className="h-[17px] w-[17px]"
                  src="images/img_linkedin.svg"
                  alt="linkedin"
                />
              </div>
            </div>
            <Line className="bg-gray-500_87 h-px mt-[9px] mx-auto w-[84%]" />
            <div className="flex md:flex-col flex-row font-inter md:gap-5 items-start justify-start mt-[11px] mx-auto w-[84%]">
              <Text
                className="md:mt-0 mt-0.5 sm:text-[22.4px] md:text-[24.4px] text-[26.4px] text-blue_gray-900_01"
                size="txtInterSemiBold264"
              >
                Furniture
              </Text>
              <ul className="flex sm:flex-col flex-row gap-[41.07px] sm:hidden items-center justify-center md:ml-[0] ml-[238px] md:mt-0 mt-[11px] w-auto sm:w-full common-row-list">
                <li>
                  <a href="javascript:" className="text-base text-gray-700">
                    <Text size="txtInterRegular16">Home</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-gray-500 hover:text-gray-700"
                  >
                    <Text size="txtInterRegular16Gray500">About</Text>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row font-nunitosans gap-[5.87px] items-center justify-center">
                      <Text
                        className="text-base text-gray-500 hover:text-gray-700 w-auto"
                        size="txtNunitoSansRegular16"
                      >
                        Furniture
                      </Text>
                      <Img
                        className="h-[17px] w-[17px]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-gray-500 hover:text-gray-700"
                  >
                    <Text size="txtInterRegular16Gray500">Car Catalogue</Text>
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:"
                    className="text-base text-gray-500 hover:text-gray-700"
                  >
                    <Text size="txtInterRegular16Gray500">FAQ</Text>
                  </a>
                </li>
              </ul>
              <div className="flex flex-row gap-[23.47px] items-center justify-center md:ml-[0] ml-[113px] w-auto">
                <div className="flex flex-col font-nunitosans items-center justify-center p-[5.87px] w-auto">
                  <a
                    href="javascript:"
                    className="text-[13.2px] text-yellow-900 underline w-auto"
                  >
                    <Text size="txtNunitoSansRegular132">Sign In</Text>
                  </a>
                </div>
                <Button
                  className="cursor-pointer font-poppins h-11 leading-[normal] text-[13.2px] text-center w-[109px]"
                  shape="round"
                  color="orange_A200_01"
                  size="md"
                  variant="fill"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </header>
          <div className="flex flex-col font-inter md:gap-10 gap-[65px] items-center justify-end py-9 w-[93%] md:w-full">
            <div className="md:h-[436px] h-[482px] mt-[21px] relative w-[99%] md:w-full">
              <div className="absolute flex flex-col gap-4 items-start justify-start left-[2%] top-[0] w-auto">
                <Text
                  className="leading-[120.00%] max-w-[533px] md:max-w-full md:text-5xl text-[64px] text-blue_gray-900_01"
                  size="txtInterBold64"
                >
                  Perfect Harmony: Comfort & Style
                </Text>
                <Text
                  className="leading-[30.00px] max-w-[508px] md:max-w-full text-[18.49px] text-gray-500"
                  size="txtInterRegular1849"
                >
                  Explore furniture that harmoniously combines comfort and style
                  to elevate your home
                </Text>
                <div className="flex flex-row font-poppins gap-[25px] items-center justify-start w-auto">
                  <Button
                    className="cursor-pointer h-[46px] leading-[normal] min-w-[155px] rounded-[23px] text-[13.87px] text-center"
                    shape="round"
                    color="blue_gray_900_01"
                    size="md"
                    variant="outline"
                  >
                    Explore Our Offers
                  </Button>
                  <div className="flex flex-row gap-[13px] items-center justify-start w-[44%]">
                    <Button
                      className="flex h-9 items-center justify-center w-9"
                      shape="circle"
                      color="white_A700"
                      size="sm"
                      variant="fill"
                    >
                      <Img
                        className="h-[18px]"
                        src="images/img_overflowmenu.svg"
                        alt="overflowmenu"
                      />
                    </Button>
                    <Text
                      className="text-[13.87px] text-gray-500"
                      size="txtPoppinsRegular1387"
                    >
                      Watch Video
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute font-poppins md:h-[415px] h-[471px] inset-[0] justify-center m-auto w-full">
                <div className="absolute h-[415px] right-[0] top-[0] w-[51%] md:w-full">
                  <Img
                    className="absolute h-[415px] inset-[0] justify-center m-auto object-cover rounded-[43px] w-full"
                    src="images/img_rectangle1.png"
                    alt="rectangleOne"
                  />
                  <div className="absolute bg-gradient  bottom-[0] h-[362px] right-[10%] rounded-tl-[24px] rounded-tr-[24px] w-[24%]"></div>
                </div>
                <div className="absolute bg-white-A700 bottom-[0] flex md:flex-col flex-row gap-[24.65px] items-center justify-center left-[0] max-w-[969px] p-[24.65px] sm:px-5 rounded-[48px] shadow-bs2 w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-3 grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-[38%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[6.16px] items-start justify-start w-auto">
                      <Text
                        className="text-[13.87px] text-gray-500_01 w-auto"
                        size="txtPoppinsSemiBold1387"
                      >
                        Confort
                      </Text>
                      <div className="flex flex-col items-center justify-center w-auto">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row gap-1 items-center justify-between w-[148px]">
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_location.svg"
                              alt="location"
                            />
                            <Text
                              className="text-[13.87px] text-gray-500 w-auto"
                              size="txtPoppinsMedium1387"
                            >
                              Cozy Seating
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[46px] bg-gray-500_87 w-px" />
                    <div className="flex flex-col gap-[6.16px] items-start justify-start w-auto">
                      <Text
                        className="text-[13.87px] text-gray-500_01 w-auto"
                        size="txtPoppinsSemiBold1387"
                      >
                        Quality Assurance
                      </Text>
                      <div className="flex flex-col items-center justify-start w-[175px]">
                        <div className="flex flex-col items-center justify-start w-[85%]">
                          <div className="flex flex-row gap-1 items-center justify-between w-[148px]">
                            <Img
                              className="h-[21px] w-[21px]"
                              src="images/img_offer.svg"
                              alt="offer"
                            />
                            <Text
                              className="text-[13.87px] text-gray-500 w-auto"
                              size="txtPoppinsMedium1387"
                            >
                              Cozy Seating
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-[6.16px] items-start justify-start w-auto">
                    <Text
                      className="text-[13.87px] text-gray-500_01 w-auto"
                      size="txtPoppinsSemiBold1387"
                    >
                      Free Shipping
                    </Text>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-[98%]">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                          <Img
                            className="h-[18px] w-[18px]"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Text
                            className="text-[13.87px] text-gray-500"
                            size="txtPoppinsMedium1387"
                          >
                            No-Cost Delivery
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6.16px] items-start justify-start w-auto">
                    <Text
                      className="text-[13.87px] text-gray-500_01 w-auto"
                      size="txtPoppinsRegular1387Gray50001"
                    >
                      Secure Checkout
                    </Text>
                    <div className="flex flex-col items-center justify-start w-auto">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-full">
                          <div className="flex flex-col h-[18px] items-start justify-start w-[18px]">
                            <Img
                              className="h-[17px] w-[17px]"
                              src="images/img_checkmark.svg"
                              alt="checkmark"
                            />
                          </div>
                          <Text
                            className="text-[13.87px] text-gray-500"
                            size="txtPoppinsMedium1387"
                          >
                            Secure Payments
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="!text-black-900 border border-black-900 border-solid cursor-pointer h-[46px] leading-[normal] rounded-[23px] text-[13.87px] text-center w-[123px]"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    See More
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 gap-[61.63px] items-center justify-center max-w-[1229px] w-full">
              <Text
                className="sm:text-[23.73px] md:text-[25.73px] text-[27.73px] text-blue_gray-900_01 w-auto"
                size="txtInterBold2773"
              >
                Lowe’s
              </Text>
              <Text
                className="sm:text-[23.73px] md:text-[25.73px] text-[27.73px] text-blue_gray-900 w-auto"
                size="txtPoppinsMedium2773"
              >
                DeWalt
              </Text>
              <Text
                className="sm:text-[23.73px] md:text-[25.73px] text-[27.73px] text-blue_gray-900 w-auto"
                size="txtMontserratRomanSemiBold2773"
              >
                Home Depot
              </Text>
              <Text
                className="sm:text-[23.73px] md:text-[25.73px] text-[27.73px] text-blue_gray-900 w-auto"
                size="txtMontserratBold2773"
              >
                IKEA
              </Text>
              <Text
                className="sm:text-[23.73px] md:text-[25.73px] text-[27.73px] text-blue_gray-900 w-auto"
                size="txtPoppinsBold2773"
              >
                Makita
              </Text>
              <Text
                className="sm:text-[23.73px] md:text-[25.73px] text-[27.73px] text-blue_gray-900 w-auto"
                size="txtInterBold2773Bluegray900"
              >
                3M
              </Text>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start max-w-[1248px] mx-auto md:px-5 w-full">
          <FurnitureDekstopCategorycard className="bg-gray-200_7c md:h-[178px] h-[180px] pt-0.5 px-0.5 relative rounded-[20px] w-[33%] md:w-full" />
          <List
            className="md:flex-1 sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
            orientation="horizontal"
          >
            <FurnitureDekstopCategorycard
              className="bg-gray-200_7c flex flex-row items-center justify-between pt-0.5 px-0.5 rounded-[20px] w-full"
              userimage="images/img_imagefromrawp_178x211.png"
              diningtablestext="Chairs"
            />
            <FurnitureDekstopCategorycard
              className="bg-gray-200_7c flex sm:flex-col flex-row sm:gap-5 items-center justify-center pt-0.5 px-0.5 rounded-[20px] w-full"
              userimage="images/img_imagefromrawp_1.png"
              diningtablestext="Office Desks"
            />
          </List>
        </div>
        <div className="flex flex-col font-rubik md:gap-10 gap-16 items-start justify-start max-w-[1248px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row gap-[15px] items-center justify-between max-w-[1248px] w-full">
            <div className="flex sm:flex-1 flex-col gap-[15px] items-start justify-center w-auto sm:w-full">
              <Button
                className="cursor-pointer font-medium font-rubik h-[45px] min-w-[206px] rounded-[16px] text-center text-lg tracking-[-0.36px]"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                Check Our Product
              </Button>
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[0.30px] w-auto"
                size="txtInterBold28"
              >
                Crafted with excellent material
              </Text>
            </div>
            <div className="flex sm:flex-1 sm:flex-col flex-row gap-8 items-center justify-center w-[415px] sm:w-full">
              <Button
                className="cursor-pointer font-medium font-poppins rounded-[19px] text-[11.04px] text-center w-[109px]"
                color="black_900"
                size="sm"
                variant="outline"
              >
                Best Seller
              </Button>
              <Text
                className="text-gray-500 text-sm tracking-[0.30px] w-auto"
                size="txtInterRegular14"
              >
                Chair
              </Text>
              <Text
                className="text-gray-500 text-sm tracking-[0.30px] w-auto"
                size="txtInterRegular14"
              >
                Table
              </Text>
              <Text
                className="text-gray-500 text-sm tracking-[0.30px] w-auto"
                size="txtInterRegular14"
              >
                Bed
              </Text>
              <Text
                className="text-gray-500 text-sm tracking-[0.30px] w-auto"
                size="txtInterRegular14"
              >
                Closet
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-auto md:w-full">
            <div className="md:gap-5 gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <FurnitureDekstopProductcard className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full" />
              <FurnitureDekstopProductcard1 className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full" />
              <FurnitureDekstopProductcard1
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full"
                imagefromrawp="images/img_imagefromrawp_2.png"
              />
              <FurnitureDekstopProductcard1
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full"
                imagefromrawp="images/img_imagefromrawp_3.png"
              />
              <FurnitureDekstopProductcard1
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full"
                imagefromrawp="images/img_imagefromrawp_4.png"
              />
              <FurnitureDekstopProductcard1
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full"
                imagefromrawp="images/img_imagefromrawp_5.png"
              />
              <FurnitureDekstopProductcard1
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full"
                imagefromrawp="images/img_imagefromrawp_6.png"
              />
              <FurnitureDekstopProductcard1
                className="bg-white-A700 flex flex-1 flex-col items-start justify-start w-full"
                imagefromrawp="images/img_imagefromrawp_7.png"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-[60px] items-center justify-start max-w-[1320px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start p-[5px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-[95px] mt-[75px] w-[97%] md:w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-auto sm:w-full">
                <Text
                  className="leading-[56.00px] max-w-[479px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-gray-900_01 tracking-[0.30px]"
                  size="txtInterSemiBold44"
                >
                  Elevate Your Space with Uncompromising Quality
                </Text>
                <div className="flex flex-col items-start justify-center w-full">
                  <Text
                    className="leading-[24.00px] max-w-[479px] md:max-w-full text-gray-800_01 text-sm tracking-[0.30px]"
                    size="txtInterRegular14Gray80001"
                  >
                    Experience the epitome of furniture quality. Our products
                    are meticulously crafted with an unwavering commitment to
                    excellence. From the finest materials to expert
                    craftsmanship, each piece embodies durability, comfort, and
                    timeless style. Elevate your space with the assurance of
                    exceptional quality and lasting beauty
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                  <div className="flex flex-row gap-5 items-end justify-start w-[63%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_yellow_900.svg"
                      alt="checkmark_One"
                    />
                    <Text
                      className="mb-1 mt-[7px] text-base text-gray-900_01"
                      size="txtInterMedium16"
                    >
                      Experience Unparalleled Quality
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[21px] items-center justify-start w-[56%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_yellow_900.svg"
                      alt="checkmark_Two"
                    />
                    <Text
                      className="text-base text-gray-900_01"
                      size="txtInterMedium16"
                    >
                      Built to Last for Generations
                    </Text>
                  </div>
                  <div className="flex flex-row gap-5 items-end justify-start w-[62%] md:w-full">
                    <Img
                      className="h-8 w-8"
                      src="images/img_checkmark_yellow_900.svg"
                      alt="checkmark_Three"
                    />
                    <Text
                      className="mb-1 mt-[7px] text-base text-gray-900_01"
                      size="txtInterMedium16"
                    >
                      Loved by Customers Worldwide
                    </Text>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-semibold min-w-[152px] rounded-[25px] text-base text-center"
                  color="black_900"
                  size="lg"
                  variant="fill"
                >
                  Shop Now
                </Button>
              </div>
              <div className="flex md:h-[557px] h-[558px] justify-end relative w-[52%] md:w-full">
                <Button
                  className="flex h-[49px] items-center justify-center mb-[219px] ml-[55px] mt-auto rotate-[15deg] rounded-[10px] w-[49px]"
                  color="yellow_900"
                  size="sm"
                  variant="fill"
                >
                  <Img src="images/img_group113.svg" alt="group113" />
                </Button>
                <div className="absolute md:h-[557px] h-[558px] inset-[0] justify-center m-auto w-full">
                  <Img
                    className="absolute h-[557px] inset-y-[0] my-auto object-cover right-[8%] w-[477px]"
                    src="images/img_frame48096244.png"
                    alt="frame48096244"
                  />
                  <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] p-3 rounded-[10px] shadow-bs1 top-[8%] w-[48%]">
                    <div className="flex flex-row items-center justify-between w-[95%] md:w-full">
                      <Img
                        className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                        src="images/img_ellipse33.png"
                        alt="ellipseThirtyThree"
                      />
                      <div className="flex flex-col gap-3 items-start justify-start">
                        <Text
                          className="text-[16.26px] text-gray-900_01"
                          size="txtInterMedium1626"
                        >
                          Mark Anderson
                        </Text>
                        <Text
                          className="text-[12.19px] text-gray-500_03"
                          size="txtInterMedium1219"
                        >
                          Furniture Craftsmanship
                        </Text>
                      </div>
                      <div className="bg-yellow-900 flex flex-col h-10 items-center justify-start my-[9px] p-2.5 rounded-[50%] w-10">
                        <Button
                          className="flex h-5 items-center justify-center w-5"
                          shape="square"
                          color="yellow_900"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-[15px]"
                            src="images/img_search.svg"
                            alt="search"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bottom-[0] cursor-pointer flex items-center justify-center min-w-[306px] right-[0] rounded-[10px]"
                    leftIcon={
                      <Img
                        className="h-6 mb-px mr-[15px] bottom-[0] right-[2%] absolute"
                        src="images/img_circle_1.svg"
                        alt="circle 1"
                      />
                    }
                    color="white_A700"
                    size="xl"
                    variant="fill"
                  >
                    <div className="!text-gray-900_01 leading-[normal] text-[18.29px] text-left tracking-[-0.55px]">
                      We think about every detail
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[1248px] w-full"
            orientation="horizontal"
          >
            {furnitureDekstopCategorycardPropList.map((props, index) => (
              <React.Fragment key={`FurnitureDekstopCategorycard${index}`}>
                <FurnitureDekstopCategorycard
                  className="bg-gray-200_84 flex flex-1 flex-row items-center justify-between pt-0.5 px-0.5 rounded-[20px] w-full"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between p-[23px] sm:px-5 w-full">
            <div className="flex h-[561px] md:h-[648px] justify-end mb-[91px] md:mt-0 mt-[41px] relative w-[55%] md:w-full">
              <Button
                className="flex h-[49px] items-center justify-center mb-[222px] ml-[55px] mt-auto rotate-[15deg] rounded-[10px] w-[49px]"
                color="yellow_900"
                size="sm"
                variant="fill"
              >
                <Img src="images/img_television.svg" alt="television" />
              </Button>
              <div className="absolute md:h-[557px] h-[561px] inset-[0] justify-center m-auto w-full">
                <Img
                  className="absolute h-[557px] inset-[0] m-auto object-cover w-[477px]"
                  src="images/img_frame48096244_557x477.png"
                  alt="frame48096244_One"
                />
                <div className="absolute bg-white-A700 flex flex-col items-center justify-start left-[0] p-3 rounded-[10px] shadow-bs1 top-[8%] w-[45%]">
                  <div className="flex flex-row items-end justify-between w-[95%] md:w-full">
                    <Img
                      className="h-[58px] md:h-auto rounded-[50%] w-[58px]"
                      src="images/img_ellipse33_58x58.png"
                      alt="ellipseThirtyThree_One"
                    />
                    <div className="flex flex-col items-start justify-start mt-1.5">
                      <Text
                        className="text-[16.26px] text-gray-900_01"
                        size="txtInterMedium1626"
                      >
                        Victor Adams
                      </Text>
                      <Text
                        className="mt-0.5 text-[12.19px] text-gray-500_03 w-full"
                        size="txtInterMedium1219"
                      >
                        Interior Design and Styling
                      </Text>
                    </div>
                    <div className="bg-yellow-900 flex flex-col h-10 items-center justify-start my-[9px] p-2.5 rounded-[50%] w-10">
                      <Button
                        className="flex h-5 items-center justify-center w-5"
                        shape="square"
                        color="yellow_900"
                        size="xs"
                        variant="fill"
                      >
                        <Img
                          className="h-[15px]"
                          src="images/img_search.svg"
                          alt="search_One"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
                <Input
                  name="group114"
                  placeholder="We guarantee your comfort"
                  className="leading-[normal] p-0 placeholder:text-gray-900_01 text-[18.29px] text-left tracking-[-0.55px] w-full"
                  wrapClassName="bottom-[0] flex right-[0] w-[45%]"
                  prefix={
                    <Img
                      className="mt-auto mb-px h-6 mr-[15px] bottom-[0] right-[2%] absolute"
                      src="images/img_circle_1.svg"
                      alt="circle 1"
                    />
                  }
                ></Input>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-col gap-6 items-start justify-start mr-[35px] md:mt-0 mt-[69px] w-auto sm:w-full">
              <Text
                className="leading-[56.00px] max-w-[478px] md:max-w-full sm:text-[34px] md:text-[40px] text-[44px] text-gray-900_01 tracking-[0.30px]"
                size="txtInterSemiBold44"
              >
                Elevate Your Mood with Comfortable Furniture
              </Text>
              <div className="flex flex-col items-start justify-center w-full">
                <Text
                  className="leading-[24.00px] max-w-[478px] md:max-w-full text-gray-800_01 text-sm tracking-[0.30px]"
                  size="txtInterRegular14Gray80001"
                >
                  Your surroundings have a profound impact on your mood.
                  Discover how our high-quality furniture can transform your
                  space into a haven of comfort and happiness. Create an
                  environment that nurtures your well-being and elevates your
                  spirits with the perfect blend of style and coziness.
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-auto sm:w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-[44%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_checkmark_yellow_900.svg"
                    alt="checkmark_Four"
                  />
                  <Text
                    className="text-base text-gray-900_01"
                    size="txtInterMedium16"
                  >
                    Unmatched Comfort
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-end justify-start w-[41%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_checkmark_yellow_900.svg"
                    alt="checkmark_Five"
                  />
                  <Text
                    className="mb-1 mt-[7px] text-base text-gray-900_01"
                    size="txtInterMedium16"
                  >
                    Crafted for Quality
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-end justify-start w-[38%] md:w-full">
                  <Img
                    className="h-8 w-8"
                    src="images/img_checkmark_yellow_900.svg"
                    alt="checkmark_Six"
                  />
                  <Text
                    className="mb-1 mt-[7px] text-base text-gray-900_01"
                    size="txtInterMedium16"
                  >
                    Stylish Elegance
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-semibold min-w-[152px] rounded-[25px] text-base text-center"
                color="black_900"
                size="lg"
                variant="fill"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-inter md:gap-10 gap-[60px] items-center justify-start max-w-[1449px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start max-w-[1449px] w-full">
            <div className="bg-black-900 flex md:flex-col flex-row gap-[30px] items-center justify-start p-[58px] md:px-10 sm:px-5 w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] w-[49%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-white-A700 w-[81%] sm:w-full"
                    size="txtInterSemiBold50"
                  >
                    Our Dedication to Your Satisfaction
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[30px] text-base text-white-A700 w-full"
                    size="txtInterMedium16WhiteA700"
                  >
                    , we take pride in our unwavering commitment to quality and
                    customer satisfaction. With a track record of excellence, we
                    provide you with the finest furniture and a service you can
                    trust.
                  </Text>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[79px] grid sm:grid-cols-1 grid-cols-2 mt-[73px] w-[66%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <RatingBar
                            className="flex justify-between w-[141px]"
                            value={5}
                            starCount={5}
                            activeColor="#ffc728"
                            size={26}
                          ></RatingBar>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          <span className="text-white-A700 font-inter text-left font-bold">
                            4.9
                          </span>
                          <span className="text-white-A700 font-inter text-left font-normal">
                            {" "}
                            /{" "}
                          </span>
                          <span className="text-white-A700 font-inter text-left font-medium">
                            5 rating
                          </span>
                        </Text>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          Qualitity
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[72%] md:w-full">
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <RatingBar
                            className="flex justify-between w-[141px]"
                            value={5}
                            starCount={5}
                            activeColor="#ffc728"
                            size={26}
                          ></RatingBar>
                        </div>
                      </div>
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Text
                          className="text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          <span className="text-white-A700 font-inter text-left font-bold">
                            4.8
                          </span>
                          <span className="text-white-A700 font-inter text-left font-normal">
                            {" "}
                            /{" "}
                          </span>
                          <span className="text-white-A700 font-inter text-left font-medium">
                            5 rating
                          </span>
                        </Text>
                        <Text
                          className="text-lg text-white-A700"
                          size="txtInterBold18"
                        >
                          Customer Satisfaction
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[39%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-start justify-start w-[77%] md:w-full">
                      <Img
                        className="h-[30px] sm:mt-0 mt-[9px]"
                        src="images/img_activity1.svg"
                        alt="activityOne"
                      />
                      <Text
                        className="mb-[5px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtInterBold28WhiteA700"
                      >
                        Quality Craftsmanship
                      </Text>
                    </div>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[72px] mt-0.5 text-lg text-white-A700 w-[86%] sm:w-full"
                      size="txtInterMedium18"
                    >
                      Our furniture is meticulously handcrafted to stand the
                      test of time, ensuring it can be enjoyed for generations
                      to come.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-8 w-[97%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row gap-[30px] items-start justify-start w-[70%] md:w-full">
                      <Img
                        className="h-9 mt-1 w-[35px]"
                        src="images/img_iconhammer.svg"
                        alt="iconhammer"
                      />
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtInterBold28WhiteA700"
                      >
                        Extensive Selection
                      </Text>
                    </div>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[65px] mt-1 text-lg text-white-A700 w-[87%] sm:w-full"
                      size="txtInterMedium18"
                    >
                      Discover a wide variety of styles and options to suit your
                      unique preferences and needs.
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mt-[35px] w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex sm:flex-col flex-row gap-[37px] items-start justify-start mr-[23px] w-[96%] md:w-full">
                      <Img
                        className="h-[30px] sm:mt-0 mt-[9px]"
                        src="images/img_checkmark_yellow_900_30x41.svg"
                        alt="checkmark_Seven"
                      />
                      <Text
                        className="mb-[5px] sm:text-2xl md:text-[26px] text-[28px] text-white-A700"
                        size="txtInterBold28WhiteA700"
                      >
                        Dedicated Customer Support
                      </Text>
                    </div>
                    <Text
                      className="leading-[30.00px] md:ml-[0] ml-[77px] mt-0.5 text-lg text-white-A700 w-[85%] sm:w-full"
                      size="txtInterMedium18"
                    >
                      Quiuckly navigate you anda engage with your adience
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-auto md:w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
              <Button
                className="!text-orange-900 cursor-pointer font-medium font-rubik h-[45px] min-w-[222px] rounded-[16px] text-center text-lg tracking-[-0.36px]"
                color="gray_100"
                size="sm"
                variant="fill"
              >
                Check Our Collection
              </Button>
              <Text
                className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-1.38px] w-auto"
                size="txtRubikMedium46"
              >
                Our Furniture Gallery
              </Text>
              <Text
                className="text-center text-gray-800 text-lg tracking-[-0.36px] w-auto"
                size="txtOpenSansRegular18"
              >
                Explore Our Gallery of Inspiring Designs
              </Text>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <Img
                  className="h-[330px] md:h-auto object-cover w-[330px]"
                  src="images/img_frame48096216.png"
                  alt="frame48096216"
                />
                <Img
                  className="h-[330px] md:h-auto object-cover w-[330px]"
                  src="images/img_frame48096218.png"
                  alt="frame48096218"
                />
                <div className="bg-gray-100_01 flex flex-col items-center justify-start w-[44%] md:w-full">
                  <Img
                    className="h-[330px] md:h-auto object-cover w-full"
                    src="images/img_image23.png"
                    alt="imageTwentyThree"
                  />
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
                <div className="bg-gray-100_01 flex flex-col items-center justify-start w-[44%] md:w-full">
                  <Img
                    className="h-[330px] md:h-auto object-cover w-full"
                    src="images/img_image24.png"
                    alt="imageTwentyFour"
                  />
                </div>
                <div className="bg-gray-100_01 flex flex-col h-[330px] items-center justify-start w-[330px]">
                  <Img
                    className="h-[330px] md:h-auto object-cover w-[330px]"
                    src="images/img_image25.png"
                    alt="imageTwentyFive"
                  />
                </div>
                <div className="bg-gray-100_01 flex flex-col h-[330px] items-center justify-end p-[3px] w-[330px]">
                  <Img
                    className="h-[323px] md:h-auto object-cover w-[97%]"
                    src="images/img_image27.png"
                    alt="imageTwentySeven"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900_07 flex flex-col font-opensans md:gap-10 gap-16 items-center justify-start max-w-[1439px] py-[66px] w-full">
            <div className="flex flex-col gap-[15px] items-center justify-start w-auto sm:w-full">
              <Button
                className="cursor-pointer font-medium font-rubik h-[45px] min-w-[212px] rounded-[16px] text-center text-lg tracking-[-0.36px]"
                color="gray_200"
                size="sm"
                variant="fill"
              >
                Testimonial Section
              </Button>
              <Text
                className="sm:text-4xl md:text-[42px] text-[46px] text-center text-gray-900 tracking-[-1.38px] w-auto"
                size="txtRubikMedium46"
              >
                What Our Customer Say
              </Text>
              <Text
                className="leading-[26.00px] max-w-[451px] md:max-w-full text-center text-gray-800 text-lg tracking-[-0.36px]"
                size="txtOpenSansRegular18"
              >
                Discover the Stories and Experiences of Our Delighted Customers
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-center justify-center w-auto md:w-full">
              <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start p-[42px] md:px-10 sm:px-5 w-auto sm:w-full">
                <Text
                  className="leading-[28.00px] max-w-[342px] md:max-w-full text-gray-800 text-lg tracking-[-0.36px]"
                  size="txtOpenSansRegular18"
                >
                  <>
                    I am genuinely impressed with the quality of the recliner
                    chair I bought. The comfort it provides is beyond compare,
                    and the design perfectly complements our living room. What
                    sets apart is not just their exceptional products but also
                    their commitment to customer satisfaction. They went the
                    extra mile to ensure I was completely satisfied with my
                    purchase, which is a rarity in today&#39;s market.
                  </>
                </Text>
                <div className="flex flex-col items-end justify-end pl-2.5 py-2.5 w-full">
                  <div className="flex flex-row items-start justify-start w-auto">
                    <RatingBar
                      className="bg-gradient1  flex justify-between w-[131px]"
                      value={4}
                      starCount={5}
                      activeColor="#f2a156"
                      size={23}
                    ></RatingBar>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid md:grid-cols-1 grid-cols-2 w-[72%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start p-[42px] md:px-10 sm:px-5 w-auto md:w-full">
                  <Img
                    className="h-[39px] w-[55px]"
                    src="images/img_mobile.svg"
                    alt="mobile"
                  />
                  <Text
                    className="leading-[28.00px] max-w-[539px] md:max-w-full text-gray-800 text-lg tracking-[-0.36px]"
                    size="txtOpenSansRegular18"
                  >
                    I recently purchased a beautiful dining table and it has
                    completely transformed our dining area. The craftsmanship
                    and attention to detail are truly remarkable. The table is
                    not only a functional piece of furniture but also a work of
                    art that our family and guests admire. The process from
                    selection to delivery was smooth, and the customer support
                    team was incredibly helpful throughout.
                  </Text>
                  <div className="flex flex-row font-rubik sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-center w-auto">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_image18.png"
                          alt="imageEighteen"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-lg tracking-[-0.36px] w-auto"
                          size="txtRubikRegular18"
                        >
                          Michael Roberts
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="bg-gradient1  flex justify-between w-[131px]"
                        value={4}
                        starCount={5}
                        activeColor="#f2a156"
                        size={23}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-col gap-7 items-start justify-start overflow-auto p-[42px] md:px-10 sm:px-5 w-auto sm:w-full">
                  <Img
                    className="h-[39px] w-[55px]"
                    src="images/img_mobile.svg"
                    alt="mobile"
                  />
                  <Text
                    className="leading-[28.00px] max-w-[342px] md:max-w-full text-gray-800 text-lg tracking-[-0.36px]"
                    size="txtOpenSansRegular18"
                  >
                    <>
                      My experience has been consistently outstanding. I&#39;ve
                      furnished my entire home with their products, and every
                      piece has exceeded my expectations. From the bedroom to
                      the home office, offers a wide range of stylish and
                      well-crafted furniture. What truly sets them apart is
                      their dedicated customer support.
                    </>
                  </Text>
                  <div className="flex flex-row font-rubik sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-3.5 items-center justify-center w-auto">
                      <div className="flex flex-col h-11 items-center justify-start w-11">
                        <Img
                          className="h-11 md:h-auto rounded-[50%] w-11"
                          src="images/img_image18_44x44.png"
                          alt="imageEighteen"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-center text-gray-900 text-lg tracking-[-0.36px] w-auto"
                          size="txtRubikRegular18"
                        >
                          Marta Brown
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start w-auto">
                      <RatingBar
                        className="bg-gradient1  flex justify-between w-[131px]"
                        value={4}
                        starCount={5}
                        activeColor="#f2a156"
                        size={23}
                      ></RatingBar>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col font-rubik items-start justify-start w-auto md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-black-900_cc md:h-[491px] h-[492px] relative w-full">
                  <Img
                    className="h-[491px] m-auto object-cover w-full"
                    src="images/img_frame48096246.png"
                    alt="frame48096246"
                  />
                  <div className="absolute bottom-1/4 flex flex-col gap-4 items-start justify-start right-[10%]">
                    <Text
                      className="leading-[56.00px] sm:text-4xl md:text-[42px] text-[46px] text-white-A700 tracking-[-1.38px] w-[90%] sm:w-full"
                      size="txtRubikMedium46WhiteA700"
                    >
                      Our Furniture Review
                    </Text>
                    <Text
                      className="leading-[26.00px] text-gray-100_02 text-lg tracking-[-0.36px] w-full"
                      size="txtOpenSansRegular18Gray10002"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </div>
                </div>
                <div className="bg-blue_gray-900_02 flex md:flex-col flex-row gap-10 items-start justify-start p-[60px] md:px-10 sm:px-5 w-full">
                  <Text
                    className="sm:flex-1 leading-[42.00px] md:ml-[0] ml-[94px] md:mt-0 mt-[69px] sm:text-3xl md:text-[32px] text-[34px] text-white-A700 tracking-[-1.02px] w-[33%] sm:w-full"
                    size="txtRubikRegular34"
                  >
                    Subscribe to get attractive offers on our products
                  </Text>
                  <div className="bg-gray-100 flex md:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between md:mt-0 mt-[70px] p-3.5 w-[51%] md:w-full">
                    <div className="flex flex-col font-opensans items-center justify-start ml-2.5 sm:ml-[0] w-auto">
                      <Text
                        className="text-center text-gray-500_04 text-xl tracking-[-0.40px] w-auto"
                        size="txtOpenSansRegular20"
                      >
                        E.g. youremail@mail.com
                      </Text>
                    </div>
                    <Button
                      className="cursor-pointer font-medium font-rubik min-w-[163px] text-[22px] text-center sm:text-lg md:text-xl"
                      shape="square"
                      color="yellow_900"
                      size="lg"
                      variant="fill"
                    >
                      Subscribe
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col font-opensans items-center justify-end p-[79px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col items-start justify-start w-[98%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[92%] md:w-full">
                  <div className="flex flex-col gap-7 items-start justify-start w-1/5 md:w-full">
                    <Img
                      className="h-12"
                      src="images/img_logo.svg"
                      alt="logo"
                    />
                    <Text
                      className="leading-[26.00px] text-gray-800_02 text-lg tracking-[-0.36px] w-full"
                      size="txtOpenSansRegular18Gray80002"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row font-rubik md:gap-10 gap-[116px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[68%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRubikSemiBold18"
                      >
                        Category
                      </Text>
                      <div className="flex flex-col font-opensans gap-2.5 items-start justify-center w-auto">
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Living Room
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Bed Room
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Kitchen
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Bath Room
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRubikSemiBold18"
                      >
                        Popular Product
                      </Text>
                      <div className="flex flex-col font-opensans gap-2.5 items-start justify-center w-auto">
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Single Sofa Black
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Wooden Bookcase
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Wooden Chair
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Luxury White Bed
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRubikSemiBold18"
                      >
                        Sitemap
                      </Text>
                      <div className="flex flex-col font-opensans gap-2.5 items-start justify-center w-auto">
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Product
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Services
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Article
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          About Us
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start justify-start w-auto">
                      <Text
                        className="text-black-900 text-lg w-auto"
                        size="txtRubikSemiBold18"
                      >
                        Follow Us
                      </Text>
                      <div className="flex flex-col font-opensans gap-2.5 items-start justify-center w-auto">
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Facebook
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Instagram
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          TikTok
                        </Text>
                        <Text
                          className="text-base text-gray-800_02 w-auto"
                          size="txtOpenSansRegular16"
                        >
                          Youtube
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
                <Line className="bg-black-900 h-px mt-16 w-full" />
                <Text
                  className="mt-[26px] text-gray-800_02 text-sm"
                  size="txtOpenSansRegular14"
                >
                  © 2023 by Logo Furniture. All rights reserved.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FurnitureDekstopPage;
