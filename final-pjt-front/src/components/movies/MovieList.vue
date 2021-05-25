<template>
  <div class="center">
    <div> <!-- 상세 검색 -->
      <dl>
        <dt>장르</dt>
        <dd>
          <input type="checkbox" id="drama" value="Drama" @click="func">
          <label for="drama">드라마</label>
        </dd>
        <dd>
          <input type="checkbox" id="action" value="Action" @click="func">
          <label for="action">액션</label>
        </dd>
      </dl>
    </div>
    <section>
      <b-card-group row row-cols-2 row-cols-md-2 g-4>
        <MovieCard
          v-for="(movie, idx) in movies"
          :key="idx"
          :movie="movie"
        />
      </b-card-group>
    </section>
  </div>
</template>

<script>
import MovieCard from '@/components/movies/MovieCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'MovieList',
  components: {
    MovieCard,
  },
  data: function () {
    return {
      filters: {
        genres: [],
        voteAverage: null,
      },
    }
  },
  computed: {
    ...mapState(['movies']),
  },
  methods: {
    func: function (event) {
      if (event.target.checked) {
        this.filters.genres.push(event.target.value)
      } else {
        const idx = this.filters.genres.findIndex(genre => genre === event.target.value)
        this.filters.genres.splice(idx, 1)
      }
      // console.log(this.filters.genres)
      this.$store.dispatch('filterMovieList', this.filters)
    },
  },
}
</script>

<style>
.center {
  margin: auto;
}

</style>