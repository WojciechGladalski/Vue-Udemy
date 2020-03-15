<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2>{{quoteTitle}}</h2>
                    <p>'This is a wonderfull quote!'</p>
                </app-quote>
            </div>
        </div>
    </div>
</template>

<script>
    import Quote from "@/components/Quote";

    export default {
        components: {
            appQuote: Quote
        },
        data: function () {
            return {
                quoteTitle: 'A Quote'
            }
        }
    }
</script>

<style>
    h2 {
        color: red;
    }
</style>
