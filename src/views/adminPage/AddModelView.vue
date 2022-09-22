<template>
  <div class="container">
    <form action="http://localhost:8081/model" target="_blank" method="POST" enctype="multipart/form-data"
      @submit.native="submit($event)">
      <label for="name">Название</label>
      <br>
      <input type="text" name="name" id="name">
      <br>
      <label for="manufac">Производитель</label>
      <br>
      <input type="text" name="manufacturer" id="manufac">
      <br>
      <div class="numbers">
        <div class="num-info">
          <label for="p">max P</label>
          <br>
          <input type="text" name="maxP" id="p">
          <br>
          <label for="u">max Uд</label>
          <br>
          <input type="text" name="maxU" id="u">
        </div>
        <div class="num-info">
          <label for="i">max Iд</label>
          <br>
          <input type="text" name="maxI" id="i">
          <br>
          <label for="probu">max ПробU</label>
          <br>
          <input type="text" name="maxProbU" id="probu">
        </div>
      </div>
      <label for="box">Корпус</label>
      <br>
      <input type="text" name="box" id="box">
      <br>
      <label for="cond">Условия эксплуатации</label>
      <br>
      <input type="text" name="useConditions" id="cond">
      <br>
      <div class="numbers">
        <div class="file-info">
          <label for="tech">Тех. описание</label>
          <br>
          <input type="file" accept="application/pdf" name="tech" id="tech">
        </div>
        <div class="file-info">
          <label for="link">Ссылка</label>
          <br>
          <input type="file" accept="application/pdf" name="link" id="link">
        </div>
      </div>
      <button type="submit" class="btn btn-success">Добавить</button>
    </form>
  </div>
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
      this.$router.replace({ name: 'AdminModels' })
    }
  }
}
</script>

<style scoped>
.container {
  vertical-align: middle;
  align-items: center;
  justify-content: center;
}

form {
  font-size: 18px;
  width: 800px;
  height: fit-content;
  display: inline-block;
  text-align: center;
}

input {
  border-radius: 4px;
  border: 1px solid black;
  width: 600px;
  height: 40px;
}

.numbers {
  margin-top: 10px;
  /* border: 3px solid white; */
  text-align: center;
}

.num-info,
.file-info {
  display: inline-block;
  vertical-align: middle;
  padding-left: 2px;
  padding-right: 2px;
}

.file-info input {
  height: fit-content;
  width: fit-content;
  border: none;
}

.num-info input {
  width: 298px;
  height: 40px;
}
</style>