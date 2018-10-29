<template>
    <div class="message-board">
        <textarea name="" id="" cols="30" rows="10" placeholder="说点什么..." v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="getMessage">提交</mt-button>
        <div v-for="item in list" :key="item.id">
            <hr>
            <div class="user"><span>{{item.user}}</span></div>
            <div class="date"><span>{{item.date}}</span></div>
            <div class="content">{{item.message}}</div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            content:"",
            list:[]
        }
    },
    methods:{
        getMessage(){
            var msg={id:1,user:"匿名用户",date:new Date(),message:this.content}
            this.list.unshift(msg)
            this.content=""
        }
    }
}
</script>

<style>
.message-board .user span{font-size:18px}
.message-board .date span{color:#ccc;font-size:15px}
.message-board .user{margin:0 5px}
.message-board .date{margin:7px 5px}
.message-board .content{font-size:21px;margin:30px 5px}
</style>
