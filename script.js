/* =========================================================
   MAGAN HERO SALES POINT
   FINAL SCRIPT - PHASE 1
   ========================================================= */


/* =========================================================
   1. PRODUCT DATA
   ========================================================= */

const products = [
  {
    n: 'XTREME 250R',
    t: 'motorcycle',
    cc: '250 cc',
    torque: '25 Nm @ 7250 rpm',
    about: 'A premium performance motorcycle with a liquid-cooled 4-valve DOHC engine and sporty street-focused character.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme_250r-1?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-250r.html'
  },

  {
    n: 'XPULSE 210',
    t: 'motorcycle',
    cc: '210 cc',
    torque: '20.7 Nm @ 7250 rpm',
    about: 'An adventure-focused motorcycle designed for touring and mixed road conditions.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xpulse_210-1?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/xpulse-210.html'
  },

  {
    n: 'SPLENDOR+ XTEC 2.0',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.05 Nm @ 6000 rpm',
    about: 'A feature-rich commuter in the Splendor family, built around practical everyday riding.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/splendorplus_xtec_2.0?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/splendor-plus-xtec-2-0.html'
  },

  {
    n: 'SPLENDOR+',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.05 Nm @ 6000 rpm',
    about: 'A practical everyday commuter with the familiar Splendor design and efficiency focus.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/splendor-plus-nav?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/splendor-plus.html'
  },

  {
    n: 'SPLENDOR+ XTEC',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.05 Nm @ 6000 rpm',
    about: 'A connected and feature-oriented version of the Splendor commuter platform.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/Splendor-Xtec-updated?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/splendor-plus-xtec.html'
  },

  {
    n: 'HF DELUXE',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.05 Nm @ 6000 rpm',
    about: 'A simple, practical commuter designed for everyday city use.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/hf-deluxe-new?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/hf-deluxe.html'
  },

  {
    n: 'HF 100',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.05 Nm @ 6000 rpm',
    about: 'A straightforward daily commuter focused on practicality and easy ownership.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/hf-100?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/hf-100.html'
  },

  {
    n: 'GLAMOUR X',
    t: 'motorcycle',
    cc: '125 cc',
    torque: '10.5 Nm @ 6500 rpm',
    about: 'A sporty 125cc motorcycle combining commuter usability with a more dynamic design.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/glamour-x-navigation?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/glamour-x.html'
  },

  {
    n: 'XTREME 125R',
    t: 'motorcycle',
    cc: '125 cc',
    torque: '10.5 Nm @ 6500 rpm',
    about: 'A sporty 125cc motorcycle with modern styling and performance-oriented character.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme-new-05?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-125r.html'
  },

  {
    n: 'GLAMOUR',
    t: 'motorcycle',
    cc: '125 cc',
    torque: '10.6 Nm @ 6000 rpm',
    about: 'A stylish 125cc everyday motorcycle balancing commuter usability and design.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/glamour?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/glamour.html'
  },

  {
    n: 'SUPER SPLENDOR XTEC',
    t: 'motorcycle',
    cc: '124.7 cc',
    torque: '10.6 Nm @ 6000 rpm',
    about: 'A premium commuter with a larger 125cc-class engine and practical comfort.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/super-splendor-xtec?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/super-splendor-xtec.html'
  },

  {
    n: 'XTREME 160R 4V',
    t: 'motorcycle',
    cc: '163.2 cc',
    torque: '14.6 Nm @ 6500 rpm',
    about: 'A sporty 160cc performance motorcycle with an air-oil cooled 4-valve engine.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme160R-4v-combat?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-160r-4v.html'
  },

  {
    n: 'XTREME 160R',
    t: 'motorcycle',
    cc: '163.2 cc',
    torque: '14 Nm @ 6500 rpm',
    about: 'A street-focused 160cc motorcycle with sporty styling and agile handling character.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xtreme160r-image-06?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-160r.html'
  },

  {
    n: 'XPULSE 200 4V',
    t: 'motorcycle',
    cc: '199.6 cc',
    torque: '17.35 Nm @ 6500 rpm',
    about: 'An adventure motorcycle suited to touring, rough roads and trail-oriented riding.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xpulse-200-4v?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/xpulse-200-4v.html'
  },

  {
    n: 'KARIZMA XMR',
    t: 'motorcycle',
    cc: '210 cc',
    torque: '20.4 Nm @ 7250 rpm',
    about: 'A fully-faired performance motorcycle with a liquid-cooled 210cc 4-valve DOHC engine.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/Karizma_xmr?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/karizma-xmr.html'
  },

  {
    n: 'SPLENDOR+ FLEX',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.3 Nm @ 6000 rpm with E85',
    about: 'A Flex Fuel version of Splendor+ designed for compatible ethanol blends from E20 to E85.',
    variants: 'Flex Fuel variant',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/splendor-plus-nav?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/flexible-fuel-e85.html?tab=splendor-plus'
  },

  {
    n: 'HF DELUXE FLEX',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.3 Nm @ 6000 rpm with E85',
    about: 'A Flex Fuel version of HF Deluxe designed for compatible ethanol blends from E20 to E85.',
    variants: 'Flex Fuel variant',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/hf-deluxe-new?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/flexible-fuel-e85.html?tab=hf-deluxe'
  },

  {
    n: 'PASSION+',
    t: 'motorcycle',
    cc: '97.2 cc',
    torque: '8.05 Nm @ 6000 rpm',
    about: 'A practical commuter motorcycle with everyday usability and a familiar Hero design.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/passion_-new-variant?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/passion-plus.html'
  },

  {
    n: 'SUPER SPLENDOR XTEC 2.0',
    t: 'motorcycle',
    cc: '124.7 cc',
    torque: '10.6 Nm @ 6000 rpm',
    about: 'An updated 125cc premium commuter variant with practical everyday features.',
    variants: 'Multiple variants / colours',
    img: 'https://www.heromotocorp.com/content/dam/aem-eds-website/super-splendor-xtec-2-0/homepage/homepage-navigation.png',
    url: 'https://www.heromotocorp.com/en-in/motorcycles/super-splendor-xtec.html'
  },

  {
    n: 'DESTINI 110',
    t: 'scooter',
    cc: '110 cc',
    torque: '8.7 Nm @ 5750 rpm',
    about: 'A family-oriented scooter with a comfort-focused design for everyday city travel.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/destini-110-web?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/destini-110.html'
  },

  {
    n: 'NEW DESTINI 125',
    t: 'scooter',
    cc: '125 cc',
    torque: '10.4 Nm @ 5500 rpm',
    about: 'A new 125cc family scooter with a comfort-oriented design and practical city usability.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/new-destini-125?fmt=webp-alpha',
    fallback: 'https://s7ap1.scene7.com/is/image/hmcl/destini-110-web?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/new-destini-125.html'
  },

  {
    n: 'XOOM 160',
    t: 'scooter',
    cc: '156 cc',
    torque: '14 Nm @ 6250 rpm',
    about: 'A high-capacity sporty scooter with a liquid-cooled 4-valve engine.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xoom_160-1?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/xoom-160.html'
  },

  {
    n: 'XOOM 125',
    t: 'scooter',
    cc: '124.6 cc',
    torque: '10.4 Nm @ 6000 rpm',
    about: 'A sporty 125cc scooter designed for urban riding and everyday convenience.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xoom_125?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/xoom-125.html'
  },

  {
    n: 'DESTINI PRIME',
    t: 'scooter',
    cc: '124.6 cc',
    torque: '10.36 Nm @ 5500 rpm',
    about: 'A practical 125cc family scooter focused on everyday comfort and usability.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/destini-prime?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/destini-prime.html'
  },

  {
    n: 'XOOM 110',
    t: 'scooter',
    cc: '110.9 cc',
    torque: '8.70 Nm @ 5750 rpm',
    about: 'A sporty city scooter with modern styling and everyday practicality.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/xoom-110?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/xoom.html'
  },

  {
    n: 'PLEASURE+ XTEC',
    t: 'scooter',
    cc: '110.9 cc',
    torque: '8.70 Nm @ 5500 rpm',
    about: 'A lightweight, practical scooter with comfort and connected-feature focus.',
    variants: 'Multiple variants / colours',
    img: 'https://s7ap1.scene7.com/is/image/hmcl/Pleasure-plus-xtec-nav?fmt=webp-alpha',
    url: 'https://www.heromotocorp.com/en-in/scooters/pleasure-plus-xtec.html'
  }
];


