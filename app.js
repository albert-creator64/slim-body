const MEALS=[
  [{name:'Овсянка на воде с ягодами',items:[{p:'Овсяные хлопья',q:'60г',k:220},{p:'Черника/малина',q:'80г',k:45},{p:'Грецкий орех',q:'10г',k:65}],cal:330,b:10,j:12,u:48},
   {name:'Яичница с овощами',items:[{p:'Яйцо куриное',q:'3 шт',k:215},{p:'Помидор',q:'100г',k:20},{p:'Шпинат',q:'50г',k:12},{p:'Хлеб цельнозерновой',q:'1 ломтик',k:80}],cal:327,b:22,j:20,u:12},
   {name:'Творожные оладьи',items:[{p:'Творог 2%',q:'150г',k:130},{p:'Яйцо',q:'1 шт',k:72},{p:'Овсяная мука',q:'30г',k:100},{p:'Ягоды',q:'50г',k:25}],cal:327,b:24,j:11,u:38},
   {name:'Гречневая каша с курицей',items:[{p:'Гречка',q:'60г сухой',k:210},{p:'Куриная грудка',q:'80г',k:110},{p:'Огурец',q:'50г',k:8}],cal:328,b:26,j:5,u:48},
   {name:'Смузи протеиновый',items:[{p:'Банан',q:'1 шт',k:96},{p:'Молоко 1.5%',q:'200мл',k:84},{p:'Овсяные хлопья',q:'40г',k:147},{p:'Арахисовая паста',q:'10г',k:60}],cal:387,b:14,j:12,u:55}],
  [{name:'Творог с орехами',items:[{p:'Творог 2%',q:'120г',k:104},{p:'Грецкий орех',q:'15г',k:98}],cal:202,b:20,j:11,u:4},
   {name:'Яблоко + кефир',items:[{p:'Яблоко',q:'1 шт',k:95},{p:'Кефир 1%',q:'150мл',k:66}],cal:161,b:6,j:3,u:33},
   {name:'Протеиновый батончик',items:[{p:'Батончик протеиновый',q:'1 шт',k:200},{p:'Вода',q:'300мл',k:0}],cal:200,b:20,j:6,u:20},
   {name:'Ряженка + миндаль',items:[{p:'Ряженка 2.5%',q:'200мл',k:110},{p:'Миндаль',q:'10г',k:58}],cal:168,b:8,j:8,u:10},
   {name:'Груша + творожный сыр',items:[{p:'Груша',q:'1 шт',k:85},{p:'Творожный сыр 5%',q:'40г',k:70}],cal:155,b:7,j:5,u:22}],
  [{name:'Куриная грудка с гречкой',items:[{p:'Куриная грудка',q:'150г',k:205},{p:'Гречка',q:'80г сухой',k:280},{p:'Огурец',q:'100г',k:16},{p:'Оливковое масло',q:'5мл',k:45}],cal:546,b:44,j:12,u:52},
   {name:'Лосось с брокколи',items:[{p:'Лосось',q:'130г',k:280},{p:'Брокколи',q:'150г',k:52},{p:'Рис бурый',q:'60г сухой',k:200},{p:'Соус соевый',q:'10мл',k:10}],cal:542,b:42,j:20,u:40},
   {name:'Индейка с овощами',items:[{p:'Филе индейки',q:'150г',k:190},{p:'Перец болгарский',q:'100г',k:30},{p:'Кабачок',q:'100г',k:18},{p:'Оливковое масло',q:'5мл',k:45}],cal:283,b:38,j:12,u:8},
   {name:'Говядина с салатом',items:[{p:'Говядина постная',q:'130г',k:220},{p:'Салатные листья',q:'150г',k:25},{p:'Хлеб цельнозерновой',q:'1 ломтик',k:80}],cal:325,b:38,j:10,u:22},
   {name:'Тунец с макаронами',items:[{p:'Тунец консерв.',q:'100г',k:130},{p:'Макароны тв.сорт',q:'70г сухой',k:245},{p:'Помидор',q:'100г',k:20},{p:'Оливковое масло',q:'5мл',k:45}],cal:440,b:35,j:8,u:55}],
  [{name:'Овощные палочки с хумусом',items:[{p:'Морковь',q:'100г',k:41},{p:'Огурец',q:'100г',k:16},{p:'Хумус',q:'50г',k:120}],cal:177,b:6,j:8,u:18},
   {name:'Банан + арахисовая паста',items:[{p:'Банан',q:'1 шт',k:96},{p:'Арахисовая паста',q:'15г',k:90}],cal:186,b:5,j:7,u:23},
   {name:'Йогурт греческий',items:[{p:'Йогурт греч. 2%',q:'150г',k:90},{p:'Мёд',q:'10г',k:33}],cal:123,b:10,j:2,u:18},
   {name:'Сырники',items:[{p:'Творог 2%',q:'100г',k:87},{p:'Яйцо',q:'1/2 шт',k:36},{p:'Сметана 15%',q:'15г',k:25}],cal:148,b:14,j:6,u:8},
   {name:'Кефир + орехи',items:[{p:'Кефир 1%',q:'200мл',k:88},{p:'Кешью',q:'10г',k:55}],cal:143,b:8,j:6,u:12}],
  [{name:'Запечённая рыба с салатом',items:[{p:'Треска',q:'150г',k:120},{p:'Салат (листья, огурец)',q:'150г',k:30},{p:'Оливковое масло',q:'5мл',k:45},{p:'Лимон',q:'1/2 шт',k:5}],cal:200,b:28,j:7,u:4},
   {name:'Куриные котлеты на пару',items:[{p:'Фарш куриный',q:'150г',k:195},{p:'Брокколи',q:'200г',k:70},{p:'Сметана 15%',q:'20г',k:34}],cal:299,b:30,j:14,u:12},
   {name:'Омлет с овощами',items:[{p:'Яйцо',q:'3 шт',k:215},{p:'Шпинат',q:'50г',k:12},{p:'Помидор',q:'100г',k:20}],cal:247,b:20,j:16,u:6},
   {name:'Запечённая индейка',items:[{p:'Филе индейки',q:'150г',k:190},{p:'Кабачок',q:'150г',k:27},{p:'Сметана 15%',q:'20г',k:34}],cal:251,b:34,j:8,u:6},
   {name:'Творожная запеканка',items:[{p:'Творог 2%',q:'200г',k:173},{p:'Яйцо',q:'1 шт',k:72},{p:'Сметана 15%',q:'30г',k:51}],cal:296,b:30,j:12,u:20}]
];

