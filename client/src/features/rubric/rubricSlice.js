import { createSlice } from "@reduxjs/toolkit";

export const rubricSlice = createSlice({
  name: "rubric",
  initialState: {
    sections: [],
    totalWeighting:0
  },
  reducers: {
    addSection: ({ sections }, { payload }) => {
      let section = payload;
      sections.push(section);
    },
    removeSection: ({ sections }, { payload }) => {
      let id = payload;
      let updatedSectionIndex = sections.findIndex((el) => id == el.id);
      sections.splice(updatedSectionIndex, 1);
    },
    updateSection: ({ sections }, { payload }) => {
      let section = payload;
      let updatedSectionIndex = sections.findIndex((el) => section.id == el.id);
      sections[updatedSectionIndex] = section;

      
    },
    addCriterion: ({ sections }, { payload }) => {
      let { sectionId, criterion } = payload;
      let sectionIndex = sections.findIndex((el) => sectionId == el.id);
      let section = sections[sectionIndex];
      section.criteria.push(criterion);
    },
    updateCriterion: ({ sections }, { payload }) => {
      let { sectionId, criterion } = payload;
      let sectionIndex = sections.findIndex((el) => sectionId == el.id);
      let section = sections[sectionIndex];
      let updatedCriterionIndex = section.criteria.findIndex(
        (el) => criterion.id == el.id
      );
      section.criteria[updatedCriterionIndex] = criterion;
    },
    addOption: ({ sections }, { payload }) => {
      let { sectionId, criterionId, option } = payload;

      let sectionIndex = sections.findIndex((el) => sectionId == el.id);
      let section = sections[sectionIndex];
      let criterionIndex = section.criteria.findIndex(
        (el) => criterionId == el.id
      );
      let criterion = section.criteria[criterionIndex];

      criterion.options.push(option);
    },
    updateOption: ({ sections }, { payload }) => {
      let { sectionId, criterionId, option } = payload;

      let sectionIndex = sections.findIndex((el) => sectionId == el.id);
      let section = sections[sectionIndex];
      let criterionIndex = section.criteria.findIndex(
        (el) => criterionId == el.id
      );
      let criterion = section.criteria[criterionIndex];
      let updatedOptionIndex = criterion.options.findIndex(
          (el) => option.id == el.id
          );
          criterion.options[updatedOptionIndex] = option;

          criterion.contribution = criterion.options.reduce((acc,option)=>{
            return acc+option.value
        }, 0)
        section.contribution = section.criteria.reduce((acc,criterion)=>{
            return acc+criterion.contribution
        }, 0)
        
        // if(isNaN(contribution))
        //   criterion.contribution
        //   section.criteria.reduce((a, b)=>parseInt(a.contribution)+parseInt(b.contribution))
    },
    updateTotalWeighting:(state, payload)=>{
        state.totalWeighting = state.sections.reduce((acc, sect)=>{
            console.log("weighting", sect.weight)
            return acc+sect.weight;
        },0)
        // console.log(totalWeighting);
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  addSection,
  removeSection,
  updateSection,
  addCriterion,
  updateCriterion,
  addOption,updateOption,updateTotalWeighting
} = rubricSlice.actions;

export default rubricSlice.reducer;
