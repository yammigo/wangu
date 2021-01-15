 <template>
	<div class="index">
		<!-- banner广告 -->
		<div class="bannerWrap" v-if='showBanner'>
			<div class="banner" v-if="video">
				<div class="text">
					<div class="tit clear">
						<h4 v-if='language'>{{bannerEn.ModuleName}}</h4>
						<h4 v-else>{{bannerCn.ModuleName}}</h4>
						<span v-if="language"></span>
						<span class="line" v-else></span>
						<div class="tips" v-if='language' style="display:block;">
							<p style="width:100%;">{{bannerEn.ModuleNamePlus}}</p>
						</div>
						<div class="tips" v-else>
							<p style="width: 200px;">{{bannerCn.ModuleNamePlus}}</p>
						</div>
					</div>
					<div class="en">
						<p v-if='language'>{{bannerEn.ModuleDesc}}</p>
						<p v-else>{{bannerCn.ModuleDesc}}</p>
					</div>
				</div>
				<div class="bg">
				<!-- true是没有声音，false是有声音 -->
					<video autoplay="true" loop :poster="bannerCn.base_url+'public/'+poster" ref='video'>
						<source :src="bannerUrl+'public/'+videoBg" type="video/mp4">
					</video>
				</div>
				<div class="next" @click="nextPage">
					<i class="iconfont icon-asmkticon0163" :class="{ 'nobg' : webType }"></i>
				</div>
				<span class="music" @click='turnMusic' ref='music'></span>
			</div>
			<div class="bannerLoop" v-else>
				<!-- <swiper :options="bannerOption" ref="bannerOption" class="clear">
					<swiper-slide class="item" :key='banner' v-for="item in bannerLoop">
					
						<div class="bg" :style="{backgroundImage:'url(\''+ bannerUrl + 'public/' +item.SlideImage+'\')'}"></div>
						<div class="txt">
							<div class="tit clear">
								<h4>{{ item.SlideTitle }}</h4>
								<span v-if="language"></span>
							
								<div class="tips" v-if='language' style="display:block;">
									<p style="width:100%;">{{item.SlideTitlePlus}}</p>
								</div>
								<div class="tips" v-else>
									<p style="width: 200px;">{{item.SlideTitlePlus}}</p>
								</div>
							</div>
							<div class="en">
								<p>{{ item.SlideIntro }}</p>
							</div>
						</div>
					</swiper-slide>
					<div class="swiper-button-prev btn prev" slot="button-prev"></div>
	      	<div class="swiper-button-next btn next" slot="button-next"></div>
				</swiper> -->
			</div>
		</div>
		<!-- <loading v-if="!showBanner"></loading> -->
		<!-- 解决方案 -->
		<div class="part solution" v-if="showSol&&showSolBn">
			<div class="title" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }">
				<p>{{solutionBnCn.ModuleName}}</p>
				<span class="line"></span>
				<p class="desc">{{solutionBnCn.ModuleNamePlus}}</p>
			</div>
			<div class="cont" :class="{ active : scroll >= baseFont * ( 30 - 5 ) }" ref="slideBox">
				<swiper :options="solutionOption" ref="solutionSwiper" class="clear">
					<swiper-slide class="item" v-for="(item,index) in solution" :key='solution'>
						<nuxt-link :to="{path: 'solutionDetail/'+item.PlanId}" v-if='index % 2'>
							<div class="txt">
								<i class="icon iconfont" :class='item.PlanIcon'></i>
								<p class="tit">{{ item.PlanTitle }}</p>
								<p v-html="item.PlanTitlePlus"></p>
							</div>
							<div class="img clear">
								<a href="javascript:"  :style="{backgroundImage:'url(\''+bannerUrl+'public/'+item.PlanThumb+'\')'}"></a>
								<span class="arrow"></span>
								<div class="shadow">
									<span class="icon"></span>
								</div>
							</div>

						</nuxt-link>
						<nuxt-link :to="{path: 'solutionDetail/'+item.PlanId}" v-else>
							<div class="img clear">
								<a href="javascript:"  :style="{backgroundImage:'url(\''+bannerUrl+'public/'+item.PlanThumb+'\')'}"></a>
								<span class="arrow"></span>
								<div class="shadow">
									<span class="icon"></span>
								</div>
							</div>
							<div class="txt">
								<i class="icon iconfont" :class='item.PlanIcon'></i>
								<p class="tit">{{ item.PlanTitle }}</p>
								<p v-html="item.PlanTitlePlus"></p>
							</div>
							<div class="shadow">
							</div>
						</nuxt-link>
					</swiper-slide>
					<div class="swiper-button-prev btn prev" slot="button-prev"></div>
        	<div class="swiper-button-next btn next" slot="button-next"></div>
				</swiper>
				<div class="more">
					<nuxt-link to="/solution" v-if="language">MORE</nuxt-link>
					<nuxt-link to="/solution" v-else>查看更多</nuxt-link>
				</div>
			</div>
		</div>
		<loading v-if="!showSol&&!showSolBn&&showBanner"></loading>
		<!-- 产品与服务 -->
		<div class="part product" v-if="showPro&&showProBn">
			<div class="title" :class="{ active : scroll >= baseFont * ( 66 - 5 ) }">
				<p>{{proBnCn.ModuleName}}</p>
				<span class="line"></span>
				<p class="desc">{{proBnCn.ModuleNamePlus}}</p>
			</div>
			<div class="cont">
				<div class="tp">
					<div class="item clear" v-for="(item,index) in product" v-if="index<2">
						<nuxt-link :to="{path: 'productDetail/'+item.ProductId}" class="clear">
							<div class="img">
								<img :src="bannerUrl+'public/'+item.ProductThumb">
							</div>
							<div class="text" :class="{ active : scroll >= baseFont * ( 90 - 5 ) }">
								<span class="line"></span>
								<p class="tit">{{item.ProductTitle}}</p>
								<p v-html="item.ProductTitlePlus"></p>
							</div>
						</nuxt-link>
					</div>
				</div>
				<div class="btm clear" v-if="product.length>2">
					<div class="item" v-for="(item,index) in product" v-if="index<5&&index>=2">
						<nuxt-link :to="{path: 'productDetail/'+item.ProductId}" class="clear">
							<i class="iconfont" :class="item.ProductIcon"></i>
							<div class="txt">
								<p class="tit">{{item.ProductTitle}}</p>
								<span class="line"></span>
								<p v-html="item.ProductTitlePlus"></p>
							</div>
						</nuxt-link>
					</div>
					<div class="item">
						<nuxt-link to="/product" class="clear">
							<i class="iconfont icon-beijingtiaochaicon"></i>
							<p class="more" v-if='language'>More</p>
							<p class="more" v-else>查看更多</p>
						</nuxt-link>
					</div>
				</div>
			</div>
		</div>
		<!-- 新闻中心 -->
		<loading v-if="showSol&&showSolBn&&!showNews&&!showNewsBn"></loading>
		<div class="part news" v-if="showNews&&showNewsBn">
			<div class="title" :class="{ active : scroll >= baseFont * (180 - 5 ) }">
				<p>{{newsBnCn.ModuleName}}</p>
				<span class="line"></span>
				<p class="desc">{{newsBnCn.ModuleNamePlus}}</p>
			</div>
			<div class="cont"  :class="{ active : scroll >= baseFont * (200 - 5 ) }">
				<div class="wrap clear">
					<!-- <swiper :options="swiperOption" ref="newsSwiper" class="clear">
						<swiper-slide class="item" v-for="(item,index) in news" v-show="index<3" :key='news'>
							<div class="img">
								<nuxt-link :to="{path : 'newsDetail/'+item.NewsId}" :style="{backgroundImage:'url(\''+item.ThumbPicture+'\')'}"></nuxt-link>
							</div>
							<div class="text clear">
								<div class="tit">
									<span class="line"></span>
									<nuxt-link :to="{path : 'newsDetail/'+item.NewsId}">{{ item.NewsTitle }}</nuxt-link>
								</div>
								<p v-html="item.NewsContentShort"></p>
								<nuxt-link v-if="language" :to="{ path: 'newsDetail/'+item.NewsId}" class="detail">Detail<span class="icon"></span></nuxt-link>
								<nuxt-link v-else :to="{ path: 'newsDetail/'+item.NewsId}" class="detail">查看详情<span class="icon"></span></nuxt-link>
							</div>
						</swiper-slide>
						<div class="swiper-button-prev btn prev" slot="button-prev"></div>
        		<div class="swiper-button-next btn next" slot="button-next"></div>
					</swiper> -->
				</div>
				<div class="more">
					<nuxt-link to="/news" v-if="language">MORE</nuxt-link>
					<nuxt-link to="/news" v-else>查看更多</nuxt-link>
				</div>
			</div>
		</div>
		<!-- 我们的客户 -->
		<div class="part client clear">
			<div class="ad" :class="{ active : scroll >= baseFont * (230 - 5 ) }" :style="{backgroundImage:'url(\''+bannerUrl+'public/'+clientBg+'\')'}">
				<div class="msg">
					<!-- <span></span>
					<p>我们的客户<br>在这些行业，我们有领先的解决方案与实施经验<br>您可直接借鉴众多世界500强，国内外大中型企业，以及各行业的成功实践案例，<br> 助力企业发展，实现HR管理战略的提升。</p> -->
				</div>
			</div>
			<div class="tel">
				<i class="iconfont icon-dianhua"></i>
				<div class="tips">
					<span v-if="language">Customer Service Hotline:</span>
					<span v-else>客户服务热线：</span> 
					<span v-if="phone">{{ phone }}</span>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
