
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
      "chunk-UIPOOV6G.js",
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
      "chunk-XSCS5IHB.js",
      "chunk-BYN423JF.js",
      "chunk-7JQBER2J.js"
    ],
    "route": "/details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O6UADDLR.js"
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
      "chunk-6IDPLLEZ.js",
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
    'index.csr.html': {size: 27062, hash: '273600a3bc912071f933632ecb42b1960912886701b0c6841392e78e448001b9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21382, hash: '3aded669f5c4e3e9b1cbf4c91ed2e66a60a25afdb5aa9521774380d1056ae827', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 68347, hash: '390c92aa1ee57d575a5fada6df995b8f27a62fb369b4f765b41c8d3cc62ecf0f', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 68139, hash: 'ee54a445f2e6ded12eb7f9d8d3e96ed17dee3f735410e450e668d679346c29c2', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'index.html': {size: 68034, hash: '89ce5ac5e986e2a8175030c19135d0bf517d9c0999974b1c717868acadf4d26d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 68087, hash: '84fb8cc450089cd1e77aeaed08fc39fb4a892cab65c4cd138880a2f38660b349', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 68243, hash: '7fe45b836b27c23d4578e628b2d7d09b4bd2c886a414c7d85e4533cbb279fe2a', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 68139, hash: 'bd6db2b2950c144eb3a42cc4aa4282560432fd57efc3e3b03656dce10c82202d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'signOut/index.html': {size: 68087, hash: '1db413bde4b4bdabc0149ea7eb71786d86430c2c67989b0f0270f3ff307a9388', text: () => import('./assets-chunks/signOut_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 68139, hash: 'cbb7b41d36ffdf1e8ad6c12e35506f0e32ccf7ceb53e2cc33142efd9d3ff0b8b', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 68139, hash: '5eb37d6b5c344a037db5cc057b0e6dfb59bc9e7c9b0cc773dcaac4f5b25e2f77', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'styles-DPW2ZWV2.css': {size: 138209, hash: 't6A+J16h0R4', text: () => import('./assets-chunks/styles-DPW2ZWV2_css.mjs').then(m => m.default)}
  },
};
