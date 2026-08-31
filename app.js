const MEALS = [
  // === ЗАВТРАКИ ===
  [
    {name:'Овсянка на воде с ягодами',items:[{p:'Овсяные хлопья',q:'60г',k:220},{p:'Черника/малина',q:'80г',k:45},{p:'Грецкий орех',q:'10г',k:65}],cal:330,b:10,j:12,u:48},
    {name:'Яичница с овощами',items:[{p:'Яйцо куриное',q:'3 шт',k:215},{p:'Помидор',q:'100г',k:20},{p:'Шпинат',q:'50г',k:12},{p:'Хлеб цельнозерновой',q:'1 ломтик',k:80}],cal:327,b:22,j:20,u:12},
    {name:'Творожные оладьи',items:[{p:'Творог 2%',q:'150г',k:130},{p:'Яйцо',q:'1 шт',k:72},{p:'Овсяная мука',q:'30г',k:100},{p:'Ягоды',q:'50г',k:25}],cal:327,b:24,j:11,u:38},
    {name:'Гречневая каша с курицей',items:[{p:'Гречка',q:'60г (сухой)',k:210},{p:'Куриная грудка',q:'80г',k:110},{p:'Огурец',q:'50г',k:8}],cal:328,b:26,j:5,u:48},
    {name:'Смузи протеиновый',items:[{p:'Банан',q:'1 шт',k:96},{p:'Молоко 1.5%',q:'200мл',k:84},{p:'Овсяные хлопья',q:'40г',k:147},{p:'Арахисовая паста',q:'10г',k:60}],cal:387,b:14,j:12,u:55}
  ],
  // === ПЕРВЫЙ ПЕРЕКУС ===
  [
    {name:'Творог с орехами',items:[{p:'Творог 2%',q:'120г',k:104},{p:'Грецкий орех',q:'15г',k:98}],cal:202,b:20,j:11,u:4},
    {name:'Яблоко + кефир',items:[{p:'Яблоко',q:'1 шт среднее',k:95},{p:'Кефир 1%',q:'150мл',k:66}],cal:161,b:6,j:3,u:33},
    {name:'Протеиновый батончик',items:[{p:'Протеиновый батончик',q:'1 шт',k:200},{p:'Вода',q:'300мл',k:0}],cal:200,b:20,j:6,u:20},
    {name:'Ряженка + миндаль',items:[{p:'Ряженка 2.5%',q:'200мл',k:110},{p:'Миндаль',q:'10г',k:58}],cal:168,b:8,j:8,u:10},
    {name:'Груша + творожный сыр',items:[{p:'Груша',q:'1 шт',k:85},{p:'Творожный сыр 5%',q:'40г',k:70}],cal:155,b:7,j:5,u:22}
  ],
  // === ОБЕДЫ ===
  [
    {name:'Куриная грудка с гречкой',items:[{p:'Куриная грудка',q:'150г',k:205},{p:'Гречка',q:'80г (сухой)',k:280},{p:'Огурец',q:'100г',k:16},{p:'Оливковое масло',q:'5мл',k:45}],cal:546,b:44,j:12,u:52},
    {name:'Лосось с брокколи',items:[{p:'Лосось',q:'130г',k:280},{p:'Брокколи',q:'150г',k:52},{p:'Рис бурый',q:'60г (сухой)',k:200},{p:'Соус соевый',q:'10мл',k:10}],cal:542,b:42,j:20,u:40},
    {name:'Индейка с овощами',items:[{p:'Филе индейки',q:'150г',k:190},{p:'Перец болгарский',q:'100г',k:30},{p:'Кабачок',q:'100г',k:18},{p:'Оливковое масло',q:'5мл',k:45}],cal:283,b:38,j:12,u:8},
    {name:'Говядина с салатом',items:[{p:'Говядина постная',q:'130г',k:220},{p:'Салат «Цезарь» (без соуса)',q:'150г',k:100},{p:'Хлеб цельнозерновой',q:'1 ломтик',k:80}],cal:400,b:40,j:12,u:35},
    {name:'Тунец с макаронами',items:[{p:'Тунец консерв.',q:'100г',k:130},{p:'Макароны тв.сорт',q:'70г (сухой)',k:245},{p:'Помидор',q:'100г',k:20},{p:'Оливковое масло',q:'5мл',k:45}],cal:440,b:35,j:8,u:55}
  ],
  // === ВТОРОЙ ПЕРЕКУС ===
  [
    {name:'Овощные палочки с хумусом',items:[{p:'Морковь',q:'100г',k:41},{p:'Огурец',q:'100г',k:16},{p:'Хумус',q:'50г',k:120}],cal:177,b:6,j:8,u:18},
    {name:'Банан + арахисовая паста',items:[{p:'Банан',q:'1 шт',k:96},{p:'Арахисовая паста',q:'15г',k:90}],cal:186,b:5,j:7,u:23},
    {name:'Йогурт греческий',items:[{p:'Йогурт греч. 2%',q:'150г',k:90},{p:'Мёд',q:'10г',k:33}],cal:123,b:10,j:2,u:18},
    {name:'Сырники',items:[{p:'Творог 2%',q:'100г',k:87},{p:'Яйцо',q:'1/2 шт',k:36},{p:'Сметана 15%',q:'15г',k:25}],cal:148,b:14,j:6,u:8},
    {name:'Кефир + орехи',items:[{p:'Кефир 1%',q:'200мл',k:88},{p:'Кешью',q:'10г',k:55}],cal:143,b:8,j:6,u:12}
  ],
  // === УЖИНЫ ===
  [
    {name:'Запечённая рыба с салатом',items:[{p:'Треска',q:'150г',k:120},{p:'Салат (листья, огурец)',q:'150г',k:30},{p:'Оливковое масло',q:'5мл',k:45},{p:'Лимон',q:'1/2 шт',k:5}],cal:200,b:28,j:7,u:4},
    {name:'Куриные котлеты на пару',items:[{p:'Фарш куриный',q:'150г',k:195},{p:'Брокколи',q:'200г',k:70},{p:'Сметана 15%',q:'20г',k:34}],cal:299,b:30,j:14,u:12},
    {name:'Омлет с овощами',items:[{p:'Яйцо',q:'3 шт',k:215},{p:'Шпинат',q:'50г',k:12},{p:'Помидор',q:'100г',k:20}],cal:247,b:20,j:16,u:6},
    {name:'Запечённая индейка',items:[{p:'Филе индейки',q:'150г',k:190},{p:'Кабачок',q:'150г',k:27},{p:'Сметана 15%',q:'20г',k:34}],cal:251,b:34,j:8,u:6},
    {name:'Творожная запеканка',items:[{p:'Творог 2%',q:'200г',k:173},{p:'Яйцо',q:'1 шт',k:72},{p:'Сметана 15%',q:'30г',k:51}],cal:296,b:30,j:12,u:20}
  ]
];

