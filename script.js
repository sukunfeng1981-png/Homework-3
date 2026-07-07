// 核心配置：只要 id 中包含 "标题" 二字，就会被判定为标题行，支持随语言一键切换
// { id: "标题1-第15课", th: "บทที่ 15 (泰文标题示范)", zh: "第十五课 (中文标题示范)" }, 
const sentences = [

{ id: 101, th: "คุณเคยดูงิ้วไหม", zh: "你看过京剧吗，" },
{ id: 102, th: "ผมไม่เคยดูงิ้ว", zh: "我没看过京剧，" },
{ id: 103, th: "คุณรู้ไหมว่าที่ไหนแสดงงิ้ว", zh: "你知道哪儿演京剧吗，" },
{ id: 104, th: "หลังจากคุณซื้อตั๋วได้แล้วบอกผมด้วย", zh: "你买到票以后告诉我，" },
{ id: 105, th: "ผมยังไม่เคยทานเป็ดปักกิ่งเลย", zh: "我还没吃过北京烤鸭呢，" },
{ id: 106, th: "พวกเราควรจะไปลองชิมดู", zh: "我们应该去尝一尝，" },
{ id: 107, th: "ไม่ได้", zh: "不行，" },
{ id: 108, th: "มีเพื่อนมาเยี่ยมผม", zh: "有朋友来看我，" },
{ id: 109, th: "สองสามวันนี้ อากาศดีมาก", zh: "这两天天气很好，" },
{ id: 110, th: "พวกเราออกไปเที่ยวกันเถอะ", zh: "我们出去玩玩吧，" },
{ id: 111, th: "ไปเที่ยวไหนดีล่ะ", zh: "去哪儿玩好呢，" },
{ id: 112, th: "ไปดูดอกไม้ พายเรือที่สวนสาธารณะ เป๋ยไห่", zh: "去北海公园，看看花，划划船，" },
{ id: 113, th: "ขี่จักรยานไปกันเถอะ", zh: "骑自行车去吧，" },
{ id: 114, th: "วันนี้อากาศดีมากเลย", zh: "今天天气多好呀，" },
{ id: 115, th: "เขามาถึงตอนเช้าหรือตอนบ่าย", zh: "她上午到还是下午到，" },
{ id: 116, th: "ผมไปด้วยกันกับคุณ", zh: "我跟你一起去，" },
{ id: 117, th: "เครื่องบินที่มาจากโตเกียวมาถึงหรือยัง", zh: "从东京来的飞机到了吗，" },
{ id: 118, th: "เครื่องบินดีเลย์", zh: "飞机晚点了，" },
{ id: 119, th: "เครื่องบินใกล้จะออกแล้ว", zh: "飞机快要起飞了，" },
{ id: 120, th: "เครื่องบินน่าจะถึงประมาณ 3 โมงครึ่ง", zh: "飞机大概三点半能到，" },
{ id: 121, th: "พวกเราไปดื่มกาแฟกันสักหน่อยก่อน อีกสักครู่ค่อยมาตรงนี้อีกครั้ง", zh: "我们先去喝点咖啡，一会儿再来这吧，" },
{ id: 122, th: "ระหว่างทางคงเหนื่อยล่ะสิ", zh: "路上辛苦了，" },
{ id: 123, th: "คุณรู้ได้อย่างไรว่าฉันจะมา", zh: "你怎么知道我要来，" },
{ id: 124, th: "เหอจื่อเป็นคนบอกผม", zh: "是和子告诉我的，" }

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
        await liff.init({ liffId: "2009077149-6j8JKD9G" });
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