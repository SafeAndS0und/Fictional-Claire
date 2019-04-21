<template>
  <nav>

    <ul>
      <li class="active">Home</li>
      <li>Biography</li>
      <li>Compositions</li>
      <li>Concerts</li>
      <li>Links</li>
      <li>CD's</li>
      <li>Archives</li>
    </ul>

  </nav>
</template>

<script>

  export default {
    name: "Navbar"
  }
</script>

<style scoped lang="scss">

  @import '../assets/css/variables.scss';

  nav{
    width: 100%;
    padding: 16px 5px;

    ul{
      list-style: none;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fill, minmax(120px, auto));
      grid-gap: 10px;

      li{
        font-size: .95em;
        font-weight: 300;
        text-align: center;
        color: #636363;
        padding: 10px 12px;
        cursor: pointer;
        position: relative;

        &:after{
          position: absolute;
          bottom: -5px;
          left: 10%;
          content: '';
          height: 2px;
          width: 0;
          transition: .8s;
        }
        &:hover:after{
          width: 60%;
          background-color: $blueen;
        }
      }

      .active{
        background-color: $blueen;
        color: white;

        &:after{
          height: 0;
        }
      }
    }
  }

</style>
