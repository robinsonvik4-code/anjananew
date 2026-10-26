
// ===== CENTRAL CONFIG: replace demo content here =====
const CONFIG={phone:"",whatsapp:"",email:"",address:"",formEndpoint:"",catalogueUrl:"",social:[/* {label:"Instagram",url:"https://…"} */],
collections:[["Mortise Locks","Lock bodies for interior and entry doors","mortise"],["Door Handles","Lever and pull handles for every door","handle"],["Main Door Locks","Locks for the main entrance","main"],["Aldrops & Door Kits","Latching hardware and door kits","aldrop"],["Cabinet Handles","Finishing touches for cabinets and furniture","cabinet"],["Hardware Accessories","Small fittings that complete a door","acc"]],
products:[{"name": "Mortice Handle", "type": "handle", "model": "AI-1001 8-inch", "finishes": "", "image": "assets/product-067.png"}, {"name": "Mortice Lock", "type": "mortise", "model": "AI-CY BULLET 9-inch", "finishes": "", "image": "assets/product-153.png"}, {"name": "Door Lock", "type": "main", "model": "AI-SUPER 2in1 BULLET", "finishes": "", "image": "assets/product-159.png"}, {"name": "Aldrop", "type": "aldrop", "model": "AI-301", "finishes": "", "image": "assets/product-034.png"}, {"name": "Cabinet Handle", "type": "cabinet", "model": "AI-SQUARE", "finishes": "", "image": "assets/product-001.png"}, {"name": "Door Stopper", "type": "acc", "model": "AI-ROUND DOUBLE", "finishes": "", "image": "assets/product-088.png"}, {"name": "Pull Handle", "type": "handle", "model": "AI-FLAT SQUARE", "finishes": "", "image": "assets/product-027.png"}, {"name": "Iron Mortice Handle", "type": "handle", "model": "AI-601", "finishes": "", "image": "assets/product-075.png"}, {"name": "Door Kit", "type": "aldrop", "model": "AI-CRETA WELDED", "finishes": "", "image": "assets/product-060.png"}, {"name": "Cupboard Lock", "type": "main", "model": "AI-EUROPPA CUPBOARD LOCK", "finishes": "", "image": "assets/product-143.png"}, {"name": "Padlock", "type": "main", "model": "50MM", "finishes": "", "image": "assets/product-151.png"}, {"name": "Rim Lock", "type": "main", "model": "RIM LOCK", "finishes": "", "image": "assets/product-152.png"}]};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)],R=matchMedia("(prefers-reduced-motion:reduce)").matches||!(window.CSS&&CSS.supports("transform-style","preserve-3d"));
document.documentElement.classList.add("js");if(R)document.documentElement.classList.add("static");
const A=t=>{const s='fill="url(#metal-gradient)" stroke="#5d625b" stroke-width="1.2"',k='fill="#171A16"',m={
handle:`<circle cx="150" cy="100" r="26" ${s}/><rect x="36" y="89" width="124" height="22" rx="11" ${s}/><circle cx="150" cy="100" r="7" ${k} opacity=".3"/>`,
mortise:`<rect x="62" y="22" width="76" height="156" rx="5" ${s}/><circle cx="100" cy="82" r="20" ${s}/><circle cx="100" cy="82" r="6" ${k}/><rect x="108" y="124" width="52" height="16" rx="3" ${s}/><circle cx="76" cy="38" r="3" ${k}/><circle cx="124" cy="162" r="3" ${k}/>`,
main:`<rect x="52" y="14" width="96" height="172" rx="14" ${s}/><circle cx="100" cy="62" r="14" ${k}/><rect x="97" y="62" width="6" height="22" ${k}/><circle cx="100" cy="132" r="26" ${s}/><circle cx="100" cy="132" r="9" ${k} opacity=".3"/>`,
aldrop:`<rect x="40" y="70" width="28" height="60" rx="5" ${s}/><rect x="132" y="70" width="28" height="60" rx="5" ${s}/><rect x="24" y="92" width="150" height="16" rx="8" ${s}/><circle cx="176" cy="100" r="11" ${s}/>`,
hinge:`<rect x="38" y="26" width="58" height="148" rx="4" ${s}/><rect x="104" y="26" width="58" height="148" rx="4" ${s}/><rect x="93" y="22" width="14" height="156" rx="7" ${s}/>`+[50,100,150].map(y=>`<circle cx="58" cy="${y}" r="4" ${k}/><circle cx="142" cy="${y}" r="4" ${k}/>`).join(""),
acc:`<rect x="93" y="62" width="14" height="84" rx="4" ${s}/><circle cx="100" cy="156" r="22" ${s}/><circle cx="100" cy="48" r="20" fill="#2a2d28"/>`,
duo:`<g transform="translate(-30 -26) scale(1.1)">${""}<circle cx="150" cy="100" r="26" ${s}/><rect x="36" y="89" width="124" height="22" rx="11" ${s}/></g><g transform="translate(30 70) scale(.62)"><rect x="52" y="14" width="96" height="172" rx="14" ${s}/><circle cx="100" cy="62" r="14" ${k}/><circle cx="100" cy="132" r="26" ${s}/></g>`};
return `<svg viewBox="0 0 200 200" aria-hidden="true">${m[t]}</svg>`};
const photo=(p)=>`<img class="product-photo" src="${p.image}" alt="${p.model} — ${p.name}" loading="lazy" width="600" height="600">`;
const cfg=CONFIG,digits=v=>(v||"").replace(/\D/g,""),okTel=digits(cfg.phone).length>=8,okWa=/^\d{8,15}$/.test(digits(cfg.whatsapp)),okMail=/^\S+@\S+\.\S+$/.test(cfg.email||"");
$("#coll").innerHTML=cfg.collections.map((c,i)=>`<article class="card rv" style="--i:${i%3}"><div class="img">${photo(cfg.products.find(p=>p.type===c[2]))}</div><div class="bd"><h3>${c[0]}</h3><p>${c[1]}</p><a href="#featured" data-hl="${i}">View featured products →</a></div></article>`).join("");
$("#prods").innerHTML=cfg.products.map((p,i)=>`<article class="card rv" id="p${i}" style="--i:${i%3}"><div class="img">${photo(p)}</div><div class="bd"><h3>${p.name}</h3><p>${p.model?"Model: "+p.model:"Explore this category"}</p><p>${p.finishes?"Finishes: "+p.finishes:"Enquire for available finishes"}</p><button class="btn ghost" data-i="${i}">View Details</button></div></article>`).join("");
$("#scart").innerHTML=photo(cfg.products[0]);$("#abart").innerHTML='<img src="assets/interior.jpg" alt="Warm contemporary living space with timber and natural textures" loading="lazy" width="1600" height="1067">';
const info=[okTel&&`<a href="tel:${digits(cfg.phone)}">${cfg.phone}</a>`,okMail&&`<a href="mailto:${cfg.email}">${cfg.email}</a>`,cfg.address&&`<span>${cfg.address.replace(/</g,"&lt;")}</span>`].filter(Boolean).join("");
$("#info").innerHTML=info;$("#finfo").innerHTML=info;$("#soc").innerHTML=cfg.social.filter(s=>/^https?:\/\//.test(s.url)).map(s=>`<li><a href="${s.url}" rel="noopener" target="_blank">${s.label}</a></li>`).join("");
if(/^https?:\/\//.test(cfg.catalogueUrl)){$("#dl").hidden=false;$("#dl").href=cfg.catalogueUrl}
$("#yr").textContent=new Date().getFullYear();
// nav + anchors
const hero=$("#home"),nav=$("#nav"),mb=$("#mb"),hd=$("#hd");
const menu=o=>{nav.classList.toggle("open",o);mb.setAttribute("aria-expanded",o);mb.setAttribute("aria-label",o?"Close menu":"Open menu")};
mb.onclick=()=>menu(!nav.classList.contains("open"));
const go=id=>{const t=$(id);if(!t)return;const inH=scrollY<hero.offsetHeight-innerHeight/2;scrollTo({top:id=="#home"?0:t.getBoundingClientRect().top+scrollY-85,behavior:"auto"})};
const setF=(t,p)=>{if(t)$("#t").value=t;if(p!=null)$("#pi").value=p;wa()};
document.addEventListener("click",e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;e.preventDefault();menu(false);if(a.dataset.type)setF(a.dataset.type);
if(a.dataset.hl!=null){$("#product-search").value="";filterProducts("all");const category=cfg.collections[+a.dataset.hl][2];const c=$("#p"+cfg.products.findIndex(p=>p.type===category));$$(".flash").forEach(x=>x.classList.remove("flash"));setTimeout(()=>c.classList.add("flash"),500);setTimeout(()=>c.classList.remove("flash"),3500)}
go(a.getAttribute("href"));if(a.getAttribute("href")=="#contact")setTimeout(()=>$("#n").focus({preventScroll:true}),700)});
document.addEventListener("keydown",e=>{if(e.key=="Escape")menu(false)});
// modal
const dlg=$("#dlg");let cur=0;
document.addEventListener("click",e=>{const b=e.target.closest("[data-i]");if(!b)return;cur=+b.dataset.i;const p=cfg.products[cur];$("#dimg").innerHTML=photo(p);$("#dt").textContent=p.name;$("#dm").textContent=p.model?"Model: "+p.model:"Ask us about available models";$("#df").textContent=p.finishes?"Finishes: "+p.finishes:"Confirm available finishes with our team";dlg.showModal()});
$("#dx").onclick=()=>dlg.close();dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
$("#de").onclick=()=>{dlg.close();setF("Product enquiry",cfg.products[cur].model+" — "+cfg.products[cur].name);go("#contact");setTimeout(()=>$("#n").focus({preventScroll:true}),700)};
// form
function wa(){const w=$("#wa");if(!okWa){w.hidden=true;return}const pr=$("#pi").value.trim(),tx=`Hello ANJNA Locks & Hardware, I have a ${$("#t").value.toLowerCase()}.${pr?" Product: "+pr+".":""}${$("#n").value?" Name: "+$("#n").value+".":""}${$("#c").value?" City: "+$("#c").value+".":""}${$("#m").value?" "+$("#m").value:""}`;w.href=`https://wa.me/${digits(cfg.whatsapp)}?text=${encodeURIComponent(tx)}`;w.hidden=false}
$("#f").addEventListener("input",wa);wa();
$("#f").addEventListener("submit",async e=>{e.preventDefault();const st=$("#st");st.textContent="";
const chk=[["n",v=>v.trim().length>1,"Please enter your name."],["p",v=>/^\d{10,15}$/.test(digits(v)),"Please enter a valid phone number."],["c",v=>v.trim().length>1,"Please enter your city."]];let bad=null;
chk.forEach(([id,fn,msg])=>{const el=$("#"+id),ok=fn(el.value);el.setAttribute("aria-invalid",!ok);$("#e"+id).textContent=ok?"":msg;if(!ok&&!bad)bad=el});
if(bad){bad.focus();return}
if(!cfg.formEndpoint){if(okWa){wa();st.textContent="Your enquiry is ready. Use the WhatsApp button to send it.";return}const body=["ANJNA Locks & Hardware — Enquiry",...[["Name","n"],["Phone","p"],["City","c"],["Type","t"],["Product","pi"],["Message","m"]].map(([label,id])=>label+": "+$("#"+id).value)].join("\n");const url=URL.createObjectURL(new Blob([body],{type:"text/plain"}));const a=document.createElement("a");a.href=url;a.download="ANJNA-enquiry.txt";a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);st.textContent="Your enquiry has been downloaded. It has not been sent. Contact details are awaiting setup.";return}
try{const r=await fetch(cfg.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:$("#n").value,phone:$("#p").value,city:$("#c").value,type:$("#t").value,product:$("#pi").value,message:$("#m").value})});st.textContent=r.ok?"Thank you — your enquiry has been sent.":"Sorry, the enquiry could not be sent. Please try again."}catch(_){st.textContent="Sorry, the enquiry could not be sent. Please check your connection and try again."}});
if(!cfg.formEndpoint)$("#st").textContent=okWa?"Prepare your enquiry, then send it through WhatsApp.":"Save your enquiry as a text file. Online sending will be available once contact details are added.";else $("#f button[type=submit]").textContent="Send Enquiry";
// reveal
if("IntersectionObserver"in window){const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});$$(".rv").forEach(x=>io.observe(x))}else $$(".rv").forEach(x=>x.classList.add("in"));
// Product filters
let currentFilter="all";function filterProducts(category){currentFilter=category;$$("[data-filter]").forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle("active",active);b.setAttribute("aria-pressed",active)});cfg.products.forEach((p,i)=>{$("#p"+i).hidden=(category!=="all"&&!(category==="locks"?["mortise","main"]:category==="handles"?["handle","cabinet"]:["aldrop","hinge","acc"]).includes(p.type))||!(p.name+" "+p.model).toLowerCase().includes($("#product-search").value.trim().toLowerCase())});const count=cfg.products.filter((_,i)=>!$("#p"+i).hidden).length;$("#search-status").textContent=count?count+" products":"No matching products. Try another model or category."}
$$("[data-filter]").forEach(b=>b.onclick=()=>filterProducts(b.dataset.filter));