const SHOPPING={
  'Молочные':[{p:'Творог 2%',q:'800г'},{p:'Кефир 1%',q:'1л'},{p:'Ряженка 2.5%',q:'400мл'},{p:'Йогурт греч. 2%',q:'300г'},{p:'Сметана 15%',q:'200мл'},{p:'Молоко 1.5%',q:'400мл'}],
  'Мясо и рыба':[{p:'Куриная грудка',q:'700г'},{p:'Филе индейки',q:'500г'},{p:'Лосось/форель',q:'400г'},{p:'Треска',q:'500г'},{p:'Тунец консерв.',q:'2 банки'}],
  'Крупы и гарниры':[{p:'Овсяные хлопья',q:'300г'},{p:'Гречка',q:'400г'},{p:'Рис бурый',q:'200г'},{p:'Макароны тв.сорт',q:'200г'}],
  'Овощи':[{p:'Огурцы',q:'7 шт'},{p:'Помидоры',q:'7 шт'},{p:'Брокколи',q:'600г'},{p:'Шпинат',q:'200г'},{p:'Перец болг.',q:'3 шт'},{p:'Кабачки',q:'600г'},{p:'Морковь',q:'300г'},{p:'Салатные листья',q:'2 пачки'}],
  'Фрукты':[{p:'Яблоки',q:'7 шт'},{p:'Бананы',q:'7 шт'},{p:'Груши',q:'3 шт'},{p:'Черника/малина',q:'300г'}],
  'Другое':[{p:'Яйца С1',q:'30 шт'},{p:'Хлеб цельнозерн.',q:'2 бух.'},{p:'Оливковое масло',q:'1 бут.'},{p:'Грецкий орех',q:'100г'},{p:'Миндаль',q:'50г'},{p:'Кешью',q:'50г'},{p:'Арахис. паста',q:'1 банка'},{p:'Мёд',q:'1 банка'},{p:'Соевый соус',q:'1 бут.'},{p:'Лимон',q:'3 шт'},{p:'Хумус',q:'200г'}]
};

