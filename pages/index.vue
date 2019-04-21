<template>
  <main>
    <Claire class="claire"/>
    <Post class="post"/>
  </main>
</template>

<script>
  import Claire from '../components/main/Claire.vue'
  import Post from '../components/main/Post.vue'

  export default {
    components: {Claire, Post}
  }
</script>

<style scoped lang="scss">

  main{
    width: 100%;
    display: grid;
    grid-template-columns: 45% 55%;
  }

  @media (min-height: 1000px) {
    main{
      align-items: center;
    }
  }

  @media (max-width: 1300px) {
    main{
      grid-template-columns: 1fr;
    }
  }


</style>
