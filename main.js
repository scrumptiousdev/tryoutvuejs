var bus = new Vue();

Vue.component('message', {
  template: '<input v-model="message" @keyup.enter="storeMessage">',
  data: function() {
    return { message: '' };
  },
  methods: {
    storeMessage: function() {
      bus.$emit('new-message', this.message);
      this.message = '';
    }
  }
});

new Vue({
  el: '#app',
  data: {
    messages: []
  },
  methods: {
    handleMessage: function(message) {
      this.messages.push(message);
    }
  },
  created: function() {
    bus.$on('new-message', this.handleMessage);
  },
  destroyed: function() {
    bus.$off('new-message', this.handleMessage);
  }
});
