var alertSystem = {
  methods: {
    alertThis: function() {
      console.log('Great!');
    }
  }
};

new Vue({
  el: '#app',
  mixins: [alertSystem],
  created: function() {
    this.alertThis();
  }
});
