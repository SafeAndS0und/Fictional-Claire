<template>
  <nav>

    <div class="upper-triangle">
      <div class="burger">
        <span class="ingredient"></span>
        <span class="ingredient"></span>
        <span class="ingredient"></span>
      </div>
    </div>

    <ul>
      <li class="active">Home</li>
      <li>Biography</li>
      <li>Compositions</li>
      <li>Concerts</li>
      <li>Blog</li>
      <li>Links</li>
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

  .upper-triangle{
    display: none;
  }

  nav{
    width: 100%;
    padding: 16px;

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

  @media (max-width: 800px) {

    ul, li{
      display: none;
    }

    .upper-triangle{
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 270px;
      width: 270px;
      -webkit-clip-path: polygon(100% 0, 40% 0, 100% 44%);
      clip-path: polygon(100% 0, 40% 0, 100% 44%);
      background-color: $blueen;

      .burger{
        z-index: 3;
        width: 28%;
        float: right;
        padding-right: 16px;
        padding-top: 16px;

        .ingredient{
          display: block;
          width: 100%;
          margin: 6px auto;
          background-color: #ffffff;
          height: 3px;
        }
      }
    }

    nav{
      padding-bottom: 80px;
    }

  }

</style>
