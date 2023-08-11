import "./CreateRubric.css";

import { useSelector, useDispatch } from "react-redux";
import {
  removeSection,
  addSection,
  updateSection
} from "../../features/rubric/rubricSlice";

import AddSection from "./AddSection";
function CreateRubric() {
  const sections = useSelector((state) => state.rubric.sections);
  const totalWeighting = useSelector((state) => state.rubric.totalWeighting);
  const dispatch = useDispatch();
  const addSectionHandler = () => {
    let section = { id: sections.length, title: "", weight: 1, criteria: [] , contribution:0};
    dispatch(addSection(section));
  };
  const saveSectionHandler = (section) => {
    console.log("saved data", section);
    dispatch(updateSection(section));
  };
  const deleteSectionHandler = (section) => {
    console.log(section);
    dispatch(removeSection(section));
  };

  return (
    <>
      create a rubric {totalWeighting}
      {sections &&
        sections.map((section, index) => {
          return (
            <AddSection
              totalWeighting={totalWeighting}
              section={section}
              key={section.id}
              deleteSection={deleteSectionHandler}
              saveSection={saveSectionHandler}
            />
          );
        })}
      <button
        onClick={(e) => {
          addSectionHandler();
        }}
      >
        Add Section
      </button>
    </>
  );
}

export default CreateRubric;
