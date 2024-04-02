import PropTypes from "prop-types";
import { basePropTypes } from "../../types/basePropTypes";

export const navBarItemPropTypes = {
  ...basePropTypes,
  children: PropTypes.string.isRequired,
};
