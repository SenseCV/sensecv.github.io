(function(){
"use strict";
var D = window.DADOS;

/* ---------- utilidades ---------- */
function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c];});}
function norm(s){return String(s||"").normalize("NFD").replace(/[̀-ͯ]/g,"").toLowerCase();}
function $(id){return document.getElementById(id);}
function byId(arr){var m={};arr.forEach(function(x){m[x.id]=x;});return m;}
function uniq(a){return Array.from(new Set(a));}
function sortPt(a){return a.slice().sort(function(x,y){return String(x).localeCompare(String(y),"pt-BR");});}
var store={get:function(k,d){try{var v=localStorage.getItem(k);return v?JSON.parse(v):d;}catch(e){return d;}},set:function(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}};

var R=byId(D.pesquisadores), W=byId(D.trabalhos), G=byId(D.grupos), DS=byId(D.datasets);
var P=D.paises;
var TIPO={laboratorio:{rot:"Laboratório / grupo formal",cls:"t-lab"},equipe:{rot:"Equipe de projeto",cls:"t-equipe"},colaboracao:{rot:"Colaboração entre instituições",cls:"t-colab"}};
var ICON={
  star:'<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>',
  starO:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z"/></svg>',
  cap:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/></svg>',
  users:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.8-3.5 3.4-5.5 6.5-5.5s5.7 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c1.8.7 3 2.5 3.5 5.2"/></svg>',
  doc:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/></svg>',
  db:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><ellipse cx="12" cy="5.5" rx="7" ry="2.8"/><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8"/></svg>',
  arrow:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  search:'<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
};

