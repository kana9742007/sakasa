$(function () {
  // #で始まるアンカーをクリックした場合に処理
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href = $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({ scrollTop: position - 50 }, speed, 'swing');
    return false;
  });
});

$(function () {
  var $clckTarget = document.getElementById('js-btn'),
      $addClassTarget = document.body,
      $closeTarget = document.getElementsByClassName('js-close'),
      classname = 'is-active',
      addclass = function () {
        $addClassTarget.classList.add(classname),
          clickCount = 1;
      },
      removeclass = function () {
        $addClassTarget.classList.remove(classname),
          clickCount = 0;
      },
      clickCount = 0;

      $clckTarget.addEventListener('click', function (e) {
        if (clickCount == 0) {
          addclass();
          for (var i = 0; i < $closeTarget.length; i++) {
            $closeTarget[i].addEventListener("click", function (e) {
              removeclass();
            });
          }
        } else {
          removeclass();
        }
        return false;
      });
      window.addEventListener("resize", function () {
        if (window.getComputedStyle($clckTarget).display == "none") {
          removeclass();
        }
      });

      //  メニュー
      $('a[href^="#"]').click(function () {
        removeclass();
      });

});