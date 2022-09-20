<template>
  <div class="mainpage">
    <AdminLogin v-if="!this.logged"/>
    <div class="container text-center" v-if="this.logged">
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Админ-панель</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <router-link class="nav-link"  style="text-decoration: none;" to="/admin-page/model">Модели</router-link>
              <router-link class="nav-link"  style="text-decoration: none;" to="/admin-page/request">Запросы</router-link>
            </div>
          </div>
        </div>
      </nav>
      <router-view/>
    </div>
  </div>

</template>

<script>
import AdminLogin from '@/components/AdminLogin.vue'
import AdminTable from '@/components/AdminTable.vue'

export default {
  name: 'AdminView',
  data() {
    return {
      logged: false
    }
  },
  mounted() {
    if (localStorage.getItem('logTime') !== null &&
        (Date.now() - localStorage.getItem('logTime')) < 7200000) {
      this.logged = true;
    }
  },
  components: {
    AdminLogin,
    AdminTable
  }
}

</script>

<style scoped>
.mainpage {
  /* border: 5px solid purple; */
  position: absolute;
  text-align: center;
  /* vertical-align: middle; */
  width: 100%;
  height: 100%;
  /* background-color: red; */
  /* float: right; */
  /* top: 50%; */
  /* left: 20%; */
  /* background-color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center; */
}
</style>