const WORKOUTS=[
  {day:'Пн',type:'cardio',title:'Кардио + шаги',color:'green',exercises:[
    {name:'Разминка — ходьба на месте',sets:'3 мин',rest:''},
    {name:'Бег на месте / скакалка',sets:'5×2 мин',rest:'отдых 1 мин'},
    {name:'Jumping Jacks',sets:'3×20',rest:'отдых 30 сек'},
    {name:'Выпады с ходьбой',sets:'3×12 на ногу',rest:'отдых 30 сек'},
    {name:'Ходьба на месте (заминка)',sets:'5 мин',rest:''},
    {name:'Растяжка',sets:'5 мин',rest:''}]},
  {day:'Вт',type:'strength',title:'Силовая — верх тела',color:'yellow',exercises:[
    {name:'Разминка',sets:'3 мин',rest:''},
    {name:'Отжимания',sets:'4×12',rest:'отдых 45 сек'},
    {name:'Отжимания с узкой постановкой',sets:'3×10',rest:'отдых 45 сек'},
    {name:'Подтягивания / тяга в наклоне',sets:'4×10',rest:'отдых 60 сек'},
    {name:'Планка',sets:'3×45 сек',rest:'отдых 30 сек'},
    {name:'Скручивания',sets:'3×20',rest:'отдых 30 сек'},
    {name:'Растяжка',sets:'5 мин',rest:''}]},
  {day:'Ср',type:'hiit',title:'HIIT — жиросжигание',color:'green',exercises:[
    {name:'Разминка',sets:'3 мин',rest:''},
    {name:'Бёрпи',sets:'4×10',rest:'отдых 30 сек'},
    {name:'Горнолыжник',sets:'4×20',rest:'отдых 30 сек'},
    {name:'Выпады с прыжком',sets:'3×12',rest:'отдых 30 сек'},
    {name:'Планка-прыжки',sets:'3×15',rest:'отдых 30 сек'},
    {name:'Бег на месте (интенсивно)',sets:'3×1 мин',rest:'отдых 30 сек'},
    {name:'Заминка + растяжка',sets:'5 мин',rest:''}]},
  {day:'Чт',type:'rest',title:'Активный отдых',color:'',exercises:[
    {name:'Прогулка на свежем воздухе',sets:'30-40 мин',rest:''},
    {name:'Лёгкая растяжка',sets:'10 мин',rest:''},
    {name:'Дыхательные упражнения',sets:'5 мин',rest:''}]},
  {day:'Пт',type:'strength',title:'Силовая — ноги и ягодицы',color:'yellow',exercises:[
    {name:'Разминка',sets:'3 мин',rest:''},
    {name:'Приседания',sets:'4×15',rest:'отдых 45 сек'},
    {name:'Выпады назад',sets:'3×12 на ногу',rest:'отдых 45 сек'},
    {name:'Ягодичный мостик',sets:'4×20',rest:'отдых 30 сек'},
    {name:'Стульчик у стены',sets:'3×40 сек',rest:'отдых 30 сек'},
    {name:'Подъёмы на носки',sets:'3×20',rest:'отдых 20 сек'},
    {name:'Растяжка',sets:'5 мин',rest:''}]},
  {day:'Сб',type:'cardio',title:'Кардио + прогулка',color:'green',exercises:[
    {name:'Разминка',sets:'3 мин',rest:''},
    {name:'Бег на месте / скакалка',sets:'5×2 мин',rest:'отдых 1 мин'},
    {name:'Ходьба в горку (на месте)',sets:'3×2 мин',rest:'отдых 30 сек'},
    {name:'Прыжковые приседания',sets:'3×12',rest:'отдых 30 сек'},
    {name:'Ходьба на месте',sets:'5 мин',rest:''},
    {name:'Растяжка',sets:'5 мин',rest:''}]},
  {day:'Вс',type:'rest',title:'Полный отдых',color:'',exercises:[
    {name:'Прогулка',sets:'20-30 мин',rest:''},
    {name:'Растяжка / йога',sets:'15 мин',rest:''}]}
];

const STEP_PLAN=[
  {week:'Неделя 1',steps:6000,dist:'4.2 км',cal:'~240 ккал',note:'Привыкайте к режиму'},
  {week:'Неделя 2',steps:8000,dist:'5.6 км',cal:'~320 ккал',note:'Увеличивайте темп'},
  {week:'Неделя 3',steps:10000,dist:'7.0 км',cal:'~400 ккал',note:'Оптимальная норма'},
  {week:'Неделя 4',steps:12000,dist:'8.4 км',cal:'~480 ккал',note:'Максимальный результат'}
];

