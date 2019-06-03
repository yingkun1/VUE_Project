<template>
    <li>
        <h2>{{data.title}}</h2>
        <p>{{data.content}}</p>
    </li>
</template>

<script>
export default {
    name:'VnoteItem',
    data(){
        return{

        }
    },
    computed:{
        getAllDatas(){
            return this.$store.state.allList;
        }
    }
}
</script>

<style>

</style>
