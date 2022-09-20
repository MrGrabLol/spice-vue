<template>
    <div class="">
        <div class="order" v-if="!sent">
            <h1>Заказать модель</h1>
            <form action="/">
                <div class="f">
                    <input type="text" id="name" placeholder="ФИО" v-model="fio" />
                </div>
                
                <div class="n">
                    <input type="text" id="company" placeholder="Наименование организации" v-model="company" />
                </div>
                <div class="add">
                    <div class="add-info">
                        <label for="email">E-mail:</label>
                        <br />
                        <input type="email" id="email" placeholder="user@example.com" v-model="emails" />
                    </div>
                    <div class="add-info">
                        <label for="number">Телефон:</label>
                        <br />
                        <input type="tel" id="number" placeholder="+12345678900" v-model="phone" />
                    </div>
                </div>
                <div class="type-info">
                    <label for="type">Тип прибора</label>
                    <br />
                    <input type="text" id="type" list="options" placeholder="Выберите тип прибора"
                        v-model="modeltype" />
                </div>
                <datalist id="options">
                    <option value="Диод"></option>
                    <option value="Транзистор"></option>
                    <option value="Трансформатор"></option>
                    <option value="Оп. усилитель"></option>
                </datalist>
                <label for="texta">Комментарий</label>
                <br />
                <textarea name="comments" id="texta" cols="20" rows="5" v-model="comment"></textarea>
            </form>
            <button type="submit" class="btn-order" @click="sendRequest">Заказать</button>
        </div>
        <OrderSuccessRequest v-if="sent" />
    </div>
</template>

<script>
import OrderSuccessRequest from './OrderSuccessRequest.vue'

export default {
    name: 'Order',
    data() {
        return {
            fio: '',
            company: '',
            emails: '',
            phone: '',
            modeltype: '',
            comment: '',
            sent: false
        }
    },
    components: {
        OrderSuccessRequest
    },
    methods: {
        sendLogs() {
            console.log(this.fio + this.company + this.emails + this.phone + this.modeltype + this.comment)
        },
        sendRequest() {
            const data = {
                fio: this.fio,
                org: this.company,
                email: this.emails,
                phone: this.phone,
                type: this.modeltype,
                comment: this.comment
            }
            fetch("http://localhost:8081/request", {
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => this.sent = true)
        }
    }
}



</script>

<style>
.f,
.n {
    padding-top: 15px;
}

.order form {
    border-radius: 10px;
    font-size: 20px;
    /* float: inherit; */
    /* margin-top: 375px; */
    /* border: 5px solid yellow; */
    background-color: lightgray;
    /* Fallback color */
    /* background-color: gray; */
    color: white;
    font-weight: bold;
    border: 2px solid rgb(31, 147, 201);
    position: relative;
    /* top: 50%; */
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */
    z-index: 2;
    width: 100%;
    /* padding: 20px; */
    text-align: center;
    display: inline-block;
}

.order {
    /* top: 50%; */
    /* border: 5px solid black; */
    text-align: center;
    display: inline-block;
    width: 70%;
    margin-top: 150px;
    /* vertical-align: middle; */
    /* box-sizing: content-box; */
    /* display: none; */
}

input {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    border: 2px solid rgb(31, 147, 201);
    width: 600px;
    height: 50px;
    border-radius: 60px;
}

.order label {
    color: black;
}

.order textarea {
    margin: 10px;
    border: 2px solid rgb(31, 147, 201);
    border-radius: 5px;
    width: 600px;
}

.btn-order {
    color: #42b983;
    position: relative;
    place-content: center;
    place-items: center;
    width: fit-content;
    border-radius: 99px;
    letter-spacing: 0.05em;
    border: 2px solid #42b983;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: 10px;
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    font-weight: 700;
    font-size: 18px;
    outline: none;
    background: #fff;
    transition: all 0.22s;
    margin-top: 15px;
}

.btn-order:hover {
    cursor: pointer;
    opacity: 0.8;
}

.btn-order:active {
    box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.add input {
    width: 296px;
    height: 50px;
}

.add {
    margin-top: 10px;
    /* border: 3px solid white; */
    text-align: center;
}

.add-info {
    display: inline-block;
    vertical-align: middle;
    padding-left: 2px;
    padding-right: 2px;
}

.type-info {
    padding: 2px;
    /* border: 2px solid blue; */
    margin: 5px;
    margin-bottom: 10px;
}
</style>