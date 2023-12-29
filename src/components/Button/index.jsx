import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-[22px]",
  square: "rounded-none",
};
const variants = {
  fill: {
    orange_A200_01: "bg-orange-A200_01 text-white-A700",
    white_A700: "bg-white-A700 shadow-bs",
    gray_200: "bg-gray-200 text-orange-900",
    black_900: "bg-black-900 text-white-A700",
    gray_100: "bg-gray-100 text-deep_orange-A400",
    yellow_900: "bg-yellow-900 text-white-A700",
  },
  outline: {
    blue_gray_900_01:
      "border border-blue_gray-900_01 border-solid text-blue_gray-900_01",
    black_900: "border border-black-900 border-solid text-black-900",
  },
};
const sizes = {
  xs: "p-0.5",
  sm: "p-[9px]",
  md: "p-3",
  lg: "p-[15px]",
  xl: "sm:pl-5 pl-[21px] pr-[19px] py-[21px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round", "square"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "orange_A200_01",
    "white_A700",
    "gray_200",
    "black_900",
    "gray_100",
    "yellow_900",
    "blue_gray_900_01",
  ]),
};

export { Button };
