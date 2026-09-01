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
    "lang.note": "翻译可能存在误差，请以中文为准",
    "app.disclaimer": "本应用内容仅供参考，信息可能变更或过时，请勿将其作为单一信息渠道来源；出行前请以官方最新信息为准。紧急求助：报警 117 · 急救 119 · 火警 118。",
    "itin.tabPreset": "预设路线",
    "itin.tabMine": "我的行程",
    "itin.classic5": "经典 5 日 · 快速",
    "itin.classic7": "经典 7 日 · 中度",
    "itin.classicHint": "点一下自动生成多天行程，之后可以自己改。",
    "itin.addDay": "＋ 新建一天",
    "itin.clear": "清空行程",
    "itin.cancel": "取消",
    "itin.confirm": "添加",
    "itin.empty": "还没有行程，点「新建一天」开始规划吧。",
    "itin.noPlaces": "这一天还没有景点，点下方按钮添加。",
    "itin.addPlaces": "添加景点",
    "itin.navLabel": "全程导航",
    "itin.pickTitle": "选择加入 {day} 的景点",
    "itin.overwrite": "生成经典路线会覆盖你现在的行程，继续吗？",
    "itin.clearConfirm": "确定清空全部行程吗？"
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
    "lang.note": "Translations may contain errors; Chinese is authoritative.",
    "app.disclaimer": "This app is for reference only. Information may change or become outdated — do not use it as your only source. Please verify with official channels before travelling. Emergencies: Police 117 · Ambulance 119 · Fire 118.",
    "search.placeholder": "Search attractions / food / guide",
    "itin.tabPreset": "Preset routes",
    "itin.tabMine": "My itinerary",
    "itin.classic5": "Classic 5-day · Quick",
    "itin.classic7": "Classic 7-day · Moderate",
    "itin.classicHint": "Generate a multi-day itinerary in one tap, then edit it freely.",
    "itin.addDay": "＋ Add a day",
    "itin.clear": "Clear itinerary",
    "itin.cancel": "Cancel",
    "itin.confirm": "Add",
    "itin.empty": "No itinerary yet — tap 'Add a day' to start planning.",
    "itin.noPlaces": "No places in this day yet — tap the button below to add some.",
    "itin.addPlaces": "Add places",
    "itin.navLabel": "Full-route navigation",
    "itin.pickTitle": "Choose places for {day}",
    "itin.overwrite": "Generating a classic route will replace your current itinerary. Continue?",
    "itin.clearConfirm": "Clear the whole itinerary?"
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
    "老城区咖啡馆密度很高，一杯 1-2 美元。想喝当地味道就点「Iced Coffee with Milk」（冰炼乳咖啡），慢慢等、慢慢喝。": "Cafés are everywhere in the old town, $1-2 a cup. For the local taste, order 'Iced Coffee with Milk' — and take your time.",
    "老市场": "Old Market",
    "Old Market · 烟火气的传统市场": "Old Market · the lively traditional market",
    "手信": "Souvenirs",
    "本地生活": "Local life",
    "暹粒最古老的市场之一，从清晨到深夜都热闹，是本地人买菜、游客买手信的地方。": "One of Siem Reap's oldest markets, bustling from dawn to late night — where locals shop and travellers buy souvenirs.",
    "水果摊、香料摊、银饰和丝绸手信都值得逛；晚上的夜市更有生活气息。": "Fruit stalls, spice stands, silverware and silk souvenirs are all worth browsing; the night market next door is even livelier.",
    "记得砍价，一般可以从开价砍掉三分之一；人多注意保管随身物品。": "Bargaining is expected — usually a third off the first price. Mind your belongings in the crowds.",
    "酒吧街": "Pub Street",
    "Pub Street · 暹粒夜生活中心": "Pub Street · Siem Reap's nightlife hub",
    "夜生活": "Nightlife",
    "餐厅酒吧": "Bars & restaurants",
    "暹粒老城中心的步行街，几十年来聚集了餐厅和酒吧，是游客夜生活的中心。": "The pedestrian street at the heart of the old town, lined with restaurants and bars for decades — the centre of tourist nightlife.",
    "傍晚开始热闹，各国餐厅、现场音乐和街头小吃都有，灯光很有氛围。": "Gets lively from dusk with international restaurants, live music and street food under glowing lights.",
    "晚上人多注意财物；与老市场、夜市连在一起，可以一起逛。": "Crowded at night — watch your belongings. It connects with the Old Market and Night Market, so explore them together.",
    "吴哥国家博物馆": "Angkor National Museum",
    "Angkor National Museum · 去吴哥前的必修课": "Angkor National Museum · essential before Angkor",
    "室内": "Indoor",
    "文化": "Culture",
    "2007 年开放，系统收藏和展示吴哥时期的文物与艺术。": "Opened in 2007, systematically collecting and displaying Angkorian artefacts and art.",
    "大量石雕、青铜器和佛像，多媒体讲解很清晰，先来这里再看寺庙会更有感觉。": "Extensive stone carvings, bronzes and Buddha images with clear multimedia guides — visit before the temples to appreciate them more.",
    "门票约 12 美元；开放时间约 8:30-18:00；建议放在去吴哥窟之前。": "Admission ~$12; open about 8:30–18:00. Best done before visiting Angkor Wat.",
    "门票：": "Admission:",
    "约 12 美元": "~$12",
    "官网：": "Website:",
    "皇家花园": "Royal Gardens",
    "Royal Gardens · 市区里的绿洲": "Royal Gardens · an oasis in town",
    "散步": "Strolling",
    "免费": "Free",
    "位于暹粒市中心、皇家住所前的花园，当地人常来散步纳凉。": "A garden in front of the Royal Residence in central Siem Reap, where locals come to stroll and cool off.",
    "大片草坪和树木，傍晚散步很舒服，运气好能看到成群的蝙蝠飞出。": "Large lawns and trees; lovely for an evening stroll. With luck you may see flocks of bats fly out at dusk.",
    "免费开放，傍晚光线最好；适合逛完老城后过来歇脚。": "Free to enter; best light at dusk. A good place to rest after exploring the old town.",
    "吴哥窟": "Angkor Wat",
    "Angkor Wat · 世界最大庙宇群": "Angkor Wat · the world's largest temple complex",
    "日出": "Sunrise",
    "浮雕回廊": "Bas-relief galleries",
    "中央塔": "Central tower",
    "12 世纪由苏利耶跋摩二世建造，最初供奉印度教毗湿奴，后来成为佛教圣地。它是吴哥王朝鼎盛时期的代表作，也是世界上最大的宗教建筑群之一，如今印在柬埔寨国旗上。": "Built in the 12th century by Suryavarman II, originally Hindu (dedicated to Vishnu) and later a Buddhist site. The masterpiece of Angkor's golden age, one of the world's largest religious complexes — and today on Cambodia's flag.",
    "清晨在莲花池前等日出和倒影是经典机位；中央塔可以登顶；回廊上数百米浅浮雕讲述着印度史诗《罗摩衍那》的故事。": "The classic shot: wait for sunrise and its reflection in front of the lotus ponds. Climb the central tower, and follow the hundreds of metres of bas-relief telling the Indian epic Ramayana.",
    "看日出建议清晨 5 点前出发；门票是吴哥通票（1 日 37 美元 / 3 日 62 美元 / 7 日 72 美元）；穿长裤或长裙、随身带水。": "For sunrise, leave before 5 am. Entry is the Angkor Pass ($37/1 day, $62/3 days, $72/7 days). Wear long trousers or a long skirt and carry water.",
    "官网购票：": "Official ticket:",
    "巴戎寺": "Bayon",
    "Bayon · 高棉的微笑": "Bayon · the smiling faces of Khmer art",
    "人脸雕像": "Face statues",
    "上午光线佳": "Best light in the morning",
    "12 世纪末由阇耶跋摩七世建造，是吴哥王朝最后一批国寺之一，融合了佛教与印度教元素。": "Built in the late 12th century by Jayavarman VII, one of the last great state temples, blending Buddhist and Hindu elements.",
    "54 座四面塔上共有 200 多张微笑人脸，据说是以建造者阇耶跋摩七世为原型；回廊浮雕记录了当时的生活百态。": "Over 200 smiling faces across 54 towers, said to be modelled on the builder Jayavarman VII; the gallery reliefs depict everyday life of the era.",
    "上午光线最好，人脸轮廓更清晰；游客多，建议早点到；距吴哥窟约 1.5km，可以骑车。": "Morning light sharpens the faces. It gets crowded — arrive early. About 1.5 km from Angkor Wat, rideable by bicycle.",
    "吴哥通票（1 日 37 美元 / 3 日 62 美元 / 7 日 72 美元）": "Angkor Pass ($37/1 day, $62/3 days, $72/7 days)",
    "塔普伦寺": "Ta Prohm",
    "Ta Prohm · 树与寺共生": "Ta Prohm · where trees embrace the temple",
    "树根": "Tree roots",
    "光影": "Light & shadow",
    "古墓丽影": "Tomb Raider",
    "12 世纪末阇耶跋摩七世为母亲建造，鼎盛时是拥有上万人规模的寺院。后来被丛林吞没，巨树与石墙紧紧缠绕，也是《古墓丽影》的取景地。": "Built in the late 12th century by Jayavarman VII for his mother, once home to tens of thousands. Swallowed by the jungle, with giant trees wrapped around the stone walls — also a Tomb Raider filming location.",
    "巨大的木棉树根盘绕石墙；东门附近的「树抱门」是经典机位；阳光穿过树冠洒下的光影非常美。": "Massive silk-cotton roots coil over the walls; the 'doorway embraced by roots' near the east gate is a classic shot. Sunlight filtering through the canopy is magical.",
    "上午人少、光线好；地面湿滑注意脚下；部分区域已坍塌，不要攀爬。": "Morning is quieter with better light. The ground can be slippery; some areas have collapsed — don't climb.",
    "班黛喀蒂": "Banteay Kdei",
    "Banteay Kdei · 小圈 · 静谧": "Banteay Kdei · Small Circuit · serenity",
    "小圈": "Small Circuit",
    "人少": "Fewer crowds",
    "12 世纪中后期建造的佛教寺院，风格与塔普伦寺相似但规模更小，保存得不算完整。": "A Buddhist monastery from the mid-late 12th century, similar to Ta Prohm but smaller and less well preserved.",
    "游客相对少，适合安静漫步；石窗透进来的光影很好拍。": "Fewer visitors — great for a quiet wander; light through the stone windows photographs beautifully.",
    "与小圈路线顺路，建议 30-45 分钟；旁边就是皇家浴池（Srah Srang）。": "On the Small Circuit; allow 30–45 min. Srah Srang (the royal bathing pool) is right next door.",
    "圣剑寺": "Preah Khan",
    "Preah Khan · 大圈第一站": "Preah Khan · first stop on the Grand Circuit",
    "大圈": "Grand Circuit",
    "规模宏大": "Grand scale",
    "12 世纪末阇耶跋摩七世为纪念父亲而建，曾是高棉国王的临时都城，鼎盛时据说住着近十万人。": "Built in the late 12th century by Jayavarman VII in memory of his father, once a temporary capital said to house nearly 100,000 people.",
    "规模宏大，东西向的主轴线很长；东门附近有两层的石构建筑；墙上仍能看到部分灰泥浮雕。": "Vast in scale with a long east-west axis; a two-storey structure stands near the east gate, and traces of stucco reliefs remain on the walls.",
    "建议预留 1-1.5 小时；下一站龙蟠水池就在附近。": "Allow 1–1.5 hours; Neak Pean is close by as the next stop.",
    "龙蟠水池": "Neak Pean",
    "Neak Pean · 大圈 · 水中寺": "Neak Pean · Grand Circuit · temple in the water",
    "12 世纪阇耶跋摩七世建造，位于人工湖中央的小岛上，曾是古人的「疗愈之所」，病人在四个水池中取水。": "Built by Jayavarman VII in the 12th century on an island in a man-made lake — an ancient 'place of healing' where patients drew water from four pools.",
    "中央小庙、巨蛇（Naga）环绕的圆形底座，以及连接水池的木栈道都很有特色。": "A small central shrine, a circular base encircled by naga serpents, and wooden walkways linking the pools.",
    "旱季水池可能干涸；走栈道进出，建议 30 分钟。": "Pools may dry up in the dry season. Walk in and out along the causeway; allow 30 minutes.",
    "塔逊寺": "Ta Som",
    "Ta Som · 大圈 · 树门": "Ta Som · Grand Circuit · the tree gate",
    "拍照": "Photography",
    "12 世纪末建造的佛教寺院，规模不大，保存状况一般。": "A small Buddhist temple from the late 12th century, only moderately preserved.",
    "东塔门被巨大的树根缠绕，是经典的拍照点；游客少，适合慢慢逛。": "The east gate is wrapped in giant roots — a classic photo spot. Few visitors, ideal for a slow explore.",
    "建议 20-30 分钟；与龙蟠水池顺路。": "Allow 20–30 min; on the way to/from Neak Pean.",
    "东梅奔": "East Mebon",
    "East Mebon · 大圈 · 大象塔": "East Mebon · Grand Circuit · towers of elephants",
    "10 世纪建造，位于当时东人工湖（现已干涸）中央的岛上，是皇家祭祀场所。": "Built in the 10th century on an island in the (now dry) East Baray reservoir — a royal ceremonial site.",
    "四角矗立着巨大的石象雕像；红砖结构和灰泥雕刻保存得不错，可以登高看四周。": "Giant stone elephant statues stand at the four corners; the brickwork and stucco carvings survive well, and you can climb for views.",
    "建议 30 分钟；与比粒寺相邻。": "Allow 30 min; right next to Pre Rup.",
    "比粒寺": "Pre Rup",
    "Pre Rup · 大圈 · 日落点": "Pre Rup · Grand Circuit · sunset viewpoint",
    "日落": "Sunset",
    "10 世纪建造的红砖金字塔式寺庙，名字有「变身」之意，据说是皇家火葬场。": "A 10th-century brick pyramid temple; its name means 'to transform' — said to be a royal cremation site.",
    "阶梯式金字塔结构很特别；日落时分人很多，是经典的日落观景地。": "The tiered pyramid is striking; crowded at sunset — a classic sunset viewpoint.",
    "看日落建议下午 4 点半前到占位置；台阶较陡，注意安全。": "For sunset, arrive before 4:30 pm to claim a spot. Steps are steep — take care.",
    "女王宫": "Banteay Srei",
    "Banteay Srei · 吴哥艺术之钻": "Banteay Srei · the jewel of Khmer art",
    "红色砂岩": "Pink sandstone",
    "精美浮雕": "Fine carvings",
    "10 世纪建造，用红色砂岩精雕细琢，被认为是吴哥艺术成就最高的作品，被称为「吴哥艺术之钻」。": "Built in the 10th century from exquisite pink sandstone, considered the pinnacle of Angkorian art — 'the jewel of Khmer art'.",
    "门楣上的神话故事浮雕极其精细；粉红色调在清晨和黄昏最美。": "The mythological reliefs on the lintels are incredibly fine; the pink tones glow best at dawn and dusk.",
    "距吴哥窟约 32km，需包车或骑车；面积不大但细节多，建议 1 小时；上午光线最佳。": "~32 km from Angkor Wat — private car or moto needed. Small but detail-rich; allow 1 hour; morning light is best.",
    "崩密列": "Beng Mealea",
    "Beng Mealea · 外圈 · 秘境": "Beng Mealea · Outer Circuit · the hidden ruin",
    "外圈": "Outer Circuit",
    "包车": "Private car",
    "12 世纪建造，规模与吴哥窟相似，但似乎从未完工，又被丛林长期覆盖，坍塌严重。": "Built in the 12th century on a scale like Angkor Wat, but seemingly never finished; long swallowed by jungle and heavily collapsed.",
    "原始废墟的探险感，树根与崩塌的石块纠缠；游客少，适合拍照。": "A raw, adventurous ruin — roots tangled over fallen stone, few visitors, great for photos.",
    "距暹粒约 68km，必须包车；单独售票（约 5 美元）；地面不平，穿运动鞋。": "~68 km from Siem Reap — private car required; separate ticket (~$5). Uneven ground — wear trainers.",
    "5 美元（单独购票，不含通票）": "$5 (separate ticket, not covered by the Angkor Pass)",
    "官网参考：": "Website reference:",
    "金边大皇宫": "Royal Palace",
    "Royal Palace · 金碧辉煌": "Royal Palace · glittering gold",
    "银殿": "Silver Pagoda",
    "高棉建筑": "Khmer architecture",
    "1866 年建都金边后建造，是柬埔寨国王的官邸，融合了高棉传统与法国殖民风格。": "Built after Phnom Penh became the capital in 1866, the King's official residence blending Khmer tradition with French colonial style.",
    "银殿地面铺着 5000 多块银砖；金碧辉煌的尖顶建筑和御花园都很好拍。": "The Silver Pagoda's floor is paved with 5,000+ silver tiles; the gilded spires and royal gardens photograph beautifully.",
    "开放时间约 8:00-17:00；进入需穿过膝的裤子或裙子；下午光线好。": "Open about 8:00–17:00; knee-length trousers/skirts required. Afternoon light is best.",
    "10 美元（含银殿，现场购票）": "$10 (includes Silver Pagoda, buy on site)",
    "S21 监狱博物馆": "Tuol Sleng Genocide Museum (S21)",
    "Tuol Sleng · 了解一段历史": "Tuol Sleng · confronting a chapter of history",
    "纪念馆": "Memorial",
    "原是一所中学，1975-1979 年红色高棉统治期间被改为 S21 秘密监狱，超过 1.7 万人被关押于此，仅少数人幸存。": "Formerly a high school, turned into the S21 secret prison under the Khmer Rouge (1975–1979). Over 17,000 people were detained here; only a few survived.",
    "保留着当年的囚室、铁丝网和大量档案照片，参观过程会让人很震撼。": "Cells, barbed wire and extensive archive photographs remain — a deeply moving visit.",
    "开放时间 8:00-17:00；建议留 1.5-2 小时；内容比较沉重，请保持安静和尊重。": "Open 8:00–17:00; allow 1.5–2 hours. The content is heavy — please stay quiet and respectful.",
    "5 美元": "$5",
    "洞里萨湖": "Tonlé Sap Lake",
    "Tonle Sap · 东南亚最大淡水湖": "Tonlé Sap · Southeast Asia's largest freshwater lake",
    "水上村庄": "Floating villages",
    "东南亚最大的淡水湖，与湄公河相连，雨季和旱季湖面面积可相差数倍，湖边有多个水上村庄。": "Southeast Asia's largest freshwater lake, connected to the Mekong; its area changes dramatically between seasons, dotted with floating villages.",
    "高脚屋水上村庄很特别；乘船看日落、看渔民的日常生活。": "The stilted floating villages are unique; take a boat for sunset and a glimpse of fishermen's daily life.",
    "从暹粒包车约 1 小时到码头；船费约 20-25 美元/人；雨季（6-10 月）水位高景色最好。": "~1 hour by car from Siem Reap to the pier; boat ~$20–25/person. High water in the wet season (Jun–Oct) gives the best views.",
    "船票：": "Boat ticket:",
    "约 20-25 美元/人（码头现场或当地代理购买）": "~$20–25/person (buy at the pier or from local agents)",
    "中央市场": "Central Market",
    "Central Market · 金边的「大钟楼」": "Central Market · Phnom Penh's art-deco clock tower",
    "穹顶建筑": "Dome architecture",
    "1937 年法国殖民时期建成的中央市场，黄色穹顶是标志性建筑，也是金边最大的传统市场之一。": "Built in 1937 during the French colonial era; its yellow dome is iconic and it remains one of Phnom Penh's largest traditional markets.",
    "穹顶下的金银珠宝区、水果摊和本地小吃；黄墙穹顶本身就很出片。": "Gold & jewellery stalls, fruit stands and local snacks under the dome; the yellow-domed building itself is photogenic.",
    "营业时间约 8:00-17:00；记得砍价；离湄公河畔步行可达。": "Open about 8:00–17:00; bargain hard; walkable from the riverside.",
    "独立纪念碑": "Independence Monument",
    "Independence Monument · 金边的地标": "Independence Monument · Phnom Penh's landmark",
    "地标": "Landmark",
    "夜景": "Night view",
    "1958 年为纪念柬埔寨脱离法国独立而建，莲花瓣造型融合了吴哥建筑风格。": "Built in 1958 to mark independence from France; the lotus-petal design echoes Angkorian architecture.",
    "白天庄重、夜晚灯光很美；周围是环岛，拍照时注意来往车辆。": "Solemn by day, beautifully lit at night. It sits in a roundabout — watch for traffic when photographing.",
    "免费、全天开放；傍晚蓝调时刻是经典拍摄时间。": "Free and open all day; the blue hour at dusk is the classic shooting time.",
    "国家博物馆": "National Museum",
    "National Museum · 高棉文物宝库": "National Museum · treasury of Khmer antiquities",
    "1920 年建成，红砖高棉风格建筑，系统收藏吴哥时期的石雕、青铜器和佛像。": "Completed in 1920 in red-brick Khmer style, housing a systematic collection of Angkorian stone carvings, bronzes and Buddha images.",
    "吴哥微笑头像、青铜像；中央庭院的水池倒影很适合拍照。": "Angkorian smiling heads and bronzes; the courtyard pool's reflections are great for photos.",
    "门票约 10 美元；开放 8:00-17:00；与大皇宫相邻，可以一起逛。": "Admission ~$10; open 8:00–17:00; next to the Royal Palace — visit both together.",
    "10 美元": "$10",
    "塔山寺": "Wat Phnom",
    "Wat Phnom · 金边名字的由来": "Wat Phnom · where Phnom Penh got its name",
    "古寺": "Ancient wat",
    "城市起源": "City origins",
    "传说 1372 年一位老妇人在山丘上发现佛像并建寺供奉，金边（Phnom Penh）因此得名。": "Legend says that in 1372 an old woman found Buddha statues on the hill and built a shrine — giving Phnom Penh its name.",
    "山顶主殿、入口的大象雕像，还能俯瞰城市一角。": "The main hall on the hilltop, elephant statues at the entrance, and a glimpse of the city from above.",
    "门票约 1 美元；清晨或傍晚去人少凉快。": "Admission ~$1; cooler and quieter in early morning or late afternoon.",
    "约 1 美元（现场购票）": "~$1 (pay on site)",
    "湄公河畔": "Sisowath Quay (Riverside)",
    "Sisowath Quay · 河边散步与日落": "Sisowath Quay · riverside strolls and sunsets",
    "沿着湄公河与洞里萨河交汇处的滨河大道，是金边市民和游客最爱的散步路线。": "The boulevard where the Mekong meets the Tonlé Sap — Phnom Penh's favourite promenade for locals and visitors alike.",
    "日落时分的河景、游船码头；晚上有夜市和街头小吃。": "River views and boat piers at sunset; at night there are night markets and street food.",
    "免费；傍晚最热闹；从大皇宫步行可达。": "Free; liveliest in the evening; walkable from the Royal Palace.",
    "俄式市场": "Russian Market",
    "Russian Market · 淘货必逛": "Russian Market · a must for bargain hunters",
    "淘货": "Bargain hunting",
    "纪念品": "Souvenirs",
    "因 1980 年代俄罗斯商人常来采购而得名（本名「图尔汤姆蓬市场」），是金边本地人最爱逛的市场之一。": "Named after Russian merchants who shopped here in the 1980s (officially 'Toul Tompoung'), one of Phnom Penh locals' favourite markets.",
    "银器、丝绸、二手牛仔裤、纪念品和小吃都有；价格比中央市场更「本地」。": "Silverware, silk, vintage jeans, souvenirs and snacks — with more local prices than the Central Market.",
    "营业约 8:00-17:00；记得砍价；附近很多咖啡馆可以歇脚。": "Open about 8:00–17:00; bargain hard; plenty of cafés nearby for a break.",
    "钟屋屠杀场": "Choeung Ek Killing Fields",
    "Choeung Ek · 了解一段历史": "Choeung Ek · understanding a chapter of history",
    "1975-1979 年红色高棉统治时期的处决场，成千上万人在此遇难，如今是纪念地，中央矗立着存放头骨的白骨佛塔。": "An execution site from the Khmer Rouge era (1975–1979), where tens of thousands lost their lives — now a memorial, with a stupa holding skulls at its centre.",
    "中央纪念塔、保留的万人坑和缠绕树根；免费音频导览讲述历史，非常震撼。": "The central memorial stupa, preserved mass graves and root-entwined trees; a free audio guide tells the history — deeply moving.",
    "距金边约 15km，Grab/包车约 30-40 分钟；门票约 6 美元（含导览）；建议留 1-2 小时。": "~15 km from Phnom Penh, ~30–40 min by Grab or private car; admission ~$6 (incl. audio guide); allow 1–2 hours.",
    "6 美元（含导览）": "$6 (incl. audio guide)",
    "乌那隆寺": "Wat Ounalom",
    "Wat Ounalom · 金边最古老的佛寺": "Wat Ounalom · Phnom Penh's oldest wat",
    "宗教": "Religion",
    "1443 年建造，是金边最古老的佛教寺院之一，曾是高棉佛教最高领袖的驻锡地。": "Founded in 1443, one of Phnom Penh's oldest Buddhist monasteries and once the seat of the supreme patriarch of Khmer Buddhism.",
    "金色主塔、藏有佛像和经书的藏经阁、庭院里穿橙袍的僧人。": "A golden main stupa, a library holding Buddha images and scriptures, and orange-robed monks in the courtyard.",
    "免费参观；注意着装（不露肩、过膝）；清晨和傍晚最安静。": "Free to visit; dress modestly (cover shoulders, below the knee); quietest in early morning and late afternoon.",
    "行前准备 · 工具 · 知识速查": "Before the trip · Tools · Know-how",
    "签证与入境": "Visas & entry",
    "中国护照免签（临时政策）": "Visa-free for Chinese passports (temporary)",
    "目前中国护照可免签入境，但这是": "Chinese passports are currently visa-exempt, but this is a",
    "临时政策": "temporary policy",
    "（截至 2026 年 10 月 15 日），之后可能恢复签证要求。出发前请务必查询柬埔寨官方最新入境政策。": "(valid until 15 Oct 2026); visa requirements may return afterwards. Always check Cambodia's latest official entry rules before you travel.",
    "护照": "Passport",
    "入境卡": "Arrival card",
    "落地流程": "Arrival process",
    "入境盖章": "Immigration stamp",
    "跟着 Arrival 指示走；护照 + 入境卡（飞机上填），中国护照免签": "Follow the Arrival signs; passport + arrival card (filled in on the plane); Chinese passports are visa-free",
    "换钱": "Money exchange",
    "机场 ATM / 换汇柜台；美元通用，找零常给瑞尔": "Airport ATM / exchange counter; USD is widely accepted, change often comes in riel",
    "电话卡": "SIM card",
    "机场柜台买 SIM（约 $3-5），或提前买好 eSIM": "Buy a SIM at the airport (~$3–5) or get an eSIM in advance",
    "打车去市区": "Taxi / ride into town",
    "下载 Grab App；机场 → 市区约 $10-15，比机场出租车便宜": "Download the Grab app; airport → city ~$10–15, cheaper than airport taxis",
    "到目的地": "Arrive at your destination",
    "去酒店或市区：出示护照 check-in，让司机跟着导航走": "To your hotel or the city: show your passport to check in; let the driver follow the navigation",
    "行前清单（点一点打勾）": "Packing checklist (tap to tick)",
    "现金 / 银行卡": "Cash / bank card",
    "eSIM / 电话卡": "eSIM / SIM card",
    "离线地图": "Offline maps",
    "翻译软件": "Translation app",
    "防晒霜": "Sunscreen",
    "墨镜 / 帽子": "Sunglasses / hat",
    "雨具": "Rain gear",
    "相机 / 充电宝": "Camera / power bank",
    "常用药": "Basic medicine",
    "天气与季节": "Weather & seasons",
    "气候": "Climate",
    "热带季风 · 全年高温": "Tropical monsoon · hot all year",
    "最佳旅行": "Best time to travel",
    "11月—次年2月（凉爽少雨）": "Nov – Feb (cool & dry)",
    "雨季": "Wet season",
    "5月—10月（午后阵雨多）": "May – Oct (afternoon showers)",
    "旱季": "Dry season",
    "11月—次年4月": "Nov – Apr",
    "每月参考（金边/暹粒）：11-2 月约 22-30℃，干燥舒适；3-4 月最热（35℃+）；5-10 月雨季约 25-33℃。记得带伞、防晒和驱蚊。": "Month by month (Phnom Penh/Siem Reap): Nov–Feb ~22–30°C, dry and pleasant; Mar–Apr hottest (35°C+); May–Oct wet season ~25–33°C. Bring an umbrella, sunscreen and repellent.",
    "紧急信息": "Emergency info",
    "急救": "Ambulance",
    "报警": "Police",
    "火警": "Fire",
    "旅游警察（暹粒）": "Tourist police (Siem Reap)",
    "中国驻柬埔寨大使馆": "Chinese Embassy in Cambodia",
    "金边 · +855 23 210 928": "Phnom Penh · +855 23 210 928",
    "领保热线": "Consular protection hotline",
    "金边皇家医院 Calmette": "Calmette Hospital, Phnom Penh",
    "号码可能变动，出发前请再次核实。": "Numbers may change — please verify again before you travel.",
    "汇率换算": "Currency converter",
    "金额": "Amount",
    "币种": "Currency",
    "人民币 ¥": "CNY ¥",
    "美元 $": "USD $",
    "瑞尔 ៛": "KHR ៛",
    "人民币": "CNY",
    "美元": "USD",
    "瑞尔": "KHR",
    "参考汇率：1 美元 ≈ 7.2 人民币 ≈ 4000 瑞尔（以当天实际为准）": "Reference rate: 1 USD ≈ 7.2 CNY ≈ 4,000 KHR (check the day's actual rate)",
    "记账 · 多货币": "Ledger · multi-currency",
    "住宿": "Accommodation",
    "餐饮": "Food & drink",
    "门票": "Tickets",
    "购物": "Shopping",
    "其他": "Other",
    "¥ 人民币": "¥ CNY",
    "$ 美元": "$ USD",
    "៛ 瑞尔": "៛ KHR",
    "每笔按你实际支付的货币记录，不用手动换算；合计会按币种分别显示，并折合人民币参考。": "Each entry is recorded in the currency you actually paid — no manual conversion. Totals are shown per currency, with a CNY reference.",
    "行程规划 · 按你的红心": "Itinerary · from your hearts",
    "先到「景点」页点❤️选择想去的地方，这里会自动按推荐顺序排成每日行程。": "Tap ❤️ on the Attractions page to pick places; they'll be arranged here into a daily itinerary in recommended order.",
    "飞机": "Flight",
    "金边 / 暹粒机场": "Phnom Penh / Siem Reap airports",
    "夜间巴士": "Night bus",
    "金边 ↔ 暹粒": "Phnom Penh ↔ Siem Reap",
    "Tuk Tuk": "Tuk-tuk",
    "市内短途首选": "Best for short rides in town",
    "Grab": "Grab",
    "打车软件": "Ride-hailing app",
    "常用语速查": "Useful phrases",
    "你好": "Hello",
    "Sous-dei · 苏斯代": "Sous-dei (sou-sday)",
    "谢谢": "Thank you",
    "Aw-kun · 奥昆": "Aw-kun (ow-koon)",
    "多少钱？": "How much?",
    "太贵了": "Too expensive",
    "不要辣": "Not spicy",
    "再见": "Goodbye",
    "安全与健康": "Safety & health",
    "防晒": "Sun protection",
    "热带阳光强，防晒霜 + 帽子": "Tropical sun is strong — sunscreen + hat",
    "饮用水": "Drinking water",
    "买瓶装水，别喝自来水 / 冰块": "Drink bottled water; avoid tap water / ice",
    "防蚊": "Mosquito protection",
    "有登革热风险，白天也要防蚊": "Dengue risk exists — use repellent even in daylight",
    "小费": "Tipping",
    "非强制，服务好给 1-2 美元": "Optional; $1–2 for good service",
    "防骗": "Scams",
    "Tuk Tuk 先谈好价 / 用 Grab": "Agree tuk-tuk prices first / use Grab",
    "紧急电话": "Emergency numbers",
    "急救 119 · 报警 117": "Ambulance 119 · Police 117",
    "怎么去": "How to get there",
    "交通": "Transport",
    "从暹粒市中心步行 5-10 分钟即到，或坐 Tuk Tuk（约 1-2 美元）。": "Walk 5–10 min from central Siem Reap, or take a tuk-tuk (~$1–2).",
    "就在老市场旁边，从市中心步行 2-3 分钟；与夜市连成一片。": "Right beside the Old Market, 2–3 min on foot from the centre; it merges into the Night Market.",
    "在暹粒市区，从市中心坐 Tuk Tuk 约 10 分钟（2-3 美元）；从老市场步行约 20 分钟。": "In town — ~10 min by tuk-tuk from the centre ($2–3), or ~20 min walk from the Old Market.",
    "位于市中心皇家住所前，从老市场步行约 10 分钟。": "In front of the Royal Residence in town, ~10 min walk from the Old Market.",
    "从暹粒市区坐 Tuk Tuk 约 20-30 分钟（4-6 美元）；也可以租自行车骑过去（约 40 分钟）。": "~20–30 min by tuk-tuk from Siem Reap town ($4–6), or ~40 min on a rented bicycle.",
    "位于吴哥通王城内，走小圈路线顺路；从吴哥窟坐 Tuk Tuk 约 10 分钟。": "Inside Angkor Thom on the Small Circuit — ~10 min by tuk-tuk from Angkor Wat.",
    "在小圈路线上，从巴戎寺坐 Tuk Tuk 约 10 分钟。": "On the Small Circuit — ~10 min by tuk-tuk from Bayon.",
    "在小圈路线上，从塔普伦寺步行约 5 分钟，或坐车 1 分钟。": "On the Small Circuit — ~5 min walk (or a 1-min ride) from Ta Prohm.",
    "在大圈路线上，从吴哥窟坐 Tuk Tuk 约 15-20 分钟。": "On the Grand Circuit — ~15–20 min by tuk-tuk from Angkor Wat.",
    "在大圈路线上，从圣剑寺坐 Tuk Tuk 约 10 分钟。": "On the Grand Circuit — ~10 min by tuk-tuk from Preah Khan.",
    "在大圈路线上，从龙蟠水池坐 Tuk Tuk 约 10 分钟。": "On the Grand Circuit — ~10 min by tuk-tuk from Neak Pean.",
    "在大圈路线上，从塔逊寺坐 Tuk Tuk 约 15 分钟。": "On the Grand Circuit — ~15 min by tuk-tuk from Ta Som.",
    "在大圈路线上，从东梅奔坐 Tuk Tuk 约 10 分钟。": "On the Grand Circuit — ~10 min by tuk-tuk from East Mebon.",
    "在外圈路线，距吴哥窟约 32km，需包车或骑摩托（车程约 1 小时）。": "On the Outer Circuit, ~32 km from Angkor Wat — private car or moto recommended (~1 hr drive).",
    "在外圈路线，距暹粒约 68km，必须包车（车程约 1.5 小时）。": "On the Outer Circuit, ~68 km from Siem Reap — private car required (~1.5 hr drive).",
    "位于金边市中心，从河边步行可达，或坐 Tuk Tuk 约 5-10 分钟。": "In central Phnom Penh — walkable from the riverside, or ~5–10 min by tuk-tuk.",
    "位于金边市区，从大皇宫坐 Tuk Tuk 约 10 分钟（2-3 美元）。": "In Phnom Penh — ~10 min by tuk-tuk from the Royal Palace ($2–3).",
    "从暹粒市区坐车约 30-40 分钟到码头，再换乘游船进湖。": "~30–40 min by car/tuk-tuk from Siem Reap to the pier, then by boat onto the lake.",
    "在金边市中心，从河边步行约 15 分钟，或坐 Tuk Tuk 约 5 分钟。": "Central Phnom Penh — ~15 min walk from the riverside, or ~5 min by tuk-tuk.",
    "位于金边市中心环岛，从大皇宫坐 Tuk Tuk 约 5 分钟。": "On a roundabout in central Phnom Penh — ~5 min by tuk-tuk from the Royal Palace.",
    "紧邻大皇宫，从皇宫步行约 5 分钟。": "Next to the Royal Palace — about 5 min on foot.",
    "在金边市区北侧的小山丘上，从市中心坐 Tuk Tuk 约 10 分钟。": "On a small hill north of central Phnom Penh — ~10 min by tuk-tuk from the centre.",
    "金边河边大道，从大皇宫步行约 5 分钟。": "The riverside boulevard — about 5 min walk from the Royal Palace.",
    "在金边市区西南，从中央市场坐 Tuk Tuk 约 15 分钟。": "Southwest of central Phnom Penh — ~15 min by tuk-tuk from the Central Market.",
    "距金边市区约 15km，Grab 或包车约 30-40 分钟。": "~15 km from Phnom Penh — ~30–40 min by Grab or private car.",
    "在金边市区，从河边步行约 10 分钟，或坐 Tuk Tuk 约 5 分钟。": "In central Phnom Penh — ~10 min walk from the riverside, or ~5 min by tuk-tuk.",
    "标记想去的地方，自动连成路线": "Mark places you want to visit, and routes auto-connect",
    "预设经典路线": "Preset classic routes",
    "点一下直接生成路线；也可以自己去「景点」页点卡片右上角的心形按钮，自由组合。": "One tap to generate a route, or combine your own by tapping the heart on any attraction card.",
    "清空我的路线": "Clear my route",
    "还没有标记想去的地方": "No places marked yet",
    "去「景点」页，点景点卡片右上角的心形按钮，把想去的地方加入清单；这里会自动显示在地图上，并连成一条路线。": "Go to Attractions and tap the heart on any card to add places; they'll appear here on the map and connect into a route.",
    "我的路线": "My route",
    "＋ 添加景点…": "＋ Add a place…",
    "经典路线 · 一键生成": "Classic routes · one-tap",
    "金边": "Phnom Penh",
    "暹粒城市": "Siem Reap city",
    "吴哥 · 小圈": "Angkor · Small Circuit",
    "吴哥 · 大圈": "Angkor · Grand Circuit",
    "吴哥 · 外圈": "Angkor · Outer Circuit",

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
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
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