const SHOPPING_TEMPLATE = {
  'Молочные':[{p:'Творог 2%',q:'800г'},{p:'Кефир 1%',q:'1л'},{p:'Ряженка 2.5%',q:'400мл'},{p:'Йогурт греч. 2%',q:'300г'},{p:'Сметана 15%',q:'200мл'},{p:'Молоко 1.5%',q:'400мл'}],
  'Мясо и рыба':[{p:'Куриная грудка',q:'700г'},{p:'Филе индейки',q:'500г'},{p:'Лосось/форель',q:'400г'},{p:'Треска/треска',q:'500г'},{p:'Тунец консерв.',q:'2 банки'}],
  'Крупы':[{p:'Овсяные хлопья',q:'300г'},{p:'Гречка',q:'400г'},{p:'Рис бурый',q:'200г'},{p:'Макароны тв.сорт',q:'200г'}],
  'Овощи':[{p:'Огурцы',q:'7 шт'},{p:'Помидоры',q:'7 шт'},{p:'Брокколи',q:'600г'},{p:'Шпинат',q:'200г'},{p:'Перец болгарский',q:'3 шт'},{p:'Кабачки',q:'600г'},{p:'Морковь',q:'300г'},{p:'Листья салата',q:'2 пачки'}],
  'Фрукты':[{p:'Яблоки',q:'7 шт'},{p:'Бананы',q:'7 шт'},{p:'Груши',q:'3 шт'},{p:'Черника/малина',q:'300г'}],
  'Яйца и другое':[{p:'Яйца С1',q:'30 шт'},{p:'Хлеб цельнозерн.',q:'2 бух.'},{p:'Оливковое масло',q:'1 бут.'},{p:'Грецкий орех',q:'100г'},{p:'Миндаль',q:'50г'},{p:'Кешью',q:'50г'},{p:'Арахисовая паста',q:'1 банка'},{p:'Мёд',q:'1 банка'},{p:'Соус соевый',q:'1 бут.'},{p:'Лимон',q:'3 шт'},{p:'Хумус',q:'200г'}]
};

