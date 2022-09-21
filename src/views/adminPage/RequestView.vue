<template>
  <div class="container">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">ФИО</th>
          <th scope="col">Организация</th>
          <th scope="col">E-mail</th>
          <th scope="col">Телефон</th>
          <th scope="col">Тип прибора</th>
          <th scope="col">Комментарий</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item of list">
          <td>{{ item.fio }}</td>
          <td>{{ item.org }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.type }}</td>
          <td>{{ item.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'RequestView',
  data() {
    return {
      list: []
    }
  },
  mounted() {
    fetch('http://localhost:8081/request')
      .then(res => res.json())
      .then(json => this.list = json)
  }
}
</script>

<style scoped>

</style>