import Backbone from 'backbone'

const TodoModel = Backbone.Model.extend({
  defaults: {
    description: ''
  }
})

export default TodoModel
