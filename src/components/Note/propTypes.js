import { basePropTypes } from "@types/basePropTypes";
import PropTypes from "prop-types";

export const noteCardImgPropTypes = {
  image: PropTypes.string,
};

export const noteCardHeaderPropTypes = {
  header: PropTypes.string.isRequired,
};

export const noteCardBodyPropTypes = {
  content: PropTypes.string,
};

export const notePropTypes = {
  id: PropTypes.number.isRequired,
  ...noteCardImgPropTypes,
  ...noteCardHeaderPropTypes,
  ...noteCardBodyPropTypes,
};

export const noteCardPropTypes = {
  ...basePropTypes,
  note: PropTypes.shape({ ...notePropTypes }),
};

export const noteEditorPropTypes = {
  ...basePropTypes,
};

export const noteContainerPropTypes = {
  ...basePropTypes,
};

export const noteCardContainerPropTypes = {
  ...noteContainerPropTypes,
};
