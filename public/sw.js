if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let r={};const t=e=>s(e,i),o={module:{uri:i},exports:r,require:t};a[i]=Promise.all(n.map((e=>o[e]||t(e)))).then((e=>(f(...e),r)))}}define(["./workbox-b6ef1ef0"],(function(e){"use strict";importScripts(),e.setCacheNameDetails({prefix:"my-app-v1"}),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/BhxE_aGqqYCGd6ZGi0lPM/_buildManifest.js",revision:"d03ffc2235cb0c02ab5d8d5ab1a599ff"},{url:"/_next/static/BhxE_aGqqYCGd6ZGi0lPM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/205-4e54fae68a50c2c9.js",revision:"4e54fae68a50c2c9"},{url:"/_next/static/chunks/22a16e0c-c8463ab3c61f8a88.js",revision:"c8463ab3c61f8a88"},{url:"/_next/static/chunks/423-1f41223321d90cf8.js",revision:"1f41223321d90cf8"},{url:"/_next/static/chunks/5c536ecd-2759dcd30939aa8f.js",revision:"2759dcd30939aa8f"},{url:"/_next/static/chunks/83a65157-2be784a278d81578.js",revision:"2be784a278d81578"},{url:"/_next/static/chunks/939-a54373a5c5807279.js",revision:"a54373a5c5807279"},{url:"/_next/static/chunks/aacfa4b6-18c36946c474588d.js",revision:"18c36946c474588d"},{url:"/_next/static/chunks/cb692192-9783d6216be3166c.js",revision:"9783d6216be3166c"},{url:"/_next/static/chunks/da3a2d9b-d76a3a5b22b75cc2.js",revision:"d76a3a5b22b75cc2"},{url:"/_next/static/chunks/framework-69b7533fd8b3f4c6.js",revision:"69b7533fd8b3f4c6"},{url:"/_next/static/chunks/main-b494922e39b7ed20.js",revision:"b494922e39b7ed20"},{url:"/_next/static/chunks/pages/_app-1c6137082d211684.js",revision:"1c6137082d211684"},{url:"/_next/static/chunks/pages/_error-11d404a054049266.js",revision:"11d404a054049266"},{url:"/_next/static/chunks/pages/index-b663748cd8d4e160.js",revision:"b663748cd8d4e160"},{url:"/_next/static/chunks/pages/testi-6e31f3193c3b61d4.js",revision:"6e31f3193c3b61d4"},{url:"/_next/static/chunks/pages/user/login-f87e38c946675d9a.js",revision:"f87e38c946675d9a"},{url:"/_next/static/chunks/pages/user/otp-43c23f9aa670fc0e.js",revision:"43c23f9aa670fc0e"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-586afe0cf1f2bb03.js",revision:"586afe0cf1f2bb03"},{url:"/_next/static/css/e1dbabedf74f4c68.css",revision:"e1dbabedf74f4c68"},{url:"/assets/Images/logo/newLogo.webp",revision:"88c3d9b50789523e9bec436309516ed8"},{url:"/assets/Images/othersPic/camera.png",revision:"d1a33e3fda9f6ef17630dabe5fd29797"},{url:"/assets/Images/servicesType/carService1.png",revision:"424271d96b5b202261240d7e2e96b0e7"},{url:"/assets/Images/servicesType/charge.png",revision:"b40c93be6337c6197a20ce90edfc0f45"},{url:"/assets/Images/servicesType/confirm.png",revision:"887494fcc67c0d63b4dde5095f559c47"},{url:"/assets/Images/servicesType/inquiry.png",revision:"f8cbf5eb550bab96df6269d443de98eb"},{url:"/assets/Images/servicesType/internetBox.png",revision:"26c9aed53d5a2d73ee314297cc20986c"},{url:"/assets/Images/servicesType/transferChain.png",revision:"d2708493164043d6bad61825396b58ed"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Black.woff",revision:"312abfad5c899be452ad641c2f124b8d"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Bold.woff",revision:"b24114f03672b68a312d562507336664"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-DemiBold.woff",revision:"7dd1fef1637140b1b9630b8c9d9deb91"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-ExtraBlack.woff",revision:"446cb69e2465e4399a27d94a38c9553f"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-ExtraBold.woff",revision:"c8c61f2ad25c9c76f3be9ba8b5da2d80"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Heavy.woff",revision:"1873b33132d595c79b52f542f7374cd6"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Light.woff",revision:"62c7e72bee016a7be33e27ffa1bfedf3"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Medium.woff",revision:"88591c66e521e44c7978bc91b48fb20d"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Regular.woff",revision:"243afbfe2dd947007bf26611a35e7f4a"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-Thin.woff",revision:"bd055415ffdb9d930241a49b3bb4f062"},{url:"/assets/fonts/iranyekan/En/woff/IRANYekanXNoEn-UltraLight.woff",revision:"1e2744b0daeb1d6c56a00a0fc414844e"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebBlack.eot",revision:"af1713621ead689195b36d8583ba5c39"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebBold.eot",revision:"e1377b22e6565f889fe948d868c18ac7"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebExtraBlack.eot",revision:"326819e377b713adfa8f15b08e3079b9"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebExtraBold.eot",revision:"e98af4a2f10ff903110712daf0dae2d9"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebLight.eot",revision:"6ea36da469cb32cc09cd0edf0fc22ba2"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebMedium.eot",revision:"695b553a825ea119c5cf28c3dc3f1a4c"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebRegular.eot",revision:"ddc702558edc5050a068a565a7a9acfe"},{url:"/assets/fonts/iranyekan/eot/IRANYekanWebThin.eot",revision:"1aa8ceae119f6eb0a9e2486ef44fb686"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebBlack.ttf",revision:"c81775ad9999590bf9b28a85de224483"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebBold.ttf",revision:"cdd7ed7fff0acb6c28f98ef8f6dfe81d"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebExtraBlack.ttf",revision:"f85eed836a58208f87817539a56cc4de"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebExtraBold.ttf",revision:"c50846b42a5aa3bde87f966d1a934097"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebLight.ttf",revision:"cdb31269eb6e39f82e16a9e13a851e66"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebMedium.ttf",revision:"d9f86d6e01722f77f788296a83e052ea"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebRegular.ttf",revision:"e49ba37182e79878428739bf8222ffd8"},{url:"/assets/fonts/iranyekan/ttf/IRANYekanWebThin.ttf",revision:"5cf240b83a322c1fb7197f5afb1ca59b"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Black.woff",revision:"28a2db085f588da73f0381b5fe4b4458"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Bold.woff",revision:"32b58dbdce215da4b82166d8690f3d4f"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-DemiBold.woff",revision:"5766d029ab1e6a8ac85aae5c7b3aa4b0"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-ExtraBlack.woff",revision:"9cc73d5f7e9d3e279c5ef95260fdbe6b"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-ExtraBold.woff",revision:"219a43935decb7b0a6605ac969c48bfc"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Heavy.woff",revision:"48e171f2d58c2898e55209fa0b59ac34"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Light.woff",revision:"c4110cf68c6e5c721402a420d59539e2"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Medium.woff",revision:"8b96b226ec52210b5d3926e1b41de6aa"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Regular.woff",revision:"c22dfecd8f20b7fd9e570dabca8bb274"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-Thin.woff",revision:"7b467d69329e31a69e14772958281444"},{url:"/assets/fonts/iranyekan/woff/IRANYekanXFaNum-UltraLight.woff",revision:"cae769383a5a2c57966a90772cf34885"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Black.woff2",revision:"3f0dda663b213254a46a875e8c7b1ba9"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Bold.woff2",revision:"87694e4be96f5d0e1a6de74c699f8353"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-DemiBold.woff2",revision:"66049af454d33cd402dbb531ffad9d4a"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-ExtraBlack.woff2",revision:"0b5de0a5080831dcaac014df8989fd23"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-ExtraBold.woff2",revision:"96ab829535f735789d303978762d3188"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Heavy.woff2",revision:"9e2904f5ae2ba57f0a865420cbbd559d"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Light.woff2",revision:"86258fd9358dd8a3312442b42bc329ab"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Medium.woff2",revision:"032dd765fbcbb2f22fb09c52ce3e88ab"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Regular.woff2",revision:"5bf9c7a7c7340515102461c88bb3803e"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-Thin.woff2",revision:"dd67e24e8f587e0b0bf44f818a3d96df"},{url:"/assets/fonts/iranyekan/woff2/IRANYekanXFaNum-UltraLight.woff2",revision:"3adeee40ac50eb49094555dc61aa8a9c"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon-192x192.png",revision:"53ad3d724738f8beee60269fc67057f8"},{url:"/icon-512x512.png",revision:"f6de3f9cd9e06210179804016a7b1edc"},{url:"/manifest.json",revision:"a01ba183689ffd141481331bf3773ea9"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/service-worker.js",revision:"3a815bcd0651338bd2201965512248f8"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/sharifi-pwa.liara.run\/_next\/static\/.*/,new e.CacheFirst({cacheName:"static-assets",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/^https:\/\/sharifi-pwa.liara.run\/.*/,new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/^https:\/\/sharifi-pwa.liara.run\/products\/?.*/,new e.NetworkFirst({cacheName:"testi-pages",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/^https:\/\/sharifi-pwa.liara.run\/posts\/?.*/,new e.NetworkFirst({cacheName:"post-pages",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/^https:\/\/sharifi-pwa.liara.run\/login\/?.*/,new e.NetworkFirst({cacheName:"user-pages",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:86400})]}),"GET")}));
