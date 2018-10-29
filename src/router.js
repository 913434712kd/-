import VueRouter from 'vue-router'
import home from './components/tabber/home.vue'
import member from './components/tabber/member.vue'
import shop from './components/tabber/shoppingcart.vue'
import search from './components/tabber/search.vue'
import newsList from './components/news/newslist.vue'
import message from './components/messageboard/message.vue'
import imagelist from './components/img/imagelist.vue'
import goodslist from './components/goods/goodslist.vue'

var router=new VueRouter({
    routes:[
        {path:'/home',component:home},
        {path:'/member',component:member},
        {path:'/shoppingcart',component:shop},
        {path:'/search',component:search},
        {path:'/home/newslist',component:newsList},
        {path:'/home/message',component:message},
        {path:'/home/imagelist',component:imagelist},
        {path:'/home/goodslist',component:goodslist}
    ],
    linkActiveClass:'mui-active'
})

export default router