window.jaydenMediaChecks = {status:'running'};
(async () => {
  const results=[];
  const assert=(name,ok)=>{results.push({name,pass:!!ok});if(!ok)throw Error(name);};
  const click=s=>{const el=document.querySelector(s);if(!el)throw Error('Missing '+s);el.click();};
  const input=(s,value,event='input')=>{const el=document.querySelector(s);el.value=value;el.dispatchEvent(new Event(event,{bubbles:true}));};
  const loaded=async img=>{assert('Image exists',!!img);await img.decode();assert('Image decodes',img.naturalWidth>0);};
  const result=(brand,model)=>{
    click('[data-action="home"]');click('[data-action="vehicles"]');
    click(`[data-vbrand="${brand}"]`);
    const group=model.replace(/\s*\([^)]*\)\s*$/,'').trim();
    click(`[data-vmodel="${group}"]`);click(`[data-vresult="${model}"]`);
  };
  if(document.documentElement.lang==='zh-HK')click('[data-action="language"]');
  click('[data-action="home"]');
  await loaded(document.querySelector('.home-product-photo img'));
  assert('Landing uses supplied Swivel PNG',document.querySelector('.home-product-photo img').src.includes('swivel-grow-max-air'));
  click('[data-action="browse"]');input('#brand-filter','Britax Römer','change');
  assert('Exactly four matching catalogue photos',document.querySelectorAll('.product-photo').length===4);
  for(const [id,file] of [['p3','advansafix-pro'],['p5','dualfix-pro'],['p7','kidfix-pro'],['p8','swivel-grow-max-air']]){
    const card=document.querySelector(`[data-product="${id}"]`);
    await loaded(card.querySelector('img'));
    assert('Correct photo for '+id,card.querySelector('img').src.includes(file));
    card.click();await loaded(document.querySelector('.detail-visual img'));
    assert('Matching detail photo '+id,document.querySelector('.detail-visual img').src.includes(file));
    click('[data-action="back"]');
  }
  assert('Unmatched product keeps illustration',!!document.querySelector('[data-product="p4"] .seat-art'));
  for(const id of ['p3','p5','p7'])click(`[data-compare="${id}"]`);
  click('[data-action="compare"]');
  assert('Three photos in comparison',document.querySelectorAll('.compare-art img').length===3);
  await Promise.all([...document.querySelectorAll('.compare-art img')].map(loaded));
  click('[data-action="back"]');click('[data-compare="p7"]');click('[data-compare="p4"]');click('[data-action="compare"]');
  assert('Mixed comparison labels missing image',document.querySelectorAll('.compare-art img').length===2&&document.querySelectorAll('.compare-art .seat-art').length===1);
  result('BMW','5-Series (F10) (2011 >)');
  assert('Top is an exterior photo placeholder',!!document.querySelector('.vehicle-portrait .vehicle-photo-placeholder')&&!document.querySelector('.vehicle-portrait .car-art'));
  await loaded(document.querySelector('.result-info .vehicle-layout-image'));
  assert('Correct reference below vehicle details',document.querySelector('.vehicle-layout-image').src.includes('5-seat-bmw-5'));
  assert('Reference remains unconfirmed',document.querySelector('.status-pill').textContent.includes('Confirmation needed')&&document.querySelector('figcaption').textContent.includes('reference only'));
  click('[data-action="language"]');
  assert('Chinese result and caption',document.querySelector('h2').textContent.includes('BMW')&&document.querySelector('figcaption').textContent.includes('只供參考')&&document.querySelector('.anchor-status').textContent.includes('暫未核實'));
  click('[data-action="language"]');
  result('Tesla','Model X Bench (2019 >)');
  assert('Bench version does not inherit six-seat image',!document.querySelector('.vehicle-layout-image')&&!!document.querySelector('.layout-pending'));
  result('Tesla','Model X Monopost (2019 >)');
  assert('Monopost has supplied reference',document.querySelector('.vehicle-layout-image').src.includes('6-seat-tesla-x'));
  result('BMW','6-Series Gran Coupe (4Dr) (2011 >)');
  assert('Four-door does not inherit four-seat coupe image',!document.querySelector('.vehicle-layout-image'));
  assert('No horizontal overflow',document.documentElement.scrollWidth<=innerWidth);
  result('BMW','5-Series (F10) (2011 >)');
  window.jaydenMediaChecks = {status: 'passed', results};
  return JSON.stringify(results);
})().catch(error=>{window.jaydenMediaChecks={status:'failed',error:error.message};throw error;})
