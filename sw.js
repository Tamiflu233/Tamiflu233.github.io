"use strict";var precacheConfig=[["/404.html","0ab20ebb29fdd3a823c6649780a8426a"],["/about/index.html","71a000c0692d3f6bd49bdf6e150b1ac4"],["/archives/2021/06/index.html","d43290b8610c7dfcf272c015a95d5128"],["/archives/2021/07/index.html","53dcdf93d842f353ccba80844b95f8b0"],["/archives/2021/index.html","88c5b72fa9ce7716431d22844700e972"],["/archives/2021/page/2/index.html","58f043d53f04b63afe3098b4acd34cc1"],["/archives/2023/03/index.html","36e78e4a5ff79ff3dbc4d9d424f78630"],["/archives/2023/index.html","9a3ec628e8a2332eeee468759b898247"],["/archives/index.html","dba0c150bfa94e57f6504f8ca728f7cf"],["/archives/page/2/index.html","eac4e3b4c5857b5228699312c64636c0"],["/bb/index.html","967d264f4cc0df910ab8d545358f22f7"],["/categories/index.html","40cac396f73feef960e4f4b3efa9e861"],["/categories/🌮嵌入式技术/index.html","3b468446200234a6e6964121afde58b9"],["/categories/🌮移动应用开发/index.html","517f8dc9138c779ed2989ae338dd89c7"],["/categories/🍞计算机课设/index.html","5dec409bffcaa53aeb9d23e454892031"],["/categories/🎉分布式计算/index.html","1f3bd0acc9098b84955fb22dd4b344c0"],["/categories/🏳‍🌈软件测试/index.html","2fe52ab788836a5067a375f48d2d3873"],["/categories/👽开源软件通识/index.html","13ab0362bbb5c3d0454bb4089174652c"],["/categories/💥软件协同设计/index.html","0908f34fffcd85de56c4cce76a64b910"],["/css/coin.css","812e6b56f4b7f6a54a8442320c41a426"],["/css/index.css","4464a45ff60efc1eaf9a0d7a86aff2f2"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/Candy.ttf","9136b6c3ceaeeb352c1fbd09796ec668"],["/fonts/iconfont.ttf","2741717471c92f4f2f9c9b9eb4c67e38"],["/fonts/iconfont.woff","72adef109358f51c7c64b15ac2b656f7"],["/fonts/iconfont.woff2","692bdb858252ff623e9a386c6f180ca4"],["/images/分布式期末复习/1552936-20201024112604341-962091331.png","3763eb16d24eefc219d516835d894d00"],["/images/分布式期末复习/7305208-1db15d7c5583c55b.jpg","0b239c2fad2cc6b668fc52299238e7b8"],["/images/分布式期末复习/image-20210617083724144.png","a474163757ec4425374d36eaca224d98"],["/images/分布式期末复习/image-20210617083950144.png","422b62592690dcb17def65dc83cbe0c9"],["/images/分布式期末复习/image-20210617084026497.png","15a7d036367325430cfd29b9c9a9c5d6"],["/images/分布式期末复习/image-20210617084716784.png","8d2ce2485a601fcc66f1cc04c384fca5"],["/images/分布式期末复习/image-20210617085320731.png","9e3addc5481def6b2bd5f956aa3a1aec"],["/images/分布式期末复习/image-20210617085431930.png","eb9131824f9bf2ae8f82e326fcf27429"],["/images/分布式期末复习/image-20210617085505592.png","ac5169804ba1e6831f27cbceb96fcd1e"],["/images/分布式期末复习/image-20210617085849979.png","c3191a2044736c28229b18a1feba1cde"],["/images/分布式期末复习/image-20210617090134059.png","ab2ecf03c421a49cd58e6bf6ceeb41d4"],["/images/分布式期末复习/image-20210617090220829.png","d2d4ca32d0d44acf0d34662c37cf2b89"],["/images/分布式期末复习/image-20210617090634299.png","d30cd353784505f489970664f8bbf74c"],["/images/分布式期末复习/image-20210618213609050-1624023438557.png","7bf9bc9dec94d8ad82f26003d1fd2839"],["/images/分布式期末复习/image-20210618213609050.png","7bf9bc9dec94d8ad82f26003d1fd2839"],["/images/分布式期末复习/image-20210618214012163.png","46bfe4acdb4f11371749f469e305cdad"],["/images/分布式期末复习/image-20210619194105678.png","05b56fdcd8d80ab3bd70e556afcd5f19"],["/images/分布式期末复习/image-20210619194644783.png","05de4df9f6979cd62090cbb0c40ba39f"],["/images/分布式期末复习/image-20210619200707202.png","debf7171ea5b30dd48be74dbf698f511"],["/images/分布式期末复习/image-20210619201231566.png","fdd3d275332f193aeedd9f1f4d40056a"],["/images/分布式期末复习/image-20210619201703906.png","7340dd7f047474990226e60cc3ba85c9"],["/images/分布式期末复习/image-20210619202946638.png","4aa2cab96cbc33bea9d02136faa24831"],["/images/分布式期末复习/image-20210622094333162.png","0a0c04decb909335417787590a825dbe"],["/images/分布式期末复习/image-20210622150932945.png","b3ddc31356f731662bd5604f2d26f995"],["/images/分布式期末复习/image-20210622151014089.png","4b449b5116a216e920766f7e13db7393"],["/images/分布式期末复习/image-20210622151031891.png","6b44662ed0f27a6cbc96d34e9f862bb5"],["/images/分布式期末复习/image-20210622151726302.png","6bcb1d7cfe317a0aca02b149243b6650"],["/images/分布式期末复习/image-20210622151803695.png","a627a599b36cc91d1b4ebda3bae915d6"],["/images/分布式期末复习/image-20210622151815860.png","9c2ed17febfa47f0ca96cd4da202b307"],["/images/分布式期末复习/image-20210622151857927.png","5da8c174c0e4feaf39508a5513939bff"],["/images/分布式期末复习/image-20210622151940442.png","fffae56af22ca6cbb12a39b9080d3823"],["/images/分布式期末复习/image-20210622152031761.png","5e0d5b09150653c591a3b0aef119631c"],["/images/分布式期末复习/image-20210622152216787.png","22e315beef415c9e55554dfd33cee94d"],["/images/分布式期末复习/image-20210622152251012.png","8c8add632e407b7d1dd4655a45e25979"],["/images/分布式期末复习/image-20210622152301643.png","4f5da4cd9933d2213ef29711886c33d2"],["/images/分布式期末复习/image-20210622152311097.png","c9d6fdfc3ced1c7f3f0f0cb87844bc86"],["/images/分布式期末复习/image-20210622152319864.png","bde5122f6a0d9a7831d6ed758c75c6a5"],["/images/分布式期末复习/image-20210622152419760.png","3fb2f11b720f57a7737d6fa6cb0da288"],["/images/分布式期末复习/image-20210622152428832.png","031f12efcf2e8ba0d064f6620d235308"],["/images/分布式期末复习/image-20210622152440436.png","54b9d03a43d6323a21180ae27f0bcc67"],["/images/分布式期末复习/image-20210622152843099.png","323d9262e7ef922cf1d9e1b88ce500f1"],["/images/分布式期末复习/image-20210622152852742.png","cf2f48207d69fa30249a45bd221b2428"],["/images/分布式期末复习/image-20210622152913337.png","dea332ebda3a1c082c378b93c48eabac"],["/images/分布式期末复习/image-20210622152929271.png","dea332ebda3a1c082c378b93c48eabac"],["/images/分布式期末复习/image-20210622152942050.png","fcc3d2682736a2d1c2d40eb459a2a44f"],["/images/分布式期末复习/image-20210622153039335.png","5c6a9065d28bbeed9649780ed2b54ff5"],["/images/分布式期末复习/image-20210622154755269.png","207ce8c26f7e120bd2eab6ccc693f67f"],["/images/分布式期末复习/image-20210622154806008.png","fd0f6bf29426431edc7b95d8704ce228"],["/images/分布式期末复习/image-20210622154829863.png","0686fc89456c9759f828a2778ae671bc"],["/images/分布式期末复习/image-20210622154928358.png","07b043b62a1d738c2524cf948e2bf319"],["/images/分布式期末复习/image-20210622154957022.png","6b787c1519ab9d6784473b3afcc64c0f"],["/images/分布式期末复习/image-20210622155152430.png","9f55b9a81554e2ad9902dd82750eb682"],["/images/分布式期末复习/image-20210622155201947.png","d0c30ab3a12a59e08e10ae1949ff2e94"],["/images/分布式期末复习/image-20210622155203539.png","d0c30ab3a12a59e08e10ae1949ff2e94"],["/images/分布式期末复习/image-20210622155215401.png","d1138f096036b0b72b50ef140fc01414"],["/images/分布式期末复习/image-20210622155225671.png","c69b58716a5da9dac0a37a04d9c8a89c"],["/images/分布式期末复习/image-20210622155646490.png","3dcabec3dd94d210aaa830baaaf352c6"],["/images/分布式期末复习/image-20210622155734725.png","1c0fedf9802bf23520c55b25e087ce4b"],["/images/分布式期末复习/image-20210622160014743.png","91978c62270c96b01e249ae09235e4a8"],["/images/分布式期末复习/image-20210622160543508.png","45f3287ed383669a24cb78cd6bddb14b"],["/images/分布式期末复习/image-20210622160557470.png","ca51c7d5e1db6d64557af1dad5658ccd"],["/images/分布式期末复习/image-20210622160639296.png","120b7b3413d7b4e34227ffd605a62263"],["/images/分布式期末复习/image-20210622160654755.png","aa5fbec01a341cdb042eaf1ca309943c"],["/images/分布式期末复习/image-20210622160718425.png","dafd8b77060bbd5eae3a6db658c224f1"],["/images/分布式期末复习/image-20210622160726482.png","40bc63dbb13b1dd15bade6354a0e9b47"],["/images/分布式期末复习/image-20210622160759935.png","b7dea7870266a04131080fbbfd072327"],["/images/分布式期末复习/image-20210622160827053.png","58e628f18b5f0fe8f7dfec157e9f24fc"],["/images/分布式期末复习/image-20210622161927128.png","e0987a350315930c8ae6cfb717902867"],["/images/分布式期末复习/image-20210622162336512.png","40227a66b8a3deb53223e433f04500c3"],["/images/分布式期末复习/image-20210622162346050.png","4ea8a276bbf967d78811a4b6221a1965"],["/images/分布式期末复习/image-20210622162357160.png","f8acd71981000ccd84428c408f16ce94"],["/images/分布式期末复习/image-20210622162426627.png","1efd8521c1858df42be3ecab0c60893d"],["/images/分布式期末复习/image-20210622162437141.png","2175c97425d2756fbf0d812bcc185375"],["/images/分布式期末复习/image-20210622162721348.png","985a0c6ca90c04ac69130e517dd55587"],["/images/分布式期末复习/image-20210622162743906.png","b345e83e4db0262c8e2b568cb17152ac"],["/images/分布式期末复习/image-20210622162823480.png","fe6f5e2c20bcb8a91f21351bfd5d6d22"],["/images/分布式期末复习/image-20210622162922850.png","319d55f2730af19b49a0ba73380f765e"],["/images/分布式期末复习/image-20210622163057818.png","830f7d71f4f446c92c960db7bb44eb80"],["/images/分布式期末复习/image-20210622163114438.png","1192350b729ae4a2ace792cc39b6b11d"],["/images/分布式期末复习/image-20210622163316174.png","b81e5e38bf66a25a5ba699ac990069a3"],["/images/分布式期末复习/image-20210622163703688.png","15c5306e9ddab3793a82d4e51563a8cd"],["/images/分布式期末复习/image-20210622165329137.png","294070030705eedfc6c6ef03bfe75f36"],["/images/分布式期末复习/image-20210622165336334.png","294070030705eedfc6c6ef03bfe75f36"],["/images/分布式期末复习/image-20210622165505422.png","27ebc0c6e44a19e576bb42dbe3a91907"],["/images/分布式期末复习/image-20210622170048070.png","a0b44dbdb1b86d82d4e2d445fd7227dd"],["/images/嵌入式期末复习/14BC44A5034B4BD3FF447FCF77146BF4-1624026367099.jpg","14bc44a5034b4bd3ff447fcf77146bf4"],["/images/嵌入式期末复习/14BC44A5034B4BD3FF447FCF77146BF4.jpg","14bc44a5034b4bd3ff447fcf77146bf4"],["/images/嵌入式期末复习/9C00BD22061AEE082D8DCFE36105878F-1624026367099.jpg","9c00bd22061aee082d8dcfe36105878f"],["/images/嵌入式期末复习/9C00BD22061AEE082D8DCFE36105878F.jpg","9c00bd22061aee082d8dcfe36105878f"],["/images/嵌入式期末复习/9E42F84B69AF2E020CAB13CC8796997F-1624026367098.jpg","9e42f84b69af2e020cab13cc8796997f"],["/images/嵌入式期末复习/9E42F84B69AF2E020CAB13CC8796997F.jpg","9e42f84b69af2e020cab13cc8796997f"],["/images/嵌入式期末复习/D0DBC768767751AFBA2C89AD6D04B9B6-1624026367099.jpg","d0dbc768767751afba2c89ad6d04b9b6"],["/images/嵌入式期末复习/D0DBC768767751AFBA2C89AD6D04B9B6.jpg","d0dbc768767751afba2c89ad6d04b9b6"],["/images/嵌入式期末复习/E2C273CEB24BAECB70A614F923E6C4C0-1624026367099.jpg","e2c273ceb24baecb70a614f923e6c4c0"],["/images/嵌入式期末复习/E2C273CEB24BAECB70A614F923E6C4C0.jpg","e2c273ceb24baecb70a614f923e6c4c0"],["/images/嵌入式期末复习/image-20210618105144680-1624026367099.png","d14fda959df3523d8b2ae8f2b166b355"],["/images/嵌入式期末复习/image-20210618105144680.png","d14fda959df3523d8b2ae8f2b166b355"],["/images/移动应用开发期末复习/image-20210628102049224.png","a1ed53cfe36a9ad94dd80b8bda4ffe2e"],["/images/移动应用开发期末复习/image-20210628102728165.png","66d333d6cbc8c6f58b1b0ccd9f0691e0"],["/images/移动应用开发期末复习/移动应用开发期末复习-image-20210628102049224.png","a1ed53cfe36a9ad94dd80b8bda4ffe2e"],["/images/移动应用开发期末复习/移动应用开发期末复习-image-20210628102728165.png","66d333d6cbc8c6f58b1b0ccd9f0691e0"],["/images/计算机专业课程设计/计算机专业课程设计-image-20210705080531530.png","42130e857090c4deb7c61da074bb95b0"],["/images/计算机专业课程设计/计算机专业课程设计-image-20210705080734520.png","16970f78d650064181752d4c2f6e4c0d"],["/images/计算机专业课程设计/计算机专业课程设计-image-20210705081152755.png","0185eb2670512d9aecc559d91b71015b"],["/images/计算机专业课程设计/计算机专业课程设计-image-20210705081317463.png","7a009b3d42bb4d2b52c3827080293987"],["/images/计算机专业课程设计/计算机专业课程设计-image-20210705081549733.png","400ed3595d69c2cf6e70c65a36e61e14"],["/images/计算机专业课程设计/计算机专业课程设计-image-20210705081833642.png","c5efcc7f1d3f941c5c90fbacdbf8b96a"],["/images/软件协同设计期末复习/807775-20160723144134247-1743796764.png","36aeb7a7f2e31fe94260c7c2927ef009"],["/images/软件协同设计期末复习/807775-20160723144237560-523170503.png","395d8cdd98cdf276d28c87e95e6d7efa"],["/images/软件协同设计期末复习/807775-20160723144249232-258531063.png","24a65a32d71086f003cb6c0dd620d1cf"],["/images/软件协同设计期末复习/807775-20160723144303419-630408989.png","f4cc0637f395fa26e3e512453efc36d4"],["/images/软件协同设计期末复习/807775-20160723144350529-855486099.png","c18c3506266acd330eff68e02cc68a03"],["/images/软件协同设计期末复习/807775-20160723144434013-1500135858.png","be72e894b15a5c6f3b78aa40d9a726e0"],["/images/软件协同设计期末复习/807775-20160723144510279-1844358604.png","9b6dc45b7111dca4db55d64e5b46b307"],["/images/软件协同设计期末复习/807775-20160723144538529-541997244.png","98ada5676b39d8e8e6f5234d67fd90ec"],["/images/软件协同设计期末复习/807775-20160723144633185-87772206.png","dc8de00a6e4f59733aa4d3ff960e4363"],["/images/软件协同设计期末复习/807775-20160723144659935-1934295664.png","dd2a6ae5b7b421015a90f9b408e02d84"],["/images/软件协同设计期末复习/807775-20160723144730763-1113801133.png","98f4ca4375bbb51e3426ea6b994a602b"],["/images/软件协同设计期末复习/807775-20160723144808576-494283562.png","bb3459258fbe5d90534cbab19ddc8a64"],["/images/软件协同设计期末复习/NLxs0A.png","14b3f41ef6941c240dae7cae853dfc2e"],["/images/软件协同设计期末复习/NbOFbV.png","cdc50379f531865811e3b2611b3487bb"],["/images/软件协同设计期末复习/NbhHoR.png","4de8a87bcf73ff7eeef651de6ffef4fb"],["/images/软件协同设计期末复习/URbjPA.png","facaeba16112cf356989fffe9e470dd4"],["/images/软件协同设计期末复习/URbzxP.png","03ef72e37a6b13a1bb99a737af10db89"],["/images/软件协同设计期末复习/URq9r8.png","db4a616aae20e2906b0e8692253aaf09"],["/images/软件协同设计期末复习/URqGGR.png","bc0d9ec06eec0fcb7e1a30335932806c"],["/images/软件协同设计期末复习/URqJR1.png","91582ba4c54404d03ba6a6838505e5d3"],["/images/软件协同设计期末复习/URqYxx.png","a6104dfb63abc02683b23e3b14765266"],["/images/软件协同设计期末复习/URqpKf.png","e57f2876b742ce913c0b73823e83c3f7"],["/images/软件协同设计期末复习/image-20210616233346337-1624026462955.png","b527a5be5d68d17ac6b0dbf7a2692075"],["/images/软件协同设计期末复习/image-20210616233346337.png","b527a5be5d68d17ac6b0dbf7a2692075"],["/images/软件协同设计期末复习/image-20210616233500310-1624026462956.png","1c66cd4db820829951bc41c2cdcd8917"],["/images/软件协同设计期末复习/image-20210616233500310.png","1c66cd4db820829951bc41c2cdcd8917"],["/images/软件协同设计期末复习/image-20210616233548609-1624026462955.png","e33aa6382cbc427c0e3dab45a534be5e"],["/images/软件协同设计期末复习/image-20210616233548609.png","e33aa6382cbc427c0e3dab45a534be5e"],["/images/软件协同设计期末复习/image-20210616234046030-1624026462956.png","be0a94361ecc3163738d49a32ffa4183"],["/images/软件协同设计期末复习/image-20210616234046030.png","be0a94361ecc3163738d49a32ffa4183"],["/images/软件协同设计期末复习/image-20210616234112469-1624026462956.png","6749b4b893e862d6f9555c2e00fbc8f4"],["/images/软件协同设计期末复习/image-20210616234112469.png","6749b4b893e862d6f9555c2e00fbc8f4"],["/images/软件协同设计期末复习/image-20210619145810989.png","a8560c9ea09bf9fdf9ff5d1e05df0b62"],["/images/软件协同设计期末复习/image-20210619155822882.png","0620da6eee58de04ae21ebfc0220b2f7"],["/images/软件协同设计期末复习/image-20210619155858049.png","3731f9e0c3edf24509c014bf0797bcf1"],["/images/软件协同设计期末复习/image-20210619155859921.png","3731f9e0c3edf24509c014bf0797bcf1"],["/images/软件协同设计期末复习/image-20210619155922029.png","08dfb3fe876592344ea0cd7f7979da3d"],["/images/软件协同设计期末复习/image-20210619155942828.png","e9b3003cbcbb357a269bfdab4c370d64"],["/images/软件协同设计期末复习/image-20210620135750978.png","382546e9caf37ffd80e3c8824aa76070"],["/images/软件协同设计期末复习/image-20210620142426715.png","3801a16a1c555bb8b682b7aab14072c7"],["/images/软件协同设计期末复习/image-20210620142511285.png","1b210b103f53483e3872bd9ad647502d"],["/images/软件协同设计期末复习/image-20210620142644566.png","a0d0b458d86dffa9e54633dc60951799"],["/images/软件协同设计期末复习/wps1.jpg","1025513f2213b4b1fab7b4b3d8a8efe8"],["/images/软件协同设计期末复习/wps2.jpg","ddd2a5e6e98552137b2d8c4d1c6451f8"],["/images/软件协同设计期末复习/wps3.jpg","3f4863efa43e32486c5ab633d2f747e3"],["/images/软件协同设计期末复习/wps4.jpg","2a8c755c2eeb7037e2e6c3314a02cd19"],["/images/软件协同设计期末复习/wps5.jpg","4a5450c299f9076a282959456f115de8"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Avatar.jpg","8e61ab2abf8edbf63bb71a33fb76af2a"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.png","cc39d37ae2ff4a880ec3445a4053f85d"],["/img/bg1.jpg","ac83a732181d0efa3091253eee90bf2e"],["/img/bg2.jpg","e6d259f6467e8af1a761e70f4e77e192"],["/img/bg3.jpg","1941a42498909b8dc69d4284ac21f478"],["/img/bg4.jpg","561b2d6958d83f8b23ab6f5e4588f53f"],["/img/comment-bg.gif","ee6d4756268b0f511d173ff7f70e8c3c"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/cover1.jpg","1cf850acb2c0f93330ccfa14f8336f51"],["/img/cover2.jpg","d66163063a228a812ea987caa0e69e12"],["/img/cover3.jpg","06400c5fce917d87ca8039b6fd4f1d01"],["/img/cover4.jpg","f60ef96e32013567e6ea47c25a1605f7"],["/img/cover5.jpg","6b384402b581c3c8ea24f7d6d3aeb188"],["/img/cover6.jpg","7b9a4db8cf3f444365853e90ff7b4a92"],["/img/cover7.jpg","c649838552296a7acddf8202f45eafbf"],["/img/favicon.png","8b7750122ec8549a6032be1d1cc29384"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","57c8f972dc7a095e2d0ed9dc33197d4d"],["/img/siteicon/README.html","5457704c5fcbf2d2d18ba6e3623f633f"],["/img/siteicon/android-chrome-144x144.png","de9971135fc73e8c1a6eca2737c8a760"],["/img/siteicon/android-chrome-192x192.png","487fce93a33e687f00ab7716d0f4ba0b"],["/img/siteicon/android-chrome-256x256.png","55812b3e74618ab0ba875b076570fdf7"],["/img/siteicon/android-chrome-36x36.png","e670dccc5cf76c17eeaf74364b598cbd"],["/img/siteicon/android-chrome-384x384.png","a18c057f7fc189b1b30aa3f7775d8da8"],["/img/siteicon/android-chrome-48x48.png","c8254586ca1791e2725bb2f0166db8e5"],["/img/siteicon/android-chrome-512x512.png","2b0ea010a93abfd8601c57b005ee1383"],["/img/siteicon/android-chrome-72x72.png","603f2f716ff0f0556c2876265d8ce075"],["/img/siteicon/android-chrome-96x96.png","8d59b737efc12789255d89c5073b69b4"],["/img/siteicon/apple-touch-icon.png","451f992557e7f2ac94c4d993646ac42f"],["/img/siteicon/favicon-16x16.png","5348067ef94da68a84827fbfe5aeaff7"],["/img/siteicon/favicon-32x32.png","05cfb3f3139b78fe7fefa3608cd09643"],["/img/siteicon/mstile-150x150.png","b4809b2106d3d1521867b26751ad5b8d"],["/img/siteicon/safari-pinned-tab.svg","773fdf1fcf1d0369b7b0dded104aea35"],["/img/wechat.png","60747a6e742c29d123dc80c4c02c50cc"],["/index.html","d8676c491fccd1a989176dcb5401f698"],["/js/baidu.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/bolb.js","3bb31318085a5d60568b0ef7cc54e9ef"],["/js/coin.js","db0ef6fc56befa79cef5e478f9138324"],["/js/diytitle.js","4acac8a393c98d35e82ad3b0aa600aee"],["/js/main.js","f468f3bc967338f2dd7a6e06c2eef692"],["/js/modify.js","309a916e41b0599dd5d656055ad666fb"],["/js/randombg.js","81061ebcf74a1e25398b88e8275fa2b2"],["/js/runtime.js","502ce15ec7f273f8488ffefe1e343127"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","acb62dcdf7e90930da3f6bf07349fc21"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","4cfc631de0e5f6ff12b2833cac848f27"],["/link/index.html","9fe11565bcdece853ac22e81ee4da1d5"],["/live2d-widget/README.html","5e61153c81680871c6b501997e4df15f"],["/live2d-widget/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d-widget/assets/screenshot-2.png","1295844e29a6d6dc3a4aa0db8faa7da7"],["/live2d-widget/assets/screenshot-3.png","4aa1995daf77bc19803648fe6a65c33e"],["/live2d-widget/autoload.js","cb953004cd9a97c24d76227c01bf3b23"],["/live2d-widget/demo/demo.html","2596a8630c0801002b3dff127b50518b"],["/live2d-widget/demo/login.html","79eb6c655777f2588d0c2f667d4222f6"],["/live2d-widget/live2d.min.js","ee7efff8ff5d1d4bd4a0ff99affd3ec7"],["/live2d-widget/waifu-tips.js","e01c75f70a9465389471f638b1356bf8"],["/live2d-widget/waifu.css","9c1409f77a5bc690d54e2aabf955a730"],["/movies/index.html","7d6b50c00a351d008725dcbcb0c3fbc2"],["/music/index.html","85397bf9ebd00adf999f714ec912d79e"],["/page/2/index.html","d10120d2236c744e9a83eff0e72c1bca"],["/posts/515907a4.html","71ae620de74c7487236c8e3273950c58"],["/posts/943e2d19.html","13eec1af2c331c4a4f4369227050c8a8"],["/posts/a75fd34c.html","33048a79fa2bf8e7050de975ad4ab7ab"],["/posts/caa2d1e2.html","27eae7d8a1f3e20fb6181f24b29b529c"],["/posts/caa2d1e2/image-20210618213609050.png","7bf9bc9dec94d8ad82f26003d1fd2839"],["/posts/efd510a1.html","5a1c4f3833008712c235a0836251c068"],["/posts/f01d39f1.html","34fc73fe7620da76bc9ecab957c2f66a"],["/posts/fb855ad7.html","6925cc54c9d4dd4c41417dc5379cdcbe"],["/sw-register.js","ec565a6ee0ee1db0ff3ba1390d3b1ed9"],["/tags/index.html","dd494d56dfc980ef291735551df8969f"],["/tags/🌹期末/index.html","03165d8f9d73bfcf7ed3136fe7c0df26"],["/tags/🌹期末/page/2/index.html","5ab7bbb338edba09b4c4434fbca06fbd"],["/tags/🍟嵌入式/index.html","58fce21982cba3df3a836ac4872f0aac"],["/tags/🎁复习提纲/index.html","b4324e1801478bdd75d6a0f9c3298627"],["/tags/🐷软件协同设计/index.html","3385f3bac20e72a9b93700e6ea8fc9b7"],["/tags/👽开源软件通识/index.html","662a4ea5341664cdda8cce99ed1f471e"],["/tags/💖分布式计算/index.html","19689b1a46b0d2f91318ef6ad8863595"],["/tags/😱短学期/index.html","7e432f4ad767d6ed82f726594d8dcb8a"],["/tags/🚀软件测试/index.html","124191555448da3d4e581f58c5dd9678"],["/tags/🤖安卓/index.html","1a949bf98fe9c754333c39510bce64b2"]],cacheName="sw-precache-v3--"+(self.registration?self.registration.scope:""),firstRegister=1,ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,a,n,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return a.every((function(a){return!a.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName=(addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},"_sw-precache"),urlsToCacheKeys=new Map(precacheConfig.map((function(e){var a=e[0],n=e[1],c=new URL(a,self.location),t=createCacheKey(c,hashParamName,n,!1);return[c.toString(),t]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e&&e.length>0&&(firstRegister=0),e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!a.has(n)){var c=new Request(n,{credentials:"same-origin"});return fetch(c).then((function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then((function(a){return e.put(n,a)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!a.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})).then((function(){if(!firstRegister)return self.clients.matchAll().then((function(e){e&&e.length&&e.forEach((function(e){e.postMessage("sw.update")}))}))})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";!(a=urlsToCacheKeys.has(n))&&c&&(n=addDirectoryIndex(n,c),a=urlsToCacheKeys.has(n));0,a&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)})))}})),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}((function(){return function e(a,n,c){function t(r,f){if(!n[r]){if(!a[r]){var d="function"==typeof require&&require;if(!f&&d)return d(r,!0);if(i)return i(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var o=n[r]={exports:{}};a[r][0].call(o.exports,(function(e){var n=a[r][1][e];return t(n||e)}),o,o.exports,e,a,n,c)}return n[r].exports}for(var i="function"==typeof require&&require,r=0;r<c.length;r++)t(c[r]);return t}({1:[function(e,a,n){function c(e,a){((a=a||{}).debug||d.debug)&&console.log("[sw-toolbox] "+e)}function t(e){var a;return e&&e.cache&&(a=e.cache.name),a=a||d.cache.name,caches.open(a)}function i(e,a,n){var t=e.url,i=n.maxAgeSeconds,r=n.maxEntries,f=n.name,d=Date.now();return c("Updating LRU order for "+t+". Max entries is "+r+", max age is "+i),s.getDb(f).then((function(e){return s.setTimestampForUrl(e,t,d)})).then((function(e){return s.expireEntries(e,r,i,d)})).then((function(e){c("Successfully updated IDB.");var n=e.map((function(e){return a.delete(e)}));return Promise.all(n).then((function(){c("Done with cache cleanup.")}))})).catch((function(e){c(e)}))}function r(e){var a=Array.isArray(e);if(a&&e.forEach((function(e){"string"==typeof e||e instanceof Request||(a=!1)})),!a)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var f,d=e("./options"),s=e("./idb-cache-expiration");a.exports={debug:c,fetchAndCache:function(e,a){var n=(a=a||{}).successResponses||d.successResponses;return fetch(e.clone()).then((function(c){return"GET"===e.method&&n.test(c.status)&&t(a).then((function(n){n.put(e,c).then((function(){var c=a.cache||d.cache;(c.maxEntries||c.maxAgeSeconds)&&c.name&&function(e,a,n){var c=i.bind(null,e,a,n);f=f?f.then(c):c()}(e,n,c)}))})),c.clone()}))},openCache:t,renameCache:function(e,a,n){return c("Renaming cache: ["+e+"] to ["+a+"]",n),caches.delete(a).then((function(){return Promise.all([caches.open(e),caches.open(a)]).then((function(a){var n=a[0],c=a[1];return n.keys().then((function(e){return Promise.all(e.map((function(e){return n.match(e).then((function(a){return c.put(e,a)}))})))})).then((function(){return caches.delete(e)}))}))}))},cache:function(e,a){return t(a).then((function(a){return a.add(e)}))},uncache:function(e,a){return t(a).then((function(a){return a.delete(e)}))},precache:function(e){e instanceof Promise||r(e),d.preCacheItems=d.preCacheItems.concat(e)},validatePrecacheInput:r,isResponseFresh:function(e,a,n){if(!e)return!1;if(a){var c=e.headers.get("date");if(c)if(new Date(c).getTime()+1e3*a<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,a,n){var c="sw-toolbox-",t=1,i="store",r="url",f="timestamp",d={};a.exports={getDb:function(e){return e in d||(d[e]=function(e){return new Promise((function(a,n){var d=indexedDB.open(c+e,t);d.onupgradeneeded=function(){d.result.createObjectStore(i,{keyPath:r}).createIndex(f,f,{unique:!1})},d.onsuccess=function(){a(d.result)},d.onerror=function(){n(d.error)}}))}(e)),d[e]},setTimestampForUrl:function(e,a,n){return new Promise((function(c,t){var r=e.transaction(i,"readwrite");r.objectStore(i).put({url:a,timestamp:n}),r.oncomplete=function(){c(e)},r.onabort=function(){t(r.error)}}))},expireEntries:function(e,a,n,c){return function(e,a,n){return a?new Promise((function(c,t){var d=1e3*a,s=[],o=e.transaction(i,"readwrite"),g=o.objectStore(i);g.index(f).openCursor().onsuccess=function(e){var a=e.target.result;if(a&&n-d>a.value[f]){var c=a.value[r];s.push(c),g.delete(c),a.continue()}},o.oncomplete=function(){c(s)},o.onabort=t})):Promise.resolve([])}(e,n,c).then((function(n){return function(e,a){return a?new Promise((function(n,c){var t=[],d=e.transaction(i,"readwrite"),s=d.objectStore(i),o=s.index(f),g=o.count();o.count().onsuccess=function(){var e=g.result;e>a&&(o.openCursor().onsuccess=function(n){var c=n.target.result;if(c){var i=c.value[r];t.push(i),s.delete(i),e-t.length>a&&c.continue()}})},d.oncomplete=function(){n(t)},d.onabort=c})):Promise.resolve([])}(e,a).then((function(e){return n.concat(e)}))}))}}},{}],3:[function(e,a,n){function c(e){return e.reduce((function(e,a){return e.concat(a)}),[])}e("serviceworker-cache-polyfill");var t=e("./helpers"),i=e("./router"),r=e("./options");a.exports={fetchListener:function(e){var a=i.match(e.request);a?e.respondWith(a(e.request)):i.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(i.default(e.request))},activateListener:function(e){t.debug("activate event fired");var a=r.cache.name+"$$$inactive$$$";e.waitUntil(t.renameCache(a,r.cache.name))},installListener:function(e){var a=r.cache.name+"$$$inactive$$$";t.debug("install event fired"),t.debug("creating cache ["+a+"]"),e.waitUntil(t.openCache({cache:{name:a}}).then((function(e){return Promise.all(r.preCacheItems).then(c).then(t.validatePrecacheInput).then((function(a){return t.debug("preCache list: "+(a.join(", ")||"(none)")),e.addAll(a)}))})))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,a,n){var c;c=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,a.exports={cache:{name:"$$$toolbox-cache$$$"+c+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,a,n){var c=new URL("./",self.location).pathname,t=e("path-to-regexp"),i=function(e,a,n,i){a instanceof RegExp?this.fullUrlRegExp=a:(0!==a.indexOf("/")&&(a=c+a),this.keys=[],this.regexp=t(a,this.keys)),this.method=e,this.options=i,this.handler=n};i.prototype.makeHandler=function(e){var a;if(this.regexp){var n=this.regexp.exec(e);a={},this.keys.forEach((function(e,c){a[e.name]=n[c+1]}))}return function(e){return this.handler(e,a,this.options)}.bind(this)},a.exports=i},{"path-to-regexp":15}],6:[function(e,a,n){var c=e("./route"),t=e("./helpers"),i=function(e,a){for(var n=e.entries(),c=n.next(),t=[];!c.done;){new RegExp(c.value[0]).test(a)&&t.push(c.value[1]),c=n.next()}return t},r=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach((function(e){r.prototype[e]=function(a,n,c){return this.add(e,a,n,c)}})),r.prototype.add=function(e,a,n,i){var r;i=i||{},a instanceof RegExp?r=RegExp:r=(r=i.origin||self.location.origin)instanceof RegExp?r.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(r),e=e.toLowerCase();var f=new c(e,a,n,i);this.routes.has(r)||this.routes.set(r,new Map);var d=this.routes.get(r);d.has(e)||d.set(e,new Map);var s=d.get(e),o=f.regexp||f.fullUrlRegExp;s.has(o.source)&&t.debug('"'+a+'" resolves to same regex as existing route.'),s.set(o.source,f)},r.prototype.matchMethod=function(e,a){var n=new URL(a),c=n.origin,t=n.pathname;return this._match(e,i(this.routes,c),t)||this._match(e,[this.routes.get(RegExp)],a)},r.prototype._match=function(e,a,n){if(0===a.length)return null;for(var c=0;c<a.length;c++){var t=a[c],r=t&&t.get(e.toLowerCase());if(r){var f=i(r,n);if(f.length>0)return f[0].makeHandler(n)}}return null},r.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},a.exports=new r},{"./helpers":1,"./route":5}],7:[function(e,a,n){var c=e("../options"),t=e("../helpers");a.exports=function(e,a,n){return n=n||{},t.debug("Strategy: cache first ["+e.url+"]",n),t.openCache(n).then((function(a){return a.match(e).then((function(a){var i=n.cache||c.cache,r=Date.now();return t.isResponseFresh(a,i.maxAgeSeconds,r)?a:t.fetchAndCache(e,n)}))}))}},{"../helpers":1,"../options":4}],8:[function(e,a,n){var c=e("../options"),t=e("../helpers");a.exports=function(e,a,n){return n=n||{},t.debug("Strategy: cache only ["+e.url+"]",n),t.openCache(n).then((function(a){return a.match(e).then((function(e){var a=n.cache||c.cache,i=Date.now();if(t.isResponseFresh(e,a.maxAgeSeconds,i))return e}))}))}},{"../helpers":1,"../options":4}],9:[function(e,a,n){var c=e("../helpers"),t=e("./cacheOnly");a.exports=function(e,a,n){return c.debug("Strategy: fastest ["+e.url+"]",n),new Promise((function(i,r){var f=!1,d=[],s=function(e){d.push(e.toString()),f?r(new Error('Both cache and network failed: "'+d.join('", "')+'"')):f=!0},o=function(e){e instanceof Response?i(e):s("No result returned")};c.fetchAndCache(e.clone(),n).then(o,s),t(e,a,n).then(o,s)}))}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,a,n){a.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,a,n){var c=e("../options"),t=e("../helpers");a.exports=function(e,a,n){var i=(n=n||{}).successResponses||c.successResponses,r=n.networkTimeoutSeconds||c.networkTimeoutSeconds;return t.debug("Strategy: network first ["+e.url+"]",n),t.openCache(n).then((function(a){var f,d,s=[];if(r){var o=new Promise((function(i){f=setTimeout((function(){a.match(e).then((function(e){var a=n.cache||c.cache,r=Date.now(),f=a.maxAgeSeconds;t.isResponseFresh(e,f,r)&&i(e)}))}),1e3*r)}));s.push(o)}var g=t.fetchAndCache(e,n).then((function(e){if(f&&clearTimeout(f),i.test(e.status))return e;throw t.debug("Response was an HTTP error: "+e.statusText,n),d=e,new Error("Bad response")})).catch((function(c){return t.debug("Network or response error, fallback to cache ["+e.url+"]",n),a.match(e).then((function(e){if(e)return e;if(d)return d;throw c}))}));return s.push(g),Promise.race(s)}))}},{"../helpers":1,"../options":4}],12:[function(e,a,n){var c=e("../helpers");a.exports=function(e,a,n){return c.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,a,n){var c=e("./options"),t=e("./router"),i=e("./helpers"),r=e("./strategies"),f=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",f.installListener),self.addEventListener("activate",f.activateListener),self.addEventListener("fetch",f.fetchListener),a.exports={networkOnly:r.networkOnly,networkFirst:r.networkFirst,cacheOnly:r.cacheOnly,cacheFirst:r.cacheFirst,fastest:r.fastest,router:t,options:c,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,a,n){a.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,a,n){function c(e,a){for(var n,c=[],t=0,i=0,r="",s=a&&a.delimiter||"/";null!=(n=p.exec(e));){var o=n[0],g=n[1],b=n.index;if(r+=e.slice(i,b),i=b+o.length,g)r+=g[1];else{var m=e[i],u=n[2],h=n[3],l=n[4],v=n[5],x=n[6],w=n[7];r&&(c.push(r),r="");var y=null!=u&&null!=m&&m!==u,C="+"===x||"*"===x,E="?"===x||"*"===x,j=n[2]||s,R=l||v;c.push({name:h||t++,prefix:u||"",delimiter:j,optional:E,repeat:C,partial:y,asterisk:!!w,pattern:R?d(R):w?".*":"[^"+f(j)+"]+?"})}}return i<e.length&&(r+=e.substr(i)),r&&c.push(r),c}function t(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function i(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function r(e){for(var a=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(a[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,c){for(var r="",f=n||{},d=(c||{}).pretty?t:encodeURIComponent,s=0;s<e.length;s++){var o=e[s];if("string"!=typeof o){var g,b=f[o.name];if(null==b){if(o.optional){o.partial&&(r+=o.prefix);continue}throw new TypeError('Expected "'+o.name+'" to be defined')}if(m(b)){if(!o.repeat)throw new TypeError('Expected "'+o.name+'" to not repeat, but received `'+JSON.stringify(b)+"`");if(0===b.length){if(o.optional)continue;throw new TypeError('Expected "'+o.name+'" to not be empty')}for(var p=0;p<b.length;p++){if(g=d(b[p]),!a[s].test(g))throw new TypeError('Expected all "'+o.name+'" to match "'+o.pattern+'", but received `'+JSON.stringify(g)+"`");r+=(0===p?o.prefix:o.delimiter)+g}}else{if(g=o.asterisk?i(b):d(b),!a[s].test(g))throw new TypeError('Expected "'+o.name+'" to match "'+o.pattern+'", but received "'+g+'"');r+=o.prefix+g}}else r+=o}return r}}function f(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function d(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function s(e,a){return e.keys=a,e}function o(e){return e.sensitive?"":"i"}function g(e,a,n){m(a)||(n=a||n,a=[]);for(var c=(n=n||{}).strict,t=!1!==n.end,i="",r=0;r<e.length;r++){var d=e[r];if("string"==typeof d)i+=f(d);else{var g=f(d.prefix),b="(?:"+d.pattern+")";a.push(d),d.repeat&&(b+="(?:"+g+b+")*"),i+=b=d.optional?d.partial?g+"("+b+")?":"(?:"+g+"("+b+"))?":g+"("+b+")"}}var p=f(n.delimiter||"/"),u=i.slice(-p.length)===p;return c||(i=(u?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=t?"$":c&&u?"":"(?="+p+"|$)",s(new RegExp("^"+i,o(n)),a)}function b(e,a,n){return m(a)||(n=a||n,a=[]),n=n||{},e instanceof RegExp?function(e,a){var n=e.source.match(/\((?!\?)/g);if(n)for(var c=0;c<n.length;c++)a.push({name:c,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return s(e,a)}(e,a):m(e)?function(e,a,n){for(var c=[],t=0;t<e.length;t++)c.push(b(e[t],a,n).source);return s(new RegExp("(?:"+c.join("|")+")",o(n)),a)}(e,a,n):function(e,a,n){return g(c(e,n),a,n)}(e,a,n)}var m=e("isarray");a.exports=b,a.exports.parse=c,a.exports.compile=function(e,a){return r(c(e,a))},a.exports.tokensToFunction=r,a.exports.tokensToRegExp=g;var p=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,a,n){!function(){var e=Cache.prototype.addAll,a=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(a)var n=a[1],c=parseInt(a[2]);e&&(!a||"Firefox"===n&&c>=46||"Chrome"===n&&c>=50)||(Cache.prototype.addAll=function(e){function a(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return a.prototype=Object.create(Error.prototype),Promise.resolve().then((function(){if(arguments.length<1)throw new TypeError;return e=e.map((function(e){return e instanceof Request?e:String(e)})),Promise.all(e.map((function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new a("Invalid scheme");return fetch(e.clone())})))})).then((function(c){if(c.some((function(e){return!e.ok})))throw new a("Incorrect response status");return Promise.all(c.map((function(a,c){return n.put(e[c],a)})))})).then((function(){}))},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)})),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"cdn.jsdelivr.net"}),toolbox.router.get("/*",toolbox.cacheFirst,{origin:"unpkg.zhimg.com"});