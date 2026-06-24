const sentences = [
        { id: 205, th: "คุณชอบกีฬาอะไร", zh: "你喜欢什么运动，" },
    { id: 206, th: "ปีนเขา เล่นสเก็ตน้ำแข็ง ว่ายน้ำ ผมชอบทั้งหมดเลย", zh: "爬山，滑冰，游泳，我都喜欢，" },
    { id: 207, th: "คุณว่ายน้ำเก่งไหม", zh: "你游泳游得好不好，" },
    { id: 208, th: "ผมว่ายได้ไม่เก่ง ว่ายไม่เก่งเท่าคุณ", zh: "我游得不好，没有你游得好，" },
    { id: 209, th: "ใครแข่งกับใคร", zh: "谁跟谁比赛，" },
    { id: 210, th: "ทีมปักกิ่งกับทีมกวางตุ้ง", zh: "北京队对广东队，" },
    { id: 211, th: "ฉันกำลังเขียนพู่กันจีน ไม่ได้วาดรูป", zh: "我在写毛笔字，没画画，" },
    { id: 212, th: "ผมอยากจะพักสักครู่", zh: "我想休息一会，" },
    { id: 213, th: "การออกเสียงของฉันยังไม่ค่อยดี", zh: "我的发音还差得远呢，" },
    { id: 214, th: "คุณเรียนภาษาจีนมานานแค่ไหนแล้ว", zh: "你学汉语学了多长时间了，" },
    { id: 215, th: "คุณอ่านหนังสือพิมพ์จีนเข้าใจไหม", zh: "你能看懂中文报吗，" },
    { id: 216, th: "การฟังและการพูดค่อนข้างยาก การอ่านค่อนข้างง่าย", zh: "听和说比较难，看比较容易，" },
    { id: 217, th: "พูดช้าๆหน่อย ฉันฟังเข้าใจได้", zh: "慢点说，我听得懂，" },
    { id: 218, th: "คุณยุ่งอะไรอยู่", zh: "你忙什么呢，" },
    { id: 219, th: "คุณพ่อฉันมา ฉันต้องไปเป็นเพื่อนเขาเที่ยว", zh: "我父亲来了，我要陪他去旅行，" },
    { id: 220, th: "นอกจากกวางเจาและเซี่ยงไฮ้แล้ว พวกเรายังจะไปฮ่องกงอีกด้วย", zh: "除了广州上海以外，我们还要去香港，" },
    { id: 221, th: "โบราณสถานที่มีชื่อเสียงของจีนมีมากมาย", zh: "中国的名胜古迹多的很，" },
    { id: 222, th: "คุณว่ามาเถอะ ผมจะเชื่อคุณ", zh: "你说吧，我听你的，" },
    { id: 223, th: "จากปักกิ่งไปกุ้ยหลิน ต้องนั่งรถไฟนานเท่าไหร่", zh: "从北京到桂林坐火车要坐多长时间，" },
    { id: 224, th: "หนึ่งทุ่มมีหนัง ไปตอนนี้จะทันหรือเปล่า", zh: "七点有电影，现在去来得及来不及，" },
    { id: 225, th: "พวกเราไปดูหนังกัน", zh: "我们看电影去，" },
    { id: 226, th: "ของที่เซี่ยงไฮ้มีเยอะกว่าที่นี่มาก", zh: "上海的东西比这多得多，" },
    { id: 227, th: "ฉันอยากซื้อของขวัญนิดหน่อยส่งกลับไปให้ที่บ้าน", zh: "我想买些礼物寄回家去，" },
    { id: 228, th: "คุณอยากจะไปเที่ยวที่สวนอี้หยวนไม่ใช่หรอ", zh: "你不是要去豫园游览吗，" },
    { id: 229, th: "คุณเจอเหอจึอหรือยัง", zh: "你看见和子了吗，" },
    { id: 230, th: "คุณเข้าไปหาเธอที่ห้องโถงใหญ่สิ", zh: "你进大厅去找她吧，" },
    { id: 231, th: "ตั๋วเครื่องบินภายในสามวันนี้ไม่มีเลย", zh: "三天以内的机票都没有了，" },
    { id: 232, th: "คุณควรจองตั๋วเครื่องบินเร็วกว่านี้หน่อย", zh: "您应该早点预定飞机票，" },
    { id: 233, th: "ฉันมีธุระด่วน คุณช่วยฉันหน่อยนะ", zh: "我有急事，您帮帮忙吧，" },
    { id: 234, th: "มีตั๋วที่คืนมาของคืนวันที่ 15 เวลาสองทุ่ม 1 ใบ", zh: "有一张十五号晚上八点的退票，" },
    { id: 235, th: "บนตั๋วเครื่องบินเขียนไว้อยู่ เครื่องออกบ่าย 2 โมง 5 นาที (14:05 น.)", zh: "机票上写着十四点零五分起飞，" },
    { id: 236, th: "คุณผู้หญิง กระเป๋าสตางค์ของคุณลืมไว้ที่นี่แล้ว", zh: "小姐，你的钱包忘在这了，" },
    { id: 237, th: "ในที่สุด ก็มาถึงกุ้ยหลินแล้ว", zh: "终于到桂林了，" },
    { id: 238, th: "โอ๊ย ร้อนจะตายอยู่แล้ว", zh: "哎呀，热死了，" },
    { id: 239, th: "ต้องอาบน้ำให้สดชื่น ๆ สักหน่อย", zh: "一定要痛痛快快地洗个澡，" },
    { id: 240, th: "ขอแค่ให้ผมได้อาบน้ำเร็วหน่อยก็โอเค", zh: "只要能让我早一点洗澡就行，" },
    { id: 241, th: "พวกเราได้จองห้องพักจากทางอินเตอร์เน็ตไว้สองห้อง", zh: "我们在网上预定了两个房间，" },
    { id: 242, th: "กรุณากดรหัส กรุณาเซ็นชื่อตรงนี้", zh: "请输入密码，请在这里签名，" },
    { id: 243, th: "กระเป๋าใบนั้นคุณใส่เข้าไปในตู้เสื้อผ้าเถอะ", zh: "那个包你放进衣柜里去吧，" },
    { id: 244, th: "กระเป๋าใบนั้นใหญ่มาก สามารถใส่เข้าไปได้หรือไม่ได้", zh: "那个包很大，放得进去放不进去，" },
    { id: 245, th: "คุณเป็นอะไรหรอ", zh: "你怎么了，" },
    { id: 246, th: "ฉันปวดหัวและไอ", zh: "我头疼，咳嗽，" },
    { id: 247, th: "เมื่อวานตอนเย็นฉันก็เริ่มไม่สบายแล้ว", zh: "我昨天晚上就开始不舒服了，" },
    { id: 248, th: "คุณอ้าปากสิ ผมขอดูหน่อย", zh: "你把嘴张开，我看看，" },
    { id: 249, th: "ทานยาสักสองวันก็หายแล้ว", zh: "吃两天药就会好的，" },
    { id: 250, th: "หวังหลานล่ะ", zh: "王兰呢，" },
    { id: 251, th: "พอเลิกเรียนแล้วฉันก็จะไปหาเขา", zh: "我一下课就找她，" },
    { id: 252, th: "ฉันไปหาเขาสองครั้งแล้ว เขาไม่อยู่", zh: "我找了她两次，她都不在。" },
    { id: 253, th: "หวังหลานถูกรถชนบาดเจ็บ", zh: "王兰被车撞伤了，" },
    { id: 254, th: "เอาผลไม้อะไรพวกนี้แล้วกัน", zh: "带些水果什么的吧，" },
    { id: 255, th: "หน้าโรงพยาบาลซ่อมถนน รถไม่สามารถไปถึงประตูทางเข้าได้", zh: "医院前边修路，汽车到不了医院门口，" },
    { id: 256, th: "จากที่นั่นเดินไปใกล้มาก ๆ", zh: "从那走着去很近，" },
    { id: 257, th: "คุณดีขึ้นบ้างหรือยัง", zh: "你好点了吗，" },
    { id: 258, th: "ดูท่าทางแล้ว คุณดีขึ้นมากเลย", zh: "看样子，你好多了，" },
    { id: 259, th: "ฉันรู้สึกว่าดีขึ้นทุกวัน", zh: "我觉得一天比一天好，" },
    { id: 260, th: "พวกเรานำของกินมาให้คุณนิดหน่อย", zh: "我们给你带来一些吃的，" },
    { id: 261, th: "ไม่ได้เจอกันตั้งนานแล้ว", zh: "好久不见了，" },
    { id: 262, th: "วันนี้ทำไมคุณว่างมาได้ล่ะ ", zh: "你今天怎么有空来了，" },
    { id: 263, th: "ฉันมาบอกลาคุณ", zh: "我来向你告别，" },
    { id: 264, th: "ฉันมารบกวนคุณ บ่อยๆ รู้สึกไม่สบายใจเลย", zh: "我常来打扰你，很过意不去，" },
    { id: 265, th: "คุณยุ่งขนาดนั้น ไม่ต้องส่งฉันหรอก", zh: "你那么忙，不用送我了，" },
    { id: 266, th: "ฉันเรียนไปด้วย ทำงานไปด้วย", zh: "我一边学习，一边工作，" },
    { id: 267, th: "เพื่อนๆ บางคนรู้ บางคนไม่รู้", zh: "朋友们有的知道，有的不知道，" },
    { id: 268, th: "ถือโอกาสที่ว่างสองสามวันนี้ ผมไปบอกลาพวกเขา", zh: "趁这两天有空，我去向他们告别，" },
    { id: 269, th: "วันที่จะกลับประเทศนับวันยิ่งใกล้เข้ามาแล้ว", zh: "回国的日子越来越近了，" },
    { id: 270, th: "ถึงแม้ว่าระยะเวลาจะไม่นาน แต่มิตรภาพของพวกเรานั้นลึกซึ้งมาก", zh: "虽然时间不长，但是我们的友谊很深，" },
    { id: 271, th: "พวกเราเอาที่อยู่ที่ติดต่อได้ทิ้งไว้ในสมุดแล้ว", zh: "我们把通讯地址都留在本子上了，" },
    { id: 272, th: "ให้พวกเราถ่ายรูปด้วยกันสักรูปเถอะ", zh: "让我们一起照张相吧，" },
    { id: 273, th: "นอกจากพวกที่ฝึกงาน คนอื่นๆต่างก็มากันหมดแล้ว", zh: "除了实习的以外，都来了，" },
    { id: 274, th: "คุณใช้ภาษาจีนร้องเพลงสักเพลงสิ", zh: "你用汉语唱个歌吧，" },
    { id: 275, th: "ฉันร้องจบ ก็ควรจะถึงตาพวกคุณแล้ว ", zh: "我唱完就该你们了，" },
    { id: 276, th: "ไม่รู้จริงๆ ว่าจะพูดอะไรดี", zh: "真不知道说什么好，" },
    { id: 277, th: "ส่งทางไปรษณีย์ไม่เพียงแต่แพงเท่านั้น กระเป๋าเดินทางใบใหญ่ก็ส่งไม่ได้ด้วย", zh: "邮局寄不但贵，而且这么大的行李也不能寄，" },
    { id: 278, th: "ผมจำไม่ค่อยได้แล้ว", zh: "我记不清楚了，" },
    { id: 279, th: "ฉันนึกขึ้นมาได้แล้ว", zh: "我想起来了，" },
    { id: 280, th: "ขอสอบถามหน่อย ที่นี่ฝากส่งกระเป๋าเดินทางใช่ไหม", zh: "我打听一下，这托运行李吗，" },
    { id: 281, th: "ค่าขนส่งคิดอย่างไร", zh: "运费怎么算，" },
    { id: 282, th: "เก็บค่าธรรมเนียมตามรายการราคานี้", zh: "按照这个价目表收费，" },
    { id: 283, th: "คุณสามารถเอาของขนส่งมาได้", zh: "你可以把东西运来，" },
    { id: 284, th: "กระเป๋าเดินทางของฉันใหญ่มาก คนเดียวขนย้ายไม่ไหว", zh: "我的行李很大，一个人搬不动，" },
    { id: 285, th: "คุณเตรียมตัวเป็นอย่างไรบ้างแล้ว", zh: "你准备得怎么样了，" },
    { id: 286, th: "คุณยังมีธุระอะไรที่ยังไม่ได้ทำ ผมช่วยคุณทำได้", zh: "你还有什么没办的事，我可以替你办，" },
    { id: 287, th: "หนังสือสองสามเล่มนี้ฉันอยากส่งให้เพื่อน เรียกบริการส่งพัสดุไม่ทันแล้ว", zh: "这几本书我想送给朋友，来不及叫快递了，" },
    { id: 288, th: "ผมกำลังรอคุณอยู่", zh: "我正等着你呢，" },
    { id: 289, th: "ของของคุณเก็บเรียบร้อยแล้วใช่ไหม", zh: "你的东西收拾好了吗，" },
    { id: 290, th: "เดินทางไกลบ้านไม่เหมือนกับอยู่บ้าน เรื่องยุ่งยากก็มากมายล่ะ", zh: "出门跟在家不一样，麻烦事就是多，" },
    { id: 291, th: "กระเป๋าเล็ก 4 ใบ สู้กระเป๋าใหญ่ 2 ใบไม่ได้", zh: "四个小包不如两个大包好，" },
    { id: 292, th: "สร้างความลำบากให้คุณอีกแล้ว", zh: "又给你添麻烦了，" },
    { id: 293, th: "ยังมีเวลาอีกนานกว่าเครื่องบินจะออก", zh: "离起飞还早呢，" },
    { id: 294, th: "คุณรีบนั่งลงก่อน ดื่มอะไรเย็นๆ สักหน่อยสิ", zh: "你快坐下，喝点冷饮吧，" },
    { id: 295, th: "คุณไม่ได้เอาหนังสือเดินทางใส่ไว้ในกระเป๋าเดินทางใช่ไหม", zh: "你没把护照放在箱子里吧，" },
    { id: 296, th: "อีกสักครู่ต้องทำขั้นตอนการออกนอกประเทศแล้วนะ", zh: "一会儿还要办出境手续呢，" },
    { id: 297, th: "ระหว่างการเดินทาง ดูแลตัวเองดีๆ", zh: "一路上多保重，" },
    { id: 298, th: "หวังว่าคุณจะติดต่อกับเราบ่อยๆ", zh: "希望你常跟我们联系，" },
    { id: 299, th: "คุณอย่าลืมพวกเราก็แล้วกัน", zh: "你可别把我们忘了，" },
    { id: 300, th: "ผมถึงที่นั่นแล้ว จะส่งวีแชทมาหาพวกคุณ", zh: "我到了那，就给你们发微信，" },
    { id: 301, th: "ขออวยพรให้คุณเดินทางโดยสวัสดิภาพ", zh: "祝你一路平安，" }
];