/* =========================================================
   2. PDF PRICE LIST
   ========================================================= */

const modelPrices = {

  'HF DELUXE': 59999,

  'SPLENDOR+': 77349,
  'SPLENDOR+ XTEC': 81537,
  'SPLENDOR+ XTEC 2.0': 83967,

  'PASSION+': 80273,

  'GLAMOUR': 81170,
  'GLAMOUR X': 90811,

  'SUPER SPLENDOR XTEC': 81518,
  'SUPER SPLENDOR XTEC 2.0': 100133,

  'XTREME 125R': 91000,
  'XTREME 160R': 118846,
  'XTREME 160R 4V': 134578,

  'PLEASURE+ XTEC': 77863,

  'XOOM 110': 71303,
  'XOOM 125': 85883,

  'DESTINI PRIME': 77728,
  'DESTINI 110': 75600,
  'NEW DESTINI 125': 82465
};


/* =========================================================
   3. BASIC ELEMENTS
   ========================================================= */

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


/* =========================================================
   4. PRICE FORMAT
   ========================================================= */

function formatPrice(price) {

  if (!price) {
    return 'On enquiry';
  }

  return '₹' + new Intl.NumberFormat('en-IN').format(price);
}


function getPrice(product) {

  return modelPrices[product.n] || null;
}


