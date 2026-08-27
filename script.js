const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");


// 显示某个页面（带滑动翻页动画），并让底部导航高亮对应标签
// dir 传 "back" 表示返回（旧页面往右滑走、新页面从左边滑入），否则前进/切换
function showPage(id, activeNavId, dir, mode) {

    const current = document.querySelector(".page.active");
    const next = document.getElementById(id);

    if (!current || current === next) {

        pages.forEach(page => {
            page.classList.remove("active");
        });

        next.classList.add("active");

        window.scrollTo({ top: 0 });
        return;
    }

    const isBack = dir === "back";
    const zoom = mode === "zoom";
    const outClass = zoom ? "page-zoom-out" : (isBack ? "page-out-right" : "page-out-left");
    const inClass = zoom ? "page-zoom-in" : (isBack ? "page-in-left" : "page-in-right");

    // 旧页面：保持显示，滑出
    current.classList.add("page-shown", outClass);
    current.classList.remove("active");

    // 新页面：先摆到起始位置，再滑进来
    next.classList.remove("active");
    next.classList.add(inClass, "page-shown");
    void next.offsetWidth;   // 强制刷新，让起始位置先生效
    next.classList.add("active");
    next.classList.remove(inClass);

    // 切到地图页时，让地图重新计算尺寸
    if (next.id === "map") {
        setTimeout(() => { if (map) map.invalidateSize(); }, 360);
    }


    // 动画结束后清理临时状态
    setTimeout(() => {

        pages.forEach(page => {

            page.classList.remove("page-shown", "page-in-left", "page-in-right", "page-out-left", "page-out-right", "page-zoom-in", "page-zoom-out");

        });

    }, 330);


    // 底部导航高亮
    navItems.forEach(nav => {
        nav.classList.remove("active");
    });

    const navBtn = document.querySelector(
        '.nav-item[data-page="' + activeNavId + '"]'
    );

    if (navBtn) {
        navBtn.classList.add("active");
    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// 底部导航：点击切换页面
navItems.forEach(item => {

    item.addEventListener("click", () => {

        showPage(item.dataset.page, item.dataset.page);

    });

});


// 攻略页：行前清单，点一下打勾 / 再点取消（勾选状态会自动记住）
const checkItems = document.querySelectorAll(".check-item");


function saveCheck(index, checked) {
    try {
        localStorage.setItem("check-" + index, checked ? "1" : "0");
    } catch (e) { /* 某些浏览器本地打开时不允许存储，忽略即可 */ }
}


function loadCheck(index) {
    try {
        return localStorage.getItem("check-" + index) === "1";
    } catch (e) { return false; }
}


// 打开页面时，恢复上次的勾选
checkItems.forEach((item, index) => {

    if (loadCheck(index)) {
        item.classList.add("checked");
    }

    item.addEventListener("click", () => {

        item.classList.toggle("checked");

        saveCheck(index, item.classList.contains("checked"));

    });

});


// 首页轮播：每 4 秒自动切换一张
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".slider-dots .dot");
const slider = document.querySelector(".hero-slider");
const slideTitle = document.querySelector(".hero-slider .image-overlay strong");
let currentSlide = 0;


// 切到第 index 张图（同时更新圆点和标题）
function goToSlide(index) {

    slides[currentSlide].classList.remove("active");

    currentSlide = index;

    slides[currentSlide].classList.add("active");

    if (slideTitle) {
        slideTitle.textContent = slides[currentSlide].dataset.title;
    }

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[currentSlide].classList.add("active");

}


// 自动轮播
setInterval(() => {

    goToSlide((currentSlide + 1) % slides.length);

}, 4000);


// 左右滑动切换（手机触摸 / 电脑拖拽都支持）
let swipeStartX = null;
let swipeStartY = null;

slider.addEventListener("pointerdown", (e) => {

    swipeStartX = e.clientX;
    swipeStartY = e.clientY;

});

slider.addEventListener("pointerup", (e) => {

    if (swipeStartX === null) return;

    const dx = e.clientX - swipeStartX;
    const dy = e.clientY - swipeStartY;

    swipeStartX = null;
    swipeStartY = null;

    // 滑得太短，或者竖向滑动（防止干扰页面滚动），都不触发
    if (Math.abs(dx) < 40) return;
    if (Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0) {
        goToSlide((currentSlide + 1) % slides.length);          // 左滑 → 下一张
    } else {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);  // 右滑 → 上一张
    }

});