let plan = null;

function toggleFaq(el){
  const was=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!was)el.classList.add('open');
}

function saveParams(){
  const h=+document.getElementById('inHeight').value;
  const w=+document.getElementById('inWeight').value;
  const sex=document.getElementById('inSex').value;
  const age=+document.getElementById('inAge').value;
  if(!h||!w||!age)return;
  localStorage.setItem('sb_h',h);
  localStorage.setItem('sb_w',w);
  localStorage.setItem('sb_sex',sex);
  localStorage.setItem('sb_age',age);
  document.getElementById('goalTitle').style.display='block';
  document.getElementById('goalCard').style.display='block';
  document.getElementById('goalCard').scrollIntoView({behavior:'smooth',block:'nearest'});
}

function calcBMR(w,h,sex,age){
  return Math.round(10*w+6.25*h-5*age+(sex==='m'?5:-161));
}

function getDayMenu(targetCal){
  const out=[];
  const ratios=[.25,.1,.3,.08,.22];
  const indices=[0,1,2,3,4];
  const dayNum=new Date().getDate()%5;
  for(let i=0;i<5;i++){
    const idx=(dayNum+i)%MEALS[i].length;
    out.push({...MEALS[i][idx],ratio:ratios[i]});
  }
  const totalK=out.reduce((s,m)=>s+m.cal,0);
  const scale=targetCal/totalK;
  out.forEach(m=>m.calScaled=Math.round(m.cal*scale));
  return out;
}

function buildPlan(){
  const h=+document.getElementById('inHeight').value;
  const w=+document.getElementById('inWeight').value;
  const sex=document.getElementById('inSex').value;
  const age=+document.getElementById('inAge').value;
  const goalKg=+document.getElementById('inGoalKg').value;
  const goalDays=+document.getElementById('inGoalDays').value;
  if(!h||!w||!age||!goalKg||!goalDays)return alert('Заполните все поля');

  const bmr=calcBMR(w,h,sex,age);
  const totalDeficit=goalKg*7700;
  const dailyDeficit=Math.round(totalDeficit/goalDays);
  const maxDeficit=Math.round(bmr*.35);
  const safeDeficit=Math.min(dailyDeficit,maxDeficit);
  const targetCal=Math.max(sex==='m'?1500:1200,bmr-safeDeficit);

  const goalWeight=w-goalKg;
  const daysToGoal=Math.ceil((w-goalWeight)*7700/safeDeficit);

  plan={h,w,sex,age,goalKg,goalDays,targetCal,bmr,safeDeficit,goalWeight};
  localStorage.setItem('sb_plan',JSON.stringify(plan));

  showPlan(plan);
}

