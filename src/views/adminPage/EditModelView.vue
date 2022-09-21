<template>
  <div class="container">
    <form :action="'http://localhost:8081/model/' + this.id" method="POST" enctype="multipart/form-data">
      <div class="form-group row">
        <label for="name">Название</label>
        <input type="text" class="form-control" id="name" v-model="this.name">
      </div>
      <div class="form-group row">
        <label for="manufacturer">Производитель</label>
        <input type="text" class="form-control" id="manufacturer" v-model="this.manufacturer">
      </div>
      <div class="form-group row">
        <label for="maxI">maxI</label>
        <input type="number" step="0.000001" class="form-control" id="maxI" v-model="this.maxI">
      </div>
      <div class="form-group row">
        <label for="maxU">maxU</label>
        <input type="number" step="0.000001" class="form-control" id="maxU" v-model="this.maxU">
      </div>
      <div class="form-group row">
        <label for="maxProbU">maxProbU</label>
        <input type="number" step="0.000001" class="form-control" id="maxProbU" v-model="this.maxProbU">
      </div>
      <div class="form-group row">
        <label for="maxP">maxP</label>
        <input type="number" step="0.000001" class="form-control" id="maxP" v-model="this.maxP">
      </div>
      <div class="form-group row">
        <label for="box">Корпус</label>
        <input type="text" class="form-control" id="box" v-model="this.box">
      </div>
      <div class="form-group row">
        <label for="useConditions">Условия использования</label>
        <input type="text" class="form-control" id="useConditions" v-model="this.useConditions">
      </div>
      <div class="form-group row">
        <label for="techLink">Тех. документация</label>
        <input type="url" class="form-control" id="techLink" v-model="this.techLink">
      </div>
      <div class="form-group row">
        <label for="link">Ссылка</label>
        <input type="url" class="form-control" id="link" v-model="this.link">
      </div>
      <button type="submit" class="btn btn-primary">Сохранить</button>
    </form>
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
  }
}
</script>

<style scoped>

</style>