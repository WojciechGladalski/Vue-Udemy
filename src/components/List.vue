<template>
    <div>
        <h1>List</h1>
        <input v-model="filterText">
        <ul>
            <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
    import {fruitMixin} from "@/fruitMixin";

    export default {
        name: 'List',
        mixins: [fruitMixin],
        created() {
            console.log('Inside List created Hook')
        }
    }
</script>

<style>

</style>
