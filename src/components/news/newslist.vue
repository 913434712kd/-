<template>
    <div class="new">
        <ul class="mui-table-view" v-for="item in list" :key="item.url">
			<li class="mui-table-view-cell mui-media">
				<a :href="item.url">
					<img class="mui-media-object mui-pull-left" :src="item.thumbnail_pic_s02">
					<div class="mui-media-body">
						<div class="title-size">{{item.title}}</div>	
						<p class='mui-ellipsis'><span>作者：{{item.author_name}}</span><span>发布时间：{{item.date}}</span></p>
					</div>
				</a>
			</li>
		</ul>
		
    </div>
</template>

<script>
import{Toast} from "mint-ui"

export default {
    data(){
		return {
			list:[]
		}
	},
	created(){
		this.getData()
	},
	methods:{
		getData(){
			this.$http.get('/toutiao/index?type=top&key=bafd6d88347b3d1c20ea28f1784cf220').then(function(res){
				console.log(res)
				if(res.status===200&&res.body.result.stat==1){
					this.list=res.body.result.data
				}else{
					Toast("获取新闻列表失败")
				}
			})
		}
	}
}
</script>

<style>
.new .mui-table-view span{font-size:10px}
.new .mui-table-view span:nth-child(1){float:left}
.new .mui-table-view span:nth-child(2){float:right}
.new .mui-table-view .title-size{font-size:16px}

</style>
