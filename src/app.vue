<template>
    <div class="app-container">
        <mt-header fixed title="我的新项目"></mt-header>

		<transition><router-view></router-view></transition>
		
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-m" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-m" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-m" to="/shoppingcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" v-if="msg!=0">{{msg}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-m" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
    data(){
		return{
			msg:0
		}
	}
}
</script>

<style scoped>
.app-container{padding-top:40px;overflow-x:hidden;padding-bottom: 50px}
.v-enter{
	opacity:0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity:0;
	transform: translateX(-100%);
	position:absolute
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s ease
}
.mui-bar-tab .mui-tab-item-m {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-m .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-m .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>



