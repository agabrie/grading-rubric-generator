import { useEffect, useState } from "react"
import "./CreateRubric.css"

import { useSelector, useDispatch } from 'react-redux'
import { removeSection, addSection, updateSection } from '../../features/rubric/rubricSlice'

function Section({section, deleteSection, saveSection}){    
    const inputHandler=(e)=>{
        let updatedSectionData = {...section,[e.target.name]:e.target.value}
        saveSection(updatedSectionData)
    }
    const addCriteriaHandler=()=>{
        section.criteria.push();
    }
    return (<>
    <div className="add-section-container">
        <button className="delete-section" onClick={()=>deleteSection(section.sectionId)}>X</button>
        <input className="section-title" name="title" type="text" onChange={inputHandler} placeholder="New Section"/>
        {section.criteria && section.criteria.map((criterion, index)=>{
            return <>
                <input className="criterion" name={`criterion-${index}`} type="text" onChange={inputHandler} placeholder="New Section"/>
            </>
        })}
        <button onClick={(e)=>{addCriteriaHandler()}}>Add Criteria</button>
        {/* <button className="save-section" onClick={()=>saveSection(sectionData)}>Save</button> */}
    </div>
    </>)
}
function CreateRubric(){
    
    const sections = useSelector(state=>state.rubric.sections)
    const dispatch = useDispatch();
    const addSectionHandler = ()=>{
        let section = {title:null, sectionId:sections.length, criteria:[]};
        dispatch(addSection(section))
    }
    const saveSectionHandler = (section)=>{
        console.log("saved data", section)
        dispatch(updateSection(section))
    }
    const deleteSectionHandler = (section)=>{
        console.log(section)
        dispatch(removeSection(section))
    }

    return (
        <>
            create a rubric
            {sections && sections.map((section,index)=>{
                return <Section section={section} key={section.sectionId} deleteSection={deleteSectionHandler} saveSection={saveSectionHandler}/>
            })}
            <button onClick={(e)=>{addSectionHandler()}}>Add Section</button>
        </>
    )
}

export default CreateRubric