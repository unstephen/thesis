(function(){
  var bar = document.getElementById('progress');
  var topBtn = document.getElementById('top-btn');
  window.addEventListener('scroll', function(){
    var h = document.documentElement;
    var p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
    bar.style.width = (p * 100).toFixed(2) + '%';
    topBtn.classList.toggle('on', h.scrollTop > 600);
  }, {passive:true});
  topBtn.addEventListener('click', function(){ window.scrollTo({top:0, behavior:'smooth'}); });

  // 目录高亮
  var items = Array.prototype.slice.call(document.querySelectorAll('.toc-item'));
  var secs = items.map(function(a){ return document.getElementById(a.getAttribute('href').slice(1)); });
  function spy(){
    var y = window.scrollY + 140, idx = 0;
    for (var i = 0; i < secs.length; i++){ if (secs[i] && secs[i].offsetTop <= y) idx = i; }
    items.forEach(function(a, i){ a.classList.toggle('now', i === idx); });
  }
  window.addEventListener('scroll', spy, {passive:true});
  spy();
})();
