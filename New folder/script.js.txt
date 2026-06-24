// 核心配置：只要 id 中包含 "标题" 二字，就会被判定为标题行，支持随语言一键切换
// { id: "标题1-第15课", th: "บทที่ 15 (泰文标题示范)", zh: "第十五课 (中文标题示范)" }, 
const sentences = [

{ id: 1, th: "สวัสดี", zh: "你好，" },
            { id: 2, th: "สบายดีไหม", zh: "你好吗？" },
            { id: 3, th: "สบายดี", zh: "我很好，" },
            { id: 4, th: "ฉันก็สบายดี", zh: "我也很好，" },
            { id: 5, th: "อรุณสวัสดิ์", zh: "你早，" },
            { id: 6, th: "คุณสุขภาพดีไหม", zh: "你身体好吗？" },
            { id: 7, th: "ขอบคุณ", zh: "谢谢，" },
            { id: 8, th: "ไปก่อนนะแล้วพบกันใหม่", zh: "再见，" },
            { id: 9, th: "คุณงานยุ่งไหม", zh: "你工作忙吗？" },
            { id: 10, th: "ยุ่งมาก แล้วคุณล่ะ", zh: "很忙，你呢？" },
            { id: 11, th: "ฉันไม่ค่อยยุ่ง", zh: "我不太忙，" },
            { id: 12, th: "พ่อแม่คุณสุขภาพดีไหม", zh: "你爸爸妈妈身体好吗？" },
            { id: 13, th: "ฉันชื่อหม่าลี่ค่ะ", zh: "我叫玛丽，" },
            { id: 14, th: "ยินดีที่ได้รู้จัก", zh: "认识你我很高兴，" },
            { id: 15, th: "คุณแซ่อะไร", zh: "您贵姓？" },
            { id: 16, th: "คุณชื่ออะไร", zh: "你叫什么名字？" },
            { id: 17, th: "เขาแซ่อะไร", zh: "他姓什么？" },
            { id: 18, th: "เขาไม่ใช่อาจารย์ เขาเป็นนักเรียน", zh: "他不是老师，他是学生" },
            { id: 19, th: "เขาเป็นใคร", zh: "他是谁？" },
            { id: 20, th: "ผมขอแนะนำหน่อย", zh: "我介绍一下，" },
            { id: 21, th: "คุณจะไปไหน", zh: "你去哪？" },
            { id: 22, th: "อาจารย์จางอยู่บ้านไหม", zh: "张老师在家吗？" },
            { id: 23, th: "ฉันเป็นลูกศิษย์ของอาจารย์จาง", zh: "我是张老师的学生，" },
            { id: 24, th: "เชิญเข้ามา", zh: "请进，" },
            { id: 25, th: "วันนี้วันที่เท่าไร", zh: "今天几号？" },
            { id: 26, th: "วันนี้วันที่ 8", zh: "今天8号，" },
            { id: 27, th: "วันนี้ไม่ใช่วันพฤหัส เมื่อวานวันพฤหัส", zh: "今天不是星期四，昨天星期四，" },
            { id: 28, th: "ตอนเย็นคุณจะทำอะไร", zh: "晚上你做什么？" },
            { id: 29, th: "วันเกิดคุณ วันที่เท่าไรเดือนอะไร", zh: "你的生日是几月几号？" },
            { id: 30, th: "พวกเราไปบ้านเขาตอนเช้า ดีไหม", zh: "我们上午去他家好吗？" },
            { id: 31, th: "ครอบครัวคุณมีกี่คน", zh: "你家有几口人？" },
            { id: 32, th: "แม่คุณทำงานอะไร", zh: "你妈妈做什么工作？" },
            { id: 33, th: "เขาทำงานที่มหาวิทยาลัย", zh: "她在大学工作，" },
            { id: 34, th: "ครอบครัวฉันมีพ่อแม่ และน้องชายอีก 1 คน", zh: "我家有爸爸、妈妈和一个弟弟，" },
            { id: 35, th: "พี่ชายแต่งงานแล้ว", zh: "哥哥结婚了，" },
            { id: 36, th: "พวกเขายังไม่มีลูก", zh: "他们没有孩子，" },
            { id: 37, th: "ตอนนี้กี่โมง", zh: "现在几点？" },
            { id: 38, th: "ตอนนี้ 7 โมง 25 นาที", zh: "现在七点二十五分，" },
            { id: 39, th: "คุณไปเรียนกี่โมง", zh: "你几点上课？" },
            { id: 40, th: "ไปตอน 7 โมง 45", zh: "差一刻八点去，" },
            { id: 41, th: "ฉันจะไปทานข้าว", zh: "我去吃饭，" },
            { id: 42, th: "พวกเราจะไปกันเมื่อไร", zh: "我们什么时候去？" },
            { id: 43, th: "เช้าเกินไป", zh: "太早了，" },
            { id: 44, th: "ฉันก็ตื่น6โมงครึ่งเช่นกัน", zh: "我也六点半起床，" },
            { id: 45, th: "คุณพักอยู่ที่ไหน", zh: "你住在哪儿？" },
            { id: 46, th: "ฉันพักอยู่ที่หอพักนักศึกษาต่างชาติ", zh: "我住在留学生宿舍，" },
            { id: 47, th: "ห้องพักหมายเลขอะไร", zh: "多少号房间？" },
            { id: 48, th: "บ้านคุณอยู่ที่ไหน", zh: "你家在哪儿？" },
            { id: 49, th: "ยินดีคุณไปเที่ยวนะ", zh: "欢迎你去玩，" },
            { id: 50, th: "เขาไปบ่อย", zh: "她常去，" },
            { id: 51, th: "พวกเราไปด้วยกันเถอะ", zh: "我们一起去吧，" },
            { id: 52, th: "ถ้าอย่างนั้นดีมากๆเลย", zh: "那太好了，" },
            { id: 53, th: "ตึก 8 อยู่ข้างที่ทำการไปรษณีย์", zh: "八号楼在邮局旁边，" },
            { id: 54, th: "ไปตึก 8 ไปอย่างไร", zh: "去八号楼怎么走？" },
            { id: 55, th: "ตึกนั้นก็คือตึก 8", zh: "那个楼就是八号楼，" },
            { id: 56, th: "ขอถามหน่อย ที่ทำการไปรษณีย์อยู่ที่ไหนครับ", zh: "请问，邮局在哪儿？" },
            { id: 57, th: "เดินตรงไป ข้างหน้าก็จะเป็นที่ทำการไปรษณีย์แล้ว", zh: "往前走就是邮局，" },
            { id: 58, th: "ที่ทำการไปรษณีย์ ห่างไกลจากที่นี่ไหม", zh: "邮局离这远不远？" },
            { id: 59, th: "ห้างสรรพสินค้าอยู่ที่ไหน", zh: "百货大楼在什么地方？" },
            { id: 60, th: "ขึ้นรถที่ไหน", zh: "在哪儿坐车？" },
            { id: 61, th: "คุณต้องการอะไร", zh: "您要什么？" },
            { id: 62, th: "แอปเปิ้ลโลละเท่าไร", zh: "苹果多少钱一斤？" },
            { id: 63, th: "โลละ 7 หยวน 5 เหมา", zh: "七块五一斤，" },
            { id: 64, th: "คุณต้องการเท่าไร", zh: "您要多少？" },
            { id: 65, th: "คุณต้องการอย่างอื่นอีกไหม", zh: "您还要别的吗？" },
            { id: 66, th: "ไม่เอาแล้ว", zh: "不要了，" },
            { id: 67, th: "ฉันจะซื้อส้ม", zh: "我要买橘子，" },
            { id: 68, th: "คุณลองชิมก่อนสิ", zh: "您尝尝，" },
            { id: 69, th: "อากาศหนาวแล้ว", zh: "天冷了，" },
            { id: 70, th: "ฉันอยากจะซื้อเสื้อไหมพรมสักตัวหนึ่ง", zh: "我想买件毛衣，" },
            { id: 71, th: "ไปวันอาทิตย์ ดีไหม", zh: "星期天去，怎么样？" },
            { id: 72, th: "วันอาทิตย์คนเยอะ", zh: "星期天人多，" },
            { id: 73, th: "ฉันขอดูเสื้อไหมพรมตัวนั้นหน่อย", zh: "我看看那件毛衣，" },
            { id: 74, th: "เสื้อไหมพรมตัวนี้ ฉันขอลองหน่อยได้ไหม", zh: "这件毛衣我可以试试吗？" },
            { id: 75, th: "เสื้อไหมพรมตัวนี้ ไม่เล็กไปแล้วก็ไม่ใหญ่ไป", zh: "这件毛衣不大也不小，" },
            { id: 76, th: "เยี่ยมมากเลย", zh: "好极了，" },
            { id: 77, th: "รถสายนี้ ไปจตุรัสเทียนอันเหมินไหม", zh: "这路车到天安门吗？" },
            { id: 78, th: "ฉันซื้อตั๋ว 2 ใบ", zh: "我买两张票，" },
            { id: 79, th: "จ่ายให้คุณ 5 หยวน", zh: "给你五块钱，" },
            { id: 80, th: "ยังมีอีกกี่ป้ายถึงจตุรัสเทียนอันเหมิน", zh: "到天安门还有几站？" },
            { id: 81, th: "ฉันพูดภาษาจีนได้นิดหน่อย", zh: "我会说一点汉语，" },
            { id: 82, th: "ถึงจตุรัสเทียนอันเหมินแล้ว", zh: "天安门到了，" },
            { id: 83, th: "ไปมหาวิทยาลัยภาษาต้องเปลี่ยนรถไหม", zh: "去语言大学要换车吗？" },
            { id: 84, th: "เปลี่ยนรถสายไหน", zh: "换几路车？" },
            { id: 85, th: "เงินใช้หมดแล้ว", zh: "钱都花了，" },
            { id: 86, th: "ได้ยินมาว่า ในโรงแรมสามารถแลกเงินได้", zh: "听说饭店里可以换钱，" },
            { id: 87, th: "ที่นี่แลกเงินได้ไหม", zh: "这能不能换钱？" },
            { id: 88, th: "คุณนำเงินอะไรมาแลก", zh: "您带的什么钱？" },
            { id: 89, th: "กรุณาเขียนจำนวนเงินตรงนี้ให้หน่อย", zh: "请您在这写一下钱数，" },
            { id: 90, th: "กรุณานับหน่อยด้วย", zh: "请数一数，" },
            { id: 91, th: "จะสายแล้วนะ", zh: "时间不早了，" },
            { id: 92, th: "พวกเรารีบไปกันเถอะ", zh: "我们快走吧，" },
            { id: 93, th: "นี่เป็นโปสการ์ดออกใหม่", zh: "这是新出的明信片，" },
            { id: 94, th: "ยังมีที่สวยๆอีกไหม", zh: "还有好看的吗，" },
            { id: 95, th: "แบบนี้เป็นอย่างไรบ้าง", zh: "这几种怎么样？" },
            { id: 96, th: "กรุณาช่วยเลือกซัก2-3แบบ", zh: "请你帮我挑几种，" },
            { id: 97, th: "เอาแบบละ 1 ชุด", zh: "一种买一套吧，" },
            { id: 98, th: "โทรศัพท์แบตหมดแล้ว", zh: "手机没电了，" },
            { id: 99, th: "คุณโทรติดหรือยัง", zh: "你打通电话了吗？" },
            { id: 100, th: "เขาปิดเครื่องแล้ว", zh: "她关机了，" } 

];

