/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "08ff8992d9ad56efe99323690eb23f96"
  },
  {
    "url": "about/index.html",
    "revision": "25d86b98dd1f27aa5118599608118783"
  },
  {
    "url": "assets/images/1668170597296.png",
    "revision": "0e3488678953d9b428755a50b60b0c1f"
  },
  {
    "url": "assets/images/1668343092095.png",
    "revision": "4536a0fad4a9e8037f4d7a820ffb4b91"
  },
  {
    "url": "assets/images/20220327_143256-480.webp",
    "revision": "950b62ea8123cae60adb9e0aea991384"
  },
  {
    "url": "assets/images/20220327_143256-960.webp",
    "revision": "944c26791421d3c1235189eb0f78fd19"
  },
  {
    "url": "assets/images/20220327_143256.jpg",
    "revision": "0e8d3f65cd3b1d7408c34f5d858f1882"
  },
  {
    "url": "assets/images/271EC79E-5382-4284-B13C-E588CE62FD62.png",
    "revision": "7eb9c689b1cafc779c0145440ef2f146"
  },
  {
    "url": "assets/images/33AAAF43-D6EF-4357-B4CD-0EE74B07ADA7.png",
    "revision": "534b609e02148d4c6319e3b3b4ac4f3d"
  },
  {
    "url": "assets/images/4BB44E51-A63A-43CB-8FA3-BA5EFDB4919C.png",
    "revision": "f11354d6ae631a2ce66b50e38738458e"
  },
  {
    "url": "assets/images/60068E06-413F-4192-9BBC-283B44E97DA8.png",
    "revision": "e9feca7ca2af42e4b784aac1a3c466c3"
  },
  {
    "url": "assets/images/81836A60-B57B-422B-BE76-C26C2E72C1CE.png",
    "revision": "84c79e906db2ba05a2df7100d78258fa"
  },
  {
    "url": "assets/images/8E1D33C7-4FF5-4B6E-8E81-72D647E0D162.png",
    "revision": "cdef4aeed2168dbb88830c6f2c49ea96"
  },
  {
    "url": "assets/images/anchor.svg",
    "revision": "9389f70ef64eab7b6f390cfc0475d91b"
  },
  {
    "url": "assets/images/BCDA3591-9541-4CDF-9B93-C904A1FA7ACD.png",
    "revision": "17c805243c946cfac899ffd8514aa432"
  },
  {
    "url": "assets/images/block.png",
    "revision": "f2c09861980e8c652d5202d09cb7c5b2"
  },
  {
    "url": "assets/images/capture-inbox.gif",
    "revision": "75e0a74b00ffeb5c604f6ab4245ba8e3"
  },
  {
    "url": "assets/images/configure-group-status.gif",
    "revision": "00de82dcc274edbddebd0edcdf88fb28"
  },
  {
    "url": "assets/images/configure-group.gif",
    "revision": "86facaee5a241abbcb8818f3042b2e6d"
  },
  {
    "url": "assets/images/DEA95210-084C-4CFB-97E5-C5094CD57AB5.png",
    "revision": "df86ae779bcbd1d213c69d5e50d923bd"
  },
  {
    "url": "assets/images/Depositphotos_10732016_S.jpg",
    "revision": "787e90cd681dece04356d4f7b0f32e28"
  },
  {
    "url": "assets/images/Depositphotos_13773062_s-2019-480.webp",
    "revision": "5ae6178ea07a92668d985cffa1503d8c"
  },
  {
    "url": "assets/images/Depositphotos_13773062_s-2019-960.webp",
    "revision": "cfd3fc4b3857d2889a8b00d62d7fb776"
  },
  {
    "url": "assets/images/Depositphotos_13773062_s-2019.jpg",
    "revision": "66708aa55c50a6f7feeee2763fae618c"
  },
  {
    "url": "assets/images/Depositphotos_141380706_L.jpg",
    "revision": "ecfaae9063df79c71638641fff54b28e"
  },
  {
    "url": "assets/images/Depositphotos_20184109_L.jpg",
    "revision": "9868addcb2ef5f59c897a058eb655f0c"
  },
  {
    "url": "assets/images/Depositphotos_22466963_L.jpg",
    "revision": "5af8c0fa9f3fe1f5bae8a8d47e9a5ea9"
  },
  {
    "url": "assets/images/Depositphotos_235958520_s-2019.jpg",
    "revision": "7964bc7d8f2f0080653740edcb576279"
  },
  {
    "url": "assets/images/Depositphotos_457054980_XL.jpg",
    "revision": "842ef592d377b6be387f7e93c2dd36d0"
  },
  {
    "url": "assets/images/Depositphotos_5587343_XL_crop.jpg",
    "revision": "82d8f0685fe50b5397710e8ec4d84889"
  },
  {
    "url": "assets/images/Depositphotos_9397131_s-2019-480.webp",
    "revision": "7e809c5283590e2ae78e093e1d4ec412"
  },
  {
    "url": "assets/images/Depositphotos_9397131_s-2019-960.webp",
    "revision": "cf67e0ecefd684464c0f81636a00f1bf"
  },
  {
    "url": "assets/images/Depositphotos_9397131_s-2019.jpg",
    "revision": "995e598415dd996c11e59b07afcd855d"
  },
  {
    "url": "assets/images/EBA3CE2B-AB8A-4F8A-B750-E1D747FCAF7E.png",
    "revision": "bd78dbd08adb49285dfa915ad645b48e"
  },
  {
    "url": "assets/images/eng-pettson-findus.png",
    "revision": "ef2709c1515f7491706c1cd040b9a45a"
  },
  {
    "url": "assets/images/engin-akyurt--GVpdpShB7M-unsplash.jpg",
    "revision": "4b6cee16533729dece1c43e9dfbb2169"
  },
  {
    "url": "assets/images/favicon.png",
    "revision": "47c2f528ab1826da8aa6941babdb0403"
  },
  {
    "url": "assets/images/favicon/android-chrome-144x144.png",
    "revision": "93d08d2ade94426dcb1e073cd7c128bc"
  },
  {
    "url": "assets/images/favicon/apple-touch-icon.png",
    "revision": "b504ce894bd474b3fd9ba1e8c0e824ec"
  },
  {
    "url": "assets/images/favicon/favicon-16x16.png",
    "revision": "75887abff9c6652b97b0d4210e3173a4"
  },
  {
    "url": "assets/images/favicon/favicon-32x32.png",
    "revision": "0d5e1417128a007131c049437e17ac7b"
  },
  {
    "url": "assets/images/favicon/favicon.ico",
    "revision": "59abfef15473e19bbb9e57c284981bc5"
  },
  {
    "url": "assets/images/favicon/mstile-150x150.png",
    "revision": "4daebbcaba67fa14c42a24567ce7d5c7"
  },
  {
    "url": "assets/images/favicon/safari-pinned-tab.svg",
    "revision": "d1bdb9565c19c97f41e6558157f272b8"
  },
  {
    "url": "assets/images/helping-1440.webp",
    "revision": "d2d37f121257a39097b98550845425ec"
  },
  {
    "url": "assets/images/helping-480.webp",
    "revision": "ae9c273fa85e68d2b61144c5dfd10760"
  },
  {
    "url": "assets/images/helping-960.webp",
    "revision": "5d26fd1506de71baa943487a82b131b7"
  },
  {
    "url": "assets/images/helping.jpg",
    "revision": "016da88cb88d202c9793a3a9f6dff5af"
  },
  {
    "url": "assets/images/highlights-knowledge-1440.webp",
    "revision": "15d69e52f5b6009b3f539c3eaac2c423"
  },
  {
    "url": "assets/images/highlights-knowledge-480.webp",
    "revision": "e03ca0c871ffc33bb81e6e259fd7d174"
  },
  {
    "url": "assets/images/highlights-knowledge-960.webp",
    "revision": "94d99954317c6d6ee1e87c6a772f63ee"
  },
  {
    "url": "assets/images/highlights-knowledge.png",
    "revision": "0589570f1cdb81dec5fc4fd3abc90fef"
  },
  {
    "url": "assets/images/image.png",
    "revision": "e1b6d23dd8e64ad6446039a125d97260"
  },
  {
    "url": "assets/images/Leveraged-Learning-Learning-strengths-opportunities.png",
    "revision": "8e82d6a5c6df6608ed347e7e6d5f179c"
  },
  {
    "url": "assets/images/Lost-Connections-03-2022.png",
    "revision": "5b156a6f54f8f368a8fae5e93838d75a"
  },
  {
    "url": "assets/images/meditation-480.webp",
    "revision": "3ab925db0a39e2c4245b45edf4f804ec"
  },
  {
    "url": "assets/images/meditation-960.webp",
    "revision": "446c84aba0c0606acfe493dec542c47b"
  },
  {
    "url": "assets/images/meditation.jpg",
    "revision": "ae54452a757ff8c3cc77975a169e65fa"
  },
  {
    "url": "assets/images/mesh-gradient-black.jpg",
    "revision": "916f60c838bd17dba25ebea480d26956"
  },
  {
    "url": "assets/images/mesh-gradient-black.webp",
    "revision": "610f9063e55671e4e0892443c6c3abc6"
  },
  {
    "url": "assets/images/mesh-gradient-white.jpg",
    "revision": "427c2bae286f5e21d61f3db4dc1d825a"
  },
  {
    "url": "assets/images/mesh-gradient-white.webp",
    "revision": "88f3041d8fb8f72ba8f922973efed78b"
  },
  {
    "url": "assets/images/non-profi-profile-pic-1440.webp",
    "revision": "2ac0c58fd904f9a63ea173c044083eab"
  },
  {
    "url": "assets/images/non-profi-profile-pic-480.webp",
    "revision": "74cf820656679cef23e34deaacb1c1d6"
  },
  {
    "url": "assets/images/non-profi-profile-pic-960.webp",
    "revision": "b9b5dbe9cbf40f29cabda7e33557f9a1"
  },
  {
    "url": "assets/images/planning-practice.png",
    "revision": "f33a3bd7e6c79dfea1338e789a8b0a20"
  },
  {
    "url": "assets/images/planning-theory.png",
    "revision": "9974dc9f11c6c537e7f75229d5f14d93"
  },
  {
    "url": "assets/images/project-dev-palace.png",
    "revision": "27d97d5cd571a118e3985efae5b94c50"
  },
  {
    "url": "assets/images/q68-E6hdl90-480.webp",
    "revision": "0e0293113bceebf22dd74928220ca448"
  },
  {
    "url": "assets/images/q68-E6hdl90-960.webp",
    "revision": "68e18bf4dcfb4dedfec9cc75d76c93dc"
  },
  {
    "url": "assets/images/readwise_kindle_pocket.png",
    "revision": "eeef5a180c5ce9c78282874313495c3a"
  },
  {
    "url": "assets/images/readwise1.png",
    "revision": "776de51c72bd0cf3fe06af9aa43735bc"
  },
  {
    "url": "assets/images/resulting_transcript.png",
    "revision": "ec50577aab29361b5c4a1da9aff5557f"
  },
  {
    "url": "assets/images/running-480.webp",
    "revision": "33a25afdc13ef20ca47d9a93101b0e9c"
  },
  {
    "url": "assets/images/running-960.webp",
    "revision": "97cb67e6dd0af4ce35b1cc87c379e21a"
  },
  {
    "url": "assets/images/running.png",
    "revision": "bfedce2c0c40f5060e7be68fcfaa8014"
  },
  {
    "url": "assets/images/rust-dev-container-2.png",
    "revision": "d74bcf98e450946731074827c163d941"
  },
  {
    "url": "assets/images/rust-dev-container.png",
    "revision": "b4801aeef61fa35a83bf63f41b07538c"
  },
  {
    "url": "assets/images/schedule.gif",
    "revision": "a245bb65933a55b275889a102d95e991"
  },
  {
    "url": "assets/images/schedule2.gif",
    "revision": "02ab5d38f702289101a93ca57f740a98"
  },
  {
    "url": "assets/images/schedule3.png",
    "revision": "0b0da9b4a01633ac9a6170e8b1d2f68f"
  },
  {
    "url": "assets/images/schedule4.gif",
    "revision": "60d7daed11683fc4d0729044812291c1"
  },
  {
    "url": "assets/images/Screen-Shot-2019-03-04-at-20.52.46.png",
    "revision": "4904ddef67192dac730001a06a99d15c"
  },
  {
    "url": "assets/images/Screen-Shot-2019-03-04-at-20.53.03.png",
    "revision": "7b090fb392faf2bda314068dc5949364"
  },
  {
    "url": "assets/images/Screenshot_20210807_175933_Amazon_Shopping.jpg",
    "revision": "a4dd485cf1d0278045d2db81e3929d31"
  },
  {
    "url": "assets/images/Screenshot-2018-11-04-at-19.16.03.png",
    "revision": "5f7fdf6a4dfa330639126ec96f33d626"
  },
  {
    "url": "assets/images/Screenshot-2018-11-04-at-19.17.30.png",
    "revision": "950958bc4e456b41e8a5210c3f81546a"
  },
  {
    "url": "assets/images/Screenshot-2019-07-09-at-19.57.40.png",
    "revision": "ba398825a230359b56c10d8007af523f"
  },
  {
    "url": "assets/images/Screenshot-2019-07-09-at-20.11.15.png",
    "revision": "4e8f1ca5701b1195957e442a35d862d7"
  },
  {
    "url": "assets/images/Screenshot-2019-07-09-at-20.41.24.png",
    "revision": "a539ddcc83d4b9dbda61f4e62c6b40d6"
  },
  {
    "url": "assets/images/Screenshot-2019-07-09-at-20.58.28.png",
    "revision": "275c881ebc1e4e3d705a75efe132528a"
  },
  {
    "url": "assets/images/scribe-1440.webp",
    "revision": "3549efb1ead5ce3e27407da43cf446f9"
  },
  {
    "url": "assets/images/scribe-480.webp",
    "revision": "5f16eb38a87bf282630b8bc6690cd71a"
  },
  {
    "url": "assets/images/scribe-960.webp",
    "revision": "9714970c1e9a0552e95021fd942566fd"
  },
  {
    "url": "assets/images/scribe.jpg",
    "revision": "067bea38e26bb59d52377442ef4c040a"
  },
  {
    "url": "assets/images/stuck-in-a-model.png",
    "revision": "8673b2d025c090ba2c8e99621ba43bd8"
  },
  {
    "url": "assets/images/transcribe_form.png",
    "revision": "11f36c05049e16875c8ca81c8edcc3e9"
  },
  {
    "url": "assets/images/what-why-kubernetes-480.webp",
    "revision": "9837d541df10a7b5e70f0bb318a8461f"
  },
  {
    "url": "assets/images/what-why-kubernetes-960.webp",
    "revision": "e8bbe678f5db181d7ea4559bcf170203"
  },
  {
    "url": "assets/images/what-why-kubernetes.png",
    "revision": "22870736cd0b96bb469d17bd499a7877"
  },
  {
    "url": "assets/images/why-kubernetes-480.webp",
    "revision": "a0589e386d04b538e55028aee87031fe"
  },
  {
    "url": "assets/images/why-kubernetes-960.webp",
    "revision": "a844f747666b3c22e437d5ec229796ec"
  },
  {
    "url": "assets/images/why-kubernetes.png",
    "revision": "882247add6b7260704087fe9bc9b2603"
  },
  {
    "url": "assets/images/yetty-social.jpg",
    "revision": "fe3323bc581b500f404df4353bb5fe80"
  },
  {
    "url": "assets/scripts/bundle.min.js",
    "revision": "9b852436a3418573cb5eeea37d50f0f2"
  },
  {
    "url": "assets/scripts/vendors/mermaid.min.js",
    "revision": "4164f15ddeaa6d8eec7f087c76c58dc0"
  },
  {
    "url": "assets/scripts/vendors/modernizr.min.js",
    "revision": "5d05fa3d581bd67438cccbb3e5caa67d"
  },
  {
    "url": "assets/styles/main.css",
    "revision": "0c26cca5bbe9699c34935223b3648ec2"
  },
  {
    "url": "assets/styles/prism-base16-monokai.dark.css",
    "revision": "4d385f82e563d70182d7c0dd7f615c39"
  },
  {
    "url": "feed/feed.json",
    "revision": "42d30d3f02698f6c1e276b5b9a6fedf1"
  },
  {
    "url": "index.html",
    "revision": "f5e9eec4b2f3f912b95dd6fe7f69793a"
  },
  {
    "url": "manifest.json",
    "revision": "14b49340fb257839fbcf43ee30fd3be3"
  },
  {
    "url": "posts/1/index.html",
    "revision": "e833e86b28f821b0c2ed83cfaedffe0f"
  },
  {
    "url": "posts/10/index.html",
    "revision": "792d04d497c65b01506e43bbf32faee6"
  },
  {
    "url": "posts/11/index.html",
    "revision": "50807759e8fd93f482d962549ef7c40a"
  },
  {
    "url": "posts/12/index.html",
    "revision": "20302b2e44519952ca20dee6cefd96f2"
  },
  {
    "url": "posts/13/index.html",
    "revision": "295cff6ed8ff37d092a8c1a1bf77460e"
  },
  {
    "url": "posts/14/index.html",
    "revision": "6c846828ffa907e1e6899c6ea3baad18"
  },
  {
    "url": "posts/15/index.html",
    "revision": "6aed48c7eb33ed5a1d9b61518fbc38b7"
  },
  {
    "url": "posts/16/index.html",
    "revision": "d038fc1a7a0ca9602633cdb1d7ed7c2d"
  },
  {
    "url": "posts/17/index.html",
    "revision": "847c585c4ac724bb5103cbe72e7c7a71"
  },
  {
    "url": "posts/18/index.html",
    "revision": "db8300130a641f9efd4805afa32477e8"
  },
  {
    "url": "posts/19/index.html",
    "revision": "a85258036922a31811ad22aa5c32075d"
  },
  {
    "url": "posts/2/index.html",
    "revision": "800196e5df82f8153121bbb8a8fd0896"
  },
  {
    "url": "posts/20/index.html",
    "revision": "a516c1d49186150087bf191f6e5ec96d"
  },
  {
    "url": "posts/2012-09-01-the-shadow-of-the-wind-by-carlos-ruiz-zafon/index.html",
    "revision": "ae4c804f7832bc521f1669362b89ba63"
  },
  {
    "url": "posts/2012-09-16-difficult-conversations/index.html",
    "revision": "7af905ad51ac42b11459150044c6dd15"
  },
  {
    "url": "posts/2012-09-27-the-angels-game-by-carlos-ruiz-zafon/index.html",
    "revision": "277a1a61bce35f2af102ee19fd78aed3"
  },
  {
    "url": "posts/2012-10-10-habits/index.html",
    "revision": "ede46c6a74f4225561f0864bba699740"
  },
  {
    "url": "posts/2012-11-17-val-team-geek/index.html",
    "revision": "999b1429121d4813deb16b0541d9a9bf"
  },
  {
    "url": "posts/2012-12-29-gone-static/index.html",
    "revision": "c2820912cb850bde3cab1f0a9cfe20cb"
  },
  {
    "url": "posts/2012-12-29-markdown-blogging/index.html",
    "revision": "fcbe22b50db04621ef95813d83102082"
  },
  {
    "url": "posts/2012-12-30-farming-and-dependency-injection-in-java/index.html",
    "revision": "920ae36e594c7587d08d60ed89b5c099"
  },
  {
    "url": "posts/2013-01-05-more-or-less/index.html",
    "revision": "b7255d9c0b34531c97f79f91ec5bd8a0"
  },
  {
    "url": "posts/2013-01-14-bank-robbers-and-java-concurrency/index.html",
    "revision": "0f7ac5bb185d65a0b1c889312e7fe883"
  },
  {
    "url": "posts/2013-01-16-contra/index.html",
    "revision": "ca5eaf10bb50c381181520964b77f2f1"
  },
  {
    "url": "posts/2013-01-28-type-erasure-and-some-java-bytecode/index.html",
    "revision": "8b8c2ab6dba95ffdbba2d142b1f0666f"
  },
  {
    "url": "posts/2013-02-08-life-is-a-dance/index.html",
    "revision": "53662caecb03851562367e24262e5430"
  },
  {
    "url": "posts/2013-03-16-how-much-are-we-lying-to-ourselves/index.html",
    "revision": "2433e71c8905e0a6e31aad1df067cec5"
  },
  {
    "url": "posts/2013-03-24-great-books/index.html",
    "revision": "2199e982995930bbfbc498c59174cc52"
  },
  {
    "url": "posts/2013-07-22-so-good-they-cant-ignore-you-by-cal-newport/index.html",
    "revision": "e7723735b4d6a4971290c8d610b1ff1d"
  },
  {
    "url": "posts/2013-07-22-you-gotta-love-the-sunday-evening-news/index.html",
    "revision": "6628cc0c7c1c5ad89981b4a7019c14a5"
  },
  {
    "url": "posts/2013-08-08-theme-of-the-month-deliberate-practice/index.html",
    "revision": "c18c2c193d9386dc2eb1154cf918161f"
  },
  {
    "url": "posts/2013-08-25-a-life-protecting-barrier-for-the-rotterdam-area/index.html",
    "revision": "4044d3851a7792b3076561a9d56adc06"
  },
  {
    "url": "posts/2013-08-27-problem-solving-and-the-random-factor/index.html",
    "revision": "bbbad6bcbbfacdc67180b2c64afdf156"
  },
  {
    "url": "posts/2013-09-01-giethoorn/index.html",
    "revision": "207fd1c7168334826600a56112f0072d"
  },
  {
    "url": "posts/2013-09-04-who-knows-what-dinking-is/index.html",
    "revision": "291b3de3c412cbe34630b6b865f19a1e"
  },
  {
    "url": "posts/2013-09-08-time-traveling-with-the-java-calendar/index.html",
    "revision": "228554e6f100a2464f274070eaa6eebb"
  },
  {
    "url": "posts/2013-09-11-mountain-cross/index.html",
    "revision": "c17b459fbcd80fa089793f8b891bfa54"
  },
  {
    "url": "posts/2013-09-15-playful-squirrels/index.html",
    "revision": "72980319efb67fd83ed8a2daa51094ce"
  },
  {
    "url": "posts/2013-09-16-do-you-say-no/index.html",
    "revision": "6dca774895cecfaf4f5956143e724e97"
  },
  {
    "url": "posts/2013-09-24-dutch-countryside/index.html",
    "revision": "fe833ee34cd737a6c813b37e64a8d6b7"
  },
  {
    "url": "posts/2013-10-01-tourists-in-amsterdam-part-i/index.html",
    "revision": "5863b61bc190cb3ef086f5754961faa4"
  },
  {
    "url": "posts/2013-10-20-mobile-publishing-with-octopress-and-raspberrypi/index.html",
    "revision": "2b68ed8fa35db07f03f4e291d91258d4"
  },
  {
    "url": "posts/2013-11-09-developers-can-cook/index.html",
    "revision": "8f942b863bf607b635d788b56209288c"
  },
  {
    "url": "posts/2013-11-10-holder-js-a-handy-image-placeholder-generator/index.html",
    "revision": "1ace13321c0f825ae71c705d10e1ce4f"
  },
  {
    "url": "posts/2013-11-18-look-ma-i-cooked-again/index.html",
    "revision": "57a953616bac637d0216a94c59a3e51f"
  },
  {
    "url": "posts/2014-01-01-firecrackers-and-what-the-hell/index.html",
    "revision": "9595ae0e7bff5cc73ca473249420b3cc"
  },
  {
    "url": "posts/2014-01-02-standing-up/index.html",
    "revision": "3b8eb1c232013e8fbdc7369d80e1a683"
  },
  {
    "url": "posts/2014-02-23-asciidoc-writing/index.html",
    "revision": "01331236b54e8b7fe1d1f253ca7d17a2"
  },
  {
    "url": "posts/2014-03-07-joy-of-coding-2014/index.html",
    "revision": "022fe341990bb81c8442085aaedd1163"
  },
  {
    "url": "posts/2014-07-14-selfishness/index.html",
    "revision": "af34926870dd7c6a25428ad44d1dd37b"
  },
  {
    "url": "posts/2014-07-25-joel-on-software-work-and-management/index.html",
    "revision": "884b35e612439770c21776f973b1fde4"
  },
  {
    "url": "posts/2014-08-06-the-live-deployment-stories-from-bitopia/index.html",
    "revision": "29e93ceeee5e1844a8f706adab4b7a38"
  },
  {
    "url": "posts/2014-08-12-rackspace-cloud-files-action-for-dropzone-3/index.html",
    "revision": "ad392ef958d38613cdcb10481d3cdfc4"
  },
  {
    "url": "posts/2014-08-26-more-on-the-rackspace-cloud-files-action-for-dropzone-3-and-extras/index.html",
    "revision": "dc8a077816f7fbc8cb75d91a37dc0ea8"
  },
  {
    "url": "posts/2014-10-15-the-story-bundle-or-how-i-started-reading-more-fiction/index.html",
    "revision": "13b355b4a84503c4c589eda24833cbac"
  },
  {
    "url": "posts/2014-10-19-what-makes-a-leader/index.html",
    "revision": "d4b313aa7838a5773073e699e55223d1"
  },
  {
    "url": "posts/2014-11-04-logitech-anywhere-mx-switch-fixes-like-an-amateur/index.html",
    "revision": "f9ece8761d6de570f0e5865a163609a2"
  },
  {
    "url": "posts/2014-11-07-yet-another-unboxing-of-a-myo-armband/index.html",
    "revision": "c04cc356b640e64b07f4f6902007b6ad"
  },
  {
    "url": "posts/2014-11-24-lets-make-a-change/index.html",
    "revision": "199b96c6e2ad8c94c5a381082ae1e27e"
  },
  {
    "url": "posts/2015-01-03-proactive-or-reactive/index.html",
    "revision": "2cef426e81450f29c94fc4f84f3c1f29"
  },
  {
    "url": "posts/2015-01-14-success/index.html",
    "revision": "986d7cfd136f261170254f91913497cc"
  },
  {
    "url": "posts/2015-01-17-im-joining-the-yourturnchallenge/index.html",
    "revision": "15f6735fafec5571a9cddaa5ff3089df"
  },
  {
    "url": "posts/2015-01-19-the-7-habits-of-highly-effective-people/index.html",
    "revision": "74101ca9cf2e418aa7a6129e9635416e"
  },
  {
    "url": "posts/2015-01-20-why-should-things-be-simple-when-they-can-be-complicated/index.html",
    "revision": "aacedb26eb0aab4056fe18792ff261c1"
  },
  {
    "url": "posts/2015-01-21-self-preservation/index.html",
    "revision": "70a4f31ca7f35e9012a54ac176d9ed36"
  },
  {
    "url": "posts/2015-01-22-frustration/index.html",
    "revision": "0d96ee8e90978f33ee757726967d4f41"
  },
  {
    "url": "posts/2015-01-23-i-have-an-idea/index.html",
    "revision": "1539c0501a114fff8b6ee90b7ae6b8de"
  },
  {
    "url": "posts/2015-01-24-who-am-i/index.html",
    "revision": "158e943ce9d43b483ec66bb464077dea"
  },
  {
    "url": "posts/2015-01-25-so-whats-next/index.html",
    "revision": "cf10343b3335119433e548d1dbb50b3e"
  },
  {
    "url": "posts/2015-02-19-so-theres-streaming/index.html",
    "revision": "94c2d1d7c82e3d0ec3a65589052fb879"
  },
  {
    "url": "posts/2015-02-24-rescued-by-pebble/index.html",
    "revision": "b78f739fee8f9798d6ed9b2c2f8b13c7"
  },
  {
    "url": "posts/2015-03-14-links-and-attention/index.html",
    "revision": "7d5e104a731e3d05263819904cb43384"
  },
  {
    "url": "posts/2015-03-22-future-of-my-social-media/index.html",
    "revision": "f74b4899f983b048b39622fbe09c3548"
  },
  {
    "url": "posts/2015-05-10-reality-check/index.html",
    "revision": "e961837e4dbb3c934ae4dcacb1ee75d1"
  },
  {
    "url": "posts/2015-08-02-stuck/index.html",
    "revision": "e60fb29f9daf490ce68a57531ccb0419"
  },
  {
    "url": "posts/2015-08-03-hot-in-nl/index.html",
    "revision": "c672220d4f237f64985d8a571a2a77a3"
  },
  {
    "url": "posts/2015-08-05-simple-light-ish-and-tasty-evening-snack/index.html",
    "revision": "f7aa6f4c4baa057e972f24131199e629"
  },
  {
    "url": "posts/2015-08-27-thank-you-and-goodbye-holland-heeellooo-sweden/index.html",
    "revision": "5f975b5e9b5395a611ae84d1f0a06bb2"
  },
  {
    "url": "posts/2015-08-28-vacation-and-work/index.html",
    "revision": "8d62af10435f242dafe7c5e5dc79625d"
  },
  {
    "url": "posts/2015-10-18-when-youre-moving-houses/index.html",
    "revision": "f62235a249d7495f8fda2a4eb4544bdd"
  },
  {
    "url": "posts/2016-01-24-the-client-and-the-customer/index.html",
    "revision": "d3cc578f80bd1f5d99c46a45976b57b1"
  },
  {
    "url": "posts/2016-02-01-look-ma-i-built-my-own-tiny-blog-in-reactjs/index.html",
    "revision": "975533df4c3ef276a4caa5ed6dd296b7"
  },
  {
    "url": "posts/2016-02-04-next-week-im-going-to-jfokus-are-you-coming-also/index.html",
    "revision": "1a76cfe951f232e43823d7c887374b6e"
  },
  {
    "url": "posts/2016-02-08-jfokus-2016-day-1-microservices-and-mob-programming/index.html",
    "revision": "78d3b7ff0a2e3e95e4461b06518f9f2d"
  },
  {
    "url": "posts/2016-02-10-jfokus-2016-day-2-talks-talks-and-some-snoring/index.html",
    "revision": "3caa50489c322335edd8d64fbd8cf295"
  },
  {
    "url": "posts/2016-02-18-jfokus-2016-day-3-git-parallelism-jcache-reactive-and-boot/index.html",
    "revision": "bac95d47f8b1976a2e625b095bd9635b"
  },
  {
    "url": "posts/2016-02-20-dont-create-a-sense-of-urgency-foster-a-sense-of-purpose/index.html",
    "revision": "50c25ee65a879ad2448dcf5bdd6b8941"
  },
  {
    "url": "posts/2016-02-20-selective-memory/index.html",
    "revision": "22ad444aa327a004dc3ff01ff0dcccbe"
  },
  {
    "url": "posts/2016-02-28-why-dont-you-do-story-mapping-in-your-agile-projects/index.html",
    "revision": "62f439b643f20148ca8d2d0335f6e51e"
  },
  {
    "url": "posts/2016-03-07-stackoverflow-fun-with-reactjs/index.html",
    "revision": "c4995448910d02909fb7786f73fe008b"
  },
  {
    "url": "posts/2016-04-11-devops-cafe-episode-62-mary-and-tom-poppendieck/index.html",
    "revision": "0956a2f61c06d2acf0703fc5dc1eff02"
  },
  {
    "url": "posts/2016-04-11-procrastinating-by-getting-distracted/index.html",
    "revision": "cca258db252237c7cf275283724a4369"
  },
  {
    "url": "posts/2016-04-17-the-project-management-triangle-must-die/index.html",
    "revision": "8c067eb1d7acee3ae1295803e8ccaa21"
  },
  {
    "url": "posts/2016-04-18-i-added-rss/index.html",
    "revision": "cbd68f661941d9f1c5a7a77a5c9c3fc8"
  },
  {
    "url": "posts/2016-06-11-agile-info/index.html",
    "revision": "4c015291970c8d21f439537e3aacb7bc"
  },
  {
    "url": "posts/2016-06-19-here-it-comes/index.html",
    "revision": "38284ac9f547e4473178132337baa77b"
  },
  {
    "url": "posts/2016-07-16-afh-042-the-grows-method-for-adopting-agile-software-develpoment-podcast/index.html",
    "revision": "1576edcf31e076670b5b7aa62fedf19b"
  },
  {
    "url": "posts/2016-07-29-scrum-guide-refresh-july-2016/index.html",
    "revision": "2f67631f0b8075b5a5779ac7ff61354f"
  },
  {
    "url": "posts/2016-08-07-coaching-agile-teams-a-companion-for-scrummasters-agile-coaches-and-project-managers-in-transition-addison-wesley-signature-series-cohn-by-lyssa-adkins-2010/index.html",
    "revision": "7bd83977228af0db66d7c09d7a01259d"
  },
  {
    "url": "posts/2016-08-28-my-personal-map/index.html",
    "revision": "af245dcfb3c90802f0b272cc8a727da0"
  },
  {
    "url": "posts/2016-09-13-afh-043-the-agile-mindset-with-gil-broza/index.html",
    "revision": "b160478955aa64312caa101071725e8f"
  },
  {
    "url": "posts/2016-09-29-scrum-the-art-of-doing-twice-the-work-in-half-the-time-by-jeff-sutherland-2014/index.html",
    "revision": "ed7105a67edaa66ebe76bd73831b2483"
  },
  {
    "url": "posts/2016-10-23-actionable-gamification-beyond-points-badges-and-leaderboards/index.html",
    "revision": "dc46b264a3137bd4f1ee57f1d478548f"
  },
  {
    "url": "posts/2016-11-05-my-reading-routine/index.html",
    "revision": "1cc6519c8fd2f523c20cb0988b036a4d"
  },
  {
    "url": "posts/2016-11-06-drunkenpmradio-having-empathy-for-your-project-w-patrice-colancecco-embry-podcast/index.html",
    "revision": "ef3d3349082ed057a1ba4197ca283a7c"
  },
  {
    "url": "posts/2016-11-06-octalysis-self-deception-cynefin-and-slickyboards-interesting-nov16/index.html",
    "revision": "7f5c6018c9c00870a2ace6d4666656b9"
  },
  {
    "url": "posts/2016-12-19-leadership-and-self-deception-getting-out-of-the-box-by-the-arbinger-institute/index.html",
    "revision": "dec383cf238eb0a8e8b2f4e721a3c947"
  },
  {
    "url": "posts/2017-02-06-the-coaching-habit-say-less-ask-more-change-the-way-you-lead-forever/index.html",
    "revision": "f5e08acd6a09c750a3085a7d99d5bdf1"
  },
  {
    "url": "posts/2017-02-20-do-you-micro-manage-much/index.html",
    "revision": "85db66edda7f09c0809c297b31ea0fb3"
  },
  {
    "url": "posts/2017-03-12-product-vision-and-technical-vision-and-something-extra/index.html",
    "revision": "ade952ba507330beeebc5a869ab43d68"
  },
  {
    "url": "posts/2017-03-19-autonomy-at-work/index.html",
    "revision": "18aa3579401a392a01416dd0d14d6d4b"
  },
  {
    "url": "posts/2017-03-25-habits-and-every-day-work/index.html",
    "revision": "5c5ddd2f2cac67a11c582053e184a105"
  },
  {
    "url": "posts/2017-03-27-mentorship-play-for-the-long-game/index.html",
    "revision": "318334829a3c6bcd6cd07f8980407d8f"
  },
  {
    "url": "posts/2017-04-19-habits-for-reducing-interruptions/index.html",
    "revision": "f1e16b235c93bbad63b6291d8fe15cbe"
  },
  {
    "url": "posts/2017-05-07-agile-is-also-about-people/index.html",
    "revision": "7c5e94daa4a699d89e04b6b0bb7c098e"
  },
  {
    "url": "posts/2017-05-14-the-science-of-enlightenment-how-meditation-works-by-shinzen-young-2016/index.html",
    "revision": "5d8b9fbf47819a27f20d0406cf010790"
  },
  {
    "url": "posts/2017-05-22-teams-are-made-of-people/index.html",
    "revision": "64afd41ee5a2c4827a9ce9557d23dede"
  },
  {
    "url": "posts/2017-06-22-teams-are-made-of-people-summary/index.html",
    "revision": "7213843b04f944f05b03766ea9774ab8"
  },
  {
    "url": "posts/2017-08-06-firefighting-in-software-development/index.html",
    "revision": "af8830411dac10a4e78916bf8f9924a2"
  },
  {
    "url": "posts/2017-08-06-software-down/index.html",
    "revision": "5085c29c890a0d309fe738cb58342610"
  },
  {
    "url": "posts/2017-09-03-radical-candor-be-a-kick-ass-boss-without-losing-your-humanity-by-kim-scott-2017/index.html",
    "revision": "05ca8133f58babc422128bc8ffc45dbd"
  },
  {
    "url": "posts/2017-09-22-software-development-metrics/index.html",
    "revision": "d8bf937b66d96527505470016d46ca44"
  },
  {
    "url": "posts/2017-10-09-lean-agile-scotland-day-1-4-oct-2017/index.html",
    "revision": "a9af7cc0f0b11f5b3d20f908a8df210b"
  },
  {
    "url": "posts/2017-10-12-lean-agile-scotland-day-2-5-oct-2017/index.html",
    "revision": "a631d4e73c3e2f7b174df98268b7abfc"
  },
  {
    "url": "posts/2017-10-15-lean-agile-scotland-day-3-6-oct-2017/index.html",
    "revision": "338a83476917a44db7852f8e568a0979"
  },
  {
    "url": "posts/2018-04-23-three-great-books-to-start-the-year/index.html",
    "revision": "8c4a3bf3d82cb01f04f3af1cc2087278"
  },
  {
    "url": "posts/2018-12-02-accept-gravity-and-let-go-of-your-anchors/index.html",
    "revision": "eebaa812bf5cace1921b7cb065760d8e"
  },
  {
    "url": "posts/2022-02-24-learning-strengths-opportunities/index.html",
    "revision": "78e360b605c9a7e6f128c4b4ad65d090"
  },
  {
    "url": "posts/2022-02-24-live-corporate-preaching/index.html",
    "revision": "d0b0a9a108a89191bae7d85196aac0e4"
  },
  {
    "url": "posts/21/index.html",
    "revision": "006b83e79554204a507312d6f11a2bcf"
  },
  {
    "url": "posts/22/index.html",
    "revision": "0cc0336df6c60cbc0cf4d10855a2253a"
  },
  {
    "url": "posts/23/index.html",
    "revision": "73a353ea461c8b3a64dcc407f1418c1b"
  },
  {
    "url": "posts/24/index.html",
    "revision": "3050d12d55f7980f68d0cfce9569bc5d"
  },
  {
    "url": "posts/25/index.html",
    "revision": "77a8a9b000a913bfb61f4d26dfe92dff"
  },
  {
    "url": "posts/26/index.html",
    "revision": "bdc6639a7a4553e80872cc8ce2b35b8f"
  },
  {
    "url": "posts/27/index.html",
    "revision": "085834aa65cd83351568192858c1bd5f"
  },
  {
    "url": "posts/28/index.html",
    "revision": "5b240c486b5b04dea6ffa3d3a6be6e8e"
  },
  {
    "url": "posts/29/index.html",
    "revision": "6bb0f157a136688a7d999b35fdc83806"
  },
  {
    "url": "posts/3/index.html",
    "revision": "0af1a50a826c02b486b422006f756eef"
  },
  {
    "url": "posts/30/index.html",
    "revision": "339272f36cf9e3fb16c28fbdbbc76c77"
  },
  {
    "url": "posts/31/index.html",
    "revision": "4cc088c898b84f9f755fe782d71aaf23"
  },
  {
    "url": "posts/32/index.html",
    "revision": "51bfdd430a5fab23722e508880ec2f10"
  },
  {
    "url": "posts/33/index.html",
    "revision": "9e0e0d5558adcb3bbc210c233355060f"
  },
  {
    "url": "posts/34/index.html",
    "revision": "f0b43904c4763c3cc85050b542580735"
  },
  {
    "url": "posts/35/index.html",
    "revision": "49dba2a616b170f3f5ca8d7273cb6e03"
  },
  {
    "url": "posts/36/index.html",
    "revision": "5234c1d104680e70570aa3bd7a4a8112"
  },
  {
    "url": "posts/37/index.html",
    "revision": "47a2cbe5631d6508e59c5cb0db6ce16f"
  },
  {
    "url": "posts/38/index.html",
    "revision": "86e660e9def0ee9c8051a51d9d7ba7a0"
  },
  {
    "url": "posts/39/index.html",
    "revision": "4de018ad59ee539349a439ae93563af7"
  },
  {
    "url": "posts/4/index.html",
    "revision": "b2a7cd199240502fc745844de6d8f7c7"
  },
  {
    "url": "posts/40/index.html",
    "revision": "0bb93cfe40b1137d9ee5ca97639d4b66"
  },
  {
    "url": "posts/41/index.html",
    "revision": "c9e624d604be76acd1b62f0036c487d1"
  },
  {
    "url": "posts/42/index.html",
    "revision": "7aee33026efbda094632e519265904df"
  },
  {
    "url": "posts/43/index.html",
    "revision": "7cb860cf79b34d170996a6f033223cb1"
  },
  {
    "url": "posts/44/index.html",
    "revision": "b32d294e7818c4fb207908b6d4e5477b"
  },
  {
    "url": "posts/45/index.html",
    "revision": "a47741521d9f5fc22e60afa9d143c357"
  },
  {
    "url": "posts/46/index.html",
    "revision": "a0be87260835feb7f8fa6a962ec7d2e5"
  },
  {
    "url": "posts/47/index.html",
    "revision": "776515d452136f90c083e78fa96d42e5"
  },
  {
    "url": "posts/48/index.html",
    "revision": "78e79bebd86c8c27448d8923dafe4e1d"
  },
  {
    "url": "posts/49/index.html",
    "revision": "fd6516ad941dd9484b953762bf71c206"
  },
  {
    "url": "posts/5/index.html",
    "revision": "ab16ad3d779c516244e7c0c27fd3770c"
  },
  {
    "url": "posts/50/index.html",
    "revision": "cf25ea2565adb2843a79963617e0ba54"
  },
  {
    "url": "posts/51/index.html",
    "revision": "9585e69bea29cd169b710aa4128b19cc"
  },
  {
    "url": "posts/6/index.html",
    "revision": "726138ac539d3df2fc3ae4e3889831e4"
  },
  {
    "url": "posts/7/index.html",
    "revision": "c57ad5587756ccbea53b05e01138c979"
  },
  {
    "url": "posts/8/index.html",
    "revision": "0db1bc31fd6466325b1574db539d6403"
  },
  {
    "url": "posts/9/index.html",
    "revision": "c3557550118c4354169146c9fd008fbd"
  },
  {
    "url": "posts/index.html",
    "revision": "9466089da98b7d79e41d28fababb61f2"
  },
  {
    "url": "sitemap.html",
    "revision": "846bab196810f32df8d506116cbab935"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "9451922b766bdf925e1dcd7407ca247d"
  },
  {
    "url": "tags/alan-watts/index.html",
    "revision": "c244a38c2ee9ca14490a71d6d0b57fb1"
  },
  {
    "url": "tags/amsterdam/index.html",
    "revision": "d0f04543988e821162485e5965dfb9e7"
  },
  {
    "url": "tags/asciidoc/index.html",
    "revision": "57f8f0750516fd5561396ed3dd6edb5f"
  },
  {
    "url": "tags/attention/index.html",
    "revision": "3233b344d4d1cc801548a12c7ea055ab"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "d3ba682a52fd164bef79ede3a30c0f4b"
  },
  {
    "url": "tags/autonomy/index.html",
    "revision": "87b8f6d39db62e93f37eb2551b7054c9"
  },
  {
    "url": "tags/bandcamp/index.html",
    "revision": "899c2295177f5e61d33b08050ce2a5e2"
  },
  {
    "url": "tags/biking/index.html",
    "revision": "8c8387d4f7204f910bd29fcd0cdfaf0c"
  },
  {
    "url": "tags/birth/index.html",
    "revision": "7017674b4033796b6df38a960c8887cd"
  },
  {
    "url": "tags/bitopia/index.html",
    "revision": "3c2bb0dc53f66033362f7f3c37302163"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "f59fc3f6b78d4f984ee178d9158c8626"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "14db0bfe889d5fd5b181492cdf1181ef"
  },
  {
    "url": "tags/books/index.html",
    "revision": "a870dc74f49bb99258d2a5a9c40b3b6f"
  },
  {
    "url": "tags/budget/index.html",
    "revision": "6dbc21836442978e45445dd64cf6915d"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "43fbe283350dc43764a5b8e3dd145139"
  },
  {
    "url": "tags/client/index.html",
    "revision": "43449c09bbce634e224f7266e920ec8e"
  },
  {
    "url": "tags/coaching/index.html",
    "revision": "a43239caa5bb83bb61f90b59bfc096f5"
  },
  {
    "url": "tags/community/index.html",
    "revision": "a86c9338bb7b1739d2c41b5b43a7c5c8"
  },
  {
    "url": "tags/concurrency/index.html",
    "revision": "0e8002cf8b852985bb57003297f48836"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "1fd610f6101bfec03bddacd9f73fb863"
  },
  {
    "url": "tags/conversations/index.html",
    "revision": "0a17054d9a8c6ad0a869babbe0a4809f"
  },
  {
    "url": "tags/cooking/index.html",
    "revision": "1b6b396e52b0b5bfa5a2d13fc094e448"
  },
  {
    "url": "tags/corporate/index.html",
    "revision": "ccb192dc153d88d7a96db50d633c3293"
  },
  {
    "url": "tags/country-side/index.html",
    "revision": "a04093b8910fef366a383225b15c15a4"
  },
  {
    "url": "tags/customer/index.html",
    "revision": "e5e1eafd3aa4b56586656102edfebbcb"
  },
  {
    "url": "tags/cynefin/index.html",
    "revision": "f5992b2c7bff3380c7545eb3fb3359d0"
  },
  {
    "url": "tags/dadops/index.html",
    "revision": "6cc99d455ec415324425b3bb59c2e90f"
  },
  {
    "url": "tags/deep-work/index.html",
    "revision": "45e91bb5853a765a5d5017d9dcf30929"
  },
  {
    "url": "tags/dependency-injection/index.html",
    "revision": "4ffd6eef7d29389245a96c62d459e273"
  },
  {
    "url": "tags/desirable difficulties/index.html",
    "revision": "e1dbfc7ddd9171a1a2249163bb7461e7"
  },
  {
    "url": "tags/devops/index.html",
    "revision": "048c694e799feaf9f39994f2c1754f89"
  },
  {
    "url": "tags/diigo/index.html",
    "revision": "a394b97c7438d7aee0b5cd05a3eef19f"
  },
  {
    "url": "tags/dinking/index.html",
    "revision": "0f15d7b24b0545acf06b74b92c1708f2"
  },
  {
    "url": "tags/distractions/index.html",
    "revision": "b5435178020d7ae355f172c4ef67d1bc"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "36d78e87e2fc7d39337063869ec73ff1"
  },
  {
    "url": "tags/dropzone/index.html",
    "revision": "ecb047e2834a281954e54804f3457903"
  },
  {
    "url": "tags/edgar-schein/index.html",
    "revision": "c84083a6051a483638e0048892fcd7d0"
  },
  {
    "url": "tags/education/index.html",
    "revision": "850c49c9529c840c0791d2ab4307f4fc"
  },
  {
    "url": "tags/engineering/index.html",
    "revision": "6df0ed89c08640648fe9aa277ac6d1a2"
  },
  {
    "url": "tags/enlightenment/index.html",
    "revision": "c4ef44562fd570d4f395da8fd04ec8e8"
  },
  {
    "url": "tags/firecrackers/index.html",
    "revision": "e163e02bf7f12dacbf672bfc8b4d25ab"
  },
  {
    "url": "tags/fixing-stuff/index.html",
    "revision": "ec36a7a61f1462d4799e27a40f4ee37e"
  },
  {
    "url": "tags/food/index.html",
    "revision": "da040d45afa9f64748b548265fce32b8"
  },
  {
    "url": "tags/frustration/index.html",
    "revision": "b0ba24eb9ae3d410a5d0d569922d17e1"
  },
  {
    "url": "tags/gamification/index.html",
    "revision": "771d85f673769629e89f2dbe4fb4a678"
  },
  {
    "url": "tags/geek/index.html",
    "revision": "dc33d5985764492e293a07eab4e8202a"
  },
  {
    "url": "tags/generosity/index.html",
    "revision": "d62ea6d4c131fcb722ea85b851de7e28"
  },
  {
    "url": "tags/habits/index.html",
    "revision": "eefc59bc213cdbaa8efc05274e8dd643"
  },
  {
    "url": "tags/hope/index.html",
    "revision": "7c18669c3178e793a069b4973ce98767"
  },
  {
    "url": "tags/hot/index.html",
    "revision": "acb6a65f17df3ae76432495d2251a468"
  },
  {
    "url": "tags/idea/index.html",
    "revision": "03a58e244240328869d369692d476132"
  },
  {
    "url": "tags/identity/index.html",
    "revision": "75322fb4b1ba4ea7c498f71b49a3309c"
  },
  {
    "url": "tags/images/index.html",
    "revision": "6337e67d18b9696d5dd5c45c14019df0"
  },
  {
    "url": "tags/index.html",
    "revision": "2b959ac574dcad796b9a9d1a9f96e4b3"
  },
  {
    "url": "tags/interruptions/index.html",
    "revision": "0a6cbb0099ff94c450a8df59bfd875b1"
  },
  {
    "url": "tags/java/index.html",
    "revision": "2020bb10825458d3c11abc058ab4eb17"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "2143df2807b54c7dfeaae0760ad6cd16"
  },
  {
    "url": "tags/jfokus/index.html",
    "revision": "74917954b42aa9955974e0849b35ce17"
  },
  {
    "url": "tags/journalling/index.html",
    "revision": "bc2ded55bf754aee610b9cfca1a1e65f"
  },
  {
    "url": "tags/joy-of-coding/index.html",
    "revision": "ee2f759207e84e4eefa7d9feeca821c5"
  },
  {
    "url": "tags/kindle/index.html",
    "revision": "6fe0227106769f1ba6c4046f9ad44ddf"
  },
  {
    "url": "tags/kubernetes/index.html",
    "revision": "cc2d5cf24b3e951b28c5d32d412159c0"
  },
  {
    "url": "tags/lascot/index.html",
    "revision": "ec1aed3b6eb2dbf335dc89240e170ec3"
  },
  {
    "url": "tags/leadership/index.html",
    "revision": "1ddeac55075fbb11c9d45de69ff3eec8"
  },
  {
    "url": "tags/lean/index.html",
    "revision": "e83c2a20e7c98ddcaacf5b80affe8fda"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "e2918590c84d95877bf4bad8536acd72"
  },
  {
    "url": "tags/lecture/index.html",
    "revision": "2d6a658b34d9db4d42209ee5077d3e7a"
  },
  {
    "url": "tags/life/index.html",
    "revision": "94ce4e86ab3c45038996fa98e009bbc3"
  },
  {
    "url": "tags/management/index.html",
    "revision": "c7f0822064de815274fd6771df1a8705"
  },
  {
    "url": "tags/markdown/index.html",
    "revision": "92c844876142d3fd4077e6af88855c51"
  },
  {
    "url": "tags/me/index.html",
    "revision": "722369d4e2fc73958ac7323600fc3563"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "8030af0d051f465f814dfe3b6976191c"
  },
  {
    "url": "tags/mentalhealth/index.html",
    "revision": "d8681252c11fb975013f44d5bb5c28e6"
  },
  {
    "url": "tags/mentorship/index.html",
    "revision": "639d2b96277a80fd462f5f8afe6915e1"
  },
  {
    "url": "tags/micro-manage/index.html",
    "revision": "6197972f714787b68da671c32e81416a"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "74ffb655b8705d128c5d051d68399d22"
  },
  {
    "url": "tags/minimalistic-blog/index.html",
    "revision": "a87153d752b728910c254b4b17799bf9"
  },
  {
    "url": "tags/mobprogramming/index.html",
    "revision": "d5d66c8a4fe9fcefc0a8534aa6a65e7b"
  },
  {
    "url": "tags/motivation/index.html",
    "revision": "6f803bdd6c0616732efc377c3290335b"
  },
  {
    "url": "tags/moving/index.html",
    "revision": "f91c4dbb94de941924edf79466bc6da7"
  },
  {
    "url": "tags/music/index.html",
    "revision": "930ab8a35e02d09de5a362c68ecaf1cc"
  },
  {
    "url": "tags/myo/index.html",
    "revision": "c1c912dc117a455b6b6d5094e4abedd4"
  },
  {
    "url": "tags/netherlands/index.html",
    "revision": "217e14ed827151f9191b2267049c8308"
  },
  {
    "url": "tags/news/index.html",
    "revision": "54c55de6d58d1aa78b0e50e24c2c75d6"
  },
  {
    "url": "tags/newsletter/index.html",
    "revision": "a46695d47f1a1cebf78f7bfa5a2b0763"
  },
  {
    "url": "tags/no/index.html",
    "revision": "bd8b15bf174fb7b6b7459df9430f7e1b"
  },
  {
    "url": "tags/octopress/index.html",
    "revision": "e9f23e25b0e8d4c3b7af25963572a09d"
  },
  {
    "url": "tags/organizationalchange/index.html",
    "revision": "e0405f47f49181ba7563751417052c79"
  },
  {
    "url": "tags/pebble/index.html",
    "revision": "f67ee8c9834a0d30659eedf11363fd0b"
  },
  {
    "url": "tags/people/index.html",
    "revision": "90d31dfcd051160fe56a482a9b9cc191"
  },
  {
    "url": "tags/personal-development/index.html",
    "revision": "c3a6df0d4a75cda115b97d573b859c2b"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "f20611efe62337b2efd28de8e5a928e9"
  },
  {
    "url": "tags/pipelines/index.html",
    "revision": "037ccfa250f014bf1c7564e4cf50a906"
  },
  {
    "url": "tags/placeholder/index.html",
    "revision": "2e832198f2ff73fe2b0b3b15da917849"
  },
  {
    "url": "tags/planning/index.html",
    "revision": "53e2494ced14e0174ed0ed6a004e5ff3"
  },
  {
    "url": "tags/platform/index.html",
    "revision": "d6cd6d1f9d8058d273c563d0a8610f71"
  },
  {
    "url": "tags/platformengineering/index.html",
    "revision": "fa534d95a235b3c6933d6a74e95f7f67"
  },
  {
    "url": "tags/platforms/index.html",
    "revision": "3dfc83234ba78de1ceaa1c9b649e9219"
  },
  {
    "url": "tags/pocket/index.html",
    "revision": "934e9d82b60c14549b6860792a8e701a"
  },
  {
    "url": "tags/podcast/index.html",
    "revision": "cebfccf7e6c0057808fbf2bfe978e000"
  },
  {
    "url": "tags/podcasts/index.html",
    "revision": "5d68c8a8679cf7637a766d0485b4eda9"
  },
  {
    "url": "tags/practice/index.html",
    "revision": "4d2f135bb5763d78297e90de747f4a17"
  },
  {
    "url": "tags/presentations/index.html",
    "revision": "b5e405e8eb0344cb2941fd1c18eb6d0f"
  },
  {
    "url": "tags/proactive/index.html",
    "revision": "f016ed45a1433d50f5d4bc5db128bcd2"
  },
  {
    "url": "tags/problems/index.html",
    "revision": "3a365a41b1b2729c3cab056d5f025155"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "1b69ef7daad09158b71e74e238cd8c0b"
  },
  {
    "url": "tags/product/index.html",
    "revision": "0eec1510d73939dd1c9f9ecc4ead84bc"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "1d912438a124600cb721080387aae293"
  },
  {
    "url": "tags/project-management/index.html",
    "revision": "6cd701c833fa38ea587c2af9ef730b8e"
  },
  {
    "url": "tags/purpose/index.html",
    "revision": "4f9a8166393fcb5e3bf9529b2a153695"
  },
  {
    "url": "tags/rackspace/index.html",
    "revision": "7aa19af3d14a8a7c1ee6875d0bf77f1b"
  },
  {
    "url": "tags/random/index.html",
    "revision": "7153b70086f3eb46474bf733d4f493a3"
  },
  {
    "url": "tags/reactive/index.html",
    "revision": "c19a5875b6cfe0d92b66feb2ed81ace6"
  },
  {
    "url": "tags/reading/index.html",
    "revision": "ed964a7a23ef2c1e08de47881f3cdbf9"
  },
  {
    "url": "tags/readwise/index.html",
    "revision": "33ef30125883de719f4ac55a1a4edb5a"
  },
  {
    "url": "tags/rescue-time/index.html",
    "revision": "476721b4a983613ef00f2cbd8a54eccb"
  },
  {
    "url": "tags/roamresearch/index.html",
    "revision": "37102d39102e07697cdbb90917556b49"
  },
  {
    "url": "tags/romania/index.html",
    "revision": "e23eeacf09915b0a8ec6857a21cd030a"
  },
  {
    "url": "tags/routine/index.html",
    "revision": "b7dc94678affbc0eb50ceb90a180ceff"
  },
  {
    "url": "tags/ruby/index.html",
    "revision": "1733910ddec0ddb6e5367f7e80517b7e"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "36bd75c13856221a2a128007d3b001d6"
  },
  {
    "url": "tags/scrum/index.html",
    "revision": "1b40dcd5e5bde968e8e3a8f2377f4ae5"
  },
  {
    "url": "tags/self-awareness/index.html",
    "revision": "f2b93885ea279806a8b667149ad4d193"
  },
  {
    "url": "tags/simple/index.html",
    "revision": "2340f9f76e0f9a6e4df12dd1c6c8ad76"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "b31fd35b8aa3df6a4f2769b82297e0dc"
  },
  {
    "url": "tags/slickynotes/index.html",
    "revision": "aba430a30e42af80e73e5691979d5b34"
  },
  {
    "url": "tags/social-media/index.html",
    "revision": "bf17e4a53a0b35b41a919a3f7b2b3faa"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "980113fd966fc6bfda4c1bec30934f05"
  },
  {
    "url": "tags/software-engineering/index.html",
    "revision": "ffb5d7e8a4ffced5106b9889df3f0674"
  },
  {
    "url": "tags/software/index.html",
    "revision": "c23d11d83626d134fbdd1c52a1ffbb03"
  },
  {
    "url": "tags/softwaredevelopment/index.html",
    "revision": "ef61e6ca95eb704902e61d8f135c485f"
  },
  {
    "url": "tags/solutions/index.html",
    "revision": "04c423a6032ef82da0b9ffdd2b0435e6"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "43caaca044056b3d7f5a43d8946329f9"
  },
  {
    "url": "tags/stackoverflow/index.html",
    "revision": "aaa4b0bcf4c1090ed75e0a4088795b37"
  },
  {
    "url": "tags/standing/index.html",
    "revision": "40351e5df60fb7fd65765ebd766b73a0"
  },
  {
    "url": "tags/story-mapping/index.html",
    "revision": "ff090c6ccb0161ca6badc6c6867b6f25"
  },
  {
    "url": "tags/story/index.html",
    "revision": "09073c5c1ef676b8fbc97f5b00941ccf"
  },
  {
    "url": "tags/streaming/index.html",
    "revision": "dec6ddb47eb8afd3ccb45f32e1344933"
  },
  {
    "url": "tags/success/index.html",
    "revision": "42c7451ea0646ae5a402b315095a0e9e"
  },
  {
    "url": "tags/systemsthinking/index.html",
    "revision": "4e511e14b2406541b40bc7e893888f9e"
  },
  {
    "url": "tags/team/index.html",
    "revision": "1b0a761d2c6e01efd420a936b019e52d"
  },
  {
    "url": "tags/technical debt/index.html",
    "revision": "98a37979d836b9aff1a622ceb9f7f7f2"
  },
  {
    "url": "tags/testing/index.html",
    "revision": "d9eb0ef2aabd2ba913bf3cac7779f43b"
  },
  {
    "url": "tags/theboob/index.html",
    "revision": "53ca4e13ccdde3ed909eeddb0555a65d"
  },
  {
    "url": "tags/thebrain/index.html",
    "revision": "b799593990ebfddbade7fde46d51192c"
  },
  {
    "url": "tags/time/index.html",
    "revision": "68c3fe718539d833a7e89c9653888eff"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "3206fa31d61226d6bfdc1aa043485e35"
  },
  {
    "url": "tags/tourist/index.html",
    "revision": "56dd75e294e6f4ec08bd4bb501bff5b7"
  },
  {
    "url": "tags/travelling/index.html",
    "revision": "b607c7e250133b1b20ccc4161464aed4"
  },
  {
    "url": "tags/trust/index.html",
    "revision": "94dedb62ea079452274cf03db932edb9"
  },
  {
    "url": "tags/tutorials/index.html",
    "revision": "5abb2c855cc8c59266ac08f25229d495"
  },
  {
    "url": "tags/type-erasure/index.html",
    "revision": "da544b3c44b030ee98f5a81fc54e3edf"
  },
  {
    "url": "tags/unboxing/index.html",
    "revision": "bbbe15f13ed391d7e3d4c278da7bbbd7"
  },
  {
    "url": "tags/urgency/index.html",
    "revision": "32d0ee7c53f47012d22c5b9536bed876"
  },
  {
    "url": "tags/vacation/index.html",
    "revision": "040fe24d0defe8b62eb8f14835d93e5d"
  },
  {
    "url": "tags/vinyl/index.html",
    "revision": "31fd6e09967932c4cd045fcc5b5bf6f6"
  },
  {
    "url": "tags/vision/index.html",
    "revision": "8ed924f9898cc2e5b2ec844068d6f655"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "518192b0838c749237f1adbdd5b83445"
  },
  {
    "url": "tags/who-am-i/index.html",
    "revision": "300bb2f5e032356bb55666f4bffbdb94"
  },
  {
    "url": "tags/why/index.html",
    "revision": "aafcc4a23e84a9977f1c2ab2048f70ee"
  },
  {
    "url": "tags/work/index.html",
    "revision": "0bbe7d27d47a275993dea4fec6358fc0"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "c4e6fbcc5d13c34641881cdab5d699de"
  },
  {
    "url": "tags/wsl/index.html",
    "revision": "6a2b063bd676ffcf79edf14cf5cd07a5"
  },
  {
    "url": "tags/yourturnchallenge/index.html",
    "revision": "0a837393f1ea953f949001a482876797"
  },
  {
    "url": "tags/zoom/index.html",
    "revision": "651168ec2554ad25f1f1ab94e4191842"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