/* =========================================================
   5. WHATSAPP
   ========================================================= */

function enquireUrl(name, price = null) {

  let message =
    `Hello Magan Hero,\n\n` +
    `I am interested in ${name}.\n`;

  if (price) {
    message +=
      `Ex-Showroom Price: ${formatPrice(price)}\n`;
  }

  message +=
    `\nPlease share the latest on-road price, ` +
    `variants, colours and availability.`;

  return (
    'https://wa.me/919897561012?text=' +
    encodeURIComponent(message)
  );
}


/* =========================================================
   6. PHASE 1 UI CSS
   ========================================================= */

const phase1Styles = document.createElement('style');

phase1Styles.textContent = `

/* ================= PHASE 1 TOOLBAR ================= */

.phase1-toolbar {
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto 30px;
  padding: 20px;

  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 18px;

  box-shadow: 0 8px 30px rgba(0,0,0,.06);
}

.phase1-search {
  width: 100%;
  box-sizing: border-box;

  padding: 14px 18px;

  border: 1px solid #dddddd;
  border-radius: 12px;

  font-size: 15px;
  outline: none;

  transition: .2s;
}

.phase1-search:focus {
  border-color: #e31820;
  box-shadow: 0 0 0 3px rgba(227,24,32,.08);
}

.phase1-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 14px;
}

.phase1-filter-btn {
  border: 1px solid #dddddd;
  background: #ffffff;

  color: #333333;

  padding: 9px 15px;

  border-radius: 9px;

  cursor: pointer;

  font-size: 13px;
  font-weight: 700;

  transition: .2s;
}

.phase1-filter-btn:hover,
.phase1-filter-btn.active {
  background: #e31820;
  border-color: #e31820;
  color: #ffffff;
}

.phase1-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  margin-top: 16px;
}

.phase1-action-btn {
  border: 0;

  background: #111318;
  color: #ffffff;

  padding: 11px 17px;

  border-radius: 10px;

  cursor: pointer;

  font-size: 13px;
  font-weight: 800;

  transition: .2s;
}

.phase1-action-btn:hover {
  background: #e31820;
  transform: translateY(-1px);
}

.phase1-results {
  margin-top: 12px;

  color: #777777;

  font-size: 12px;
}


/* ================= PRODUCT PRICE ================= */

.phase1-price {
  color: #e31820 !important;
  font-size: 18px !important;
  font-weight: 900 !important;
}


/* ================= COMPARE CHECKBOX ================= */

.compare-control {
  position: absolute;
  top: 12px;
  right: 12px;

  z-index: 4;

  display: flex;
  align-items: center;
  gap: 5px;

  padding: 6px 9px;

  border-radius: 8px;

  background: rgba(255,255,255,.95);

  color: #222;

  font-size: 11px;
  font-weight: 800;

  box-shadow: 0 4px 15px rgba(0,0,0,.12);
}

.compare-control input {
  accent-color: #e31820;
}


/* ================= FLOATING COMPARE ================= */

.compare-bar {
  position: fixed;

  left: 50%;
  bottom: 22px;

  transform: translateX(-50%);

  z-index: 9998;

  width: min(600px, calc(100% - 30px));

  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  padding: 13px 15px;

  background: #111318;
  color: #ffffff;

  border-radius: 15px;

  box-shadow: 0 15px 45px rgba(0,0,0,.3);
}

.compare-bar button {
  border: 0;

  background: #e31820;
  color: #ffffff;

  padding: 9px 14px;

  border-radius: 8px;

  font-weight: 800;

  cursor: pointer;
}


/* ================= COMPARE MODAL ================= */

.phase1-overlay {
  position: fixed;

  inset: 0;

  z-index: 10000;

  display: none;

  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(0,0,0,.72);
}

.phase1-overlay.show {
  display: flex;
}

.phase1-panel {
  width: min(1000px, 100%);

  max-height: 90vh;

  overflow: auto;

  background: #ffffff;

  border-radius: 20px;

  padding: 25px;

  box-sizing: border-box;
}

.phase1-panel-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 15px;

  margin-bottom: 20px;
}

.phase1-panel-header h2 {
  margin: 0;

  font-size: 23px;
}

.phase1-close {
  border: 0;

  background: #f1f1f1;

  width: 38px;
  height: 38px;

  border-radius: 50%;

  cursor: pointer;

  font-size: 20px;
}

.compare-table-wrap {
  overflow-x: auto;
}

.compare-table {
  width: 100%;

  border-collapse: collapse;

  min-width: 650px;
}

.compare-table th,
.compare-table td {
  padding: 13px;

  border-bottom: 1px solid #eeeeee;

  text-align: left;

  vertical-align: top;
}

.compare-table th {
  background: #fafafa;
}

.compare-product-name {
  color: #e31820;

  font-weight: 900;
}

.compare-product-price {
  font-size: 18px;

  font-weight: 900;
}


/* ================= CALCULATOR ================= */

.calculator-grid {
  display: grid;

  grid-template-columns:
    repeat(2, minmax(0,1fr));

  gap: 14px;
}

.calc-field {
  display: flex;

  flex-direction: column;

  gap: 6px;
}

.calc-field label {
  font-size: 12px;

  font-weight: 800;

  color: #555;
}

.calc-field input,
.calc-field select {
  width: 100%;

  box-sizing: border-box;

  padding: 11px;

  border: 1px solid #dddddd;

  border-radius: 9px;

  outline: none;
}

.calc-result {
  margin-top: 20px;

  padding: 18px;

  border-radius: 14px;

  background: #111318;

  color: #ffffff;
}

.calc-result-row {
  display: flex;

  justify-content: space-between;

  gap: 15px;

  margin: 8px 0;
}

.calc-total {
  margin-top: 12px;

  padding-top: 12px;

  border-top: 1px solid rgba(255,255,255,.2);

  font-size: 21px;

  font-weight: 900;

  color: #ffffff;
}

.calc-note {
  margin-top: 10px;

  color: #aaaaaa;

  font-size: 11px;
}

.calc-whatsapp {
  width: 100%;

  margin-top: 15px;

  border: 0;

  padding: 12px;

  border-radius: 9px;

  background: #e31820;

  color: #ffffff;

  font-weight: 900;

  cursor: pointer;
}


/* ================= NO RESULT ================= */

.no-products {
  grid-column: 1 / -1;

  padding: 50px 20px;

  text-align: center;

  color: #777;
}

.no-products h3 {
  margin-bottom: 7px;

  color: #222;
}


/* ================= MOBILE ================= */

@media(max-width:700px) {

  .phase1-toolbar {
    padding: 15px;
  }

  .phase1-filter-btn {
    flex: 1 1 auto;
  }

  .calculator-grid {
    grid-template-columns: 1fr;
  }

  .compare-bar {
    bottom: 12px;
  }

  .phase1-panel {
    padding: 18px;
  }

}

`;

