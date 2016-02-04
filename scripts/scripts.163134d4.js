"use strict";angular.module("amApp",["ngAnimate","ngCookies","ngResource","ngSanitize","ngTouch","ui.materialize","ui.router","com.2fdevs.videogular","com.2fdevs.videogular.plugins.controls","com.2fdevs.videogular.plugins.overlayplay","com.2fdevs.videogular.plugins.poster","com.2fdevs.videogular.plugins.buffering"]),angular.module("amApp").run(["$rootScope","$state","$stateParams",function(a,b,c){a.$state=b,a.$stateParams=c}]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/app/home"),a.state("app",{"abstract":!0,url:"/app",templateUrl:"views/layout.html",controller:["$window",function(a){a.document.title="Tuyen-ng"}]}).state("app.home",{url:"/home",templateUrl:"views/home.html",controller:["$window","$scope",function(a,b){a.document.title="Tuyen-ng",b.showAnimation=function(){b.checkShow=!0}}]}).state("app.about",{url:"/about",templateUrl:"views/about.html",controller:["$window",function(a){a.document.title="Tuyen-ng"}]}).state("app.contact",{url:"/contact",templateUrl:"views/contact.html",controller:["$window",function(a){a.document.title="Tuyen-ng"}]}).state("app.help",{url:"/help",templateUrl:"views/help.html",controller:["$window",function(a){a.document.title="Bạn bè của tôi"}]}).state("kimanh",{"abstract":!0,url:"/kimanh",templateUrl:"views/kimanh/kimanh.html",controller:["$window",function(a){a.document.title="Kim Anh page"}]}).state("kimanh.tongquan",{url:"/tongquan",templateUrl:"views/kimanh/tongquan.html"}).state("kimanh.congviec",{url:"/congviec",templateUrl:"views/kimanh/congviec.html"}).state("kimanh.banthan",{url:"/banthan",templateUrl:"views/kimanh/banthan.html"}).state("kimanh.banbe",{url:"/banbe",templateUrl:"views/kimanh/banbe.html"}).state("kimanh.albumanh",{url:"/albumanh",templateUrl:"views/kimanh/albumanh.html"})}]),angular.module("amApp").controller("musicCtrl",["$sce","$scope",function(a,b){b.API=null,b.active=0,b.audios=[{title:"Happy new years",artist:"ABBA",poster:"Nhac cua tui",sources:[{src:a.trustAsResourceUrl("http://aredir.nixcdn.com/f24a90e002ef1ffc8fabc1b8c127a47b/56b2a4c3/Unv_Audio5/HappyNewYear-ABBA_3rkqc.mp3"),type:"audio/mpeg"}]},{title:"Auld Lang Syne",artist:"Mariah Carey",poster:"Nhac cua tui",sources:[{src:a.trustAsResourceUrl("http://aredir.nixcdn.com/cba5d57653ed6c508cf8b50228e5ea5e/56b2a4c3/NhacCuaTui228/AuldLangSyne-MariahCarey_3mk5c.mp3"),type:"audio/mpeg"}]},{title:"Ngày Xuân Long Phụng Sum Vầy",artist:"Từ Minh Hy, Khởi My, Minh Qui, Dương Thái Long",poster:"Nhac cua tui",sources:[{src:a.trustAsResourceUrl("http://aredir.nixcdn.com/761fb1d0ff06d422180af56d3859f59e/56b2abca/NhacCuaTui799/NgayXuanLongPhungXumVay-TuMinhHy-_4gk62.mp3"),type:"audio/mpeg"}]},{title:"Con Bướm Xuân",artist:"Hồ Quang Hiếu",poster:"Nhac cua tui",sources:[{src:a.trustAsResourceUrl("http://aredir.nixcdn.com/77e51772ee5a67245f5653663ce67c3a/56b2abca/NhacCuaTui882/ConBuomXuan-HoQuangHieu-2577880.mp3"),type:"audio/mpeg"}]},{title:"Thương Quá Việt Nam Ơi",artist:"Quang Linh",poster:"zing mp3",sources:[{src:a.trustAsResourceUrl("http://mp3.zing.vn/xml/load-song/ZSUyRjYyJTJGZTYyNWUzNGMzMTUwMWIxYjg2MmEyYTE3NGVkYTFmZTUubXAzJTdDMQ=="),type:"audio/mpeg"}]},{title:"Chúc vợ ngủ ngon",artist:"Vũ Duy Khánh",poster:"zing mp3",sources:[{src:a.trustAsResourceUrl("http://mp3.zing.vn/xml/load-song/MjAxNSUyRjEyJTJGMzElMkZlJTJGMSUyRmUxNTcxNTAwOTg4NDg5MzllYTE2ZmZhYzFjMGJjYTQxLm1wMyU3QzEz"),type:"audio/mpeg"}]}],b.config={sources:b.audios[0].sources,title:b.audios[0].title,repeat:!1,shuffle:!0,autoPlay:!0,theme:{url:"bower_components/videogular-themes-default/videogular.css"}},b.onPlayerReady=function(a){b.API=a,("play"==b.API.currentState||b.isCompleted)&&b.API.play(),b.isCompleted=!1},b.onComplete=function(){b.isCompleted=!0,b.config.shuffle?b.active=b.getRandom(b.active):b.active++,b.active>=b.audios.length?(b.active=0,b.config.repeat&&b.setActive(b.active)):b.setActive(b.active)},b.getRandom=function(a){var c=Math.floor(Math.random()*b.audios.length);return c-a||(c=b.getRandom(a)),c},b.play=function(a){b.isCompleted=!0,"next"==a?b.active++:b.active--,b.active>=b.audios.length&&(b.active=0),-1==b.active&&(b.active=b.audios.length-1),b.setActive(b.active)},b.setActive=function(a){b.API.stop(),b.config.sources=b.audios[a].sources,b.config.title=b.audios[a].title},b.toggleRepeat=function(){b.config.repeat=!b.config.repeat,b.isCompleted&&b.API.play()},b.toggleShuffle=function(){b.config.shuffle=!b.config.shuffle,console.log(b.API.currentState),b.isCompleted&&b.API.play()}}]),angular.module("amApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="card"> <div class="card-image waves-effect waves-block waves-light"> <img class="activator" src="images/WP_20150118_001.3a7152ed.jpg"> </div> <div class="card-content"> <span class="card-title activator grey-text text-darken-4">Mộc Châu<i class="material-icons right">Đọc thêm</i></span> <p><a href="#">Link liên kết</a></p> </div> <div class="card-reveal"> <span class="card-title grey-text text-darken-4">Mộc Châu<i class="material-icons right" close>Đóng</i></span> <p>Buổi sáng ngày 18/01/2015 ở Mộc Châu</p> </div> </div>'),a.put("views/blocks/footer.html",'<footer class="page-footer light-blue darken-4"> <div class="container"> <div class="row"> <div class="col l3 s12"> <h5 class="white-text">Tác giả <i class="mdi-social-person"></i></h5> <p class="waves-effect waves-light grey-text text-lighten-4">Tuyen-ng</p> </div> <div class="col l7 offset-l2 s12"> <h5 class="waves-effect waves-light white-text">Student of <i class="mdi-social-school"></i></h5> <ul> <li class="waves-effect waves-light"><a class="while-text bold">Hanoi University of Science and Technology</a></li> <li class="waves-effect waves-light"><a class="while-text bold">School of Information Communication and Technology </a></li> <li class="waves-effect waves-light"><a class="while-text bold"> Data Communications and Computer Networks </a></li> <li class="waves-effect waves-light"><a class="while-text bold">Hight Performance Computing Center </a></li> </ul> </div> </div> </div> <div class="footer-copyright"> <div class="container"> © 2015 Copyright by Tuyenng <a class="grey-text text-lighten-4 right waves-effect waves-light">giatuyentiensinh <i class="mdi-social-whatshot"></i></a> </div> </div> </footer>'),a.put("views/blocks/header.html",'<header class="navbar-fixed"> <nav> <div class="nav-wrapper light-blue darken-4"> <a ui-sref="app.home" class="brand-logo waves-effect waves-light m-l"><span class="light">ng</span> - <span class="flow-text">Tuyến</span></a> <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="mdi-navigation-menu"></i></a> <ul class="right hide-on-med-and-down"> <li ui-sref-active="active" class="light-blue darken-4 waves-effect waves-light" tooltipped data-position="bottom" data-delay="50" data-tooltip="Trang chủ"><a ui-sref="app.home"><i class="mdi-hardware-security"></i></a></li> <li ui-sref-active="active" class="light-blue darken-3 waves-effect waves-light" tooltipped data-position="bottom" data-delay="50" data-tooltip="Trang cá nhân"><a ui-sref="app.about"><i class="mdi-notification-adb"></i></a></li> <li ui-sref-active="active" class="light-blue darken-2 waves-effect waves-light" tooltipped data-position="bottom" data-delay="50" data-tooltip="Liên hệ"><a ui-sref="app.contact"><i class="mdi-maps-beenhere"></i></a></li> <li ui-sref-active="active" class="light-blue darken-1 waves-effect waves-light"><a ui-sref="app.help"><i class="mdi-social-people"></i></a></li> </ul> <ul class="side-nav" id="mobile-demo"> <li ui-sref-active="active"><a class="waves-effect waves-blue" ui-sref="app.home">Trang chủ</a></li> <li ui-sref-active="active"><a class="waves-effect waves-blue" ui-sref="app.about">Trang cá nhân</a></li> <li ui-sref-active="active"><a class="waves-effect waves-blue" ui-sref="app.contact">Liên hệ</a></li> <li ui-sref-active="active"><a class="waves-effect waves-blue" ui-sref="app.help">Thông tin</a></li> </ul> </div> </nav> </header> <script type="text/javascript">// Initialize collapse button\n	$(\'.button-collapse\').sideNav({\n		menuWidth: 300, // Default is 240\n		edge: \'right\', // Choose the horizontal origin\n		closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor\n	});</script>'),a.put("views/blocks/menu.html",'<aside> <ul id="slide-out" class="side-nav fixed"> <li><a href="#!">Home</a></li> <li><a href="#!">About</a></li> <li><a href="#!">About me</a></li> <li><a href="#!">About us</a></li> </ul> <a href="#" data-activates="slide-out" class="button-collapse"><i class="mdi-navigation-menu"></i>Menu</a> </aside>'),a.put("views/blocks/music.html",'<videogular ng-controller="musicCtrl" vg-player-ready="onPlayerReady" vg-complete="onComplete" vg-theme="config.theme.url" vg-autoplay="config.autoPlay"> <vg-audio vg-src="config.sources"></vg-audio> <vg-controls class="row"> <div class="col-md-3"> <vg-button class="col-sm-4" ng-show="audios.length-1" ng-click="play(\'prev\')"><i class="mdi-av-skip-previous small"></i></vg-button> <vg-play-pause-button class="col-sm-4"></vg-play-pause-button> <vg-button class="col-sm-4" ng-show="audios.length-1" ng-click="play(\'next\')"><i class="mdi-av-skip-next"></i></vg-button> </div> <div class="col-md-5"> <vg-timedisplay class="col-md-2">{{ currentTime | date:\'mm:ss\' }}</vg-timedisplay> <vg-scrubbar class="col-md-8"> <vg-title>{{ config.title }}</vg-title> <vg-scrubbarcurrenttime></vg-scrubbarcurrenttime> </vg-scrubbar> <vg-timedisplay class="col-md-2">{{ timeLeft | date:\'mm:ss\' }}</vg-timedisplay> </div> <div class="col-md-3"> <vg-button class="col-md-6" ng-click="toggleShuffle()" title="Shuffle"><i class="mdi-av-shuffle" ng-class="{\'text-danger\':config.shuffle}"></i></vg-button> <vg-button class="col-md-6" ng-click="toggleRepeat()" title="Repeat"><i class="mdi-av-replay" ng-class="{\'text-danger\':config.repeat}"></i></vg-button> </div> <vg-volume class="col-md-1"> <vg-mutebutton></vg-mutebutton> </vg-volume> </vg-controls> </videogular>'),a.put("views/contact.html",'<div class="row"> <div class="col s12 m3"> <div class="card-panel green darken-1"> <span class="white-text">Play Framework</span> </div> </div> <div class="col s12 m3"> <div class="card-panel deep-orange accent-4"> <span class="white-text">AngularJs</span> </div> </div> <div class="col s12 m3"> <div class="card-panel blue lighten-2"> <span class="red-text text-darken-2">Materialize</span> </div> </div> <div class="col s12 m3"> <div class="card-panel teal"> <span class="white-text">RestFul web service</span> </div> </div> </div> <div class="row"> <div class="col s12 m12"> <div class="card medium blue-grey darken-1"> <div class="card-content white-text"> <span class="card-title">Material Desgin</span> <p>Phong cách thiết kế Material Design nhắm đến những đường nét đơn giản, sử dụng nhiều mảng màu đậm nổi bật, các đối tượng đồ họa trong giao diện dường như: “trôi nổi” lên. Ngoài ra, nó còn bao gồm cả những hiệu ứng chuyển động tự nhiên khi các nút, menu hiện diện trên màn hình. Tất cả đều nhằm mang lại cho người dùng trải nghiệm mới mẻ hơn, thú vị hơn và gần giống đời thực hơn.</p> </div> <div class="card-action"> <a href>Đọc thêm</a> </div> </div> </div> </div>'),a.put("views/help.html",'<div class="row blue-grey lighten-4"> <div class="col s12 m6"> <div class="card small cyan darken-4"> <img src="images/image-tuananh.fad59557.jpg" class="img-profile circle responsive-img right" tooltipped data-position="bottom" data-delay="50" data-tooltip="Sở thích qwerty"> <div class="card-content white-text"> <span class="card-title"><span class="hide-on-small-only">Bùi </span>Tuấn Ánh</span> <p>Mặt babe rất <span class="cyan-text text-lighten-4">cute</span></p> </div> <div class="card-action"> <a href onclick="Materialize.toast(\'Chưa cập nhật\', 4000)">Chi tiết</a> </div> </div> </div> <div class="col s12 m6"> <div class="card small green darken-4"> <img src="images/image-dinhphuc.9b7d4a4e.jpg" class="img-profile circle responsive-img right" tooltipped data-position="bottom" data-delay="50" data-tooltip="Sở thích bắn thằn lằn với thạch sùng"> <div class="card-content white-text"> <span class="card-title"><span class="hide-on-small-only">Nguyễn </span>Đình Phúc</span> <p>Thiên sứ <span class="green-text text-lighten-4">thằn lằn</span></p> </div> <div class="card-action"> <a href onclick="Materialize.toast(\'Chưa cập nhật\', 4000)">Chi tiết</a> </div> </div> </div> <div class="col s12 m6 offset-m3"> <div class="card small indigo draken-4"> <img src="images/image-tuyen.2836d79e.jpg" class="img-profile circle responsive-img right" tooltipped data-position="bottom" data-delay="50" data-tooltip="Sở thích research take more money"> <div class="card-content white-text"> <span class="card-title"><span class="hide-on-small-only">Nguyễn </span>Gia Tuyến</span> <p>Analyst data</p> </div> <div class="card-action"> <a href onclick="Materialize.toast(\'Chưa cập nhật\', 4000)">Chi tiết</a> </div> </div> </div> <div class="col s12 m6"> <div class="card small pink darken-4"> <img src="images/image-kimanh.781b30fb.jpg" class="img-profile circle responsive-img right" tooltipped data-position="bottom" data-delay="50" data-tooltip="Sở thích Ảo tưởng sức mạnh"> <div class="card-content white-text"> <span class="card-title"><span class="hide-on-small-only">Lê Thị </span>Kim Anh</span> <p>Đã bựa nay còn <span class="pink-text text-lighten-1">bựa hơn</span></p> </div> <div class="card-action"> <a ui-sref="kimanh.tongquan">Chi tiết</a> </div> </div> </div> <div class="col s12 m6"> <div class="card small blue darken-4"> <img src="images/image-anhtuan.b54d0daf.jpg" class="img-profile circle responsive-img right" tooltipped data-position="bottom" data-delay="50" data-tooltip="Sở thích N/A"> <div class="card-content white-text"> <span class="card-title"><span class="hide-on-small-only">Đoàn </span>Anh Tuấn</span> <p>Nguy hiểm đến từng <span class="blue-text text-lighten-4">centimeters</span></p> </div> <div class="card-action"> <a href onclick="Materialize.toast(\'Chưa cập nhật\', 4000)">Chi tiết</a> </div> </div> </div> </div>'),a.put("views/home.html",'<section> <!-- \n	<div parallax-container>\n		<div parallax>\n			<img class="responsive-img" src="images/WP_20150118_001.3a7152ed.jpg"/>\n		</div>\n	</div> --> <div class="parallax-container"> <!-- <div class="container center-align">\n    		<h1 class="hoverable waves-effect waves-red blue-text text-accent-4">Nguyễn Gia Tuyến</h1>\n    		<p class="hoverable grey-text text-darken-3 lighten-3 waves-effect waves-green">STATISTICS MEAN NEVER HAVING TO SAY YOU\'RE CERTAIN</p>\n		</div> --> <div class="container center-align"> <h1 class="hoverable waves-effect waves-red red-text text-darken-4">Chúc mừng năm mới</h1> <br> <h4 class="hoverable deep-orange-text lighten-3 waves-effect waves-green"> 2016 </h4> </div> <div parallax> <img src="images/hoa-dao-dep-21.8805d535.jpg"> </div> <div class="center-align orange-text text-accent-4"> <h1 class="hide-on-small-only truncate">Chúc mọi người và gia đình năm mới vui vẻ <i class="mdi-image-tag-faces"></i></h1> <h5 class="hide-on-med-and-up truncate">Chúc mọi người và gia đình năm mới vui vẻ <i class="mdi-image-tag-faces"></i></h5> </div> </div> <div class="section white"> <!-- Trang web ca nhan cua toi --> <!-- <div class="row container">\n    		<div class="progress light-green">\n    			<div class="indeterminate red darken-4"></div>\n    		</div>\n    	</div> --> </div> </section> <section> <div class="slider" slider> <ul class="slides"> <li> <img src="images/WP_20150621_07_55_12_Pro.c7d04ff2.jpg"> <div class="caption left-align"> <!-- <h3>Bình minh ở Đồ Sơn</h3> --> <h4>Cung chúc tân niên. Sức khỏe vô biên</h4> <h4>Thành công liên miên. Hạnh phúc triền miên</h4> <h4>Túi luôn đầy tiền. Sung sướng như tiên</h4> <h4>Chúc mừng năm mới</h4> </div> </li> <li> <img src="images/WP_20150118_07_20_53_Pro.9358a519.jpg"> <div class="caption right-align"> <!-- <h3>Bình minh ở Mộc Châu</h3> --> <h4>Chúc bạn một năm mới</h4> <h4>An Khang - Thịnh vượng</h4> <h4>Phát tài - Phát lộc</h4> </div> </li> <li> <img src="images/WP_20150118_07_27_34_Pro.389c9d24.jpg"> <div class="caption left-align"> <!-- <h3>Bình minh ở Mộc Châu</h3> --> <h4>Cung Chúc Tân Xuân Phước Vĩnh Cửu</h4> <h4>Chúc Trong Gia Quyến Được An Khương</h4> <h4>Tân Niên Lai Đáo Đa Phú Quý</h4> <h4>Xuân Đến An Khương Vạn Thọ Tường</h4> </div> </li> </ul> </div> </section> <section class="m-t m-b"> <div class="col s12 m12 l12"> <h1 class="m-l blue-text text-darken-4 light waves-effect waves-yellow">Bạn bè của tôi</h1> <div class="m flow-text"> <p>Các bạn ạ, một năm đã trôi qua, chúng đã có khoảng thời gian gắn bó (ý mình là gắn thôi chứ không bó :v <i class="mdi-communication-dialer-sip"></i>), thân thiết</p> <p>Một năm chúng ta có bao kỷ niệm (kỷ niệm ở đâu thì nhìn hình bên dưới nhé mấy thím). <i class="mdi-av-queue-music"></i> <i class="mdi-av-queue-music"></i> <i class="mdi-av-queue-music"></i> Khi hai ta chung một nhà ... </p> </div> <section> <div class="parallax-container"> <div parallax><img class="image-test" src="images/WP_20150619_12_51_36_Pro.2c11b78c.jpg"></div> </div> </section> <h1 class="m-l blue-text text-darken-4 light right-align m-r" onclick="Materialize.fadeInImage(\'.image-test\')" ng-click="showAnimation();">Bạn bè của tôi</h1> <div class="m flow-text right-align"> Dù năm cũ có đi qua như thế nào thì chúc cho các bạn năm mới sẽ đạt nhiều thành công và may mắn trong năm tới, ai chưa có gấu thì phấn đấu có gấu ai phấn đấu tiền tài thì được tiền tài và 1 điều quan trọng là không bị tạch. HAPPY NEW YEARS !!! </div> <section> <div class="parallax-container"> <div parallax><img class="image-test" src="images/WP_20150117_07_34_42_Pro.88edb661.jpg"></div> </div> </section> </div> </section> <div class="row m"> <div ng-show="checkShow" class="right"> <div class="chip"> <img src="images/image-anhtuan.b54d0daf.jpg" alt="Anh Tuấn"> Anh Tuấn </div> <div class="chip"> <img src="images/image-dinhphuc.9b7d4a4e.jpg" alt="Đình Phúc"> Đình Phúc </div> <div class="chip"> <img src="images/image-kimanh.781b30fb.jpg" alt="Kim Anh"> Kim Anh </div> <div class="chip"> <img src="images/image-tuananh.fad59557.jpg" alt="Tuấn Ánh"> Tuấn Ánh </div> <div class="chip"> <img src="images/mywebsite.a02d96f3.png" alt="Tuấn Ánh"> Còn nữa, đang cập nhật ... </div> </div> </div> <div class="container m flow-text blue-text text-darken-4"> <h1>Kỷ niệm thời sinh viên</h1> </div> <section class="m-t"> <div class="container"> <div class="row"> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Phượt Mộc Châu" src="images/WP_20150117_07_34_42_Pro.88edb661.jpg"> </div> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Đồ Sơn Hải Phòng" src="images/WP_20150621_07_55_14_Pro.1e8c2e81.jpg"> </div> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Bê tráp cùng Ánh baby" src="images/WP_20151123_07_19_14_Pro.0a55c4b6.jpg"> </div> </div> </div> <div class="container"> <div class="row col s12 m12 l12"> <div class="progress amber darken-4"> <div class="indeterminate light-green"></div> </div> </div> </div> <div class="container"> <div class="row"> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Phượt Mộc Châu" src="images/WP_20150118_004.6a86b607.jpg"> </div> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Đồ Sơn Hải Phòng" src="images/WP_20150619_12_51_36_Pro.2c11b78c.jpg"> </div> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Team bê tráp cho a Trung" src="images/WP_20151123_07_18_57_Pro.2250e128.jpg"> </div> </div> </div> <div class="container"> <div class="row col s12 m12 l12"> <div class="progress lime darken-1"> <div class="indeterminate"></div> </div> </div> </div> <div class="container"> <div class="row"> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Phượt Mộc Châu" src="images/WP_20150118_07_40_34_Pro.cd54a415.jpg"> </div> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Đồ Sơn Hải Phòng" src="images/WP_20150619_16_41_01_Pro.ccf38af3.jpg"> </div> <div class="col s4 m4 l4"> <img materialboxed class="responsive-img hoverable" data-caption="Ăn bún cùng với Phúc muội" src="images/WP_20151123_07_19_20_Pro.ef5a42ab.jpg"> </div> </div> </div> </section>'),a.put("views/kimanh/albumanh.html",'<section class="ng-scope"> <div class="container"> <div class="row"> <div class="col s12 m4 l4"> <div class="material-placeholder"> <img class="responsive-img initialized" src="images/yuna.73343bde.jpg" data-caption="he he" materialboxed=""> </div> </div> <div class="col s12 m4 l4"> <div class="material-placeholder"> <img class="responsive-img initialized" src="images/yuna.73343bde.jpg" data-caption="he he" materialboxed=""> </div> </div> <div class="col s12 m4 l4"> <div class="material-placeholder"> <img class="responsive-img initialized" src="images/yuna.73343bde.jpg" data-caption="he he" materialboxed=""> </div> </div> <div class="col s12 m4 l4"> <div class="material-placeholder"> <img class="responsive-img initialized" src="images/yuna.73343bde.jpg" data-caption="he he" materialboxed=""> </div> </div> </div> </div> </section>'),a.put("views/kimanh/banbe.html",""),a.put("views/kimanh/banthan.html",'<div class="row"> <div class="col m10 s12"> <h5 class="red-text">Gioi thieu ve ban than </h5> <div class="divider"></div> <div class="section"> Khong thu vi lam nhung toi xin gioi thieu ve ban than minh , toi la Kim Anh , toi nam nay 21 tuoi , hien toi dang lam viec cung vs cac ban cua toi tai thu vien Ta Quang Buu . Toi hoi thay xau ho vs ban Tuyen la khong cham chi tim hieu de ban ay phai giuc nhieu. Toi xin hua se cham chi trong thoi gian toi . :v </div> <h5 class="red-text">Cac ten khac </h5> <div class="divider"></div> <div class="section"> O nha , hoi nho bo toi hay goi toi la Oanh, tren lop ban be cap 3 cua toi goi toi la U Kim , gan day ban be cua toi hay goi toi bang cai ten ngan gon la Kim :3 , goi bang ten nao thi toi cung rat la vui :3 </div> <h5 class="red-text">Trich dan yeu thich </h5> <div class="divider"></div> <div class="section"> Nếu như được làm lại, ta sẽ tìm cách sửa chữa lỗi lầm nào? Sẽ lựa chọn xoá đi nỗi đau nào, sự ân hận, niềm hối tiếc nào? Liệu ta có dám mang lại một ý nghĩa mới cho sự tồn tại của mình không? Nhưng để trở thành ai? Để đi đến đâu? Và cùng với ai? <blockquote> Guillaume Musso </blockquote> </div> </div> </div>'),a.put("views/kimanh/congviec.html",'<div class="row"> <div class="col m10 s12"> <div class="section valign-wrapper" style="height: 200px"> <img src="images/Hanoi.3b60ec2a.jpg" alt="" class="circle responsive-img image"> <span class="red-text">dang lam viec tai Ha Noi</span> </div> <div class="divider"></div> <div class="section" style="height: 100px"> <span class="red-text">Ky nang chuyen mon: </span>HTML, JAVASCRIPT, JAVA, PHP. </div> <div class="divider"></div> <div class="section valign-wrapper" style="height: 200px"> <img src="images/bkhn.628248a2.png" alt="" class="circle responsive-img image"> <a href="http://soict.hust.edu.vn" target="_blank">CNTT ,Dai hoc Bach Khoa Ha Noi </a> </div> <div class="divider"></div> <div class="section valign-wrapper" style="height: 200px"> <img src="images/thpt.fcdfa9ea.jpg" alt="" class="circle responsive-img image"> <a href="http://thpt-vinhloc-thanhhoa.edu.vn/" target="_blank">Truong trung hoc pho thong Vinh Loc</a> </div> </div> <div class="col m2 s12"> </div> </div>'),a.put("views/kimanh/kimanh.html",'<header> <nav class="top-nav hide-on-large-only"> <div class="container"> <a href="#" data-activates="slide-out" class="button-collapse top-nav full hide-on-large-only"><i class="mdi-navigation-menu"></i></a> </div> <div class="container"> <div class="nav-wrapper"> <a class="page-title">Trang chủ</a> </div> </div> </nav> </header> <ul id="nav-mobile" class="side-nav fixed hide-on-small-only" style="width: 200px"> <li class="logo" ng-href="google.com"> <img src="images/image-kimanh.781b30fb.jpg" alt="" class="circle responsive-img"> </li> <ul class="collapsible collapsible-accordion"> <li> <a ui-sref="kimanh.tongquan" class="waves-effect waves-purple">Giới thiệu</a> </li> <li> <a ui-sref="kimanh.congviec" class="waves-effect waves-purple">Công việc</a> </li> <li> <a ui-sref="kimanh.banthan" class="waves-effect waves-purple">Bản thân</a> </li> <li> <a ui-sref="kimanh.banbe" class="waves-effect waves-purple">Bạn bè</a> </li> <li> <a ui-sref="kimanh.albumanh" class="waves-effect waves-purple">Album ảnh</a> </li> <li><a ui-sref="app.home" class="waves-effect waves-purple">Quay về trang chủ</a></li> </ul> </ul> <ul id="slide-out" class="side-nav left" style="width: 200px; left:0px"> <li class="logo" ng-href="google.com"> <img src="images/yuna.73343bde.jpg" alt="" class="circle responsive-img"> </li> <ul class="collapsible collapsible-accordion"> <li> <a ui-sref="kimanh.tongquan" class="waves-effect waves-purple">Giới thiệu</a> </li> <li> <a ui-sref="kimanh.congviec" class="waves-effect waves-purple">Công việc</a> </li> <li> <a ui-sref="kimanh.banthan" class="waves-effect waves-purple">Bản thân</a> </li> <li> <a ui-sref="kimanh.banbe" class="waves-effect waves-purple">Bạn bè</a> </li> <li> <a ui-sref="kimanh.albumanh" class="waves-effect waves-purple">Album ảnh</a> </li> <li><a ui-sref="app.home" class="waves-effect waves-purple">Quay về trang chủ</a></li> </ul> </ul> <div class="container"> <div ui-view></div> </div> <script type="text/javascript">// Initialize collapse button\n    $(\'.button-collapse\').sideNav({\n        menuWidth: 200,\n        edge: \'left\',\n        closeOnClick: true\n    });</script>'),a.put("views/kimanh/tongquan.html",'<div class="row"> <div class="col s12 m10"> <div class="section valign-wrapper"> <img src="images/Hanoi.3b60ec2a.jpg" alt="" class="circle responsive-img image"> <span class="red-text">Đang làm việc ở Hà Nội</span> </div> <div class="divider"></div> <div class="section valign-wrapper"> <img src="images/bkhn.628248a2.png" alt="" class="circle responsive-img image"> <span class="red-text">hoc CNTT tai dai hoc bach khoa Hà Nội </span> </div> <div class="divider"></div> <div class="section valign-wrapper"> <img src="images/Hanoi.3b60ec2a.jpg" alt="" class="circle responsive-img image"> <span class="red-text">song tai Hà Nội </span> </div> </div> <div class="col s12 m2"> <div class="section valign-wrapper"> <i class="material-icons mdi-communication-stay-current-portrait"></i> 01697374795 </div> <div class="section valign-wrapper"> <i class="material-icons mdi-communication-email"></i> kimanhitbk@gmail.com </div> <div class="section valign-wrapper"> <i class="material-icons mdi-maps-location-history"></i> 14-12-1994 </div> </div> </div>'),a.put("views/layout.html",'<!-- header --> <div ng-include="\'views/blocks/header.html\'"></div> <!-- /header --> <!-- menu --> <!-- <div ng-include="\'views/blocks/menu.html\'"></div> --> <!-- /menu --> <!-- content--> <div ui-view></div> <!-- /content--> <!-- footer --> <div ng-include="\'views/blocks/footer.html\'"></div> <!-- /footer --> <!-- music --> <div ng-include="\'views/blocks/music.html\'" ng-hide="true"></div> <!-- /music -->')}]);