<template>
    <div>
        <div  v-if="this.list.length==0" class="row">
            <div class="panel panei-default">
                <div class="panel-body">
                    <h2>购物车空空如也~</h2>
                </div>
            </div> 
            <router-link to="/home/goodslist"><mt-button type="danger" class="mtbtn">去逛逛</mt-button></router-link>
        </div> 
        <div v-else>
        <div class="shopcart" v-for="(item,i) in list" :key="item.id">
            <input type="checkbox" id="myCheck" ref="slrs"   @click="selectors(i)">
            <div class="goods"><img :src="item.src"></div>
            <div class="title">{{item.title}}</div>
            <div class="price">
                <span>￥{{item.newPrice*item.newNum}}</span>
                <div class="mui-numbox">
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click="reduce(i)">-</button>
					<input class="mui-input-numbox" type="number"  ref="n" />
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click="add(i)">+</button>
				</div>
            </div>
            <div class="clear"></div>
        </div> 
        <hr>
        <div class="balance">
            <input type="checkbox"  @click="selector" ref="slr">
            <span class="a">全选</span>
            <span class="b">总计:￥{{total}}</span>
            <mt-button type="danger" size="small" class="btn">去结算</mt-button>
        </div>  
        </div>  
    </div>
</template> 

<script>
import mui from '../../lib/mui/js/mui.min.js'
import Vue from 'vue'
export default {
    data(){
        return{
            list:[],
            fakelist:[],
            newTotal:0      
        }
    },
    created(){
        this.getLocalList()
    },
    mounted(){
        mui('.mui-numbox').numbox()
        this.getNum()
        this.$refs.slrs.forEach((item,i)=>{
            item.checked=true
        })
        this.$refs.slr.checked=true
    },
    methods:{
        getLocalList(){
            var getList=JSON.parse(localStorage.getItem('cmts')||'[]')
            this.list=getList
            this.list.forEach((item,i)=>{
            Vue.set(this.list[i],"newNum",1) 
            var a={price:item.newPrice,num:item.newNum} 
            this.fakelist.push(a)           
            })            
        },
        reduce(i){
            Vue.set(this.list[i],"newNum",this.$refs.n[i].value)
            this.fakelist[i].num=this.$refs.n[i].value
            if(this.$refs.n[i].value<1){
                this.list.splice(i,1)
                var localList=JSON.parse(localStorage.getItem('cmts')||'[]')
                localList.splice(i,1)
                localStorage.setItem('cmts',JSON.stringify(localList))
            }    
        },
        add(i){                              
           Vue.set(this.list[i],"newNum",this.$refs.n[i].value)
           this.fakelist[i].num=this.$refs.n[i].value
           this.a=this.a+parseInt(this.list[i].newNum)            
        }, 
        getNum(){
            this.$refs.n.forEach((item,i)=>{
                this.$refs.n[i].value=1
            })
        },
        selector(){
            if(event.currentTarget.checked){               
                    this.$refs.slrs.forEach((item,i)=>{
                        item.checked=true
                    }) 
                    this.fakelist.forEach((item,i)=>{
                        item.num=this.$refs.n[i].value
                    })           
            }else{              
                    this.$refs.slrs.forEach((item,i)=>{
                        item.checked=false
                    })  
                    this.fakelist.forEach((item,i)=>{
                        item.num=0
                    })
            }
        },
        selectors(i){
            if(!this.$refs.slrs[i].checked){
               this.fakelist[i].num=0 
            }else{
                this.fakelist[i].num=this.$refs.n[i].value
            }
            this.$refs.slrs.some((item,i)=>{                              
                if(!item.checked){
                    this.$refs.slr.checked=false
                    return true
                }else{
                    this.$refs.slr.checked=true
                }
            })
            
        }
    },
    computed:{
        total(){   
            this.newTotal=0        
            this.fakelist.forEach((item,i)=>{
                this.newTotal+=item.price*item.num    
            })
            return this.newTotal           
        }  
    }
}
</script>

<style scoped>
.shopcart{margin:10px}
.clear{clear:both}
.shopcart .goods{height:100px;width:100px;float:left}
.shopcart .goods img{width:100%}
.shopcart .title{font-size:14px}
.shopcart .price{margin-top:25px;margin-left:10px}
.shopcart .price span{color:red;font-weight: bold;font-size:22px}
.shopcart .price .mui-numbox{margin-left:45px}
#myCheck{float:left;top:42.5px}
.balance{height:33px}
.balance input{margin:0 10px}
.balance span{line-height:33px}
.balance .a{color:rgb(80, 76, 76)}
.balance .b{font-size:20px;margin:0 20px}
.balance .btn{float:right;margin-right:20px}
.panel .panel-body h2{color:red}
.row{margin-right:0}
.row .mtbtn{float:right}
</style> 



