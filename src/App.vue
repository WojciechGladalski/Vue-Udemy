<template>
    <div>
<!--        <Css/>-->
<!--        <AriaTabs/>-->
<!--        <Animation/>-->
      <HeightTransition/>
    </div>
</template>

<script>
    import Css from "@/components/Css";
    import AriaTabs from "@/components/AriaTabs";
    import Animation from "@/components/Animation";
    import HeightTransition from "@/components/HeightTransition";
    export default {
        components: {
          HeightTransition,
            // eslint-disable-next-line vue/no-unused-components
            AriaTabs,
          // eslint-disable-next-line vue/no-unused-components
            Css,
            // eslint-disable-next-line vue/no-unused-components
            Animation
        }
    }
</script>

<style></style>