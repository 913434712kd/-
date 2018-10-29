<template>
    <div class="search">
        <mt-search v-model="value" :result="filterResult"></mt-search>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            list:['Apple','Banana','Orange','Durian','Lemon','Peach','Cherry',
            'Berry','Core','Fig','Haw','Melon','Plum','Pear','Peanut','Other']
        }
    },
    computed:{
        filterResult() {
            return this.list.filter(value => new RegExp(this.value, 'i').test(value));
        }
    }
}
</script>

<style scoped>
.search{height:50px}
</style>
