Vue.component('coupon', {
  template: '<input placeholder="Enter your coupon code" @blur="onCouponApplied">',
  methods: {
    onCouponApplied: function() {
      this.$emit('applied');
    }
  }
});

new Vue({
  el: '#app',
  data: {
    couponApplied: false
  },
  methods: {
    onCouponApplied: function() {
      this.couponApplied = true;
    }
  }
});
