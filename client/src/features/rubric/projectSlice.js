import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    rubrics:[],
  },
  reducers: {
    addRubric: ({rubrics}, {payload}) => {
        let rubric = payload;
        rubrics.push(rubric)
    },
    removeRubric: ({rubrics}, {payload}) => {
        let rubricId = payload;
        rubrics = rubrics.filter((el)=>id !== el.id)
    },
    updateRubric:({rubrics}, {payload})=>{
        let rubric = payload;
        let updatedRubricIndex = rubrics.findIndex((el)=>rubric.id == el.id)
        rubrics[updatedRubricIndex] = rubric
    }, 
  }
})

// Action creators are generated for each case reducer function
export const { addRubric, removeRubric,updateRubric} = rubricSlice.actions

export default rubricSlice.reducer