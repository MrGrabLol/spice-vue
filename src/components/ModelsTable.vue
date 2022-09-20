<template>
    <table>
        <tr>
            <th>Название</th>
            <th>Производитель</th>
            <th>max Iд, А</th>
            <th>max Uд, В</th>
            <th>max Uпроб, В</th>
            <th>max P, Вт</th>
            <th>Корпус</th>
            <th>Условия Эксплуатации</th>
            <th>Тех. описание</th>
            <th>Ссылка</th>
        </tr>
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
        </tr>
    </table>
</template>

<script>
    export default {
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
.btn {
    width: 50px;
    height: 30px;
    background-color: rgb(8, 91, 199);
    color: white;
    border-radius: 5px;
}

.btn:hover {
    cursor: pointer;
    opacity: 0.8;
}

.btn:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

td {
    border: 2px solid rgb(31, 147, 201);
    padding: 10px;
}

th {
    padding: 10px;
    border: 2px solid rgb(31, 147, 201);
}

table {
    margin-top: 40px;
    border-collapse: collapse;
}
</style>