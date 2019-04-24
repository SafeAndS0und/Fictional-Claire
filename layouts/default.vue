<template>
  <div>

    <aside class="left-column"></aside>

    <div class="after-column">
      <Navbar/>
      <nuxt/>
    </div>

    <Triangle class="triangle"/>
  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Triangle from '../components/Triangle.vue'

  export default {
    components: {Navbar, Triangle}
  }
</script>


<style scoped lang="scss">

  div {

    .left-column {
      position: fixed;
      top: 0;
      height: 100vh;
      left: 0;
      width: 40px;
      background-color: #2c2c2c;
    }

    .after-column{
      padding-left: 40px;
    }

    @media (max-width: 1300px) {
      .left-column{
        display: none;
      }
      .after-column{
        padding: 0 10px;
      }

      .triangle{
        display: none;
      }
    }
  }
</style>


<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700,900');

  html {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  @media (min-width: 1600px) {
    html{
      font-size: 20px;
    }
  }

</style>


