document.addEventListener('click', function(){
  return import(/* webpackPrefetch: true */ './count.js').then(({default: add})=>{
    add();
  })
});