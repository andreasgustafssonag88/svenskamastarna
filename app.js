const svaWords=[{ord:"Demokrati",forklaring:"Folket är med och bestämmer.",exempel:"Sverige är en demokrati."},{ord:"Argument",forklaring:"Ett skäl för en åsikt.",exempel:"Hon gav ett starkt argument."}];
const questions=[{q:"Synonym till glad?",a:["Lycklig","Arg","Trött"],c:0},{q:"Vad betyder argument?",a:["Skäl för en åsikt","Ett djur","Ett land"],c:0},{q:"Motsats till stor?",a:["Liten","Bred","Lång"],c:0}];
let i=0;let current='';let xp=+localStorage.getItem('xp')||0;update();loadProfile();
function saveProfile(){const p={name:name.value,avatar:avatar.value};localStorage.setItem('profile',JSON.stringify(p));loadProfile();}
function loadProfile(){const p=JSON.parse(localStorage.getItem('profile')||'{"name":"Elev","avatar":"🦊"}');profile.innerHTML=`${p.avatar} ${p.name}`;}
function startGame(){i=0;render();}
function render(){if(i>=questions.length){question.innerText='Ordmästaren besegrad!';answers.innerHTML='';xp+=100;localStorage.setItem('xp',xp);update();return;}const q=questions[i];current=q.q;question.innerText=q.q;answers.innerHTML='';q.a.forEach((t,n)=>{const b=document.createElement('button');b.textContent=t;b.onclick=()=>{if(n===q.c){xp+=10;localStorage.setItem('xp',xp);update();}i++;render();};answers.appendChild(b);});}
function update(){xpEl.textContent=xp;lvl.textContent=Math.floor(xp/100)+1;}
function speakCurrent(){const txt=current||question.innerText; const u=new SpeechSynthesisUtterance(txt); u.lang='sv-SE'; speechSynthesis.speak(u);}
function showWord(id){const w=svaWords[id];wordhelp.innerHTML=`<h3>${w.ord}</h3><p>${w.forklaring}</p><p>${w.exempel}</p><button onclick="speechSynthesis.speak(new SpeechSynthesisUtterance('${w.forklaring}'))">🔊 Lyssna</button>`;}
