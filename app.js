let selectedTarif=null;
let payMethod='card';

function toggleFaq(el){
  const wasOpen=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!wasOpen)el.classList.add('open');
}

function selectTarif(name,price){
  selectedTarif={name,price};
  document.getElementById('tarif').style.display='none';
  const sec=document.getElementById('payment');
  sec.style.display='block';
  document.getElementById('payTarifName').textContent={
    basic:'Базовый',premium:'Премиум',max:'Максимум'
  }[name];
  document.getElementById('paySum').textContent=price.toLocaleString('ru-RU')+' ₽';
  document.getElementById('btnPaySum').textContent=price.toLocaleString('ru-RU')+' ₽';
  sec.scrollIntoView({behavior:'smooth',block:'start'});
}

function setPayMethod(method){
  payMethod=method;
  document.getElementById('payCard').classList.toggle('active',method==='card');
  document.getElementById('payCrypto').classList.toggle('active',method==='crypto');
  document.getElementById('payCardForm').style.display=method==='card'?'block':'none';
  document.getElementById('payCryptoForm').style.display=method==='crypto'?'block':'none';
}

function formatCard(el){
  let v=el.value.replace(/\D/g,'');
  v=v.replace(/(.{4})/g,'$1 ').trim();
  el.value=v;
}

function formatExpiry(el){
  let v=el.value.replace(/\D/g,'');
  if(v.length>=2)v=v.slice(0,2)+'/'+v.slice(2);
  el.value=v;
}

function processPay(){
  const btn=document.getElementById('btnPay');
  btn.textContent='Обработка...';
  btn.style.opacity='.6';
  setTimeout(()=>{
    document.getElementById('payCardForm').style.display='none';
    document.getElementById('payCryptoForm').style.display='none';
    document.querySelector('.pay-methods').style.display='none';
    document.querySelector('.pay-summary').style.display='none';
    btn.style.display='none';
    document.querySelector('.pay-card .pay-secure').style.display='none';
    document.getElementById('paySuccess').style.display='block';
    document.getElementById('paySuccess').scrollIntoView({behavior:'smooth',block:'start'});
  },2000);
}

function scrollToTop(){
  window.scrollTo({top:0,behavior:'smooth'});
}

document.addEventListener('DOMContentLoaded',()=>{
  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}
    });
  },{threshold:0.1});
  document.querySelectorAll('.card,.tarif-card,.faq-item').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .5s,transform .5s';
    observer.observe(el);
  });
  const style=document.createElement('style');
  style.textContent='.visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(style);
});