let learnedSentences = new Set();
let isAudioPlaying = false; 
let isChineseMode = false;
let userProfile = { name: "同学", avatar: "" };
let fadeInterval = null; // 提取至全局，便于多处生命周期中精准清理淡入定时器

// 用于音频交替切换的全局状态管理
const audioToggles = {}; // 动态字典：记录每一个句子下一次应该放 A 轨(true) 还是 B 轨(false)
let lastPlayedId = null; // 变量：记录上一次成功播放的句子 ID

const mainAudio = new Audio();
const scoreAudio = new Audio('audio/yinxiao-ding.mp3');     
const bubbleAudio = new Audio('audio/yinxiao-bubble.mp3'); 
const winAudio = new Audio('audio/yinxiao-win.mp3');       

const ui = {
    list: document.getElementById('list'),
    score: document.getElementById('totalScore'),
    progress: document.getElementById('progressBar'),
    langBtn: document.getElementById('langBtn'),
    body: document.body
};

// 初始化 LIFF 与页面组件
async function init() {
    try {
        await liff.init({ liffId: "2009077149-jVSq4jaZ" });
        if (liff.isLoggedIn()) {
            const profile = await liff.getProfile();
            userProfile.name = profile.displayName;
            userProfile.avatar = profile.pictureUrl;
        }
    } catch (err) { console.warn("LIFF Load Fail"); }
    renderList();
    document.querySelector('.lang-wrapper').onclick = toggleLanguage;
    updateScore(false);
}

