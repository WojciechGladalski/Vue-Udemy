<template>
  <div>
    <button @click="methh">BATON</button>
    <button @click="methh2">BATON2</button>

      <div class="container" ref="container" id="container">
        <transition-group name="people"
            @before-enter="beforeEnter"
            @before-leave="beforeLeave"
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
    //this.$refs.container.style.height = '45px'
  },
  methods: {
    methh() {
      this.tabll.push('sth')
    },
    methh2() {
      this.tabll.pop()
    },
    beforeEnter(el) {
      console.log('Before enter method')
      console.log(el)

      let parent = this.$refs.container
      console.log(parent.clientHeight)
      parent.style.height = (this.tabll.length * 30 + 15) + 'px'

    },
    beforeLeave(el) {
      console.log(el)


      let parent = this.$refs.container
      console.log(parent.clientHeight)
      setTimeout(() => {
        parent.style.height = (this.tabll.length * 30 + 15) + 'px'
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .container {
    border: 3px solid red;
    transition: height 1s linear;
    height: 46px;
  }
  .sth {
    background-color: aqua;
    margin: 10px;
  }



  .people-enter-active, .people-leave-active {
    transition: all 1s;
    transition-delay: 1s;
  }
  .people-enter, .people-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .people-leave-active {
    transition: all 1s;
  }
</style>