<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,i) in list" :key="i">
					<a href="javascript:;">
						
                        <img class="mui-media-object mui-pull-left" :src="item.src">
						<div class="mui-media-body">
							{{item.name}}
							<p class='mui-ellipsis'>成为会员200天</p>
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
			list:[{id:1,src:"http://p0.so.qhimgs1.com/bdr/_240_/t015dec792f4dec9d14.jpg",name:"周杰伦"},
			{id:2,src:"https://ps.ssl.qhimg.com/sdmt/225_186_100/t019908dfac12e2702c.webp",name:"王力宏"},
			{id:3,src:"https://ps.ssl.qhimg.com/sdmt/223_186_100/t01b01b6278188a5196.webp",name:"林俊杰"},
			{id:4,src:"https://ps.ssl.qhimg.com/sdmt/192_186_100/t010c682036c0e21789.webp",name:"陶喆"},
			{id:5,src:"https://p.ssl.qhmsg.com/dmsmfl/120_120_/t01edc43cb9711c05ed.webp?size=2800x1867",name:"詹姆斯"},
			{id:6,src:"https://p.ssl.qhimg.com/dmfd/100_100_80/t01227ed0446ee3f66e.png",name:"科比"},
			{id:7,src:"https://p.ssl.qhimg.com/dmfd/100_100_80/t012e9260c37b86ac08.png?size=260x190",name:"杜兰特"},
			{id:8,src:"https://p.ssl.qhimg.com/dmfd/100_100_80/t01731661d32ef5230d.png?size=260x190",name:"库里"},
			{id:9,src:"https://p.ssl.qhmsg.com/dmsmfl/120_120_/t012f1349374e1bbac9.webp?size=841x1200",name:"乔丹"},
			{id:10,src:"https://ps.ssl.qhimg.com/sdmt/142_186_100/t01196e3fe2aaee39d4.webp",name:"姚明"}]
        }
    }
}
</script>

<style scoped>
.mui-table-view .mui-media-body span{margin-top:20px}
</style>
