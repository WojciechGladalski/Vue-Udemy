<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <hr>
                <select v-model="alertAnimation" class="form-control">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                </select>
                <br><br>
                <button class="btn btn-primary" @click="show = !show">Show Alert</button>
                <br><br>
                <transition :name="alertAnimation">
                    <div class="alert alert-info" v-show="show">This is some info</div>
                </transition>
                <transition name="slide" type="animation">
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition
                        appear
                        enter-class=""
                        enter-active-class="animated bounce"
                        leave-class=""
                        leave-active-class="animated shake"
                >
                    <div class="alert alert-info" v-if="show">This is some info</div>
                </transition>
                <transition :name="alertAnimation" mode="out-in">
                    <!--                    dodany key poniewaz musi byc unikalny div zeby dobindowało do name'a-->
                    <div class="alert alert-info" v-if="show" key="info">This is some info</div>
                    <div class="alert alert-warning" v-else key="warning">This is some warning</div>
                </transition>
                <hr>
                <button class="btn btn-primary" @click="load = !load">Load/Remove Element</button>
                <br><br>
                <transition
                        @before-enter="beforeEnter"
                        @enter="enter"
                        @after-enter="afterEnter"
                        @enter-cancelled="enterCancelled"

                        @before-leave="beforeLeave"
                        @leave="leave"
                        @after-leave="afterLeave"
                        @leave-cancelled="leaveCancelled"
                >
                    <div style="width: 100px; height: 100px; background-color: lightgreen;" v-if="load"></div>
                </transition>
                <div class="clean-css-transition" v-if="load"></div>
                <div class="clean-css-animation" style="width: 100px; height: 100px; background-color: red;" v-if="load"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: true,
                load: true,
                alertAnimation: 'fade'
            }
        },
        methods: {
            beforeEnter(el) {
                console.log('Before enter method')
                console.log(el)
            },
            enter(el, done) {
                console.log('Enter method')
                console.log(el)
                //trzeba wywołać metodę done aby zakomunikować do vue.js o zakończeniu eventu - nie trzeba tego robić jesli vue wie o tym dzięki
                //css-owi, ale w tym przypadku nie wie
                done()
            },
            afterEnter(el) {
                console.log('After enter method')
                console.log(el)
            },
            enterCancelled(el) {
                console.log('Enter cancelled method')
                console.log(el)
            },

            beforeLeave(el) {
                console.log('Before leave method')
                console.log(el)
            },
            leave(el, done) {
                console.log('Leave method')
                console.log(el)
                done()
            },
            afterLeave(el) {
                console.log('After leave method')
                console.log(el)
            },
            leaveCancelled(el) {
                console.log('Leave cancelled method')
                console.log(el)
            }
        }
    }
</script>

<style scoped>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {
        /*opacity: 1;*/
    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }
    .slide-enter {
        /*transform: translateY(20px);*/
        opacity: 0;
    }
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity 0.5s;
    }
    slide-leave {

    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 3s;
        opacity: 0;
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        }
        to {
            transform: translateY(0);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0);
        }
        to {
            transform: translateY(20px);
        }
    }

    .clean-css-animation {
        position: relative;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }
    @keyframes example {
        0%   {background-color:red; left:0px; top:0px;}
        25%  {background-color:yellow; left:200px; top:0px;}
        50%  {background-color:blue; left:200px; top:200px;}
        75%  {background-color:green; left:0px; top:200px;}
        100% {background-color:red; left:0px; top:0px;}
    }

    .clean-css-transition {
        width: 100px;
        height: 100px;
        background: greenyellow;
        /*transition: width 2s;*/
        /*transition: all 5s ease-in-out;*/
        transition: all 3s linear;
    }
    .clean-css-transition:hover {
        width: 300px;
        transform: rotate(20deg);
    }

</style>