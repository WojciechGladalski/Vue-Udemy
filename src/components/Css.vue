<template>
    <div>
        <h1>CSS layout tests</h1>
        <div class="color-container">
            inline-block container
            <div>div inside example</div>
        </div>
        <div class="loader-wrapper">
            <svg height="59" width="63" class="star" data-rating="1">
                <polygon points="31, 6, 12, 64, 62, 28, 0, 28, 50, 64" fill="#F9D71C"/>
            </svg>
        </div>
        <div class="color-container-2">
            <div>div inside example 2</div>
        </div>
        <div class="color-container-3">
            inline container
            <div>div inside example 3</div>
        </div>
        <div class="container-flex">
            <div class="flex-1">flex1</div>
            <div class="middle-column">
                <div class="flex-2">flex2</div>
                <div class="flex-3">flex3</div>
            </div>
            <div class="flex-4">flex4</div>
        </div>
        <div class="container-grid">
            <div class="grid-1">grid1</div>
            <div class="grid-2">grid2</div>
            <div class="grid-3">grid3</div>
            <div class="grid-4">grid4</div>
        </div>
        <div class="position-relative">
            <div>POSITION: RELATIVE</div>
            <div>50 px od góry i 50 px od lewej</div>
            <div class="bonus">Bonus - totalny środek, niezależny od rodzeństwa</div>
        </div>
        <div class="position-absolute">
            <div>POSITION: ABSOLUTE</div>
            <div>25 px od góry i 500 px od lewej</div>
        </div>
        <div class="position-fixed">
            <div>POSITION: FIXED</div>
            <div>prawy górny róg - JEST JESZCZE MOCNIEJSZE OD ABSOLUTE</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Css"

        /*
        inline 	Displays an element as an inline element (like <span>). Any height and width properties will have no effect
        block 	Displays an element as a block element (like <p>). It starts on a new line, and takes up the whole width
        inline-block 	Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values

        ///////////////////////////////////////////////////

        Z-INDEX TO 3-CI WYMIAR - im wyższy z-index tym element wyżej, jeśli na siebie nachodzą

        position: static | relative | absolute | fixed | sticky

        static - defaultowa wartość wszystkich tagów

        In position: relative, the element is positioned relative to itself. However, an absolutely positioned element is relative to its parent.
        !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        Like position: absolute, fixed positioned elements are also removed from the normal document flow. The differences are:
        They are only relative to the <html> document, not any other parents.
        They are not affected by scrolling.

        jeszcze jest sticky - jest gdzieś na stronie i jak go przescrollujesz to osiada na suficie przeglądarki
         */

    }
</script>

<style scoped>


    .color-container {
        background-color: lightgreen;
        display: inline-block;
    }

    .color-container-2 {
        background-color: lightcoral;
        width: 200px;
        height: 200px;
    }

    .color-container-3 {
        background-color: yellow;
        display: inline;
    }

    .container-flex {
        border: 2px solid sandybrown;
        display: flex;
        height: 150px;
        width: 300px;
    }

    .middle-column {
        flex: 50%;
        /*display i direction nie musi byc jesli dzieci poprostu height 50%*/
        display: flex;
        flex-direction: column;
    }

    .flex-1 {
        background-color: yellow;
        flex: 25%
    }

    .flex-2 {
        background-color: green;
        /*height: 50%;*/
        flex: 50%;
    }

    .flex-3 {
        background-color: red;
        /*height: 50%;*/
        flex: 50%;
    }

    .flex-4 {
        background-color: blue;
        flex: 25%
    }

    .container-grid {
        border: 2px solid black;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        /*to będą trzy kolumny, ich szerokość będzie do siebie w stosunku 1:2:1*/
        grid-template-rows: 1fr 1fr;
        /*to będą dwa wiersze, ich wysokość będzie do siebie w stosunku 1:1*/

        grid-template-areas: "yellow green blue" "yellow red blue";

        /*nie ma wysokosci i szerokowsci a jest block wiec sie rozciaga jak moze w poziomie i jak elementy chcą w pionie*/
    }

    .grid-1 {
        background-color: yellow;

        grid-area: yellow;
    }

    .grid-2 {
        background-color: green;
        grid-area: green;
    }

    .grid-3 {
        background-color: red;
        grid-area: red;
    }

    .grid-4 {
        background-color: blue;
        grid-area: blue;
    }

    .position-relative {
        position: relative;
        top: 50px;
        left: 50px;
        width: 200px;
        height: 200px;
        background-color: aquamarine;
    }

    .position-absolute {
        position: absolute;
        height: 300px;
        width: 100px;
        background-color: darksalmon;
        top: 25px;
        left: 500px;
    }

    .position-fixed {
        position: fixed;
        height: 200px;
        width: 200px;
        background-color: azure;
        top: 5px;
        right: 5px;
    }

    .bonus {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 100px;
        height: 100px;
        background-color: antiquewhite;
    }

    .loader-wrapper {
        position: absolute;
        top: 240px;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 200px;
        height: 200px;
        background-color: black;
    }

    .star {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 76px;
        width: 64px;
        /*-webkit-animation: star-animation 3s ease infinite;*/
        animation: star-animation 4s linear infinite;
        animation-delay: 3s;
        opacity: 0;
    }

    @keyframes star-animation {
        /*0% {*/
        /*    !*-webkit-transform: scale(0) rotate(0deg);*!*/
        /*    transform: scale(0) rotate(0deg);*/
        /*}*/
        /*100% {*/
        /*    !*-webkit-transform: scale(1) rotate(360deg);*!*/
        /*    transform: scale(1) rotate(360deg);*/
        /*}*/

        /*bardzo ważna jest kolejność*/
        0% {
            transform: rotate(0deg) translateY(65px) scale(0) rotate(0deg);
            opacity: 1;
        }
        25% {
            transform: rotate(90deg) translateY(65px) scale(0.8) rotate(180deg);
            opacity: 1;
        }
        50% {
            transform: rotate(180deg) translateY(65px) scale(1) rotate(360deg);
            opacity: 1;
        }
        75% {
            transform: rotate(270deg) translateY(65px) scale(0.8) rotate(520deg);
            opacity: 1;
        }
        100% {
            transform: rotate(360deg) translateY(65px) scale(0) rotate(720deg);
            opacity: 1;
        }
    }

</style>