/* ---------- paisagens geradas (capas) ---------- */
function hashStr(s){var h=1779033703^s.length;for(var i=0;i<s.length;i++){h=Math.imul(h^s.charCodeAt(i),3432918353);h=h<<13|h>>>19;}return h>>>0;}
function rng(seed){var a=seed>>>0;return function(){a|=0;a=a+0x6D2B79F5|0;var t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
var PAL={
  amber:{sky:["#c9d3d6","#f1dfbd"],sun:"#fff4dc",r:["#8f857a","#6f5434","#4a3420"],g:"#77582c",road:"#3a3530"},
  olive:{sky:["#d6e1dc","#f4f1e6"],sun:"#ffffff",r:["#9aa79a","#5d7046","#3c4d2c"],g:"#55663a",road:"#2f332c"},
  slate:{sky:["#bfcfdf","#eef2f5"],sun:"#ffffff",r:["#8796a8","#566579","#38455a"],g:"#4b5a49",road:"#2b2f36"},
  rust:{sky:["#efbf98","#fbe5cf"],sun:"#fff1df",r:["#b9876a","#8c5a3c","#5e3826"],g:"#6a4a30",road:"#33281f"},
  teal:{sky:["#9cc0c6","#e6f0ef"],sun:"#f6fbfa",r:["#6f9aa0","#3f6f75","#264b50"],g:"#2f5a4d",road:"#232c2b"},
  lilac:{sky:["#b3acd6","#ece6f5"],sun:"#fbf8ff",r:["#8f86b5","#615891","#3e3866"],g:"#4a446e",road:"#2a2740"},
  dusk:{sky:["#8f88c2","#f0c9b8"],sun:"#fff0e6",r:["#7d6f9e","#544777","#33294f"],g:"#3d3458",road:"#231e33"}
};
var artN=0;
function landscape(seed,pal,W,H){
  W=W||800;H=H||480; var R=rng(hashStr(seed)), P=PAL[pal]||PAL.amber, id="ls"+(++artN);
  var hz=H*(0.56+R()*0.06), vx=W*(0.38+R()*0.24);
  function ridge(base,amp,freq){
    var pts=[], n=40, ph=R()*10, ph2=R()*10;
    for(var i=0;i<=n;i++){var x=i/n*W; var y=base-amp*(0.55*Math.sin(i/n*freq+ph)+0.3*Math.sin(i/n*freq*2.7+ph2)+0.15*(R()-.5)*2); pts.push(x.toFixed(1)+","+y.toFixed(1));}
    return "M0,"+H+" L"+pts.join(" L")+" L"+W+","+H+"Z";
  }
  var s='<svg viewBox="0 0 '+W+' '+H+'" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">'+
    '<defs><linearGradient id="'+id+'s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.sky[0]+'"/><stop offset="1" stop-color="'+P.sky[1]+'"/></linearGradient>'+
    '<linearGradient id="'+id+'h" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.sky[1]+'" stop-opacity=".0"/><stop offset=".55" stop-color="'+P.sky[1]+'" stop-opacity=".55"/><stop offset="1" stop-color="'+P.sky[1]+'" stop-opacity="0"/></linearGradient>'+
    '<linearGradient id="'+id+'g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.g+'"/><stop offset="1" stop-color="#1b1712"/></linearGradient>'+
    '<linearGradient id="'+id+'r" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+P.road+'" stop-opacity=".7"/><stop offset="1" stop-color="'+P.road+'"/></linearGradient></defs>'+
    '<rect width="'+W+'" height="'+H+'" fill="url(#'+id+'s)"/>'+
    '<circle cx="'+(W*(0.15+R()*0.7)).toFixed(0)+'" cy="'+(hz*(0.35+R()*0.25)).toFixed(0)+'" r="'+(H*0.07).toFixed(0)+'" fill="'+P.sun+'" opacity=".85"/>'+
    '<path d="'+ridge(hz-H*0.16,H*0.11,3+R()*3)+'" fill="'+P.r[0]+'" opacity=".75"/>'+
    '<rect x="0" y="'+(hz-H*0.22).toFixed(0)+'" width="'+W+'" height="'+(H*0.2).toFixed(0)+'" fill="url(#'+id+'h)"/>'+
    '<path d="'+ridge(hz-H*0.06,H*0.08,4+R()*4)+'" fill="'+P.r[1]+'"/>'+
    '<path d="'+ridge(hz+H*0.01,H*0.035,6+R()*5)+'" fill="'+P.r[2]+'"/>'+
    '<rect x="0" y="'+(hz+H*0.02).toFixed(1)+'" width="'+W+'" height="'+H+'" fill="url(#'+id+'g)"/>';
  // caminho em perspectiva com piso tátil direcional
  var top=hz+H*0.02, bl=W*0.14, br=W*0.86, tw=W*0.012;
  s+='<path d="M'+(vx-tw)+','+top+' L'+(vx+tw)+','+top+' L'+br+','+H+' L'+bl+','+H+'Z" fill="url(#'+id+'r)"/>';
  var cl=W*0.44, cr=W*0.56, ct=W*0.003;
  s+='<path d="M'+(vx-ct)+','+top+' L'+(vx+ct)+','+top+' L'+cr+','+H+' L'+cl+','+H+'Z" fill="#e8b923"/>';
  for(var k=1;k<4;k++){var f=k/4; var x0=vx-ct+2*ct*f, x1=cl+(cr-cl)*f; s+='<path d="M'+x0.toFixed(1)+','+top+' L'+x1.toFixed(1)+','+H+'" stroke="#a37d0a" stroke-width="'+(W*0.0035).toFixed(1)+'" opacity=".55"/>';}
  // faixa de alerta (pontos) mais próxima
  var y0=H*0.9, y1=H*0.96; var lx0=vx+(cl-vx)*((y0-top)/(H-top)), rx0=vx+(cr-vx)*((y0-top)/(H-top)), lx1=vx+(cl-vx)*((y1-top)/(H-top)), rx1=vx+(cr-vx)*((y1-top)/(H-top));
  for(var row=0;row<3;row++){var fy=row/2, y=y0+(y1-y0)*fy, lx=lx0+(lx1-lx0)*fy, rx=rx0+(rx1-rx0)*fy; for(var c=0;c<6;c++){var x=lx+(rx-lx)*(c+.5)/6; s+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+((rx-lx)/22).toFixed(1)+'" fill="#7a5c06" opacity=".55"/>';}}
  return s+'</svg>';
}
function capa(ent,seed,pal,w,h){
  if(ent.imagem){var im=ent.imagem;return '<img src="'+esc(im.arquivo)+'" alt="'+esc(im.alt)+'" loading="lazy" decoding="async" style="object-fit:'+(im.ajuste==="contain"?"contain":"cover")+';object-position:'+esc(im.pos||"center")+'">';}
  return landscape(seed,pal,w,h);
}
function capaCls(ent){return ent.imagem&&ent.imagem.ajuste==="contain"?" contain":(ent.imagem?" foto":"");}
function credito(ent){
  if(!ent.imagem) return '<p class="credit">Ilustração genérica: não encontrei imagem adequada na página oficial.</p>';
  return '<p class="credit">Imagem: <a class="ext" href="'+esc(ent.imagem.url)+'" target="_blank" rel="noopener noreferrer">'+esc(ent.imagem.fonte)+'<span class="sr-only"> (abre em nova aba)</span></a></p>';
}
var PAL_ASSIST=["amber","olive","slate","rust","teal"], PAL_ROBO=["lilac","dusk"];
function palFor(id,robo){var l=robo?PAL_ROBO:PAL_ASSIST;return l[hashStr(id)%l.length];}
var AVC=["#3b4a5a","#5b4a36","#3f5a45","#5a3e4f","#2f4f5a","#4d4673","#6a4a30"];
function initials(n){var p=n.replace(/\(.*?\)/g,"").trim().split(/\s+/);return ((p[0]||"")[0]+(p.length>1?p[p.length-1][0]:"")).toUpperCase();}
var verifTxt=D.meta.verificadoEmTexto;
document.querySelectorAll("[data-verificado]").forEach(function(el){el.textContent=verifTxt;});

/* ---------- derivações ---------- */
D.pesquisadores.forEach(function(r){r.trabalhos=[];r.grupos=[];r.datasets=[];r.areas=[];});
D.grupos.forEach(function(g){g.pesq=[];});
D.trabalhos.forEach(function(w){
  w.autores.forEach(function(a){
    var r=R[a]; r.trabalhos.push(w.id);
    w.grupos.forEach(function(gid){ if(r.grupos.indexOf(gid)<0) r.grupos.push(gid); });
  });
});
D.grupos.forEach(function(g){
  var ids=[]; g.trabalhos.forEach(function(wid){W[wid].autores.forEach(function(a){if(ids.indexOf(a)<0)ids.push(a);});});
  g.pesq=ids;
});
D.datasets.forEach(function(ds){
  var w=W[ds.trabalho]; if(w) w.autores.forEach(function(a){ if(R[a].datasets.indexOf(ds.id)<0) R[a].datasets.push(ds.id); });
});
D.pesquisadores.forEach(function(r){
  var areas=[]; r.grupos.forEach(function(gid){G[gid].areas.forEach(function(a){if(areas.indexOf(a)<0)areas.push(a);});});
  if(r.datasets.length && areas.indexOf("Datasets")<0) areas.push("Datasets");
  if(!r.grupos.length){ areas.push("Navegação assistiva"); }
  r.areas=areas;
});
function scholar(r){
  if(r.perfil) return {tipo:"perfil",url:"https://scholar.google.com/citations?user="+encodeURIComponent(r.perfil),rot:"Perfil no Google Acadêmico"};
  var q=r.nome+(r.busca?" "+r.busca:"");
  return {tipo:"busca",url:"https://scholar.google.com/scholar?q="+encodeURIComponent(q).replace(/%20/g,"+"),rot:"Buscar no Google Acadêmico"};
}
function scholarLink(r){
  var s=scholar(r);
  return '<a class="scholar '+s.tipo+' ext" href="'+esc(s.url)+'" target="_blank" rel="noopener noreferrer">'+ICON.cap+esc(s.rot)+'<span class="sr-only"> de '+esc(r.nome)+' (abre em nova aba)</span></a>';
}
function ext(url,label,extra){
  return '<a class="ext" href="'+esc(url)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+'<span class="sr-only"> (site externo, abre em nova aba)</span></a>'+(extra||"");
}
function pais(code){ if(!code||!P[code]) return '<span>País não informado</span>'; return '<span aria-hidden="true">'+P[code].bandeira+'</span><span>'+esc(P[code].nome)+'</span>'; }
function paisesTxt(codes){ return codes&&codes.length?codes.map(pais).join(' · '):pais(null); }
function tipoChip(t){var x=TIPO[t];return '<span class="chip '+x.cls+'">'+esc(x.rot)+'</span>';}
function secaoChip(g){
  if(g.secao!=="robotica") return '<span class="chip t-equipe">Tecnologia assistiva</span>';
  return g.classeRobotica==="assistiva"?'<span class="chip t-robo">Robótica assistiva</span>':'<span class="chip t-robo">Robótica · contribuição metodológica</span>';
}
function autoresTxt(w){ return w.autores.map(function(a){return '<button type="button" class="pname-inline" data-open-r="'+a+'" style="all:unset;cursor:pointer;text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:.2em">'+esc(R[a].nome)+'</button>';}).join(', '); }

/* ---------- favoritos ---------- */
var favs=store.get("nav-favoritos",{});
function isFav(k){return !!favs[k];}
function favBtn(k,nome){var on=isFav(k);return '<button type="button" class="fav" data-fav="'+esc(k)+'" aria-pressed="'+on+'" aria-label="'+(on?"Remover dos favoritos: ":"Adicionar aos favoritos: ")+esc(nome)+'">'+(on?ICON.star:ICON.starO)+'</button>';}
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-fav]"); if(!b) return;
  var k=b.getAttribute("data-fav"); favs[k]=!favs[k]; if(!favs[k]) delete favs[k]; store.set("nav-favoritos",favs);
  var on=isFav(k), nome=b.getAttribute("aria-label").replace(/^(Remover dos favoritos|Adicionar aos favoritos): /,"");
  document.querySelectorAll('[data-fav="'+CSS.escape(k)+'"]').forEach(function(x){x.setAttribute("aria-pressed",on);x.innerHTML=on?ICON.star:ICON.starO;x.setAttribute("aria-label",(on?"Remover dos favoritos: ":"Adicionar aos favoritos: ")+nome);});
  if($("fg-fav").checked) renderGrupos(); if($("fd-fav").checked) renderDatasets();
});

