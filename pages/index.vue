<template>
  <main>
    <Claire class="claire"/>
    <Post class="post"/>

    <footer>

      <div class="mail">
        <p>Email me at: <br/>
          cl.ch.pianist@gmail.com</p>
      </div>

      <div class="github">
        <v-icon name="brands/github" class="icon" scale="2"/>
      </div>

    </footer>
  </main>
</template>

<script>
  import Claire from '../components/main/Claire.vue'
  import Post from '../components/main/Post.vue'

  export default {
    components: {Claire, Post},
    transition: 'page'
  }
</script>

<style scoped lang="scss">

  @import '../assets/css/variables.scss';

  main {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 55%;

    footer {
      display: none;
      width: calc(100% + 20px);
      transform: translateX(-10px);

      .mail {
        background-color: $asideGrey;
        color: $blueen;
        text-align: center;
        font-weight: 700;
        font-size: .9em;
        padding: 20px 0;
      }
      .github{
        background-color: $blueen;
        color: white;
        display: grid;
        align-items: center;

        .icon{
          display: block;
          margin: auto;
        }
      }
    }
  }

  @media (min-height: 1000px) {
    main {
      align-items: center;
    }
  }

  @media (max-width: 1300px) {
    main {
      grid-template-columns: 1fr;

      footer {
        display: grid;
        grid-template-columns: .8fr .2fr;
      }
    }
  }


</style>
