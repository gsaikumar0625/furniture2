import React from "react";

const sizeClasses = {
  txtInterRegular16Gray500: "font-inter font-normal",
  txtInterBold2773Bluegray900: "font-bold font-inter",
  txtPoppinsMedium1387: "font-medium font-poppins",
  txtPoppinsMedium2773: "font-medium font-poppins",
  txtInterMedium16WhiteA700: "font-inter font-medium",
  txtPoppinsSemiBold1387: "font-poppins font-semibold",
  txtInterBold28: "font-bold font-inter",
  txtRubikSemiBold18: "font-rubik font-semibold",
  txtPoppinsRegular1387: "font-normal font-poppins",
  txtRubikMedium46WhiteA700: "font-medium font-rubik",
  txtInterSemiBold50: "font-inter font-semibold",
  txtOpenSansRegular18Gray80002: "font-normal font-opensans",
  txtOpenSansRegular20: "font-normal font-opensans",
  txtInterBold64: "font-bold font-inter",
  txtOpenSansRegular18Gray10002: "font-normal font-opensans",
  txtRubikMedium16: "font-medium font-rubik",
  txtRubikRomanSemiBold20: "font-rubik font-semibold",
  txtInterMedium1219: "font-inter font-medium",
  txtInterBold28WhiteA700: "font-bold font-inter",
  txtRubikMedium18: "font-medium font-rubik",
  txtNunitoSansRegular132: "font-normal font-nunitosans",
  txtMontserratBold2773: "font-bold font-montserrat",
  txtInterMedium18: "font-inter font-medium",
  txtMontserratRomanSemiBold2773: "font-montserrat font-semibold",
  txtInterBold18: "font-bold font-inter",
  txtOpenSansRegular18: "font-normal font-opensans",
  txtOpenSansRegular16: "font-normal font-opensans",
  txtInterMedium16: "font-inter font-medium",
  txtOpenSansRegular14: "font-normal font-opensans",
  txtInterSemiBold264: "font-inter font-semibold",
  txtInterBold2773: "font-bold font-inter",
  txtRubikRegular18: "font-normal font-rubik",
  txtInterRegular14Gray80001: "font-inter font-normal",
  txtInterRegular1849: "font-inter font-normal",
  txtRubikRegular34: "font-normal font-rubik",
  txtPoppinsRegular132: "font-normal font-poppins",
  txtPoppinsRegular1387Gray50001: "font-normal font-poppins",
  txtInterSemiBold44: "font-inter font-semibold",
  txtNunitoSansRegular16: "font-normal font-nunitosans",
  txtInterRegular14: "font-inter font-normal",
  txtRubikMedium46: "font-medium font-rubik",
  txtRubikMedium24: "font-medium font-rubik",
  txtPoppinsBold2773: "font-bold font-poppins",
  txtInterMedium1626: "font-inter font-medium",
  txtInterRegular16: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
