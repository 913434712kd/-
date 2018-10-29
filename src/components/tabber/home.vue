<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="https://ps.ssl.qhimg.com/sdmt/187_135_100/t019c67bd080e2cdd6a.jpg" ></mt-swipe-item>
            <mt-swipe-item><img src="https://ps.ssl.qhimg.com/sdmt/197_135_100/t011482214aa70f7484.jpg"></mt-swipe-item>
            <mt-swipe-item><img src="https://ps.ssl.qhimg.com/sdmt/178_135_100/t0116dfb12dec98c2db.jpg"></mt-swipe-item>
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">新闻资讯</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/imagelist">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">图片分享</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodslist">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">商品购买</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/message">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">留言反馈</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">联系我们</div></a></li>		            		        	   
		        </ul>
			

        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.mint-swipe{height:200px}
.mint-swipe-item:nth-child(1){background-color: red}
.mint-swipe-item:nth-child(2){background-color: blue}
.mint-swipe-item:nth-child(3){background-color: yellow}
.mui-grid-view.mui-grid-9{background-color: white}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{border:0}
.mint-swipe-item img{width:100%}
</style>

