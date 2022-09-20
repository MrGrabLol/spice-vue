<template>
    <div class="catalog">
        <h1>Схемотехнические модели</h1>
        <input type="search" id="find" placeholder="Введите название модели">
        <ModelsTable />
    </div>
</template>

<script>
import ModelsTable from '@/components/ModelsTable.vue'

export default {
    name: 'Catalog',
    components: {
        ModelsTable
    }
}
</script>

<style scoped>
.catalog {
    display: inline-block;
    /* display: none; */
}

.catalog h1 {
    padding-top: 12px;
    padding-bottom: 4px;
}

/* .catalog input {
    
} */
</style>