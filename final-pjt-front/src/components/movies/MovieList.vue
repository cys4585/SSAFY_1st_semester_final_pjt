<template>
  <div class="center">
<div class="container">
  <div class="row row-cols-4">
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>





    <div>
      <h4>상세 검색</h4>
      <ul class="filter-sort">
        <h5>장르</h5>
        <li class="filter-sort">
          <input type="checkbox" id="drama" value="Drama" @click="filterSortMovieList">
          <label for="drama">드라마</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="action" value="Action" @click="filterSortMovieList">
          <label for="action">액션</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="adventure" value="Adventure" @click="filterSortMovieList">
          <label for="adventure">어드벤처</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="fantasy" value="Fantasy" @click="filterSortMovieList">
          <label for="fantasy">판타지</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="animation" value="Animation" @click="filterSortMovieList">
          <label for="animation">애니메이션</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="horror" value="Horror" @click="filterSortMovieList">
          <label for="horror">공포</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="comedy" value="Comedy" @click="filterSortMovieList">
          <label for="comedy">코미디</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="history" value="History" @click="filterSortMovieList">
          <label for="history">역사</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="western" value="Western" @click="filterSortMovieList">
          <label for="western">서부</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="thriller" value="Thriller" @click="filterSortMovieList">
          <label for="thriller">스릴러</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="crime" value="Crime" @click="filterSortMovieList">
          <label for="crime">범죄</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="documentary" value="Documentary" @click="filterSortMovieList">
          <label for="documentary">다큐멘터리</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="science-fiction" value="Science Fiction" @click="filterSortMovieList">
          <label for="science-fiction">SF</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="mystery" value="Mystery" @click="filterSortMovieList">
          <label for="mystery">미스터리</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="music" value="Music" @click="filterSortMovieList">
          <label for="music">음악</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="romance" value="Romance" @click="filterSortMovieList">
          <label for="romance">로맨스</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="family" value="Family" @click="filterSortMovieList">
          <label for="family">가족</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="war" value="War" @click="filterSortMovieList">
          <label for="war">전쟁</label>
        </li>
        <li class="filter-sort">
          <input type="checkbox" id="tv-movie" value="TV Movie" @click="filterSortMovieList">
          <label for="tv-movie">TV 영화</label>
        </li>
      </ul>
      <ul>
        <li class="filter-sort">
          <input type="radio" name="sorter" id="latest" value="latest" @change="filterSortMovieList">
          <label for="latest">최신순</label>
        </li>
        <li class="filter-sort">
          <input type="radio" name="sorter" id="popularity" value="popularity" @change="filterSortMovieList">
          <label for="popularity">인기순</label>
        </li>
        <li class="filter-sort">
          <input type="radio" name="sorter" id="rating" value="rating" @change="filterSortMovieList">
          <label for="rating">평점순</label>
        </li>
      </ul>
      <ul class="movielist-genre">
        <h5 class="d-inline">장르</h5>
        <div>
          <li>
            <input type="checkbox" id="drama" value="Drama" @click="filterSortMovieList">
            <label for="drama">드라마</label>
          </li>
          <li>
            <input type="checkbox" id="action" value="Action" @click="filterSortMovieList">
            <label for="action">액션</label>
          </li>
          <li>
            <input type="checkbox" id="adventure" value="Adventure" @click="filterSortMovieList">
            <label for="adventure">어드벤처</label>
          </li>
          <li>
            <input type="checkbox" id="fantasy" value="Fantasy" @click="filterSortMovieList">
            <label for="fantasy">판타지</label>
          </li>
          <li>
            <input type="checkbox" id="animation" value="Animation" @click="filterSortMovieList">
            <label for="animation">애니메이션</label>
          </li>
        </div>
        <div>
          <li>
            <input type="checkbox" id="horror" value="Horror" @click="filterSortMovieList">
            <label for="horror">공포</label>
          </li>
          <li>
            <input type="checkbox" id="comedy" value="Comedy" @click="filterSortMovieList">
            <label for="comedy">코미디</label>
          </li>
          <li>
            <input type="checkbox" id="history" value="History" @click="filterSortMovieList">
            <label for="history">역사</label>
          </li>
          <li>
            <input type="checkbox" id="western" value="Western" @click="filterSortMovieList">
            <label for="western">서부</label>
          </li>
          <li>
            <input type="checkbox" id="thriller" value="Thriller" @click="filterSortMovieList">
            <label for="thriller">스릴러</label>
          </li>
        </div>
        <div>
          <li>
            <input type="checkbox" id="crime" value="Crime" @click="filterSortMovieList">
            <label for="crime">범죄</label>
          </li>
          <li>
            <input type="checkbox" id="documentary" value="Documentary" @click="filterSortMovieList">
            <label for="documentary">다큐멘터리</label>
          </li>
          <li>
            <input type="checkbox" id="science-fiction" value="Science Fiction" @click="filterSortMovieList">
            <label for="science-fiction">SF</label>
          </li>
          <li>
            <input type="checkbox" id="mystery" value="Mystery" @click="filterSortMovieList">
            <label for="mystery">미스터리</label>
          </li>
          <li>
            <input type="checkbox" id="music" value="Music" @click="filterSortMovieList">
            <label for="music">음악</label>
          </li>
        </div>
        <div>
          <li>
            <input type="checkbox" id="romance" value="Romance" @click="filterSortMovieList">
            <label for="romance">로맨스</label>
          </li>
          <li>
            <input type="checkbox" id="family" value="Family" @click="filterSortMovieList">
            <label for="family">가족</label>
          </li>
          <li>
            <input type="checkbox" id="war" value="War" @click="filterSortMovieList">
            <label for="war">전쟁</label>
          </li>
          <li>
            <input type="checkbox" id="tv-movie" value="TV Movie" @click="filterSortMovieList">
            <label for="tv-movie">TV 영화</label>
          </li>
        </div>
      </ul>
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
        sorter: null,
      },
    }
  },
  computed: {
    ...mapState(['movies']),
  },
  methods: {
    filterSortMovieList: function (event) {
      if (event.target.type === 'checkbox') {
        if (event.target.checked) {
          this.filters.genres.push(event.target.value)
        } else {
          const idx = this.filters.genres.findIndex(genre => genre === event.target.value)
          this.filters.genres.splice(idx, 1)
        }
      } else if (event.target.type === 'radio') {
        this.filters.sorter = event.target.value
        // console.log(this.filters.sorter)
      }
      console.log(this.filters)
      this.$store.dispatch('getFilteredSortedMovieListFromServer', this.filters)
    },
  },
  created: function () {
    this.$store.dispatch('getMoviesFromServer')
  },
}
</script>

<style>
.center {
  margin: auto;
}

ul.filter-sort {
  display: inline-block;
  list-style: none;
}
li.filter-sort {
  display: inline-block;
  margin-right: 0.5rem;
}
</style>