// async asyncData({params, $axios}){
//             let [answer] = await Promise.all([
//                 $axios.get("/userpage/answer_list/"+params.name)
//             ]);
//             return {
//                 answerData: answer.data.data,
//             }
//         }
</script>
<script type="text/javascript">
	export default{
		asyncData({$axios}){
		
			$axios.get("http://www.vgtech.com.cn/adminsys/public/json/index_body_en.json?"+(+new Date())).then(res=>{
				// console.log(res.data)
			})
			
		},
		name:"home",
		data() {
			return {
				imgs:[],
        // head: {},
        scroll: '',
        itemWidth: '',
        poster:'',
        next: 0,
        news: {},
        solution: {},
        product:{},
        newsBnCn:{},
        solutionBnCn:{},
        proBnCn:{},
        bannerCn:{},
        bannerEn:{},
        showSol:true,
        showSolBn:true,
        showNews:true,
        showNewsBn:true,
        showPro:true,
        showProBn:true,
        showBanner:false,
        dark:false,
        plus:[],
        video:true,
        bannerUrl:"/",
        language:"",
        videoBg:'',
        clientBg:'',
        base_url:"/",
        swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          autoplay: false,
          setWrapperSize :true,
          autoHeight: true,
          paginationClickable :true,
          observeParents:true,
          slidesPerView: "auto",
          onlyExternal : true,
          slidesPerView: 3,
          nextButton: '.news .swiper-button-next',
          prevButton: '.news .swiper-button-prev',
          breakpoints: {
						767: {
					    slidesPerView: 1,
					    onlyExternal : false,
			    	},
          }
        },
        solutionOption: {
          // 所有配置均为可选（同Swiper配置）
          autoplay: false,
          setWrapperSize :true,
          autoHeight: true,
          paginationClickable :true,
          observeParents:true,
          slidesPerView: "auto",
          onlyExternal : true,
          slidesPerView: 4,
          nextButton: '.solution .swiper-button-next',
          prevButton: '.solution .swiper-button-prev',
          speed: 1000,
          breakpoints: {
						768: {
					    slidesPerView: 2,
					    onlyExternal : false,
			    	},
			    	1024: {
					    slidesPerView: 3,
					    onlyExternal : false,
			    	},
          }
        },
        bannerOption:{
        	// 所有配置均为可选（同Swiper配置）
          autoplay: false,
          loop:true,
          setWrapperSize :true,
          autoHeight: true,
          paginationClickable :true,
          observeParents:true,
          slidesPerView: "auto",
          onlyExternal : true,
          slidesPerView: 1,
          nextButton: '.bannerLoop .swiper-button-next',
          prevButton: '.bannerLoop .swiper-button-prev',
          speed: 1000
        },
        phone: null,
        bannerLoop:{}
      };
		},
		created() {
			// this.getData();
			// this.initial();
			// this.getBannerDate();
			// this.getBannerLoop();
			// this.getSolutionDate();
			// this.getProDate();
			// this.getNewsDate();
			// this.getHotline();
			
    },
    computed: {
			webType() {
				// if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
				// 		return 1;
				// 	} else {
				// 		return 0;
				// 	}
			},
			baseFont() {
				
				// return parseInt($('html').css('font-size'));
			},
			cacl() {
				// this.itemWidth = $('div.index div.solution.part div.cont div.slideBox div.bd').width() * 0.25;
			},
			swiper() {
		    //    return this.$refs.newsSwiper.swiper,this.$refs.solutionSwiper.swiper;
			}
    },
    methods: {
    	nextPage() {
    		var oTop= $('div.banner').height() - $('div.header').height();
    		$('body,html').animate({
    			scrollTop : oTop},
    			800);
    		$('div.part.solution>div.title').addClass('active').siblings().addClass('active');
    	},
    	menu() {
    		this.scroll = document.body.scrollTop || document.documentElement.scrollTop;
    		if(this.scroll>800){
    		}
    	},
    	nextSolution() {
    		let len = $(this.$refs.solutionSwiper).find('.item').length - 5;
    		let oWidth = $(this.$refs.solutionSwiper).width() / 4;
    		let oLeft = parseInt($(this.$refs.solutionSwiper).find('.list').css('left'));
    		if( oWidth * len  >= Math.abs(parseInt($(this.$refs.slideBox).find('.list').css('left'))) ){
    			$(this.$refs.slideBox).find('.list').stop().animate({
    				'left': oLeft - oWidth + 'px'},
    			600);
    		} else {
    			$(this.$refs.slideBox).find('.list').stop().animate({
    				'left': '0px'},
    			600);
    		}
    	},
			prevSolution() {
				let len = $(this.$refs.slideBox).find('.item').length - 5;
	    		let oWidth = $(this.$refs.slideBox).find('.bd').width() / 4;
	    		let oLeft = parseInt($(this.$refs.slideBox).find('.list').css('left'));
	    		if( parseInt($(this.$refs.slideBox).find('.list').css('left')) < 0 ){
	    			$(this.$refs.slideBox).find('.list').stop().animate({
	    				'left': oLeft + oWidth + 'px'},
	    			600);
	    		} else {
	    			$(this.$refs.slideBox).find('.list').stop().animate({
	    				'left': '0px'},
	    			600);
	    		}
			},
			initial() {
					
					if($(window).width() >= 768){
						//设置banner的高度
						$('div.index div.banner').height($('div.index div.banner').width() * 0.5);
						$('div.index div.bannerLoop').height($('div.index div.bannerLoop').width() * 0.5);
						//设置解决方案的高度
						$(this.$refs.slideBox).find('.swiper-container').height($(this.$refs.slideBox).find('.swiper-container').width() * 0.4375);
						//产品与服务图片高度设置
						$('div.index div.part.product div.cont div.tp div.item a div.img').height($('div.index div.part.product div.cont div.tp div.item a div.img').width() * 0.8);
						//设置背调服务高度设置
						$('div.index div.part.product div.cont div.btm').height($('div.index div.part.product div.cont div.btm').width() * 0.1354);
						//新闻图片高度设置
						$('div.index div.part.news div.cont div.wrap div.item div.img').height($('div.index div.part.news div.cont div.wrap div.item div.img').width() * 0.703);
						//我们的客户图片高度设置
						$('div.index div.part.client div.ad').height($('div.index div.part.client div.ad').width() * 0.34375);
					}else{
						//设置banner的高度
						$('div.index div.banner').height($('div.index div.banner').width() * 0.875);
						$('div.index div.bannerLoop').height($('div.index div.bannerLoop').width() * 0.875);
						//设置解决方案的高度
						$(this.$refs.slideBox).find('.swiper-container').height($(this.$refs.slideBox).find('.swiper-container').width() * 0.875);
						//产品与服务图片高度设置
						$('div.index div.part.product div.cont div.tp div.item a div.img').height($('div.index div.part.product div.cont div.tp div.item a div.img').width() * 0.87);
						//设置北调服务高度设置
						$('div.index div.part.product div.cont div.btm').height($('div.index div.part.product div.cont div.btm').width() * 0.34375);
						//新闻图片高度设置
						$('div.index div.part.news div.cont div.wrap div.item div.img').height($('div.index div.part.news div.cont div.wrap div.item div.img').width() * 0.517);
						//我们的客户图片高度设置
						$('div.index div.part.client div.ad').height($('div.index div.part.client div.ad').width() * 0.703125);
					}
					//设置解决方案各个部分的宽度
					$(this.$refs.slideBox).find('.item').width($(this.$refs.slideBox).find('.bd').width() / 4);
			},
			rerender() {
				this.initial();
			},
			getNewsDate(){
			
			},
			//产品数据接口
			getProDate(){
		
			},
			//解决方案数据接口
			getSolutionDate(){
			
			},
			//banner数据接口
			getBannerDate(){
				
			},
			getBannerLoop(){

			},
			getHotline(){
			
			},
			getData(){
				for(let i=1;i<14;i++){
					if(i<10){
						this.imgs.push('./static/img/news/news0'+i+'.jpg');
					}else{
						this.imgs.push('./static/img/news/news'+i+'.jpg');
					}
				}
				let that=this;
				//获取banner数据设置
				this.showBanner=false;
				this.$emit('isdark');
				//解决方案设置
				this.showSol=false;
				this.showSolBn=false;
				//产品与服务数据设置
				this.showPro=false;
				this.showProBn=false;
				//新闻数据设置
				this.showNews=false;
				this.showNewsBn=false;
				if(localStorage['lang'] == 0){
					this.$http.get(baseUrl+'public/json/index_body.json?time='+Date.parse(new Date())).then((response) => {
						//console.log(Date.parse(new Date()))
						let data=response.body;
						that.bannerUrl=data.base_url;
						//获取baner数据
						if(parseInt(data.head.IndexShowTypeId)==1){
							//获取baner中文数据设置
							that.video=true;
							that.bannerCn=data.head.cn;
							that.videoBg=data.head.cn.BannerImage;
							that.poster=data.head.cn.CoverImage;
							//获取banner英文数据
							that.bannerEn=data.head.en;
							that.$emit('isdark');
						}else{
							that.video=false;
							that.bannerLoop=data.head.slide;
						}
						that.showBanner=true;
						
						
						//获取解决方案数据
							//解决方案标题
							that.solutionBnCn=data.plan_intro;
							that.showSolBn=true;
							//解决方案各个模块
							that.solution=data.plan;
							/*console.log(typeof(that.solution[1].PlanTitlePlus));*/
			        /*for(let i=0,len=that.solution.length;i<len;i++){
			        	if(that.solution[i].PlanTitlePlus.indexof('\n')!=-1){
			        		that.solution[i].PlanTitlePlus = that.solution[i].PlanTitlePlus.replace(/\n/,"<br>");
			        	}
			          
			        }*/
			        that.showSol=true;
						//获取产品与服务数据
							//产品与服务标题
							that.proBnCn=data.product_intro;
							that.showProBn=true;
							//产品与服务列表
							that.product=data.product;
							that.showPro=true;
						//获取新闻数据
							//获取新闻标题
							that.newsBnCn=data.news_intro;
							that.showNewsBn=true;
							//获取新闻列表
							that.news=data.news;
							$(that.news).each(function(){
								if(this.ThumbPicture==null || this.ThumbPicture==''){
									let eq=parseInt(Math.random()*13);
									this.ThumbPicture=that.imgs[eq];
								}else{
									if(this.ThumbPicture.indexOf('http')==-1){
										this.ThumbPicture=that.base_url+'public/'+this.ThumbPicture;
									}
								}
							});
							that.showNews=true;
						//热线上面的图片
						that.clientBg=data.BannerBottom;
						//热线
						that.phone=data.company.Tel;
					});
				}else{
					this.$http.get(baseUrl+'public/json/index_body_en.json?time='+Date.parse(new Date())).then((response) => {
						let data=response.body;
						that.bannerUrl=data.base_url;
						//获取baner数据
						if(parseInt(data.head.IndexShowTypeId)==1){
							//获取baner中文数据设置
							that.video=true;
							that.bannerCn=data.head.cn;
							that.videoBg=data.head.cn.BannerImage;
							that.poster=data.head.cn.CoverImage;
							//获取banner英文数据
							that.bannerEn=data.head.en;
							that.$emit('isdark');
						}else{
							that.video=false;
							that.bannerLoop=data.head.slide;
						}
						that.showBanner=true;
						
						
						//获取解决方案数据
							//解决方案标题
							that.solutionBnCn=data.plan_intro;
							that.showSolBn=true;
							//解决方案各个模块
							that.solution=data.plan;
							/*console.log(typeof(that.solution[1].PlanTitlePlus));*/
			        /*for(let i=0,len=that.solution.length;i<len;i++){
			        	if(that.solution[i].PlanTitlePlus.indexof('\n')!=-1){
			        		that.solution[i].PlanTitlePlus = that.solution[i].PlanTitlePlus.replace(/\n/,"<br>");
			        	}
			          
			        }*/
			        that.showSol=true;
						//获取产品与服务数据
							//产品与服务标题
							that.proBnCn=data.product_intro;
							that.showProBn=true;
							//产品与服务列表
							that.product=data.product;
							that.showPro=true;
						//获取新闻数据
							//获取新闻标题
							that.newsBnCn=data.news_intro;
							that.showNewsBn=true;
							//获取新闻列表
							that.news=data.news;
							$(that.news).each(function(){
								if(this.ThumbPicture==null || this.ThumbPicture==''){
									let eq=parseInt(Math.random()*13);
									this.ThumbPicture=that.imgs[eq];
								}else{
									if(this.ThumbPicture.indexOf('http')==-1){
										this.ThumbPicture=that.base_url+'public/'+this.ThumbPicture;
									}
								}
							});
							that.showNews=true;
						//热线上面的图片
						that.clientBg=data.BannerBottom;
						//热线
						that.phone=data.company.Tel;
					});
				}
				
			},
			banner(){

			},
			turnMusic(){
				if($(this.$refs.music).hasClass('active')){
					$(this.$refs.music).removeClass('active');
					this.$refs.video.muted=false;
				}else{
					$(this.$refs.music).addClass('active');
					this.$refs.video.muted=true;
				}
			}
    },
    mounted() { 
    	window.addEventListener('scroll', this.menu);
		window.addEventListener('resize', this.rerender);
		

		//初始化布局
    	this.initial();
      //console.log($('head').html());
    },
    activated() {
        // if($('video')[0] && innerWidth>767) $('video')[0].play();
    },
	beforeCreate(){
			//将产品详情写入localStorage
				// localStorage['solu']=0;
				// localStorage['pro']=0;
				// localStorage['news']=0;
		}
	};
</script>
<style type="text/css">
	@import './index.css';
</style>
