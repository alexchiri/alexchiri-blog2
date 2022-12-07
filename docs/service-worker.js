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
    "revision": "ecbe2f99e959a9373a8ed5bc192e6aa0"
  },
  {
    "url": "about/index.html",
    "revision": "014148c9b5b9d686bb1a5772e4a1af94"
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
    "url": "assets/images/helping.jpg",
    "revision": "016da88cb88d202c9793a3a9f6dff5af"
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
    "url": "assets/images/what-why-kubernetes.png",
    "revision": "22870736cd0b96bb469d17bd499a7877"
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
    "revision": "80ca2dbc1c3228aeff7c506bea66fc39"
  },
  {
    "url": "manifest.json",
    "revision": "14b49340fb257839fbcf43ee30fd3be3"
  },
  {
    "url": "posts/1/index.html",
    "revision": "37aff3d9a9f117b143c08207418cd92a"
  },
  {
    "url": "posts/10/index.html",
    "revision": "fab8c656d873b35c7631a72de95c6c80"
  },
  {
    "url": "posts/11/index.html",
    "revision": "c6e91c49a037f0af9a6e00a87c155aa3"
  },
  {
    "url": "posts/12/index.html",
    "revision": "0b8f25242ba532aa72820a748fc13f78"
  },
  {
    "url": "posts/13/index.html",
    "revision": "7fe164564f4eb5ed3988620fff98d8a2"
  },
  {
    "url": "posts/14/index.html",
    "revision": "a66cf6358bb4a61747bb289ea55d22a2"
  },
  {
    "url": "posts/15/index.html",
    "revision": "70e17585b6a87367bd3c2960f90a2276"
  },
  {
    "url": "posts/16/index.html",
    "revision": "184c54789805addab9b063e995662140"
  },
  {
    "url": "posts/17/index.html",
    "revision": "1448d2e57c908f12320cc3765652c43b"
  },
  {
    "url": "posts/18/index.html",
    "revision": "810ed8456f4c97b461d749619d6d3ca1"
  },
  {
    "url": "posts/19/index.html",
    "revision": "194f9e447423ce0762b7f3976e03ef44"
  },
  {
    "url": "posts/2/index.html",
    "revision": "ff753b8ff442957598b62520011dea94"
  },
  {
    "url": "posts/20/index.html",
    "revision": "1cb40cebbbcc348694f7e2520d338334"
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
    "revision": "2bcf5684c2bb73cb0b86f8fc968315c0"
  },
  {
    "url": "posts/2018-12-02-accept-gravity-and-let-go-of-your-anchors/index.html",
    "revision": "d88afafa9a1279276e81a0b085e0da68"
  },
  {
    "url": "posts/2022-02-24-learning-strengths-opportunities/index.html",
    "revision": "06208e911fb7b4e5087e1546897136ad"
  },
  {
    "url": "posts/2022-02-24-live-corporate-preaching/index.html",
    "revision": "ef270b187b5d836498d72478fdbd480d"
  },
  {
    "url": "posts/21/index.html",
    "revision": "0eb8ad0dcda8b5ef564a55627dc677ad"
  },
  {
    "url": "posts/22/index.html",
    "revision": "d39ef23efaf26792bd20c721915c9652"
  },
  {
    "url": "posts/23/index.html",
    "revision": "c64ec479a4dbaeb65d60278de542f5b8"
  },
  {
    "url": "posts/24/index.html",
    "revision": "1fa5607c0a0f127215c03031dcfa41c5"
  },
  {
    "url": "posts/25/index.html",
    "revision": "a03a9d964bfeb3a1a0b3fb387b7ef007"
  },
  {
    "url": "posts/26/index.html",
    "revision": "e83757187e177c47c361485ac054c468"
  },
  {
    "url": "posts/27/index.html",
    "revision": "7d4302444575ed5d55c7f54e80f94d3e"
  },
  {
    "url": "posts/28/index.html",
    "revision": "b414f9de541613efa3b7ebff7cc5bfb5"
  },
  {
    "url": "posts/29/index.html",
    "revision": "e56b74878feffc715365c00da52c25fd"
  },
  {
    "url": "posts/3/index.html",
    "revision": "ec75f97dba80ac66621c84ca4d7d72d2"
  },
  {
    "url": "posts/30/index.html",
    "revision": "2b79b05f110e3a91a78389a205b5baaf"
  },
  {
    "url": "posts/31/index.html",
    "revision": "534fb1cbcbd73fb62bf00f2611dc6ae9"
  },
  {
    "url": "posts/32/index.html",
    "revision": "fbe179514c3fe65bdebe57484e9cab09"
  },
  {
    "url": "posts/33/index.html",
    "revision": "68c97ba43a20c2717ac4542a68cf7f44"
  },
  {
    "url": "posts/34/index.html",
    "revision": "843859de399c6e9ca7e40bf7af405abd"
  },
  {
    "url": "posts/35/index.html",
    "revision": "5f0daae5ce9ca0fbd17a7cd8488c992a"
  },
  {
    "url": "posts/36/index.html",
    "revision": "8acf16a2bf1642e9251b4ba5f3e4e7ae"
  },
  {
    "url": "posts/37/index.html",
    "revision": "bc9e5a30dcf6fc8232d42af5799f3374"
  },
  {
    "url": "posts/38/index.html",
    "revision": "39eff57fc83c2d8099e3023b0167fdf5"
  },
  {
    "url": "posts/39/index.html",
    "revision": "905c026e59ed4f1367f495d9270f7e5c"
  },
  {
    "url": "posts/4/index.html",
    "revision": "4856643d9b8578005b18238ba72a9aa8"
  },
  {
    "url": "posts/40/index.html",
    "revision": "ab3c2950d786b173a553a816b647e38a"
  },
  {
    "url": "posts/41/index.html",
    "revision": "4979775f4f58d067b9feafd479478322"
  },
  {
    "url": "posts/42/index.html",
    "revision": "7b10b38314d1f21071625560cd299f91"
  },
  {
    "url": "posts/43/index.html",
    "revision": "70b3116530ced807ca461636783ff4fb"
  },
  {
    "url": "posts/44/index.html",
    "revision": "a07927a668f59c800942d0dafbc23f19"
  },
  {
    "url": "posts/45/index.html",
    "revision": "630e0307782d7a359bd818cf47b00ed0"
  },
  {
    "url": "posts/46/index.html",
    "revision": "a2071173b68899c4949dce9039a981c7"
  },
  {
    "url": "posts/47/index.html",
    "revision": "66eef5860df686d362a59b1782766f7b"
  },
  {
    "url": "posts/48/index.html",
    "revision": "47c158838766762196e6ee1e9903d957"
  },
  {
    "url": "posts/49/index.html",
    "revision": "bf0803f627dd0ae8595aacf3356afe2b"
  },
  {
    "url": "posts/5/index.html",
    "revision": "e063af24a92850b79e142965960e0c96"
  },
  {
    "url": "posts/50/index.html",
    "revision": "17aeb18bded0b5e6df9ae2a05df2a5ac"
  },
  {
    "url": "posts/51/index.html",
    "revision": "f3b41d3258747acb04aebceddf81fd1f"
  },
  {
    "url": "posts/6/index.html",
    "revision": "6762e7bf6898dde1c29a6c58d698f292"
  },
  {
    "url": "posts/7/index.html",
    "revision": "9a8fef54e3fff18fe5c28a2877a2205d"
  },
  {
    "url": "posts/8/index.html",
    "revision": "97e170da2fc44bba7504655b75d267ee"
  },
  {
    "url": "posts/9/index.html",
    "revision": "68f431e44c3ffdcd1ea0ee74e116c76a"
  },
  {
    "url": "posts/index.html",
    "revision": "63feb0b723cdce77679ba432227b32a7"
  },
  {
    "url": "sitemap.html",
    "revision": "de7008aaec586c5c3333683a6dc03e72"
  },
  {
    "url": "tags/agile/index.html",
    "revision": "fafb3ed3f1b6aaaa4e54cf1819bfb1da"
  },
  {
    "url": "tags/alan-watts/index.html",
    "revision": "793ee355fb036665e97ad0cf81e8a59f"
  },
  {
    "url": "tags/amsterdam/index.html",
    "revision": "07384635c36aa2be599b956b90374587"
  },
  {
    "url": "tags/asciidoc/index.html",
    "revision": "0f5abb2f79d8af93aecb940c2e6881b1"
  },
  {
    "url": "tags/attention/index.html",
    "revision": "c0fb7b8a4ab7813eaa879e1c4a2c09b5"
  },
  {
    "url": "tags/automation/index.html",
    "revision": "dfda7aab5d8b0b3a032b51f3c177b793"
  },
  {
    "url": "tags/autonomy/index.html",
    "revision": "d403df9a7d5be77ed0ce37fee48641da"
  },
  {
    "url": "tags/bandcamp/index.html",
    "revision": "2260e282024531df0d26241b82a4fbd4"
  },
  {
    "url": "tags/biking/index.html",
    "revision": "3fb8f636fdacefd590f1650e423ec920"
  },
  {
    "url": "tags/birth/index.html",
    "revision": "caff270c20904254c62d549ccc205db2"
  },
  {
    "url": "tags/bitopia/index.html",
    "revision": "f52fe2407daef6f7c39f16776f8875f0"
  },
  {
    "url": "tags/blog/index.html",
    "revision": "521b1e3ecfbb075324876fbf9523db08"
  },
  {
    "url": "tags/blogging/index.html",
    "revision": "118e4ed9ac62ef61842e01b935d1fee4"
  },
  {
    "url": "tags/books/index.html",
    "revision": "0e947594790b87f4178dfe0a7bdb9c53"
  },
  {
    "url": "tags/budget/index.html",
    "revision": "017681bd909c34926d23f4ee685f3202"
  },
  {
    "url": "tags/challenge/index.html",
    "revision": "e52e794fffc2eb59fa51a57a1b73bf17"
  },
  {
    "url": "tags/client/index.html",
    "revision": "41e9514da016fb67f1f6f50c064cdd9c"
  },
  {
    "url": "tags/coaching/index.html",
    "revision": "d1de0c73c52fff96d98d0cc771999fcf"
  },
  {
    "url": "tags/community/index.html",
    "revision": "df55f0964854823280bb8dfca15bcc23"
  },
  {
    "url": "tags/concurrency/index.html",
    "revision": "92cf8232bf09e4e7a1354b443ded1da9"
  },
  {
    "url": "tags/conference/index.html",
    "revision": "ccddad0dad31cbf9ee6202d24e9072c4"
  },
  {
    "url": "tags/conversations/index.html",
    "revision": "d747195b52ed96c2c85e4417bfd827da"
  },
  {
    "url": "tags/cooking/index.html",
    "revision": "558d7529430afb3b719449b120cac36c"
  },
  {
    "url": "tags/corporate/index.html",
    "revision": "0d634e88b7013a642cf7e2ef9563c33a"
  },
  {
    "url": "tags/country-side/index.html",
    "revision": "c51acade1b346d530c8554491e4f5fed"
  },
  {
    "url": "tags/customer/index.html",
    "revision": "74e4d14af2a866b231544c3b42127ee7"
  },
  {
    "url": "tags/cynefin/index.html",
    "revision": "143e28bf51c8da3831662b728e3e6a6e"
  },
  {
    "url": "tags/dadops/index.html",
    "revision": "a6ac473eb21e9c630d9be66121278e6f"
  },
  {
    "url": "tags/deep-work/index.html",
    "revision": "3a5f883f3c712ecc85a8c30f0de0c694"
  },
  {
    "url": "tags/dependency-injection/index.html",
    "revision": "c6a23bc66e45b0c40f434163e644085d"
  },
  {
    "url": "tags/desirable difficulties/index.html",
    "revision": "6b8e5ba52907d58a637f80bfa71003b4"
  },
  {
    "url": "tags/devops/index.html",
    "revision": "6c62461dee94781eef9207645ecd46eb"
  },
  {
    "url": "tags/diigo/index.html",
    "revision": "450e6d6356bd54245e2729b7804e562e"
  },
  {
    "url": "tags/dinking/index.html",
    "revision": "c43b05d3235391e68175b443df34777d"
  },
  {
    "url": "tags/distractions/index.html",
    "revision": "1882819b1cc8811c74611d77e3fc4aae"
  },
  {
    "url": "tags/docker/index.html",
    "revision": "7d9c6ab534844bc5b5d4a9f2b3b6a634"
  },
  {
    "url": "tags/dropzone/index.html",
    "revision": "a09c50ffbea81303dd544c5a92a08c31"
  },
  {
    "url": "tags/edgar-schein/index.html",
    "revision": "89a2d48eab730a2b018e7fc5ca47466a"
  },
  {
    "url": "tags/education/index.html",
    "revision": "96fee7b6a27fe62321c1fc86d64856aa"
  },
  {
    "url": "tags/engineering/index.html",
    "revision": "658512d845515019af48963ed189a78e"
  },
  {
    "url": "tags/enlightenment/index.html",
    "revision": "3885be47cc44bde60525c9c158fffa70"
  },
  {
    "url": "tags/firecrackers/index.html",
    "revision": "bd8bbb17628cee01d9805069082ed3db"
  },
  {
    "url": "tags/fixing-stuff/index.html",
    "revision": "0e2a72c1d046574e44f3d031c0e02f68"
  },
  {
    "url": "tags/food/index.html",
    "revision": "ba3ca99b4bd34c9be000e0bf18426ca7"
  },
  {
    "url": "tags/frustration/index.html",
    "revision": "c87e1c38b07958e953dc1a415e05e7ff"
  },
  {
    "url": "tags/gamification/index.html",
    "revision": "0e0ac7d3dac09001a5fd9ed933e71416"
  },
  {
    "url": "tags/geek/index.html",
    "revision": "09b8ed54102a7b12b0f9836f12fb2595"
  },
  {
    "url": "tags/generosity/index.html",
    "revision": "a94390db8e40b1e0797c1af0eedf9073"
  },
  {
    "url": "tags/habits/index.html",
    "revision": "33ef6e3bd66b75236ea6c05089875564"
  },
  {
    "url": "tags/hope/index.html",
    "revision": "925622d1f93ce89e5bacec0cf7704d26"
  },
  {
    "url": "tags/hot/index.html",
    "revision": "c99f0e05d2bed193aaa60f2462c9a34e"
  },
  {
    "url": "tags/idea/index.html",
    "revision": "7201e33f41ab0c477257405e3f13f862"
  },
  {
    "url": "tags/identity/index.html",
    "revision": "7869df2bd4252f40c47794e10fa75128"
  },
  {
    "url": "tags/images/index.html",
    "revision": "e06944b9aadb266c16eacae23e4d31d2"
  },
  {
    "url": "tags/index.html",
    "revision": "06fbc8f595e46b43f33abb15844717c6"
  },
  {
    "url": "tags/interruptions/index.html",
    "revision": "28a3311a5e3ba6952e85f2dfec1b0d61"
  },
  {
    "url": "tags/java/index.html",
    "revision": "b6c5ed1fc45d70a97e62ed72b3a1a9c8"
  },
  {
    "url": "tags/javascript/index.html",
    "revision": "2b283734f1bbecd1d67527859ad1c125"
  },
  {
    "url": "tags/jfokus/index.html",
    "revision": "e8a7a4ab600a774f465fa4f6bfb48d0b"
  },
  {
    "url": "tags/journalling/index.html",
    "revision": "bc9a8765b99622bcd5c19c8ea7f08bbd"
  },
  {
    "url": "tags/joy-of-coding/index.html",
    "revision": "7f4762e5861339f10009fb0a20717e16"
  },
  {
    "url": "tags/kindle/index.html",
    "revision": "7eae15caaedef4c4edc10067a9aec992"
  },
  {
    "url": "tags/kubernetes/index.html",
    "revision": "5628317a5f7d566c5766149544eed7a0"
  },
  {
    "url": "tags/lascot/index.html",
    "revision": "e6f30309c981c30db4ee326b3a6efd94"
  },
  {
    "url": "tags/leadership/index.html",
    "revision": "05ed32d11cc536683040892c2b8e6d0e"
  },
  {
    "url": "tags/lean/index.html",
    "revision": "8e3c1c720119b9fda2a711b172e6b6a4"
  },
  {
    "url": "tags/learning/index.html",
    "revision": "fa1d40e133b77d6c747251492ab34c74"
  },
  {
    "url": "tags/lecture/index.html",
    "revision": "3caaf2b538d40e87356f235c3b711a42"
  },
  {
    "url": "tags/life/index.html",
    "revision": "59800ce30482c68e17f3e52d0aa4ed1c"
  },
  {
    "url": "tags/management/index.html",
    "revision": "a862a5c6f5b271127e00b0daeebb539d"
  },
  {
    "url": "tags/markdown/index.html",
    "revision": "0e47c0dca205afc4f391b509b5be6548"
  },
  {
    "url": "tags/me/index.html",
    "revision": "61c2855b7a0ece3ce8ea0a1a2613d526"
  },
  {
    "url": "tags/meditation/index.html",
    "revision": "5c9437875f2bc6ae1bb210f25867379a"
  },
  {
    "url": "tags/mentalhealth/index.html",
    "revision": "c65888d813b077688886ec4389a60275"
  },
  {
    "url": "tags/mentorship/index.html",
    "revision": "7e8e9a628410cce8bb435a5138f7b410"
  },
  {
    "url": "tags/micro-manage/index.html",
    "revision": "1b7002cf8986cbb8beaf7ce1124aec18"
  },
  {
    "url": "tags/mindfulness/index.html",
    "revision": "64b6eea8bfcbb65a1483629444a96bd2"
  },
  {
    "url": "tags/minimalistic-blog/index.html",
    "revision": "e903fcaf38ea3b79c64995b1dcd9c382"
  },
  {
    "url": "tags/mobprogramming/index.html",
    "revision": "69f51d9b53fcc5730f3bd4d8df1e4802"
  },
  {
    "url": "tags/motivation/index.html",
    "revision": "ebdb2ddd377ce63c664106fd5dc5dd64"
  },
  {
    "url": "tags/moving/index.html",
    "revision": "d7993239f1ab4da4d3d68caac12688ea"
  },
  {
    "url": "tags/music/index.html",
    "revision": "205bb6f70909a20dbbb9daf39135537e"
  },
  {
    "url": "tags/myo/index.html",
    "revision": "792d7645579666e8c0e7976309fd736b"
  },
  {
    "url": "tags/netherlands/index.html",
    "revision": "4af26e969a7508ef2bd0fc3aca561952"
  },
  {
    "url": "tags/news/index.html",
    "revision": "b03821a0a6abe63d052e162960b75221"
  },
  {
    "url": "tags/newsletter/index.html",
    "revision": "68e03ea74935975c45d1419fd6a6ff61"
  },
  {
    "url": "tags/no/index.html",
    "revision": "cd7dc68f6bde08216b2840ec6921bad8"
  },
  {
    "url": "tags/octopress/index.html",
    "revision": "0cf2f1bb84ab584c913a0f242fc1e6cc"
  },
  {
    "url": "tags/organizationalchange/index.html",
    "revision": "23f345b6b1f6e41e83ff0b56998f882c"
  },
  {
    "url": "tags/pebble/index.html",
    "revision": "c7c4e8cc4624b34822070109a867624d"
  },
  {
    "url": "tags/people/index.html",
    "revision": "a4b6417c21b7a41e0f987cb0dc3309c7"
  },
  {
    "url": "tags/personal-development/index.html",
    "revision": "4daef215894b46131d0a6c53a421058c"
  },
  {
    "url": "tags/perspective/index.html",
    "revision": "aa996c49927a47cfe22508d176373131"
  },
  {
    "url": "tags/pipelines/index.html",
    "revision": "e31315ef35b505a02fc0a6ee6fb38576"
  },
  {
    "url": "tags/placeholder/index.html",
    "revision": "9da0f8294e8d309cc9e3643bcd438ad3"
  },
  {
    "url": "tags/planning/index.html",
    "revision": "879a641b7a4a3cd2b94da4ed32aa853c"
  },
  {
    "url": "tags/platform/index.html",
    "revision": "ae81df93b8931df6c2312492f28c0624"
  },
  {
    "url": "tags/platformengineering/index.html",
    "revision": "18d365da05ffd5ddbf17fb77f4531cbd"
  },
  {
    "url": "tags/platforms/index.html",
    "revision": "3cf312d3b2bea51888f78c51e7948ba1"
  },
  {
    "url": "tags/pocket/index.html",
    "revision": "0639ef0e397dc171a2e7a1883ad9fed2"
  },
  {
    "url": "tags/podcast/index.html",
    "revision": "60504a0ad5277c471a4ec0ad99545617"
  },
  {
    "url": "tags/podcasts/index.html",
    "revision": "cbca0fb13ec468b646289f6b8b94d043"
  },
  {
    "url": "tags/practice/index.html",
    "revision": "762b2eb6712b3595bcb20c9a2fff1240"
  },
  {
    "url": "tags/presentations/index.html",
    "revision": "2b676c820fcc952a56369e36cb7cd7fb"
  },
  {
    "url": "tags/proactive/index.html",
    "revision": "34bf907fd3198604ca5d546194dd0825"
  },
  {
    "url": "tags/problems/index.html",
    "revision": "188ffb87a4004902c180dba861974f98"
  },
  {
    "url": "tags/procrastination/index.html",
    "revision": "fe672060ece427e651b459e0104c75f3"
  },
  {
    "url": "tags/product/index.html",
    "revision": "53ccc33dadc4e2f40f3090a14326b41c"
  },
  {
    "url": "tags/productivity/index.html",
    "revision": "6e2bddb1e85416a3d45480830da10b02"
  },
  {
    "url": "tags/project-management/index.html",
    "revision": "dff0ce6d1628852bcf15dfea856d067a"
  },
  {
    "url": "tags/purpose/index.html",
    "revision": "8f665553053738befe901c7b387cb321"
  },
  {
    "url": "tags/rackspace/index.html",
    "revision": "b9b140b58bb27221c8ab528b53f109ea"
  },
  {
    "url": "tags/random/index.html",
    "revision": "8c9ff6b6e1c99ee6652a553ed0bcaaf1"
  },
  {
    "url": "tags/reactive/index.html",
    "revision": "df7c402a64756e3aea1517481203e23d"
  },
  {
    "url": "tags/reading/index.html",
    "revision": "68bbd0ff9cf3bd2b1da32e1c9108174b"
  },
  {
    "url": "tags/readwise/index.html",
    "revision": "a721019f915ac6819e69a178bc9a421a"
  },
  {
    "url": "tags/rescue-time/index.html",
    "revision": "27b56835eda77f29ab99218971f38e0a"
  },
  {
    "url": "tags/roamresearch/index.html",
    "revision": "bdae47709b061a00d60964897e73de9f"
  },
  {
    "url": "tags/romania/index.html",
    "revision": "7eb09bff9b1286c7b94a2a7619f50b51"
  },
  {
    "url": "tags/routine/index.html",
    "revision": "62a85cf176617cb01ca1421e8d8fde0d"
  },
  {
    "url": "tags/ruby/index.html",
    "revision": "b0e149bf03ba71565e2c63fb7a9d431a"
  },
  {
    "url": "tags/scope/index.html",
    "revision": "9af9bff155c38fc8c06a31cba1c88866"
  },
  {
    "url": "tags/scrum/index.html",
    "revision": "56677b352868012ed901bb0f2813a1c5"
  },
  {
    "url": "tags/self-awareness/index.html",
    "revision": "7a222e1538946815e88892b7de1acc05"
  },
  {
    "url": "tags/simple/index.html",
    "revision": "7807de5d90ea6233b415ab2a8b4e7608"
  },
  {
    "url": "tags/sleep/index.html",
    "revision": "5e8c13ee117189fdd432fe025887b52d"
  },
  {
    "url": "tags/slickynotes/index.html",
    "revision": "0bd0ef79d938a52b3e4fe59e2c978953"
  },
  {
    "url": "tags/social-media/index.html",
    "revision": "486127e5b34a359f8dbd529ea2474fd2"
  },
  {
    "url": "tags/software-development/index.html",
    "revision": "cd48cf83294c8c3956f5fdfb67ea72b3"
  },
  {
    "url": "tags/software-engineering/index.html",
    "revision": "2e09da3136c64d9d008253b90aab9115"
  },
  {
    "url": "tags/software/index.html",
    "revision": "4f1dc7c3359da4a007248b1875531a3d"
  },
  {
    "url": "tags/softwaredevelopment/index.html",
    "revision": "473020672d6ad298e9bb7cb02aa25820"
  },
  {
    "url": "tags/solutions/index.html",
    "revision": "8344ae6e216ddf85ebc9c84ce5fecb4c"
  },
  {
    "url": "tags/spotify/index.html",
    "revision": "f398d12c3f3b0bb7076b2a0a20c2c56e"
  },
  {
    "url": "tags/stackoverflow/index.html",
    "revision": "c6fa0817ac8d9945cca067de1cda8ab8"
  },
  {
    "url": "tags/standing/index.html",
    "revision": "f4d5f7572e5fd94be17635cf7bd52f1d"
  },
  {
    "url": "tags/story-mapping/index.html",
    "revision": "d64e4b26b59667c8b738332b370caa2c"
  },
  {
    "url": "tags/story/index.html",
    "revision": "99480331093ac6c46158bb302d651535"
  },
  {
    "url": "tags/streaming/index.html",
    "revision": "6e04f0e00779de54e220f24fdf53d2c6"
  },
  {
    "url": "tags/success/index.html",
    "revision": "e821e426f1bb245ba21bebcbf79afa5b"
  },
  {
    "url": "tags/systemsthinking/index.html",
    "revision": "e691e4e6ffeceb205460ac98cb8dd2df"
  },
  {
    "url": "tags/team/index.html",
    "revision": "e43b40137ae459e33100f66e7c6e18df"
  },
  {
    "url": "tags/technical debt/index.html",
    "revision": "cd5e3799675c6f23d8a8ca56c1a809ad"
  },
  {
    "url": "tags/testing/index.html",
    "revision": "c954211fbb50e1128ac63b3907ce2b84"
  },
  {
    "url": "tags/theboob/index.html",
    "revision": "b60a33bf5dc932995a7eb0216af9e17b"
  },
  {
    "url": "tags/thebrain/index.html",
    "revision": "a9aa3bcf2cfd6b3315d8b01e88d90977"
  },
  {
    "url": "tags/time/index.html",
    "revision": "7343165490c0d4c90a346ebd5ad0eb27"
  },
  {
    "url": "tags/tools/index.html",
    "revision": "b1608f1376f48515fd5284f72b6beea3"
  },
  {
    "url": "tags/tourist/index.html",
    "revision": "2ac1fe3c0834f3b2c85faf489ebd2b12"
  },
  {
    "url": "tags/travelling/index.html",
    "revision": "803f78e6c067a9355d45da82af3b9739"
  },
  {
    "url": "tags/trust/index.html",
    "revision": "884ec687b571ce5ae83503d8de84bc75"
  },
  {
    "url": "tags/tutorials/index.html",
    "revision": "8488875bbc7129db06f44819303e5798"
  },
  {
    "url": "tags/type-erasure/index.html",
    "revision": "497f4f32803452ee259e54dabd135bae"
  },
  {
    "url": "tags/unboxing/index.html",
    "revision": "d9b3f57a5ba3a41aebd5e786e57b25d6"
  },
  {
    "url": "tags/urgency/index.html",
    "revision": "852cb0808698d0e88d4f73b0b48ceadd"
  },
  {
    "url": "tags/vacation/index.html",
    "revision": "5e637543975adda70efc2662dc294714"
  },
  {
    "url": "tags/vinyl/index.html",
    "revision": "a48042acbbd09804e61f207ee68d21e2"
  },
  {
    "url": "tags/vision/index.html",
    "revision": "0d76e129dc6b4a4b58b302a13c0e82d5"
  },
  {
    "url": "tags/vscode/index.html",
    "revision": "d8006c610da5a88b4a5bff951d0c8944"
  },
  {
    "url": "tags/who-am-i/index.html",
    "revision": "1dc30482a678524011a3e39377c4e17d"
  },
  {
    "url": "tags/why/index.html",
    "revision": "5c4e8007ae25f57f4a918ef2705f63da"
  },
  {
    "url": "tags/work/index.html",
    "revision": "e0b4cb5160f47d7cd31c808dcc334003"
  },
  {
    "url": "tags/writing/index.html",
    "revision": "5c92910850ad81db9c440efabda0aeda"
  },
  {
    "url": "tags/wsl/index.html",
    "revision": "19cd0c6bd941f1ecc6bbe96ac2906c2c"
  },
  {
    "url": "tags/yourturnchallenge/index.html",
    "revision": "8c397eb827478077489ce23809d1bf41"
  },
  {
    "url": "tags/zoom/index.html",
    "revision": "827ae1077afd018854b72d257ab79310"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
