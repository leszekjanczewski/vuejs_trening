export const mixinCounter = {
    data() {
        return {
            textToCountComputed: 'Test',
        }
    },
    filters: {
        countTextFilter(value) {
            return value.length;
        }
    },
    computed: { 
        countTextComputed() {
            return this.textToCountComputed.length;
        }
    },
};