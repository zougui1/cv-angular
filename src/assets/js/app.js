$(function () {
  $('.tabs').tabs();
});

$(function () {

  var link = $("#tabs");
  var offset = link.offset();

  var top = offset.top;
  var bottom = top + link.outerHeight();

  $(window).scroll(function () {
    if ($(this).scrollTop() > top) {
      $('#tabs').addClass("fixed");
    } else {
      $('#tabs').removeClass("fixed");
    }
  });
});


var cvElement = $('.cv-container');
var sideLeft = $('.cv-left');
var skillBar1 = $('.skill-bar.1');
var skillBar2 = $('.skill-bar.2');
var createdSite = $('.cv-site-created');
var tl1 = new TimelineLite();

tl1.from(cvElement, 0.7, {
    height: 0
  })
  .from(sideLeft, 0.3, {
    width: 0,
    padding: 0
  })
  .staggerFrom(skillBar1.find('.cv-skill'), 0.2, {
    marginLeft: -100,
    autoAlpha: 0,
    skewX: -150
  }, 0.02)
  .from(createdSite.find('.cv-img'), 0.2, {
    scale: 0
  })
  .staggerFrom(skillBar2.find('.cv-skill'), 0.2, {
    marginLeft: -100,
    autoAlpha: 0,
    skewX: -150
  }, 0.02)
  .pause();

var container = $('.container');
var progressBar = container.find($('.progress'));
var wildLifeSection = $('.wild-life-section');
var tl2 = new TimelineLite();

tl2.staggerFrom(progressBar.find('.determinate'), 0.4, {
    width: 0
  }, 0.15)
  .staggerFrom(progressBar.find('h5'), 0.2, {
    autoAlpha: 0
  }, 0.15, '0.5')
  .staggerFrom(wildLifeSection.find('.element'), 0.2, {
    scale: 0,
    autoAlpha: 0
  }, 0.2, (0.2 * 11))
  .pause();


var xpCard = $('.xp-card');
var tl3 = new TimelineLite();

tl3.from(xpCard, 0.7, {
    height: 0,
    padding: 0
  })
  .pause();

var cardPanel = $('.card-panel');
var progressBar2 = cardPanel.find($('.progress'));
var tl4 = new TimelineLite();

tl4.staggerFrom(cardPanel, 1, {
    height: 0,
    padding: 0
  })
  .staggerFrom(progressBar2.find('.determinate'), 0.5, {
    width: 0
  }, 0.3)
  .staggerFrom(progressBar2.find('h5'), 0.5, {
    autoAlpha: 0
  }, 0.3, '0.6')
  .pause();


$(function () {
  tl1.timeScale(1);
  tl1.play();
});

$('#tab-cv').click(() => {
  tl1.timeScale(1);
  tl1.play();

  tl2.timeScale(10);
  tl2.reverse()
  tl3.timeScale(10);
  tl3.reverse()
  tl4.timeScale(10);
  tl4.reverse()
});

$('#tab-skill').click(() => {
  tl2.timeScale(1);
  tl2.play();

  tl1.timeScale(10);
  tl1.reverse();
  tl3.timeScale(10);
  tl3.reverse();
  tl4.timeScale(10);
  tl4.reverse();
});

$('#tab-xp').click(() => {
  tl3.timeScale(1);
  tl3.play();

  tl1.timeScale(10);
  tl1.reverse()
  tl2.timeScale(10);
  tl2.reverse()
  tl4.timeScale(10);
  tl4.reverse()
});

$('#tab-diplome').click(() => {
  tl4.timeScale(1);
  tl4.play();

  tl1.timeScale(10);
  tl1.reverse();
  tl2.timeScale(10);
  tl2.reverse();
  tl3.timeScale(10);
  tl3.reverse();
});
