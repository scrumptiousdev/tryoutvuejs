new Vue({
  el: '#app',
  data: {
    people: [
      { name: 'Ryan', role: 'admin' },
      { name: 'Jeff', role: 'admin' },
      { name: 'Chris', role: 'client' },
      { name: 'Jemma', role: 'user' },
      { name: 'Gavin', role: 'user' }
    ]
  },
  methods: {
    orderedPerson: function() {
      return _.sortBy(this.people, 'name');
    },
    sortedFilter: function(role) {
      return this.people.filter(function(person) {
        return person.role === role;
      });
    }
  }
});
