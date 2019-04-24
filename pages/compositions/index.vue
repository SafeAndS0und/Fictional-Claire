<template>
  <div>
    <article>
      <div class="details">
        <h3>Arrangament of Mozart's "Turkish March"</h3>
        <p>The Piano Sonata No. 11 in A major, K. 331 / 300i, by Wolfgang Amadeus Mozart is a piano sonata in three
          movements.
          <br/><br/>

          The sonata was published by Artaria in 1784, alongside Nos. 10 and 12 (K. 330 and K. 332).
        </p>
      </div>
      <iframe src="https://www.youtube.com/embed/NJdzGLK3gfc"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </article>

    <article>
      <div class="details">
        <h3>Tea For Two</h3>
        <p>Youmans had written the basic melody idea of "Tea for Two" while he was in the navy during World War I, and he used it later on as an introductory passage for a song called "Who's Who With You?"
          While in Chicago, Youmans developed the idea into "a song that the hero could sing to the heroine" for the musical No, No, Nanette. He soon after played his composition for Irving Caesar and insisted he write the lyrics then and there.
        </p>
      </div>
      <iframe src="https://www.youtube.com/embed/ZxU0zW23-wY"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </article>

    <article>
      <div class="details">
        <h3>Brahm's Variations on Paganini's Theme</h3>
        <p>Brahms intended the work to be more than simply a set of theme and variations; each variation also has the characteristic of a study. He published it as Studies for Pianoforte: Variations on a Theme of Paganini.
          It is uncharacteristically showy for Brahms, even Lisztian. Indeed, the work was composed for the piano virtuoso Carl Tausig.
        </p>
      </div>
      <iframe src="https://www.youtube.com/embed/HjugQDGJBrc"
              frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </article>

  </div>
</template>

<script>
  export default {
    name: "index",
  }
</script>

<style scoped lang="scss">

  @import '../../assets/css/variables.scss';

  div {

    display: block;
    width: 60%;
    margin: 40px 0;

    article {
      display: grid;
      grid-template-columns: 1fr .8fr;
      grid-gap: 10px;
      padding: 12px;
      padding-left: 30px;
      background-color: #191919;
      margin-bottom: 50px;
      align-items: center;
      transition: .3s;

      &:hover{
        background-color: #121212;
        transform: translateX(-50px);
      }

      .details {
        color: white;
        width: 90%;

        h3 {
          font-size: 1.8em;
          text-align: center;
          margin-bottom: 15px;
        }

        p {
          width: 100%;
          color: #bcbcbc;
          font-size: .9em;
        }
      }
      iframe{
        width: 100%;
        min-height: 270px;

      }
    }
    @media (max-width: 1000px) {
      div{
        width: 100%;

        article{
          grid-auto-flow: row;
          grid-template-columns: 1fr;
          padding: 30px 12px;

          &:hover{
            transform: translateX(0);
          }

          .details{
            width: 100%;
          }
        }
      }

    }
  }

</style>
