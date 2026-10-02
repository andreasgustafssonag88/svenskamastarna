const avatars=['🦊','🦉','🐼','🐬','🐯','🐲','🦁','🐸','🐧','🦄','🐺','🐙'];
const tracks={
 discoverer:{name:'Upptäckaren',desc:'Grundläggande språk och cirka år 2-nivå',questions:[
  {type:'Bildord',q:'Vilket ord passar till bilden?',a:['hund','hus','boll'],c:0,word:'hund',help:'En hund är ett djur som kan vara ett sällskapsdjur.',img:'🐕',label:'Ett djur'},
  {type:'Motsatser',q:'Vilket ord betyder tvärtom mot stor?',a:['liten','snäll','rund'],c:0,word:'motsats',help:'En motsats betyder tvärtom. Stor och liten är motsatser.',img:'🐘 / 🐭',label:'Stor och liten'},
  {type:'Bildord',q:'Vad gör personen?',a:['läser','sover','simmar'],c:0,word:'läser',help:'Att läsa är att förstå skrivna ord och meningar.',img:'🧒📖',label:'Läser en bok'},
  {type:'Synonymer',q:'Vilket ord betyder nästan samma sak som glad?',a:['lycklig','arg','trött'],c:0,word:'synonym',help:'Glad och lycklig betyder nästan samma sak.',img:'😊',label:'Glad'},
  {type:'Meningen',q:'Vilket ord passar? Katten ___ på stolen.',a:['sitter','flyger','läser'],c:0,word:'sitter',help:'Sitter betyder att vila med kroppen på en stol eller annan plats.',img:'🐈🪑',label:'Katt på stol'},
  {type:'Skolord',q:'Vad betyder lyssna?',a:['höra noga','springa fort','rita en bild'],c:0,word:'lyssna',help:'Att lyssna är att försöka höra och förstå.',img:'👂',label:'Lyssna'},
  {type:'Bildord',q:'Vilken årstid visar bilden?',a:['vinter','sommar','vår'],c:0,word:'vinter',help:'På vintern kan det vara kallt och snöa.',img:'❄️⛄',label:'Snö och snögubbe'},
  {type:'Motsatser',q:'Vilket ord betyder tvärtom mot varm?',a:['kall','mjuk','ljus'],c:0,word:'kall',help:'Varm och kall är motsatser.',img:'🔥 / 🧊',label:'Varm och kall'},
  {type:'Begrepp',q:'Vad är en rubrik?',a:['Textens namn','Sista ordet','En bild'],c:0,word:'rubrik',help:'Rubriken berättar vad en text kan handla om.',img:'📰',label:'Rubrik över en text'},
  {type:'Meningen',q:'Vilket ord passar? Vi ___ fotboll på rasten.',a:['spelar','äter','skriver'],c:0,word:'spelar',help:'Spelar kan betyda att delta i en lek eller sport.',img:'⚽',label:'Fotboll'}]},
 adventurer:{name:'Äventyraren',desc:'Mellannivå och cirka år 4–5',questions:[
  {type:'Synonymjakt',q:'Vilket ord betyder ungefär samma sak som modig?',a:['tapper','rädd','långsam','tyst'],c:0,word:'tapper',help:'Tapper betyder modig och villig att våga.',img:'🛡️',label:'Vågar trots svårighet'},
  {type:'Motsatsmästaren',q:'Vilket ord är motsatsen till sällsynt?',a:['vanlig','dyrbar','gammal','viktig'],c:0,word:'sällsynt',help:'Sällsynt betyder att något inte förekommer ofta.',img:'⭐',label:'Något ovanligt'},
  {type:'Begreppslabbet',q:'Vad betyder att beskriva?',a:['Berätta hur något är','Säga vad man tycker','Skriva av en text','Ställa en fråga'],c:0,word:'beskriva',help:'Att beskriva är att berätta hur någon eller något är.',img:'🖼️✍️',label:'Berätta med detaljer'},
  {type:'Ord i sammanhang',q:'Mira var ___ när hon kontrollerade varje svar två gånger.',a:['noggrann','förvirrad','hastig','ointresserad'],c:0,word:'noggrann',help:'Noggrann betyder att göra något omsorgsfullt och kontrollera detaljer.',img:'🔍✅',label:'Kontrollerar noga'},
  {type:'Skolord',q:'Vad ska du göra när du ska förklara?',a:['Berätta hur eller varför','Bara skriva ett ord','Rita utan text','Kopiera frågan'],c:0,word:'förklara',help:'Att förklara är att göra något tydligare genom att berätta hur eller varför.',img:'💬💡',label:'Göra något tydligt'},
  {type:'Synonymjakt',q:'Vilket ord är en synonym till avsluta?',a:['slutföra','påbörja','undersöka','förändra'],c:0,word:'slutföra',help:'Slutföra betyder att göra klart.',img:'🏁',label:'Göra klart'},
  {type:'Begreppslabbet',q:'Vad är en sammanfattning?',a:['Det viktigaste i kort form','En lång ny berättelse','En lista med alla ord','En personlig åsikt'],c:0,word:'sammanfattning',help:'En sammanfattning återger textens viktigaste innehåll med färre ord.',img:'📄➡️📝',label:'Kortare version'},
  {type:'Ord i sammanhang',q:'Vilket ord passar? Klassen skulle ___ två olika djur.',a:['jämföra','avsluta','gömma','förneka'],c:0,word:'jämföra',help:'Att jämföra är att undersöka likheter och skillnader.',img:'🐺↔️🦊',label:'Likheter och skillnader'},
  {type:'Skolord',q:'Vad betyder att resonera?',a:['Utveckla tankar med skäl och exempel','Svara ja eller nej','Läsa snabbt','Skriva av en mening'],c:0,word:'resonera',help:'Att resonera är att utveckla tankar och koppla dem till skäl och exempel.',img:'🧠💬',label:'Tänka och förklara'},
  {type:'Motsatsmästaren',q:'Vilket ord är motsatsen till tydlig?',a:['otydlig','enkel','viktig','noggrann'],c:0,word:'tydlig',help:'Tydlig betyder lätt att förstå. Otydlig betyder svår att förstå.',img:'🌫️',label:'Svårt att se eller förstå'}]},
 master:{name:'Mästaren',desc:'Utmanande språk på år 6-nivå',questions:[
  {type:'Akademiskt språk',q:'Vilket ord är den bästa synonymen till väsentlig?',a:['avgörande','tillfällig','obetydlig','vanlig'],c:0,word:'väsentlig',help:'Väsentlig betyder mycket viktig eller central.',img:'🎯',label:'Det mest centrala'},
  {type:'Begreppslabbet',q:'Vad innebär det att analysera en text?',a:['Undersöka delar, samband och betydelser','Återge texten ord för ord','Bara säga om texten är bra','Läsa texten så snabbt som möjligt'],c:0,word:'analysera',help:'Att analysera är att undersöka delar och samband för att förstå helheten bättre.',img:'🔎📄',label:'Undersöka textens delar'},
  {type:'Ord i sammanhang',q:'Vilket ord passar bäst? Författarens budskap var ___ och kunde förstås på flera sätt.',a:['mångtydigt','självklart','oviktigt','bokstavligt'],c:0,word:'mångtydig',help:'Mångtydig betyder att något kan tolkas på flera olika sätt.',img:'🛤️🛤️',label:'Flera möjliga tolkningar'},
  {type:'Skolord',q:'Vilket svar visar bäst vad det innebär att underbygga ett resonemang?',a:['Stödja tankar med skäl, exempel eller fakta','Skriva fler meningar utan samband','Upprepa samma åsikt flera gånger','Använda så svåra ord som möjligt'],c:0,word:'underbygga',help:'Att underbygga är att stärka ett påstående med relevanta skäl, exempel eller fakta.',img:'🏗️💬',label:'Bygga stöd för en tanke'},
  {type:'Synonymjakt',q:'Vilket ord ligger närmast betydelsen av konsekvens?',a:['följd','orsak','åsikt','möjlighet'],c:0,word:'konsekvens',help:'En konsekvens är det som händer som följd av något annat.',img:'🁢➡️🁢',label:'Något leder till något annat'},
  {type:'Begreppslabbet',q:'Vad är en slutsats i en resonerande text?',a:['En tanke som bygger på textens skäl och exempel','Textens första mening','Ett nytt ämne utan koppling','En fråga som aldrig besvaras'],c:0,word:'slutsats',help:'En slutsats är det resultat man kommer fram till efter att ha vägt samman information och resonemang.',img:'🧩✅',label:'Delarna leder till ett resultat'},
  {type:'Ord i sammanhang',q:'Vilket ord passar bäst? Källans uppgifter behöver ___ innan de används.',a:['granskas','antas','förkortas','ignoreras'],c:0,word:'granska',help:'Att granska är att undersöka något noggrant och kritiskt.',img:'🕵️📄',label:'Kontrollera en källa'},
  {type:'Akademiskt språk',q:'Vilket ord betyder att två uppgifter inte stämmer överens?',a:['motsäger','bekräftar','sammanfattar','förtydligar'],c:0,word:'motsäga',help:'Att motsäga betyder att säga eller visa något som inte stämmer med ett annat påstående.',img:'↔️❌',label:'Uppgifter krockar'},
  {type:'Skolord',q:'Vilken formulering visar ett nyanserat resonemang?',a:['Det finns både fördelar och nackdelar beroende på situationen.','Det är alltid bäst, punkt slut.','Alla tycker exakt likadant.','Det finns bara ett möjligt svar.'],c:0,word:'nyanserad',help:'Ett nyanserat resonemang visar flera perspektiv, undantag eller grader.',img:'⚖️',label:'Flera perspektiv'},
  {type:'Begreppslabbet',q:'Vad betyder implicit information?',a:['Information som antyds men inte sägs direkt','Information som står i rubriken','Information som upprepas flera gånger','Information som saknar betydelse'],c:0,word:'implicit',help:'Implicit information är underförstådd och behöver tolkas med hjälp av ledtrådar.',img:'🧊',label:'Mer finns under ytan'}]}}