let learnedSentences = new Set();
let isAudioPlaying = false; 
let isChineseMode = false;
let userProfile = { name: "同学", avatar: "" };

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

async function init() {
    try {
        await liff.init({ liffId: "2009077149-TmSHxUzU" });
        if (liff.isLoggedIn()) {
            const profile = await liff.getProfile();
            userProfile.name = profile.displayName;
            userProfile.avatar = profile.pictureUrl;
        }
    } catch (err) { console.warn("LIFF Load Fail"); }
    renderList();
    ui.langBtn.onclick = toggleLanguage;
    updateScore(false);
}

function renderList() {
    const fragment = document.createDocumentFragment();
    sentences.forEach(s => {
        const li = document.createElement('li');
        li.className = 'sentence-item';
        li.id = `item-${s.id}`;
        li.innerHTML = `
            <div class="sentence-no">${s.id}</div>
            <div class="text-content">
                <div class="zh-text">${s.zh}</div>
                <div class="th-text">${s.th}</div>
            </div>`;
        li.onclick = () => handlePlay(s, li);
        fragment.appendChild(li);
    });
    ui.list.appendChild(fragment);
}

function toggleLanguage() {
    if (isAudioPlaying) return;
    isChineseMode = !isChineseMode;
    document.querySelectorAll('.zh-text').forEach(el => el.style.display = isChineseMode ? 'block' : 'none');
    document.querySelectorAll('.th-text').forEach(el => el.style.display = isChineseMode ? 'none' : 'block');
}

