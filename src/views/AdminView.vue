<template>
    <div class="mainpage">
        <AdminLogin />
    </div>
</template>

<script>
import AdminLogin from '@/components/AdminLogin.vue'

export default {
    name: 'AdminView',
    components: {
        AdminLogin
    }
}

</script>

<style scoped>
.mainpage {
    /* border: 5px solid purple; */
    position: absolute;
    text-align: center;
    /* vertical-align: middle; */
    width: 100%;
    height: 100%;
    /* background-color: red; */
    /* float: right; */
    /* top: 50%; */
    /* left: 20%; */
    /* background-color: red;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; */
}
</style>