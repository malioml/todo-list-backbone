import 'bootstrap'
import './styles/main.scss'
import TodoModel from './scripts/todoComponent/TodoModel'
import TodoCollection from './scripts/todoComponent/TodoCollection'
import TodosView from './scripts/todoComponent/TodosView'

const todoCollection = new TodoCollection()
const todosView = new TodosView({ collection: todoCollection })
todosView.render()

jQuery('.todo-add').on('click', function () {
  const $elDescription = jQuery('.todo-description')
  if (!$elDescription.val()) {
    return alert('Description must not be empty')
  }
  const todo = new TodoModel({
    description: $elDescription.val()
  })
  todoCollection.add(todo)
  $elDescription.val('')
})
