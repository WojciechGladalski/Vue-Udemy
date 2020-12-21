<template>
  <div>
    <button @click="methh">BATON</button>

      <div class="container" ref="container" id="container">
        <transition-group name="people"
            @before-enter="beforeEnter"

        >
        <template v-for="(sth, index) in tabll">
          <div :key="index" class="sth">
            {{sth}}
          </div>
        </template>
        </transition-group>
      </div>


  </div>
</template>

<script>
export default {
  name: "HeightTransition",
  data() {
    return {
      tabll: ['sth']
    }
  },
  mounted() {
    this.$refs.container.style.height = '25px'
  },
  methods: {
    methh() {
      this.tabll.push('sth')
    },
    beforeEnter(el) {
      console.log('Before enter method')
      console.log(el)

      let parent = this.$refs.container
      console.log(parent.clientHeight)
      parent.style.height = (this.tabll.length * 20 + 5) + 'px'

    }
  }
}
</script>

<style scoped>
  .container {
    border: 3px solid red;
    transition: height 1s linear;
  }
  .sth {
    background-color: aqua;
  }



  .people-enter-active, .people-leave-active {
    transition: all 1s;
    transition-delay: 1s;
  }
  .people-enter, .people-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>