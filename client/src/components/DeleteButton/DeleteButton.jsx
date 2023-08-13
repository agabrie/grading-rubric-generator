import "./DeleteButton.css"
function DeleteButton({onClick, size="reg"}){
    return (<>
    <button
          className={`delete-btn ${size}-btn`}
          onClick={onClick}
        >
          X
        </button>
    </>)
}

export default DeleteButton;