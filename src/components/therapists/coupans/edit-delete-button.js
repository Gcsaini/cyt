
export const EditDeleteButton = ({ handleNavigate, onDelete }) => {
    return <div className="rbt-button-group justify-content-start">
        <a className="rbt-btn-link left-icon" onClick={handleNavigate} style={{cursor:"pointer"}}><i className="feather-edit" ></i> Edit</a>
        <a className="rbt-btn-link left-icon" onClick={onDelete} style={{cursor:"pointer"}}><i className="feather-trash-2" ></i> Delete</a>
    </div>
}