<template>
  <div class="container">
      <div class="form-group row">
        <label for="name">Название</label>
        <input type="text" class="form-control" id="name" v-model="name">
      </div>
      <div class="form-group row">
        <label for="manufacturer">Производитель</label>
        <input type="text" class="form-control" id="manufacturer" v-model="manufacturer">
      </div>
      <br>
      <div class="form-group row">
        <label for="maxI">maxI</label>
        <input type="number" step="0.000001" class="form-control" id="maxI" v-model="maxI">
      </div>
      <div class="form-group row">
        <label for="maxU">maxU</label>
        <input type="number" step="0.000001" class="form-control" id="maxU" v-model="maxU">
      </div>
      <br>
      <div class="form-group row">
        <label for="maxProbU">maxProbU</label>
        <input type="number" step="0.000001" class="form-control" id="maxProbU" v-model="maxProbU">
      </div>
      <div class="form-group row">
        <label for="maxP">maxP</label>
        <input type="number" step="0.000001" class="form-control" id="maxP" v-model="maxP">
      </div>
      <br>
      <div class="form-group row">
        <label for="box">Корпус</label>
        <input type="text" class="form-control" id="box" v-model="box">
      </div>
      <div class="form-group row">
        <label for="useConditions">Условия использования</label>
        <input type="text" class="form-control" id="useConditions" v-model="useConditions">
      </div>
      <br>
      <div class="form-group row">
        <label for="techLink">Тех. документация</label>
        <input type="url" class="form-control" id="techLink" v-model="techLink">
      </div>
      <div class="form-group row">
        <label for="link">Ссылка</label>
        <input type="url" class="form-control" id="link" v-model="link">
      </div>
      <br>
      <button type="submit" class="btn btn-primary" @click="edit">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: "EditModelView",
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      name: '',
      manufacturer: '',
      maxI: '',
      maxU: '',
      maxProbU: '',
      maxP: '',
      box: '',
      useConditions: '',
      techLink: '',
      link: ''
    }
  },
  mounted() {
    fetch("http://localhost:8081/model/" + this.id)
        .then(res => res.json())
        .then(json => {
          this.name = json.name
          this.manufacturer = json.manufacturer
          this.maxI = json.maxI
          this.maxU = json.maxU
          this.maxProbU = json.maxProbU
          this.maxP = json.maxP
          this.box = json.box
          this.useConditions = json.useConditions
          this.techLink = json.techLink
          this.link = json.link
        })
  },
  methods: {
    edit() {
      let body = {
        name: this.name,
        manufacturer: this.manufacturer,
        maxI: this.maxI,
        maxU: this.maxU,
        maxProbU: this.maxProbU,
        maxP: this.maxP,
        box: this.box,
        useConditions: this.useConditions,
        techLink: this.techLink,
        link: this.link
      }
      fetch("http://localhost:8081/model/" + this.id, {
        method: "POST",
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then(() => this.$router.back())
    }
  }
}
</script>



<style scoped>
.container {
  text-align: center;
  vertical-align: middle;
}

input {
  width: 400px;
}

.form-group {
  display: inline-block;
  margin-left: 4px;
  margin-right: 4px;
}
</style>