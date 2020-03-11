<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>Name: {{ myName }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        //props: ['myName'],
        props: {
            myName: {
                type: String,
                //required: true,
                default: 'Peter'
            }
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("")
            },
            resetName() {
                this.myName = 'Wojciech'
                this.$emit('nameWasReset', this.myName)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral !important;
    }
</style>
