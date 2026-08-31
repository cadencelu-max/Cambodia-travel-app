// ========== 多语言（中文 / English） ==========

const I18N = {
  zh: {
    "nav.home": "首页", "nav.attractions": "景点", "nav.food": "美食", "nav.guide": "助手", "nav.map": "地图",
    "home.title": "探索<br>柬埔寨",
    "qf.visa": "签证", "qf.money": "货币", "qf.lang": "语言", "qf.season": "最佳季节",
    "qf.tz": "时差", "qf.plug": "插座", "qf.tip": "小费", "qf.water": "饮用水",
    "qf.visaV": "中国护照免签*", "qf.moneyV": "瑞尔 · 美元通用", "qf.langV": "高棉语 · 英语普及", "qf.seasonV": "11月—次年2月",
    "qf.tzV": "比北京晚 1 小时", "qf.plugV": "两脚扁插座，国内通用", "qf.tipV": "非强制，服务好给 1-2 美元", "qf.waterV": "买瓶装水，别喝自来水",
    "home.about": "关于这个 App", "home.aboutSub": "我的第一个编程作品",
    "page.attractions": "景点", "page.food": "美食", "page.guide": "助手", "page.map": "地图",
    "grp.prep": "行前准备", "grp.tools": "实用工具", "grp.know": "知识速查",
    "chip.visa": "签证", "chip.arrival": "落地", "chip.checklist": "清单", "chip.weather": "天气", "chip.emergency": "紧急",
    "chip.currency": "汇率", "chip.budget": "记账", "chip.itinerary": "行程", "chip.transport": "交通", "chip.phrases": "常用语", "chip.safety": "安全",
    "btn.add": "添加", "btn.ledgerAdd": "记一笔", "btn.ledgerClear": "清空账单",
    "lang.note": "翻译可能存在误差，请以中文为准"
  },
  en: {
    "nav.home": "Home", "nav.attractions": "Attractions", "nav.food": "Food", "nav.guide": "Assistant", "nav.map": "Map",
    "home.title": "Discover<br>Cambodia",
    "qf.visa": "Visa", "qf.money": "Currency", "qf.lang": "Language", "qf.season": "Best season",
    "qf.tz": "Time diff.", "qf.plug": "Plug", "qf.tip": "Tipping", "qf.water": "Drinking water",
    "qf.visaV": "Visa-free (CN)*", "qf.moneyV": "Riel · USD OK", "qf.langV": "Khmer · English", "qf.seasonV": "Nov – Feb",
    "qf.tzV": "1 hr behind Beijing", "qf.plugV": "Type A/C plug", "qf.tipV": "Optional, $1-2", "qf.waterV": "Drink bottled water",
    "home.about": "About this App", "home.aboutSub": "My first coding project",
    "page.attractions": "Attractions", "page.food": "Food", "page.guide": "Assistant", "page.map": "Map",
    "grp.prep": "Before the trip", "grp.tools": "Tools", "grp.know": "Know-how",
    "chip.visa": "Visa", "chip.arrival": "Arrival", "chip.checklist": "Checklist", "chip.weather": "Weather", "chip.emergency": "Emergency",
    "chip.currency": "FX", "chip.budget": "Ledger", "chip.itinerary": "Plan", "chip.transport": "Transport", "chip.phrases": "Phrases", "chip.safety": "Safety",
    "btn.add": "Add", "btn.ledgerAdd": "Add entry", "btn.ledgerClear": "Clear ledger",
    "lang.note": "Translations may contain errors; Chinese is authoritative."
  }
};

