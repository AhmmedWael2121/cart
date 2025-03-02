
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RIFVHBW7.js",
      "chunk-G6MNTVAV.js",
      "chunk-BYN423JF.js",
      "chunk-QB55DY5H.js",
      "chunk-7JQBER2J.js",
      "chunk-ESF2JMTS.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HXF2IDUU.js",
      "chunk-G6MNTVAV.js"
    ],
    "route": "/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-IS2DZKF5.js",
      "chunk-BYN423JF.js",
      "chunk-7JQBER2J.js"
    ],
    "route": "/details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JNE3WYRD.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GI73CLRG.js",
      "chunk-ESF2JMTS.js"
    ],
    "route": "/checkout/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CP4O3EAN.js",
      "chunk-QB55DY5H.js",
      "chunk-7JQBER2J.js",
      "chunk-ESF2JMTS.js"
    ],
    "route": "/product"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FHMUDP3R.js",
      "chunk-ESF2JMTS.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-KPH5CKBH.js",
      "chunk-ESF2JMTS.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J6VL7I2W.js"
    ],
    "route": "/signOut"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XRIMZT7H.js",
      "chunk-ESF2JMTS.js"
    ],
    "route": "/forget"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27062, hash: '52c74dd344641d19af82a89ebc5428b938ded5ad8ca48a4670cac6f1a65d1357', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21382, hash: '3a2e10931e574920734195a63b7a50cf0a4c4ed4a5a79be7bc2cac35dddcf2bb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 68347, hash: 'cb6549dd6fd40e8e69c3925aa8dc6ef262a118d9cbda9e0df1b73dda6695144d', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 68034, hash: '24b7f62c2c6cf55ba2b8560a227332bf80cb8a78682f706e9857f90ac55858f3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 68139, hash: '3a62eb1800ae0e30bd713022de83914b684a93a6196a158d51e72a6ff42fce55', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 68087, hash: 'c0fd93fe282fb55280eebb5fe3408adc8f132d8a34e85ec610cf53e17c6ffc6d', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 68243, hash: 'e9bedde3aca7ce71f104c792253fb84046395a76f4cd564f26c20e0d0de5e130', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 68139, hash: '5ee6264c7ab425348dc90dd860fe34a443348646c7d199524244b23ac281b6ae', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signOut/index.html': {size: 68087, hash: '9aa2fdfc621a238fba9cce8349f523a294005fa7468629314a656bf5ef0042a1', text: () => import('./assets-chunks/signOut_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 68139, hash: '0659a6357beda1453fe023ea239ebed7ecb34729c64e24c7b73823b665fc9958', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 68139, hash: 'ded919057342ea250bc5a89b4d9da23040b1f3fd319114588079ee74d447300b', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'styles-DPW2ZWV2.css': {size: 138209, hash: 't6A+J16h0R4', text: () => import('./assets-chunks/styles-DPW2ZWV2_css.mjs').then(m => m.default)}
  },
};