/* ---------- indicadores ---------- */
function renderStats(){
  var paises=uniq(D.grupos.flatMap(function(g){return g.paises;}).concat(D.datasets.flatMap(function(d){return d.paises;})));
  var perfis=D.pesquisadores.filter(function(r){return r.perfil;}).length;
  var items=[
    [D.grupos.length,"Grupos e equipes"],
    [perfis,"Pesquisadores"],
    [D.trabalhos.length,"Trabalhos"],
    [D.datasets.length,"Datasets"],
    [paises.length,"Países"]
  ];
  $("stats").innerHTML=items.map(function(i){return '<div><dt>'+i[1]+'</dt><dd>'+i[0]+'</dd></div>';}).join("");
}
function renderQuick(){
  function conta(arr){var m={};arr.forEach(function(v){m[v]=(m[v]||0)+1;});return Object.keys(m).map(function(k){return [k,m[k]];}).sort(function(a,b){return b[1]-a[1]||a[0].localeCompare(b[0],"pt");});}
  function chip(f,v,rot,n){return '<button type="button" class="qchip" data-qf="'+f+'" data-qv="'+esc(v)+'">'+rot+'<span class="qn">'+n+'</span></button>';}
  var areas=conta(D.grupos.flatMap(function(g){return g.areas;})).map(function(x){return chip("area",x[0],esc(x[0]),x[1]);});
  var pais=conta(D.grupos.flatMap(function(g){return g.paises;})).map(function(x){return chip("pais",x[0],'<span aria-hidden="true">'+P[x[0]].bandeira+'</span> '+esc(P[x[0]].nome),x[1]);});
  var tipos=["laboratorio","equipe","colaboracao"].map(function(k){return chip("tipo",k,esc(TIPO[k].rot),D.grupos.filter(function(g){return g.tipo===k;}).length);});
  var foco=[["assistiva","Tecnologia assistiva"],["robotica","Robótica"]].map(function(x){return chip("secao",x[0],x[1],D.grupos.filter(function(g){return g.secao===x[0];}).length);});
  var ds=Object.keys(D.tagsDataset).map(function(k){return chip("dstag",k,esc(D.tagsDataset[k]),D.datasets.filter(function(d){return d.tags.indexOf(k)>=0;}).length);});
  var rows=[["Grupos por área de pesquisa",areas],["Grupos por país",pais],["Datasets por categoria",ds]];
  $("quick-rows").innerHTML=rows.map(function(r,i){return '<details class="qrow"'+(i===0?' open':'')+'><summary><span class="qtitle">'+r[0]+'</span><span class="qcount">'+r[1].length+' opções</span><span class="qchev" aria-hidden="true"></span></summary><div class="qchips" role="group" aria-label="'+esc(r[0])+'">'+r[1].join("")+'</div></details>';}).join("");
}
document.addEventListener("click",function(e){
  var b=e.target.closest("[data-qf]");if(!b)return;
  var f=b.getAttribute("data-qf"), v=b.getAttribute("data-qv");
  if(f==="dstag"){
    resetDatasets();
    var c=document.querySelector('#ds-chips [data-dstag="'+v+'"]');if(c)c.click();
    document.getElementById("datasets").scrollIntoView();
    if(c)c.focus({preventScroll:true});
    return;
  }
  ["fg-q","fg-pais","fg-area","fg-tipo","fg-secao"].forEach(function(id){$(id).value="";});$("fg-fav").checked=false;
  var alvo=$("fg-"+f);alvo.value=v;renderGrupos();
  document.getElementById("grupos").scrollIntoView();alvo.focus({preventScroll:true});
});

