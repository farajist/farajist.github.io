<template>
  <div>
    <header>
      <div class="container text-center">
        <h1>About me</h1>
      </div>
    </header>
    <section>
      <div class="container medium">
        <div>
          <!--TODO: convert to .md-->
          <p>
            Hey ! I'm Hamza Faraji, currently a computer science research student with great passion about computers in
            general and ML in particular, I also have a great interest in OSS. I originally started my academic path as
            a software engineering student and switched later to CS (you know the difference right ?) partly out of
            curiosity to learn more, alongside the academic path I work as freelance programmer on client projects
            [examples], I have also made some side projects some of which made it to github as real-world projects.
          </p>
          <p>
            Most of tech skills I used in the projects I worked on were self-taught, I try to log some of the things I
            learn in this blog from tech-savvy tricks about a certain tool to common useful development patterns. I also
            try to keep the blog updated with various articles about my interests and  my day to day learning.
          </p>
          <p>
            Practice makes perfect, that's why I always tried to learn by building stuff (small size projects, proofs of concept,
            snippets ...etc). A few projects i'm proud of :
          </p>
          <ul>
            <li />
            <li />
            <li />
          </ul>
          <!--TODO: fill github projects-->
          <p>
            Well life is not just about computers though, I enjoy listening to music, playing strategy games, reading
            mangas and watching anime occasionally,
          </p>
          <h3>Miscellaneous</h3>
          <!--TODO: fill misc-->
          <h3>Quotes</h3>
          <!--TODO: fill quotes-->
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator'
@Component
export default class About extends Vue {}
</script>
