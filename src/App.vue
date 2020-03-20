<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{text | toUpperCaseFilter | toLowerCaseFilter}}</p>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit.id">{{fruit}}</li>
                </ul>
                <app-list></app-list>
            </div>
        </div>
    </div>
</template>

<script>
    import List from "@/components/List";
    import {fruitMixin} from "@/fruitMixin";

    export default {
        data() {
            return {
                text: 'Hello there!',
            }
        },
        filters: {
            toUpperCaseFilter(value) {
                return value.toUpperCase()
            }
        },
        components: {
            appList: List
        },
        mixins: [fruitMixin]
    }
</script>

<style>

</style>
