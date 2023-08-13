import { useDispatch, useSelector } from "react-redux";
import {
  addCriterion,
  updateCriterion,
  // updateTotalWeighting,
} from "../../features/rubric/rubricSlice";

import AddCriterion from "./AddCriterion";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

function AddSection({ section, deleteSection, saveSection, totalWeighting }) {
//   const totalWeighting = useSelector((state) => state.rubric.totalWeighting);
  const dispatch = useDispatch();
  const inputHandler = async (e) => {
    let updatedSectionData = {
      ...section,
      [e.target.name]: isNaN(e.target.value)
        ? e.target.value
        : parseInt(e.target.value),
    };
    await saveSection(updatedSectionData);
    // dispatch(updateTotalWeighting())
  };
  const addCriterionHandler = () => {
    console.log(section.criteria);
    let newCriterion = {
      id: section.criteria.length,
      name: "",
      description: "",
      type: "radio",
      options: [],
    };
    dispatch(
      addCriterion({
        sectionId: section.id,
        criterion: newCriterion,
        contribution: 0,
      })
    );
    // section.criteria.push(newCriterion);
  };
  const updateCriterionHandler = (criterion) => {
    console.log("criterion data to save", criterion);
    dispatch(updateCriterion({ sectionId: section.id, criterion: criterion }));
  };
  const logSection = () => {
    console.log("section", section);
  };
  return (
    <>
      <div className="add-section-container">
        {/* <button
          className="delete-section"
          onClick={() => deleteSection(section.id)}
        >
          X
        </button> */}
        <DeleteButton onClick={()=>deleteSection(section.id)} />
        <div className="section-details">
          <input
            className="section-title"
            name="title"
            type="text"
            onChange={inputHandler}
            value={section.title}
            placeholder="New Section"
          />
          <input
            className="section-weight"
            name="weight"
            type="number"
            onChange={inputHandler}
            value={section.weight}
          />
        </div>
        {/* {section.weight}/{totalWeighting} */}
        {/* <br /> */}
        {(section.weight / totalWeighting)*100}%
        <br />
        {section.contribution}
        {section.criteria &&
          section.criteria.map((criterion, index) => {
            return (
              <AddCriterion
                key={index}
                criterion={criterion}
                sectionId={section.id}
                updateCriterion={updateCriterionHandler}
              />
            );
          })}
        <button
          onClick={(e) => {
            addCriterionHandler();
          }}
        >
          Add Criteria
        </button>
        <button className="log" onClick={logSection}>
          LOG
        </button>
        {/* <button className="save-section" onClick={()=>saveSection(sectionData)}>Save</button> */}
      </div>
    </>
  );
}

export default AddSection;