// 景点页：点击城市卡片 → 打开对应子页面
document.querySelectorAll(".place-card").forEach(card => {

    card.addEventListener("click", () => {

        showPage(card.dataset.target, card.dataset.nav || "attractions");

    });

});


// 美食页：点击卡片 → 放大进入对应子页面
document.querySelectorAll(".food-card").forEach(card => {

    card.addEventListener("click", () => {

        showPage(card.dataset.target, "food", null, "zoom");

    });

});


// 景点卡片：点击 → 放大进入详情页
document.querySelectorAll(".attraction-card").forEach(card => {

    card.addEventListener("click", () => {

        showPage(card.dataset.target, "attractions", null, "zoom");

    });

});


// 子页面返回按钮
document.querySelectorAll(".back-btn, .back-top").forEach(btn => {

    btn.addEventListener("click", () => {

        showPage(btn.dataset.back, btn.dataset.nav || btn.dataset.back, "back", btn.dataset.mode);

    });

});


// 景点子页面：向右滑动返回上一层（像 iPhone 返回手势）
document.querySelectorAll("[id^='attraction-']").forEach(page => {

    let backSwipeX = null;
    let backSwipeY = null;

    page.addEventListener("pointerdown", (e) => {

        backSwipeX = e.clientX;
        backSwipeY = e.clientY;

    });

    page.addEventListener("pointerup", (e) => {

        if (backSwipeX === null) return;

        const dx = e.clientX - backSwipeX;
        const dy = e.clientY - backSwipeY;

        backSwipeX = null;
        backSwipeY = null;

        // 太短不触发；竖向滑动不触发（避免干扰上下滚动）
        if (Math.abs(dx) < 60) return;
        if (Math.abs(dx) < Math.abs(dy)) return;

        if (dx > 0) {
            const isDetail = page.id.indexOf("attraction-detail-") === 0;
            showPage(page.dataset.back || "attractions", "attractions", "back", isDetail ? "zoom" : undefined);   // 向右滑 → 返回上一层
        }

    });

});


// 美食子页面：向右滑动返回上一层（放大动画返回）
document.querySelectorAll("[id^='food-']").forEach(page => {

    let backSwipeX = null;
    let backSwipeY = null;

    page.addEventListener("pointerdown", (e) => {

        backSwipeX = e.clientX;
        backSwipeY = e.clientY;

    });

    page.addEventListener("pointerup", (e) => {

        if (backSwipeX === null) return;

        const dx = e.clientX - backSwipeX;
        const dy = e.clientY - backSwipeY;

        backSwipeX = null;
        backSwipeY = null;

        if (Math.abs(dx) < 60) return;
        if (Math.abs(dx) < Math.abs(dy)) return;

        if (dx > 0) {
            showPage("food", "food", "back", "zoom");
        }

    });

});


// ========== 想去清单 + 地图路线 ==========

