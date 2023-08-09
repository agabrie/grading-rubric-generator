import { createSlice } from '@reduxjs/toolkit'

export const rubricSlice = createSlice({
  name: 'rubric',
  initialState: {
    sections:[] 
  },
  reducers: {
    // increment: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: state => {
    //   state.value -= 1
    // },
    addSection: ({sections}, {payload}) => {
        let section = payload;
        sections.push(section)
    },
    removeSection: ({sections}, {payload}) => {
        let sectionId = payload;
        sections = sections.filter((el)=>sectionId !== el.sectionId)
    },
    updateSection:({sections}, {payload})=>{
        let section = payload;
        let updatedSectionIndex = sections.findIndex((el)=>section.sectionId == el.sectionId)
        sections[updatedSectionIndex] = section
    }
  }
})

// Action creators are generated for each case reducer function
export const { addSection, removeSection,updateSection } = rubricSlice.actions

export default rubricSlice.reducer