<template>
    <section class="post">
      <h2>16th of April, 2019</h2>

      <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.
        I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.
        <br/><br/>
        I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary...
        <br/><br/>
        I throw myself down among the tall grass by the trickling stream
        <br/><br/>
      </p>

      <h4>Interested? <span>Read More!</span></h4>
    </section>
</template>

<script>
   export default {
      name: "Post"
   }
</script>

<style scoped lang="scss">

  .post{
    padding: 50px 30px 0 80px;

    h2{
      text-align: center;
      font-size: 2.5em;
      margin-bottom: 18px;
      font-weight: 700;
    }

    p{
      font-size: 0.95em;
      font-weight: 400;
      color: #47494d;
    }

    h4{
      text-align: right;
      padding-top: 20px;
      padding-right: 80px;

      span{
        color: #266dff;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 800px) {
    .post{
      padding: 70px 0;

      h2{
        font-size: 2em;
      }

      p{
        font-size: 0.88em;
      }

      h4{
        text-align: center;
        padding: 20px 0;
      }
    }
  }

</style>