// 各景点坐标（约值）
const PLACES = {
    "angkor-wat":    { name: "吴哥窟",       en: "Angkor Wat",   lat: 13.4125, lng: 103.8670 },
    "bayon":         { name: "巴戎寺",       en: "Bayon",        lat: 13.4410, lng: 103.8590 },
    "ta-prohm":      { name: "塔普伦寺",     en: "Ta Prohm",     lat: 13.4348, lng: 103.8890 },
    "banteay-srei":  { name: "女王宫",       en: "Banteay Srei", lat: 13.5989, lng: 103.9630 },
    "royal-palace":  { name: "金边大皇宫",   en: "Royal Palace", lat: 11.5655, lng: 104.9310 },
    "s21":           { name: "S21 监狱博物馆", en: "S21",        lat: 11.5478, lng: 104.9163 },
    "tonle-sap":     { name: "洞里萨湖",     en: "Tonle Sap",    lat: 13.2560, lng: 103.8280 },
    "banteay-kdei":  { name: "班黛喀蒂",     en: "Banteay Kdei", lat: 13.4330, lng: 103.8980 },
    "preah-khan":    { name: "圣剑寺",       en: "Preah Khan",   lat: 13.4189, lng: 103.8729 },
    "neak-pean":     { name: "龙蟠水池",     en: "Neak Pean",    lat: 13.4443, lng: 103.8955 },
    "ta-som":        { name: "塔逊寺",       en: "Ta Som",       lat: 13.4643, lng: 103.9136 },
    "east-mebon":    { name: "东梅奔",       en: "East Mebon",   lat: 13.4463, lng: 103.9200 },
    "pre-rup":       { name: "比粒寺",       en: "Pre Rup",      lat: 13.4254, lng: 103.9213 },
    "beng-mealea":   { name: "崩密列",       en: "Beng Mealea",  lat: 13.4766, lng: 104.2233 },

    // 暹粒城市
    "old-market":    { name: "老市场",       en: "Old Market",   lat: 13.3622, lng: 103.8593 },
    "pub-street":    { name: "酒吧街",       en: "Pub Street",   lat: 13.3559, lng: 103.8593 },
    "angkor-museum": { name: "吴哥国家博物馆", en: "Angkor National Museum", lat: 13.3652, lng: 103.8572 },
    "central-market": { name: "中央市场", en: "Central Market", lat: 11.5625, lng: 104.9175 },
    "independence-monument": { name: "独立纪念碑", en: "Independence Monument", lat: 11.5545, lng: 104.928 },
    "national-museum": { name: "国家博物馆", en: "National Museum", lat: 11.5657, lng: 104.929 },
    "wat-phnom": { name: "塔山寺", en: "Wat Phnom", lat: 11.5766, lng: 104.923 },
    "riverside": { name: "湄公河畔", en: "Sisowath Quay", lat: 11.567, lng: 104.932 },
    "russian-market": { name: "俄式市场", en: "Russian Market", lat: 11.5435, lng: 104.924 },
    "choeung-ek": { name: "钟屋屠杀场", en: "Choeung Ek", lat: 11.4844, lng: 104.9 },
    "wat-ounalom": { name: "乌那隆寺", en: "Wat Ounalom", lat: 11.57, lng: 104.927 },
    "royal-gardens": { name: "皇家花园",     en: "Royal Gardens", lat: 13.3620, lng: 103.8550 }
};


// 想去清单（存在浏览器里）
let wishlist = loadWishlist();

// 当前地图上显示的路线：预设路线 或 自己的红心清单
let currentRoute = wishlist.slice();

// 当前路线来自哪里："diy"（红心清单）还是 "preset"（预设路线）
let routeMode = "diy";