function showPlan(p){
  const sum=document.getElementById('planSummary');
  sum.style.display='block';
  sum.innerHTML=`
    <div class="card summary-card">
      <div class="summary-row"><span>Ваш вес</span><b>${p.w} кг</b></div>
      <div class="summary-row"><span>Целевой вес</span><b>${p.goalWeight} кг</b></div>
      <div class="summary-row"><span>Нужно сбросить</span><b class="hl">${p.goalKg} кг</b></div>
      <div class="summary-row"><span>Срок</span><b>${p.goalDays} дней</b></div>
      <div class="summary-row"><span>Базовый метаболизм</span><b>${p.bmr} ккал</b></div>
      <div class="summary-row"><span>Дефицит в день</span><b>-${p.safeDeficit} ккал</b></div>
      <div class="summary-row cal-highlight"><span>Калорий в день</span><b>${p.targetCal} ккал</b></div>
    </div>`;

  const menu=getDayMenu(p.targetCal);
  const mc=document.getElementById('menuContainer');
  mc.innerHTML='';
  const labels=['🌅 Завтрак','🍎 Перекус','🍽️ Обед','🥤 Перекус','🌙 Ужин'];
  const times=['08:00','11:00','14:00','17:00','20:00'];
  let totalP=0,totalF=0,totalC=0,totalCal=0;
  menu.forEach((m,i)=>{
    let itemsHtml=m.items.map(it=>`<div class="menu-item"><span class="mi-name">${it.p}</span><span class="mi-q">${it.q}</span><span class="mi-k">${it.k} ккал</span></div>`).join('');
    totalCal+=m.cal;
    mc.innerHTML+=`
      <div class="card menu-card">
        <div class="menu-header"><span class="menu-label">${labels[i]}</span><span class="menu-time">${times[i]}</span><span class="menu-cal">${m.cal} ккал</span></div>
        <div class="menu-title">${m.name}</div>
        ${itemsHtml}
        <div class="menu-macros"><span>Б:${m.b}г</span><span>Ж:${m.j}г</span><span>У:${m.u}г</span></div>
      </div>`;
    totalP+=m.b;totalF+=m.j;totalC+=m.u;
  });
  document.getElementById('menuTotals').innerHTML=`
    <div class="card totals-card">
      <div class="totals-title">Итого за день</div>
      <div class="param-grid">
        <div class="param-box"><span class="param-val">${totalCal}</span><span class="param-label">ккал</span></div>
        <div class="param-box"><span class="param-val">${totalP}г</span><span class="param-label">Белки</span></div>
        <div class="param-box"><span class="param-val">${totalF}г</span><span class="param-label">Жиры</span></div>
        <div class="param-box"><span class="param-val">${totalC}г</span><span class="param-label">Углеводы</span></div>
      </div>
    </div>`;

  const sl=document.getElementById('shoppingList');
  let shopHtml='';
  Object.entries(SHOPPING_TEMPLATE).forEach(([cat,items])=>{
    shopHtml+=`<div class="shop-cat">${cat}</div>`;
    items.forEach(it=>{
      shopHtml+=`<div class="shop-item"><span>${it.p}</span><span class="shop-q">${it.q}</span></div>`;
    });
  });
  sl.innerHTML=shopHtml;

  document.getElementById('secMenu').style.display='block';
  document.getElementById('secShopping').style.display='block';
  document.getElementById('secWorkout').style.display='block';
  sum.scrollIntoView({behavior:'smooth',block:'start'});
}

document.addEventListener('DOMContentLoaded',()=>{
  ['sb_h','sb_w','sb_sex','sb_age'].forEach(k=>{
    const v=localStorage.getItem(k);
    if(v){
      const el=document.getElementById(k==='sb_h'?'inHeight':k==='sb_w'?'inWeight':k==='sb_sex'?'inSex':'inAge');
      if(el)el.value=v;
    }
  });
  const saved=localStorage.getItem('sb_plan');
  if(saved){
    plan=JSON.parse(saved);
    document.getElementById('goalTitle').style.display='block';
    document.getElementById('goalCard').style.display='block';
    document.getElementById('inGoalKg').value=plan.goalKg;
    document.getElementById('inGoalDays').value=plan.goalDays;
    showPlan(plan);
  }

  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}}),{threshold:.1});
  document.querySelectorAll('.card,.faq-item').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .5s,transform .5s';obs.observe(el);});
  const s=document.createElement('style');
  s.textContent='.visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(s);
});
