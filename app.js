// ============================================
// 【配置区】修改这里即可自定义你的店铺
// ============================================

const CONFIG = {
  brandName: '小七宠物',
  brandSubtitle: '门店订货系统',
};

// 四个系列
const SERIES = [
  { key: 'series1', name: '极光系列' },
  { key: 'series2', name: '双A系列' },
  { key: 'series3', name: '繁花系列' },
  { key: 'series4', name: '其他产品' },
];

// 产品列表（共32个）
const PRODUCTS = [
  // ---- 极光系列 ----
  { id: 1,  name: '小七极光除臭清洁香波4L【A1】',               series: 'series1', price: 292, target: '犬猫通用', image: '', promotion: { type: 'discount',   label: '满4桶75折',  minQty: 4, rate: 0.75 } },
  { id: 2,  name: '小七极光除臭清洁香波（淡香版）4L【A1.1】',       series: 'series1', price: 292, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 3,  name: '小七极光去油除毛香波4L【A2】',               series: 'series1', price: 292, target: '猫专用',   image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 4,  name: '小七极光水润体膜4L【A3】',                  series: 'series1', price: 292, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 5,  name: '小七极光皮脂清洁精华1L【A4】',              series: 'series1', price: 219, target: '猫专用',   image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 6,  name: '小七极光维C透白香波4L【A5】',               series: 'series1', price: 350, target: '犬猫通用', image: '', promotion: { type: 'discount',   label: '满4桶75折',  minQty: 4, rate: 0.75 } },
  { id: 7,  name: '小七极光皮毛净化沐浴泥2L【A6】',             series: 'series1', price: 292, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 8,  name: '小七极光抑菌止痒香波2L【A7】',              series: 'series1', price: 292, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 9,  name: '小七极光保湿清洁香波4L【A8】',               series: 'series1', price: 350, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 10, name: '小七极光保湿滋养护毛素4L【A9】',             series: 'series1', price: 350, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 11, name: '小七极光1号香氛护理油100ml',                series: 'series1', price:  98, target: '犬猫通用', image: '', promotion: { type: 'secondHalf', label: '第2瓶半价',  rate: 0.5 } },
  { id: 12, name: '小七极光2号香氛护理油100ml',                series: 'series1', price:  98, target: '犬猫通用', image: '', promotion: { type: 'secondHalf', label: '第2瓶半价',  rate: 0.5 } },
  { id: 13, name: '小七极光角鲨烷耳道洁护液100ml',              series: 'series1', price:  34, target: '犬猫通用', image: '', promotion: { type: 'buyXgetY',   label: '买5送1',    buy: 5, get: 1 } },
  { id: 14, name: '小七极光开结修复精粹水200ml',                series: 'series1', price:  50, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 15, name: '小七极光多效精华蓬松水200ml',                series: 'series1', price:  50, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 16, name: '小七极光香波绵绵搅拌杯',                     series: 'series1', price:  68, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 17, name: '小七极光除毛按摩梳',                         series: 'series1', price:  18, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  // ---- 双A系列 ----
  { id: 18, name: '小七双A鱼油美毛清洁香波3.78L',              series: 'series2', price:  85, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 19, name: '小七双A好香清洁香波3.78L',                 series: 'series2', price:  89, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 20, name: '小七双A好白清洁香波3.78L',                 series: 'series2', price:  99, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 21, name: '小七双A鱼油除臭留香清洁香波Pro版 3.78L',    series: 'series2', price: 115, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 22, name: '小七双A洗护全效香波3.78L',                 series: 'series2', price: 115, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 23, name: '小七双A鱼油美毛蓬松护毛素3.78L',            series: 'series2', price:  85, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 24, name: '小七双A鱼油美毛垂顺护毛素3.78L',            series: 'series2', price:  85, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 25, name: '小七双A好干净洁耳水1.8L',                   series: 'series2', price:  85, target: '犬猫通用', image: '', promotion: { type: 'buyXgetY',   label: '买1送2',    buy: 1, get: 2 } },
  { id: 26, name: '小七双A角鲨烷好清爽去油膏1L',               series: 'series2', price:  85, target: '猫专用',   image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 27, name: '小七双A留香护毛喷雾100ml',                   series: 'series2', price:  32, target: '犬猫通用', image: '', promotion: { type: 'buyXgetY',   label: '买3送1',    buy: 3, get: 1 } },
  // ---- 繁花系列 ----
  { id: 28, name: '小七繁花系列美毛清洁香波-云雾月桂500ml',      series: 'series3', price:  30, target: '犬猫通用', image: '', promotion: { type: 'buyXgetY',   label: '买10送2',   buy: 10, get: 2 } },
  { id: 29, name: '小七繁花系列美毛清洁香波-荒野玫瑰500ml',      series: 'series3', price:  30, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 30, name: '小七繁花系列美毛清洁香波-冬日山茶500ml',      series: 'series3', price:  30, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  // ---- 其他产品 ----
  { id: 31, name: '小七一次性洗护柔巾50条/包',                  series: 'series4', price: 342, target: '犬猫通用', image: '', promotion: { type: 'none',       label: '裸价销售' } },
  { id: 32, name: '小七猫咪专用S型曲线排梳',                     series: 'series4', price: 138, target: '猫专用',   image: '', promotion: { type: 'none',       label: '裸价销售' } },
];

// ============================================
// 【图片存储：IndexedDB】
// ============================================
const IMG_DB_NAME = 'ProductImagesDB';
const IMG_STORE = 'images';
let _imgDBCache = null;

function openImgDB() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) { resolve(null); return; }
    if (_imgDBCache) { resolve(_imgDBCache); return; }
    const req = indexedDB.open(IMG_DB_NAME, 1);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => { _imgDBCache = req.result; resolve(req.result); };
    req.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(IMG_STORE)) db.createObjectStore(IMG_STORE);
    };
  });
}