function loadWishlist() {
    try {
        return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch (e) {
        return [];
    }
}

function saveWishlist() {
    try {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    } catch (e) { /* 忽略 */ }
}


// 景点卡片右上角的"想去"心形按钮
document.querySelectorAll(".mark-btn").forEach(btn => {

    const key = btn.dataset.place;

    if (wishlist.includes(key)) {
        btn.classList.add("marked");
    }

    btn.addEventListener("click", (e) => {

        e.stopPropagation();

        const idx = wishlist.indexOf(key);

        if (idx >= 0) {
            wishlist.splice(idx, 1);
        } else {
            wishlist.push(key);
        }

        saveWishlist();
        syncHearts();   // 所有页面（列表卡片 + 详情页）的红心一起同步
        currentRoute = wishlist.slice();
        routeMode = "diy";

        // 用户开始自己点红心时，收起预设路线的详情
        const routeDetail = document.getElementById("route-detail");
        if (routeDetail) routeDetail.style.display = "none";

        updateMap();

    });

});


// 地图（Leaflet + OpenStreetMap）
let map = null;
let routeLayer = null;

function initMap() {

    if (typeof L === "undefined") return;   // Leaflet 没加载成功就不初始化

    map = L.map("map-container").setView([12.5, 104.8], 7);

    L.tileLayer("https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=7&x={x}&y={y}&z={z}", {
        maxZoom: 18,
        subdomains: "1234",
        attribution: "© 高德地图"
    }).addTo(map);

    routeLayer = L.featureGroup().addTo(map);

}


// 根据想去清单刷新地图上的标记和路线
function updateMap() {

    if (!map) initMap();
    if (!map) return;

    routeLayer.clearLayers();

    const latlngs = [];

    currentRoute.forEach(key => {

        const p = PLACES[key];
        if (!p) return;

        latlngs.push([p.lat, p.lng]);

        L.circleMarker([p.lat, p.lng], {
            radius: 9,
            color: "#1d1d1f",
            weight: 2,
            fillColor: "#e05c3a",
            fillOpacity: 0.85
        }).addTo(routeLayer).bindPopup(p.name + " · " + p.en);

    });

    if (latlngs.length >= 2) {

        L.polyline(latlngs, {
            color: "#e05c3a",
            weight: 3,
            dashArray: "6 6",
            opacity: 0.8
        }).addTo(routeLayer);

        map.fitBounds(routeLayer.getBounds(), { padding: [40, 40] });

    } else if (latlngs.length === 1) {

        map.setView(latlngs[0], 12);

    } else {

        map.setView([12.5, 104.8], 7);

    }


    // 更新地图页提示 / 路线列表
    const hint = document.getElementById("map-hint");
    const list = document.getElementById("map-list");
    const items = document.getElementById("route-items");
    const navBtn = document.getElementById("route-nav");

    if (currentRoute.length === 0) {
        if (hint) hint.style.display = "block";
        if (list) list.style.display = "none";
    } else {
        if (hint) hint.style.display = "none";
        if (list) list.style.display = "block";

        const routePlaces = currentRoute.map(key => PLACES[key]).filter(Boolean);

        // 每个地点：名字 + 单点"导航" + "移除"按钮
        if (items) {
            items.innerHTML = currentRoute.map((key, i) => {
                const p = PLACES[key];
                if (!p) return "";
                return '<div class="doc-item nav-row">'
                    + "<span>" + (i + 1) + ". " + p.name + " · " + p.en + "</span>"
                    + '<div class="row-actions">'
                    + '<a class="nav-link" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination='
                    + p.lat + "," + p.lng + '">Google</a>'
                    + '<a class="nav-link" target="_blank" href="https://uri.amap.com/navigation?to='
                    + p.lng + "," + p.lat + "," + encodeURIComponent(p.name) + '&mode=car">高德</a>'
                    + '<button class="remove-btn" data-remove="' + key + '" aria-label="移除">×</button>'
                    + "</div>"
                    + "</div>";
            }).join("");
        }

        // 全程导航：Google Maps + 高德地图（按清单顺序生成路线）
        const amapBtn = document.getElementById("route-nav-amap");
        if (navBtn && amapBtn && routePlaces.length >= 1) {
            const dest = routePlaces[routePlaces.length - 1];
            const wps = routePlaces.slice(0, -1).map(p => p.lat + "," + p.lng).join("|");
            let gHref = "https://www.google.com/maps/dir/?api=1&destination=" + dest.lat + "," + dest.lng;
            if (wps) gHref += "&waypoints=" + wps;
            navBtn.href = gHref;

            const amapVia = routePlaces.slice(0, -1).map(p => p.lng + "," + p.lat).join("|");
            let aHref = "https://uri.amap.com/navigation?to=" + dest.lng + "," + dest.lat + "," + encodeURIComponent(dest.name) + "&mode=car";
            if (amapVia) aHref += "&via=" + amapVia;
            amapBtn.href = aHref;
        }
    }

}


// 页面加载时先初始化地图（切到地图页时会重新校准尺寸）
initMap();
updateMap();


// ========== 预设经典路线 ==========

const ROUTES = {
    "small": {
        name: "小圈",
        keys: ["angkor-wat", "bayon", "ta-prohm", "banteay-kdei"],
        hours: "约 4-6 小时",
        transport: [
            { icon: "i-bus", mode: "TukTuk / 汽车", time: "约 4-6 小时", note: "最省力，司机在景点外等候" },
            { icon: "i-bike", mode: "租电动车", time: "约 4-6 小时", note: "自由灵活，注意防晒补水" },
            { icon: "i-footprints", mode: "徒步", time: "不推荐", note: "全程约 17km，走完全程太累" }
        ]
    },
    "grand": {
        name: "大圈",
        keys: ["angkor-wat", "preah-khan", "neak-pean", "ta-som", "east-mebon", "pre-rup"],
        hours: "约 6-8 小时",
        transport: [
            { icon: "i-bus", mode: "TukTuk / 汽车", time: "约 6-8 小时", note: "需包车或全天 TukTuk" },
            { icon: "i-bike", mode: "租电动车", time: "约 6-8 小时", note: "路途较长，备好水和电" },
            { icon: "i-footprints", mode: "徒步", time: "不推荐", note: "全程约 26km，不现实" }
        ]
    },
    "outer": {
        name: "外圈",
        keys: ["banteay-srei", "beng-mealea"],
        hours: "约 8-10 小时（一整天）",
        transport: [
            { icon: "i-bus", mode: "包车 / 汽车", time: "约 8-10 小时", note: "距离远，必须包车" },
            { icon: "i-bike", mode: "租电动车", time: "不建议", note: "路程超过 60km，太远" },
            { icon: "i-footprints", mode: "徒步", time: "不可能", note: "距离太远，别想了" }
        ]
    }
};


// 显示某条路线的耗时 + 交通方式详情
function renderRouteDetail(route) {

    const el = document.getElementById("route-detail");
    if (!el) return;

    el.style.display = "block";

    let html = '<div class="route-head">' + route.name + " · 预计 " + route.hours + "</div>";

    route.transport.forEach(t => {

        html += '<div class="route-row">'
            + '<svg class="icon"><use href="#' + t.icon + '"></use></svg>'
            + "<div><b>" + t.mode + "</b><span>" + t.time + "</span><small>" + t.note + "</small></div>"
            + "</div>";

    });

    el.innerHTML = html;

}


// 一键应用某条预设路线
document.querySelectorAll(".preset-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        const route = ROUTES[btn.dataset.route];
        if (!route) return;

        // 预设路线只在地图上显示，不会改动你的红心「想去」清单
        currentRoute = route.keys.slice();
        routeMode = "preset";

        renderRouteDetail(route);

        updateMap();

    });

});


