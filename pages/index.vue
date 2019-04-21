<template>
  <main>
    <Claire class="claire"/>
  </main>
</template>

<script>
  import Claire from '../components/main/Claire.vue'

  export default {
    components: {Claire}
  }
</script>

<style scoped lang="scss">

  main{
    width: 100%;

    .claire{
      width: 45%;
    }
  }

</style>
