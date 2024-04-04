import { mainContainerPropTypes } from "./propTypes";

MainContainer.propTypes = mainContainerPropTypes;

export default function MainContainer({
  children,
  className = "",
  style = {},
}) {
  return (
    <div className={`container-fluid ${className}`} style={style}>
      {children}
    </div>
  );
}