function loadImageFromDB(key) {
  return openImgDB().then(db => {
    if (!db) return '';
    return new Promise(resolve => {
      const tx = db.transaction([IMG_STORE], 'readonly');
      const req = tx.objectStore(IMG_STORE).get(key);
      req.onsuccess = () => resolve(req.result || '');
      req.onerror = () => resolve('');
    });
  }).catch(() => '');
}

function isImageKey(str) {
  return typeof str === 'string' && str.startsWith('img_');
}

function resolveProductImageSrc(p) {
  if (!p.image) return Promise.resolve('');
  if (p.image.startsWith('data:')) return Promise.resolve(p.image); // 旧数据兼容
  if (isImageKey(p.image)) return loadImageFromDB(p.image);
  return Promise.resolve(p.image);
}

// ============================================
// 【加载后台管理保存的数据】
// ============================================
function loadStoreData() {
  try {
    const raw = localStorage.getItem('storeData');
    if (!raw) return;
    // 旧版本可能把大图 base64 存在 localStorage，超过 2MB 直接清空用默认
    if (raw.length > 2 * 1024 * 1024) {
      console.warn('storeData 过大，自动清空');
      localStorage.removeItem('storeData');
      return;
    }
    const saved = JSON.parse(raw);

    if (saved.brand) {
      CONFIG.brandName = saved.brand.name || CONFIG.brandName;
      CONFIG.brandSubtitle = saved.brand.subtitle || CONFIG.brandSubtitle;
    }
    if (saved.series && saved.series.length > 0) {
      SERIES.length = 0;
      SERIES.push(...saved.series);
    }
    if (saved.products && saved.products.length > 0) {
      PRODUCTS.length = 0;
      PRODUCTS.push(...saved.products);
    }
  } catch(e) { /* 使用默认数据 */ }

  // 兼容旧数据：补全 promotion 字段，清理已删除字段
  PRODUCTS.forEach(function(p) {
    if (!p.promotion) {
      p.promotion = { type: 'none', label: '裸价销售' };
    }
    if (!p.promotion.type) p.promotion.type = 'none';
    if (!p.promotion.label) p.promotion.label = '裸价销售';
    delete p.usage; delete p.dilution; delete p.emoji;
  });
}

// ============================================
// 【核心逻辑】
// ============================================

let cart = {};
let currentSeries = 'all';

try {
  cart = JSON.parse(localStorage.getItem('petOrderCart') || '{}');
} catch (e) {
  cart = {};
}

// --- 工具函数 ---

