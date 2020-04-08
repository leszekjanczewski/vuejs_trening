<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-myOn:click="allertMe">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            allertMe() {
                alert('No CLICK!')
            }
        },
        directives: {
            'myOn': {
                bind(el, binding, vnode) {
                    let type = binding.arg;
                    let myFunction = binding.value;
                    el.addEventListener(type, myFunction);
                }
            }
        }
    }
</script>

<style>
</style>
