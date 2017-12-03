Vue.component('progress-view', {
  data: function() {
    return {
      completionRate: 0
    }
  }
});

new Vue({
  el: '#app',
});
