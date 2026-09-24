const products = [
  {n:'XTREME 250R',t:'motorcycle',cc:'250 cc',torque:'25 Nm @ 7250 rpm',about:'A premium performance motorcycle with a liquid-cooled 4-valve DOHC engine and sporty street-focused character.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xtreme_250r-1?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/xtreme-250r.html'},
  {n:'XPULSE 210',t:'motorcycle',cc:'210 cc',torque:'20.7 Nm @ 7250 rpm',about:'An adventure-focused motorcycle designed for touring and mixed road conditions.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xpulse_210-1?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/xpulse-210.html'},
  {n:'SPLENDOR+ XTEC 2.0',t:'motorcycle',cc:'97.2 cc',torque:'8.05 Nm @ 6000 rpm',about:'A feature-rich commuter in the Splendor family, built around practical everyday riding.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/splendorplus_xtec_2.0?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/splendor-plus-xtec-2-0.html'},
  {n:'SPLENDOR+',t:'motorcycle',cc:'97.2 cc',torque:'8.05 Nm @ 6000 rpm',about:'A practical everyday commuter with the familiar Splendor design and efficiency focus.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/splendor-plus-nav?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/splendor-plus.html'},
  {n:'SPLENDOR+ XTEC',t:'motorcycle',cc:'97.2 cc',torque:'8.05 Nm @ 6000 rpm',about:'A connected and feature-oriented version of the Splendor commuter platform.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/Splendor-Xtec-updated?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/splendor-plus-xtec.html'},
  {n:'HF DELUXE',t:'motorcycle',cc:'97.2 cc',torque:'8.05 Nm @ 6000 rpm',about:'A simple, practical commuter designed for everyday city use.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/hf-deluxe-new?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/hf-deluxe.html'},
  {n:'HF 100',t:'motorcycle',cc:'97.2 cc',torque:'8.05 Nm @ 6000 rpm',about:'A straightforward daily commuter focused on practicality and easy ownership.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/hf-100?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/hf-100.html'},
  {n:'GLAMOUR X',t:'motorcycle',cc:'125 cc',torque:'10.5 Nm @ 6500 rpm',about:'A sporty 125cc motorcycle combining commuter usability with a more dynamic design.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/glamour-x-navigation?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/glamour-x.html'},
  {n:'XTREME 125R',t:'motorcycle',cc:'125 cc',torque:'10.5 Nm @ 6500 rpm',about:'A sporty 125cc motorcycle with modern styling and performance-oriented character.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xtreme-new-05?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/xtreme-125r.html'},
  {n:'GLAMOUR',t:'motorcycle',cc:'125 cc',torque:'10.6 Nm @ 6000 rpm',about:'A stylish 125cc everyday motorcycle balancing commuter usability and design.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/glamour?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/glamour.html'},
  {n:'SUPER SPLENDOR XTEC',t:'motorcycle',cc:'124.7 cc',torque:'10.6 Nm @ 6000 rpm',about:'A premium commuter with a larger 125cc-class engine and practical comfort.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/super-splendor-xtec?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/super-splendor-xtec.html'},
  {n:'XTREME 160R 4V',t:'motorcycle',cc:'163.2 cc',torque:'14.6 Nm @ 6500 rpm',about:'A sporty 160cc performance motorcycle with an air-oil cooled 4-valve engine.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xtreme160R-4v-combat?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/xtreme-160r-4v.html'},
  {n:'XTREME 160R',t:'motorcycle',cc:'163.2 cc',torque:'14 Nm @ 6500 rpm',about:'A street-focused 160cc motorcycle with sporty styling and agile handling character.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xtreme160r-image-06?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/xtreme-160r.html'},
  {n:'XPULSE 200 4V',t:'motorcycle',cc:'199.6 cc',torque:'17.35 Nm @ 6500 rpm',about:'An adventure motorcycle suited to touring, rough roads and trail-oriented riding.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xpulse-200-4v?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/xpulse-200-4v.html'},
  {n:'KARIZMA XMR',t:'motorcycle',cc:'210 cc',torque:'20.4 Nm @ 7250 rpm',about:'A fully-faired performance motorcycle with a liquid-cooled 210cc 4-valve DOHC engine.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/Karizma_xmr?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/karizma-xmr.html'},
  {n:'SPLENDOR+ FLEX',t:'motorcycle',cc:'97.2 cc',torque:'8.3 Nm @ 6000 rpm with E85',about:'A Flex Fuel version of Splendor+ designed for compatible ethanol blends from E20 to E85.',variants:'Flex Fuel variant',img:'https://s7ap1.scene7.com/is/image/hmcl/splendor-plus-nav?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/flexible-fuel-e85.html?tab=splendor-plus'},
  {n:'HF DELUXE FLEX',t:'motorcycle',cc:'97.2 cc',torque:'8.3 Nm @ 6000 rpm with E85',about:'A Flex Fuel version of HF Deluxe designed for compatible ethanol blends from E20 to E85.',variants:'Flex Fuel variant',img:'https://s7ap1.scene7.com/is/image/hmcl/hf-deluxe-new?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/flexible-fuel-e85.html?tab=hf-deluxe'},
  {n:'PASSION+',t:'motorcycle',cc:'97.2 cc',torque:'8.05 Nm @ 6000 rpm',about:'A practical commuter motorcycle with everyday usability and a familiar Hero design.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/passion_-new-variant?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/motorcycles/passion-plus.html'},
  {n:'SUPER SPLENDOR XTEC 2.0',t:'motorcycle',cc:'124.7 cc',torque:'10.6 Nm @ 6000 rpm',about:'An updated 125cc premium commuter variant with practical everyday features.',variants:'Multiple variants / colours',img:'https://www.heromotocorp.com/content/dam/aem-eds-website/super-splendor-xtec-2-0/homepage/homepage-navigation.png',url:'https://www.heromotocorp.com/en-in/motorcycles/super-splendor-xtec.html'},
  {n:'DESTINI 110',t:'scooter',cc:'110 cc',torque:'8.7 Nm @ 5750 rpm',about:'A family-oriented scooter with a comfort-focused design for everyday city travel.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/destini-110-web?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/destini-110.html'},
  {n:'NEW DESTINI 125',t:'scooter',cc:'125 cc',torque:'10.4 Nm @ 5500 rpm',about:'A new 125cc family scooter with a comfort-oriented design and practical city usability.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/new-destini-125?fmt=webp-alpha',fallback:'https://s7ap1.scene7.com/is/image/hmcl/destini-110-web?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/new-destini-125.html'},
  {n:'XOOM 160',t:'scooter',cc:'156 cc',torque:'14 Nm @ 6250 rpm',about:'A high-capacity sporty scooter with a liquid-cooled 4-valve engine.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xoom_160-1?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/xoom-160.html'},
  {n:'XOOM 125',t:'scooter',cc:'124.6 cc',torque:'10.4 Nm @ 6000 rpm',about:'A sporty 125cc scooter designed for urban riding and everyday convenience.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xoom_125?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/xoom-125.html'},
  {n:'DESTINI PRIME',t:'scooter',cc:'124.6 cc',torque:'10.36 Nm @ 5500 rpm',about:'A practical 125cc family scooter focused on everyday comfort and usability.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/destini-prime?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/destini-prime.html'},
  {n:'XOOM 110',t:'scooter',cc:'110.9 cc',torque:'8.70 Nm @ 5750 rpm',about:'A sporty city scooter with modern styling and everyday practicality.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/xoom-110?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/xoom.html'},
  {n:'PLEASURE+ XTEC',t:'scooter',cc:'110.9 cc',torque:'8.70 Nm @ 5500 rpm',about:'A lightweight, practical scooter with comfort and connected-feature focus.',variants:'Multiple variants / colours',img:'https://s7ap1.scene7.com/is/image/hmcl/Pleasure-plus-xtec-nav?fmt=webp-alpha',url:'https://www.heromotocorp.com/en-in/scooters/pleasure-plus-xtec.html'}
];

