import MainContainer from "@components/Containers/MainContainer";
import NavBar from "@components/NavBar/NavBar";
import NoteContainer from "@components/Note/NoteContainer";
import { homePagePropTypes } from "./propTypes";

import "./HomePage.css";

HomePage.propTypes = homePagePropTypes;

export default function HomePage({ className = "", style = {} }) {
  return (
    <MainContainer
      className={`p-0 vh-100 d-flex flex-column ${className}`}
      style={style}
    >
      <NavBar />
      <NoteContainer />
    </MainContainer>
  );
}