function formatPrice(price) {
  if (price % 1 === 0) return '¥' + price;
  return '¥' + price.toFixed(2);
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getTotalQuantity() {
  return Object.values(cart).reduce((s, q) => s + q, 0);
}

function getCartItems() {
  return Object.entries(cart)
    .map(([id, qty]) => {
      const p = getProduct(parseInt(id));
      return p ? { ...p, quantity: qty } : null;
    })
    .filter(Boolean);
}

// 生成优惠分组 key：相同 key 的产品可混搭凑单
function getPromoKey(promo) {
  if (!promo || promo.type === 'none') return null;
  if (promo.type === 'discount')   return 'discount|' + promo.minQty + '|' + promo.rate + '|' + promo.label;
  if (promo.type === 'secondHalf') return 'secondHalf|' + (promo.rate || 0.5) + '|' + promo.label;
  if (promo.type === 'buyXgetY')   return 'buyXgetY|' + promo.buy + '|' + promo.get + '|' + promo.label;
  return null;
}

// 统一购物车计算（支持混搭凑单）
function calculateCart() {
  var items = getCartItems();
  var totalQty = items.reduce(function(s, i) { return s + i.quantity; }, 0);
  var subtotal = items.reduce(function(s, i) { return s + i.price * i.quantity; }, 0);

  // 按 promoKey 分组
  var groups = {};
  var noPromoItems = [];

  items.forEach(function(item) {
    var promo = item.promotion || { type: 'none' };
    var key = getPromoKey(promo);
    if (key) {
      if (!groups[key]) groups[key] = { items: [], promo: promo, poolQty: 0, poolSubtotal: 0 };
      groups[key].items.push(item);
      groups[key].poolQty += item.quantity;
      groups[key].poolSubtotal += item.price * item.quantity;
    } else {
      noPromoItems.push(item);
    }
  });

  var totalDiscount = 0;
  var totalPaid = 0;
  var activeCount = 0;
  var itemResults = {}; // id -> { original, total, discount, active, freeQty, halfQty, note }

  // 无活动产品
  noPromoItems.forEach(function(item) {
    var orig = item.price * item.quantity;
    itemResults[item.id] = { original: orig, total: orig, discount: 0, active: false, freeQty: 0, halfQty: 0, note: '' };
    totalPaid += orig;
  });

  // 逐组计算
  Object.values(groups).forEach(function(g) {
    var poolQty = g.poolQty;
    var poolSub = g.poolSubtotal;
    var promo = g.promo;
    var groupPaid = poolSub;
    var groupDiscount = 0;

    if (promo.type === 'discount') {
      if (poolQty >= promo.minQty) {
        groupPaid = poolSub * promo.rate;
        groupDiscount = poolSub - groupPaid;
      }
    } else if (promo.type === 'secondHalf') {
      var halfQty = Math.floor(poolQty / 2);
      var rate = promo.rate || 0.5;
      // 按比例均摊半价优惠
      var fullQty = poolQty - halfQty;
      groupPaid = poolSub * (fullQty + halfQty * rate) / poolQty;
      groupDiscount = poolSub - groupPaid;
    } else if (promo.type === 'buyXgetY') {
      var gSize = promo.buy + promo.get;
      var freeQty = Math.floor(poolQty / gSize) * promo.get;
      if (freeQty > 0) {
        var paidQty = poolQty - freeQty;
        groupPaid = poolSub * paidQty / poolQty;
        groupDiscount = poolSub - groupPaid;
      }
    }

    if (groupDiscount > 0.01) activeCount++;

    // 按金额比例分摊优惠到每个产品
    g.items.forEach(function(item) {
      var itemSub = item.price * item.quantity;
      var share = poolSub > 0 ? itemSub / poolSub : 0;
      var itemDisc = Math.round(groupDiscount * share * 100) / 100;
      var itemPaid = itemSub - itemDisc;

      var note = '';
      var fQty = 0;
      var hQty = 0;

      if (promo.type === 'discount') {
        if (poolQty >= promo.minQty) {
          note = '已享' + promo.label;
        } else {
          note = '再买' + (promo.minQty - poolQty) + '桶享' + promo.label;
        }
      } else if (promo.type === 'secondHalf') {
        hQty = Math.floor(poolQty / 2);
        if (hQty > 0) {
          note = '混搭' + hQty + '瓶半价（' + promo.label + '）';
        } else {
          note = promo.label;
        }
      } else if (promo.type === 'buyXgetY') {
        fQty = Math.floor(poolQty / (promo.buy + promo.get)) * promo.get;
        if (fQty > 0) {
          note = '已送' + fQty + '瓶（' + promo.label + '）';
        } else {
          note = promo.label + '，多买多送';
        }
      }

      itemResults[item.id] = {
        original: itemSub,
        total: itemPaid,
        discount: itemDisc,
        active: groupDiscount > 0.01,
        freeQty: fQty,
        halfQty: hQty,
        note: note
      };

      totalDiscount += itemDisc;
      totalPaid += itemPaid;
    });
  });

  // 修正浮点误差
  totalPaid = Math.round(totalPaid * 100) / 100;
  totalDiscount = Math.round((subtotal - totalPaid) * 100) / 100;

  return {
    items: items.map(function(item) { return Object.assign({}, item, { promoResult: itemResults[item.id] }); }),
    totalQty: totalQty,
    subtotal: subtotal,
    discount: totalDiscount,
    total: totalPaid,
    discounted: totalDiscount > 0,
    activeCount: activeCount
  };
}

// 兼容旧接口
function calculateTotal() {
  var cart = calculateCart();
  return {
    totalQty: cart.totalQty,
    subtotal: cart.subtotal,
    discount: cart.discount,
    total: cart.total,
    discounted: cart.discounted,
    activeCount: cart.activeCount
  };
}

function saveCart() {
  localStorage.setItem('petOrderCart', JSON.stringify(cart));
}

// --- 渲染函数 ---

function renderSeriesTabs() {
  const el = document.getElementById('seriesTabs');
  let html = '<button class="series-tab ' + (currentSeries === 'all' ? 'active' : '') + '" onclick="setSeries(\'all\')">全部</button>';
  SERIES.forEach(s => {
    html += '<button class="series-tab ' + (currentSeries === s.key ? 'active' : '') + '" onclick="setSeries(\'' + s.key + '\')">' + s.name + '</button>';
  });
  el.innerHTML = html;
}

function renderProducts() {
  const grid = document.getElementById('productGrid');
  const list = currentSeries === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.series === currentSeries);

  grid.innerHTML = list.map(p => {
    const qty = cart[p.id] || 0;
    const promo = p.promotion || { type: 'none', label: '裸价销售' };
    const promoBadge = promo.type !== 'none'
      ? '<span class="promo-badge">' + escHtml(promo.label) + '</span>'
      : '<span class="promo-badge no-promo-badge">' + escHtml(promo.label || '裸价销售-无活动') + '</span>';

    let imageHtml;
    if (!p.image) {
      imageHtml = '<div class="product-image no-img" style="background:' + getSeriesGradient(p.series) + ';">' + (qty > 0 ? '<span class="product-qty-badge">' + qty + '</span>' : '') + '<span class="product-noimg-text">' + escHtml(p.name) + '</span></div>';
    } else if (p.image.startsWith('data:') || !isImageKey(p.image)) {
      imageHtml = '<div class="product-image"><img src="' + p.image + '" alt="' + escHtml(p.name) + '" class="product-img">' + (qty > 0 ? '<span class="product-qty-badge">' + qty + '</span>' : '') + '</div>';
    } else {
      imageHtml = '<div class="product-image"><img src="" data-img-key="' + escHtml(p.image) + '" alt="' + escHtml(p.name) + '" class="product-img">' + (qty > 0 ? '<span class="product-qty-badge">' + qty + '</span>' : '') + '</div>';
    }

    return `
      <div class="product-card ${qty > 0 ? 'selected' : ''}" data-id="${p.id}">
        ${imageHtml}
        <div class="product-info">
          <h3 class="product-name">${escHtml(p.name)}</h3>
          <div class="product-tags">
            ${p.target ? '<span class="product-tag target-tag">' + escHtml(p.target) + '</span>' : ''}
            ${promoBadge}
          </div>
          <div class="product-bottom">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${qty === 0
              ? '<button class="add-btn" onclick="addToCart(' + p.id + ')">加入清单</button>'
              : '<div class="qty-selector"><button class="qty-btn" onclick="updateQty(' + p.id + ', -1)">−</button><span class="qty-num">' + qty + '</span><button class="qty-btn" onclick="updateQty(' + p.id + ', 1)">+</button></div>'
            }
          </div>
        </div>
      </div>`;
  }).join('');

  // 异步加载 IndexedDB 图片
  grid.querySelectorAll('img[data-img-key]').forEach(img => {
    const key = img.getAttribute('data-img-key');
    loadImageFromDB(key).then(data => { if (data) img.src = data; });
  });
}