document.head.appendChild(phase1Styles);


/* =========================================================
   7. CREATE PHASE 1 TOOLBAR
   ========================================================= */

function createPhase1Toolbar() {

  if (!grid || document.getElementById('phase1Toolbar')) {
    return;
  }

  const toolbar = document.createElement('div');

  toolbar.id = 'phase1Toolbar';

  toolbar.className = 'phase1-toolbar';

  toolbar.innerHTML = `

    <input
      type="search"
      id="phase1Search"
      class="phase1-search"
      placeholder="🔍 Search bike or scooter..."
      autocomplete="off"
    >

    <div class="phase1-controls">

      <button
        class="phase1-filter-btn active"
        data-price-filter="all">
        All Prices
      </button>

      <button
        class="phase1-filter-btn"
        data-price-filter="under70">
        Under ₹70K
      </button>

      <button
        class="phase1-filter-btn"
        data-price-filter="70to90">
        ₹70K - ₹90K
      </button>

      <button
        class="phase1-filter-btn"
        data-price-filter="above90">
        ₹90K+
      </button>

    </div>

    <div class="phase1-actions">

      <button
        class="phase1-action-btn"
        id="openCalculator">
        💰 Price Calculator
      </button>

      <button
        class="phase1-action-btn"
        id="clearPhase1Filters">
        Clear Filters
      </button>

    </div>

    <div
      class="phase1-results"
      id="phase1Results">
    </div>

  `;

  grid.parentNode.insertBefore(toolbar, grid);


  /* Search */

  document
    .getElementById('phase1Search')
    .addEventListener('input', applyPhase1Filters);


  /* Price filters */

  document
    .querySelectorAll('[data-price-filter]')
    .forEach(button => {

      button.addEventListener('click', () => {

        document
          .querySelectorAll('[data-price-filter]')
          .forEach(btn =>
            btn.classList.remove('active')
          );

        button.classList.add('active');

        applyPhase1Filters();

      });

    });


  /* Calculator */

  document
    .getElementById('openCalculator')
    .addEventListener('click', openCalculator);


  /* Clear */

  document
    .getElementById('clearPhase1Filters')
    .addEventListener('click', () => {

      document.getElementById('phase1Search').value = '';

      document
        .querySelectorAll('[data-price-filter]')
        .forEach(btn =>
          btn.classList.remove('active')
        );

      document
        .querySelector('[data-price-filter="all"]')
        .classList.add('active');

      render(currentVehicleFilter);

    });

}


