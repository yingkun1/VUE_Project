<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <!-- 笔记列表 -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">我的笔记列表</h3>
                    </div>

                    <div class="panel-body">
                        <VnodeShow></VnodeShow>
                    </div>
                </div>
            </div>

            <div class="col-md-9">
                <!-- markdown编辑器 -->
                <div class="panel panel-default">
                    <div class="panel-heading">
                        请输入文章标题:<input type="text">
                    </div>
                    <div class="panel-body">
                        <Vmark></Vmark>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import Vmark from './Vmark'
import VnodeShow from './VnodeShow'

export default {
    name:'Vnode',
    data(){
        return {
            noteLists:[
                {id:1,title:"今天很辛苦",content:"你是啥呢"},
                {id:2,title:"今天很辛苦2",content:"你是啥呢2"}
            ]
        }
    },
    components:{
        Vmark,
        VnodeShow,
    }
}
</script>

<style scoped>

</style>

