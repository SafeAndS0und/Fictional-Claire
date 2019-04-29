<template>
  <div>

    <h1>Concerts & Recitals</h1>

    <section class="programmes">

      <article>
        <h3>Programme 1: 'Vocalise'</h3>
        <p class="description">
          Through a selection of works by Schubert and Rachmaninov. <br/>
          I explore the lyrical vocation of their compositions where melody takes the central part and inspired by human
          voice singing.
        </p>

        <div class="repertoire">
          <h2>Repertoire</h2>
          <ul>
            <h3>F.Schubert</h3>
            <li>Klavierstuck D.946 No. 1 and/or No.2</li>
            <li>Impromptu Op.90 No.3</li>
          </ul>

          <ul>
            <h3>Schubert/Liszt:</h3>
            <li>Erlkoning</li>
            <li>Auf dem wasser zu singen</li>
          </ul>

          <ul>
            <h3>S.Rachmaninov</h3>
            <li>Vocalise Op.34, No.14</li>
            <li>Preludes Op.23 No.2, No.4, No.5</li>
            <li>Zdes Horosho Op.21, No.7</li>
          </ul>
        </div>
      </article>


      <article>
        <h3>Programe 2: 'Appassionato'</h3>
        <p class="description">
          This program for general public is composed of masterpieces of Beethoven and Chopin. Written by Beethoven in 1805, the 'Appassionata' is one of his greatest sonatas for piano and one of the most difficult technically. <br/>
          It was a product of the same intensely visionary creative period as the "Eroica" symphony, "Kreutzer" violin sonata and Fidelio opera, and did just as much to revolutionise its genre.
        </p>

        <div class="repertoire">
          <h2>Repertoire</h2>
          <ul>
            <h3>Ludwig van Beethoven</h3>
            <li> Piano Sonata No.23 in F minor Op.57  'Appassionata'</li>
          </ul>

          <ul>
            <h3>F.Chopin</h3>
            <li>Ballade No.1 Op.23 </li>
            <li>Scherzo No.2 Op.31</li>
          </ul>

        </div>
      </article>

    </section>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style scoped lang="scss">

  @import '../../assets/css/variables';

  div {
    margin-top: 30px;
    width: 65%;

    h1 {
      text-align: right;
      background-color: $asideGrey;
      color: $blueen;
      font-size: 3em;
      padding-right: 10px;
    }

    .programmes {

      article {
        background-color: #0f0f0f;
        color: white;
        padding: 27px;
        border-bottom: 10px solid $asideGrey;

        h3 {
          font-size: 2em;
          font-weight: 900;
          margin-bottom: 6px;

        }
        p {
          color: #66686f;
          font-size: .95em;
        }
      }

      .repertoire {
        text-align: center;
        width: 100%;

        h2 {
          font-size: 2em;
          margin-bottom: 15px;
          font-weight: 400;
        }
        ul {
          margin: 10px 0;
          padding: 5px;
          background-color: #101112;

          h3 {
            font-size: 1.4em;
            font-weight: 400;
          }

          li {
            list-style: none;
            font-size: .95em;
            font-style: italic;
            padding: 3px 0;
            font-weight: 300;
          }
        }
      }
    }
  }

  @media (max-width: 1000px) {
    div {
      width: 100%;

      h1{
        text-align: center;
        font-size: 2.5em;
        padding: 10px 0;
      }
    }
  }

</style>
