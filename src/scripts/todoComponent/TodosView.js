import Backbone from 'backbone'
import TodoView from './TodoView'

const TodosView = Backbone.View.extend({
  initialize: function () {
    this.listenTo(this.collection, 'add', this.render, this)
    this.listenTo(this.collection, 'change', this.render, this)
    this.listenTo(this.collection, 'remove', this.render, this)
  },
  el: '.todo-list',
  render: function () {
    this.$el.html('')
    const self = this
    this.collection.forEach(function (todo) {
      const todoView = new TodoView({ model: todo })
      self.$el.append(todoView.render().el)
    })
    return this
  }
})

export default TodosView
