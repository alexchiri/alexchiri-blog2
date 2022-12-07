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
    "revision": "9a7c8defd230820eeafc84e5373613ef"
  },
  {
    "url": "about/index.html",
    "revision": "cb773447abc4e5577eee985329ed8f13"
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
    "url": "assets/images/Depositphotos_10732016_S-480.webp",
    "revision": "603c7add1511dcb63a6283f891016ec4"
  },
  {
    "url": "assets/images/Depositphotos_10732016_S-960.webp",
    "revision": "fd75fd0103c51485794aae1f0084aefa"
  },
  {
    "url": "assets/images/Depositphotos_10732016_S.jpg",
    "revision": "787e90cd681dece04356d4f7b0f32e28"
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
    "url": "assets/images/planning-practice-480.webp",
    "revision": "d23459874bbaca3f15e2b2ffd74fee83"
  },
  {
    "url": "assets/images/planning-practice-960.webp",
    "revision": "c2b7c8b4188f52c30dd0b711e84b7324"
  },
  {
    "url": "assets/images/planning-practice.png",
    "revision": "f33a3bd7e6c79dfea1338e789a8b0a20"
  },
  {
    "url": "assets/images/planning-theory-480.webp",
    "revision": "e11a565fc788178c856ce834e513697a"
  },
  {
    "url": "assets/images/planning-theory-960.webp",
    "revision": "25666a6161428e035858bc7232e8d5b0"
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
    "revision": "1b654adaea07fbab6b24fcd38f0778e4"
  },
  {
    "url": "manifest.json",
    "revision": "14b49340fb257839fbcf43ee30fd3be3"
  },
  {
    "url": "posts/1/index.html",
    "revision": "49f2ecfdf70c0162484c2e919b53d873"
  },
  {
    "url": "posts/10/index.html",
    "revision": "9f9e97605c8e2b4aea74090038fe1c9c"
  },
  {
    "url": "posts/11/index.html",
    "revision": "550e02fbf773d9930ed9c8f8b764925d"
  },
  {
    "url": "posts/12/index.html",
    "revision": "2ca0f0b4c3b90821c9f7d26aba0460cd"
  },
  {
    "url": "posts/13/index.html",
    "revision": "9a6120038be9f95f006953ec969198f9"
  },
  {
    "url": "posts/14/index.html",
    "revision": "0c0bbfa73efcef2a88371ae37b09224b"
  },
  {
    "url": "posts/15/index.html",
    "revision": "c6b19e2e4f4fdea74ba03fe8bab76df7"
  },
  {
    "url": "posts/16/index.html",
    "revision": "b3a2f9b78bd9ec86cb2ff7ca136c2a48"
  },
  {
    "url": "posts/17/index.html",
    "revision": "cb21cd85cf379380939e2986b38ae160"
  },
  {
    "url": "posts/18/index.html",
    "revision": "ac4fb683bcfcc62de2dbedcb793abaff"
  },
  {
    "url": "posts/19/index.html",
    "revision": "95b60f293ebe9f603de485916b5a5ff3"
  },
  {
    "url": "posts/2/index.html",
    "revision": "9cf325893e5d473ae89e1f84bd8e6102"
  },
  {
    "url": "posts/20/index.html",
    "revision": "6606c4a9ed334467e3a97b56fd5542e6"
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
    "revision": "10cee5b7ce1d87524effed018fcf4496"
  },
  {
    "url": "posts/2018-12-02-accept-gravity-and-let-go-of-your-anchors/index.html",
    "revision": "b7391481d128e7f91ddb6ecd08778fb0"
  },
  {
    "url": "posts/2022-02-24-learning-strengths-opportunities/index.html",
    "revision": "cfb10b884a527f1991cd4982258d8bfc"
  },
  {
    "url": "posts/2022-02-24-live-corporate-preaching/index.html",
    "revision": "8e0653bfaf6d81ee3a71a14f5921236e"
  },
  {
    "url": "posts/21/index.html",
    "revision": "817744f461229c50346580b828d0ced4"
  },
  {
    "url": "posts/22/index.html",
    "revision": "3d77cd941fd469e4f8747ea256f563a2"
  },
  {
    "url": "posts/23/index.html",
    "revision": "ed82e9de60b31116a8aed01aa8af81f4"
  },
  {
    "url": "posts/24/index.html",
    "revision": "bed7c2a4fc54a95b1e12464a73b170ec"
  },
  {
    "url": "posts/25/index.html",
    "revision": "988caa1b1974f34fa32f638b3219f188"
  },
  {
    "url": "posts/26/index.html",
    "revision": "b92552480a7ee4326b4cf7e66ccc65ee"
  },
  {
    "url": "posts/27/index.html",
    "revision": "2b103648f588bb2ca13510b6678e0e57"
  },
  {
    "url": "posts/28/index.html",
    "revision": "510e5f064cd0e5f95ec3bb722fab019c"
  },
  {
    "url": "posts/29/index.html",
    "revision": "56814dd22bbfe312ccda9244d818a953"
  },
  {
    "url": "posts/3/index.html",
    "revision": "1dbc588f909cc84d6353f881f89a818b"
  },
  {
    "url": "posts/30/index.html",
    "revision": "a8a600d035fe400d2b7d64b65af6a8f9"
  },
  {
    "url": "posts/31/index.html",
    "revision": "a1c8a9ec1d5dff13f1a6114338b8539e"
  },
  {
    "url": "posts/32/index.html",
    "revision": "0a67a5611c2dc89fa1af76e698023392"
  },
  {
    "url": "posts/33/index.html",
    "revision": "3924bcf411f61161e161bdab6062b6c1"
  },
  {
    "url": "posts/34/index.html",
    "revision": "aaeb0e22e001c9f3c9845066d9b0a7d7"
  },
  {
    "url": "posts/35/index.html",
    "revision": "000cedae9c95d37b998986e4e83038b5"
  },
  {
    "url": "posts/36/index.html",
    "revision": "d15e10720c5a32fdb23f74c3424d8f63"
  },
  {
    "url": "posts/37/index.html",
    "revision": "fd56d52444f36f096af3175a347660d9"
  },
  {
    "url": "posts/38/index.html",
    "revision": "dfbd96aa778a0d8149b6c99117f26dd0"
  },
  {
    "url": "posts/39/index.html",
    "revision": "726df90f400ecabfc5292fe831e2f922"
  },
  {
    "url": "posts/4/index.html",
    "revision": "cf458d31f12d4fc7bdc725cc95f238c1"
  },
  {
    "url": "posts/40/index.html",
    "revision": "ae944d889e75bdee35c1a3aea9d4f46b"
  },
  {
    "url": "posts/41/index.html",
    "revision": "24b54bb141dcb68a31fb1ecc386bf144"
  },
  {
    "url": "posts/42/index.html",
    "revision": "52cd3d52a1b251ca217102e681ed6c3d"
  },
  {
    "url": "posts/43/index.html",
    "revision": "0dc4a3b3f9cf89bb1bab98d4ffe19407"
  },
  {
    "url": "posts/44/index.html",
    "revision": "eebc732154ba06a752bad3abea993b67"
  },
  {
    "url": "posts/45/index.html",
    "revision": "e77db8c4485a0b8f1b23fab905a25479"
  },
  {
    "url": "posts/46/index.html",
    "revision": "cbd52408ce9f1ebfbfce306ca59faa15"
  },
  {
    "url": "posts/47/index.html",
    "revision": "cce96edb9ad636f301e911b333279ea3"
  },
  {
    "url": "posts/48/index.html",
    "revision": "4ff39a205efa6befe5c30cef709adfeb"
  },
  {
    "url": "posts/49/index.html",
    "revision": "05a016360dd30d3b52d11421cc0c5af2"
  },
  {
    "url": "posts/5/index.html",
    "revision": "cc8844e905d93a807668182ce7d224b2"
  },
  {
    "url": "posts/50/index.html",
    "revision": "504f92f4bdc1bda41be7a63817c699a8"
  },
  {
    "url": "posts/51/index.html",
    "revision": "57d75f1660536b96f4bf06f67a188314"
  },
  {
    "url": "posts/6/index.html",
    "revision": "c0ab8fce4bbcb77ced8fcce543596da6"
  },
  {
    "url": "posts/7/index.html",
    "revision": "25ba3b24151ae5f2bf905726914ad450"
  },
  {
    "url": "posts/8/index.html",
    "revision": "f7e71f347749302b0a02a8e10d15edf3"
  },
  {
    "url": "posts/9/index.html",
    "revision": "976395b7bb4c0b55ec6547efec57f87a"
  },
  {
    "url": "posts/index.html",
    "revision": "85d9f4851ce7c16bbd114443a0e672d9"
  },
  {
    "url": "sitemap.html",
    "revision": "45c55ce1d31c78b6800d4f0c4a3742c5"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "ca3e96716eef1221524b6bdfb1d06472"
  },
  {
    "url": "tags/alan-watts/index.html",
    "revision": "e0c4917b71a44c9c9cc31956328a8e26"
  },
  {
    "url": "tags/amsterdam/index.html",
    "revision": "89b322103b1751b254c2c2ea8855ae72"
  },
  {
    "url": "tags/asciidoc/index.html",
    "revision": "1f8d85b05545d5530392d038983ce9ed"
  },
  {
    "url": "tags/attention/index.html",
    "revision": "6a8d45fd2bcf0fea7cb90d4e09d30f18"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "cf1e05dfb1c37a1bc47c684faa934b2d"
  },
  {
    "url": "tags/autonomy/index.html",
    "revision": "11b90d85b902738b49c528a8de2a4810"
  },
  {
    "url": "tags/bandcamp/index.html",
    "revision": "4da2b7c6c1e7629793d4ec8221ce5ea9"
  },
  {
    "url": "tags/biking/index.html",
    "revision": "21f9be10d1009e287a824ba01a3872f1"
  },
  {
    "url": "tags/birth/index.html",
    "revision": "47db6cf172ea271e3a5020ea5ae22d3a"
  },
  {
    "url": "tags/bitopia/index.html",
    "revision": "73ac518bee4864682141c296b150cfe4"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "43fd7edc969e1c19e9a7e6068cc27869"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "3d565c90bab9c25f328f755a278dac8c"
  },
  {
    "url": "tags/books/index.html",
    "revision": "fda1209f485759a0ddff19900715446d"
  },
  {
    "url": "tags/budget/index.html",
    "revision": "bb31a20c277518b1581539a5985ea0ee"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "4faab961455f4bf0aeae36821ff5f052"
  },
  {
    "url": "tags/client/index.html",
    "revision": "a3bacaef2145da892f3d810d267026ad"
  },
  {
    "url": "tags/coaching/index.html",
    "revision": "035f5d9bf6b3ccee50e5507da8689dd7"
  },
  {
    "url": "tags/community/index.html",
    "revision": "6ce703e1e22b5a9643f4c0e2e857146a"
  },
  {
    "url": "tags/concurrency/index.html",
    "revision": "aa46c80344db4dae18bb4bff4807f632"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "9efcd02df555b44d7baeb1542e9bdd92"
  },
  {
    "url": "tags/conversations/index.html",
    "revision": "8c5d8c6c63d071fc8d8f495a7f5c39ef"
  },
  {
    "url": "tags/cooking/index.html",
    "revision": "1f067be8670bf2110f788946285c37c6"
  },
  {
    "url": "tags/corporate/index.html",
    "revision": "9b2659518b4089271072b865070a5915"
  },
  {
    "url": "tags/country-side/index.html",
    "revision": "ca431f69e9b8f925adeef45352827adc"
  },
  {
    "url": "tags/customer/index.html",
    "revision": "67b08ebce9b3666aa63c25e793f92f59"
  },
  {
    "url": "tags/cynefin/index.html",
    "revision": "f6271b0f865a56410bdee90b6ff0249f"
  },
  {
    "url": "tags/dadops/index.html",
    "revision": "bfb112a7062c9c6b8af502e1d5a12ecf"
  },
  {
    "url": "tags/deep-work/index.html",
    "revision": "4b9020e5453dd604be2e80e6e3f70e4b"
  },
  {
    "url": "tags/dependency-injection/index.html",
    "revision": "74af6f645a6d707d9d8c1caf04a37e3b"
  },
  {
    "url": "tags/desirable difficulties/index.html",
    "revision": "bc31a55aab53f3ea01dc610433767944"
  },
  {
    "url": "tags/devops/index.html",
    "revision": "329acc8a678b4a8c867a5133e1e33b49"
  },
  {
    "url": "tags/diigo/index.html",
    "revision": "05b81067dae1e642bdc0d6efb126e43e"
  },
  {
    "url": "tags/dinking/index.html",
    "revision": "0d279f9766477df82a6a890f8c1a81f2"
  },
  {
    "url": "tags/distractions/index.html",
    "revision": "5cd6ea3b3ce3d3a6cc70438f94a1c0c7"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "91974f8b474fe4c6adfbf33079b978d9"
  },
  {
    "url": "tags/dropzone/index.html",
    "revision": "2073c91a00c71290347a15b08208465c"
  },
  {
    "url": "tags/edgar-schein/index.html",
    "revision": "e5273c5bf52fd3b7b4ec0634cb5df98d"
  },
  {
    "url": "tags/education/index.html",
    "revision": "5719ad0c8bfe4a1cae94ff7697a1f7c5"
  },
  {
    "url": "tags/engineering/index.html",
    "revision": "22f60664cef98e4a4c750df582b20410"
  },
  {
    "url": "tags/enlightenment/index.html",
    "revision": "b40d70a837ebb95b39928e27cf522d17"
  },
  {
    "url": "tags/firecrackers/index.html",
    "revision": "8d22c23701777697012035ed67667b05"
  },
  {
    "url": "tags/fixing-stuff/index.html",
    "revision": "0677aca158ef62d4038b835f5e26d462"
  },
  {
    "url": "tags/food/index.html",
    "revision": "27c066925408dba6beaa90ef0119c043"
  },
  {
    "url": "tags/frustration/index.html",
    "revision": "9a3b51f6d95621dcd4b49aace8536989"
  },
  {
    "url": "tags/gamification/index.html",
    "revision": "9dcb1bd6514efacff7226a2c2b0bb770"
  },
  {
    "url": "tags/geek/index.html",
    "revision": "c3520ae8124d262c1cb1d4368140ca77"
  },
  {
    "url": "tags/generosity/index.html",
    "revision": "db90b4ff859bd99f8b5f8eba22ab40ae"
  },
  {
    "url": "tags/habits/index.html",
    "revision": "86ac47dd2ce71ce0a9d182a94ac3d4da"
  },
  {
    "url": "tags/hope/index.html",
    "revision": "fd442526a529492a7bc82794a838f30e"
  },
  {
    "url": "tags/hot/index.html",
    "revision": "c0fe3ff54bc45d6c2c19c35527f0b76a"
  },
  {
    "url": "tags/idea/index.html",
    "revision": "436c08d4efa26ba9deb3c81740ec9b77"
  },
  {
    "url": "tags/identity/index.html",
    "revision": "71b243e49a587f30b786f12da0b5d561"
  },
  {
    "url": "tags/images/index.html",
    "revision": "fe03ac054c2798450e795868500208b0"
  },
  {
    "url": "tags/index.html",
    "revision": "a9253f4b50813313eddc93c5eda78108"
  },
  {
    "url": "tags/interruptions/index.html",
    "revision": "241f62c780d18949e70b28219b17cfa5"
  },
  {
    "url": "tags/java/index.html",
    "revision": "f73bd47a663befd092251d68d3a671fd"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "74c7e2676773180404cd7ed56f7c3f62"
  },
  {
    "url": "tags/jfokus/index.html",
    "revision": "5526dd08b751eff62eb20e45621b884b"
  },
  {
    "url": "tags/journalling/index.html",
    "revision": "dcc805b69482a1f68fb70333cca3f008"
  },
  {
    "url": "tags/joy-of-coding/index.html",
    "revision": "f39fe233da1844528891834b3c8983af"
  },
  {
    "url": "tags/kindle/index.html",
    "revision": "167366494110f3fa89aa3e8cb0467f21"
  },
  {
    "url": "tags/kubernetes/index.html",
    "revision": "3875f2d0545e7d7780b8056eafb113bc"
  },
  {
    "url": "tags/lascot/index.html",
    "revision": "afabece9b15113f800f0c1033f62ebcf"
  },
  {
    "url": "tags/leadership/index.html",
    "revision": "f1943ab8a2c448a5bdb6485a9c52527b"
  },
  {
    "url": "tags/lean/index.html",
    "revision": "5536632dd66464eced7f18670eae05ff"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "9e9c76663c398d41a056238b7ada88cc"
  },
  {
    "url": "tags/lecture/index.html",
    "revision": "25189cb6dd348607078898fe178407c5"
  },
  {
    "url": "tags/life/index.html",
    "revision": "578295b225b176492a4e60cd7855d54c"
  },
  {
    "url": "tags/management/index.html",
    "revision": "833099f6df309b89b5aa6e9c1039a25a"
  },
  {
    "url": "tags/markdown/index.html",
    "revision": "58fa3273ccfe49af2f63b007cbb4e32b"
  },
  {
    "url": "tags/me/index.html",
    "revision": "ce81b001baafc5339f0076307b13158e"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "4092385f64f4aff6eb1752c004b9b0ad"
  },
  {
    "url": "tags/mentalhealth/index.html",
    "revision": "a24afecb36cd6914e0e94d15220f6e01"
  },
  {
    "url": "tags/mentorship/index.html",
    "revision": "e2c5bab3a21cc8a49f2f3b719135ac54"
  },
  {
    "url": "tags/micro-manage/index.html",
    "revision": "fa082bf170ce0c9676cb527ace7f0133"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "7fd42193835886d3e7593dde963f075a"
  },
  {
    "url": "tags/minimalistic-blog/index.html",
    "revision": "92671e539b079805054b977d37d3a511"
  },
  {
    "url": "tags/mobprogramming/index.html",
    "revision": "5477714aaed80a58b182a86c0f89a852"
  },
  {
    "url": "tags/motivation/index.html",
    "revision": "9c4b8675d412d6305e33b6b05d52c37f"
  },
  {
    "url": "tags/moving/index.html",
    "revision": "e192b3545d4a270ae7e201cdbba4da73"
  },
  {
    "url": "tags/music/index.html",
    "revision": "b7fd0eca0ae8dbbd0fd75c21086620a0"
  },
  {
    "url": "tags/myo/index.html",
    "revision": "efd190275f1ac0493dec5a5a0e3c2719"
  },
  {
    "url": "tags/netherlands/index.html",
    "revision": "5d79ad06b28127084a2bc30a417554bc"
  },
  {
    "url": "tags/news/index.html",
    "revision": "b38c7806a6241a43921ac2f98625f270"
  },
  {
    "url": "tags/newsletter/index.html",
    "revision": "6fdc22b42942cc4a5b873aaf833298f5"
  },
  {
    "url": "tags/no/index.html",
    "revision": "d22d98543a231455771d88aa10771d83"
  },
  {
    "url": "tags/octopress/index.html",
    "revision": "89ebf9b4aaf26277b406247110eb7a5c"
  },
  {
    "url": "tags/organizationalchange/index.html",
    "revision": "fe3f7e1dff5a20d245be5c1546860978"
  },
  {
    "url": "tags/pebble/index.html",
    "revision": "fc46043c2b8b7085d33bbdea5476505a"
  },
  {
    "url": "tags/people/index.html",
    "revision": "0657b19e88141695f7b739bba9a9b7b1"
  },
  {
    "url": "tags/personal-development/index.html",
    "revision": "2782c7c0f782e571a7267ed7399de9e8"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "56ae686d4f8879b22436d4c8ceb598ac"
  },
  {
    "url": "tags/pipelines/index.html",
    "revision": "bb86824c86a850913c29a80064a66750"
  },
  {
    "url": "tags/placeholder/index.html",
    "revision": "3557ec58a5bbd81431ec6b105ccffe32"
  },
  {
    "url": "tags/planning/index.html",
    "revision": "39a89bf307a25679e7a26d042898122e"
  },
  {
    "url": "tags/platform/index.html",
    "revision": "f4e6e43f3c0ffc64ef10abcaff59092a"
  },
  {
    "url": "tags/platformengineering/index.html",
    "revision": "9c3fd4205c99603a8f62365944b4f4f5"
  },
  {
    "url": "tags/platforms/index.html",
    "revision": "c0eda4c571b3f388706582e8e2c97467"
  },
  {
    "url": "tags/pocket/index.html",
    "revision": "5984a07cd0370cb42b948137ee8955f9"
  },
  {
    "url": "tags/podcast/index.html",
    "revision": "767c83b7e9b9cb12050d68e0b5ff4b03"
  },
  {
    "url": "tags/podcasts/index.html",
    "revision": "96bd4881448fbde906509c8c8cffaa69"
  },
  {
    "url": "tags/practice/index.html",
    "revision": "211ad452c081c7805f90c51fee03f50a"
  },
  {
    "url": "tags/presentations/index.html",
    "revision": "1610000503c02e71cbd423c85ff99abc"
  },
  {
    "url": "tags/proactive/index.html",
    "revision": "7e9c4db5dc35b4135710a1ad44bc0e1c"
  },
  {
    "url": "tags/problems/index.html",
    "revision": "d7c38c7fa9b004b95cc3ed5cadd85997"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "282f9c173156cf99a92ec9f980515cf0"
  },
  {
    "url": "tags/product/index.html",
    "revision": "e56f9c0715e405bf9435d409ea90e421"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "d784c33f37ad1a74f76cd50c8f1a74a2"
  },
  {
    "url": "tags/project-management/index.html",
    "revision": "8208f5101c657ddd96435abc15e205c4"
  },
  {
    "url": "tags/purpose/index.html",
    "revision": "26068a3c1d3fae3f869e8b5d36a9077a"
  },
  {
    "url": "tags/rackspace/index.html",
    "revision": "f6bf908812024097b2799bf393d1074c"
  },
  {
    "url": "tags/random/index.html",
    "revision": "c212a4e72e82f819be324794fb5d5ccc"
  },
  {
    "url": "tags/reactive/index.html",
    "revision": "9914e33c9807df7cccf951c2c202d3a7"
  },
  {
    "url": "tags/reading/index.html",
    "revision": "7ba25abe309b7a11f9da06ce20f5a8b2"
  },
  {
    "url": "tags/readwise/index.html",
    "revision": "8fa91c713d6a8391de4193ca49b57624"
  },
  {
    "url": "tags/rescue-time/index.html",
    "revision": "734b00f5b970f28fa860b977f841d991"
  },
  {
    "url": "tags/roamresearch/index.html",
    "revision": "0e6441026b436ebcc7b7a57548194d61"
  },
  {
    "url": "tags/romania/index.html",
    "revision": "8b5ae11d2b4dfac4f09a874a76028245"
  },
  {
    "url": "tags/routine/index.html",
    "revision": "0523cc7b01ec62254165ad56aa22a663"
  },
  {
    "url": "tags/ruby/index.html",
    "revision": "6eae4078ee06545b43a92923a67c1f65"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "b382251420a819b5ee8a369a31af7444"
  },
  {
    "url": "tags/scrum/index.html",
    "revision": "6510fdd6281ad5221ccd316fc33bb600"
  },
  {
    "url": "tags/self-awareness/index.html",
    "revision": "5e5312c32ae7ea8fb5a5ff94b6fdb80b"
  },
  {
    "url": "tags/simple/index.html",
    "revision": "3c700e3f8091e29afef698f89c7aa1f1"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "533ab516d2964f0d521fd6e242ac5589"
  },
  {
    "url": "tags/slickynotes/index.html",
    "revision": "d9ef39f2c9badf79f208665902915a40"
  },
  {
    "url": "tags/social-media/index.html",
    "revision": "617d213396f371ee95ee07ba5301cbe9"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "9dfa96fb996a9ed34121045ec42d899c"
  },
  {
    "url": "tags/software-engineering/index.html",
    "revision": "a7b9f131fc82a7f00c24133f6f3a58a1"
  },
  {
    "url": "tags/software/index.html",
    "revision": "47e665a5466ce5fd2c3d750ed0e569e7"
  },
  {
    "url": "tags/softwaredevelopment/index.html",
    "revision": "d9d6aa72fe21641db6292df514a91e25"
  },
  {
    "url": "tags/solutions/index.html",
    "revision": "a346910ee9a450ef83b6fe7aafbd30e6"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "bf00f5f8af9169f2160be354fec04276"
  },
  {
    "url": "tags/stackoverflow/index.html",
    "revision": "30b926612010cc019c4c8e868b9e7ea4"
  },
  {
    "url": "tags/standing/index.html",
    "revision": "900ca7cc9f379aadc1213fd83a1ab76f"
  },
  {
    "url": "tags/story-mapping/index.html",
    "revision": "2872dc59f2a28672dc7a069fc772f5be"
  },
  {
    "url": "tags/story/index.html",
    "revision": "bf4b1513e959d0b9e5d108c152145ec2"
  },
  {
    "url": "tags/streaming/index.html",
    "revision": "cea013f475714e97e08f4a358da2b9b0"
  },
  {
    "url": "tags/success/index.html",
    "revision": "b19686b164afe1b815f08f2e493abae0"
  },
  {
    "url": "tags/systemsthinking/index.html",
    "revision": "d81c847847c2699e0d409546074a4d54"
  },
  {
    "url": "tags/team/index.html",
    "revision": "2bf8c406cc51dc9e96e2f6b7927fbaac"
  },
  {
    "url": "tags/technical debt/index.html",
    "revision": "7b53ab6d462ed66c3f04d58c495f5f07"
  },
  {
    "url": "tags/testing/index.html",
    "revision": "a54bd7660e4f6bb53cea8ff1eaad9765"
  },
  {
    "url": "tags/theboob/index.html",
    "revision": "ef80a654810a5cbc94de5faf9788188d"
  },
  {
    "url": "tags/thebrain/index.html",
    "revision": "c35776297ddffea7b6d7995a7c5069a8"
  },
  {
    "url": "tags/time/index.html",
    "revision": "fab46d6d81d5ee88357930923dadd9b4"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "44bded334350554e71d3ee6ad3164ee6"
  },
  {
    "url": "tags/tourist/index.html",
    "revision": "73985c2771a879aacee08210f6f8e4e6"
  },
  {
    "url": "tags/travelling/index.html",
    "revision": "2d1278efdb21d5b2919ffe6e6f25a3a3"
  },
  {
    "url": "tags/trust/index.html",
    "revision": "dd38f78468fc388dd318c43af509b4a1"
  },
  {
    "url": "tags/tutorials/index.html",
    "revision": "f4255e196c793b64cca6e36463ebdd26"
  },
  {
    "url": "tags/type-erasure/index.html",
    "revision": "2aa155bc10afb89e605f17dcec4ab9c4"
  },
  {
    "url": "tags/unboxing/index.html",
    "revision": "99f5a8b9183546f229b833e288eeacc5"
  },
  {
    "url": "tags/urgency/index.html",
    "revision": "8a3158ee6934e15a6f52bf4f38d2af31"
  },
  {
    "url": "tags/vacation/index.html",
    "revision": "bd8c4647c09daf13ac8bce55bed08dc4"
  },
  {
    "url": "tags/vinyl/index.html",
    "revision": "42a7a2f20b9666eafdcadf0423277614"
  },
  {
    "url": "tags/vision/index.html",
    "revision": "b3f2f9a3c496907d05eb217d5aee999c"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "755ab47521b5a7ae23842127d8d4e084"
  },
  {
    "url": "tags/who-am-i/index.html",
    "revision": "ef83b59fbe3e3cfda9b787ed9ae42734"
  },
  {
    "url": "tags/why/index.html",
    "revision": "97ab2a4877d525a9f290bc8b539558b9"
  },
  {
    "url": "tags/work/index.html",
    "revision": "ec43ab16b74a279d0a94f98971f9033d"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "4400f1b2d9a4f15c3c1c651db7efe605"
  },
  {
    "url": "tags/wsl/index.html",
    "revision": "8faf556fb4a9c2fa883d56d443ce981a"
  },
  {
    "url": "tags/yourturnchallenge/index.html",
    "revision": "c7c0e723e6745e86d02c883c1fb62045"
  },
  {
    "url": "tags/zoom/index.html",
    "revision": "8566bfd61f1f397957227e97c0831758"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
