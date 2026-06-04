export type Lang = "zh-CN" | "zh-TW" | "en";

/* eslint-disable @typescript-eslint/no-explicit-any */
const dict = {
  // Nav
  "nav.lang": { "zh-CN": "语言", "zh-TW": "語言", en: "Language" },

  // Hero
  "hero.nowPlaying": { "zh-CN": "NOW PLAYING", "zh-TW": "NOW PLAYING", en: "NOW PLAYING" },
  "hero.chapter": {
    "zh-CN": "／ INFINITE GAME · CH.01",
    "zh-TW": "／ INFINITE GAME · CH.01",
    en: "／ INFINITE GAME · CH.01",
  },
  "hero.multiverse": { "zh-CN": "多重宇宙", "zh-TW": "多重宇宙", en: "Multiverse" },
  "hero.infiniteGame": { "zh-CN": "无限游戏", "zh-TW": "無限遊戲", en: "Infinite Game" },
  "hero.iAm": { "zh-CN": "我是", "zh-TW": "我是", en: "I'm" },
  "hero.intro": {
    "zh-CN": "，一个同时活在 四个平行宇宙 里的叛逆者。",
    "zh-TW": "，一個同時活在 四個平行宇宙 裡的叛逆者。",
    en: ", a rebel living in four parallel universes at once.",
  },
  "hero.subIntro": {
    "zh-CN": "这里不是简历。这里是我的多重宇宙入口。",
    "zh-TW": "這裡不是履歷。這裡是我的多重宇宙入口。",
    en: "This isn't a résumé. This is the portal to my multiverse.",
  },
  "hero.line1": {
    "zh-CN": "我不相信单一频道的人生。我拒绝被「一份工作、一个身份、一个标签」定义。",
    "zh-TW": "我不相信單一頻道的人生。我拒絕被「一份工作、一個身份、一個標籤」定義。",
    en: "I don't believe in a single-channel life. I refuse to be defined by one job, one identity, one label.",
  },
  "hero.system1": {
    "zh-CN": "／ 热血泰拳 + 巴西柔术 +《时差8个钟》播客主持人",
    "zh-TW": "／ 熱血泰拳 + 巴西柔術 +《時差8個鐘》播客主持人",
    en: "／ Muay Thai + BJJ + Host of 'Timezone 8h' podcast",
  },
  "hero.system2": {
    "zh-CN": "／ 机床贸易创业者 + 跨境金融理财顾问",
    "zh-TW": "／ 機床貿易創業者 + 跨境金融理財顧問",
    en: "／ Machine-tool trade founder + Cross-border finance advisor",
  },
  "hero.line2": {
    "zh-CN": "用拳头和头脑，在无限游戏里不断觉醒。",
    "zh-TW": "用拳頭和頭腦，在無限遊戲裡不斷覺醒。",
    en: "With fists and mind, constantly awakening in the infinite game.",
  },
  "hero.line3": {
    "zh-CN": "如果你也厌倦了世俗脚本，欢迎接入。",
    "zh-TW": "如果你也厭倦了世俗腳本，歡迎接入。",
    en: "If you're also tired of the mundane script, plug in.",
  },
  "hero.cta": {
    "zh-CN": "5秒挑战 · 激活 SYSTEM 1",
    "zh-TW": "5秒挑戰 · 啟動 SYSTEM 1",
    en: "5s Challenge · Activate SYSTEM 1",
  },
  "hero.explore": {
    "zh-CN": "↓ 探索四个宇宙",
    "zh-TW": "↓ 探索四個宇宙",
    en: "↓ Explore the four universes",
  },
  "hero.polaroid1": {
    "zh-CN": "不为符合世俗的眼光",
    "zh-TW": "不為符合世俗的眼光",
    en: "Not for the world's gaze",
  },
  "hero.polaroid2": { "zh-CN": "只为突破自我", "zh-TW": "只為突破自我", en: "Only to break myself" },
  "hero.polaroid3": { "zh-CN": "获得自由", "zh-TW": "獲得自由", en: "To be free" },
  "hero.polaroid4": {
    "zh-CN": "探索世界的边界",
    "zh-TW": "探索世界的邊界",
    en: "Explore the edges of the world",
  },

  // Marquee
  "marquee.timezone": { "zh-CN": "时差 8 个钟", "zh-TW": "時差 8 個鐘", en: "TIMEZONE 8H" },
  "marquee.rebel": { "zh-CN": "叛逆者", "zh-TW": "叛逆者", en: "REBEL" },

  // BreathTimer
  "bt.protocol": {
    "zh-CN": "// SYSTEM_1.PROTOCOL",
    "zh-TW": "// SYSTEM_1.PROTOCOL",
    en: "// SYSTEM_1.PROTOCOL",
  },
  "bt.title1": { "zh-CN": "5 秒", "zh-TW": "5 秒", en: "5-Second" },
  "bt.title2": {
    "zh-CN": " 呼吸激活 ",
    "zh-TW": " 呼吸啟動 ",
    en: " Breath Activation ",
  },
  "bt.desc": {
    "zh-CN": "放下手机。深呼吸。5秒钟，让身体回到当下。热血宇宙的入口，不在拳套里，在你的大脑里。",
    "zh-TW": "放下手機。深呼吸。5秒鐘，讓身體回到當下。熱血宇宙的入口，不在拳套裡，在你的大腦裡。",
    en: "Put the phone down. Breathe. 5 seconds to return to now. The gateway isn't in the gloves — it's in your mind.",
  },
  "bt.tip": {
    "zh-CN": "// TIP: 点击拳套圆环 — 一拳击碎一个贬低女性的标签",
    "zh-TW": "// TIP: 點擊拳套圓環 — 一拳擊碎一個貶低女性的標籤",
    en: "// TIP: Tap the ring — one punch smashes a misogynistic label",
  },
  "bt.inhale": { "zh-CN": "吸气 INHALE", "zh-TW": "吸氣 INHALE", en: "INHALE" },
  "bt.exhale": { "zh-CN": "呼气 EXHALE", "zh-TW": "呼氣 EXHALE", en: "EXHALE" },
  "bt.activated": { "zh-CN": "ACTIVATED", "zh-TW": "ACTIVATED", en: "ACTIVATED" },
  "bt.tapToBegin": { "zh-CN": "TAP TO BEGIN", "zh-TW": "TAP TO BEGIN", en: "TAP TO BEGIN" },
  "bt.startAria": {
    "zh-CN": "开始 5 秒挑战",
    "zh-TW": "開始 5 秒挑戰",
    en: "Start 5-second challenge",
  },
  "bt.ringAria": {
    "zh-CN": "击碎贬低女性的词汇",
    "zh-TW": "擊碎貶低女性的詞彙",
    en: "Smash misogynistic words",
  },
  "bt.doneBadge": {
    "zh-CN": "✓ SYSTEM 1 已激活 · 欢迎来到无限游戏",
    "zh-TW": "✓ SYSTEM 1 已啟動 · 歡迎來到無限遊戲",
    en: "✓ SYSTEM 1 ACTIVATED · Welcome to the infinite game",
  },
  "bt.affirm.1": {
    "zh-CN": "你不是任何人的附属。你是自己的宇宙。",
    "zh-TW": "你不是任何人的附屬。你是自己的宇宙。",
    en: "You belong to no one. You are your own universe.",
  },
  "bt.affirm.2": {
    "zh-CN": "温柔是力量，愤怒是清醒，野心是天赋。",
    "zh-TW": "溫柔是力量，憤怒是清醒，野心是天賦。",
    en: "Tenderness is power, anger is clarity, ambition is a gift.",
  },
  "bt.affirm.3": {
    "zh-CN": "她们说你太多 — 那是因为她们被教会要少。继续 too much。",
    "zh-TW": "她們說你太多 — 那是因為她們被教會要少。繼續 too much。",
    en: "They say you're too much — because they were taught to be less. Stay too much.",
  },
  "bt.affirm.4": {
    "zh-CN": "你的身体不是被观看的对象，是你战斗的武器。",
    "zh-TW": "你的身體不是被觀看的對象，是你戰鬥的武器。",
    en: "Your body is not a thing to be watched — it's the weapon you fight with.",
  },
  "bt.affirm.5": {
    "zh-CN": "不必成为完美的女人，去成为完整的人。",
    "zh-TW": "不必成為完美的女人，去成為完整的人。",
    en: "Don't become a perfect woman — become a whole human.",
  },
  "bt.affirm.6": {
    "zh-CN": "在男人定义的游戏里，你不是棋子，你是改写规则的人。",
    "zh-TW": "在男人定義的遊戲裡，你不是棋子，你是改寫規則的人。",
    en: "In a game defined by men, you're not a pawn — you're the rule-writer.",
  },
  "bt.affirm.7": {
    "zh-CN": "活成让小时候的自己骄傲的样子，也活成让未来的姐妹安心的样子。",
    "zh-TW": "活成讓小時候的自己驕傲的樣子，也活成讓未來的姐妹安心的樣子。",
    en: "Live so your younger self is proud — and future sisters feel safe.",
  },
  "bt.words": {
    "zh-CN": [
      "自我厌恶","自我贬低","不配得感","不够优秀","我不值得","我做不到","我没用",
      "弱者","失败者","没有天赋","天生愚钝","运气差","成不了事","比不上别人",
      "身材焦虑","太矮","太胖","腿粗","手脚不协调","不好看","脸大","皮肤不好","胸太小","腰不够细","显老",
    ],
    "zh-TW": [
      "自我厭惡","自我貶低","不配得感","不夠優秀","我不值得","我做不到","我沒用",
      "弱者","失敗者","沒有天賦","天生愚鈍","運氣差","成不了事","比不上別人",
      "身材焦慮","太矮","太胖","腿粗","手腳不協調","不好看","臉大","皮膚不好","胸太小","腰不夠細","顯老",
    ],
    en: [
      "SELF-HATE","SELF-DOUBT","UNWORTHY","NOT GOOD ENOUGH","I DON'T DESERVE","I CAN'T","USELESS",
      "WEAK","LOSER","NO TALENT","DUMB","UNLUCKY","WILL FAIL","LESS THAN OTHERS",
      "BODY ANXIETY","TOO SHORT","TOO FAT","THICK LEGS","CLUMSY","UGLY","BIG FACE","BAD SKIN","TOO SMALL","NOT THIN","LOOK OLD",
    ],
  },

  // SystemsGrid
  "sg.tag": { "zh-CN": "// MULTIVERSE.MAP", "zh-TW": "// MULTIVERSE.MAP", en: "// MULTIVERSE.MAP" },
  "sg.title1": { "zh-CN": "我的", "zh-TW": "我的", en: "My " },
  "sg.titleFour": { "zh-CN": "四个", "zh-TW": "四個", en: "Four" },
  "sg.title2": { "zh-CN": "宇宙", "zh-TW": "宇宙", en: " Universes" },
  "sg.desc": {
    "zh-CN": "没有人是单一频道。每个 System 都是同时运行的我 — 切换，不是分裂，是完整。",
    "zh-TW": "沒有人是單一頻道。每個 System 都是同時運行的我 — 切換，不是分裂，是完整。",
    en: "No one runs on a single channel. Each System runs in parallel — switching isn't splitting, it's wholeness.",
  },
  "sg.1.title": {
    "zh-CN": "跨境金融理财顾问",
    "zh-TW": "跨境金融理財顧問",
    en: "Cross-border Finance Advisor",
  },
  "sg.1.line1": {
    "zh-CN": "2014 年起入行，十年跨境金融实战。",
    "zh-TW": "2014 年起入行，十年跨境金融實戰。",
    en: "In the industry since 2014 — a decade of cross-border finance.",
  },
  "sg.1.line2": {
    "zh-CN": "帮高净值家庭在多市场之间配置资产",
    "zh-TW": "幫高淨值家庭在多市場之間配置資產",
    en: "Allocating assets across markets for high-net-worth families.",
  },
  "sg.1.cta": { "zh-CN": "进入金融宇宙 →", "zh-TW": "進入金融宇宙 →", en: "Enter the finance universe →" },

  "sg.2.title": { "zh-CN": "机床贸易创业者", "zh-TW": "機床貿易創業者", en: "Machine-tool Trade Founder" },
  "sg.2.line1": {
    "zh-CN": "2019 年至今，深耕工业机床跨境贸易。",
    "zh-TW": "2019 年至今，深耕工業機床跨境貿易。",
    en: "Since 2019, deep in cross-border industrial machine-tool trade.",
  },
  "sg.2.line2": {
    "zh-CN": "发掘更多机械制造行业里优秀的女性，一起交流、合作、创造更大价值。",
    "zh-TW": "發掘更多機械製造行業裡優秀的女性，一起交流、合作、創造更大價值。",
    en: "Finding brilliant women in manufacturing — to connect, collaborate, create more.",
  },
  "sg.2.cta": { "zh-CN": "访问公司主页 →", "zh-TW": "訪問公司主頁 →", en: "Visit company site →" },

  "sg.3.title": { "zh-CN": "泰拳 × 巴西柔术", "zh-TW": "泰拳 × 巴西柔術", en: "Muay Thai × BJJ" },
  "sg.3.vibe": { "zh-CN": "FIGHTER MODE · 格斗博主", "zh-TW": "FIGHTER MODE · 格鬥博主", en: "FIGHTER MODE · Combat Creator" },
  "sg.3.line1": {
    "zh-CN": "在擂台上学会的不是赢，是被打倒后还能站起来。",
    "zh-TW": "在擂台上學會的不是贏，是被打倒後還能站起來。",
    en: "The ring doesn't teach you to win — it teaches you to stand back up.",
  },
  "sg.3.line2": {
    "zh-CN": "背着电脑和拳套四处游历，格斗足迹覆盖大阪、东京、清迈、香港 — 不为符合任何的审美，只为突破自我，获得自由。",
    "zh-TW": "背著電腦和拳套四處遊歷，格鬥足跡覆蓋大阪、東京、清邁、香港 — 不為符合任何的審美，只為突破自我，獲得自由。",
    en: "Laptop + gloves, training across Osaka, Tokyo, Chiang Mai, HK — not for any gaze, only to break through and be free.",
  },
  "sg.3.cta": { "zh-CN": "走进擂台 →", "zh-TW": "走進擂台 →", en: "Step into the ring →" },

  "sg.4.title": { "zh-CN": "播客主理人", "zh-TW": "播客主理人", en: "Podcast Host" },
  "sg.4.badge": { "zh-CN": "《时差 8 个钟》", "zh-TW": "《時差 8 個鐘》", en: "'Timezone 8 Hours'" },
  "sg.4.line1": {
    "zh-CN": "香港 & 伦敦两位女生对谈，用声音连接两座城市。",
    "zh-TW": "香港 & 倫敦兩位女生對談，用聲音連接兩座城市。",
    en: "Two women in HK & London — voice bridging two cities.",
  },
  "sg.4.line2": {
    "zh-CN": "聊聊我们关于成长、异乡、漂泊、探索的真实思考。",
    "zh-TW": "聊聊我們關於成長、異鄉、漂泊、探索的真實思考。",
    en: "Real talk on growing up, exile, drifting, exploring.",
  },
  "sg.4.cta": { "zh-CN": "听一集播客 →", "zh-TW": "聽一集播客 →", en: "Listen to an episode →" },

  // Podcast
  "pod.tag": { "zh-CN": "// INCOMING.SIGNAL", "zh-TW": "// INCOMING.SIGNAL", en: "// INCOMING.SIGNAL" },
  "pod.title1": { "zh-CN": "《时差", "zh-TW": "《時差", en: "'Timezone " },
  "pod.title2": { "zh-CN": "个钟》", "zh-TW": "個鐘》", en: "h'" },
  "pod.subtitle": {
    "zh-CN": "香港 × 伦敦 · 两位女生的对谈录",
    "zh-TW": "香港 × 倫敦 · 兩位女生的對談錄",
    en: "Hong Kong × London · Two women in dialogue",
  },
  "pod.desc": {
    "zh-CN": "时差不是距离，是两种人生在同一通话里碰撞的火花。",
    "zh-TW": "時差不是距離，是兩種人生在同一通話裡碰撞的火花。",
    en: "A timezone isn't distance — it's two lives colliding in one call.",
  },
  "pod.cta": { "zh-CN": "🎧 收听第一集", "zh-TW": "🎧 收聽第一集", en: "🎧 Listen to EP01" },
  "pod.epTitle": { "zh-CN": "异乡教给我的事", "zh-TW": "異鄉教給我的事", en: "What a foreign land taught me" },
  "pod.listenAria": { "zh-CN": "在 Spotify 收听", "zh-TW": "在 Spotify 收聽", en: "Listen on Spotify" },

  // Manifesto
  "mf.tag": { "zh-CN": "// MANIFESTO.txt", "zh-TW": "// MANIFESTO.txt", en: "// MANIFESTO.txt" },
  "mf.quote1": {
    "zh-CN": "「有限游戏的人为",
    "zh-TW": "「有限遊戲的人為",
    en: "\"Finite players play to ",
  },
  "mf.quoteWin": { "zh-CN": "赢", "zh-TW": "贏", en: "win" },
  "mf.quote2": {
    "zh-CN": "而玩，无限游戏的人为",
    "zh-TW": "而玩，無限遊戲的人為",
    en: ", infinite players play to ",
  },
  "mf.quoteKeep": { "zh-CN": "继续玩", "zh-TW": "繼續玩", en: "keep playing" },
  "mf.quote3": { "zh-CN": "而玩。」", "zh-TW": "而玩。」", en: ".\"" },
  "mf.quoteAttrib": {
    "zh-CN": "— James P. Carse · 而我，选择继续玩。",
    "zh-TW": "— James P. Carse · 而我，選擇繼續玩。",
    en: "— James P. Carse · And I choose to keep playing.",
  },
  "mf.p1a": { "zh-CN": "我希望寻找更多的 ", "zh-TW": "我希望尋找更多的 ", en: "I'm looking for more " },
  "mf.p1b": {
    "zh-CN": "，拒绝被世俗脚本定义。",
    "zh-TW": "，拒絕被世俗腳本定義。",
    en: ", refusing to be defined by the mundane script.",
  },
  "mf.p2": {
    "zh-CN": "简历是给操作者看的，连接是给同频共振的灵魂留的。",
    "zh-TW": "履歷是給操作者看的，連接是給同頻共振的靈魂留的。",
    en: "Résumés are for operators; connection is for souls that resonate.",
  },
  "mf.status": { "zh-CN": "Status:", "zh-TW": "Status:", en: "Status:" },
  "mf.notSeeking": { "zh-CN": "Not Seeking a Job", "zh-TW": "Not Seeking a Job", en: "Not Seeking a Job" },
  "mf.seeking": { "zh-CN": "Seeking:", "zh-TW": "Seeking:", en: "Seeking:" },
  "mf.resonance": { "zh-CN": "Soul Resonance", "zh-TW": "Soul Resonance", en: "Soul Resonance" },
  "mf.p3": {
    "zh-CN": "在这里，技术是我的语言，格斗是我的底色，而深度连接是我的终极目标。我厌倦那些逻辑谬误堆砌的社交，也无意参与任何无聊的博弈。",
    "zh-TW": "在這裡，技術是我的語言，格鬥是我的底色，而深度連接是我的終極目標。我厭倦那些邏輯謬誤堆砌的社交，也無意參與任何無聊的博弈。",
    en: "Here, tech is my language, fighting is my base, deep connection is the goal. I'm tired of social theater built on logical fallacies.",
  },
  "mf.p4": {
    "zh-CN": "我配置了这套系统，是为了过滤掉噪音，精准定位那 1% 的有趣人类。",
    "zh-TW": "我配置了這套系統，是為了過濾掉噪音，精準定位那 1% 的有趣人類。",
    en: "I built this system to filter noise and find the 1% of interesting humans.",
  },
  "mf.filter.1": {
    "zh-CN": "如果你懂底层逻辑优于重复操作。",
    "zh-TW": "如果你懂底層邏輯優於重複操作。",
    en: "If you value first principles over repetition.",
  },
  "mf.filter.2": {
    "zh-CN": "如果你追求高密度的信息交换。",
    "zh-TW": "如果你追求高密度的資訊交換。",
    en: "If you seek high-density information exchange.",
  },
  "mf.filter.3": {
    "zh-CN": "如果你也相信，自由才是连接的前提。",
    "zh-TW": "如果你也相信，自由才是連接的前提。",
    en: "If you believe freedom is the prerequisite for connection.",
  },
  "mf.p5": {
    "zh-CN": "我习惯用 配置者思维 解构世界 —— 无论是巴西柔术的攻防转换，还是 AI 世界 的逻辑架构。在我的系统里，标签只是低效率的分类工具，我更在意的是：",
    "zh-TW": "我習慣用 配置者思維 解構世界 —— 無論是巴西柔術的攻防轉換，還是 AI 世界 的邏輯架構。在我的系統裡，標籤只是低效率的分類工具，我更在意的是：",
    en: "I deconstruct the world with a configurator's mind — whether BJJ transitions or AI architectures. Labels are low-efficiency taxonomy. What I care about:",
  },
  "mf.q1": {
    "zh-CN": "我们能否进行一场 逻辑对齐 的深度对话（Deep Talk）？",
    "zh-TW": "我們能否進行一場 邏輯對齊 的深度對話（Deep Talk）？",
    en: "Can we have a logically-aligned deep talk?",
  },
  "mf.q2": {
    "zh-CN": "我们能否在社交噪音之外，建立一种 非对称的、高频的能量共鸣？",
    "zh-TW": "我們能否在社交噪音之外，建立一種 非對稱的、高頻的能量共鳴？",
    en: "Beyond social noise, can we build asymmetric, high-frequency resonance?",
  },
  "mf.p6": {
    "zh-CN": "如果你也是那个 拒绝被世俗标签定义 的自由灵魂，欢迎接入我的系统。",
    "zh-TW": "如果你也是那個 拒絕被世俗標籤定義 的自由靈魂，歡迎接入我的系統。",
    en: "If you're a free soul refusing to be labeled, plug into my system.",
  },
  "mf.sayhi": {
    "zh-CN": "Say hi, and let's start the deep talk.",
    "zh-TW": "Say hi, and let's start the deep talk.",
    en: "Say hi, and let's start the deep talk.",
  },
  "mf.onlyWant": { "zh-CN": "// I_ONLY_WANT", "zh-TW": "// I_ONLY_WANT", en: "// I_ONLY_WANT" },
  "mf.want.1": { "zh-CN": "共振", "zh-TW": "共振", en: "Resonance" },
  "mf.want.2": { "zh-CN": "共赢", "zh-TW": "共贏", en: "Win-win" },
  "mf.want.3": { "zh-CN": "合作", "zh-TW": "合作", en: "Collaboration" },
  "mf.want.4": { "zh-CN": "解锁更多有趣的人生玩法", "zh-TW": "解鎖更多有趣的人生玩法", en: "Unlock more ways to play life" },
  "mf.stat.1": { "zh-CN": "并行宇宙", "zh-TW": "並行宇宙", en: "PARALLEL UNIVERSES" },
  "mf.stat.2": { "zh-CN": "无限游戏", "zh-TW": "無限遊戲", en: "INFINITE GAME" },
  "mf.stat.3": { "zh-CN": "时差个钟", "zh-TW": "時差個鐘", en: "HOURS APART" },

  // Footer
  "ft.podcast": { "zh-CN": "播客", "zh-TW": "播客", en: "PODCAST" },
  "ft.podcastVal": { "zh-CN": "时差8个钟", "zh-TW": "時差8個鐘", en: "Timezone 8h" },
  "ft.trade": { "zh-CN": "机床贸易", "zh-TW": "機床貿易", en: "MACHINE-TOOL" },
  "ft.collab": { "zh-CN": "合作", "zh-TW": "合作", en: "COLLAB" },
  "ft.tagline": {
    "zh-CN": "一个还在玩的玩家 · since ∞",
    "zh-TW": "一個還在玩的玩家 · since ∞",
    en: "A player still playing · since ∞",
  },
  "ft.cta": { "zh-CN": "开始 Deep Talk", "zh-TW": "開始 Deep Talk", en: "Start Deep Talk" },
  "ft.copyright": {
    "zh-CN": "© KATHY · MULTIVERSE INC.",
    "zh-TW": "© KATHY · MULTIVERSE INC.",
    en: "© KATHY · MULTIVERSE INC.",
  },
  "ft.online": { "zh-CN": "SYSTEM ONLINE ●", "zh-TW": "SYSTEM ONLINE ●", en: "SYSTEM ONLINE ●" },
} as const;

export type TranslationKey = keyof typeof dict;

type Entry = string | readonly string[];
export const translations: Record<Lang, Record<TranslationKey, Entry>> = {
  "zh-CN": Object.fromEntries(Object.entries(dict).map(([k, v]) => [k, (v as any)["zh-CN"]])) as any,
  "zh-TW": Object.fromEntries(Object.entries(dict).map(([k, v]) => [k, (v as any)["zh-TW"]])) as any,
  en: Object.fromEntries(Object.entries(dict).map(([k, v]) => [k, (v as any).en])) as any,
};
