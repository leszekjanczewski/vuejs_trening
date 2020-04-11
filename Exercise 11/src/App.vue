<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <p>{{textToReverseOne | reverseText}}</p>
                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <p> "Test" => Gets Filtered to => "Test" ({{ 'Test' | count-chars }})</p>
                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <label for="textToReverse">Text to Reverse</label>
                <input type="text" v-model="textToReverseTwo" id="textToReverse">
                <p>{{ reversedText }}</p>
                <label for="textToCount">Text to Count</label>
                <input type="text" id="textToCount" v-model="textToCount">
                <p>Gets Counted to => ({{ countedChars }})</p>
                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <p> "Test" => Gets Filtered to => "Test" ({{ 'Test' | countTextFilter }})</p>
                <p> "Test" => Gets Computed From Mixin to => "Test" ({{ countTextComputed }})</p>
            </div>
        </div>
    </div>
</template>

<script>
    import { countChars } from './main.js';
    import { mixinCounter } from './mixin.js';

    export default {
        mixins: [mixinCounter],
        data() {
            return {
                textToReverseOne: 'Vue.js from Maxim',
                textToReverseTwo: '',
                textToCount: ''
            }
        },
        filters: {
            reverseText(value) {
                return value.split("").reverse().join("");
            }
        },
        computed: {
            reversedText() {
                return this.textToReverseTwo.split("").reverse().join("");
            },
            countedChars() {
                return this.textToCount.length;
            }
        }
    }
</script>

<style>
</style>