/* ---------- grupos ---------- */
function fillSelect(sel,first,vals,labelFn){
  sel.innerHTML='<option value="">'+esc(first)+'</option>'+vals.map(function(v){return '<option value="'+esc(v)+'">'+esc(labelFn?labelFn(v):v)+'</option>';}).join("");
}
var areasTodas=sortPt(uniq(D.grupos.flatMap(function(g){return g.areas;})));
fillSelect($("fg-pais"),"Todos os países",sortPt(uniq(D.grupos.flatMap(function(g){return g.paises;}))),function(c){return P[c].bandeira+" "+P[c].nome;});
fillSelect($("fg-area"),"Todas as áreas",areasTodas);

function glassTipo(g){var c={laboratorio:"#7fa2ff",equipe:"#7fd3a8",colaboracao:"#ffb27f"}[g.tipo];return '<span class="glass"><i style="background:'+c+'"></i>'+esc(TIPO[g.tipo].rot)+'</span>';}
function glassSecao(g){if(g.secao!=="robotica")return '<span class="glass"><i style="background:#7fd3a8"></i>Tecnologia assistiva</span>';return '<span class="glass"><i style="background:#c3b5ff"></i>'+(g.classeRobotica==="assistiva"?"Robótica assistiva":"Robótica · metodológica")+'</span>';}
function paisesCurto(codes){return codes&&codes.length?codes.map(function(c){return P[c]?'<span aria-hidden="true">'+P[c].bandeira+'</span> '+esc(P[c].nome):"";}).join(" · "):"País não informado";}
function grupoCard(g){
  var cls=g.secao==="robotica"?"robo":"assist";
  var lin=g.linhas.slice(0,3).map(function(l){return '<span class="tag">'+esc(l)+'</span>';}).join("")+(g.linhas.length>3?'<span class="tag">+'+(g.linhas.length-3)+'</span>':"");
  return '<article class="card '+cls+'" aria-labelledby="g-'+g.id+'">'+
    '<div class="card-head"><h3 id="g-'+g.id+'">'+esc(g.nome)+'</h3><span class="badge">'+paisesCurto(g.paises)+'</span></div>'+
    '<div class="cover'+capaCls(g)+'">'+capa(g,g.id,palFor(g.id,g.secao==="robotica"),640,380)+favBtn("g:"+g.id,g.nome)+'<div class="ov-l">'+glassTipo(g)+glassSecao(g)+'</div></div>'+credito(g)+
    '<div class="body"><p class="inst">'+esc(g.instituicao)+'</p><p class="resumo">'+esc(g.resumo.foco)+'</p><div class="tags" aria-label="Linhas de pesquisa">'+lin+'</div></div>'+
    '<p class="meta"><span>'+ICON.users+'<b>'+g.pesq.length+'</b> pesquisadores</span><span>'+ICON.doc+'<b>'+g.trabalhos.length+'</b> '+(g.trabalhos.length===1?"trabalho":"trabalhos")+($("fg-ord").value==="assist"?' ('+nAssistG(g)+' em tec. assistiva)':'')+'</span><span>'+ICON.db+'<b>'+g.datasets.length+'</b> '+(g.datasets.length===1?"dataset":"datasets")+'</span></p>'+
    '<div class="card-actions"><button type="button" class="btn btn-primary" data-open-g="'+g.id+'">Ver detalhes<span class="sr-only"> de '+esc(g.nome)+'</span></button>'+
    '<a class="btn ext" href="'+esc(g.pagina.url)+'" target="_blank" rel="noopener noreferrer" title="'+esc(g.pagina.tipo)+'">Página oficial<span class="sr-only"> de '+esc(g.nome)+': '+esc(g.pagina.tipo)+' (abre em nova aba)</span></a></div>'+
    '<p class="linknote">Link: '+esc(g.pagina.tipo)+'</p>'+
  '</article>';
}
function emptyState(msg,resetId){return '<div class="empty" role="status"><b>Nenhum resultado</b><span>'+esc(msg)+'</span>'+(resetId?'<button type="button" class="btn" data-reset="'+resetId+'">Limpar filtros</button>':'')+'</div>';}
function nAssistG(g){return g.trabalhos.filter(function(wid){return trabAssist(W[wid]);}).length;}
function renderGrupos(){
  var q=norm($("fg-q").value), pa=$("fg-pais").value, ar=$("fg-area").value, ti=$("fg-tipo").value, se=$("fg-secao").value, fav=$("fg-fav").checked;
  var list=D.grupos.filter(function(g){
    if(pa && g.paises.indexOf(pa)<0) return false;
    if(ar && g.areas.indexOf(ar)<0) return false;
    if(ti && g.tipo!==ti) return false;
    if(se && g.secao!==se) return false;
    if(fav && !isFav("g:"+g.id)) return false;
    if(q){ var hay=norm([g.nome,g.instituicao,g.linhas.join(" "),g.areas.join(" "),g.resumo.foco,g.pesq.map(function(a){return R[a].nome;}).join(" "),g.trabalhos.map(function(w){return W[w].titulo;}).join(" ")].join(" ")); if(hay.indexOf(q)<0) return false; }
    return true;
  });
  var ord=$("fg-ord").value==="assist";
  if(ord) list=list.map(function(g,i){return {g:g,i:i,n:nAssistG(g)};}).sort(function(a,b){return b.n-a.n||b.g.trabalhos.length-a.g.trabalhos.length||a.i-b.i;}).map(function(x){return x.g;});
  $("rc-grupos").innerHTML='<b>'+list.length+'</b> de '+D.grupos.length+' grupos e equipes'+(ord?' · mais trabalhos em tecnologia assistiva primeiro':'');
  $("lista-grupos").innerHTML=list.length?list.map(grupoCard).join(""):emptyState("Tente remover algum filtro ou buscar por outro termo.","grupos");
}
["fg-q","fg-pais","fg-area","fg-tipo","fg-secao","fg-fav","fg-ord"].forEach(function(id){$(id).addEventListener("input",renderGrupos);});

