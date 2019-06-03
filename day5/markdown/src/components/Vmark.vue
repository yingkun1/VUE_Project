<template>
    <div class="wrap">
        <div class="mark">
            <textarea name="" id="" cols="100" rows="10" class="editor" v-model="markValue"></textarea>
            <div class="show" v-html="currentValue"></div>
        </div>
    </div>
</template>

<script>
import Marked from  'marked'
export default {
    name:'Vcontent',
    data(){
        return {
            markValue:''
        }
    },
    methods:{
    },
    coputed:{
        currentValue(){
            return Marked(this.markValue);
        }
    }
}
</script>

<style>
.t{
    width: 300px;
    height: 100px;
}
.mark{
    width: 800px;
    height: 400px;
    margin: 0 auto;
}

.editor, .show{
    float: left;
    width: 380px;
    height: 400px;
    border: 1px solid #666;
}
</style>
