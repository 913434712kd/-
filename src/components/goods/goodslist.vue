<template>
    <div>
        <div class="container">
            <div class="goods" v-for="(item,i) in list" :key="i">
                <img :src="item.src">
                <p class="title">{{item.title}}</p>
                <div class="price">
                    <span>￥{{item.newPrice}}</span>
                    <span>￥{{item.oldPrice}}</span>
                </div>
                <div class="condition">
                    <span>热卖中</span>
                    <span>剩余{{item.residue}}件</span>
                </div>
                <div class="shopcart">
                    <span>点击加入购物车</span>
                    <span class="mui-icon-extra mui-icon-extra-cart" @click="getGoods(item.id)"></span>
                    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
                        <span class="mui-icon-extra mui-icon-extra-cart" v-show="flag"></span>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{id:1,title:"人本帆布鞋男低帮经典情侣布鞋秋季平底韩版学生板鞋休闲男鞋潮 黑色 40码",
            src:"https://img12.360buyimg.com/n7/jfs/t25702/85/1989826580/131350/dfb560d8/5bc06a58N0aa910fe.jpg",
            oldPrice:79,newPrice:59,residue:90},
            {id:2,title:"人本帆布鞋男鞋女鞋运动鞋学生韩版系带帆布鞋休闲低帮男鞋平底板鞋潮 黑色 41码",
            src:"https://img14.360buyimg.com/n7/jfs/t25747/295/2010419389/108479/6cd278c3/5bc06a5aNb3500920.jpg",
            oldPrice:80,newPrice:65,residue:110},
            {id:3,title:"HEYMOOR 新款休闲鞋反绒皮鞋男士牛皮鞋男子休闲板鞋男 HYX1520 蓝色 40",
            src:"https://img11.360buyimg.com/n7/jfs/t1915/315/659390176/282363/1586a06d/561f50e7N1f653dee.jpg",
            oldPrice:258,newPrice:198,residue:78},
            {id:4,title:"七匹狼帆布鞋男士休闲低帮青年板鞋91315-29 91315-29/宝蓝色 41",
            src:"https://img11.360buyimg.com/n7/jfs/t19609/72/1749804044/143839/b37b7d85/5ad5a42eN32e2902a.jpg",
            oldPrice:239,newPrice:189,residue:92},
            {id:5,title:"花花公子（PLAYBOY）四季透气休闲鞋时尚系带帆布男鞋拼接板鞋 深蓝 41",
            src:"https://img11.360buyimg.com/n7/jfs/t2878/360/3284104062/257771/82f46054/5788bc1bN9f2c1116.jpg",
            oldPrice:328,newPrice:278,residue:150},
            {id:6,title:"回力春夏季新款男女款帆布鞋透气小白鞋户外休闲旅游鞋学生板鞋 黑色 42",
            src:"https://img10.360buyimg.com/n7/jfs/t22549/204/1862616640/400709/a5a9ea73/5b6be55cNa15f5d81.jpg",
            oldPrice:99,newPrice:79,residue:120},
            {id:7,title:"北迈帆布鞋男士套脚乐福懒人透气男鞋 浅灰色 41",
            src:"https://img14.360buyimg.com/n7/jfs/t16099/116/1889432042/114660/4df028eb/5a6d62f8N1c12895a.jpg",
            oldPrice:159,newPrice:129,residue:130}
            ],
            flag:false
        }
    },
    methods:{
        getGoods(id){
            this.flag=!this.flag
            var newList={}
            this.list.some((item,i)=>{
                if(item.id===id){
                    newList=this.list.slice(i,i+1)[0]
                    return true
                }              
            })
            var locallist=JSON.parse(localStorage.getItem('cmts')||'[]')
            locallist.unshift(newList)
            localStorage.setItem('cmts',JSON.stringify(locallist))
        },
        beforeEnter(el){ 
            el.style.transform = 'translate(0, 0)'
        },
        enter(el,done){
            el.offsetWidth
            el.style.transform = 'translate(50px, 300px)'
            el.style.transition = 'all 1s linear'
            done()
        },
        afterEnter(el){
            this.flag = !this.flag
		}       
    }
}
</script>

<style scoped>
.container .goods{width:49%;float:left;border:1px solid #ccc;box-shadow:0 0 8px #ccc;margin:1.5px 1.5px;border-radius: 2%}
.container .goods img{width:100%}
.container .goods .title{color:black;font-size:12px;margin:5px}
.container .goods .price span:first-child{color:red;font-size:21px;font-weight:bold;margin-right:10px}
.container .goods .price span:last-child{text-decoration:line-through;color:#ccc}
.container .goods .condition{font-size:13px;margin:5px;overflow:hidden}
.container .goods .condition span:first-child{float:left}
.container .goods .condition span:last-child{float:right;color:#ccc}
.container .goods .shopcart{margin:5px}
.container .goods .shopcart span:first-child{font-size:10px;color:red}
.container .goods .shopcart span:nth-child(2){color:red;margin-left:10px}
</style>

