import MainContainer from "@components/Containers/MainContainer";
import NavBar from "@components/NavBar/NavBar";
import NoteCard from "@components/NoteCard/NoteCard";
import { homePagePropTypes } from "./propTypes";

import "./HomePage.css";
import NoteContainer from "../../components/Containers/NoteContainer";

HomePage.propTypes = homePagePropTypes;

export default function HomePage({ className, style }) {
  return (
    <MainContainer className={`p-0 vh-100 ${className}`} style={style}>
      <NavBar />
      <NoteContainer>
        <NoteCard
          header="Note title"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        />
        <NoteCard
          header="Note title"
          content="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
        />
      </NoteContainer>
    </MainContainer>
  );
}