/* ---------- pesquisadores ---------- */
/* A seção lista só quem tem perfil confirmado no Google Acadêmico. */
var PESQ=D.pesquisadores.filter(function(r){return r.perfil;});
/* Um trabalho conta como de tecnologia assistiva, salvo quando todos os seus grupos são de robótica com contribuição apenas metodológica. */
function trabAssist(w){ if(!w.grupos.length) return true; return w.grupos.some(function(g){return !(G[g].secao==="robotica"&&G[g].classeRobotica==="metodologica");}); }
PESQ.forEach(function(r){ r.nAssist=r.trabalhos.filter(function(wid){return trabAssist(W[wid]);}).length; });
var instTodas=sortPt(uniq(PESQ.map(function(r){return r.inst;})));
fillSelect($("fp-pais"),"Todos os países",sortPt(uniq(PESQ.map(function(r){return r.pais||"_";}))),function(c){return c==="_"?"País não informado":P[c].bandeira+" "+P[c].nome;});
fillSelect($("fp-inst"),"Todas as instituições",instTodas);
fillSelect($("fp-area"),"Todas as áreas",sortPt(uniq(PESQ.flatMap(function(r){return r.areas;}))));
var limitePesq=24;
function assocTxt(r){
  var gs=r.grupos.map(function(g){return G[g].nome;});
  var ds=r.datasets.filter(function(d){return !DS[d].grupo;}).map(function(d){return "Dataset "+DS[d].nome;});
  return gs.concat(ds).join(" · ");
}
function pesqCard(r){
  var h=hashStr(r.id);
  return '<div class="rcard">'+
    '<span class="avatar" aria-hidden="true" style="background:'+AVC[h%AVC.length]+'">'+esc(initials(r.nome))+'</span>'+
    '<button type="button" class="rname" data-open-r="'+r.id+'">'+esc(r.nome)+'</button>'+
    '<p class="rmeta">'+esc(r.inst)+' · '+pais(r.pais)+'</p>'+
    '<p class="rmeta"><b style="color:var(--ink)">'+r.trabalhos.length+'</b> '+(r.trabalhos.length===1?"trabalho":"trabalhos")+($("fp-ord").value==="assist"?' ('+r.nAssist+' em tecnologia assistiva)':'')+' · '+esc(assocTxt(r))+'</p>'+
    scholarLink(r)+
  '</div>';
}
function filtrarPesq(){
  var q=norm($("fp-q").value), pa=$("fp-pais").value, ins=$("fp-inst").value, ar=$("fp-area").value;
  return PESQ.filter(function(r){
    if(pa){ if(pa==="_"? !!r.pais : r.pais!==pa) return false; }
    if(ins && r.inst!==ins) return false;
    if(ar && r.areas.indexOf(ar)<0) return false;
    if(q && norm(r.nome).indexOf(q)<0) return false;
    return true;
  }).sort(function(a,b){
    if($("fp-ord").value==="assist" && b.nAssist!==a.nAssist) return b.nAssist-a.nAssist;
    if($("fp-ord").value==="assist" && b.trabalhos.length!==a.trabalhos.length) return b.trabalhos.length-a.trabalhos.length;
    return a.nome.localeCompare(b.nome,"pt-BR");
  });
}
function renderPesq(){
  var list=filtrarPesq();
  $("rc-pesq").innerHTML='<b>'+list.length+'</b> de '+PESQ.length+' pesquisadores · '+($("fp-ord").value==="assist"?"mais trabalhos em tecnologia assistiva primeiro":"ordem alfabética");
  $("lista-pesq").innerHTML=list.length?list.slice(0,limitePesq).map(pesqCard).join(""):emptyState("Nenhum pesquisador corresponde aos filtros.","pesq");
  $("mais-pesq").hidden=list.length<=limitePesq;
  $("mais-pesq").textContent="Mostrar mais pesquisadores ("+Math.max(0,list.length-limitePesq)+" restantes)";
}
["fp-q","fp-pais","fp-inst","fp-area","fp-ord"].forEach(function(id){$(id).addEventListener("input",function(){limitePesq=24;renderPesq();});});
$("mais-pesq").addEventListener("click",function(){limitePesq+=48;renderPesq();});

