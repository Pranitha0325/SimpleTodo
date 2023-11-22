// Write your code here
import './index.css'

const TodoItems = props => {
  const {todoDetails, deleteTodoItem} = props
  const {title, id} = todoDetails

  const deleteClicked = () => {
    deleteTodoItem(id)
  }
  return (
    <li className="items-container">
      <p>{title}</p>
      <button type="button" className="button" onClick={deleteClicked}>
        Delete
      </button>
    </li>
  )
}

export default TodoItems