// 清空我的路线
const clearRouteBtn = document.getElementById("clear-route");

if (clearRouteBtn) {

    clearRouteBtn.addEventListener("click", () => {

        wishlist = [];
        saveWishlist();
        currentRoute = [];
        routeMode = "diy";

        syncHearts();

        const routeDetail = document.getElementById("route-detail");
        if (routeDetail) routeDetail.style.display = "none";

        updateMap();

    });

}


// ========== 我的路线：在列表里直接添加 / 删除景点 ==========

// 把红心按钮和当前想去清单同步（仅 DIY 模式会调用，预设模式不动红心）
function syncHearts() {
    document.querySelectorAll(".mark-btn").forEach(mb => {
        mb.classList.toggle("marked", wishlist.includes(mb.dataset.place));
    });
}

// 添加景点下拉框
const addSelect = document.getElementById("add-place-select");
const addBtn = document.getElementById("add-place-btn");

// 下拉框里放上所有可选景点
if (addSelect) {
    Object.keys(PLACES).forEach(key => {
        const p = PLACES[key];
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = p.name + " · " + p.en;
        addSelect.appendChild(opt);
    });
}

// 点「添加」：把选中的景点加到路线末尾
if (addBtn && addSelect) {

    addBtn.addEventListener("click", () => {

        const key = addSelect.value;
        if (!key) return;

        addSelect.value = "";

        if (currentRoute.includes(key)) return;   // 已经在路线里就不重复加

        currentRoute.push(key);

        if (routeMode !== "preset") {
            wishlist = currentRoute.slice();
            saveWishlist();
            syncHearts();
        }

        updateMap();

    });

}

