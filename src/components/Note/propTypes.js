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

export const notePropTypes = {
  id: PropTypes.number.isRequired,
  ...noteCardImgPropTypes,
  ...noteCardHeaderPropTypes,
  ...noteCardBodyPropTypes,
};

export const noteCardPropTypes = {
  ...basePropTypes,
  ...notePropTypes,
  setSelectedNote: PropTypes.func.isRequired,
};

export const noteEditorPropTypes = {
  ...basePropTypes,
  note: PropTypes.shape({ ...notePropTypes }),
};

export const noteContainerPropTypes = {
  ...basePropTypes,
};

export const noteCardContainerPropTypes = {
  ...noteContainerPropTypes,
  notes: PropTypes.arrayOf(PropTypes.shape({ ...notePropTypes })),
};
