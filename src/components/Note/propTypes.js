import { basePropTypes } from "@types/basePropTypes";
import PropTypes from "prop-types";

export const noteCardImgPropTypes = {
  ...basePropTypes,
  image: PropTypes.string,
};

export const noteCardHeaderPropTypes = {
  ...basePropTypes,
  header: PropTypes.string.isRequired,
};

export const noteCardBodyPropTypes = {
  ...basePropTypes,
  content: PropTypes.string,
};

export const noteCardPropTypes = {
  ...basePropTypes,
  ...noteCardImgPropTypes,
  ...noteCardHeaderPropTypes,
  ...noteCardBodyPropTypes,
};

export const noteEditorPropTypes = {
  ...basePropTypes,
};

export const noteContainerPropTypes = {
  ...basePropTypes,
};

export const noteCardContainerPropTypes = {
  ...noteContainerPropTypes,
  notes: PropTypes.arrayOf(
    PropTypes.shape({ ...noteCardPropTypes, id: PropTypes.number.isRequired }),
  ),
};
