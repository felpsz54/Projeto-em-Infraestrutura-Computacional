const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const appNames = {files:"Arquivos",browser:"Navegador",calculator:"Calculadora",expenses:"Calculadora de gastos",notes:"Notas",about:"Sobre a NovaOS"};
let zIndex = 10, opened = {};

$("#enterOS").addEventListener("click", () => {
  $("#welcome").classList.add("hidden");
  $("#desktop").classList.remove("hidden");
  updateClock();
});
const computers = [
  {setor:"Atendimento", modelo:"Lenovo ThinkCentre neo 50q Gen 4", itens:["Processador Intel Core i5-13420H","16 GB DDR4-3200","SSD de 512 GB M.2 PCIe 4.0","Wi-Fi 6 e Ethernet","Windows 11 Pro"]},
  {setor:"Escritório", modelo:"Lenovo ThinkCentre neo 50q Gen 4", itens:["Processador Intel Core i5-13420H","16 GB DDR4-3200","SSD de 512 GB M.2 PCIe 4.0","Wi-Fi 6 e Ethernet","Windows 11 Pro"]},
  {setor:"Comercial", modelo:"Lenovo ThinkPad E14 Gen 6", itens:["Processador Intel Core Ultra 5 125U","16 GB DDR5-5600","SSD NVMe de 512 GB PCIe Gen 4","Wi-Fi 6 e Ethernet RJ-45","HDMI 2.1 e Thunderbolt 4","Tela de 14 polegadas","Windows 11 Pro"]},
  {setor:"Operacional", modelo:"Dell OptiPlex Micro i5-13500T", itens:["Processador Intel Core i5-13500T","16 GB DDR4-3200","SSD M.2 de 512 GB","Wi-Fi e conexão cabeada","Windows 11 Pro"]},
  {setor:"Técnico", modelo:"Dell OptiPlex Micro Plus i5-14500", itens:["Processador Intel Core i5-14500","32 GB DDR5-5600 (2 × 16 GB)","SSD M.2 de 512 GB","Wi-Fi e rede cabeada","Windows 11 Pro"]},
  {setor:"Direção", modelo:"Lenovo ThinkPad T14", itens:["Processador Intel Core i5-1335U","16 GB DDR5-5200","SSD NVMe de 512 GB com Opal 2.0","Wi-Fi 6E","Plataforma Intel vPro","Windows 11 Pro"]},
];
$("#specsTabs").innerHTML = computers.map((c,i)=>`<button class="entry-button" data-pc="${i}" aria-pressed="false">${c.setor}</button>`).join("");
$$("[data-pc]").forEach(b => b.onclick = () => {
  const c = computers[b.dataset.pc];
  $$("[data-pc]").forEach(x => x.setAttribute("aria-pressed", x === b));
  $("#specsDetail").innerHTML = `<h2>${c.setor} — ${c.modelo}</h2><ul>${c.itens.map(t=>`<li>${t}</li>`).join("")}</ul>`;
});
$("#specsButton").addEventListener("click", () => { $("#welcome").classList.add("hidden"); $("#specs").classList.remove("hidden"); });
$("#specsBack").addEventListener("click", () => { $("#specs").classList.add("hidden"); $("#welcome").classList.remove("hidden"); });
$("#powerButton").addEventListener("click", leaveOS);
$("#startPower").addEventListener("click", leaveOS);
function leaveOS(){ $("#desktop").classList.add("hidden"); $("#welcome").classList.remove("hidden"); $("#startMenu").classList.add("hidden"); }
$("#menuButton").addEventListener("click", () => $("#startMenu").classList.toggle("hidden"));
document.addEventListener("click", e => {
  const launcher = e.target.closest("[data-app]");
  if (launcher) { openApp(launcher.dataset.app); $("#startMenu").classList.add("hidden"); }
  if (!e.target.closest("#startMenu") && !e.target.closest("#menuButton")) $("#startMenu").classList.add("hidden");
});
function updateClock(){
  const now = new Date();
  $("#clock").textContent = now.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"});
  $("#topDate").textContent = now.toLocaleDateString("pt-BR",{weekday:"short",day:"2-digit",month:"short"});
}
setInterval(updateClock,1000);