// 点列表里的 ×：移除这个景点（事件委托，列表每次刷新都生效）
const routeItemsEl = document.getElementById("route-items");

if (routeItemsEl) {

    routeItemsEl.addEventListener("click", (e) => {

        const btn = e.target.closest(".remove-btn");
        if (!btn) return;

        const key = btn.dataset.remove;
        const idx = currentRoute.indexOf(key);
        if (idx < 0) return;

        currentRoute.splice(idx, 1);

        if (routeMode !== "preset") {
            wishlist = currentRoute.slice();
            saveWishlist();
            syncHearts();
        }

        updateMap();

    });

}


// ========== 预算计算器 ==========
const budgetInputs = document.querySelectorAll(".budget-input");
const budgetTotal = document.getElementById("budget-total");

function calcBudget() {
    let total = 0;
    budgetInputs.forEach(inp => {
        const v = parseFloat(inp.value) || 0;
        total += v;
        try { localStorage.setItem("budget-" + inp.dataset.key, inp.value); } catch (e) { }
    });
    if (budgetTotal) {
        budgetTotal.textContent = "¥ " + total.toLocaleString();
    }
}

budgetInputs.forEach(inp => {
    try { inp.value = localStorage.getItem("budget-" + inp.dataset.key) || ""; } catch (e) { }
    inp.addEventListener("input", calcBudget);
});

const budgetReset = document.getElementById("budget-reset");
if (budgetReset) {
    budgetReset.addEventListener("click", () => {
        budgetInputs.forEach(inp => {
            inp.value = "";
            try { localStorage.removeItem("budget-" + inp.dataset.key); } catch (e) { }
        });
        calcBudget();
    });
}
calcBudget();


// ========== 攻略页：快捷跳转 ==========
document.querySelectorAll(".guide-chip").forEach(chip => {

    chip.addEventListener("click", () => {

        const target = document.getElementById(chip.dataset.target);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    });

});


// ========== 深色模式（全局右上角开关） ==========
const darkToggle = document.getElementById("dark-toggle");

function applyDark(dark) {
    document.body.classList.toggle("dark", dark);
    try { localStorage.setItem("dark-mode", dark ? "1" : "0"); } catch (e) { }
}

let darkMode = false;
try { darkMode = localStorage.getItem("dark-mode") === "1"; } catch (e) { }
applyDark(darkMode);

if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        applyDark(!document.body.classList.contains("dark"));
    });
}

// 关于页：向右滑动返回首页
document.querySelectorAll("#about").forEach(page => {

    let bx = null, by = null;
    page.addEventListener("pointerdown", (e) => { bx = e.clientX; by = e.clientY; });
    page.addEventListener("pointerup", (e) => {
        if (bx === null) return;
        const dx = e.clientX - bx, dy = e.clientY - by;
        bx = null; by = null;
        if (Math.abs(dx) < 60) return;
        if (Math.abs(dx) < Math.abs(dy)) return;
        if (dx > 0) showPage("home", "home", "back");
    });

});