/* ---------- datasets ---------- */
var dsAtivos=[];
$("ds-chips").innerHTML=Object.keys(D.tagsDataset).map(function(k){return '<button type="button" class="togglechip" data-dstag="'+k+'" aria-pressed="false">'+esc(D.tagsDataset[k])+'</button>';}).join("");
$("ds-chips").addEventListener("click",function(e){var b=e.target.closest("[data-dstag]");if(!b)return;var k=b.getAttribute("data-dstag");var i=dsAtivos.indexOf(k);if(i<0)dsAtivos.push(k);else dsAtivos.splice(i,1);b.setAttribute("aria-pressed",i<0);renderDatasets();});
$("fd-q").addEventListener("input",renderDatasets); $("fd-fav").addEventListener("input",renderDatasets);
$("fd-limpar").addEventListener("click",resetDatasets);
function resetDatasets(){dsAtivos=[];document.querySelectorAll("[data-dstag]").forEach(function(b){b.setAttribute("aria-pressed","false");});$("fd-q").value="";$("fd-fav").checked=false;renderDatasets();}
function dsFicha(d){
  var w=W[d.trabalho];
  return '<dl>'+
      '<dt>Tipo de dado</dt><dd>'+esc(d.tiposDados.join(", "))+'</dd>'+
      '<dt>Finalidade</dt><dd>'+esc(d.finalidade)+'</dd>'+
      '<dt>Anotação</dt><dd>'+esc(d.anotacao)+'</dd>'+
      '<dt>Limitações</dt><dd>'+esc(d.limitacoes)+'</dd>'+
      '<dt>Acesso</dt><dd>'+esc(d.acesso)+'</dd>'+
      '<dt>Licença</dt><dd>'+esc(d.licenca)+'</dd>'+
      '<dt>Artigo</dt><dd>'+(d.artigoTexto?esc(d.artigoTexto):(w?ext(w.links[0].url,w.titulo+" ("+w.ano+")"):"—"))+'</dd>'+
    '</dl>';
}
function dsGrupoTxt(d){return d.grupo?'<button type="button" data-open-g="'+d.grupo+'" class="inlinelink">'+esc(d.equipe)+'</button>':esc(d.equipe);}
function dsPal(d){return d.tags.indexOf("robotica")>=0&&d.tags.indexOf("assistiva")<0?palFor(d.id,true):palFor(d.id,false);}
function dsCard(d){
  var tags=d.tags.map(function(t){return '<span class="tag">'+esc(D.tagsDataset[t])+'</span>';}).join("");
  var links=d.links.map(function(l){return ext(l.url,l.rotulo);}).join("");
  var tipos=d.tiposDados.slice(0,2).map(function(x){return '<span class="glass">'+esc(x)+'</span>';}).join("");
  return '<article class="card dcard" aria-labelledby="d-'+d.id+'">'+
    '<div class="card-head"><h3 id="d-'+d.id+'">'+esc(d.nome)+'</h3><span class="badge">'+paisesCurto(d.paises)+'</span></div>'+
    '<div class="cover'+capaCls(d)+'">'+capa(d,"ds-"+d.id,dsPal(d),640,380)+favBtn("d:"+d.id,d.nome)+'<div class="ov-l">'+tipos+'</div></div>'+credito(d)+
    '<div class="body"><p class="inst">'+dsGrupoTxt(d)+'</p>'+
      
      '<p class="resumo">'+esc(d.descricao)+'</p>'+
      '<div class="tags" aria-label="Categorias">'+tags+'</div>'+
      '<details class="ficha"><summary>Ficha do dataset</summary>'+dsFicha(d)+'</details>'+
      '<div class="linkrow">'+links+'</div>'+
    '</div>'+
    '<div class="card-actions"><button type="button" class="btn btn-primary" data-open-d="'+d.id+'">Ver detalhes<span class="sr-only"> de '+esc(d.nome)+'</span></button></div>'+
  '</article>';
}
function renderDatasets(){
  var q=norm($("fd-q").value), fav=$("fd-fav").checked;
  var list=D.datasets.filter(function(d){
    if(!dsAtivos.every(function(t){return d.tags.indexOf(t)>=0;})) return false;
    if(fav && !isFav("d:"+d.id)) return false;
    if(q && norm([d.nome,d.equipe,d.descricao,d.finalidade].join(" ")).indexOf(q)<0) return false;
    return true;
  });
  $("rc-ds").innerHTML='<b>'+list.length+'</b> de '+D.datasets.length+' datasets'+(dsAtivos.length?' com: '+dsAtivos.map(function(t){return D.tagsDataset[t];}).join(" + "):"");
  $("lista-ds").innerHTML=list.length?list.map(dsCard).join(""):emptyState("Nenhum dataset reúne todas as categorias marcadas. Desmarque alguma categoria.","ds");
}

/* ---------- robótica ---------- */