function openApp(id){
  if(opened[id] && opened[id].isConnected){opened[id].classList.remove("hidden");opened[id].style.zIndex=++zIndex;return;}
  const win=document.createElement("section"); win.className="app-window";win.style.zIndex=++zIndex;
  win.innerHTML=`<div class="window-titlebar"><span class="window-title">${appNames[id]}</span><div class="window-controls"><button class="min" title="Minimizar"></button><button class="maximize" title="Maximizar">□</button><button class="close" title="Fechar"></button></div></div><div class="window-body">${appContent(id)}</div>`;
  $("#windowLayer").appendChild(win);opened[id]=win;
  win.querySelector(".close").onclick=()=>{win.remove();delete opened[id];renderTaskApps();};
  win.querySelector(".min").onclick=()=>{win.classList.add("hidden");renderTaskApps();};
  win.querySelector(".maximize").onclick=()=>win.classList.toggle("maximized");
  win.addEventListener("mousedown",()=>win.style.zIndex=++zIndex);
  makeDraggable(win);bindApp(id,win);renderTaskApps();
  $("#activeAppLabel").textContent=appNames[id];
}
function renderTaskApps(){
  $("#taskApps").innerHTML=Object.entries(opened).map(([id,win])=>`<button class="task-app ${!win.classList.contains("hidden")?"active":""}" data-task="${id}">${appNames[id]}</button>`).join("");
  $$("[data-task]").forEach(b=>b.onclick=()=>{const w=opened[b.dataset.task];w.classList.toggle("hidden");if(!w.classList.contains("hidden"))w.style.zIndex=++zIndex;renderTaskApps();});
}
function makeDraggable(win){
  const bar=win.querySelector(".window-titlebar");let sx=0,sy=0,ox=0,oy=0,drag=false;
  bar.addEventListener("pointerdown",e=>{if(e.target.closest("button")||win.classList.contains("maximized"))return;drag=true;sx=e.clientX;sy=e.clientY;const r=win.getBoundingClientRect();ox=r.left;oy=r.top;bar.setPointerCapture(e.pointerId);});
  bar.addEventListener("pointermove",e=>{if(!drag)return;win.style.transform="none";win.style.left=Math.max(0,Math.min(innerWidth-win.offsetWidth,ox+e.clientX-sx))+"px";win.style.top=Math.max(42,Math.min(innerHeight-100,oy+e.clientY-sy))+"px";});
  bar.addEventListener("pointerup",()=>drag=false);
}
function appContent(id){
 switch(id){
 case "browser":return `<h2 class="app-heading">Navegador</h2><p class="muted">Pesquise na web ou abra um endereço.</p><form class="browser-bar" id="browserForm"><input id="browserUrl" placeholder="Digite uma pesquisa ou URL..." value="https://www.google.com"><button class="action">Acessar</button></form><div class="browser-home" id="browserHome"><div><div style="font-size:35px">◉</div><h2>Olá, internet.</h2><p>O que você deseja encontrar hoje?</p><div class="browser-shortcuts"><button data-search="Google">Google</button><button data-search="YouTube">YouTube</button><button data-search="Wikipedia">Wikipedia</button></div></div></div><p class="muted" style="font-size:10px">Nota: alguns sites bloqueiam a exibição dentro de janelas incorporadas. Nesse caso, o endereço será aberto em uma nova aba.</p>`;
 case "calculator":return `<div class="calc"><h2 class="app-heading">Calculadora</h2><input class="calc-display" id="calcDisplay" value="0" readonly><div class="calc-grid">${["C","±","%","÷","7","8","9","×","4","5","6","−","1","2","3","+","0",".","⌫","="].map((v,i)=>`<button class="${[3,7,11,15].includes(i)?"operator":""} ${v==="="?"equals":""}" data-key="${v}">${v}</button>`).join("")}</div></div>`;
 case "expenses":return `<h2 class="app-heading">Calculadora de gastos</h2><p class="muted">Registre despesas e acompanhe o total. Os dados ficam salvos neste navegador.</p><form class="expense-form" id="expenseForm"><input id="expenseName" placeholder="Descrição do gasto" required><input id="expenseValue" type="number" min="0.01" step="0.01" placeholder="Valor (R$)" required><button class="action">Adicionar</button></form><div id="expenseList" class="expense-list"></div><div class="total-card"><span>TOTAL DE DESPESAS</span><strong id="expenseTotal">R$ 0,00</strong></div>`;
 case "notes":return `<h2 class="app-heading">Bloco de notas</h2><p class="muted">Suas anotações são salvas automaticamente neste dispositivo.</p><textarea id="notesText" class="notes-area app-input" placeholder="Escreva suas ideias aqui..."></textarea><p class="muted" id="notesStatus">Pronto para escrever.</p>`;
 case "files":return `<h2 class="app-heading">Arquivos</h2><p class="muted">Visão demonstrativa dos arquivos do workspace.</p><div class="file-grid"><div class="file-tile"><span>📁</span><small>Documentos</small></div><div class="file-tile"><span>📁</span><small>Projetos</small></div><div class="file-tile"><span>📁</span><small>Planilhas</small></div><div class="file-tile"><span>📄</span><small>Relatório.pdf</small></div><div class="file-tile"><span>📄</span><small>Apresentação.pptx</small></div><div class="file-tile"><span>📄</span><small>Notas.txt</small></div></div><p class="muted" style="margin-top:20px">Esta área é uma interface ilustrativa. Ela não acessa os arquivos reais do computador.</p>`;
 default:return `<h2 class="app-heading">NovaOS</h2><p class="muted">Sistema de demonstração de ambiente corporativo.</p><div class="about-info"><div class="about-logo">N</div><div><strong>NovaOS 1.0</strong><p class="muted">Interface web inspirada em ambientes Linux, criada para demonstração acadêmica.</p><p class="muted">Aplicativos: navegador, calculadora, gastos, notas e arquivos.</p></div></div><div class="total-card"><span>STATUS DO SISTEMA</span><strong style="font-size:18px">Operacional</strong></div>`;
 }
}
function bindApp(id,win){
 if(id==="calculator"){
  let expr="";const display=$("#calcDisplay",win);
  $$("[data-key]",win).forEach(btn=>btn.onclick=()=>{const k=btn.dataset.key;if(k==="C"){expr="";display.value="0";return;}if(k==="⌫"){expr=expr.slice(0,-1);display.value=expr||"0";return;}if(k==="±"){expr=expr.startsWith("-")?expr.slice(1):"-"+expr;display.value=expr;return;}if(k==="="){try{const safe=expr.replace(/×/g,"*").replace(/÷/g,"/").replace(/−/g,"-");if(!/^[0-9+\-*/%.() ]+$/.test(safe))throw Error();const result=Function('"use strict";return ('+safe+')')();if(!Number.isFinite(result))throw Error();expr=String(Number(result.toFixed(8)));display.value=expr;}catch{display.value="Erro";expr="";}return;}expr+=({"×":"*","÷":"/","−":"-"}[k]||k);display.value=expr;});
 }
 if(id==="browser"){
  const go=(value)=>{let url=value.trim();if(!url)return;if(!/^https?:\/\//i.test(url)){url=url.includes(".")&&!url.includes(" ")? "https://"+url:"https://www.google.com/search?q="+encodeURIComponent(url);}const frame=$("#browserHome",win);frame.innerHTML=`<div style="text-align:center"><div style="font-size:30px">↗</div><h2>Endereço solicitado</h2><p>Se o site não abrir aqui, use a nova aba.</p><button class="action" id="openExternal">Abrir em nova aba</button></div>`;$("#openExternal",win).onclick=()=>window.open(url,"_blank","noopener");};
  $("#browserForm",win).onsubmit=e=>{e.preventDefault();go($("#browserUrl",win).value);};
  $$("[data-search]",win).forEach(b=>b.onclick=()=>{const q=b.dataset.search;$("#browserUrl",win).value=q;go(q);});
 }
 if(id==="expenses"){
  let items=[];try{items=JSON.parse(localStorage.getItem("novaos_expenses")||"[]");}catch{}
  const render=()=>{const list=$("#expenseList",win);list.innerHTML=items.length?items.map((it,i)=>`<div class="expense-row"><div><strong>${escapeHTML(it.name)}</strong><small>${new Date(it.date).toLocaleDateString("pt-BR")}</small></div><div style="display:flex;align-items:center;gap:12px"><strong>${money(it.value)}</strong><button data-remove="${i}" title="Remover">×</button></div></div>`).join(""):'<p class="muted">Nenhum gasto cadastrado ainda.</p>';$("#expenseTotal",win).textContent=money(items.reduce((s,x)=>s+x.value,0));$$("[data-remove]",win).forEach(b=>b.onclick=()=>{items.splice(+b.dataset.remove,1);save();});};
  const save=()=>{localStorage.setItem("novaos_expenses",JSON.stringify(items));render();};
  $("#expenseForm",win).onsubmit=e=>{e.preventDefault();const name=$("#expenseName",win).value.trim(),value=Number($("#expenseValue",win).value);if(!name||!Number.isFinite(value)||value<=0)return;items.push({name,value,date:new Date().toISOString()});$("#expenseForm",win).reset();save();};render();
 }
 if(id==="notes"){const area=$("#notesText",win);area.value=localStorage.getItem("novaos_notes")||"";area.addEventListener("input",()=>{localStorage.setItem("novaos_notes",area.value);$("#notesStatus",win).textContent="Salvo automaticamente.";});}
}
function money(v){return v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
