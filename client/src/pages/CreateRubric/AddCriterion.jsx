import { useDispatch } from "react-redux";
import { addOption, updateOption } from "../../features/rubric/rubricSlice";
const criterionTypes = [
  { type: "radio", text: "Radio" },
  { type: "dropdown", text: "Dropdown" },
  { type: "slider", text: "Slider" },
];
function SelectType({ criterion, inputHandler }) {
  const handleSelection = (e) => {
    // console.log( e.target.value)
    e.target.name = "type";
    inputHandler(e);
    // inputHandler({target:{name:"type", value:e.target.value}})
  };
  return (
    <form className="criterion-option-types">
      {criterionTypes.map((selection, index) => {
        return (
          <div className="criterion-type" key={index}>
            <input
              type="radio"
              id={`${selection.type}-${criterion.id}`}
              name={`type-${criterion.id}`}
              onChange={handleSelection}
              value={selection.type}
              checked={criterion.type == selection.type}
            />
            <label htmlFor={`${selection.type}-${criterion.id}`}>
              {selection.text}
            </label>
          </div>
        );
      })}
    </form>
  );
}
function Option({ option, updateOptionHandler }) {
  const inputHandler = (e) => {
    let updatedOptionData = {
      ...option,
      [e.target.name]: isNaN(e.target.value)
        ? e.target.value
        : parseInt(e.target.value),
    };
    console.log(updatedOptionData);
    updateOptionHandler(updatedOptionData);
  };
  return (
    <div className="option-container">
      <input
        type="text"
        name="text"
        placeholder="option text"
        onChange={inputHandler}
        value={option.text}
      />
      <input
        type="number"
        name="value"
        placeholder="option text"
        onChange={inputHandler}
        value={option.value}
      />
    </div>
  );
}
function AddCriterion({ sectionId, criterion, updateCriterion }) {
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    let updatedCriterionData = {
      ...criterion,
      [e.target.name]: isNaN(e.target.value)
        ? e.target.value
        : parseInt(e.target.value),
    };
    console.log(updatedCriterionData);
    updateCriterion(updatedCriterionData);
    // saveSection(updatedSectionData)
  };
  const updateOptionHandler = (option) => {
    console.log(option);
    dispatch(
      updateOption({ sectionId, criterionId: criterion.id, option: option })
    );
  };
  const addOptionHandler = () => {
    console.log(sectionId, criterion);
    let newOption = {
      id: criterion.options.length,
      text: "",
      value: 1,
      //   type: "radio",
      //   options: [],
    };
    dispatch(
      addOption({ sectionId, criterionId: criterion.id, option: newOption })
    );
    // section.criteria.push(newCriterion);
  };
  return (
    <div className="criterion-container">
      {criterion.contribution}
      <input
        className="criterion-name"
        name="name"
        type="text"
        onChange={inputHandler}
        value={criterion.name}
        placeholder="New Criteria"
      />
      <textarea
        className="criterion-desc"
        name="description"
        onChange={inputHandler}
        value={criterion.description}
        placeholder="Description"
      />
      <div className="criterion-option-container">
        <SelectType criterion={criterion} inputHandler={inputHandler} />

        <div className="criterion-options">
          {criterion.options.map((option, index) => {
            return (
              <Option
                key={index}
                option={option}
                updateOptionHandler={updateOptionHandler}
              />
            );
          })}
          <button
            onClick={(e) => {
              addOptionHandler();
            }}
          >
            Add Option
          </button>
        </div>
      </div>
      {/* <input className="criterion-options" name="name" type="text" onChange={inputHandler} placeholder="New Section"/> */}
    </div>
  );
}

export default AddCriterion;
