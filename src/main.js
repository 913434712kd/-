import Vue from 'vue'
import app from './app.vue'
import {Header,Swipe,SwipeItem,Button} from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
Vue.component(Header.name,Header)
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem)
Vue.component(Button.name,Button)
import VueResource from 'vue-resource'
Vue.use(VueResource)



var vm=new Vue({
    el:"#app",
    render:function(c){
        return c(app)
    },
    router
})