/**
 * 修改后的 handlePlay 逻辑
 */
function handlePlay(s, element) {
    if (isAudioPlaying) return;
    
    if (navigator.vibrate) navigator.vibrate(20);

    isAudioPlaying = true;
    ui.body.classList.add('locked-mode');
    element.classList.add('playing-now'); // 开始朗读，应用缩放效果

    const isFirstTime = !learnedSentences.has(s.id); 
    mainAudio.src = `audio/${s.id}.mp3`;
    
    mainAudio.onplay = () => {
        mainAudio.volume = 0;
        let v = 0;
        const fade = setInterval(() => {
            v += 0.2;
            if (v >= 1) { mainAudio.volume = 1; clearInterval(fade); }
            else mainAudio.volume = v;
        }, 30);
    };

    // 当句子朗读结束时
    mainAudio.onended = () => {
        
        // --- 核心修改：朗读一结束，立刻移除缩放效果 ---
        element.classList.remove('playing-now');
        element.classList.add('has-learned');

        // --- 同时开始播放反馈音效 ---
        const feedbackAudio = isFirstTime ? scoreAudio : bubbleAudio;
        feedbackAudio.currentTime = 0;
        feedbackAudio.play().catch(()=>{});

        // 逻辑处理：更新分数
        if (isFirstTime) {
            learnedSentences.add(s.id);
            updateScore(false); 
        }

        // 音效播放结束后，彻底解除锁定（允许点击下一句）
        feedbackAudio.onended = () => {
            isAudioPlaying = false;
            ui.body.classList.remove('locked-mode');
        };

        // 容错处理
        feedbackAudio.onerror = () => {
            isAudioPlaying = false;
            ui.body.classList.remove('locked-mode');
        };
    };
    
    mainAudio.onerror = () => {
        isAudioPlaying = false;
        ui.body.classList.remove('locked-mode');
        element.classList.remove('playing-now');
    };

    mainAudio.play().catch(mainAudio.onerror);
}

function updateScore(shouldPlaySound = true) {
    const current = learnedSentences.size;
    const total = sentences.length;
    ui.score.textContent = `${current}/${total}`;
    ui.progress.style.width = `${(current / total) * 100}%`;
    if (shouldPlaySound) {
        scoreAudio.currentTime = 0;
        scoreAudio.play().catch(()=>{});
    }
    if (current >= total && total > 0) {
        setTimeout(showCongrats, 800);
    }
}

function showCongrats() {
    winAudio.play().catch(() => {});
    const now = new Date();
    document.getElementById('displayTime').textContent = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}:${now.getMinutes()}`;
    document.getElementById('userName').textContent = userProfile.name;
    document.getElementById('userImg').src = userProfile.avatar || 'images/default-avatar.jpg';
    document.getElementById('congrats-overlay').style.display = 'flex';
}

window.onload = init;