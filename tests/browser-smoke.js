(() => {
const results=[];
const assert=(name,ok)=>{results.push({name,pass:!!ok});if(!ok)throw Error(name);};
const click=s=>{const e=document.querySelector(s);if(!e)throw Error('Missing '+s);e.click();};
const input=(s,value,event='input')=>{const e=document.querySelector(s);e.value=value;e.dispatchEvent(new Event(event,{bubbles:true}));};
if(document.documentElement.lang==='zh-HK')click('[data-action="language"]');
click('[data-action="home"]');click('[data-action="browse"]');
assert('Full catalogue',document.querySelectorAll('.product-card').length===102);
input('#brand-filter','Nuna','change');assert('Nuna filter',document.querySelectorAll('.product-card').length===11);
input('#product-search','PIPA');assert('Search combined with brand',document.querySelectorAll('.product-card').length===2);
click('[data-product]');assert('Product detail',!!document.querySelector('.specs'));
click('[data-compare]');click('[data-action="back"]');assert('Back preserves query',document.querySelector('#product-search').value==='PIPA');
input('#product-search','');
const ids=[...document.querySelectorAll('[data-product]')].map(e=>e.dataset.product);
for(const id of ids.slice(0,4)){const sel=JSON.parse(sessionStorage.getItem('jayden-preview')).selected;if(!sel.includes(id))click(`[data-compare="${id}"]`);}
assert('Compare cap',JSON.parse(sessionStorage.getItem('jayden-preview')).selected.length===3);
assert('Limit message',document.querySelector('#toast').textContent.includes('three'));
click('[data-action="compare"]');assert('Three comparison columns',document.querySelectorAll('thead th').length===4);
click('thead [data-compare]');assert('Remove comparison seat',document.querySelectorAll('thead th').length===3);
click('[data-action="home"]');click('[data-action="vehicles"]');input('#vehicle-search','Honda');assert('Vehicle brand search',document.querySelectorAll('[data-vbrand]').length===1);
click('[data-vbrand]');assert('Models loaded',document.querySelectorAll('[data-vmodel]').length>0);click('[data-vmodel]');assert('Years loaded',document.querySelectorAll('[data-vresult]').length>0);click('[data-vresult]');assert('Unconfirmed result',document.querySelector('.status-pill').textContent.includes('Confirmation needed'));
click('[data-action="help"]');assert('Help dialog',document.querySelector('dialog').open);click('[data-action="close"]');
assert('No viewport overflow',document.documentElement.scrollWidth<=innerWidth);
return JSON.stringify(results);
})()