const CONTENT = {
  en: {
    "高棉风味，好吃不贵": "Khmer flavours, tasty & cheap",
    "历史": "History",
    "看点 · 拍照": "Highlights · Photos",
    "实用信息": "Practical info",
    "口感": "Taste",
    "做法": "How it's made",
    "怎么吃 · 价格": "How to eat · Price",
    "返回": "Back",
    "返回美食": "Back to Food",
    "返回景点": "Back to Attractions",
    "返回首页": "Back to Home",
    "返回吴哥窟": "Back to Angkor",
    "柬埔寨国菜": "Cambodia's national dish",
    "黑胡椒牛肉": "Black-pepper beef",
    "椰香咖喱": "Coconut curry",
    "便宜又新鲜": "Cheap and fresh",
    "暹粒街头咖啡": "Siem Reap street coffee",
    "阿莫克": "Amok",
    "洛拉克牛肉": "Lok Lak Beef",
    "高棉咖喱": "Khmer Curry",
    "热带水果": "Tropical Fruit",
    "柬埔寨咖啡": "Cambodian Coffee",
    "入口先是浓郁的椰香，接着是温柔的甜辣。鱼肉嫩得像布丁，酱汁顺滑，带着香茅和柠檬叶的清香。": "Rich coconut hits first, then a gentle sweet-spice. The fish is silky like pudding, with lemongrass and lime-leaf fragrance.",
    "鱼肉（通常是鲈鱼或罗非鱼）用椰浆、姜黄、高良姜、柠檬叶和咖喱香料腌过，和酱汁一起装进芭蕉叶小碗，上锅蒸熟。上桌时还冒着热气，芭蕉叶的清香混着椰香一起散开。": "Fish (usually bass or tilapia) is marinated in coconut milk, turmeric, galangal, lime leaf and curry spices, then steamed in a banana-leaf bowl. Served piping hot.",
    "配米饭吃最香。街头小店约 3-4 美元，餐厅 5-6 美元。点之前可以问一句「Is it spicy?」，有些店会做得比较辣。": "Best with rice. About $3-4 at street stalls, $5-6 at restaurants. Ask 'Is it spicy?' — some places make it quite hot.",
    "牛肉外焦里嫩，黑胡椒的辛香和青柠的酸香很开胃，酱汁咸鲜微甜，锅气十足。": "Beef crisp outside, tender inside, with punchy black pepper and lime. The sauce is savoury-sweet — wok-charred and appetising.",
    "牛肉切粒，用鱼露、黑胡椒、蒜和青柠汁腌一会儿，下热锅大火快炒锁住肉汁。通常配煎蛋、米饭和一小碟青柠黑胡椒蘸汁一起上桌。": "Beef cubes are marinated in fish sauce, black pepper, garlic and lime, then flash-fried over high heat to seal in the juices. Usually with a fried egg, rice and a lime-pepper dip.",
    "用生菜叶夹着牛肉、番茄和洋葱一起吃最地道，蘸汁是灵魂。一人份约 4-7 美元。": "The authentic way: wrap the beef with tomato and onion in lettuce leaves — the dipping sauce is the soul. About $4-7 per person.",
    "比泰式咖喱温和很多：椰香浓、甜味足、辣味轻，汤汁浓郁绵密，拌饭特别香。": "Much milder than Thai curry: rich coconut, clear sweetness, light heat. Thick, creamy sauce — amazing over rice.",
    "用椰浆做底，加高棉咖喱酱（香茅、姜黄、虾酱等香料调成）慢慢炖，常和鸡肉或鱼、红薯、四季豆一起煮到软烂入味。": "Simmered slowly on a coconut base with Khmer curry paste (lemongrass, turmeric, prahok...), often with chicken or fish, sweet potato and green beans until tender.",
    "当地人爱用法棍蘸着吃，或者浇在米饭上。一份约 4-6 美元。": "Locals love dipping a baguette in it, or pouring it over rice. About $4-6.",
    "芒果甜糯、山竹清甜、红毛丹爽口、榴莲浓郁，个个水分很足，比国内便宜不少。": "Sweet mangoes, fragrant mangosteen, refreshing rambutan, rich durian — all juicy, and much cheaper than at home.",
    "不用做，路边摊现挑现切。挑熟的买，让摊主帮你剥好装袋，当场就能吃。": "No cooking needed — pick at the stall. Choose ripe ones and the seller will peel and bag them for you to eat on the spot.",
    "按个或按袋卖，1-2 美元就能买一大袋。雨季过后（10-11 月）是水果最便宜的时候，想尝鲜可以试试「辣椒盐蘸芒果」这种当地吃法。": "Sold by piece or bag — $1-2 for a big bag. Fruit is cheapest after the rains (Oct–Nov). Try 'mango with chilli salt', a local favourite.",
    "咖啡豆烘焙偏深，口感浓烈，带一点巧克力香。加炼乳的冰咖啡甜中带苦，很上头。": "Beans roasted dark — bold, with a hint of chocolate. Iced coffee with condensed milk is sweet-bitter and addictive.",
    "当地常用滴滴壶（phin）：咖啡粉压紧，热水慢慢滴漏，一杯要等上好几分钟。冰咖啡是杯底先放炼乳，再倒热咖啡和冰块。": "Locals use a phin (drip pot): grounds pressed tight, hot water dripping slowly — a cup takes minutes. Iced coffee puts condensed milk at the bottom, then hot coffee and ice.",
    "老城区咖啡馆密度很高，一杯 1-2 美元。想喝当地味道就点「Iced Coffee with Milk」（冰炼乳咖啡），慢慢等、慢慢喝。": "Cafés are everywhere in the old town, $1-2 a cup. For the local taste, order 'Iced Coffee with Milk' — and take your time."
  }
};