const grid = document.getElementById('productGrid');
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalAbout = document.getElementById('modalAbout');
const modalEngine = document.getElementById('modalEngine');
const modalTorque = document.getElementById('modalTorque');
const modalVariants = document.getElementById('modalVariants');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const modalOfficial = document.getElementById('modalOfficial');

function enquireUrl(name){
  return 'https://wa.me/919897561012?text=' + encodeURIComponent(`Hello Magan Hero, I am interested in ${name}. Please share the current Agra price, variants, colours and availability.`);
}

function render(filter='all'){
  const list = filter==='all' ? products : products.filter(p=>p.t===filter);
  grid.innerHTML = list.map((p,i)=>`
    <article class="product">
      <div class="product-visual">
        <span class="type">${p.t==='motorcycle'?'BIKE':'SCOOTER'}</span>
        <img src="${p.img}" ${p.fallback ? `onerror="this.onerror=null;this.src='${p.fallback}'"` : ''} alt="${p.n}" loading="lazy">
      </div>
      <div class="product-body">
        <h3>${p.n}</h3>
        <div class="spec"><b>${p.cc}</b> • ${p.torque}</div>
        <div class="chips"><span class="chip">${p.t==='motorcycle'?'Motorcycle':'Scooter'}</span><span class="chip">${p.variants}</span></div>
        <p>${p.about}</p>
        <div class="price-row"><span>Price</span><b>On enquiry</b></div>
        <div class="card-actions"><button class="product-link" data-index="${i}" data-filter="${filter}">View About & Specs</button><a class="wa-mini" href="${enquireUrl(p.n)}" target="_blank">WhatsApp</a></div>
      </div>
    </article>`).join('');

  grid.querySelectorAll('.product-link').forEach(btn=>btn.addEventListener('click',()=>openModal(list[Number(btn.dataset.index)])));
}

function openModal(p){
  modalImage.src=p.img; modalImage.alt=p.n;
  if(p.fallback) modalImage.onerror=()=>{modalImage.onerror=null;modalImage.src=p.fallback;};
  modalTitle.textContent=p.n;
  modalType.textContent=p.t==='motorcycle'?'HERO MOTORCYCLE':'HERO SCOOTER';
  modalAbout.textContent=p.about;
  modalEngine.textContent=p.cc;
  modalTorque.textContent=p.torque;
  modalVariants.textContent=p.variants;
  modalWhatsapp.href=enquireUrl(p.n);
  modalOfficial.href=p.url;
  modal.classList.add('show'); modal.setAttribute('aria-hidden','false'); document.body.classList.add('modal-open');
}
function closeModal(){modal.classList.remove('show');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open');}

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.filter);
}));
document.querySelector('.modal-close').addEventListener('click',closeModal);
modal.addEventListener('click',e=>{if(e.target.dataset.close) closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeModal();});

const menu=document.querySelector('.menu');
const nav=document.getElementById('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
render();
