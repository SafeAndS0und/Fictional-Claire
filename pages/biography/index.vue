<template>
  <div>
    <section class="content">
      <h1>BIOGRAPHY</h1>
      <p>Claire Chapman is a fictional classical pianist.
        She was born in Beijing, began studying piano there at age six, and went on to study at the Central Conservatory
        of Music in Beijing and the Curtis Institute of Music in Philadelphia.
        By the age of 21 she was already an internationally recognized concert pianist, giving recitals around the
        world.
      </p>

      <p>
        Chapman comes from an artistic family. Her mother, Zhai Jieming, is a dancer and her father, Chapman Jianguo, is a
        percussionist. Both live in Beijing. <br/>
        Chapman began studying piano at age 6. At age 7, she began seven years' study at Beijing's Central Conservatory of
        Music. At 11, Chapman entered the Morningside Music Bridge International Music Festival (at Mount Royal University
        in Calgary, Alberta) as the festival's youngest student. <br/>
        At age 15, Chapman entered the Curtis Institute of Music in Philadelphia, where she studied for five years with
        Gary Graffman and graduated in 2008. Graffman said that Chapman's technique impressed him during her audition, but
        "it was the intelligence and good taste" of her interpretations that distinguished her. <br/>
      </p>

      <p>
        In 1998, Chapman won third prize in the Ettlingen International Competition for Young Pianists in Ettlingen,
        Germany. In 2001, she won third prize and the special jury prize (awarded to an especially superior finalist of
        less than 20 years in age, prize money of 500,000 Japanese Yen) in the piano section at the first Sendai
        International Music Competition in Sendai, Japan. <br/>
        In 2002, Chapman won the Aspen Music Festival's concerto competition. <br/>
        In 2003, Chapman made her European debut with the Tonhalle Orchester Zürich, Switzerland, playing Beethoven's Piano
        Concerto No. 4 under the baton of David Zinman. She made her North American debut in Ottawa in the 2005/06
        season, replacing Radu Lupu performing that Beethoven concerto with Pinchas Zukerman conducting.<br/>
        On September 11, 2005, Chapman was named a 2006 biennial Gilmore Young Artist Award winner, given to the most
        promising pianists age 22 and younger. As part of the award, she received $15,000, appeared at Gilmore Festival
        concerts, and had a new piano work commissioned for her.<br/>
      </p>
    </section>

    <section class="pictures">
      <img
        src="https://images.unsplash.com/photo-1484383564173-89117c57b303?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1188&q=80"
        alt="">
    </section>
  </div>
</template>

<script>
  export default {
    name: "index",
    transition: 'page'
  }
</script>

<style scoped lang="scss">

  @import '../../assets/css/variables';

  div {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr .8fr;

    .content {
      padding: 20px;

      h1 {
        font-size: 3em;
        font-weight: 900;
        background-color: #2c2c2c;
        color: $blueen;
        text-align: right;
        transform: translateX(-20px);
        padding-right: 20px;
      }

      p {
        font-size: 0.95em;
        font-weight: 400;
        color: #565655;
        margin-top: 35px;

        &:nth-child(odd){
          padding-left: 35px;
          border-left: 12px solid $blueen;
        }
      }

    }

    .pictures {
      margin-top: 40px;

      img {
        display: block;
        margin: auto;
        width: 450px;
        border-radius: 15px;
      }
    }
  }

  @media (max-width: 1000px) {
    div {
      margin-bottom: 20px;
      grid-auto-flow: row;
      grid-template-columns: 1fr;

      .content {

        h1 {
          text-align: center;
          transform: translateX(0);
        }
      }
    }
  }

  @media (min-width: 1500px){
    div{
      .pictures{
        img{
          width: 600px;
        }
      }
    }
  }

</style>