const LANGS = ["zh", "en"];
const BACK_WORD = { zh: "返回", en: "Back" };

let currentLang = "zh";
try { currentLang = localStorage.getItem("app-lang") || "zh"; } catch (e) { }

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.zh && I18N.zh[key]) || key;
}

function applyLang() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    el.innerHTML = t(el.getAttribute("data-i18n-html"));
  });
  const bw = BACK_WORD[currentLang] || "Back";
  document.querySelectorAll(".back-btn").forEach(b => {
    b.textContent = b.textContent.replace(/←\s*返回/, "← " + bw);
  });
  if (typeof applyContentLang === "function") applyContentLang();
}

// ========== 正文内容翻译（按区域分批添加） ==========

const __orig = new WeakMap();

function applyContentLang() {
  const map = CONTENT[currentLang] || {};
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  let n;
  while ((n = walker.nextNode())) nodes.push(n);

  nodes.forEach(node => {
    if (!node.parentElement) return;
    const tag = node.parentElement.tagName;
    if (tag === "SCRIPT" || tag === "STYLE") return;
    if (node.parentElement.closest && node.parentElement.closest("[data-i18n]")) return;

    let orig = __orig.get(node);
    if (orig === undefined) {
      orig = node.textContent;
      __orig.set(node, orig);
    }

    const t2 = node.textContent;
    const key = orig.trim();
    if (!key) return;

    if (currentLang === "zh") {
      if (t2 !== orig) node.textContent = orig;
      return;
    }

    const target = map[key];
    if (!target) return;
    if (t2.trim() === target) return;
    const lead = t2.slice(0, t2.indexOf(t2.trim()));
    const trail = t2.slice(t2.indexOf(t2.trim()) + t2.trim().length);
    node.textContent = lead + target + trail;
  });
}

// ========== 语言切换菜单交互 ==========
const langToggle = document.getElementById("lang-toggle");
const langMenu = document.getElementById("lang-menu");

if (langToggle && langMenu) {
  langToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    langMenu.classList.toggle("open");
  });
  document.addEventListener("click", () => langMenu.classList.remove("open"));
  langMenu.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-lang]");
    if (!btn) return;
    currentLang = btn.getAttribute("data-lang");
    try { localStorage.setItem("app-lang", currentLang); } catch (err) { }
    applyLang();
    langMenu.classList.remove("open");
  });
}

applyLang();
