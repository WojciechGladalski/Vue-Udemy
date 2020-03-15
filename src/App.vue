<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'">Quote</button>
                <button @click="selectedComponent = 'appAuthor'">Author</button>
                <button @click="selectedComponent = 'appNew'">New</button>
                <hr>
                <p>{{selectedComponent}}</p>
                <hr>
                <component :is="selectedComponent">
                    Default content
                </component>
<!--                <app-quote>-->
<!--                    <h2 slot="title">{{quoteTitle}}</h2>-->
<!--                    <p>'This is a wonderfull quote!'</p>-->
<!--                </app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "@/components/Quote";
    import Author from "@/components/Author";
    import New from "@/components/New";

    export default {
        components: {
            appQuote: Quote,
            // eslint-disable-next-line vue/no-unused-components
            appAuthor: Author,
            // eslint-disable-next-line vue/no-unused-components
            appNew: New
        },
        data: function () {
            return {
                quoteTitle: 'A Quote',
                selectedComponent: 'appQuote'
            }
        }
    }
</script>

<style>

</style>
