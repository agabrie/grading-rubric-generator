import { createSlice } from "@reduxjs/toolkit";
const calculateTotalWeighting=(state, payload)=>{
  state.totalWeighting = state.sections.reduce((acc, sect)=>{
      return acc+sect.weight;
  },0)
  state.updated = true
  // console.log(totalWeighting);
};
const calculateCriterionContribution = ({criterion,section})=>{
  if(criterion.type == "checklist"){
    criterion.contribution = criterion.options.reduce((acc,option)=>{
      return acc+option.value
    }, 0)
  }else{
    criterion.contribution =  criterion.options.reduce((previous,current)=>{
      return (previous.value > current.value)?previous:current
    }, 0).value
  }
  if(section){
    calculateSectionContribution({section})
  }
}

const calculateSectionContribution = ({section})=>{
  section.contribution = section.criteria.reduce((acc,criterion)=>{
    return acc+criterion.contribution
}, 0)
}
export const rubricSlice = createSlice({
  name: "rubric",
  initialState: {
    sections: [],
    totalWeighting:0,
    updated:false
  },
  reducers: {
    loadRubric :(state, {payload})=>{
      let sections = payload;
      state.sections = sections
      state.sections.forEach((section)=>{
        section.criteria.forEach((criterion)=>{
          calculateCriterionContribution({criterion});
        })
        calculateSectionContribution({section});
      })
      calculateTotalWeighting(state, {payload});
      state.updated = false
    },
    saveRubric:(state)=>{
      state.updated = false;
    },
    addSection: (state, { payload }) => {
      let section = payload;
      state.sections.push(section);
      calculateTotalWeighting(state, {payload});
      calculateSectionContribution({section})
      state.updated = true
    },
    removeSection: (state , { payload }) => {
      let id = payload;
      let updatedSectionIndex = state.sections.findIndex((el) => id == el.id);
      state.sections.splice(updatedSectionIndex, 1);
      calculateTotalWeighting(state, {payload});
      // calculateSectionContribution({section})
      state.updated = true

    },
    updateSection: (state, { payload }) => {
      let section = payload;
      let updatedSectionIndex = state.sections.findIndex((el) => section.id == el.id);
      state.sections[updatedSectionIndex] = section;
      calculateSectionContribution({section})

      state.updated = true
      
    },
    addCriterion: (state, { payload }) => {
      let { sectionId, criterion } = payload;
      let sectionIndex = state.sections.findIndex((el) => sectionId == el.id);
      let section = state.sections[sectionIndex];
      section.criteria.push(criterion);
      calculateCriterionContribution({section,criterion})
      state.updated = true

    },
    updateCriterion: (state, { payload }) => {
      let { sectionId, criterion } = payload;
      let sectionIndex = state.sections.findIndex((el) => sectionId == el.id);
      let section = state.sections[sectionIndex];
      let updatedCriterionIndex = section.criteria.findIndex(
        (el) => criterion.id == el.id
      );
      section.criteria[updatedCriterionIndex] = criterion;
      calculateCriterionContribution({section,criterion})
      state.updated = true

    },
    addOption: (state, { payload }) => {
      let { sectionId, criterionId, option } = payload;

      let sectionIndex = state.sections.findIndex((el) => sectionId == el.id);
      let section = state.sections[sectionIndex];
      let criterionIndex = section.criteria.findIndex(
        (el) => criterionId == el.id
      );
      let criterion = section.criteria[criterionIndex];

      criterion.options.push(option);
      calculateCriterionContribution({section,criterion})
      state.updated = true

    },
    updateOption: (state, { payload }) => {
      let { sectionId, criterionId, option } = payload;

      let sectionIndex = state.sections.findIndex((el) => sectionId == el.id);
      let section = state.sections[sectionIndex];
      let criterionIndex = section.criteria.findIndex(
        (el) => criterionId == el.id
      );
      let criterion = section.criteria[criterionIndex];
      let updatedOptionIndex = criterion.options.findIndex(
          (el) => option.id == el.id
          );
          criterion.options[updatedOptionIndex] = option;

        calculateCriterionContribution({section,criterion})
      state.updated = true

        // calculateSectionContribution({section})
        
        // if(isNaN(contribution))
        //   criterion.contribution
        //   section.criteria.reduce((a, b)=>parseInt(a.contribution)+parseInt(b.contribution))
    },
    updateTotalWeighting:calculateTotalWeighting
  },
});

// Action creators are generated for each case reducer function
export const {
  saveRubric,
  loadRubric,
  addSection,
  removeSection,
  updateSection,
  addCriterion,
  updateCriterion,
  addOption,
  updateOption,
  updateTotalWeighting
} = rubricSlice.actions;

export default rubricSlice.reducer;