// 动态渲染列表
function renderList() {
    const fragment = document.createDocumentFragment();
    sentences.forEach(s => {
        const isHeader = typeof s.id === 'string' && s.id.includes('标题');
        const li = document.createElement('li');
        
        if (isHeader) {
            li.className = 'sentence-header'; 
            li.id = `header-${s.id}`;
            li.innerHTML = `
                <div class="header-zh-text">${s.zh}</div>
                <div class="header-th-text">${s.th}</div>
            `;
        } else {
            // 初始化当前句子的切换状态：默认首次播放加载原音频(true)
            audioToggles[s.id] = true; 

            li.className = 'sentence-item';
            li.id = `item-${s.id}`;
            li.innerHTML = `
                <div class="sentence-no">${s.id}</div>
                <div class="text-content">
                    <div class="zh-text">${s.zh}</div>
                    <div class="th-text">${s.th}</div>
                </div>`;
            li.onclick = () => handlePlay(s, li);
        }
        fragment.appendChild(li);
    });
    
    ui.list.innerHTML = ''; // BUG 修复：挂载前主动清空容器，防止动态刷新时列表重叠
    ui.list.appendChild(fragment);
}

// 极简高性能双语切换
function toggleLanguage() {
    if (isAudioPlaying) return; // 点读音频播放时锁定切换
    isChineseMode = !isChineseMode;
    
    // 一键响应，无缝衔接 CSS
    ui.body.classList.toggle('lang-mode-zh', isChineseMode);
    ui.langBtn.classList.toggle('chinese', isChineseMode);
}