const wordInfo={};Object.values(tracks).forEach(t=>t.questions.forEach(q=>wordInfo[q.word]=[q.help,q.label]));
const defaults={name:'Elev',avatar:'🦊',xp:0,best:0,words:[],autoSpeak:false,easySupport:false,imageSupport:true,track:'discoverer',played:0};
let state={...defaults,...JSON.parse(localStorage.getItem('svenskamastarna41')||localStorage.getItem('svenskamastarna4')||'{}')};let selectedAvatar=state.avatar,selectedTrack=state.track||'discoverer',questions=[],index=0,score=0,earned=0,answered=false;
const $=id=>document.getElementById(id);const save=()=>{localStorage.setItem('svenskamastarna41',JSON.stringify(state));renderHud()};const level=()=>Math.floor(state.xp/150)+1;
function speak(text){if(!('speechSynthesis'in window))return;speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(text);u.lang='sv-SE';u.rate=.9;speechSynthesis.speak(u)}
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===id));document.querySelectorAll('.nav-tabs button').forEach(b=>b.classList.toggle('active',b.dataset.view===id));scrollTo({top:0,behavior:'smooth'});if(id==='badges')renderBadges();if(id==='words')renderWords();if(id==='profile')renderProfile()}
document.addEventListener('click',e=>{const b=e.target.closest('[data-view]');if(b)showView(b.dataset.view)});
function renderHud(){const l=level(),progress=(state.xp%150)/150*100;$('miniAvatar').textContent=state.avatar;$('miniName').textContent=state.name;$('level').textContent=l;$('xp').textContent=state.xp;$('xpBar').style.width=progress+'%';$('heroAvatar').textContent=state.avatar;$('heroLevel').textContent=l;$('homeXp').textContent=state.xp;$('badgeCount').textContent=getBadges().filter(b=>b.ok).length;$('wordCount').textContent=state.words.length;$('worldStars').textContent=state.best>=9?'★ ★ ★':state.best>=7?'★ ★ ☆':state.best>=5?'★ ☆ ☆':'☆ ☆ ☆';$('activeTrackPill').textContent=tracks[state.track].name}
function renderProfile(){$('profileAvatar').textContent=selectedAvatar;$('profileName').textContent=state.name;$('profileLevel').textContent=level();$('profileXpBar').style.width=((state.xp%150)/150*100)+'%';$('nameInput').value=state.name;$('autoSpeak').checked=state.autoSpeak;$('easySupport').checked=state.easySupport;$('imageSupport').checked=state.imageSupport;$('avatarPicker').innerHTML='';avatars.forEach(a=>{const b=document.createElement('button');b.className='avatar-option'+(a===selectedAvatar?' selected':'');b.textContent=a;b.onclick=()=>{selectedAvatar=a;renderProfile()};$('avatarPicker').appendChild(b)});document.querySelectorAll('#trackPicker button').forEach(b=>b.classList.toggle('selected',b.dataset.track===selectedTrack))}
document.querySelectorAll('#trackPicker button').forEach(b=>b.onclick=()=>{selectedTrack=b.dataset.track;renderProfile()});
$('saveProfile').onclick=()=>{state.name=$('nameInput').value.trim()||'Elev';state.avatar=selectedAvatar;state.track=selectedTrack;state.imageSupport=$('imageSupport').checked;state.autoSpeak=$('autoSpeak').checked;state.easySupport=$('easySupport').checked;save();renderProfile();$('saveMessage').textContent='Profil och nivåspår är sparade!';setTimeout(()=>$('saveMessage').textContent='',1800)};
$('openAcademy').onclick=startGame;$('playAgain').onclick=startGame;function startGame(){questions=tracks[state.track].questions;index=0;score=0;earned=0;answered=false;showView('academy');renderQuestion()}
function renderQuestion(){answered=false;const q=questions[index];$('questionNumber').textContent=`${index+1}/${questions.length}`;$('questionProgress').style.width=((index+1)/questions.length*100)+'%';$('taskType').textContent=`${tracks[state.track].name} • ${q.type}`;$('questionText').textContent=q.q;$('questionImage').innerHTML=`<span class="picture">${q.img}</span><span class="picture-label">${q.label}</span>`;$('questionImage').classList.toggle('hidden',!state.imageSupport);$('supportBox').innerHTML=`<strong>${q.word}</strong><br>${q.help}`;$('supportBox').classList.toggle('hidden',!state.easySupport);$('feedback').className='feedback hidden';$('nextQuestion').classList.add('hidden');$('answers').innerHTML='';q.a.forEach((text,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=text;b.onclick=()=>answer(i,b);$('answers').appendChild(b)});if(state.autoSpeak)setTimeout(()=>speak(q.q),250)}
function answer(choice,button){if(answered)return;answered=true;const q=questions[index];document.querySelectorAll('.answer').forEach((b,i)=>{b.disabled=true;if(i===q.c)b.classList.add('correct')});if(choice===q.c){score++;earned+=15;button.classList.add('correct');$('feedback').textContent='Rätt! Du fick 15 XP.';$('feedback').className='feedback good'}else{button.classList.add('wrong');$('feedback').textContent=`Inte riktigt. Rätt svar är: ${q.a[q.c]}.`;$('feedback').className='feedback bad'}if(!state.words.includes(q.word))state.words.push(q.word);$('nextQuestion').classList.remove('hidden')}
$('nextQuestion').onclick=()=>{index++;index<questions.length?renderQuestion():finishGame()};$('speakQuestion').onclick=()=>{const q=questions[index];speak(q.q+' '+q.a.join('. '))};$('toggleSupport').onclick=()=>$('supportBox').classList.toggle('hidden');
function finishGame(){const bonus=score>=9?90:score>=7?60:score>=5?35:20;earned+=bonus;state.xp+=earned;state.best=Math.max(state.best,score);state.played++;save();$('resultMedal').textContent=score>=9?'🥇':score>=7?'🥈':'🥉';$('scoreValue').textContent=`${score}/${questions.length}`;$('earnedXp').textContent=earned;$('resultText').textContent=`Du klarade ${tracks[state.track].name} med ${score} rätt. `+(score>=9?'Fantastiskt resultat!':score>=7?'Bra jobbat!':'Träna gärna en gång till.');showView('result')}
function getBadges(){return[{icon:'🌟',name:'Första steget',text:'Spela ett uppdrag.',ok:state.played>=1},{icon:'⚡',name:'XP-jägaren',text:'Samla 100 XP.',ok:state.xp>=100},{icon:'📚',name:'Ordsamlaren',text:'Samla 5 begrepp.',ok:state.words.length>=5},{icon:'🥇',name:'Guldmästaren',text:'Få minst 9 rätt.',ok:state.best>=9},{icon:'🎯',name:'Träffsäker',text:'Få minst 7 rätt.',ok:state.best>=7},{icon:'👑',name:'Språkhjälten',text:'Nå nivå 3.',ok:level()>=3}]}
function renderBadges(){$('badgeGrid').innerHTML='';getBadges().forEach(b=>$('badgeGrid').insertAdjacentHTML('beforeend',`<article class="badge-card ${b.ok?'':'locked-badge'}"><div class="badge-icon">${b.ok?b.icon:'🔒'}</div><div><h3>${b.name}</h3><p>${b.text}</p></div></article>`))}
function renderWords(){$('wordGrid').innerHTML='';if(!state.words.length){$('wordGrid').innerHTML='<article class="word-card"><h3>Inga ord ännu</h3><p>Spela Ordakademin så samlas nya ord här automatiskt.</p></article>';return}state.words.forEach(w=>{const info=wordInfo[w]||['Ett nytt ord från spelet.','Spela vidare för fler exempel.'];$('wordGrid').insertAdjacentHTML('beforeend',`<article class="word-card"><h3>${w}</h3><p>${info[0]}</p><p><em>${info[1]}</em></p><button onclick="speak('${w}. ${info[0]}')">🔊 Lyssna</button></article>`)})}
renderHud();renderProfile();renderBadges();renderWords();


