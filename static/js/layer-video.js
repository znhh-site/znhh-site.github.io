$(function(){
	$("a.vediobox").click(function(e){
		e.preventDefault();

		vediobox.ele = this;
		vediobox.pic = $(this).attr('rel');
		vediobox.src = $(this).attr('href')
		vediobox.init();
	});

	var vediobox = {
		ele:'',
		width:650,
		height:480,
		pic:'',
		src:'',
		init:function(){
			var timestampId  = 'videoPlayer'+new Date().getTime()
			var el = document.createElement("div");
			el.style.display = "none";
			el.style.overflow = "hidden";
			var res2 = '<video id="'+ timestampId +'" class="video-js" controls autoplay width="'+this.width+'" height="'+this.height+'" poster="'+ this.pic+'" data-setup="{}">';
			res2 += '<source src="'+ this.src + '" type="video/mp4" />';
			res2 += '</video>';

			$(el).append(res2);
			$('body').append(el)

			layer.open({
			  type: 1,
			  title: false,
			  closeBtn: 1,
			  area: [this.width+'px',this.height+'px'],
			  skin: 'layui-layer-nobg', //没有背景色
			  shadeClose: true,
			  success:function(layero){
			  		console.log(layero)
			  		videojs(timestampId);
			  		setTimeout(function () {
                        $(layero).removeClass('layui-anim');
                    },5)
                  document.addEventListener("fullscreenchange", function(e) {

                      console.log("fullscreenchange", e);

                  });

                  document.addEventListener("mozfullscreenchange", function(e) {

                      console.log("mozfullscreenchange ", e);

                  });

                  document.addEventListener("webkitfullscreenchange", function(e) {

                      console.log("webkitfullscreenchange", e);

                  });

                  document.addEventListener("msfullscreenchange", function(e) {

                      console.log("msfullscreenchange", e);

                  });
			  },
			  end:function(){
			  	$(el).remove()
			  },
			  content: $(el)
			});
		}
	}

})