// 点读核心控制
function handlePlay(s, element) {
    if (isAudioPlaying) return;
    
    if (navigator.vibrate) navigator.vibrate(20);

    isAudioPlaying = true;
    ui.body.classList.add('locked-mode');
    element.classList.add('playing-now');

    const isFirstTime = !learnedSentences.has(s.id); 

    // 1. 如果用户中途去点了别的句子，需将当前句子的音频开关重置回初始 A 轨状态
    if (lastPlayedId !== s.id) {
        audioToggles[s.id] = true; 
    }
    
    // 2. 记录当前试图播放的是 A 轨还是 B 轨，方便在 onerror 中做判断
    const tryingBTrack = !audioToggles[s.id]; 
    
    // 根据状态字典决定本次音频名：true 播放 `id.mp3`，false 播放 `id-b.mp3`
    const url = `audio/${audioToggles[s.id] ? s.id : s.id + '-b'}.mp3`;
    
    // 状态预先取反：为下一次重复点击该句子切换音轨做准备
    audioToggles[s.id] = !audioToggles[s.id];
    lastPlayedId = s.id; // 更新最后播放记录为当前句子 ID
    
    mainAudio.src = url;
    
    mainAudio.onplay = () => {
        mainAudio.volume = 0;
        let v = 0;
        clearInterval(fadeInterval); // 播放前安全清理上一次未完结的淡入
        fadeInterval = setInterval(() => {
            v += 0.2;
            if (v >= 1) { mainAudio.volume = 1; clearInterval(fadeInterval); }
            else mainAudio.volume = v;
        }, 30);
    };

    // 抽离统一的播放状态重置函数
    const resetPlaybackState = () => {
        clearInterval(fadeInterval); // BUG 修复：防止超短音频提前结束导致的定时器溢出与音量冲突
        isAudioPlaying = false;
        ui.body.classList.remove('locked-mode');
    };

    mainAudio.onended = () => {
        element.classList.remove('playing-now');
        element.classList.add('has-learned');

        const feedbackAudio = isFirstTime ? scoreAudio : bubbleAudio;
        feedbackAudio.currentTime = 0;
        feedbackAudio.play().catch(()=>{});

        if (isFirstTime) {
            learnedSentences.add(s.id);
            updateScore(false); 
        }

        feedbackAudio.onended = resetPlaybackState;
        feedbackAudio.onerror = resetPlaybackState;
    };
    
    // ====== 核心修改：智能容错降级机制 ======
    mainAudio.onerror = () => {
        // 如果是在尝试播放 B 轨（-b.mp3）时报错了，说明该句子没有配双轨音频
        if (tryingBTrack) {
            console.warn(`句子 ${s.id} 未检测到 B 轨音频，自动降级播放原音频。`);
            
            // 恢复该句子的状态字典，让它下一次依然尝试原音频
            audioToggles[s.id] = false; 
            
            // 重新切回原音频路径并播放
            mainAudio.src = `audio/${s.id}.mp3`;
            mainAudio.play().catch(() => {
                // 如果连原音频也挂了（彻底没文件），才执行真正的彻底重置
                resetPlaybackState();
                element.classList.remove('playing-now');
            });
        } else {
            // 如果是正常 A 轨就报错，说明这个句子根本没音频，直接释放锁，不卡死界面
            resetPlaybackState();
            element.classList.remove('playing-now');
        }
    };

    mainAudio.play().catch(mainAudio.onerror);
}

