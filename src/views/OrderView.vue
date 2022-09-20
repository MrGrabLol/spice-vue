<template>
    <div class="mainpage">
        <OrderForm />
    </div>
</template>

<script>
    import OrderForm from '@/components/OrderForm.vue'

    export default {
        name: 'Order',
        components: {
            OrderForm
        }
    }
</script>

<style scoped>
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
</style>