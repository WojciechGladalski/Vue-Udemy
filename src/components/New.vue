<template>
    <div>
        <h3>New Quote</h3>
        <button @click="counter++">Increase counter!</button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
    export default {
        name: "New",
        data: function () {
            return {
                counter: 0
            }
        },
        destroyed() {
            console.log('Destoyed!')
        }
    }
</script>

<style scoped>

</style>