/* =========================================================
   8. FILTER STATE
   ========================================================= */

let currentVehicleFilter = 'all';

let currentPriceFilter = 'all';

let currentSearch = '';


/* =========================================================
   9. FILTER PRODUCTS
   ========================================================= */

function getFilteredProducts() {

  let list = [...products];


  /* Vehicle filter */

  if (currentVehicleFilter !== 'all') {

    list = list.filter(
      p => p.t === currentVehicleFilter
    );

  }


  /* Search */

  if (currentSearch.trim()) {

    const search = currentSearch
      .trim()
      .toLowerCase();

    list = list.filter(p => {

      return (

        p.n.toLowerCase().includes(search) ||

        p.t.toLowerCase().includes(search) ||

        p.cc.toLowerCase().includes(search) ||

        p.torque.toLowerCase().includes(search) ||

        p.about.toLowerCase().includes(search)

      );

    });

  }


  /* Price */

  if (currentPriceFilter !== 'all') {

    list = list.filter(p => {

      const price = getPrice(p);

      if (!price) {
        return false;
      }

      if (currentPriceFilter === 'under70') {
        return price < 70000;
      }

      if (currentPriceFilter === '70to90') {
        return price >= 70000 && price <= 90000;
      }

      if (currentPriceFilter === 'above90') {
        return price > 90000;
      }

      return true;

    });

  }


  return list;
}


/* =========================================================
   10. RENDER PRODUCTS
   ========================================================= */

function render(filter = 'all') {

  currentVehicleFilter = filter;

  const list = getFilteredProducts();


  if (!list.length) {

    grid.innerHTML = `

      <div class="no-products">

        <h3>No model found</h3>

        <p>
          Try another model name or change the filters.
        </p>

      </div>

    `;

    updateResultCount(0);

    return;

  }


  grid.innerHTML = list.map((p) => {

    const price = getPrice(p);

    const originalIndex = products.indexOf(p);

    return `

      <article class="product">

        <div
          class="product-visual"
          style="position:relative;"
        >

          <span class="type">
            ${p.t === 'motorcycle'
              ? 'BIKE'
              : 'SCOOTER'}
          </span>

          <label class="compare-control">

            <input
              type="checkbox"
              class="compare-checkbox"
              data-index="${originalIndex}"
            >

            Compare

          </label>

          <img
            src="${p.img}"
            ${
              p.fallback
                ? `onerror="this.onerror=null;this.src='${p.fallback}'"`
                : ''
            }
            alt="${p.n}"
            loading="lazy"
          >

        </div>


        <div class="product-body">

          <h3>${p.n}</h3>

          <div class="spec">
            <b>${p.cc}</b> • ${p.torque}
          </div>

          <div class="chips">

            <span class="chip">
              ${
                p.t === 'motorcycle'
                  ? 'Motorcycle'
                  : 'Scooter'
              }
            </span>

            <span class="chip">
              ${p.variants}
            </span>

          </div>

          <p>${p.about}</p>


          <div class="price-row">

            <span>
              Ex-Showroom Price
            </span>

            <b class="phase1-price">
              ${
                price
                  ? formatPrice(price)
                  : 'On enquiry'
              }
            </b>

          </div>


          <div class="card-actions">

            <button
              class="product-link"
              data-product-index="${originalIndex}">
              View About & Specs
            </button>

            <a
              class="wa-mini"
              href="${enquireUrl(p.n, price)}"
              target="_blank"
              rel="noopener">
              WhatsApp
            </a>

          </div>

        </div>

      </article>

    `;

  }).join('');


  /* Modal buttons */

  grid
    .querySelectorAll('.product-link')
    .forEach(button => {

      button.addEventListener('click', () => {

        const index =
          Number(button.dataset.productIndex);

        openModal(products[index]);

      });

    });


  /* Compare */

  grid
    .querySelectorAll('.compare-checkbox')
    .forEach(checkbox => {

      checkbox.addEventListener(
        'change',
        handleCompareSelection
      );

    });


  updateResultCount(list.length);

  updateCompareBar();

}


/* =========================================================
   11. RESULT COUNT
   ========================================================= */

function updateResultCount(count) {

  const result = document.getElementById(
    'phase1Results'
  );

  if (!result) {
    return;
  }

  result.textContent =
    `${count} model${count === 1 ? '' : 's'} found`;

}


/* =========================================================
   12. APPLY SEARCH/FILTER
   ========================================================= */

function applyPhase1Filters() {

  const searchInput =
    document.getElementById('phase1Search');

  currentSearch =
    searchInput
      ? searchInput.value
      : '';

  const activePrice =
    document.querySelector(
      '[data-price-filter].active'
    );

  currentPriceFilter =
    activePrice
      ? activePrice.dataset.priceFilter
      : 'all';

  render(currentVehicleFilter);

}


