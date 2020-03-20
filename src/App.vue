<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built-in Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some text</strong>'"></p>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight:background.delayed="'red'">Color this</p>
                <p v-local-text-highlight:color.delayed="'blue'">Color but text only</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-text-highlight': {
                // eslint-disable-next-line no-unused-vars
                bind(el, binding, vnode) {
                    var delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000
                    }
                    setTimeout(()=> {
                        if (binding.arg == 'color') {
                            el.style.color = binding.value
                        }
                    }, delay)
                }
            }
        }
    }
</script>

<style>

</style>
