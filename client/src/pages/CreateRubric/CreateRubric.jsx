import "./CreateRubric.css";

import { useSelector, useDispatch } from "react-redux";
import {
  removeSection,
  addSection,
  updateSection,
  loadRubric, saveRubric
} from "../../features/rubric/rubricSlice";

import AddSection from "./AddSection";
function CreateRubric() {
  const sections = useSelector((state) => state.rubric.sections);
  const totalWeighting = useSelector((state) => state.rubric.totalWeighting);
  const updated = useSelector((state) => state.rubric.updated);
  const dispatch = useDispatch();
  const addSectionHandler = () => {
    let section = { id: sections.length, title: "", weight: 1, criteria: [] , contribution:0};
    dispatch(addSection(section));
  };
  const saveSectionHandler = async (section) => {
    console.log("saved data", section);
    await dispatch(updateSection(section));
  };
  const deleteSectionHandler = (sectionId) => {
    // console.log(sectionId);
    dispatch(removeSection(sectionId));
  };
  const saveRubricHandler=(e)=>{
    localStorage.setItem("rubric", JSON.stringify(sections))
    dispatch(saveRubric());
  }
  const reloadRubricHandler=(e)=>{
    let rubric = JSON.parse(localStorage.getItem("rubric"))
    dispatch(loadRubric(rubric))
  }
  return (
    <>
      create a rubric
      {sections.length >0 &&updated&& <button onClick={saveRubricHandler}>SAVE</button>}
      
      {(sections.length==0||updated)&&<button onClick={reloadRubricHandler}>LOAD</button>}
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
