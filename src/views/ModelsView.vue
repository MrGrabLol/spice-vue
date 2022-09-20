<template>
    <div class="mainpage">
        <ModelsCatalog />
    </div>
</template>

<script>
    import ModelsCatalog from '@/components/ModelsCatalog.vue'

    export default {
        name: 'Models',
        components: {
            ModelsCatalog
        }
    }
</script>

<style>
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

input {
    text-align: center;
    font-size: 18px;
    margin-top: 10px;
    border: 2px solid rgb(31, 147, 201);
    width: 600px;
    height: 50px;
    border-radius: 60px;
}
</style>