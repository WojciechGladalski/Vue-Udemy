<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <app-quote>
                    <h2>A quote</h2>
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
        }
    }
</script>

<style>

</style>
