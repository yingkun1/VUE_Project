<template>
    <ul>
        <VnoteItem v-for = "(item,index) in getAllDatas" :data = "item" :key="item.index" ></VnoteItem>
    </ul>
</template>

<script>
import VnodeItem from './VnoteItem'
export default {
    name:'VnoteList',
    data(){
        return{

        }
    },
    props:{

    },
    components:{
        VnoteItem,
    }
}
</script>

<style>

</style>
