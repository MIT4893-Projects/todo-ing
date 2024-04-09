import PropTypes from "prop-types";
import { basePropTypes } from "@types/basePropTypes";

export const containerPropTypes = {
  ...basePropTypes,
  children: PropTypes.node,
};

export const mainContainerPropTypes = {
  ...containerPropTypes,
};
