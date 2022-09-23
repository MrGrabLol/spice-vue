<template>
    <div class="container" id="app">
        <nav>
      <div class="menu">
        <a href="https://www.hse.ru/"><img class="avatar" src="../logo.jpg" alt="Высшая школа экономики" /></a>
        <h2>SPICEmodel</h2>
        <div class="mainmenu">
          <table>
            <tr>
              <td>
                <router-link style="text-decoration: none;" to="/home">Главная</router-link>
              </td>
            </tr>
            <tr>
              <td>
                <router-link style="text-decoration: none;" to="/about">Контакты</router-link>
              </td>
            </tr>
            <tr>
              <td>
                <router-link style="text-decoration: none;" to="/models">Модели</router-link>
              </td>
            </tr>
            <tr>
              <td>
                <router-link style="text-decoration: none;" to="/order">Заказать модель</router-link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </nav>
    <router-view />
    </div>
</template>

<style scoped>
    .mainmenu {
      text-align: left;
      font-size: 30px;
      text-decoration: none;
      margin-top: 80px;
      margin-left: 35px;
    }
    
    td {
      padding-bottom: 30px;
      /* border: 2px solid red; */
    }
    
    .menu h2 {
      padding-bottom: 50px;
      padding-top: 15px; /* ??? */
      font-weight: bold; /* ??? */
    }
    
    .menu {
      box-sizing: border-box;
      position: absolute;
      width: 20%;
      height: 100%;
      float: left;
      text-align: center;
      background: lightgray;
    }
    
    .avatar {
      box-sizing: border-box;
      margin-top: 25px;
      border-radius: 50%;
      position: relative;
      width: 50%;
    }
    
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      /* -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale; */
      color: #2c3e50;
      margin: -8px;
       margin-left: -12px; /* ??? */
      margin-bottom: 8px; /* ??? */
    }
    
    nav a {
      font-weight: bold;
      color: #000000;
    }
    
    nav a.router-link-exact-active {
      color: #05445e;
    }
    </style>