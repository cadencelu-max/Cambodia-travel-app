// ========== 数据文件：景点坐标 + 预设路线 ==========

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
    "ta-keo":    { name: "茶胶寺",       en: "Ta Keo",   lat: 13.4446, lng: 103.8892 },
    "prasat-kravan":    { name: "豆蔻寺",       en: "Prasat Kravan",   lat: 13.4197, lng: 103.8918 },
    "srah-srang":    { name: "皇家浴池",       en: "Srah Srang",   lat: 13.4299, lng: 103.904 },
    "phnom-bakheng":    { name: "巴肯山",       en: "Phnom Bakheng",   lat: 13.4253, lng: 103.8562 },
    "banteay-samre":    { name: "班迭萨姆雷",       en: "Banteay Samre",   lat: 13.4417, lng: 103.9631 },
    "phnom-kulen":    { name: "荔枝山",       en: "Phnom Kulen",   lat: 13.6046, lng: 104.1122 },
    "kbal-spean":    { name: "高布斯滨",       en: "Kbal Spean",   lat: 13.6813, lng: 104.0237 },
    "koh-ker":    { name: "贡开",       en: "Koh Ker",   lat: 13.7827, lng: 104.5416 },
    "preah-vihear":    { name: "柏威夏寺",       en: "Preah Vihear",   lat: 14.3907, lng: 104.6807 },
    "royal-gardens": { name: "皇家花园",     en: "Royal Gardens", lat: 13.3620, lng: 103.8550 }
};

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
