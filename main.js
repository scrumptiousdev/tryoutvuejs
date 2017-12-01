Vue.component('tasks-list', {
  template: '#tasks-template',
  computed: {
    remaining: function() {
      return this.list.filter(this.isProgress).length;
    }
  },
  data: function() {
    return {
      list: []
    };
  },
  created: function() {
    this.fetchTaskList();
  },
  methods: {
    fetchTaskList: function() {
      var vm = this;
      $.getJSON('data.json', function(tasks) {
        vm.list = tasks.data;
      });
    },
    deleteTask: function(key) {
      Vue.delete(this.list, key);
    },
    isCompleted: function(task) {
      return task.completed;
    },
    isProgress: function(task) {
      return ! this.isCompleted(task);
    },
    clearCompleted: function() {
      this.list = this.list.filter(this.isProgress);
    }
  }
});

new Vue({
  el: '#app'
})