/* =========================================================
   13. EXISTING BIKE / SCOOTER FILTER
   ========================================================= */

document
  .querySelectorAll('.filter')
  .forEach(button => {

    button.addEventListener('click', () => {

      document
        .querySelectorAll('.filter')
        .forEach(btn =>
          btn.classList.remove('active')
        );

      button.classList.add('active');

      currentVehicleFilter =
        button.dataset.filter;

      render(currentVehicleFilter);

    });

  });


/* =========================================================
   14. COMPARE SYSTEM
   ========================================================= */

let compareList = [];


function handleCompareSelection(event) {

  const checkbox = event.target;

  const index =
    Number(checkbox.dataset.index);

  const product =
    products[index];

  if (checkbox.checked) {

    if (compareList.length >= 3) {

      checkbox.checked = false;

      alert(
        'You can compare maximum 3 models at a time.'
      );

      return;

    }

    if (!compareList.includes(index)) {

      compareList.push(index);

    }

  } else {

    compareList =
      compareList.filter(
        item => item !== index
      );

  }

  updateCompareBar();

}


function updateCompareBar() {

  let bar =
    document.getElementById('compareBar');


  if (!compareList.length) {

    if (bar) {
      bar.remove();
    }

    return;

  }


  if (!bar) {

    bar =
      document.createElement('div');

    bar.id = 'compareBar';

    bar.className = 'compare-bar';

    document.body.appendChild(bar);

  }


  bar.innerHTML = `

    <span>
      ⚖️ Compare
      <strong>
        ${compareList.length}/3
      </strong>
    </span>

    <div style="display:flex;gap:7px;">

      <button id="compareNow">
        Compare
      </button>

      <button
        id="clearCompare"
        style="background:#444;">
        Clear
      </button>

    </div>

  `;


  document
    .getElementById('compareNow')
    .addEventListener(
      'click',
      openCompareModal
    );


  document
    .getElementById('clearCompare')
    .addEventListener(
      'click',
      clearCompare
    );

}


function clearCompare() {

  compareList = [];

  document
    .querySelectorAll('.compare-checkbox')
    .forEach(cb => {
      cb.checked = false;
    });

  updateCompareBar();

}


/* =========================================================
   15. COMPARE MODAL
   ========================================================= */

function createOverlay(id) {

  let overlay =
    document.getElementById(id);

  if (overlay) {
    return overlay;
  }

  overlay =
    document.createElement('div');

  overlay.id = id;

  overlay.className =
    'phase1-overlay';

  document.body.appendChild(overlay);

  return overlay;

}


function openCompareModal() {

  if (compareList.length < 2) {

    alert(
      'Please select at least 2 models to compare.'
    );

    return;

  }


  const overlay =
    createOverlay('compareOverlay');


  const selected =
    compareList.map(
      index => products[index]
    );


  const rows = [

    {
      label: 'Price',
      value: p =>
        getPrice(p)
          ? formatPrice(getPrice(p))
          : 'On enquiry'
    },

    {
      label: 'Type',
      value: p =>
        p.t === 'motorcycle'
          ? 'Motorcycle'
          : 'Scooter'
    },

    {
      label: 'Engine',
      value: p => p.cc
    },

    {
      label: 'Torque',
      value: p => p.torque
    },

    {
      label: 'Variants',
      value: p => p.variants
    }

  ];


  let table = `

    <div class="phase1-panel">

      <div class="phase1-panel-header">

        <h2>
          ⚖️ Compare Models
        </h2>

        <button
          class="phase1-close"
          id="closeCompare">
          ×
        </button>

      </div>

      <div class="compare-table-wrap">

        <table class="compare-table">

          <thead>

            <tr>

              <th>Feature</th>

              ${selected.map(p => `

                <th>

                  <div class="compare-product-name">
                    ${p.n}
                  </div>

                </th>

              `).join('')}

            </tr>

          </thead>

          <tbody>

  `;


  rows.forEach(row => {

    table += `

      <tr>

        <td>
          <strong>
            ${row.label}
          </strong>
        </td>

        ${selected.map(p => `

          <td>
            ${
              row.label === 'Price'
                ? `<span class="compare-product-price">
                    ${row.value(p)}
                   </span>`
                : row.value(p)
            }
          </td>

        `).join('')}

      </tr>

    `;

  });


  table += `

          </tbody>

        </table>

      </div>

    </div>

  `;


  overlay.innerHTML = table;

  overlay.classList.add('show');


  document
    .getElementById('closeCompare')
    .addEventListener(
      'click',
      () => overlay.classList.remove('show')
    );


  overlay.addEventListener('click', e => {

    if (e.target === overlay) {

      overlay.classList.remove('show');

    }

  });

}


