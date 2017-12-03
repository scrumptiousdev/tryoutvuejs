// function Event() {
//   this.vue = new Vue();
// }
//
// Event.prototype.fire = function(event, data) {
//   this.vue.$emit(event, data);
// };
//
// Event.prototype.listen = function(event, callback) {
//   this.vue.$on(event, callback);
// };
//
// window.Event = new Event();

// OR

window.Event = new Vue();

Vue.component('coupon', {
  template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
  methods: {
    onCouponApplied: function() {
      Event.$emit('applied');
    }
  }
});

new Vue({
  el: '#app',
  data: {
    couponApplied: false
  },
  created: function() {
    $vm = this;
    Event.$on('applied', function() {
      $vm.couponApplied = true;
    })
  }
});
