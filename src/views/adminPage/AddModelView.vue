<template>
  <form action="http://localhost:8081/model" target="_blank" method="POST" enctype="multipart/form-data" @submit.native="submit($event)">
    <label for="name">Название</label>
    <input type="text" name="name" id="name">
    <input type="text" placeholder="Производитель" name="manufacturer">
    <br>
    <input type="text" placeholder="max Iд" name="maxI">
    <br>
    <input type="text" placeholder="max Uд" name="maxU">
    <br>
    <input type="text" placeholder="max ПробU" name="maxProbU">
    <br>
    <input type="text" placeholder="max P" name="maxP">
    <br>
    <input type="text" placeholder="Корпус" name="box">
    <br>
    <input type="text" placeholder="Условия эксплуатации" name="useConditions">
    <br>
    <input type="file" placeholder="Тех. описание" accept="application/pdf" name="tech">
    <br>
    <input type="file" placeholder="Ссылка" accept="application/pdf"  name="link">
    <br>
    <button type="submit">Добавить</button>
  </form>
</template>

<script>

export default {
  name: "AddModelView",
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
  methods: {
    submit(event) {
      this.$router.replace({name: 'AdminModels'})
    }
  }
}
</script>

<style scoped>

</style>