document.addEventListener("click",function(e){
  var b=e.target.closest("[data-reset]"); if(!b) return;
  var k=b.getAttribute("data-reset");
  if(k==="grupos"){["fg-q","fg-pais","fg-area","fg-tipo","fg-secao"].forEach(function(id){$(id).value="";});$("fg-ord").value="padrao";$("fg-fav").checked=false;renderGrupos();}
  if(k==="pesq"){["fp-q","fp-pais","fp-inst","fp-area"].forEach(function(id){$(id).value="";});$("fp-ord").value="nome";renderPesq();}
  if(k==="ds") resetDatasets();
});

/* ---------- coautores ---------- */
function coautores(id){
  var m={};
  R[id].trabalhos.forEach(function(wid){W[wid].autores.forEach(function(a){if(a!==id){(m[a]=m[a]||[]).push(wid);}});});
  return Object.keys(m).map(function(a){return {id:a,w:m[a]};}).sort(function(x,y){return y.w.length-x.w.length||R[x.id].nome.localeCompare(R[y.id].nome,"pt-BR");});
}

/* ---------- referências ---------- */
function renderFontes(){
  var fontes={};
  function add(url,label){ if(!fontes[url]) fontes[url]=label; }
  D.grupos.forEach(function(g){add(g.pagina.url,g.nome+" — "+g.pagina.tipo);(g.linksExtras||[]).forEach(function(l){add(l.url,g.nome+" — "+l.rotulo);});});
  D.trabalhos.forEach(function(w){w.links.forEach(function(l){add(l.url,w.titulo+" — "+l.rotulo);});});
  D.datasets.forEach(function(d){d.links.forEach(function(l){add(l.url,d.nome+" — "+l.rotulo);});});
  var keys=Object.keys(fontes).sort(function(a,b){return fontes[a].localeCompare(fontes[b],"pt-BR");});
  $("lista-fontes").innerHTML=keys.map(function(u){return '<li>'+ext(u,fontes[u])+'</li>';}).join("");
}

/* ---------- modal ---------- */
var modal=$("modal"), ultimoFoco=null;
function abrirModal(kicker,titulo,corpo){
  if(!modal.open) ultimoFoco=document.activeElement;
  $("modal-kicker").innerHTML=kicker; $("modal-titulo").textContent=titulo; $("modal-corpo").innerHTML=corpo;
  if(!modal.open){ if(modal.showModal) modal.showModal(); else modal.setAttribute("open",""); }
  modal.scrollTop=0; $("modal-corpo").scrollTop=0; $("modal-fechar").focus();
}
function fecharModal(){ if(modal.close) modal.close(); else modal.removeAttribute("open"); }
$("modal-fechar").addEventListener("click",fecharModal);
modal.addEventListener("close",function(){ if(ultimoFoco&&ultimoFoco.focus) ultimoFoco.focus(); });
modal.addEventListener("click",function(e){ if(e.target===modal) fecharModal(); });

