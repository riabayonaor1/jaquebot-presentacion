import {chapters,questions,sources} from './chapters.js?v=20261016-claro-v4';
import {createWorld} from './scene.js';
import {guion} from './guion.js?v=20261016-claro-v4';
const $=s=>document.querySelector(s);
const escape=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num=n=>String(n).padStart(2,'0');
const reduced=matchMedia('(prefers-reduced-motion: reduce)');
let world=null,current=0,exploring=false,framePending=false,sectionTops=[];
const appShot=(manual=false)=>`<button class="app-peek ${manual?'manual':''}" data-image="assets/reference/${manual?'manual-app.png':'chess-app.jpg'}" data-title="${manual?'JaqueBot manual':'JaqueBot Ajedrez'}" data-caption="${manual?'Panel de control manual: articulaciones, destino XY, altura Z y electroimán.':'Vista de calibración de casillas de la aplicación instalada. Esta captura muestra su interfaz; la demostración física se realiza con el robot.'}"><span class="app-chrome"><i></i><i></i><i></i><span>RASPBERRY PI · ${manual?'CONTROL':'AJEDREZ'}</span></span><img src="assets/reference/${manual?'manual-app.png':'chess-app.jpg'}" alt="${manual?'Interfaz de control manual JaqueBot':'Panel de calibración de JaqueBot Ajedrez'}" loading="lazy"><span class="peek-caption">${manual?'Articulaciones · XY · Z · Imán':'Visión · Calibración · Juego'}<span>AMPLIAR ↗</span></span></button>`;
const deviceCard=(file,title,description)=>`<button class="device-card" data-image="assets/components/${file}" data-title="${escape(title)}" data-caption="${escape(description)} · ${file.includes('nucleo')?'Imagen oficial de referencia de la familia Nucleo-64; la foto del fabricante muestra otra variante. En el proyecto usamos NUCLEO-F446RE.':'Fotografía oficial del fabricante.'}"><img src="assets/components/${file}" alt="${escape(title)}" loading="lazy"><span><small>EL COMPONENTE</small><b>${escape(title)}</b><em>${escape(description)}</em><strong>VER DETALLE ↗</strong></span></button>`;
function support(c,i){
 if(i===3)return '<div class="prompt-method" aria-label="Reconstrucción gráfica del método de consulta a ChatGPT Codex"><small>CHATGPT CODEX · RECONSTRUCCIÓN GRÁFICA</small><p>Contexto y restricciones <span>→</span> Propuesta <span>→</span> Prueba real</p></div>'+deviceCard('raspberry-pi-5-official.png','Raspberry Pi 5','Ejecuta las dos apps, la visión y el motor de ajedrez.');
 if(i===2)return '<div class="mini-flow"><strong>Cámara</strong><span>→</span><strong>Decisión</strong><span>→</span><strong>Movimiento</strong></div>';
 if(c.kind==='magnet')return '<div class="mini-flow"><strong>Z ↓</strong><span>→</span><strong>Imán ON</strong><span>→</span><strong>Traslado</strong><span>→</span><strong>Imán OFF</strong></div>';
 if(c.kind==='vision')return deviceCard('raspberry-pi-ai-camera.png','Raspberry Pi AI Camera','Sensor Sony IMX500 · captura del tablero.')+'<div class="mini-flow"><strong>Cámara</strong><span>→</span><strong>ArUco</strong><span>→</span><strong>Casilla</strong></div>';
 if(c.kind==='wiring')return deviceCard('nucleo-f446re-official.jpg','NUCLEO-F446RE · STM32','Control de servos, lectura angular y señal del imán.')+'<div class="mini-flow"><strong>Raspberry Pi</strong><span>USB</span><strong>STM32</strong><span>Órdenes</span><strong>Servos + herramienta</strong></div><p class="budget-note">La cámara envía imágenes; los sensores aportan posición. El módulo del imán recibe la orden y controla su electricidad.</p>';
 if(c.kind==='app-manual')return appShot(true);
 if(c.kind==='app-chess')return appShot(false);
 if(c.kind==='demo')return '<ol class="sequence"><li>Observar y validar el tablero.</li><li>Calcular la respuesta con Stockfish.</li><li>Recoger, trasladar y liberar la pieza.</li></ol><p class="budget-note">Demostración en vivo con el robot. Este recorrido 3D explica el ensamblaje.</p>';
 if(c.kind==='making')return '<div class="mini-photo"><button data-image="assets/foto1.jpg" data-title="Fabricación 3D" data-caption="Registro real de impresión de componentes del proyecto."><img src="assets/foto1.jpg" alt="Impresión de componentes" loading="lazy"></button><button data-image="assets/v3_1.jpg" data-title="El equipo en el montaje" data-caption="Registro del trabajo del equipo en el aula."><img src="assets/v3_1.jpg" alt="Estudiantes trabajando en JaqueBot" loading="lazy"></button><button data-image="assets/foto5.jpg" data-title="Ensamblaje del prototipo" data-caption="Registro de construcción y ajuste mecánico de JaqueBot."><img src="assets/foto5.jpg" alt="Ensamblaje del brazo" loading="lazy"></button></div>';
 if(c.kind==='limits')return '<p class="limit-note">La toma y la liberación se supervisan. Si se adhieren varias piezas, se detiene el juego, se corrige el tablero y se vuelve a validar la posición.</p>';
 if(c.kind==='budget')return '<dl class="budget-list"><dt>Compras con importe conocido</dt><dd class="total">$739.474,77</dd><dt>Raspberry Pi prestada · reposición</dt><dd>≈ $650.000</dd><dt>Cámara prestada · reposición</dt><dd>≈ $350.000</dd></dl><p class="budget-note">COP. Las compras incluyen los dos pedidos y la fuente adicional de 12 V ($28.000). La STM32 ($108.000) ya está incluida. Los préstamos no son gasto pagado. Faltan dos potenciómetros por valorar.</p><a class="evidence-link" href="downloads/guion-jaquebot-2026.pdf?v=20261016-claro-v4#page=13" target="_blank" rel="noopener">Consultar el anexo de materiales <span>↗</span></a>';
 if(c.kind==='closing')return '<a class="evidence-link" href="#proceso" data-to-video>Ver el proceso · 3 minutos <span>↗</span></a><p class="tiny-credit">Estudiantes 11C · 2026<br>Técnico en Sistemas Teleinformáticos<br>Adaptación de la plataforma EduSCARA</p>';
 return '';
}
$('#recorrido').innerHTML=chapters.map((c,i)=>{
 const hero=i===0,close=c.kind==='closing';
 return `<section class="chapter ${hero?'hero ':''}${close?'closing':''}" id="${i+1}" data-chapter="${i}" aria-labelledby="title-${i}"><div class="chapter-copy">${hero||close?`<img class="${hero?'hero':'closing'}-mark" src="assets/jaquebot-logo.png" alt="JaqueBot, marca del proyecto">`:`<span class="scene-number">${num(i)} / JAQUEBOT</span>`}<span class="eyebrow">${escape(c.kicker)}</span><${hero?'h1':'h2'} id="title-${i}">${escape(hero?'Ajedrez que cobra\nmovimiento.':close?'Ajedrez que cobra\nmovimiento.':c.title)}</${hero?'h1':'h2'}><p class="lead">${escape(hero?c.detail:close?'Un brazo. Dos apps. Una idea que ya se mueve.':c.lead)}</p>${!hero&&c.detail?`<p class="detail">${escape(c.detail)}</p>`:''}<div class="support">${support(c,i)}</div>${c.tags?.length?`<div class="chapter-tags">${c.tags.map(t=>`<span>${escape(t)}</span>`).join('')}</div>`:''}${hero?'<a class="scroll-cue" href="#2"><span>↓</span>Desliza para descubrirlo</a><p class="hero-edition">Sustentación final · I. E. Carlos Julio Torrado Peñaranda</p>':''}</div></section>`;
}).join('')+`<section class="video-section" id="proceso" aria-labelledby="video-title"><div class="video-heading"><div><span class="eyebrow">EL EQUIPO, EL PROCESO Y LA CONSTRUCCIÓN</span><h2 id="video-title">Detrás de cada<br>movimiento.</h2></div><p>Tres minutos de trabajo en equipo: el reto, los fallos, la construcción y el resultado. Registros reales, gráficos animados, narración y música.</p></div><video id="process-video" class="process-video" controls playsinline preload="metadata" poster="assets/poster-cierre.jpg?v=20261015-v2" aria-label="Videoclip de JaqueBot, tres minutos con narración en español y música"><source src="assets/cierre-jaquebot-2026.mp4?v=20261015-v2" type="video/mp4"></video><div class="video-footer"><span>03:00 · NARRACIÓN Y MÚSICA · ELEVENLABS</span><button id="jury-button">Abrir preguntas del jurado · 5 min ↗</button></div><p class="video-note">El montaje incluye 26 registros del equipo: impresión 3D, soldadura, ensamblaje, diseño en Fusion y pruebas. Los diálogos de Codex son extractos de conversaciones reales dentro de una interfaz recreada. Voz masculina en español latino y música de ElevenLabs. El cierre muestra las pruebas disponibles del prototipo.</p><nav class="download-links" aria-label="Descargas de la sustentación"><a href="assets/cierre-jaquebot-2026.mp4?v=20261015-v2" download>Descargar video · MP4 ↓</a><a href="downloads/guion-jaquebot-2026.pdf?v=20261016-claro-v4" download>Guion completo · PDF ↓</a><a href="downloads/guion-jaquebot-2026.docx?v=20261016-claro-v4" download>Guion editable · Word ↓</a></nav><a class="text-link" href="https://riabayonaor1.github.io/jaquebot-manual/#explorar" target="_blank" rel="noopener">Manual interactivo, conexiones y archivos del robot ↗</a></section>`;
const sections=[...document.querySelectorAll('.chapter')];
$('#chapter-dots').innerHTML=chapters.map((c,i)=>`<button data-go="${i}" aria-label="${num(i+1)}. ${escape(c.title.replaceAll('\n',' '))}" title="${escape(c.title.replaceAll('\n',' '))}"></button>`).join('');
$('#chapter-list').innerHTML=chapters.map((c,i)=>`<a href="#${i+1}" data-go="${i}"><span>${num(i+1)}</span>${escape(c.title.replaceAll('\n',' '))}</a>`).join('');
$('#speaker-guide').innerHTML=guion.roles.map((r,i)=>`<details data-guide-role="${i}"><summary>${escape(r.role)}<small>${escape(i===5?'10:00 a 11:55':r.time)}</small></summary><p class="guide-actions"><strong>Qué mostrar.</strong> ${escape(r.actions)}</p>${r.parts.map(p=>`<div class="guide-part"><h3>${escape(p.time)} · ${escape(p.label)}</h3><p>${escape(p.say)}</p><button class="guide-jump" data-go="${p.chapter-1}">Mostrar diapositiva ${p.chapter} · ${escape(p.slide_title.replaceAll('\n',' '))} →</button></div>`).join('')}</details>`).join('')+`<details><summary>${escape(guion.video_handoff.role)} · paso al video<small>${escape(guion.video_handoff.time)}</small></summary><p>${escape(guion.video_handoff.say)}</p><a class="guide-jump" href="#proceso" data-to-video>Presentar el video →</a></details>`;
$('#questions-list').innerHTML=questions.map(q=>`<h4>${escape(q.question)}</h4><p>${escape(q.answer)}</p>`).join('');
$('#glossary-list').innerHTML=guion.glossary.map(g=>`<h4>${escape(g.term)}</h4><p>${escape(g.what)} ${escape(g.use)} ${escape(g.why)}</p>`).join('');
$('#sources-list').innerHTML=sources.map(s=>`<a href="${escape(s.url)}" target="_blank" rel="noopener">${escape(s.label)} ↗</a>`).join('');
function closeDialogs(){for(const d of document.querySelectorAll('dialog[open]'))d.close();}
function go(i,behavior='instant'){
 if(exploring)setExploring(false);
 closeDialogs();
 const n=Math.max(0,Math.min(chapters.length-1,Number(i)));
 window.scrollTo({top:sections[n].offsetTop,behavior});
 history.replaceState(null,'',`#${n+1}`);
}
document.addEventListener('click',e=>{
 const link=e.target.closest('[data-go]');if(link){e.preventDefault();go(link.dataset.go);}
 const anchor=e.target.closest('a[href]');if(anchor&&/^#\d+$/.test(anchor.getAttribute('href'))&&!link){e.preventDefault();go(Number(anchor.getAttribute('href').slice(1))-1);}
 const video=e.target.closest('[data-to-video]');if(video){e.preventDefault();closeDialogs();if(exploring)setExploring(false);$('#proceso').scrollIntoView({behavior:'instant'});history.replaceState(null,'','#proceso');}
 const image=e.target.closest('[data-image]');if(image){$('#media-title').textContent=image.dataset.title;$('#media-image').src=image.dataset.image;$('#media-image').alt=image.dataset.title;$('#media-caption').textContent=image.dataset.caption;$('#media-dialog').showModal();}
 if(e.target.closest('[data-close]'))e.target.closest('dialog').close();
});
for(const dialog of document.querySelectorAll('dialog'))dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
$('#notes-button').onclick=()=>{$('#notes-dialog').showModal();};
$('#index-button').onclick=()=>{$('#index-dialog').showModal();};
function goVideo(){if(exploring)setExploring(false);closeDialogs();$('#proceso').scrollIntoView({behavior:'instant'});history.replaceState(null,'','#proceso');}
$('#previous').onclick=()=>go(current-1);$('#next').onclick=()=>current<15?go(current+1):goVideo();
$('#fullscreen').onclick=async()=>{try{if(document.fullscreenElement)await document.exitFullscreen();else await document.documentElement.requestFullscreen();}catch{}};
function setExploring(value){if(!world?.getState().ready)return;exploring=value;document.body.classList.toggle('exploring',value);$('#explore-help').hidden=!value;$('#explore-button').setAttribute('aria-pressed',String(value));$('#part-info').hidden=true;world.setExploring(value);if(!value)requestUpdate();}
$('#explore-button').onclick=()=>setExploring(!exploring);$('#exit-explore').onclick=()=>setExploring(false);$('#reset-model').onclick=()=>{world?.reset();$('#part-info').hidden=true;};$('#close-part').onclick=()=>{$('#part-info').hidden=true;};
function measure(){sectionTops=sections.map(s=>s.offsetTop);requestUpdate();}
function update(){
 framePending=false;if(exploring)return;
 const y=window.scrollY;let i=0;for(let n=0;n<sectionTops.length;n++)if(y+innerHeight*.3>=sectionTops[n])i=n;
 const start=sectionTops[i],next=sectionTops[i+1]??($('#proceso').offsetTop);
 const fraction=Math.max(0,Math.min(1,(y-start)/Math.max(1,next-start)));
 world?.setJourney(Math.min(15,i+fraction));
 current=i;
 $('#chapter-name').textContent=chapters[i].kicker.replace(/^\d+\s*\/\s*/, '');
 $('#rail-current').textContent=num(i+1);$('#chapter-counter').textContent=`${num(i+1)} / 16`;
 $('#previous').disabled=i===0;
 for(const [n,b]of [...document.querySelectorAll('#chapter-dots button')].entries()){b.classList.toggle('active',n===i);b.setAttribute('aria-current',String(n===i));}
 $('#progress').style.width=`${Math.min(100,y/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)}%`;
 const inVideo=y+innerHeight*.5>$('#proceso').offsetTop;$('#explore-button').hidden=inVideo;$('.world-meta').style.opacity=inVideo?'0':'1';
 if(inVideo&&location.hash!=='#proceso')history.replaceState(null,'','#proceso');
 if(y<$('#proceso').offsetTop-innerHeight*.4){const hash=`#${i+1}`;if(location.hash!==hash)history.replaceState(null,'',hash);}
}
function requestUpdate(){if(!framePending){framePending=true;requestAnimationFrame(update);}}
addEventListener('scroll',requestUpdate,{passive:true});addEventListener('resize',measure);new ResizeObserver(measure).observe($('#recorrido'));
addEventListener('keydown',e=>{
 if(e.target.closest('input,textarea,select,button,video,audio,[contenteditable]')||document.querySelector('dialog[open]'))return;
 if(window.scrollY+innerHeight*.5>$('#proceso').offsetTop&&['ArrowRight','ArrowDown','ArrowLeft','ArrowUp','PageDown','PageUp',' '].includes(e.key))return;
 if(e.key==='Escape'&&exploring){setExploring(false);return;}
 if(exploring)return;
 if(['ArrowRight','ArrowDown','PageDown',' '].includes(e.key)){e.preventDefault();$('#next').click();}
 if(['ArrowLeft','ArrowUp','PageUp'].includes(e.key)){e.preventDefault();go(current-1);}
 if(e.key==='Home'){e.preventDefault();go(0);}
 if(e.key.toLowerCase()==='g')$('#notes-button').click();
 if(e.key.toLowerCase()==='i')$('#index-button').click();
 if(e.key.toLowerCase()==='f')$('#fullscreen').click();
});
let timerDuration=720,remaining=720,running=false,deadline=0,timerInterval=null;
function showTime(){if(running)remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));$('#timer').textContent=`${num(Math.floor(remaining/60))}:${num(remaining%60)}`;$('.timer').classList.toggle('running',running);if(remaining===0&&running){running=false;clearInterval(timerInterval);$('#timer-toggle').textContent='Terminado';}}
$('#timer-toggle').onclick=()=>{if(running){remaining=Math.max(0,Math.ceil((deadline-Date.now())/1000));running=false;clearInterval(timerInterval);}else{if(remaining===0)remaining=timerDuration;running=true;deadline=Date.now()+remaining*1000;timerInterval=setInterval(showTime,250);}$('#timer-toggle').textContent=running?'Pausar':'Continuar';showTime();};
function resetTimer(seconds=timerDuration){timerDuration=seconds;running=false;remaining=seconds;clearInterval(timerInterval);$('#timer-toggle').textContent='Iniciar ensayo';showTime();}
$('#timer-reset').onclick=()=>resetTimer();$('#timer-questions').onclick=()=>resetTimer(300);
$('#jury-button').onclick=()=>{resetTimer(300);$('#notes-dialog').showModal();$('.questions').open=true;};
const processVideo=$('#process-video');new IntersectionObserver(([e])=>{if(!e.isIntersecting&&!processVideo.paused)processVideo.pause();},{threshold:.15}).observe(processVideo);
function startAtHash(){if(location.hash==='#proceso')$('#proceso').scrollIntoView({behavior:'instant'});else if(/^#\d+$/.test(location.hash))go(Number(location.hash.slice(1))-1,'instant');}
addEventListener('hashchange',startAtHash);measure();startAtHash();
createWorld({host:$('#world'),onReady:({meshCount})=>{$('#world-status').textContent='ENSAMBLAJE Y COMPONENTES · VISTA 3D';$('#explore-button').disabled=false;requestUpdate();},onSelect:part=>{$('#part-info').hidden=false;$('#part-group').textContent=part.group;$('#part-name').textContent=part.name;$('#part-description').textContent=part.description;},onError:({message})=>{$('#fallback').hidden=false;$('#world-status').textContent='VISTA ALTERNATIVA DEL ENSAMBLAJE';$('#explore-button').disabled=true;$('#explore-button').title=message;}}).then(w=>{world=w;window.jaqueWorld=w;requestUpdate();}).catch(error=>{$('#fallback').hidden=false;$('#world-status').textContent='RECORRIDO DEL PROYECTO';$('#explore-button').disabled=true;console.error(error);});
$('#explore-button').disabled=true;
window.jaquePresentation={go,getState:()=>({chapter:current,exploring,chapters:chapters.length,totalSeconds:chapters.reduce((s,c)=>s+c.seconds,0),world:world?.getState()})};