function escHtml(str) {
  return String(str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// 系列渐变色
const SERIES_COLORS = {
  series1: ['linear-gradient(135deg, #FF6B6B, #FFA07A)', 'linear-gradient(135deg, #FF8E53, #FE6B8B)', 'linear-gradient(135deg, #F093FB, #F5576C)', 'linear-gradient(135deg, #FA709A, #FEE140)'],
  series2: ['linear-gradient(135deg, #4FACFE, #00F2FE)', 'linear-gradient(135deg, #667EEA, #764BA2)', 'linear-gradient(135deg, #A8EDEA, #FED6E3)', 'linear-gradient(135deg, #5EE7DF, #B490CA)'],
  series3: ['linear-gradient(135deg, #43E97B, #38F9D7)', 'linear-gradient(135deg, #30CFD0, #330867)', 'linear-gradient(135deg, #84FAB0, #8FD3F4)', 'linear-gradient(135deg, #F9D423, #FF4E50)'],
  series4: ['linear-gradient(135deg, #F5AF19, #F12711)', 'linear-gradient(135deg, #667EEA, #2DD05B)', 'linear-gradient(135deg, #FC466B, #3F5EFB)', 'linear-gradient(135deg, #11998E, #38EF7D)'],
};

function getSeriesGradient(skey) {
  const list = SERIES_COLORS[skey] || SERIES_COLORS.series1;
  return list[0];
}

function renderPromoBanner() {
  const banner = document.getElementById('promoBanner');
  const { totalQty, discount, discounted, activeCount } = calculateTotal();

  if (totalQty === 0) {
    banner.innerHTML = '<span class="promo-icon">🎉</span><span class="promo-text">各产品活动不同，点产品卡片查看优惠</span>';
    banner.classList.remove('active');
  } else if (discounted) {
    banner.innerHTML = '<span class="promo-icon">✅</span><span class="promo-text">已选' + totalQty + '桶，' + activeCount + '个产品参与活动，共优惠' + formatPrice(discount) + '</span>';
    banner.classList.add('active');
  } else {
    banner.innerHTML = '<span class="promo-icon">🛒</span><span class="promo-text">已选' + totalQty + '桶，继续选购可享活动优惠</span>';
    banner.classList.remove('active');
  }
}

function renderCartBar() {
  const bar = document.getElementById('cartBar');
  const badge = document.getElementById('cartBadge');
  const totalEl = document.getElementById('cartTotal');
  const { totalQty, total, discounted, subtotal } = calculateTotal();

  if (totalQty === 0) {
    bar.classList.remove('visible');
    return;
  }

  bar.classList.add('visible');
  badge.textContent = totalQty;

  if (discounted) {
    totalEl.innerHTML = '<span class="original-price">' + formatPrice(subtotal) + '</span><span class="discounted-price">' + formatPrice(total) + '</span>';
  } else {
    totalEl.textContent = formatPrice(total);
  }
}

function renderCartModal() {
  const items = getCartItems();
  const container = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  const checkoutBtn = document.getElementById('checkoutBtn');
  const clearBtn = document.getElementById('clearCartBtn');

  if (items.length === 0) {
    container.innerHTML = '<div class="empty-cart">🛒 购物车是空的<br><br>去选品吧～</div>';
    summary.innerHTML = '';
    checkoutBtn.style.display = 'none';
    clearBtn.style.display = 'none';
    return;
  }

  checkoutBtn.style.display = 'block';
  clearBtn.style.display = 'block';

  const cartResult = calculateCart();
  var resultMap = {};
  cartResult.items.forEach(function(ci) { resultMap[ci.id] = ci.promoResult; });

  container.innerHTML = cartResult.items.map(item => {
    const r = resultMap[item.id] || { total: item.price * item.quantity, discount: 0, active: false, note: '' };
    const hasImg = !!item.image;
    const isKey = hasImg && isImageKey(item.image);
    const imgPart = hasImg
      ? (isKey
          ? '<img src="" data-img-key="' + escHtml(item.image) + '" style="width:44px;height:44px;border-radius:8px;object-fit:cover" alt="">'
          : '<img src="' + item.image + '" style="width:44px;height:44px;border-radius:8px;object-fit:cover" alt="">')
      : '<div style="width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:' + getSeriesGradient(item.series) + ';border-radius:8px;color:#fff;font-size:11px;font-weight:600">' + escHtml(item.name).substring(0,2) + '</div>';

    let promoText = '';
    if (r.active) {
      promoText = '<p style="color:#DC2626;font-size:11px;margin-top:2px">优惠：' + r.note + '，省' + formatPrice(r.discount) + '</p>';
    } else if (item.promotion && item.promotion.type !== 'none') {
      promoText = '<p style="color:#92400E;font-size:11px;margin-top:2px">' + item.promotion.label + '，' + r.note + '</p>';
    }

    return '<div class="cart-item">' +
      imgPart +
      '<div class="cart-item-info">' +
        '<h4>' + escHtml(item.name) + '</h4>' +
        '<p>' + formatPrice(item.price) + '/桶</p>' +
        promoText +
      '</div>' +
      '<div class="cart-item-actions">' +
        '<div class="qty-selector">' +
          '<button class="qty-btn" onclick="updateQty(' + item.id + ', -1)">−</button>' +
          '<span class="qty-num">' + item.quantity + '</span>' +
          '<button class="qty-btn" onclick="updateQty(' + item.id + ', 1)">+</button>' +
        '</div>' +
        '<span class="cart-item-subtotal">' + formatPrice(r.total) + '</span>' +
      '</div>' +
    '</div>';
  }).join('');

  // 异步加载购物车 IndexedDB 图片
  container.querySelectorAll('img[data-img-key]').forEach(img => {
    const key = img.getAttribute('data-img-key');
    loadImageFromDB(key).then(data => { if (data) img.src = data; });
  });

  const { subtotal, discount, total, discounted, totalQty, activeCount } = calculateTotal();

  summary.innerHTML =
    (discounted
      ? '<div class="promo-status active">✅ ' + activeCount + '个产品参与活动，共优惠' + formatPrice(discount) + '</div>'
      : '<div class="promo-status">💡 选购参与活动的产品可享优惠</div>') +
    '<div class="summary-row"><span>商品小计（' + totalQty + '桶）</span><span>' + formatPrice(subtotal) + '</span></div>' +
    (discounted ? '<div class="summary-row discount"><span>活动优惠</span><span>−' + formatPrice(discount) + '</span></div>' : '') +
    '<div class="summary-row total"><span>应付总计</span><span>' + formatPrice(total) + '</span></div>';
}

// --- 操作函数 ---

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  saveCart();
  updateUI();
  const badge = document.getElementById('cartBadge');
  badge.classList.add('bounce');
  setTimeout(() => badge.classList.remove('bounce'), 300);
}

function updateQty(id, delta) {
  cart[id] = (cart[id] || 0) + delta;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  updateUI();
}

function setSeries(key) {
  currentSeries = key;
  renderSeriesTabs();
  renderProducts();
}

function openCart() {
  document.getElementById('cartOverlay').classList.add('open');
  renderCartModal();
}

function closeCart() {
  document.getElementById('cartOverlay').classList.remove('open');
}

function clearCart() {
  cart = {};
  saveCart();
  updateUI();
  renderCartModal();
  showToast('已清空购物车');
}

function confirmOrder() {
  const cartResult = calculateCart();
  if (cartResult.items.length === 0) return;
  var resultMap = {};
  cartResult.items.forEach(function(ci) { resultMap[ci.id] = ci.promoResult; });

  const { subtotal, discount, total, totalQty, discounted, activeCount } = cartResult;

  var text = '【' + CONFIG.brandName + '】门店订货单\n';
  text += '━━━━━━━━━━━━\n';
  cartResult.items.forEach(function(item, i) {
    const r = resultMap[item.id] || { total: item.price * item.quantity, discount: 0, active: false };
    text += (i + 1) + '. ' + item.name + ' ×' + item.quantity + '  ' + formatPrice(r.total);
    if (r.active) {
      text += '（' + item.promotion.label + '，省' + formatPrice(r.discount) + '）';
    }
    text += '\n';
  });
  text += '━━━━━━━━━━━━\n';
  text += '商品小计：' + formatPrice(subtotal) + '\n';
  if (discounted) {
    text += '活动优惠：−' + formatPrice(discount) + '（' + activeCount + '个产品参与）\n';
  }
  text += '应付总计：' + formatPrice(total) + '\n';
  text += '下单时间：' + new Date().toLocaleString('zh-CN');
  currentOrderText = text;

  const modal = document.getElementById('orderModal');
  modal.innerHTML =
    '<div class="order-confirm">' +
      '<div class="order-icon">✅</div>' +
      '<h2>订单已确认</h2>' +
      '<div class="order-detail">' +
        cartResult.items.map(function(item, i) {
          const r = resultMap[item.id] || { total: item.price * item.quantity, discount: 0, active: false };
          return '<div class="order-item"><span>' + (i + 1) + '. ' + escHtml(item.name) + ' ×' + item.quantity + (r.active ? ' <small style="color:#DC2626">(' + item.promotion.label + ')</small>' : '') + '</span><span>' + formatPrice(r.total) + '</span></div>';
        }).join('') +
      '</div>' +
      '<div class="order-summary-box">' +
        (discounted ? '<div class="promo-status active">✅ 共' + activeCount + '个产品参与活动，省' + formatPrice(discount) + '</div>' : '') +
        '<div class="summary-row"><span>商品小计（' + totalQty + '桶）</span><span>' + formatPrice(subtotal) + '</span></div>' +
        (discounted ? '<div class="summary-row discount"><span>活动优惠</span><span>−' + formatPrice(discount) + '</span></div>' : '') +
        '<div class="summary-row total"><span>应付总计</span><span>' + formatPrice(total) + '</span></div>' +
      '</div>' +
      '<div class="order-actions">' +
        '<button class="copy-btn" onclick="copyOrder()">📋 复制订单信息</button>' +
        '<button class="continue-btn" onclick="closeOrder()">继续选购</button>' +
      '</div>' +
    '</div>';

  document.getElementById('orderOverlay').classList.add('open');
  closeCart();
}

function closeOrder() {
  document.getElementById('orderOverlay').classList.remove('open');
}

function copyOrder() {
  const text = currentOrderText;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(
      function() { showToast('✅ 订单信息已复制，可粘贴到微信发送'); },
      function() { fallbackCopy(text); }
    );
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('✅ 订单信息已复制，可粘贴到微信发送');
  } catch (e) {
    showToast('复制失败，请手动截图');
  }
  document.body.removeChild(ta);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

function updateUI() {
  renderProducts();
  renderPromoBanner();
  renderCartBar();
  if (document.getElementById('cartOverlay').classList.contains('open')) {
    renderCartModal();
  }
}

// --- 初始化 ---

document.addEventListener('DOMContentLoaded', function() {
  loadStoreData();

  document.getElementById('brandName').textContent = CONFIG.brandName;
  document.getElementById('brandSubtitle').textContent = CONFIG.brandSubtitle;
  document.title = CONFIG.brandName + ' · ' + CONFIG.brandSubtitle;

  renderSeriesTabs();
  renderProducts();
  renderPromoBanner();
  renderCartBar();

  document.getElementById('openCartBtn').addEventListener('click', openCart);
  document.getElementById('closeCartBtn').addEventListener('click', closeCart);
  document.getElementById('checkoutBtn').addEventListener('click', confirmOrder);
  document.getElementById('clearCartBtn').addEventListener('click', clearCart);
  document.getElementById('cartOverlay').addEventListener('click', function(e) {
    if (e.target.id === 'cartOverlay') closeCart();
  });
  document.getElementById('orderOverlay').addEventListener('click', function(e) {
    if (e.target.id === 'orderOverlay') closeOrder();
  });
});
