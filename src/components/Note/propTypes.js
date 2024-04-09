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
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export const noteCardContainerPropTypes = {
  ...noteContainerPropTypes,
};
