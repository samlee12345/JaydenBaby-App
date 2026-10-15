(() => {
  const checks=[];
  const check=(name,value)=>{checks.push({name,pass:!!value});if(!value)throw Error(name);};
  const click=s=>document.querySelector(s).click();
  if(document.documentElement.lang==='zh-HK')click('[data-action="language"]');
  click('.wordmark');
  check('English page has no Chinese body copy',!/[\u3400-\u9fff]/.test(document.querySelector('main').textContent));
  click('[data-action="back"]');
  check('Home return opens start screen',!!document.querySelector('.welcome-screen'));
  check('Root return is visibly disabled',document.querySelector('.back-control').disabled);
  click('main [data-action="home"]');
  click('[data-action="browse"]');
  const input=document.querySelector('#product-search');input.value='PIPA';input.dispatchEvent(new Event('input',{bubbles:true}));
  const id=document.querySelector('[data-product]').dataset.product;click(`[data-compare="${id}"]`);
  click('[data-action="language"]');
  check('Chinese document language',document.documentElement.lang==='zh-HK');
  check('Chinese placeholder',document.querySelector('#product-search').placeholder==='品牌或型號');
  check('Chinese options',document.querySelector('#brand-filter').options[0].text==='所有品牌');
  check('Language switch preserves search',document.querySelector('#product-search').value==='PIPA');
  check('Language switch preserves selections',JSON.parse(sessionStorage.getItem('jayden-preview')).selected.includes(id));
  click(`[data-product="${id}"]`);click('[data-action="back"]');
  check('Back retains current language',document.documentElement.lang==='zh-HK');
  check('Back restores search',document.querySelector('#product-search').value==='PIPA');
  check('Back located left of brand',document.querySelector('.back-control').getBoundingClientRect().right<document.querySelector('.wordmark').getBoundingClientRect().left);
  click('.wordmark');
  check('Portrait home remains one column',getComputedStyle(document.querySelector('.home-cards')).gridTemplateColumns.split(' ').length===1);
  check('No page overflow',document.documentElement.scrollWidth<=innerWidth);
  return JSON.stringify(checks);
})()
