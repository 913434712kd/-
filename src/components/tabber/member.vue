<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						
                        <img class="mui-media-object mui-pull-left" src="http://p0.so.qhimgs1.com/bdr/_240_/t015dec792f4dec9d14.jpg">
						<div class="mui-media-body">
							周杰伦
							<p class='mui-ellipsis'>成为会员200天</p>
						</div>
					</a>
				</li>
                <li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="http://p0.so.qhimgs1.com/bdr/_240_/t015dec792f4dec9d14.jpg">
						<div class="mui-media-body">
							周杰伦
							<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
						</div>
					</a>
				</li>
			</ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[{id:1,src:"",name:"周杰伦"}]
        }
    }
}
</script>

<style scoped>
.mui-table-view .mui-media-body span{margin-top:20px}
</style>
