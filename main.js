Vue.component('tasks-list', {
  template: '#tasks-template',
  data: function() {
    return {
      list: []
    };
  },
  created: function() {
    this.fetchTaskList();
  },
  methods: function() {
    fetchTaskList: function() {
      var vm = this;
      $.getJSON('api-address-here', function(tasks) {
        vm.list = tasks;
      });
    }
    deleteTask: function(key) {
      Vue.delete(this.list, key);
    }
  }
});

new Vue({
  el: '#app'
})
