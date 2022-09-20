<template>
  <div class="container">
    <table class="table table-bordered">
      <thead>
      <tr>
        <th scope="col">Название</th>
        <th scope="col">Производитель</th>
        <th scope="col">max Iд, А</th>
        <th scope="col">max Uд, В</th>
        <th scope="col">max Uпроб, В</th>
        <th scope="col">max P, Вт</th>
        <th scope="col">Корпус</th>
        <th scope="col">Условия Эксплуатации</th>
        <th scope="col">Тех. описание</th>
        <th scope="col">Ссылка</th>
        <th scope="col">     </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item of list">
        <td>{{ item.name }}</td>
        <td>{{ item.manufacturer }}</td>
        <td>{{ item.maxI }}</td>
        <td>{{ item.maxU }}</td>
        <td>{{ item.maxProbU }}</td>
        <td>{{ item.maxP }}</td>
        <td>{{ item.box }}</td>
        <td>{{ item.useConditions }}</td>
        <td>
          <a v-bind:href="item.techLink" target="_blank">
            <button class="btn">
              <i class="fa fa-download"></i>
            </button>
          </a>
        </td>
        <td>
          <a v-bind:href="item.link" target="_blank">
            <button class="btn">
              <i class="fa fa-download"></i>
            </button>
          </a>
        </td>
        <td>
          <router-link to="/"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ModelView",
  data() {
    return {
      list: []
    }
  },
  mounted() {
    fetch('http://localhost:8081/model')
        .then(res => res.json())
        .then(json => this.list = json)
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border: none;
  margin-bottom: 20px;
}

table thead th {
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
}

table thead tr th:first-child {
  border-radius: 8px 0 0 8px;
}

table thead tr th:last-child {
  border-radius: 0 8px 8px 0;
}

table tbody td {
  text-align: left;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  vertical-align: top;
}

table tbody tr:nth-child(even) {
  background: #f3f3f3;
}

table tbody tr td:first-child {
  border-radius: 8px 0 0 8px;
}

table tbody tr td:last-child {
  border-radius: 0 8px 8px 0;
}
</style>