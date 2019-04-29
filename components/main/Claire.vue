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
        She was born in Beijing, began studying piano there at age six, and went on to study at the Central Conservatory
        of Music in Beijing and the Curtis Institute of Music in Philadelphia.
        By the age of 21 she was already an internationally recognized concert pianist, giving recitals around the
        world.
      </p>

      <img
        src="https://images.unsplash.com/photo-1551759861-683c693471e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=725&q=80"
        alt="">

      <div class="bar">
        <p>Email me at: <br/>
          cl.ch.pianist@gmail.com</p>
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
    padding-left: 30px;
    display: grid;

    .showcase {
      height: 30%;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, auto);
      margin: 50px 0;
      justify-items: center;
      grid-gap: 10px;


      img {
        width: 100%;
      }
    }

    .info {
      display: grid;
      grid-template-areas: "h h h h h" "p p p i i" "b b b b b";

      grid-column-gap: 10px;
      grid-row-gap: 25px;

      h1 {
        font-size: 4.5em;
        letter-spacing: 1.5px;
        color: #161616;
        grid-area: h;
        font-weight: 900;
      }

      p {
        grid-area: p;
        color: #575757;
        align-self: center;
        font-weight: 500;
      }

      img {
        height: 210px;
        grid-area: i;
      }

      .bar {
        grid-area: b;
        height: 60px;
        width: calc(100% + 30px);
        transform: translateX(-30px);
        background-color: $blueen;
        text-align: right;
        padding-right: 20px;
        padding-top: 10px;

        p {
          color: white;
          font-weight: 700;
        }
      }
    }
  }

  @media (min-height: 1000px) {
    section {

      .showcase {
        margin-top: 80px;
        margin-bottom: 130px;
      }
      .info {
        grid-row-gap: 30px;

        .bar {
          height: 70px;
        }

      }
    }
  }

  @media (max-width: 800px) {
    section {
      border-bottom: 1px solid #e7e7e7;
      padding: 10px;

      .showcase {
        grid-row: 2;
      }
      .info {
        grid-template-areas: "h h h h h" "p p p i i" "b b b b b";

        h1 {
          font-size: 2.2em;
          text-align: center;
        }

        p {
          font-size: 0.88em;
        }
        img {
          height: 160px;
          border-radius: 20px;
        }
        .bar {
          display: none;
        }
      }
    }
  }

</style>