function workHtml(w){
  return '<div class="work"><span class="wtitle">'+esc(w.titulo)+'</span><span class="wmeta">'+w.ano+' · '+esc(w.veiculo)+'</span><span style="font-size:.9rem">Autores (na ordem da publicação): '+autoresTxt(w)+'</span>'+(w.nota?'<span class="wmeta">'+esc(w.nota)+'</span>':'')+'<div class="linkrow">'+w.links.map(function(l){return ext(l.url,l.rotulo);}).join("")+'</div></div>';
}
function personHtml(id){var r=R[id];return '<div class="person"><button type="button" class="pname" data-open-r="'+id+'">'+esc(r.nome)+'</button><span class="rmeta">'+esc(r.inst)+'</span>'+scholarLink(r)+'</div>';}
function openGroup(id){
  var g=G[id];
  var corpo='<div><div class="modal-cover'+capaCls(g)+'">'+capa(g,g.id,palFor(g.id,g.secao==="robotica"),1260,420)+'</div>'+credito(g)+'</div>'+
    '<p class="country" style="font-weight:700;color:var(--muted);display:flex;gap:.4rem;flex-wrap:wrap">'+esc(g.instituicao)+' · '+paisesTxt(g.paises)+'</p>'+
    '<div><h3>Resumo do grupo de pesquisa</h3><div class="summary-grid">'+
      '<div><h4>Foco</h4><p>'+esc(g.resumo.foco)+'</p></div>'+
      '<div><h4>Problemas que busca resolver</h4><p>'+esc(g.resumo.problemas)+'</p></div>'+
      '<div><h4>Tecnologias utilizadas</h4><p>'+esc(g.resumo.tecnologias)+'</p></div>'+
      '<div><h4>Principais contribuições</h4><p>'+esc(g.resumo.contribuicoes)+'</p></div>'+
    '</div></div>'+
    '<div><h3>Linhas de pesquisa</h3><div class="tags">'+g.linhas.map(function(l){return '<span class="tag">'+esc(l)+'</span>';}).join("")+'</div></div>'+
    '<div><h3>Páginas</h3><div class="linkrow">'+ext(g.pagina.url,"Acessar página oficial ("+g.pagina.tipo+")")+(g.linksExtras||[]).map(function(l){return ext(l.url,l.rotulo);}).join("")+'</div></div>'+
    '<div><h3>Trabalhos relacionados</h3><div style="display:grid;gap:.6rem">'+g.trabalhos.map(function(w){return workHtml(W[w]);}).join("")+'</div></div>'+
    '<div><h3>'+(g.tipo==="laboratorio"?"Pesquisadores associados aos trabalhos":"Pesquisadores associados ao trabalho")+'</h3><p class="rmeta" style="margin-bottom:.5rem">Autores dos trabalhos listados acima, em ordem alfabética. Não são necessariamente integrantes atuais.</p><div class="people">'+g.pesq.slice().sort(function(a,b){return R[a].nome.localeCompare(R[b].nome,"pt-BR");}).map(personHtml).join("")+'</div></div>'+
    (g.datasets.length?'<div><h3>Datasets relacionados</h3><div class="linkrow">'+g.datasets.map(function(d){return '<button type="button" class="btn" data-open-d="'+d+'">'+esc(DS[d].nome)+'</button>';}).join("")+'</div></div>':'')+
    (g.observacoes&&g.observacoes.length?'<div class="notes"><h3>Observações e limitações</h3><ul>'+g.observacoes.map(function(o){return '<li>'+esc(o)+'</li>';}).join("")+'</ul></div>':'');
  abrirModal(tipoChip(g.tipo)+secaoChip(g),g.nome,corpo);
}
function openResearcher(id){
  var r=R[id], cs=coautores(id);
  var corpo='<p class="rmeta" style="font-size:.95rem">'+esc(r.inst)+' · '+pais(r.pais)+'</p>'+
    '<div>'+scholarLink(r)+(scholar(r).tipo==="busca"?'<p class="rmeta" style="margin-top:.4rem">Perfil não confirmado: o link abre uma busca no Google Acadêmico.</p>':'')+'</div>'+
    '<div><h3>Áreas</h3><div class="tags">'+r.areas.map(function(a){return '<span class="tag">'+esc(a)+'</span>';}).join("")+'</div></div>'+
    (r.grupos.length?'<div><h3>Grupos e projetos no levantamento</h3><div class="linkrow">'+r.grupos.map(function(g){return '<button type="button" class="btn" data-open-g="'+g+'">'+esc(G[g].nome)+'</button>';}).join("")+'</div></div>':'')+
    (r.datasets.length?'<div><h3>Datasets associados</h3><div class="linkrow">'+r.datasets.map(function(d){return '<button type="button" class="btn" data-open-d="'+d+'">'+esc(DS[d].nome)+'</button>';}).join("")+'</div></div>':'')+
    '<div><h3>Trabalhos no levantamento</h3><div style="display:grid;gap:.6rem">'+r.trabalhos.map(function(w){return workHtml(W[w]);}).join("")+'</div></div>'+
    '<div><h3>Coautores documentados ('+cs.length+')</h3><div class="people">'+cs.map(function(c){return personHtml(c.id);}).join("")+'</div></div>';
  abrirModal('<span class="chip t-lab">Pesquisador</span>',r.nome,corpo);
}
function openDataset(id){
  var d=DS[id];
  var corpo='<div><div class="modal-cover'+capaCls(d)+'">'+capa(d,"ds-"+d.id,dsPal(d),1260,420)+'</div>'+credito(d)+'</div>'+
    '<p class="rmeta" style="font-size:.95rem">'+dsGrupoTxt(d)+' · '+paisesCurto(d.paises)+'</p>'+
    
    '<p>'+esc(d.descricao)+'</p>'+
    '<div class="tags" aria-label="Categorias">'+d.tags.map(function(t){return '<span class="tag">'+esc(D.tagsDataset[t])+'</span>';}).join("")+'</div>'+
    '<div class="dcard"><h3>Ficha do dataset</h3>'+dsFicha(d)+'</div>'+
    '<div><h3>Links</h3><div class="linkrow">'+d.links.map(function(l){return ext(l.url,l.rotulo);}).join("")+'</div></div>'+
    '<div style="display:flex;align-items:center;gap:.6rem">'+favBtn("d:"+d.id,d.nome)+'<span class="rmeta">Favoritar este dataset</span></div>';
  abrirModal('<span class="chip t-equipe">Dataset</span>',d.nome,corpo);
}
document.addEventListener("click",function(e){
  var t;
  if((t=e.target.closest("[data-open-g]"))){openGroup(t.getAttribute("data-open-g"));return;}
  if((t=e.target.closest("[data-open-r]"))){openResearcher(t.getAttribute("data-open-r"));return;}
  if((t=e.target.closest("[data-open-d]"))){openDataset(t.getAttribute("data-open-d"));return;}
});

/* ---------- navegação ativa ---------- */
var links=Array.from(document.querySelectorAll(".mainnav a"));
function marcar(id){links.forEach(function(a){a.setAttribute("aria-current",a.getAttribute("href")==="#"+id?"true":"false");});}
if("IntersectionObserver" in window){
  var obs=new IntersectionObserver(function(ents){ents.forEach(function(en){if(en.isIntersecting) marcar(en.target.id);});},{rootMargin:"-45% 0px -50% 0px"});
  document.querySelectorAll("main section[id]").forEach(function(s){obs.observe(s);});
}
marcar((location.hash||"#inicio").slice(1));

/* ---------- dica com o texto completo dos seletores ---------- */
function dicaSelect(s){var o=s.options[s.selectedIndex];s.title=o?o.text:"";}
document.querySelectorAll("select").forEach(function(s){dicaSelect(s);s.addEventListener("change",function(){dicaSelect(s);});s.addEventListener("input",function(){dicaSelect(s);});});
document.addEventListener("click",function(){setTimeout(function(){document.querySelectorAll("select").forEach(dicaSelect);},0);});

/* ---------- inicialização ---------- */
renderStats(); renderQuick(); renderGrupos(); renderPesq(); renderDatasets(); renderFontes(); })();
