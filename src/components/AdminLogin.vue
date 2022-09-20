<template>
  <div class="login">
    <div v-if="this.error" class="alert alert-danger" role="alert">
      Неправильный логин или пароль
    </div>
    <div class="row2 g-3 align-items-center">
      <div class="col-auto">
        <label for="inputLogin6" class="col-form-label">Логин</label>
      </div>
      <div class="col-auto">
        <input type="text" id="inputLogin6" class="form-control" aria-describedby="passwordHelpInline" v-model="login">
      </div>
      <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                    Must be 8-20 characters long.
                </span>
      </div>
    </div>
    <br>
    <div class="row2 g-3 align-items-center">
      <div class="col-auto">
        <label for="inputPassword6" class="col-form-label">Пароль</label>
      </div>
      <div class="col-auto">
        <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"
               v-model="password">
      </div>
      <div class="col-auto">
                <span id="passwordHelpInline" class="form-text">
                    Must be 8-20 characters long.
                </span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" @click="sendLogin">Войти</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: '',
      password: '',
      error: false
    }
  },
  methods: {
    sendLogin() {
      const data = {
        login: this.login,
        password: this.password
      }
      fetch("http://localhost:8081/login", {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(res => {
        if (res.ok) {
          localStorage.logTime = new Date().getTime()
          this.$router.go(0)
        } else {
          throw new Error()
        }
      }).catch(() => this.error = true)
    }
  }
}
</script>

<style>
/* .mainpage {
    position: absolute;
    text-align: center;
    width: 100%;
    height: 100%;
} */

.login {
  display: inline-block;
  padding-top: 25rem;
}

.btn {
  margin-top: 20px;
}
</style>