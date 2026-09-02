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

        searchJump = false;
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

        searchJump = false;
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

        if (searchJump) {
            searchJump = false;
            showPage("home", "home", "back", "zoom");
            return;
        }
        showPage(btn.dataset.back, btn.dataset.nav || btn.dataset.back, "back", btn.dataset.mode);

    });

});

// 景点子页面：向右滑动返回上一层（像 iPhone 返回手势）
document.querySelectorAll("[id^='attraction-']").forEach(page => {

    let backSwipeX = null;
    let backSwipeY = null;

    page.addEventListener("pointerdown", (e) => {

        // 只在页面左边缘附近（约 30px 内）开始右滑才算返回手势，中间滑动不触发
        const r = page.getBoundingClientRect();

        if (e.clientX > r.left + 30) { backSwipeX = null; return; }

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

        // 只在页面左边缘附近（约 30px 内）开始右滑才算返回手势，中间滑动不触发
        const r = page.getBoundingClientRect();

        if (e.clientX > r.left + 30) { backSwipeX = null; return; }

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

// ========== 我的行程：状态（提前声明，地图渲染会用到） ==========
const ITIN_KEY = "my-itinerary";
let myItinerary = [];
try { myItinerary = JSON.parse(localStorage.getItem(ITIN_KEY) || "[]"); } catch (e) { }
if (!Array.isArray(myItinerary)) myItinerary = [];

let mapMode = "preset";     // "preset" = 预设路线 / "itinerary" = 我的行程
let activeDay = 0;          // 当前在地图上显示第几天
let pickDay = null;         // 正在往第几天添加景点

function saveItinerary() { try { localStorage.setItem(ITIN_KEY, JSON.stringify(myItinerary)); } catch (e) { } }
function activeDayKeys() { return (myItinerary[activeDay] && myItinerary[activeDay].keys) || []; }


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

    // 我的行程模式下显示当前选中的那一天；预设/红心模式显示 currentRoute
    const display = (mapMode === "itinerary") ? activeDayKeys() : currentRoute;

    const latlngs = [];

    display.forEach(key => {

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

    if (mapMode === "itinerary") {
        if (hint) hint.style.display = "none";
        if (list) list.style.display = "none";
    } else if (display.length === 0) {
        if (hint) hint.style.display = "block";
        if (list) list.style.display = "none";
    } else {
        if (hint) hint.style.display = "none";
        if (list) list.style.display = "block";

        const routePlaces = display.map(key => PLACES[key]).filter(Boolean);

        // 每个地点：名字 + 单点"导航" + "移除"按钮
        if (items) {
            items.innerHTML = display.map((key, i) => {
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


// ========== 我的行程（地图页 · 多天规划） ==========

function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
// 正文翻译小助手：英文模式下返回英文，否则返回中文
function tr(zh) {
    return (currentLang === "en" && CONTENT && CONTENT.en && CONTENT.en[zh]) ? CONTENT.en[zh] : zh;
}

// 景点选择弹窗里的分组（按城市 / 吴哥圈分类）
const PLACE_GROUPS = [
    { label: "金边", keys: ["royal-palace","s21","central-market","independence-monument","national-museum","wat-phnom","riverside","russian-market","choeung-ek","wat-ounalom"] },
    { label: "暹粒城市", keys: ["old-market","pub-street","angkor-museum","royal-gardens"] },
    { label: "吴哥 · 小圈", keys: ["angkor-wat","bayon","ta-prohm","banteay-kdei","ta-keo","prasat-kravan","srah-srang"] },
    { label: "吴哥 · 大圈", keys: ["preah-khan","neak-pean","ta-som","east-mebon","pre-rup","phnom-bakheng","banteay-samre"] },
    { label: "吴哥 · 外圈", keys: ["banteay-srei","beng-mealea","phnom-kulen","kbal-spean","koh-ker","preah-vihear"] },
    { label: "洞里萨湖", keys: ["tonle-sap"] }
];

// 经典路线模板：一键生成多天行程
const CLASSIC_ROUTES = {
    "5day": {
        nameKey: "itin.classic5",
        days: [
            { name: "Day 1 · 金边", en: "Day 1 · Phnom Penh", keys: ["royal-palace","s21","central-market","riverside"] },
            { name: "Day 2 · 金边 → 暹粒", en: "Day 2 · Phnom Penh → Siem Reap", keys: ["national-museum","wat-phnom","old-market","pub-street"] },
            { name: "Day 3 · 吴哥小圈", en: "Day 3 · Angkor Small Circuit", keys: ["angkor-wat","bayon","ta-prohm","banteay-kdei"] },
            { name: "Day 4 · 吴哥大圈", en: "Day 4 · Angkor Grand Circuit", keys: ["preah-khan","neak-pean","ta-som","east-mebon","pre-rup"] },
            { name: "Day 5 · 吴哥外圈", en: "Day 5 · Angkor Outer Circuit", keys: ["banteay-srei","beng-mealea"] }
        ]
    },
    "7day": {
        nameKey: "itin.classic7",
        days: [
            { name: "Day 1 · 金边", en: "Day 1 · Phnom Penh", keys: ["royal-palace","s21","independence-monument","riverside"] },
            { name: "Day 2 · 金边", en: "Day 2 · Phnom Penh", keys: ["wat-phnom","wat-ounalom","national-museum","russian-market"] },
            { name: "Day 3 · 金边 → 暹粒", en: "Day 3 · Phnom Penh → Siem Reap", keys: ["central-market","old-market","pub-street"] },
            { name: "Day 4 · 吴哥小圈", en: "Day 4 · Angkor Small Circuit", keys: ["angkor-wat","bayon","ta-prohm","banteay-kdei"] },
            { name: "Day 5 · 吴哥大圈", en: "Day 5 · Angkor Grand Circuit", keys: ["preah-khan","neak-pean","ta-som","east-mebon","pre-rup"] },
            { name: "Day 6 · 吴哥外圈", en: "Day 6 · Angkor Outer Circuit", keys: ["banteay-srei","beng-mealea"] },
            { name: "Day 7 · 洞里萨湖", en: "Day 7 · Tonlé Sap", keys: ["tonle-sap","royal-gardens","angkor-museum"] }
        ]
    }
};

// 某一天的「全程导航」链接（Google Maps + 高德）
function dayNavHTML(di) {
    const day = myItinerary[di];
    if (!day || day.keys.length === 0) return "";
    const places = day.keys.map(k => PLACES[k]).filter(Boolean);
    if (places.length === 0) return "";
    const dest = places[places.length - 1];
    const wps = places.slice(0, -1).map(p => p.lat + "," + p.lng).join("|");
    let g = "https://www.google.com/maps/dir/?api=1&destination=" + dest.lat + "," + dest.lng;
    if (wps) g += "&waypoints=" + wps;
    const via = places.slice(0, -1).map(p => p.lng + "," + p.lat).join("|");
    let a = "https://uri.amap.com/navigation?to=" + dest.lng + "," + dest.lat + "," + encodeURIComponent(dest.name) + "&mode=car";
    if (via) a += "&via=" + via;
    return '<div class="route-nav-row itin-nav">'
        + '<span class="itin-nav-label">' + t("itin.navLabel") + "</span>"
        + '<a class="route-nav-btn" target="_blank" rel="noopener" href="' + g + '">Google Maps</a>'
        + '<a class="route-nav-btn amap" target="_blank" rel="noopener" href="' + a + '">高德地图</a>'
        + "</div>";
}

// 渲染「我的行程」面板
function renderItineraryPanel() {
    const el = document.getElementById("itin-list");
    if (!el) return;
    if (myItinerary.length === 0) {
        el.innerHTML = '<p class="muted">' + t("itin.empty") + "</p>";
        return;
    }
    el.innerHTML = myItinerary.map((day, di) => {
        const active = di === activeDay ? " active" : "";
        const dayTitle = (currentLang === "en" && day.en) ? day.en : day.name;
        const places = day.keys.map((key, pi) => {
            if (key === "free-time") {
                return '<div class="itin-place itin-free-place" data-key="free-time">'
                    + '<div class="itin-place-row">'
                    + '<button class="itin-grip" aria-label="拖动排序" title="拖动排序"><svg class="icon"><use href="#i-grip"></use></svg></button>'
                    + '<span class="itin-idx">' + (pi + 1) + "</span>"
                    + '<span class="itin-place-name itin-free">自由活动 · Free time</span>'
                    + '<button class="remove-btn" data-act="remove-place" data-day="' + di + '" data-idx="' + pi + '" aria-label="移除">×</button>'
                    + "</div>"
                    + "</div>";
            }
            const p = PLACES[key];
            if (!p) return "";
            return '<div class="itin-place" data-key="' + key + '">'
                + '<div class="itin-place-row">'
                + '<button class="itin-grip" aria-label="拖动排序" title="拖动排序"><svg class="icon"><use href="#i-grip"></use></svg></button>'
                + '<span class="itin-idx">' + (pi + 1) + "</span>"
                + '<span class="itin-place-name">' + p.name + " · " + p.en + "</span>"
                + '<button class="remove-btn" data-act="remove-place" data-day="' + di + '" data-idx="' + pi + '" aria-label="移除">×</button>'
                + "</div>"
                + '<div class="itin-place-nav">'
                + '<a class="nav-link" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&destination=' + p.lat + "," + p.lng + '">Google Maps</a>'
                + '<a class="nav-link amap" target="_blank" rel="noopener" href="https://uri.amap.com/navigation?to=' + p.lng + "," + p.lat + "," + encodeURIComponent(p.name) + '&mode=car">高德地图</a>'
                + "</div>"
                + "</div>";
        }).join("");
        return '<div class="card itin-day-card' + active + '" data-day="' + di + '">'
            + '<div class="itin-day-head">'
            + '<span class="itin-day-badge">' + (di + 1) + "</span>"
            + '<input class="itin-day-name" value="' + escapeHtml(day.name) + '" data-day="' + di + '" aria-label="行程名称">'
            + '<div class="row-actions">'
            + '<button class="mini-btn" data-act="day-up" data-day="' + di + '" aria-label="上移一天">↑</button>'
            + '<button class="mini-btn" data-act="day-down" data-day="' + di + '" aria-label="下移一天">↓</button>'
            + '<button class="remove-btn" data-act="del-day" data-day="' + di + '" aria-label="删除这天">×</button>'
            + "</div></div>"
            + '<div class="itin-places">' + (places || '<p class="muted">' + t("itin.noPlaces") + "</p>") + "</div>"
            + '<button class="add-btn itin-add-place" data-act="add-place" data-day="' + di + '">＋ ' + t("itin.addPlaces") + "</button>"
            + dayNavHTML(di)
            + "</div>";
    }).join("");
}

// 模式切换：预设路线 / 我的行程
function switchMapMode(mode) {
    mapMode = mode;
    document.querySelectorAll(".map-tab").forEach(b => b.classList.toggle("active", b.dataset.mapMode === mode));
    const pm = document.getElementById("map-preset-mode");
    const im = document.getElementById("map-itinerary-mode");
    if (pm) pm.style.display = mode === "preset" ? "block" : "none";
    if (im) im.style.display = mode === "itinerary" ? "block" : "none";
    // 我的行程模式：地图吸在顶部，滑到下面调整行程时也能看到当天路线
    const mapSec = document.getElementById("map");
    if (mapSec) mapSec.classList.toggle("map-itin", mode === "itinerary");
    setTimeout(() => { if (map) map.invalidateSize(); }, 60);
    if (mode === "itinerary") renderItineraryPanel();
    updateMap();
}

// 选中某一天（在地图上显示这一天）
function selectDay(di) {
    if (!myItinerary[di]) return;
    activeDay = di;
    renderItineraryPanel();
    updateMap();
}

// 一键生成经典路线
function applyClassic(key) {
    const tpl = CLASSIC_ROUTES[key];
    if (!tpl) return;
    const hasContent = myItinerary.some(d => d.keys.length > 0);
    if (hasContent && !window.confirm(t("itin.overwrite"))) return;
    myItinerary = tpl.days.map(d => ({ name: d.name, en: d.en || "", keys: d.keys.slice() }));
    saveItinerary();
    activeDay = 0;
    switchMapMode("itinerary");
    renderItineraryPanel();
    updateMap();
}

// 打开景点选择弹窗（给某一天添加）
function openPicker(di) {
    pickDay = di;
    const day = myItinerary[di];
    const title = document.getElementById("itin-picker-title");
    if (title) {
        const dayName = day ? ((currentLang === "en" && day.en) ? day.en : day.name) : "";
        title.textContent = t("itin.pickTitle").replace("{day}", dayName);
    }
    const body = document.getElementById("itin-picker-body");
    if (!body) return;
    const isIn = (key) => day && day.keys.indexOf(key) >= 0;
    // 「自由活动」选项（不计入地图，但会显示在行程里）
    const freeGroup = '<div class="pick-group"><b>行程安排 · Plan</b>'
        + '<label class="pick-item"><input type="checkbox" value="free-time"' + (isIn("free-time") ? " checked" : "") + '> <span class="pick-free">自由活动 · Free time</span></label>'
        + "</div>";
    body.innerHTML = freeGroup + PLACE_GROUPS.map(g => {
        const gLabel = tr(g.label);
        const items = g.keys.map(key => {
            const p = PLACES[key];
            if (!p) return "";
            const checked = isIn(key) ? " checked" : "";
            return '<label class="pick-item"><input type="checkbox" value="' + key + '"' + checked + "> <span>" + p.name + " · " + p.en + "</span></label>";
        }).join("");
        return '<div class="pick-group"><b>' + gLabel + "</b>" + items + "</div>";
    }).join("");
    const ov = document.getElementById("itin-picker");
    if (ov) ov.style.display = "flex";
}

function closePicker() {
    const ov = document.getElementById("itin-picker");
    if (ov) ov.style.display = "none";
    pickDay = null;
}

// 模式切换按钮
document.querySelectorAll(".map-tab").forEach(b => {
    b.addEventListener("click", () => switchMapMode(b.dataset.mapMode));
});

// 经典路线按钮
document.querySelectorAll(".classic-btn").forEach(b => {
    b.addEventListener("click", () => applyClassic(b.dataset.classic));
});

// 新建一天
const itinAddDay = document.getElementById("itin-add-day");
if (itinAddDay) {
    itinAddDay.addEventListener("click", () => {
        myItinerary.push({ name: "Day " + (myItinerary.length + 1), en: "", keys: [] });
        saveItinerary();
        activeDay = myItinerary.length - 1;
        renderItineraryPanel();
        updateMap();
        openPicker(activeDay);   // 新建后直接弹选择器
    });
}

// 清空行程
const itinClear = document.getElementById("itin-clear");
if (itinClear) {
    itinClear.addEventListener("click", () => {
        if (!window.confirm(t("itin.clearConfirm"))) return;
        myItinerary = [];
        activeDay = 0;
        saveItinerary();
        renderItineraryPanel();
        updateMap();
    });
}

// 选择弹窗：关闭 / 确认
const itinPickerClose = document.getElementById("itin-picker-close");
const itinPickerCancel = document.getElementById("itin-picker-cancel");
const itinPickerConfirm = document.getElementById("itin-picker-confirm");
if (itinPickerClose) itinPickerClose.addEventListener("click", closePicker);
if (itinPickerCancel) itinPickerCancel.addEventListener("click", closePicker);
if (itinPickerConfirm) {
    itinPickerConfirm.addEventListener("click", () => {
        const day = myItinerary[pickDay];
        if (day) {
            const checked = new Set([...document.querySelectorAll("#itin-picker-body input[type=checkbox]:checked")].map(c => c.value));
            // 保留原有顺序：先移除被取消勾选的，再追加新勾选的
            day.keys = day.keys.filter(k => checked.has(k));
            checked.forEach(k => { if (day.keys.indexOf(k) < 0) day.keys.push(k); });
            saveItinerary();
        }
        renderItineraryPanel();
        if (pickDay === activeDay) updateMap();
        closePicker();
    });
}

// 行程面板：点卡片切换当天 / 点按钮操作（事件委托）
const itinList = document.getElementById("itin-list");
if (itinList) {
    itinList.addEventListener("click", (e) => {
        const card = e.target.closest(".itin-day-card");
        if (card && !e.target.closest("button") && !e.target.closest("input") && !e.target.closest("a")) {
            selectDay(parseInt(card.dataset.day, 10));
            return;
        }
        const btn = e.target.closest("[data-act]");
        if (!btn) return;
        const act = btn.dataset.act;
        const di = parseInt(btn.dataset.day, 10);
        const pi = parseInt(btn.dataset.idx, 10);
        const day = myItinerary[di];
        if (!day) return;

        if (act === "del-day") {
            myItinerary.splice(di, 1);
            if (activeDay >= myItinerary.length) activeDay = Math.max(0, myItinerary.length - 1);
            saveItinerary(); renderItineraryPanel(); updateMap();
        } else if (act === "day-up") {
            if (di > 0) {
                const t = myItinerary[di]; myItinerary[di] = myItinerary[di - 1]; myItinerary[di - 1] = t;
                if (activeDay === di) activeDay--; else if (activeDay === di - 1) activeDay++;
                saveItinerary(); renderItineraryPanel(); updateMap();
            }
        } else if (act === "day-down") {
            if (di < myItinerary.length - 1) {
                const t = myItinerary[di]; myItinerary[di] = myItinerary[di + 1]; myItinerary[di + 1] = t;
                if (activeDay === di) activeDay++; else if (activeDay === di + 1) activeDay--;
                saveItinerary(); renderItineraryPanel(); updateMap();
            }
        } else if (act === "remove-place") {
            day.keys.splice(pi, 1);
            saveItinerary(); renderItineraryPanel();
            if (di === activeDay) updateMap();
        } else if (act === "add-place") {
            openPicker(di);
        }
    });

    // 改行程名称：失焦保存；按回车 = 失焦
    itinList.addEventListener("change", (e) => {
        const inp = e.target.closest(".itin-day-name");
        if (!inp) return;
        const di = parseInt(inp.dataset.day, 10);
        const day = myItinerary[di];
        if (!day) return;
        day.name = inp.value.trim() || ("Day " + (di + 1));
        day.en = "";   // 用户自定义名称后，英文模式也用这个名字
        saveItinerary();
        renderItineraryPanel();
    });
    itinList.addEventListener("keydown", (e) => {
        const inp = e.target.closest(".itin-day-name");
        if (!inp) return;
        if (e.key === "Enter") inp.blur();
    });

    // 拖动排序：按住小圆点拖动景点
    let dragPlace = null;

    itinList.addEventListener("pointerdown", (e) => {
        const grip = e.target.closest(".itin-grip");
        if (!grip) return;
        const place = grip.closest(".itin-place");
        const card = grip.closest(".itin-day-card");
        if (!place || !card) return;
        dragPlace = { el: place, dayIdx: parseInt(card.dataset.day, 10) };
        place.classList.add("dragging");
        document.addEventListener("pointermove", onItinDragMove);
        document.addEventListener("pointerup", onItinDragUp);
        e.preventDefault();
    });

    function onItinDragMove(e) {
        if (!dragPlace) return;
        e.preventDefault();
        const under = document.elementFromPoint(e.clientX, e.clientY);
        const target = under && under.closest(".itin-place");
        if (target && target !== dragPlace.el && target.parentElement === dragPlace.el.parentElement) {
            const r = target.getBoundingClientRect();
            const before = e.clientY < r.top + r.height / 2;
            dragPlace.el.parentElement.insertBefore(dragPlace.el, before ? target : target.nextSibling);
        }
    }

    function onItinDragUp() {
        if (!dragPlace) return;
        const el = dragPlace.el;
        const dayIdx = dragPlace.dayIdx;
        el.classList.remove("dragging");
        const day = myItinerary[dayIdx];
        if (day && el.parentElement) {
            day.keys = [...el.parentElement.querySelectorAll(".itin-place")].map(p => p.dataset.key).filter(Boolean);
            saveItinerary();
        }
        dragPlace = null;
        renderItineraryPanel();
        if (dayIdx === activeDay) updateMap();
        document.removeEventListener("pointermove", onItinDragMove);
        document.removeEventListener("pointerup", onItinDragUp);
    }
}

// 页面加载时渲染一次
renderItineraryPanel();

// ========== 保存行程为图片 ==========

const itinExportBtn = document.getElementById("itin-export");
const itinExportOverlay = document.getElementById("itin-export-overlay");
const itinExportImg = document.getElementById("itin-export-img");
let lastExportBlob = null;

function escapeXml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

const SVG_FONT = "-apple-system,BlinkMacSystemFont,'PingFang SC','Helvetica Neue',Arial,sans-serif";

// 把行程画成一张 SVG 图
function buildItinerarySVG() {
    const W = 720;
    const PAD = 36;
    const TITLE_H = 150;
    const DAY_HEAD_H = 58;
    const ROW_H = 46;
    const DAY_GAP = 30;
    const FOOT_H = 44;

    const days = myItinerary.filter(d => (d.name || "").trim() || (d.keys || []).length > 0);

    let h = PAD + TITLE_H + PAD;
    days.forEach(d => {
        const rows = (d.keys || []).filter(k => PLACES[k]);
        h += DAY_HEAD_H + rows.length * ROW_H + DAY_GAP;
    });
    h += FOOT_H + PAD;

    const totalPlaces = days.reduce((n, d) => n + (d.keys || []).filter(k => PLACES[k]).length, 0);

    const parts = [];
    parts.push('<svg xmlns="http://www.w3.org/2000/svg" width="' + W + '" height="' + h + '" viewBox="0 0 ' + W + ' ' + h + '">');
    parts.push('<rect width="' + W + '" height="' + h + '" fill="#f7f4ef"/>');
    parts.push('<rect x="0" y="0" width="' + W + '" height="' + TITLE_H + '" fill="#e05c3a"/>');

    const today = new Date();
    const dateStr = today.getFullYear() + "-" + String(today.getMonth() + 1).padStart(2, "0") + "-" + String(today.getDate()).padStart(2, "0");

    parts.push('<text x="' + PAD + '" y="58" font-family="' + SVG_FONT + '" font-size="30" font-weight="700" fill="#ffffff">柬埔寨旅行指南 · Cambodia Travel Guide</text>');
    parts.push('<text x="' + PAD + '" y="100" font-family="' + SVG_FONT + '" font-size="22" font-weight="600" fill="#ffe9dd">我的行程 · My Cambodia Itinerary</text>');
    parts.push('<text x="' + PAD + '" y="132" font-family="' + SVG_FONT + '" font-size="14" fill="#ffd9c4">' + dateStr + " · 共 " + days.length + " 天 · " + totalPlaces + " 个景点 / " + days.length + " days · " + totalPlaces + " places</text>");

    let y = PAD + TITLE_H + PAD;
    days.forEach((d, di) => {
        const rows = (d.keys || []).filter(k => PLACES[k] || k === "free-time");
        const dname = (currentLang === "en" && d.en) ? d.en : d.name;
        parts.push('<rect x="' + PAD + '" y="' + y + '" width="44" height="44" rx="22" fill="#1d1d1f"/>');
        parts.push('<text x="' + (PAD + 22) + '" y="' + (y + 29) + '" text-anchor="middle" font-family="' + SVG_FONT + '" font-size="18" font-weight="700" fill="#ffffff">' + (di + 1) + "</text>");
        parts.push('<text x="' + (PAD + 60) + '" y="' + (y + 30) + '" font-family="' + SVG_FONT + '" font-size="20" font-weight="700" fill="#1d1d1f">' + escapeXml(dname) + "</text>");
        y += DAY_HEAD_H;
        rows.forEach((k, ri) => {
            if (k === "free-time") {
                parts.push('<circle cx="' + (PAD + 22) + '" cy="' + (y + 22) + '" r="14" fill="#e5e0d8"/>');
                parts.push('<text x="' + (PAD + 22) + '" y="' + (y + 27) + '" text-anchor="middle" font-family="' + SVG_FONT + '" font-size="13" font-weight="700" fill="#8e8e93">' + (ri + 1) + "</text>");
                parts.push('<text x="' + (PAD + 46) + '" y="' + (y + 27) + '" font-family="' + SVG_FONT + '" font-size="16" font-style="italic" fill="#8e8e93">自由活动 · Free time</text>');
            } else {
                const p = PLACES[k];
                parts.push('<circle cx="' + (PAD + 22) + '" cy="' + (y + 22) + '" r="14" fill="#f2d9c8"/>');
                parts.push('<text x="' + (PAD + 22) + '" y="' + (y + 27) + '" text-anchor="middle" font-family="' + SVG_FONT + '" font-size="13" font-weight="700" fill="#e05c3a">' + (ri + 1) + "</text>");
                parts.push('<text x="' + (PAD + 46) + '" y="' + (y + 27) + '" font-family="' + SVG_FONT + '" font-size="16" fill="#1d1d1f">' + escapeXml(p.name + " · " + p.en) + "</text>");
            }
            y += ROW_H;
        });
        y += DAY_GAP;
    });

    parts.push('<text x="' + PAD + '" y="' + (h - PAD + 10) + '" font-family="' + SVG_FONT + '" font-size="13" fill="#b0a89e">Made with Cambodia Travel Guide · 我的第一个编程作品</text>');
    parts.push("</svg>");
    return parts.join("");
}

// SVG → PNG（2 倍清晰度）
function svgToPng(svgString) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        img.onload = () => {
            const scale = 2;
            const canvas = document.createElement("canvas");
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(url);
            canvas.toBlob(b => b ? resolve({ blob: b, canvas }) : reject(new Error("toBlob failed")), "image/png");
        };
        img.onerror = () => { URL.revokeObjectURL(url); reject(new Error("svg load failed")); };
        img.src = url;
    });
}

function itinDownload(blob) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "cambodia-itinerary.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

if (itinExportBtn) {
    itinExportBtn.addEventListener("click", async () => {
        const hasPlaces = myItinerary.some(d => (d.keys || []).length > 0);
        if (!hasPlaces) { window.alert(t("itin.exportEmpty")); return; }
        try {
            const { blob } = await svgToPng(buildItinerarySVG());
            lastExportBlob = blob;
            if (itinExportImg) itinExportImg.src = URL.createObjectURL(blob);
            if (itinExportOverlay) itinExportOverlay.style.display = "flex";
        } catch (e) {
            window.alert(t("itin.exportFail"));
        }
    });
}

const itinExportClose = document.getElementById("itin-export-close");
if (itinExportClose) {
    itinExportClose.addEventListener("click", () => { if (itinExportOverlay) itinExportOverlay.style.display = "none"; });
}
if (itinExportOverlay) {
    itinExportOverlay.addEventListener("click", (e) => {
        if (e.target === itinExportOverlay) itinExportOverlay.style.display = "none";
    });
}

const itinExportDownload = document.getElementById("itin-export-download");
if (itinExportDownload) {
    itinExportDownload.addEventListener("click", () => { if (lastExportBlob) itinDownload(lastExportBlob); });
}

const itinExportShare = document.getElementById("itin-export-share");
if (itinExportShare) {
    itinExportShare.addEventListener("click", async () => {
        if (!lastExportBlob) return;
        const file = new File([lastExportBlob], "cambodia-itinerary.png", { type: "image/png" });
        const nav = navigator;
        if (nav.share && nav.canShare && nav.canShare({ files: [file] })) {
            try {
                // 只分享图片文件（不带文字），iPhone 的分享菜单才会出现「存储图像」可直接存相册
                await nav.share({ files: [file] });
            } catch (e) { /* 用户取消分享 */ }
        } else {
            itinDownload(lastExportBlob);
        }
    });
}

// ========== 关于页：滚动浮现动画（苹果式） ==========
(function () {
    const aboutSec = document.getElementById("about");
    if (!aboutSec) return;
    const items = aboutSec.querySelectorAll(".about-reveal");
    if (items.length === 0) return;

    const reveal = (el) => {
        el.classList.add("revealed");
        el.classList.remove("about-hide");
    };

    // 只有浏览器支持 IntersectionObserver 才做动画；否则内容直接可见（安全兜底）
    if (!("IntersectionObserver" in window)) return;

    items.forEach(el => el.classList.add("about-hide"));

    const io = new IntersectionObserver((entries) => {
        entries.forEach(en => {
            if (en.isIntersecting) {
                reveal(en.target);
                io.unobserve(en.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    items.forEach(el => io.observe(el));

    // 关于页从隐藏变为显示时，等翻页动画结束，先浮现首屏内容
    const mo = new MutationObserver(() => {
        if (aboutSec.classList.contains("active")) {
            setTimeout(() => {
                items.forEach(el => {
                    if (el.classList.contains("revealed")) return;
                    const r = el.getBoundingClientRect();
                    if (r.top < window.innerHeight * 0.9 && r.bottom > 0) reveal(el);
                });
            }, 520);
        }
    });
    mo.observe(aboutSec, { attributes: true, attributeFilter: ["class"] });
})();

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
    page.addEventListener("pointerdown", (e) => {
        // 只在页面左边缘附近（约 30px 内）开始右滑才算返回手势，中间滑动不触发
        const r = page.getBoundingClientRect();
        if (e.clientX > r.left + 30) { bx = null; return; }
        bx = e.clientX; by = e.clientY;
    });
    page.addEventListener("pointerup", (e) => {
        if (bx === null) return;
        const dx = e.clientX - bx, dy = e.clientY - by;
        bx = null; by = null;
        if (Math.abs(dx) < 60) return;
        if (Math.abs(dx) < Math.abs(dy)) return;
        if (dx > 0) showPage("home", "home", "back");
    });

});


// ========== 汇率换算 ==========
const RATES = { cny: 7.2, usd: 1, khr: 4000 };   // 1 美元对应的值

const curAmount = document.getElementById("cur-amount");
const curFrom = document.getElementById("cur-from");

function convertCurrency() {
    if (!curAmount || !curFrom) return;
    const amount = parseFloat(curAmount.value) || 0;
    const usd = amount / RATES[curFrom.value];
    const cny = document.getElementById("cur-cny");
    const usdEl = document.getElementById("cur-usd");
    const khr = document.getElementById("cur-khr");
    if (cny) cny.textContent = "¥ " + Math.round(usd * RATES.cny).toLocaleString();
    if (usdEl) usdEl.textContent = "$ " + (usd * RATES.usd).toFixed(2);
    if (khr) khr.textContent = "៛ " + Math.round(usd * RATES.khr).toLocaleString();
}

if (curAmount) curAmount.addEventListener("input", convertCurrency);
if (curFrom) curFrom.addEventListener("change", convertCurrency);
convertCurrency();


// ========== 记账（多货币） ==========
const LEDGER_KEY = "cambodia-ledger";
let ledger = [];
try { ledger = JSON.parse(localStorage.getItem(LEDGER_KEY) || "[]"); } catch (e) { }

function saveLedger() { try { localStorage.setItem(LEDGER_KEY, JSON.stringify(ledger)); } catch (e) { } }

function fmtMoney(cur, amount) {
    if (cur === "cny") return "¥ " + Math.round(amount).toLocaleString();
    if (cur === "usd") return "$ " + Number(amount).toFixed(2);
    return "៛ " + Math.round(amount).toLocaleString();
}

function renderLedger() {
    const list = document.getElementById("ledger-list");
    const total = document.getElementById("ledger-total");
    if (!list) return;
    if (ledger.length === 0) {
        list.innerHTML = '<p class="muted">还没有记录，记下第一笔吧。</p>';
        if (total) total.innerHTML = "";
        return;
    }
    list.innerHTML = ledger.map((e, i) =>
        '<div class="ledger-item"><span>' + e.cat + '</span><b>' + fmtMoney(e.cur, e.amount) + '</b>'
        + '<button class="ledger-del" data-i="' + i + '" aria-label="删除">×</button></div>'
    ).join("");

    const sums = { cny: 0, usd: 0, khr: 0 };
    ledger.forEach(e => sums[e.cur] += Number(e.amount) || 0);
    const parts = [];
    if (sums.usd) parts.push("$ " + sums.usd.toFixed(2));
    if (sums.cny) parts.push("¥ " + Math.round(sums.cny).toLocaleString());
    if (sums.khr) parts.push("៛ " + Math.round(sums.khr).toLocaleString());
    const totalCny = (sums.usd * 7.2) + sums.cny + (sums.khr / 4000 * 7.2);
    if (total) total.innerHTML = '<div class="ledger-total-row"><span>合计（按币种）</span><b>' + (parts.join(" · ") || "—") + '</b></div>'
        + '<div class="ledger-total-row"><span>约合人民币</span><b>¥ ' + Math.round(totalCny).toLocaleString() + '</b></div>';
}

const ledgerAdd = document.getElementById("ledger-add");
if (ledgerAdd) {
    ledgerAdd.addEventListener("click", () => {
        const amountEl = document.getElementById("ledger-amount");
        const amount = parseFloat(amountEl.value);
        if (!amount || amount <= 0) return;
        const cat = document.getElementById("ledger-cat").value;
        const cur = document.getElementById("ledger-cur").value;
        ledger.push({ cat: cat, cur: cur, amount: amount });
        saveLedger();
        amountEl.value = "";
        renderLedger();
    });
}

const ledgerList = document.getElementById("ledger-list");
if (ledgerList) {
    ledgerList.addEventListener("click", (e) => {
        const btn = e.target.closest(".ledger-del");
        if (!btn) return;
        ledger.splice(Number(btn.dataset.i), 1);
        saveLedger();
        renderLedger();
    });
}

const ledgerClear = document.getElementById("ledger-clear");
if (ledgerClear) {
    ledgerClear.addEventListener("click", () => {
        ledger = [];
        saveLedger();
        renderLedger();
    });
}
renderLedger();


// ========== 汇率小图标：跳到助手页汇率板块 ==========
const currencyToggle = document.getElementById("currency-toggle");
if (currencyToggle) {
    currencyToggle.addEventListener("click", () => {
        showPage("guide", "guide");
        setTimeout(() => {
            const el = document.getElementById("sec-currency");
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 400);
    });
}


// ========== 助手页：快捷标签跳转 ==========
document.querySelectorAll(".guide-chip").forEach(chip => {

    chip.addEventListener("click", () => {

        const target = document.getElementById(chip.dataset.target);
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }

    });

});


// 从搜索结果点进去后，点「返回」回到首页搜索框
let searchJump = false;

// ========== 全局搜索（全文索引） ==========
// 索引覆盖：景点卡片+详情正文、美食卡片+详情正文、助手各板块正文

function buildSearchIndex() {
    const items = [];

    document.querySelectorAll(".attraction-card").forEach(card => {
        const target = card.dataset.target;
        const titleEl = card.querySelector(".card-title");
        const title = titleEl ? titleEl.textContent.trim() : "";
        const subEl = card.querySelector(".card-sub");
        const sub = subEl ? subEl.textContent.trim() : "";
        const pEl = card.querySelector("p");
        const desc = pEl ? pEl.textContent.trim() : "";
        const tags = [...card.querySelectorAll(".tags span")].map(s => s.textContent.trim()).join(" ");
        let detailText = "";
        const detail = document.getElementById(target);
        if (detail) {
            detailText = [...detail.querySelectorAll(".food-text")].map(p => p.textContent.trim()).join(" ");
        }
        items.push({
            type: "attraction",
            label: title,
            snippet: desc || sub,
            keywords: (title + " " + sub + " " + desc + " " + tags + " " + detailText).toLowerCase(),
            target: target
        });
    });

    document.querySelectorAll(".food-card").forEach(card => {
        const target = card.dataset.target;
        const titleEl = card.querySelector(".card-title");
        const title = titleEl ? titleEl.textContent.trim() : "";
        const subEl = card.querySelector(".card-sub");
        const sub = subEl ? subEl.textContent.trim() : "";
        let detailText = "";
        const detail = document.getElementById(target);
        if (detail) {
            detailText = [...detail.querySelectorAll(".food-text")].map(p => p.textContent.trim()).join(" ");
        }
        items.push({
            type: "food",
            label: title,
            snippet: sub,
            keywords: (title + " " + sub + " " + detailText).toLowerCase(),
            target: target
        });
    });

    document.querySelectorAll(".guide-sec").forEach(sec => {
        const labelEl = sec.querySelector(".card-label");
        const label = labelEl ? labelEl.textContent.replace(/<svg[\s\S]*?<\/svg>/g, "").trim() : sec.id;
        items.push({
            type: "guide",
            label: label,
            snippet: "",
            keywords: (label + " " + sec.textContent).toLowerCase(),
            target: sec.id
        });
    });

    return items;
}

const SEARCH_ITEMS = buildSearchIndex();

const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function doSearch() {
    if (!searchInput || !searchResults) return;
    const q = searchInput.value.trim().toLowerCase();
    if (!q) { searchResults.style.display = "none"; searchResults.innerHTML = ""; return; }
    const hits = SEARCH_ITEMS.filter(it => it.keywords.indexOf(q) >= 0).slice(0, 12);
    if (hits.length === 0) {
        searchResults.innerHTML = '<div class="search-empty">没有找到相关结果</div>';
        searchResults.style.display = "block";
        return;
    }
    searchResults.innerHTML = hits.map(it => {
        const icon = it.type === "attraction" ? "#i-landmark" : it.type === "food" ? "#i-utensils" : "#i-book";
        const typeName = it.type === "attraction" ? "景点" : it.type === "food" ? "美食" : "助手";
        const snippet = it.snippet ? '<small class="search-item-snippet">' + it.snippet.slice(0, 40) + '</small>' : '';
        return '<div class="search-item" data-target="' + it.target + '" data-type="' + it.type + '">'
            + '<svg class="icon"><use href="' + icon + '"></use></svg>'
            + '<div class="search-item-text"><span>' + it.label + '</span>' + snippet + '</div>'
            + '<b>' + typeName + '</b></div>';
    }).join("");
    searchResults.style.display = "block";
}

if (searchInput) {
    searchInput.addEventListener("input", doSearch);
    searchInput.addEventListener("focus", doSearch);
}

if (searchResults) {
    searchResults.addEventListener("click", (e) => {
        const item = e.target.closest(".search-item");
        if (!item) return;
        const target = item.getAttribute("data-target");
        const type = item.getAttribute("data-type");
        searchResults.style.display = "none";
        searchInput.value = "";
        searchJump = true;   // 返回时回到首页搜索框
        if (type === "guide") {
            showPage("guide", "guide");
            setTimeout(() => {
                const el = document.getElementById(target);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 400);
        } else {
            showPage(target, type === "food" ? "food" : "attractions", null, "zoom");
        }
    });
}

document.addEventListener("click", (e) => {
    if (searchResults && !e.target.closest(".search-box") && !e.target.closest(".search-results")) {
        searchResults.style.display = "none";
    }
});
