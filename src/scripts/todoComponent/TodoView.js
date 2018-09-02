import Backbone from 'backbone'
import _ from 'underscore'

const TodoView = Backbone.View.extend({
  events: {
    'click .todo-delete': 'todoDelete',
    'click .todo-edit': 'todoEdit',
    'click .todo-cancel': 'todoCancel',
    'click .todo-update': 'todoUpdate'
  },
  tagName: 'tr',
  template: _.template(jQuery('#todo-template').html()),
  render: function () {
    this.$el.html(this.template(this.model.toJSON()))
    return this
  },
  todoDelete: function () {
    this.model.destroy()
  },
  todoEdit: function () {
    this.showButtonsOnEdition()
    const description = this.$('.description').html()
    const input = '<input type="text" value="' + description + '" class="form-control description-update">'
    this.$('.description').html(input)
  },
  todoCancel: function () {
    this.hideButtonsOnEdition()
    this.$('.description').html(this.model.get('description'))
  },
  todoUpdate: function () {
    const $elDescription = this.$('.description-update')
    if (!$elDescription.val()) {
      return alert('Description must not be empty')
    }
    this.model.set({
      description: $elDescription.val()
    })
    this.$('.description').html(this.model.get('description'))
    this.hideButtonsOnEdition()
  },
  showButtonsOnEdition: function () {
    this.$('.todo-edit').addClass('d-none')
    this.$('.todo-delete').addClass('d-none')
    this.$('.todo-update').removeClass('d-none')
    this.$('.todo-cancel').removeClass('d-none')
  },
  hideButtonsOnEdition: function () {
    this.$('.todo-update').addClass('d-none')
    this.$('.todo-cancel').addClass('d-none')
    this.$('.todo-edit').removeClass('d-none')
    this.$('.todo-delete').removeClass('d-none')
  }
})

export default TodoView