// Static hero: no door, pointer, camera or scroll animation.
function updateHeader(){hd.classList.toggle("solid",hero.getBoundingClientRect().bottom<80)}
addEventListener("scroll",updateHeader,{passive:true});addEventListener("resize",updateHeader);updateHeader();

// Only expose contact actions when verified contact details are configured.
if(okWa){$("#dock-contact").href="https://wa.me/"+digits(cfg.whatsapp);$("#dock-contact").innerHTML="↗ <span>WhatsApp</span>";$("#dock-contact").target="_blank";$("#dock-contact").rel="noopener"}
if(okTel){const call=document.createElement("a");call.href="tel:"+digits(cfg.phone);call.innerHTML="☎ <span>Call</span>";$(".mobile-dock").insertBefore(call,$("#dock-contact"))}

$("#product-search").addEventListener("input",()=>filterProducts(currentFilter));



// The scroll position controls the paused entrance film in both directions.
const film=document.querySelector('#hero-video'),stage=document.querySelector('#scroll-video-stage'),hint=document.querySelector('#scroll-door-hint'),progressFill=document.querySelector('#door-progress-fill');
const filmMotion=matchMedia('(prefers-reduced-motion: reduce)');
let desiredTime=0,scrollFrame=0;
film.muted=true;film.defaultMuted=true;film.pause();
function seekDoor(){
 if(!Number.isFinite(film.duration)||film.readyState<1||film.seeking)return;
 if(Math.abs(film.currentTime-desiredTime)>0.025)film.currentTime=desiredTime;
}
function updateDoor(){
 scrollFrame=0;
 const distance=Math.max(1,hero.offsetHeight-stage.offsetHeight);
 const progress=Math.min(1,Math.max(0,-hero.getBoundingClientRect().top/distance));
 desiredTime=filmMotion.matches?0:progress*Math.max(0,(Number.isFinite(film.duration)?film.duration:0)-0.05);
 progressFill.style.width=(progress*100)+'%';
 hint.textContent=filmMotion.matches?'Explore the collection ↓':progress>.97?'Scroll to explore the collection ↓':'Scroll to open the door ↓';
 seekDoor();
}
function queueDoor(){if(!scrollFrame)scrollFrame=requestAnimationFrame(updateDoor)}
film.addEventListener('seeked',seekDoor);
['loadedmetadata','loadeddata','canplay'].forEach(event=>film.addEventListener(event,queueDoor));
film.addEventListener('error',()=>{hint.textContent='Explore the collection ↓'});
film.addEventListener('play',()=>film.pause());
addEventListener('scroll',queueDoor,{passive:true});addEventListener('resize',queueDoor);
filmMotion.addEventListener('change',queueDoor);queueDoor();
