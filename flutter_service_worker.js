'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ca135de0ac3cc1e92f7816fbcd1055e3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "646ba8424cd3db07e88941d562da2562",
".git/logs/refs/heads/master": "646ba8424cd3db07e88941d562da2562",
".git/objects/00/2ebc65b99edb8c989bd1154fd7f48a86a56d9c": "04c81c9388e61292166d7fcc3bb19546",
".git/objects/00/72233d75968d865a6e0aa00211968d64daf3b7": "5cdc0d5c8efa8d8f2495f5a5c9e3147a",
".git/objects/07/e4958fba06b625533e0b85f211eb59d0420c11": "3cb99d12c3cfbfd9bf253b3afc6013e9",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0f/3a9f680768efa2aecb82332d6ddc41c7b71500": "a78f6bd1981b57eeb957b138accc69ee",
".git/objects/14/c1477d08d981299cec3c6236e13cf8c165c427": "e1e0e663c0fd0600d1504614f9c23e6c",
".git/objects/18/7f1018a1c3e3ed56e89fa0b8b0f92e19b6a431": "a4cb8e193ab126ef07cdfbdff860d923",
".git/objects/1d/4ae31a8ca38b1140af6616349ba93ddcef8d03": "3d2cf8c143b2f9c2cc7a87775069b796",
".git/objects/22/244a6eda9db8ffdaed99f219f7faf888cd7003": "b4907ac23efa1662aa38b6e178be18e2",
".git/objects/2d/1bb1ff08092ef24814d7b36fff17cd71d5d043": "6e07822b1edf1e4015aa6e3b05cfc02d",
".git/objects/2d/d935711674f7dda5e4e5f73ef1f8b036f9f26e": "b82378d0250fcd7d62d6d4758feedeed",
".git/objects/30/7034bff06d80b8edef0a827ddf056e3d796a31": "f7207260474c34746c4542512a779c83",
".git/objects/32/86b6b786b57fbcdbf75835c6fd03c8fe82ff6b": "5d5f4ce264c16ea557b0666900f66f68",
".git/objects/34/c2bb62a4bd439d85cd34b538d36293fae295e3": "9a727ff217077f9905c7bec4e83cb910",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/d245356b60c535c5e5c6097000f756390e8d82": "611a61b32f74eba4d311392c0707d66a",
".git/objects/4b/f8fa3f11212395fafd24184f04538d22d5bf29": "5479f185a25f2e552b7cd2d82549df7f",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/5c/cc30ee13a30ce3e8e4a1c40cc604add1666c8f": "9255dbd0834c149d279e4e6eb5f70e83",
".git/objects/62/3b38ceec09f08c3f2cf254dc76e5ab1b62e409": "614c951ea3ce2f2ca167703aa40250d4",
".git/objects/62/3b537bd0116e4f0d68d9d215f77c4bbe317a2b": "4fe03f644701212f1fba0b633bba8f2e",
".git/objects/67/9600e8ad8b212c5ac8761f1948ccdedfa2b928": "07a344cf429e1b150f2cecd1659d6a26",
".git/objects/67/ae9748f73a73ad66f686332e79892cef25949f": "64bb0c7ed39f104be304dfe46fa4e9db",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/c1e4b6d790f42b0f379568c09443461dd04856": "1517c4175206d6d3573daae60f3ef0c4",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/6096a4b8618c88187287185d523ae769e4a10b": "ddabf5c763900ba39684858e1cca573b",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/9ae49a727285cc766ceba3f0634dd64a93d4f2": "488cab962e8034ff9678db6bc767b330",
".git/objects/74/cc9d7b498268b0d1d90221697797c45cbc41c7": "2f70f667de08e5458067f5aa2c79d8d0",
".git/objects/77/6a2f1b6911ea41b2b11439d90e42bd33beaa05": "a0a8c8ca3f453774d5e0abe52365153f",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7d/040cc452faa647fd4341a0e3375ba90e8b85e7": "b458540862b6fa04fea841935cafe2fa",
".git/objects/80/f7e0d81410bd292df0dee882eb079403845b91": "0e0530353e64a31bb48bedcdbfcb0e6a",
".git/objects/82/2f0e7018fb8e1e7fef5e7ea150104fc1c41695": "be9e755f747c8072bc4a9a27d6a233ab",
".git/objects/84/15cd749fc2f590f8841fa5046707ef4697cf61": "f5e46ec0ef86c118d08026a48930420c",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ad84e3b578e1767abe68893bf7525e684b61ab": "e3292312802a372aae80e0c1ee39b816",
".git/objects/8b/2fdfad78d7868607c25a09a35d571e95cda10e": "be37539d77be1e699d5c8ba8efd4ed23",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/6c939e595421a9019f61c3dcac3d8c56419508": "609a61dd67e188e3794d7575199051c8",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/99/dad27187322100863be71c6f09c918ff977733": "2e1b2922c8eb0721a0d26a4633ed8c6f",
".git/objects/9c/de6860c0d37ca267416dec9ee57ee084f3cf54": "f443acaa766015c18cc96b5801af18e5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/b397886db58b742a79ebb56a2a6eea7341b7aa": "e7bf202595419d9d147aea8799b200d9",
".git/objects/a8/3daa7e86778e95c85d72529859c8e50a3712af": "3d75565b233ac65c18b5555b0ccae1cd",
".git/objects/a9/ad3d2da6424350dc15460c706e5d9d5a60b45d": "6ebcf6384a60a7b722b6978ecc5fc433",
".git/objects/ab/13aac7f16a646742846ae6307345923d1f8a8e": "55c85f548ab2d9c0cdbd5bb7f9b7b2e6",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b2/d16502edb12a2a8f9c373d8359aeb799c4ea19": "21d96405e814ba81b5c2a83860aedf07",
".git/objects/b5/c835992ac8747dd87e1a1adff8b25f5350c2f5": "eda55cddb0721e840bcdac0086540613",
".git/objects/b6/6132cdfb45ad8f3d9514b55e86793272a4e5db": "7a08f2af9924219fa1e879c1124f6dc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/ca/a760a5a6a47d29b2e7bbb80d311e8b76f98cfa": "cad5a068a758037a72e4605ceea9307b",
".git/objects/cb/dcf9a1bb2c96a2fc32f1b3d2d5b004acdb3efb": "d3205b47627ac1aeb7e5f6cd8e74ec24",
".git/objects/cf/46b83028ee1e661f887736c3e519f09532e3ac": "703b9640c9ec2f9294c20b2449be23c7",
".git/objects/d1/b2c629a1689f570783ffc13bf1dbc302898e55": "7671f1071d949de715bc7027c4fd380a",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/84ee8af954f9e6c43dbdeab39c5843a44f211c": "29b53a2522e04de1b687aa36a664cc37",
".git/objects/f1/8893ecac17ad30fa0ba5b3f3694b4a1b8d4f4c": "4fe2541a4b116da5a49eb729d74a917e",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/4d6c28e385d5c031d8a91cd148f48740f14f7c": "ecce7196eb1929f71df3435fcbc53e04",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/2399ef74fd8f31b7a5615f69ffb36801c85ba9": "57955e07132e8c6249fd49f62c19388c",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/ff859aefefdac7990acb02239a44a66bdd5d58": "64605f12a877a60ee7780c16f964a96f",
".git/objects/f8/0a79edf717093b5408c86ad12fde68ba15460b": "845d4cd08a65921e32e3c7503db8177e",
".git/objects/fa/9297322b7683b1b63d1d689a6fdceb79dbe177": "44b67312e0b404f49f8f662901426f5d",
".git/objects/fb/6a1548ca55d85f24ff455b1e3cccba2b46313f": "d800baa408117b51f7249606d955176f",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "23f8d8e8537cfebe3299fa1142ffb7e0",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "deea0f5dba93813bade5621aec9b6b13",
"assets/NOTICES": "f8703b1b3cafd68dbde16cb185c176f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "c98fe78468aad035da973f27603772d9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4a72583162051e9ae20dd4484d362e93",
"/": "4a72583162051e9ae20dd4484d362e93",
"main.dart.js": "049802416ab062c6716b4aada1b42592",
"manifest.json": "6c705d34ef283e1b517c6ff975abcaf1",
"version.json": "a6e7e81063c1a6143b3be0bc801d2cc0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
