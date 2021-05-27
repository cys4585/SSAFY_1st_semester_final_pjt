<template>
  <div>
    <nav class="navbar navbar-dark movie-searchbar">
      <div class="container-fluid">
        <button class="btn movie-search-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          상세검색
        </button>
      </div>
    </nav>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="movie-searchbar-background p-4">
        <ul class="container center movie-choice">
            <li>
              <input type="radio" name="sorter" id="base" value="base" @change="getFilteredSortedMovieList">
              <label for="base">기본순</label>
            </li>
            <li>
              <input type="radio" name="sorter" id="latest" value="latest" @change="getFilteredSortedMovieList">
              <label for="latest">최신순</label>
            </li>
            <li>
              <input type="radio" name="sorter" id="popularity" value="popularity" @change="getFilteredSortedMovieList">
              <label for="popularity">인기순</label>
            </li>
            <li>
              <input type="radio" name="sorter" id="rating" value="rating" @change="getFilteredSortedMovieList">
              <label for="rating">평점순</label>
            </li>
          </ul>
        <div class="container test">
          <ul class="movielist-genre">
            <!-- <h5 class="d-inline">장르</h5> -->
            <div>
              <li>
                <input type="checkbox" id="drama" value="Drama" @click="getFilteredSortedMovieList">
                <label for="drama">드라마</label>
              </li>
              <li>
                <input type="checkbox" id="action" value="Action" @click="getFilteredSortedMovieList">
                <label for="action">액션</label>
              </li>
              <li>
                <input type="checkbox" id="adventure" value="Adventure" @click="getFilteredSortedMovieList">
                <label for="adventure">어드벤처</label>
              </li>
              <li>
                <input type="checkbox" id="fantasy" value="Fantasy" @click="getFilteredSortedMovieList">
                <label for="fantasy">판타지</label>
              </li>
              <li>
                <input type="checkbox" id="animation" value="Animation" @click="getFilteredSortedMovieList">
                <label for="animation">애니메이션</label>
              </li>
              <li>
                <input type="checkbox" id="horror" value="Horror" @click="getFilteredSortedMovieList">
                <label for="horror">공포</label>
              </li>
              <li>
                <input type="checkbox" id="comedy" value="Comedy" @click="getFilteredSortedMovieList">
                <label for="comedy">코미디</label>
              </li>
              <li>
                <input type="checkbox" id="history" value="History" @click="getFilteredSortedMovieList">
                <label for="history">역사</label>
              </li>
              <li>
                <input type="checkbox" id="western" value="Western" @click="getFilteredSortedMovieList">
                <label for="western">서부</label>
              </li>
              <li>
                <input type="checkbox" id="thriller" value="Thriller" @click="getFilteredSortedMovieList">
                <label for="thriller">스릴러</label>
              </li>
              <li>
                <input type="checkbox" id="crime" value="Crime" @click="getFilteredSortedMovieList">
                <label for="crime">범죄</label>
              </li>
              <li>
                <input type="checkbox" id="documentary" value="Documentary" @click="getFilteredSortedMovieList">
                <label for="documentary">다큐멘터리</label>
              </li>
              <li>
                <input type="checkbox" id="science-fiction" value="Science Fiction" @click="getFilteredSortedMovieList">
                <label for="science-fiction">SF</label>
              </li>
              <li>
                <input type="checkbox" id="mystery" value="Mystery" @click="getFilteredSortedMovieList">
                <label for="mystery">미스터리</label>
              </li>
              <li>
                <input type="checkbox" id="music" value="Music" @click="getFilteredSortedMovieList">
                <label for="music">음악</label>
              </li>
              <li>
                <input type="checkbox" id="romance" value="Romance" @click="getFilteredSortedMovieList">
                <label for="romance">로맨스</label>
              </li>
              <li>
                <input type="checkbox" id="family" value="Family" @click="getFilteredSortedMovieList">
                <label for="family">가족</label>
              </li>
              <li>
                <input type="checkbox" id="war" value="War" @click="getFilteredSortedMovieList">
                <label for="war">전쟁</label>
              </li>
              <li>
                <input type="checkbox" id="tv-movie" value="TV Movie" @click="getFilteredSortedMovieList">
                <label for="tv-movie">TV 영화</label>
              </li>
            </div>
          </ul>
        </div>
    </div>
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

export default {
  name: 'MovieList',
  components: {
    MovieCard,
  },
  data: function () {
    return {
      filters: {
        genres: [],
        sorter: null,
      },
      pageNum: 1,
    }
  },
  computed: {
    movies: function () {
      return this.$store.state.movies
    },
  },
  methods: {
    getFilteredSortedMovieList: function (event) {
      if (event.target.type === 'checkbox') {
        if (event.target.checked) {
          this.filters.genres.push(event.target.value)
        } else {
          const idx = this.filters.genres.findIndex(genre => genre === event.target.value)
          this.filters.genres.splice(idx, 1)
        }
        if (this.filters.genres.length === 0) {
          location.reload()
        }
      } else if (event.target.type === 'radio') {
          if (event.target.value === 'base') {
            location.reload()
          }
          this.filters.sorter = event.target.value
      }
      this.$store.dispatch('getFilteredSortedMovieListFromServer', this.filters)
    },
    getMovies: function () {
      this.$store.dispatch('getMoviesFromServer', this.pageNum)
      this.pageNum += 1
    },
    checkBottom: function () {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement
      if (parseInt(scrollHeight - scrollTop) === clientHeight) {
        this.getMovies()
      }
    }
  },
  created: function () {
    this.getMovies()
    window.addEventListener('scroll', this.checkBottom)

  },
}
history.scrollRestoration = "manual"
</script>
<style>
.movie-searchbar {
  background-color: black
}
.movie-search-button {
  margin-top: 20px;
  margin-left: 50px;
  margin-bottom: 20px;
  color: aliceblue;
  border-color: blueviolet;
}
.movie-searchbar-background {
  background-color: black;
}
.movie-choice {
  padding-bottom: 30px;
}
.center {
  margin: auto;
}
.movielist-genre li {
  display: inline-block;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
  margin-right: 0.5rem;
}
.test li {
  width: 200px;
}
</style>