let plan=null;

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
  if(!h||!w||!age)return alert('Заполните все поля');
  localStorage.setItem('sb_h',h);localStorage.setItem('sb_w',w);
  localStorage.setItem('sb_sex',sex);localStorage.setItem('sb_age',age);
  document.getElementById('goalSec').style.display='block';
  document.getElementById('goalSec').scrollIntoView({behavior:'smooth',block:'start'});
}

function calcBMR(w,h,sex,age){return Math.round(10*w+6.25*h-5*age+(sex==='m'?5:-161));}

function buildPlan(){
  const h=+document.getElementById('inHeight').value||+(localStorage.getItem('sb_h')||0);
  const w=+document.getElementById('inWeight').value||+(localStorage.getItem('sb_w')||0);
  const sex=document.getElementById('inSex').value||localStorage.getItem('sb_sex')||'f';
  const age=+document.getElementById('inAge').value||+(localStorage.getItem('sb_age')||30);
  const goalKg=+document.getElementById('inGoalKg').value;
  const goalDays=+document.getElementById('inGoalDays').value;
  if(!h||!w||!age||!goalKg||!goalDays)return alert('Заполните все поля');

  const bmr=calcBMR(w,h,sex,age);
  const totalDeficit=goalKg*7700;
  const dailyDeficit=Math.round(totalDeficit/goalDays);
  const maxDeficit=Math.round(bmr*.35);
  const safeDeficit=Math.min(dailyDeficit,maxDeficit);
  const targetCal=Math.max(sex==='m'?1500:1200,bmr-safeDeficit);
  const goalWeight=Math.max(40,w-goalKg);

  plan={h,w,sex,age,goalKg,goalDays,targetCal,bmr,safeDeficit,goalWeight};
  localStorage.setItem('sb_plan',JSON.stringify(plan));
  showPlan(plan);
}

function showPlan(p){
  const stepsTarget=calcSteps(p);
  showSummary(p);
  showSteps(stepsTarget);
  showMenu(p.targetCal);
  showShopping();
  showWorkout();
  document.getElementById('secSummary').style.display='block';
  document.getElementById('secSteps').style.display='block';
  document.getElementById('secMenu').style.display='block';
  document.getElementById('secShopping').style.display='block';
  document.getElementById('secWorkout').style.display='block';
  document.getElementById('secSummary').scrollIntoView({behavior:'smooth',block:'start'});
}

function calcSteps(p){
  const calPerStep=p.w*0.0004;
  const stepCal=Math.round((p.safeDeficit*0.3)/calPerStep);
  return Math.max(4000,Math.min(15000,stepCal));
}

function showSummary(p){
  const stepsTarget=calcSteps(p);
  document.getElementById('planSummary').innerHTML=`
    <div class="card summary-card">
      <div class="summary-row"><span>Ваш вес</span><b>${p.w} кг</b></div>
      <div class="summary-row"><span>Целевой вес</span><b>${p.goalWeight} кг</b></div>
      <div class="summary-row"><span>Сбросить</span><b class="hl">${p.goalKg} кг</b></div>
      <div class="summary-row"><span>Срок</span><b>${p.goalDays} дней</b></div>
      <div class="summary-row"><span>Базовый метаболизм</span><b>${p.bmr} ккал</b></div>
      <div class="summary-row"><span>Дефицит в день</span><b>-${p.safeDeficit} ккал</b></div>
      <div class="summary-row"><span>Норма шагов</span><b>${stepsTarget.toLocaleString()} шагов</b></div>
      <div class="summary-row cal-highlight"><span>Калорий в день</span><b>${p.targetCal} ккал</b></div>
    </div>`;
}

function showSteps(target){
  let html='';
  STEP_PLAN.forEach(s=>{
    const active=target>=s.steps;
    html+=`<div class="card step-card${active?' step-active':''}">
      <div class="step-header"><span class="step-week">${s.week}</span><span class="step-target">${s.steps.toLocaleString()} шагов</span></div>
      <div class="step-details">
        <span>📏 ${s.dist}</span><span>🔥 ${s.cal}</span>
      </div>
      <div class="step-note">${s.note}</div>
      <div class="step-bar"><div class="step-bar-fill" style="width:${Math.min(100,target/s.steps*100)}%"></div></div>
    </div>`;
  });
  document.getElementById('stepsContainer').innerHTML=html;
}

