<template>
  <section>
    <div class="showcase">
      <img
        src="https://images.unsplash.com/photo-1549965286-076269c3bda7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
        alt="">
      <img
        src="https://images.unsplash.com/photo-1485561222814-e6c50477491b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="">
      <img
        src="https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt="">
    </div>

    <div class="info">

      <h1>Claire Chapman</h1>

      <p>Claire Chapman is a fictional classical pianist.
        She was born in Beijing, began studying piano there at age six, and went on to study at the Central Conservatory of Music in Beijing and the Curtis Institute of Music in Philadelphia.
        By the age of 21 she was already an internationally recognized concert pianist, giving recitals around the world.
      </p>

      <img
        src="https://images.unsplash.com/photo-1551759861-683c693471e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=725&q=80"
        alt="">

      <div class="bar">

      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: "Claire"
  }
</script>

<style scoped lang="scss">

  @import '../../assets/css/variables.scss';

  section {

    .showcase {
      height: 30%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, auto);
      margin: 50px 20px;
      justify-items: center;
      grid-gap: 20px;

      img {
        width: 100%;
      }
    }

    .info{
      display: grid;
      grid-template-areas:
        "h h h h h"
        "p p p i i"
        "b b b b b"
    ;

      h1{
        font-size: 4em;
        color: #161616;
        grid-area: h;
      }

      p{
        grid-area: p;
      }

      img{
        width: 200px;
        grid-area: i;
      }

      .bar{
        grid-area: b;
        height: 50px;
        background-color: $blueen;
      }
    }
  }

</style>
