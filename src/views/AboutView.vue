<template>
  <div class="mainpage">
    <div class="about">
      <h1>Контакты</h1>
      <h4>Самбурский Лев Михайлович</h4>
      <p>Доцент:
        <a href="https://miem.hse.ru/">
          Московский институт электроники и математики им. А.Н. Тихонова
        </a> /
        <a href="https://miem.hse.ru/edu/ee/">Департамент электронной инженерии</a>
      </p>
      <table class="contacts">
        <tr>
          <th>Телефон: </th>
          <td>+7 (495) 772-95-90</td>
        </tr>
        <tr>
          <th>Адрес 1:</th>
          <td>Таллинская ул., д. 34, каб. 224</td>
        </tr>
        <tr>
          <th>Время работы:</th>
          <td>ПН -- ПТ :: 10:00 -- 19:00 :: ауд. 220|224</td>
        </tr>
        <tr>
          <th>Адрес 2:</th>
          <td>Таллинская ул., д. 34, каб. 220</td>
        </tr>
        <tr>
          <th>Время консультаций:</th>
          <td>ЧТ 13:00 -- 17:00, <a href="meet.miem.hse.ru/220">meet.miem.hse.ru/220</a></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* .mainpage h1 {
  margin-bottom: -250px;
  margin-top
} */

.mainpage {
  /* border: 5px solid purple; */
  position: absolute;
  text-align: center;
  /* vertical-align: middle; */
  width: 80%;
  height: 100%;
  /* background-color: red; */
  float: right;
  /* top: 50%; */
  left: 20%;
  /* background-color: red;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; */
}

.about h1 {
  margin-bottom: 55px;
}

.about {
  margin-top: 20rem;
  justify-content: center;
  text-align: center;
}

.contacts
th {
  float:initial;
}

.contacts td {
  padding-left: 10px;
  float: left;
}

table {
  display: inline-block;
}
</style>