// 计分板与进度条实时同步
function updateScore(shouldPlaySound = true) {
    const current = learnedSentences.size;
    // 过滤掉包含“标题”字样的占位项，精准计算核心句型总数
    const total = sentences.filter(s => !(typeof s.id === 'string' && s.id.includes('标题'))).length;
    
    ui.score.textContent = `${current}/${total}`;
    ui.progress.style.width = `${total > 0 ? (current / total) * 100 : 0}%`;
    
    if (shouldPlaySound) {
        scoreAudio.currentTime = 0;
        scoreAudio.play().catch(()=>{});
    }
    
    if (current >= total && total > 0) {
        setTimeout(showCongrats, 800);
    }
}

// 展现通关喜报弹窗
function showCongrats() {
    winAudio.play().catch(() => {});
    const now = new Date();
    document.getElementById('displayTime').textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}:${now.getMinutes()}`;
    document.getElementById('userName').textContent = userProfile.name;
    document.getElementById('userImg').src = userProfile.avatar || 'images/default-avatar.jpg';
    document.getElementById('congrats-overlay').style.display = 'flex';
}

// Supabase 初始化配置
const supabaseUrl = 'https://tpxvlpkyxzuqcnhkuaos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRweHZscGt5eHp1cWNuaGt1YW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIwMzI4NjcsImV4cCI6MjA4NzYwODg2N30.ZKZuZ1tazEVInlmU3IBQ_1DuRCvUedqpyqSRlbOw3Bk';
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// 数据异步上传并关闭 LIFF 窗口
async function handleUploadAndClose() {
    const name = userProfile.name || "LINE同学"; 
    const lessonElement = document.getElementById('lessonTitle');
    const lesson = lessonElement ? lessonElement.innerText : "未知课程"; 

    try {
        const { error } = await supabaseClient
            .from('learning_logs')
            .insert([{ 
                student_name: name, 
                lesson_id: lesson
            }]);

        if (error) {
            console.error("Supabase 儲存失敗:", error.message);
        } else {
            console.log(`數據已成功遞交至 Supabase！课程：${lesson}`);
        }
    } catch (err) {
        console.error("執行上传时发生异常:", err);
    } finally {
        if (typeof liff !== 'undefined' && liff.closeWindow) {
            liff.closeWindow();
        }
    }
}

window.onload = init;