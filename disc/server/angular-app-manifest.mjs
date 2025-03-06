
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
      "chunk-RGOGVJJ4.js",
      "chunk-6IPU6OO4.js",
      "chunk-MVPNNVWI.js",
      "chunk-5Q4L4KKF.js",
      "chunk-ZCGYBF53.js",
      "chunk-WYI4UBKM.js",
      "chunk-SFKBTL3D.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J2QIPHNU.js",
      "chunk-6IPU6OO4.js"
    ],
    "route": "/categories"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DJ4FBT3P.js",
      "chunk-MVPNNVWI.js",
      "chunk-WYI4UBKM.js"
    ],
    "route": "/details/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V4BLWM6T.js"
    ],
    "route": "/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-A4PZLZGF.js",
      "chunk-SFKBTL3D.js"
    ],
    "route": "/checkout/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-72EANRJ5.js",
      "chunk-5Q4L4KKF.js",
      "chunk-ZCGYBF53.js",
      "chunk-WYI4UBKM.js",
      "chunk-SFKBTL3D.js"
    ],
    "route": "/product"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4YGQ5HML.js",
      "chunk-ZCGYBF53.js"
    ],
    "route": "/wishList"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WTQYLBZL.js",
      "chunk-SFKBTL3D.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FPJTVVDM.js",
      "chunk-SFKBTL3D.js"
    ],
    "route": "/register"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6MKYT3S7.js",
      "chunk-SFKBTL3D.js"
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
    'index.csr.html': {size: 27011, hash: 'aeeec422de3aedda3379bb3cc6c632bb4d5ea57f46715433bb2897f927c91641', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 21331, hash: '525ab69f94df9bdd26fa4b94e67ff334cb6cad64e708677c480162e00b10e313', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48966, hash: '9687b5043153952d437b38dd982035cae18e34a7f3fdd9e9e7c536a731eff1b8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 49331, hash: '3e71e6ff3f12410d9b4fbbdba22f98c4f0a7408dd946f510127153d19b791070', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'cart/index.html': {size: 49019, hash: '36849abe9059130c1448568b6b15439796e122dc1c14c3e27f41fa3de461d934', text: () => import('./assets-chunks/cart_index_html.mjs').then(m => m.default)},
    'categories/index.html': {size: 49071, hash: 'c99c9900f57c7476a07a812603e64a4487d75b4f14b70174109f4c4dfba2a0d3', text: () => import('./assets-chunks/categories_index_html.mjs').then(m => m.default)},
    'product/index.html': {size: 49227, hash: 'ecf20e6b1a1b049680ffc08c8af0e6599c7ea55068f17fdebdb0f1b94fff4a48', text: () => import('./assets-chunks/product_index_html.mjs').then(m => m.default)},
    'wishList/index.html': {size: 49071, hash: '26d6f68fa0a56099b154c118473d0188498ba5938ef08db5b57cc92ba3a18490', text: () => import('./assets-chunks/wishList_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 49071, hash: '9a8d166886514a62d6d1e7624fd1546a35901e40e0b25de94f11d977fad4ee9a', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 49071, hash: '8a9ee7c2e85e17db311f9e8b7f745b8953275d36f12f804729268012495f87a7', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'forget/index.html': {size: 49071, hash: '740923cb5f302c3fd58f810e652352d4a80a55ad6b4dbce9bead91d40102439b', text: () => import('./assets-chunks/forget_index_html.mjs').then(m => m.default)},
    'styles-4JU3BKVV.css': {size: 139494, hash: '5ARnJsl76nc', text: () => import('./assets-chunks/styles-4JU3BKVV_css.mjs').then(m => m.default)}
  },
};
