new Vue({
    el: '#exercise',
    data: {
       name: 'Leszek',
       age: 47,
       imgaeLink: 'https://sphoto.nasza-klasa.pl/4520244/1/square/131942a02b.jpeg?v=1'
    },
    methods: {
        randomNumber: function() {
            return Math.random();
        }
    }
});