/* =========================================================
   16. PRICE CALCULATOR
   ========================================================= */

function openCalculator() {

  const overlay =
    createOverlay('calculatorOverlay');


  const options =
    products.map(p => {

      const price =
        getPrice(p);

      return `

        <option
          value="${products.indexOf(p)}"
          ${price ? '' : 'disabled'}
        >

          ${p.n}
          ${
            price
              ? ' - ' + formatPrice(price)
              : ' - Price unavailable'
          }

        </option>

      `;

    }).join('');


  overlay.innerHTML = `

    <div class="phase1-panel">

      <div class="phase1-panel-header">

        <h2>
          💰 Price Calculator
        </h2>

        <button
          class="phase1-close"
          id="closeCalculator">
          ×
        </button>

      </div>


      <div class="calculator-grid">

        <div class="calc-field">

          <label>
            Select Model
          </label>

          <select id="calcModel">
            <option value="">
              Select a model
            </option>

            ${options}

          </select>

        </div>


        <div class="calc-field">

          <label>
            RTO / Registration
          </label>

          <input
            type="number"
            id="calcRto"
            placeholder="Enter amount"
            min="0"
            value="0"
          >

        </div>


        <div class="calc-field">

          <label>
            Insurance
          </label>

          <input
            type="number"
            id="calcInsurance"
            placeholder="Enter amount"
            min="0"
            value="0"
          >

        </div>


        <div class="calc-field">

          <label>
            Accessories
          </label>

          <input
            type="number"
            id="calcAccessories"
            placeholder="Optional"
            min="0"
            value="0"
          >

        </div>

      </div>


      <div class="calc-result">

        <div class="calc-result-row">

          <span>
            Ex-Showroom
          </span>

          <strong id="calcExShowroom">
            ₹0
          </strong>

        </div>


        <div class="calc-result-row">

          <span>
            RTO / Registration
          </span>

          <strong id="calcRtoDisplay">
            ₹0
          </strong>

        </div>


        <div class="calc-result-row">

          <span>
            Insurance
          </span>

          <strong id="calcInsuranceDisplay">
            ₹0
          </strong>

        </div>


        <div class="calc-result-row">

          <span>
            Accessories
          </span>

          <strong id="calcAccessoriesDisplay">
            ₹0
          </strong>

        </div>


        <div class="calc-total">

          Estimated On-Road Price:

          <span id="calcTotal">
            ₹0
          </span>

        </div>


        <div class="calc-note">

          * This is an estimated calculation.
          Final price may vary according to
          registration, insurance, offers and
          dealer charges.

        </div>


        <button
          class="calc-whatsapp"
          id="calcWhatsapp">

          📱 Get Exact Quote on WhatsApp

        </button>

      </div>

    </div>

  `;


  overlay.classList.add('show');


  document
    .getElementById('closeCalculator')
    .addEventListener(
      'click',
      () => overlay.classList.remove('show')
    );


  overlay.addEventListener('click', e => {

    if (e.target === overlay) {

      overlay.classList.remove('show');

    }

  });


  const modelSelect =
    document.getElementById('calcModel');

  const rto =
    document.getElementById('calcRto');

  const insurance =
    document.getElementById('calcInsurance');

  const accessories =
    document.getElementById('calcAccessories');


  function calculate() {

    const selectedIndex =
      Number(modelSelect.value);

    const product =
      products[selectedIndex];

    const exShowroom =
      product
        ? getPrice(product) || 0
        : 0;


    const rtoValue =
      Math.max(
        0,
        Number(rto.value) || 0
      );


    const insuranceValue =
      Math.max(
        0,
        Number(insurance.value) || 0
      );


    const accessoriesValue =
      Math.max(
        0,
        Number(accessories.value) || 0
      );


    const total =
      exShowroom +
      rtoValue +
      insuranceValue +
      accessoriesValue;


    document
      .getElementById('calcExShowroom')
      .textContent =
        formatPrice(exShowroom);


    document
      .getElementById('calcRtoDisplay')
      .textContent =
        formatPrice(rtoValue);


    document
      .getElementById('calcInsuranceDisplay')
      .textContent =
        formatPrice(insuranceValue);


    document
      .getElementById('calcAccessoriesDisplay')
      .textContent =
        formatPrice(accessoriesValue);


    document
      .getElementById('calcTotal')
      .textContent =
        formatPrice(total);


    return {
      product,
      exShowroom,
      rtoValue,
      insuranceValue,
      accessoriesValue,
      total
    };

  }


  [
    modelSelect,
    rto,
    insurance,
    accessories
  ].forEach(input => {

    input.addEventListener(
      'input',
      calculate
    );

    input.addEventListener(
      'change',
      calculate
    );

  });


  document
    .getElementById('calcWhatsapp')
    .addEventListener('click', () => {

      const data = calculate();

      if (!data.product) {

        alert(
          'Please select a model first.'
        );

        return;

      }


      const message =

        `Hello Magan Hero,\n\n` +

        `I want an exact quote for:\n` +

        `${data.product.n}\n\n` +

        `Estimated Ex-Showroom: ` +
        `${formatPrice(data.exShowroom)}\n` +

        `RTO / Registration: ` +
        `${formatPrice(data.rtoValue)}\n` +

        `Insurance: ` +
        `${formatPrice(data.insuranceValue)}\n` +

        `Accessories: ` +
        `${formatPrice(data.accessoriesValue)}\n` +

        `Estimated Total: ` +
        `${formatPrice(data.total)}\n\n` +

        `Please share the final on-road price.`;



      window.open(

        'https://wa.me/919897561012?text=' +
        encodeURIComponent(message),

        '_blank'

      );

    });


  calculate();

}


