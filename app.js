(function (d) {

  'use strict';

  l = localStorage,
  k = 'c',
  q = d.body;

  q.contentEditable = true;
  q.innerHTML = l[k] || '';
  q.onkeyup = function () {
    l[k] = q.innerHTML;
  }

})(document);