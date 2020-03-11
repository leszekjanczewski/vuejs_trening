new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function() {
                alert("Clicked");
            },
            valueInput: function(event) {
                this.value = event.target.value;
            }
        }
    });