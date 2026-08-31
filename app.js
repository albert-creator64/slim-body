function toggleFaq(el){
  const wasOpen=el.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  if(!wasOpen)el.classList.add('open');
}

function saveParams(){
  const h=parseFloat(document.getElementById('inHeight').value);
  const w=parseFloat(document.getElementById('inWeight').value);
  if(!h||!w||h<100||h>250||w<30||w>300)return;
  localStorage.setItem('sb_height',h);
  localStorage.setItem('sb_weight',w);
  showParams(h,w);
}

function showParams(h,w){
  const imt=(w/((h/100)*(h/100))).toFixed(1);
  const normLow=18.5*(h/100)*(h/100);
  const normHigh=25*(h/100)*(h/100);
  let goalWeight=normHigh;
  let status='',cls='';
  if(imt<18.5){status='Недостаточный вес';cls='imt-under';goalWeight=w;}
  else if(imt<25){status='Норма';cls='imt-normal';goalWeight=w;}
  else if(imt<30){status='Избыточный вес';cls='imt-over';goalWeight=normHigh;}
  else{status='Ожирение';cls='imt-obese';goalWeight=normHigh;}
  const diff=Math.max(0,w-goalWeight).toFixed(1);
  const bmr=Math.round(10*w+6.25*h-5*30+5);
  const calIntake=Math.round(bmr*0.75);

  document.getElementById('outIMT').textContent=imt;
  document.getElementById('outNorm').textContent=normLow.toFixed(0)+'-'+normHigh.toFixed(0);
  document.getElementById('outDiff').textContent=diff+' кг';
  document.getElementById('outCal').textContent=calIntake;

  const pct=Math.min(100,Math.max(0,(1-diff/w)*100));
  document.getElementById('barCur').textContent=w+' кг';
  document.getElementById('barGoal').textContent=goalWeight.toFixed(0)+' кг';
  document.getElementById('barFill').style.width=pct+'%';

  const st=document.getElementById('imtStatus');
  st.className='imt-status '+cls;
  st.textContent=status+' (ИМТ '+imt+')';
  if(diff>0)st.textContent+=' · цель: минус '+diff+' кг';

  document.getElementById('paramResult').style.display='block';
}

document.addEventListener('DOMContentLoaded',()=>{
  const savedH=localStorage.getItem('sb_height');
  const savedW=localStorage.getItem('sb_weight');
  if(savedH&&savedW){
    document.getElementById('inHeight').value=savedH;
    document.getElementById('inWeight').value=savedW;
    showParams(+savedH,+savedW);
  }

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target);}
    });
  },{threshold:0.1});
  document.querySelectorAll('.card,.faq-item').forEach(el=>{
    el.style.opacity='0';el.style.transform='translateY(20px)';el.style.transition='opacity .5s,transform .5s';
    observer.observe(el);
  });
  const style=document.createElement('style');
  style.textContent='.visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(style);
});