function showMenu(targetCal){
  const menu=[];
  const dayNum=new Date().getDate()%5;
  for(let i=0;i<5;i++){
    const idx=(dayNum+i)%MEALS[i].length;
    menu.push(MEALS[i][idx]);
  }
  const totalBase=menu.reduce((s,m)=>s+m.cal,0);
  const labels=['🌅 Завтрак','🍎 Перекус','🍽️ Обед','🥤 Перекус','🌙 Ужин'];
  const times=['08:00','11:00','14:00','17:00','20:00'];
  let h='';let tp=0,tj=0,tu=0,tc=0;
  menu.forEach((m,i)=>{
    const scale=targetCal/totalBase;
    const cal=Math.round(m.cal*scale);
    let items=m.items.map(it=>`<div class="menu-item"><span class="mi-name">${it.p}</span><span class="mi-q">${it.q}</span><span class="mi-k">${Math.round(it.k*scale)} ккал</span></div>`).join('');
    h+=`<div class="card menu-card">
      <div class="menu-header"><span class="menu-label">${labels[i]}</span><span class="menu-time">${times[i]}</span><span class="menu-cal">${cal} ккал</span></div>
      <div class="menu-title">${m.name}</div>${items}
      <div class="menu-macros"><span>Б:${m.b}г</span><span>Ж:${m.j}г</span><span>У:${m.u}г</span></div>
    </div>`;
    tp+=m.b;tj+=m.j;tu+=m.u;tc+=cal;
  });
  document.getElementById('menuContainer').innerHTML=h;
  document.getElementById('menuTotals').innerHTML=`<div class="card totals-card">
    <div class="totals-title">Итого за день</div>
    <div class="param-grid">
      <div class="param-box"><span class="param-val">${tc}</span><span class="param-label">ккал</span></div>
      <div class="param-box"><span class="param-val">${tp}г</span><span class="param-label">Белки</span></div>
      <div class="param-box"><span class="param-val">${tj}г</span><span class="param-label">Жиры</span></div>
      <div class="param-box"><span class="param-val">${tu}г</span><span class="param-label">Углеводы</span></div>
    </div></div>`;
}

function showShopping(){
  let h='';
  Object.entries(SHOPPING).forEach(([cat,items])=>{
    h+=`<div class="shop-cat">${cat}</div>`;
    items.forEach(it=>{h+=`<div class="shop-item"><span>${it.p}</span><span class="shop-q">${it.q}</span></div>`;});
  });
  document.getElementById('shoppingList').innerHTML=h;
}

function showWorkout(){
  const dayIdx=(new Date().getDay()+6)%7;
  let h='';
  WORKOUTS.forEach((w,i)=>{
    const today=i===dayIdx;
    const typeColors={cardio:'rgba(34,197,94,.1)',strength:'rgba(234,179,8,.1)',hiit:'rgba(239,68,68,.1)',rest:'rgba(100,100,100,.1)'};
    const exHtml=w.exercises.map(e=>`<div class="ex-row">
      <span class="ex-name">${e.name}</span>
      <span class="ex-sets">${e.sets}</span>
      ${e.rest?'<span class="ex-rest">'+e.rest+'</span>':''}
    </div>`).join('');
    h+=`<div class="card workout-card${today?' workout-today':''}" style="border-color:${today?'rgba(34,197,94,.3)':''}">
      <div class="wk-header"><span class="wk-day${today?' wk-now':''}">${w.day}${today?' ●':''}</span><span class="wk-title">${w.title}</span></div>
      <div class="wk-exercises">${exHtml}</div>
    </div>`;
  });
  document.getElementById('workoutContainer').innerHTML=h;
}

document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('btnStart').addEventListener('click',()=>{
    document.getElementById('params').scrollIntoView({behavior:'smooth',block:'start'});
  });

  ['sb_h','sb_w','sb_sex','sb_age'].forEach(k=>{
    const v=localStorage.getItem(k);
    if(v){
      const id=k==='sb_h'?'inHeight':k==='sb_w'?'inWeight':k==='sb_sex'?'inSex':'inAge';
      const el=document.getElementById(id);
      if(el)el.value=v;
    }
  });

  const saved=localStorage.getItem('sb_plan');
  if(saved){
    plan=JSON.parse(saved);
    document.getElementById('goalSec').style.display='block';
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
