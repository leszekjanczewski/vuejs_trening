new Vue({
  el: '#exercise',
  data: {
    changeEffect: {
      highlight: true,
      shrink: false
    },
    className: ''
  },
  methods: {
    startEffect: function() {
      var vm = this;
      setInterval(function() {
        vm.changeEffect.highlight = !vm.changeEffect.highlight;
        vm.changeEffect.shrink = !vm.changeEffect.shrink;  
      }, 1000);
    }
  }
});
