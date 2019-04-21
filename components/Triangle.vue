<template>

  <div class="triangle">
    <p>Written By Nikodem Lorenz</p>
    <v-icon name="brands/github" scale="2.5" class="github"/>
  </div>

</template>

<script>
  export default {
    name: "Triangle"
  }
</script>

<style scoped lang="scss">

  @import '../assets/css/variables.scss';

  .triangle{
    position: fixed;
    bottom: 0;
    right: 0;
    width: 28em;
    height: 22em;
    -webkit-clip-path: polygon(100% 1%, 0% 100%, 100% 100%);
    clip-path: polygon(100% 1%, 0% 100%, 100% 100%);
    background-color: $blueen;

    p{
      position: absolute;
      bottom: 20px;
      left: 40%;
      color: white;
      font-size: 0.95em;
    }
    .github{
      position: absolute;
      bottom: 20px;
      right: 6%;
      color: white;
    }
  }

</style>