/* =========================================================
   17. PRODUCT MODAL
   ========================================================= */

function openModal(p) {

  modalImage.src = p.img;

  modalImage.alt = p.n;


  if (p.fallback) {

    modalImage.onerror = () => {

      modalImage.onerror = null;

      modalImage.src = p.fallback;

    };

  }


  modalTitle.textContent = p.n;

  modalType.textContent =
    p.t === 'motorcycle'
      ? 'HERO MOTORCYCLE'
      : 'HERO SCOOTER';


  modalAbout.textContent = p.about;

  modalEngine.textContent = p.cc;

  modalTorque.textContent = p.torque;

  modalVariants.textContent = p.variants;


  /* Price in modal */

  let modalPrice =
    document.getElementById('modalPrice');


  if (!modalPrice) {

    const priceContainers =
      modal.querySelectorAll(
        '.price-row, .modal-price, .price'
      );

    if (priceContainers.length) {

      const last =
        priceContainers[
          priceContainers.length - 1
        ];

      const priceElement =
        document.createElement('div');

      priceElement.className =
        'phase1-modal-price';

      last.parentNode.insertBefore(
        priceElement,
        last.nextSibling
      );

      modalPrice = priceElement;

    }

  }


  if (modalPrice) {

    const price =
      getPrice(p);

    modalPrice.innerHTML = `

      <span>
        Ex-Showroom Price
      </span>

      <strong>
        ${
          price
            ? formatPrice(price)
            : 'On enquiry'
        }
      </strong>

    `;

  }


  modalWhatsapp.href =
    enquireUrl(
      p.n,
      getPrice(p)
    );


  modalOfficial.href = p.url;


  modal.classList.add('show');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );

  document.body.classList.add(
    'modal-open'
  );

}


function closeModal() {

  modal.classList.remove('show');

  modal.setAttribute(
    'aria-hidden',
    'true'
  );

  document.body.classList.remove(
    'modal-open'
  );

}


/* =========================================================
   18. EXISTING MODAL EVENTS
   ========================================================= */

const modalClose =
  document.querySelector('.modal-close');


if (modalClose) {

  modalClose.addEventListener(
    'click',
    closeModal
  );

}


if (modal) {

  modal.addEventListener(
    'click',
    e => {

      if (e.target.dataset.close) {

        closeModal();

      }

    }
  );

}


document.addEventListener(
  'keydown',
  e => {

    if (e.key === 'Escape') {

      closeModal();

    }

  }
);


/* =========================================================
   19. MOBILE MENU
   ========================================================= */

const menu =
  document.querySelector('.menu');

const nav =
  document.getElementById('nav');


if (menu && nav) {

  menu.addEventListener(
    'click',
    () => {

      nav.classList.toggle(
        'open'
      );

    }
  );


  nav
    .querySelectorAll('a')
    .forEach(a => {

      a.addEventListener(
        'click',
        () => {

          nav.classList.remove(
            'open'
          );

        }
      );

    });

}


/* =========================================================
   20. FOOTER YEAR
   ========================================================= */

const footerYear =
  document.getElementById(
    'footerYear'
  );


if (footerYear) {

  footerYear.textContent =
    new Date().getFullYear();

}


/* =========================================================
   21. FOOTER SMOOTH SCROLL
   ========================================================= */

document
  .querySelectorAll(
    '.site-footer a[href^="#"]'
  )
  .forEach(link => {

    link.addEventListener(
      'click',
      function(e) {

        const targetId =
          this.getAttribute('href');

        const target =
          document.querySelector(
            targetId
          );


        if (target) {

          e.preventDefault();

          target.scrollIntoView({

            behavior: 'smooth',

            block: 'start'

          });

        }

      }
    );

  });


/* =========================================================
   22. INITIALIZE
   ========================================================= */

createPhase1Toolbar();

render('all');

console.log(
  'Magan Hero Phase 1 loaded successfully.'
);