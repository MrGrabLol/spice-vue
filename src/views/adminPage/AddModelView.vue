<template>
  <div class="container">
    <label for="name">Название</label>
    <br>
    <input type="text" name="name" id="name" v-model="name">
    <br>
    <label for="manufac">Производитель</label>
    <br>
    <input type="text" name="manufacturer" id="manufac" v-model="manufacturer">
    <br>
    <div class="numbers">
      <div class="num-info">
        <label for="p">max P</label>
        <br>
        <input type="text" name="maxP" id="p" v-model="maxP">
        <br>
        <label for="u">max Uд</label>
        <br>
        <input type="text" name="maxU" id="u" v-model="maxU">
      </div>
      <div class="num-info">
        <label for="i">max Iд</label>
        <br>
        <input type="text" name="maxI" id="i" v-model="maxI">
        <br>
        <label for="probu">max ПробU</label>
        <br>
        <input type="text" name="maxProbU" id="probu" v-model="maxProbU">
      </div>
    </div>
    <label for="box">Корпус</label>
    <br>
    <input type="text" name="box" id="box" v-model="box">
    <br>
    <label for="cond">Условия эксплуатации</label>
    <br>
    <input type="text" name="useConditions" id="cond" v-model="useConditions">
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
    <button type="submit" class="btn btn-success" :disabled="disabled" @click="submit">Добавить</button>
  </div>
</template>

<script>

export default {
  name: "AddModelView",
  data() {
    return {
      disabled: false,
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
    submit() {
      this.disabled = true
      const input = document.querySelector('input[id="tech"]');
      const input2 = document.querySelector('input[id="link"]');
      const data = new FormData();
      console.log(input.files)
      console.log(input2.files)
      data.append('tech', input.files[0])
      data.append('link', input2.files[0])
      data.append('name', this.name)
      data.append('manufacturer', this.manufacturer)
      data.append('maxI', this.maxI)
      data.append('maxU', this.maxU)
      data.append('maxProbU', this.maxProbU)
      data.append('maxP', this.maxP)
      data.append('box', this.box)
      data.append('useConditions', this.useConditions)
      fetch('http://localhost:8081/model', {
        method: 'POST',
        body: data
      })
      new Promise(resolve => setTimeout(resolve, 1000))
          .then(() => this.$router.back())
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