// SvenskaMästarna 5.0: Stavningsriket, SkrivSmart-staden och personlig stavningsbok
const spellingAreas = {
  sj:{name:'Sj-ljudet',icon:'🌊',desc:'sj, skj, stj, sk, ch och sch',questions:[
    {q:'Vilket ord är rätt stavat?',a:['stjärna','sjärna','skärna'],c:0,word:'stjärna',syllables:'stjär-na',help:'En lysande himlakropp.',img:'⭐'},
    {q:'Vilket ord är rätt stavat?',a:['skjorta','sjorta','stjorta'],c:0,word:'skjorta',syllables:'skjor-ta',help:'Ett klädesplagg för överkroppen.',img:'👕'},
    {q:'Vilket ord är rätt stavat?',a:['sjuksköterska','sjuk sköterska','skuksköterska'],c:0,word:'sjuksköterska',syllables:'sjuk-skö-ters-ka',help:'En person som arbetar med vård.',img:'🏥'},
    {q:'Vilket ord är rätt stavat?',a:['journalist','jornalist','schournalist'],c:0,word:'journalist',syllables:'jour-na-list',help:'En person som arbetar med nyheter.',img:'📰'},
    {q:'Vilket ord är rätt stavat?',a:['choklad','sjoklad','shoklad'],c:0,word:'choklad',syllables:'cho-klad',help:'Något som görs av kakao.',img:'🍫'},
    {q:'Vilket ord är rätt stavat?',a:['schema','sjema','skema'],c:0,word:'schema',syllables:'sche-ma',help:'En plan över tider och aktiviteter.',img:'📅'}]},
  tj:{name:'Tj-ljudet',icon:'🔔',desc:'tj, k och kj',questions:[
    {q:'Vilket ord är rätt stavat?',a:['tjugo','kjugo','chugo'],c:0,word:'tjugo',syllables:'tju-go',help:'Talet 20.',img:'2️⃣0️⃣'},
    {q:'Vilket ord är rätt stavat?',a:['kyrka','tjyrka','kyrcka'],c:0,word:'kyrka',syllables:'kyr-ka',help:'En byggnad för gudstjänster.',img:'⛪'},
    {q:'Vilket ord är rätt stavat?',a:['källa','tjälla','kjälla'],c:0,word:'källa',syllables:'käl-la',help:'Där information eller vatten kommer ifrån.',img:'💧'},
    {q:'Vilket ord är rätt stavat?',a:['kök','tjök','kjök'],c:0,word:'kök',syllables:'kök',help:'Ett rum där man lagar mat.',img:'🍳'},
    {q:'Vilket ord är rätt stavat?',a:['tjänst','känst','chänst'],c:0,word:'tjänst',syllables:'tjänst',help:'Ett arbete eller något som erbjuds.',img:'🧑‍💼'},
    {q:'Vilket ord är rätt stavat?',a:['kedja','tjedja','kjedja'],c:0,word:'kedja',syllables:'ked-ja',help:'Länkar som sitter ihop.',img:'⛓️'}]},
  j:{name:'J-ljudet',icon:'🎵',desc:'j, gj, hj, dj och lj',questions:[
    {q:'Vilket ord är rätt stavat?',a:['hjärna','järna','gjärna'],c:0,word:'hjärna',syllables:'hjär-na',help:'Organet vi tänker med.',img:'🧠'},
    {q:'Vilket ord är rätt stavat?',a:['hjärta','järta','gjärta'],c:0,word:'hjärta',syllables:'hjär-ta',help:'Organet som pumpar blod.',img:'❤️'},
    {q:'Vilket ord är rätt stavat?',a:['djur','jur','gjur'],c:0,word:'djur',syllables:'djur',help:'En levande varelse som inte är en växt.',img:'🐾'},
    {q:'Vilket ord är rätt stavat?',a:['ljud','jud','djud'],c:0,word:'ljud',syllables:'ljud',help:'Något som vi kan höra.',img:'🔊'},
    {q:'Vilket ord är rätt stavat?',a:['gjorde','jorde','djorde'],c:0,word:'gjorde',syllables:'gjor-de',help:'Dåtid av göra.',img:'🛠️'},
    {q:'Vilket ord är rätt stavat?',a:['hjul','jul','gjul'],c:0,word:'hjul',syllables:'hjul',help:'En rund del som kan rulla.',img:'🛞'}]},
  double:{name:'Dubbelteckning',icon:'✌️',desc:'Kort vokal följs ofta av två konsonanter',questions:[
    {q:'Vilket ord är rätt stavat?',a:['katt','kat','kaat'],c:0,word:'katt',syllables:'katt',help:'Ett vanligt husdjur.',img:'🐈'},
    {q:'Vilket ord är rätt stavat?',a:['glass','glas','glaas'],c:0,word:'glass',syllables:'glass',help:'En kall efterrätt.',img:'🍦'},
    {q:'Vilket ord är rätt stavat?',a:['hoppa','hopa','hopppa'],c:0,word:'hoppa',syllables:'hop-pa',help:'Att lämna marken med båda fötterna.',img:'🦘'},
    {q:'Vilket ord är rätt stavat?',a:['sommar','somar','sommmar'],c:0,word:'sommar',syllables:'som-mar',help:'Årstiden efter våren.',img:'☀️'},
    {q:'Vilket ord är rätt stavat?',a:['snabb','snab','snaabb'],c:0,word:'snabb',syllables:'snabb',help:'Någon eller något som rör sig fort.',img:'⚡'},
    {q:'Vilket ord är rätt stavat?',a:['vissla','visla','visssla'],c:0,word:'vissla',syllables:'viss-la',help:'Att skapa en ton med munnen.',img:'🎶'}]},
  vowel:{name:'Ä- och å-ljud',icon:'ÅÄ',desc:'Välj rätt vokal i vanliga ord',questions:[
    {q:'Vilket ord är rätt stavat?',a:['hälsa','helsa','hällsa'],c:0,word:'hälsa',syllables:'häl-sa',help:'Kan betyda hur kroppen mår eller att säga hej.',img:'👋'},
    {q:'Vilket ord är rätt stavat?',a:['berätta','beretta','bäretta'],c:0,word:'berätta',syllables:'be-rät-ta',help:'Att tala om vad som har hänt.',img:'💬'},
    {q:'Vilket ord är rätt stavat?',a:['många','monga','månnga'],c:0,word:'många',syllables:'må-nga',help:'Ett stort antal.',img:'👥'},
    {q:'Vilket ord är rätt stavat?',a:['också','ocksåå','okså'],c:0,word:'också',syllables:'ock-så',help:'Betyder även.',img:'➕'},
    {q:'Vilket ord är rätt stavat?',a:['väldigt','veldigt','vällldigt'],c:0,word:'väldigt',syllables:'väl-digt',help:'I hög grad eller mycket.',img:'📈'},
    {q:'Vilket ord är rätt stavat?',a:['förstå','försto','förrstå'],c:0,word:'förstå',syllables:'för-stå',help:'Att begripa något.',img:'💡'}]},
  compounds:{name:'Särskrivning',icon:'🧩',desc:'Sammansatta ord och särskrivning',questions:[
    {q:'Vilket alternativ är rätt?',a:['sjuksköterska','sjuk sköterska','sjuks köterska'],c:0,word:'sjuksköterska',syllables:'sjuk-skö-ters-ka',help:'Sammansatta ord skrivs oftast ihop.',img:'🏥'},
    {q:'Vilket alternativ är rätt?',a:['jättebra','jätte bra','jät tebra'],c:0,word:'jättebra',syllables:'jät-te-bra',help:'Förstärkningsordet jätte skrivs ihop med ordet efter.',img:'🌟'},
    {q:'Vilket alternativ är rätt?',a:['fotbollsplan','fotbolls plan','fot bollsplan'],c:0,word:'fotbollsplan',syllables:'fot-bolls-plan',help:'En plan för fotboll är en fotbollsplan.',img:'⚽'},
    {q:'Vilket alternativ är rätt?',a:['glasskiosk','glass kiosk','glas skiosk'],c:0,word:'glasskiosk',syllables:'glass-ki-osk',help:'En kiosk som säljer glass är en glasskiosk.',img:'🍦🏪'},
    {q:'Vilket alternativ är rätt?',a:['klassrumsdörr','klassrums dörr','klass rumsdörr'],c:0,word:'klassrumsdörr',syllables:'klass-rums-dörr',help:'En dörr till ett klassrum skrivs som ett ord.',img:'🚪'},
    {q:'Vilket alternativ är rätt?',a:['sommarlov','sommar lov','som marl ov'],c:0,word:'sommarlov',syllables:'som-mar-lov',help:'Ett lov på sommaren är ett sommarlov.',img:'🏖️'}]},
  punctuation:{name:'SkrivSmart',icon:'📝',desc:'Stor bokstav och skiljetecken',questions:[
    {q:'Vilken mening är rätt?',a:['Jag bor i Örebro.','jag bor i örebro.','Jag bor i örebro'],c:0,word:'Örebro',syllables:'Ö-re-bro',help:'Meningar och namn börjar med stor bokstav.',img:'🏙️'},
    {q:'Vilken mening är rätt?',a:['Var bor du?','Var bor du.','var bor du?'],c:0,word:'frågetecken',syllables:'frå-ge-teck-en',help:'En direkt fråga avslutas med frågetecken.',img:'❓'},
    {q:'Vilken mening är rätt?',a:['Stanna!','stanna!','Stanna?'],c:0,word:'utropstecken',syllables:'ut-rops-teck-en',help:'Utrop eller starka uppmaningar kan avslutas med utropstecken.',img:'❗'},
    {q:'Vilken mening är rätt?',a:['På måndag börjar skolan.','på måndag börjar skolan.','På måndag börjar skolan'],c:0,word:'punkt',syllables:'punkt',help:'En påståendemening avslutas ofta med punkt.',img:'🔴'},
    {q:'Vilken mening är rätt?',a:['Sara och Ali läser.','sara och ali läser.','Sara och ali läser'],c:0,word:'namn',syllables:'namn',help:'Personnamn börjar med stor bokstav.',img:'👧👦'},
    {q:'Vilken mening är rätt?',a:['Vilken fin dag!','vilken fin dag!','Vilken fin dag?'],c:0,word:'mening',syllables:'me-ning',help:'Meningar börjar med stor bokstav.',img:'🌞'}]}
};

