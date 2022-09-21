<template>
  <form action="http://localhost:8081/model" method="POST" enctype="multipart/form-data">
    <input type="text" placeholder="Название" name="name" id="name">
    <br>
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
    <input type="file" placeholder="Тех. описание" name="techLink">
    <br>
    <input type="file" placeholder="Ссылка" name="link">
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
  }
}
</script>

<style scoped>

</style>