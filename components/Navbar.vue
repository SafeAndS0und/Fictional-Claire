<template>
  <nav>

    <div class="upper-triangle">
      <div class="burger" @click="unfolded = !unfolded">
        <span class="ingredient" :class="{ing_1: unfolded}"></span>
        <span class="ingredient" :class="{ing_2: unfolded}"></span>
        <span class="ingredient" :class="{ing_3: unfolded}"></span>
      </div>
    </div>

    <ul :class="{mobileNav: unfolded}" @click="changeMenuItem($event)">
      <nuxt-link class="active" to="/">
        <li>Home</li>
      </nuxt-link>
      <nuxt-link to="/biography">
        <li>Biography</li>
      </nuxt-link>
      <nuxt-link to="#">
        <li>Compositions</li>
      </nuxt-link>
      <nuxt-link to="#">
        <li>Concerts</li>
      </nuxt-link>
      <nuxt-link to="#">
        <li>Blog</li>
      </nuxt-link>
      <nuxt-link to="#">
        <li>Links</li>
      </nuxt-link>
    </ul>

    <div class="bottom-triangle" v-if="unfolded">

    </div>

  </nav>
</template>

<script>

  export default {
    name: "Navbar",
    data(){
      return {
        unfolded: false
      }
    },
    methods: {
      changeMenuItem(e){
        // console.dir(e.target.parentElement)
        Array.from(e.target.parentElement.parentElement.children).forEach(child => {

          child.className = ''
        })
        e.target.parentElement.className = 'active'
      }
    }
  }
</script>

<style scoped lang="scss">

  @import '../assets/css/variables.scss';

  .upper-triangle {
    display: none;
  }

  .bottom-triangle {
    display: none;
  }

  nav {
    width: 100%;
    padding: 16px;

    ul {
      list-style: none;
      display: grid;
      grid-auto-flow: column;
      grid-template-columns: repeat(auto-fill, minmax(120px, auto));
      grid-gap: 10px;
      transition: 0.3s;

      a{
        text-decoration: none;
      }

      a {
        font-size: .95em;
        font-weight: 300;
        text-align: center;
        color: #636363;
        padding: 10px 12px;
        cursor: pointer;
        position: relative;
        transition: .5s;

        &:after {
          position: absolute;
          bottom: -5px;
          left: 10%;
          content: '';
          height: 2px;
          width: 0;
          transition: .8s;
        }
        &:hover:after {
          width: 60%;
          background-color: $blueen;
        }
      }

      .active {
        background-color: $blueen;
        color: white;

        &:after {
          height: 0;
        }

      }
    }
  }

  @media (max-width: 800px) {

    ul, li {
      display: none;
    }

    .bottom-triangle {
      display: block;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 67;
      height: 300px;
      width: 300px;
      background-color: white;
      -webkit-clip-path: polygon(0 54%, 0% 100%, 54% 100%);
      clip-path: polygon(0 54%, 0% 100%, 54% 100%);
    }

    .upper-triangle {
      z-index: 6;
      display: block;
      position: fixed;
      top: 0;
      right: 0;
      height: 270px;
      width: 270px;
      -webkit-clip-path: polygon(100% 0, 40% 0, 100% 44%);
      clip-path: polygon(100% 0, 40% 0, 100% 44%);
      background-color: $blueen;

      .burger {
        z-index: 3;
        width: 28%;
        float: right;
        padding-right: 16px;
        padding-top: 16px;
        cursor: pointer;
        transition: .3s;

        &:hover {
          transform: scale(1.03);
        }

        .ingredient {
          display: block;
          width: 100%;
          margin: 6px auto;
          background-color: #ffffff;
          height: 5px;
          transition: .3s;
          transform-origin: center;
        }

        .ing_1 {
          transform: rotate(45deg) translateY(15px);
        }
        .ing_2 {
          opacity: 0;
        }
        .ing_3 {
          transform: rotate(-45deg) translateY(-15px);
        }
      }

    }

    nav {
      padding-bottom: 80px;
    }

    .mobileNav {
      padding: 80px 0;
      position: fixed;
      width: 100%;
      height: 100vh;
      background-color: $blueen;
      z-index: 5;
      top: 0;
      left: 0;
      grid-auto-flow: row;
      grid-template-columns: auto;
      grid-template-rows: auto;
      grid-gap: 10px;
      justify-items: center;
      align-items: center;

      li {
        display: block !important;
        color: white;
        padding: 20px 70px;
        font-weight: 700;
        transition: .2s;

        &:hover {
          transform: scale(1.1);
        }
      }

      .active {
        background-color: white;
        color: $blueen;
      }
    }

  }

</style>