state.spelling = state.spelling || {};
state.spellingBest = state.spellingBest || {};
state.spellingPlayed = state.spellingPlayed || 0;
let spellingAreaKey='sj', spellingQuestions=[], spellingIndex=0, spellingScore=0, spellingEarned=0, spellingAnswered=false, spellingMode='area';

function spellingEntry(word, q={}){
  if(!state.spelling[word]) state.spelling[word]={wrong:0,correct:0,streak:0,mastered:false,syllables:q.syllables||word,help:q.help||'Ett ord från stavningsträningen.'};
  return state.spelling[word];
}
function recordSpelling(q, correct){
  const e=spellingEntry(q.word,q);
  if(correct){e.correct++;e.streak++;if(e.streak>=3)e.mastered=true;}else{e.wrong++;e.streak=0;e.mastered=false;}
  save();
}
function allSpellingQuestions(){return Object.values(spellingAreas).flatMap(a=>a.questions)}
function shuffleAnswers(q){
  const items=q.a.map((text,i)=>({text,correct:i===q.c}));
  for(let i=items.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[items[i],items[j]]=[items[j],items[i]]}
  return {...q,a:items.map(x=>x.text),c:items.findIndex(x=>x.correct)};
}
function renderSpellingAreas(){
  const grid=$('spellingAreaGrid'); if(!grid)return; grid.innerHTML='';
  Object.entries(spellingAreas).forEach(([key,a])=>{const b=document.createElement('button');b.className='area-card';b.innerHTML=`<span class="area-icon">${a.icon}</span><h3>${a.name}</h3><p>${a.desc}</p>`;b.onclick=()=>startSpellingArea(key);grid.appendChild(b)});
}
function startSpellingArea(key){spellingMode='area';spellingAreaKey=key;spellingQuestions=spellingAreas[key].questions.map(shuffleAnswers);startSpellingSession()}
function startSpellingSession(){spellingIndex=0;spellingScore=0;spellingEarned=0;spellingAnswered=false;showView('spellinggame');renderSpellingQuestion()}
function renderSpellingQuestion(){
  spellingAnswered=false;const q=spellingQuestions[spellingIndex];
  $('spellingNumber').textContent=`${spellingIndex+1}/${spellingQuestions.length}`;$('spellingProgress').style.width=((spellingIndex+1)/spellingQuestions.length*100)+'%';
  $('spellingType').textContent=spellingMode==='personal'?'Min stavningsbok':spellingAreas[spellingAreaKey].name;$('spellingQuestion').textContent=q.q;
  $('spellingPromptImage').innerHTML=`<span class="picture">${q.img||'✍️'}</span><span class="picture-label">${q.help}</span>`;
  $('syllableBox').innerHTML=`<strong>Stavelser</strong><br><span class="syllables">${q.syllables}</span>`;$('syllableBox').classList.add('hidden');
  $('spellingFeedback').className='feedback hidden';$('nextSpelling').classList.add('hidden');$('spellingAnswers').innerHTML='';
  q.a.forEach((text,i)=>{const b=document.createElement('button');b.className='answer';b.textContent=text;b.onclick=()=>answerSpelling(i,b);$('spellingAnswers').appendChild(b)});
  if(state.autoSpeak)setTimeout(()=>speak(q.q+' '+q.a.join('. ')),250);
}
function answerSpelling(choice,button){
  if(spellingAnswered)return;spellingAnswered=true;const q=spellingQuestions[spellingIndex],ok=choice===q.c;
  document.querySelectorAll('#spellingAnswers .answer').forEach((b,i)=>{b.disabled=true;if(i===q.c)b.classList.add('correct')});
  if(ok){spellingScore++;spellingEarned+=15;button.classList.add('correct');$('spellingFeedback').textContent='Rätt! Du fick 15 XP.';$('spellingFeedback').className='feedback good'}
  else{button.classList.add('wrong');$('spellingFeedback').textContent=`Inte riktigt. Rätt svar är: ${q.a[q.c]}. Ordet sparades i din stavningsbok.`;$('spellingFeedback').className='feedback bad'}
  recordSpelling(q,ok);$('nextSpelling').classList.remove('hidden');renderHud();
}
function finishSpelling(){
  const total=spellingQuestions.length,bonus=spellingScore===total?50:spellingScore>=Math.ceil(total*.7)?30:15;spellingEarned+=bonus;state.xp+=spellingEarned;state.spellingPlayed++;
  if(spellingMode==='area')state.spellingBest[spellingAreaKey]=Math.max(state.spellingBest[spellingAreaKey]||0,spellingScore);save();
  $('spellingMedal').textContent=spellingScore===total?'🥇':spellingScore>=Math.ceil(total*.7)?'🥈':'🥉';$('spellingScore').textContent=`${spellingScore}/${total}`;$('spellingXp').textContent=spellingEarned;
  $('spellingResultTitle').textContent=spellingMode==='personal'?'Dina ord är tränade!':`${spellingAreas[spellingAreaKey].name} avklarat!`;
  $('spellingResultText').textContent=`Du fick ${spellingScore} rätt. Felord sparas och rätt svar bygger en serie mot att bemästra ordet.`;showView('spellingresult');
}
function trainPersonalWords(){
  const pool=allSpellingQuestions(),needs=Object.entries(state.spelling).filter(([,e])=>!e.mastered).sort((a,b)=>b[1].wrong-a[1].wrong).map(([w])=>pool.find(q=>q.word===w)).filter(Boolean);
  if(!needs.length){alert('Du har inga ord som behöver tränas ännu. Spela Stavningsriket först!');return}
  spellingMode='personal';spellingQuestions=needs.slice(0,10).map(shuffleAnswers);startSpellingSession();
}
function renderSpellingBook(){
  const entries=Object.entries(state.spelling),needs=entries.filter(([,e])=>!e.mastered),mastered=entries.filter(([,e])=>e.mastered);
  $('needsCount').textContent=needs.length;$('masteredCount').textContent=mastered.length;$('attemptCount').textContent=state.spellingPlayed;
  $('bookEmpty').classList.toggle('hidden',entries.length>0);const grid=$('spellingBookGrid');grid.innerHTML='';
  entries.sort((a,b)=>Number(a[1].mastered)-Number(b[1].mastered)||b[1].wrong-a[1].wrong).forEach(([word,e])=>{
    const level=e.mastered?'green':e.wrong>=3?'red':'yellow',label=e.mastered?'Bemästrat':e.wrong>=3?'Tränas ofta':'Behöver tränas';
    grid.insertAdjacentHTML('beforeend',`<article class="word-card"><span class="word-status status-${level}">${label}</span><h3>${word}</h3><p class="syllables">${e.syllables}</p><p>${e.help}</p><div class="word-stats"><span>✓ ${e.correct} rätt</span><span>✗ ${e.wrong} fel</span><span>Serie: ${e.streak}/3</span></div><button onclick="speak('${word}. ${e.help}')">🔊 Lyssna</button></article>`)
  });
}
const originalShowView=showView;showView=function(id){originalShowView(id);if(id==='spellinghub')renderSpellingAreas();if(id==='spellingbook')renderSpellingBook()};
const originalRenderHud=renderHud;renderHud=function(){originalRenderHud();const entries=Object.keys(state.spelling||{});if($('spellingCount'))$('spellingCount').textContent=entries.length;const scores=Object.values(state.spellingBest||{});const best=scores.length?Math.max(...scores):0;if($('spellingStars'))$('spellingStars').textContent=best>=6?'★ ★ ★':best>=5?'★ ★ ☆':best>=3?'★ ☆ ☆':'☆ ☆ ☆';if($('smartStars'))$('smartStars').textContent=(state.spellingBest.compounds||0)>=6?'★ ★ ★':(state.spellingBest.compounds||0)>=4?'★ ★ ☆':'☆ ☆ ☆';};
$('openSpelling').onclick=()=>showView('spellinghub');$('openSmart').onclick=()=>startSpellingArea('compounds');
$('nextSpelling').onclick=()=>{spellingIndex++;spellingIndex<spellingQuestions.length?renderSpellingQuestion():finishSpelling()};
$('speakSpelling').onclick=()=>{const q=spellingQuestions[spellingIndex];speak(q.q+' '+q.a.join('. '))};
$('syllableHelp').onclick=()=>$('syllableBox').classList.toggle('hidden');$('trainMyWords').onclick=trainPersonalWords;
$('replaySpelling').onclick=()=>spellingMode==='personal'?trainPersonalWords():startSpellingArea(spellingAreaKey);
renderSpellingAreas();renderSpellingBook();renderHud();
