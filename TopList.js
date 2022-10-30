(function () {
  const DOM = ` <section class="bili-grid"> <div class="video-card-list is-main"> <div class="area-header"> <div class="left"><a id="动画" class="the-world area-anchor" data-id="8"></a> 
  <svg t="1655550247727" class="icon" style="width: 2.5em;height: 2.5em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="970" data-spm-anchor-id="a313x.7781069.0.i1" class="selected"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="971"></path></svg>
  <a class="title" href="https://www.bilibili.com/v/popular/rank/all" target="_blank"><span>排行榜</span></a></div> <div class="right"><button class="primary-btn roll-btn refresh1"><svg style="transform: rotate(180deg);" class="refresh-icon"> <use xlink:href="#widget-arrow"></use> </svg><span>上一页</span></button><button class="primary-btn roll-btn refresh2"><svg class="refresh-icon"> <use xlink:href="#widget-arrow"></use> </svg><span>下一页</span></button><a class="primary-btn see-more" href="https://www.bilibili.com/v/popular/rank/all" target="_blank"><span>查看更多</span><svg> <use xlink:href="#widget-arrow"></use> </svg></a></div> </div> <div class="video-card-body"> </div> </div> <aside> <div class="aside-wrap"> <div class="aside-head"> <div class="area-header"> <div class="left"> <!----> <!----><a class="title rank-title" href="https://www.bilibili.com/v/popular/rank/all" target="_blank"><span>排行榜</span></a> </div> <div class="right"><a class="primary-btn see-more" href="https://search.bilibili.com/all?keyword=nijisanji" target="_blank"><span>更多</span><svg> <use xlink:href="#widget-arrow"></use> </svg></a></div> </div> </div> <div class="aside-body"> <div class="aside-core"> <div class="bili-rank-list-video bili-rank-list-video__grid" data-report="partition_rank.content"> <ul class="bili-rank-list-video__list video-rank-list"> </ul> </div> </div> </div> </div> </aside> </section> `;
  const API = {
    getvideo: async (url) => {
      let res = await fetch(url);
      return res.json();
    },
    s2d: (string) => {
      //string to dom
      return new DOMParser().parseFromString(string, "text/html").body.childNodes[0];
    },
    datetrans: (date) => {
      var date = new Date(date * 1000); //如果date为13位不需要乘1000
      var Y = date.getFullYear();
      var M = API.add0(date.getMonth() + 1);
      var D = API.add0(date.getDate());
      return Y == new Date().getFullYear() ? M + "-" + D + " " : Y + "-" + M + "-" + D + " ";
    },
    timetrans: (time) => {
      var s = time % 60;
      var m = API.add0(parseInt(time / 60));
      var h = parseInt(time / 3600);
      if (h > 0) return `${API.add0(h)}:${m}:${s}`;
      else return `${m}:${s}`;
    },
    bigNum: (num) => {
      return num > 10000 ? `${(num / 10000).toFixed(2)}万` : num;
    },
    add0: (num) => {
      return (num < 10)? "0" + num:num;
    },
  };

  async function getCards() {
    let url = "https://api.bilibili.com/x/web-interface/ranking/v2?rid=0&type=all";
    let videos = (await API.getvideo(url)).data.list;
    console.log(videos);
    return videos;
  }
  function drawCard() {
    let cardDOMs = document.querySelector("#i_cecream > main > section:nth-child(3) > div > div.video-card-body");
    cardDOMs.innerHTML = "";
    for (let i = page * 8; i < page * 8 + 8; i++) {
      item = videos[i];
      item.title = item.title.replace(/<em class="keyword">(.*?)<\/em>/g, "$1");
      let cardDOM = ` <div class="bili-video-card" data-report="partition_recommend.content"> <div class="bili-video-card__skeleton hide"> <div class="bili-video-card__skeleton--cover"></div> <div class="bili-video-card__skeleton--info"> <div class="bili-video-card__skeleton--right"> <p class="bili-video-card__skeleton--text"></p> <p class="bili-video-card__skeleton--text short"></p> <p class="bili-video-card__skeleton--light"></p> </div> </div> </div> <div class="bili-video-card__wrap __scale-wrap"><a href="//www.bilibili.com/video/${ item.bvid }" target="_blank"> <div class="bili-video-card__image __scale-player-wrap"> <div class="bili-video-card__image--wrap"> <picture class="v-img bili-video-card__cover"> <source srcset="${item.pic.replace( "http", "https" )}@672w_378h_1c.webp" type="image/webp"> <img src="${item.pic}@672w_378h_1c" alt="${ item.title }" loading="lazy" onload=""> </picture> <div class="v-inline-player"></div> </div> <div class="bili-video-card__mask"> <div class="bili-video-card__stats"> <div class="bili-video-card__stats--left"> <span class="bili-video-card__stats--item"> <svg class="bili-video-card__stats--icon"><use xlink:href="#widget-video-play-count"></use></svg> <span class="bili-video-card__stats--text">${API.bigNum( API.bigNum(item.stat.view) )}</span></span> <span class="bili-video-card__stats--item"> <svg class="bili-video-card__stats--icon"><use xlink:href="#widget-agree"></use></svg> <span class="bili-video-card__stats--text">${API.bigNum( API.bigNum(item.stat.favorite) )}</span></span> </div> <span class="bili-video-card__stats__duration">${API.timetrans( item.duration )}</span> </div> </div> </div> </a> <div class="bili-video-card__info __scale-disable"> <div class="bili-video-card__info--right"><a href="//www.bilibili.com/video/${ item.bvid }" target="_blank"> <h3 class="bili-video-card__info--tit" title="${item.title}">${ item.title }</h3> </a> <p class="bili-video-card__info--bottom"> <a class="bili-video-card__info--owner" href="//space.bilibili.com/${ item.owner.mid }" target="_blank"> <svg class="bili-video-card__info--owner__up"><use xlink:href="#widget-up"></use></svg> <span class="bili-video-card__info--author">${ item.owner.name }</span> <span class="bili-video-card__info--date">· ${API.datetrans(item.pubdate)}</span> </a> </p> </div> </div> </div> </div> `;
      cardDOMs.append(API.s2d(cardDOM));
    }
  }
  function drawList() {
    let listDOMs = document.querySelector("#i_cecream > main > section:nth-child(3) > aside > div > div.aside-body > div > div > ul");
    let list = videos;
    listDOMs.innerHTML = "";
    let num = 0;
    list.map((item) => {
      item.title = item.title.replace(/<em class="keyword">(.*?)<\/em>/g, "$1");
      let listDOM;
      if (num == 0) {
        listDOM = ` <li class="bili-rank-list-video__item"> <div class="bili-rank-list-video__item--wrap"><span class="bili-rank-list-video__item--index" data-index="1">${++num}</span><a href="//www.bilibili.com/video/${ item.bvid }" class="rank-video-card" target="_blank"> <div class="rank-video-card__image"> <picture class="v-img rank-video-card__cover"> <source srcset="${ item.pic }@192w_108h_1c.webp" type="image/webp"><img src="${ item.pic }@192w_108h_1c.webp" alt="${ item.title }" loading="lazy" onload=""> </picture> </div> <div class="rank-video-card__info"> <h3 class="rank-video-card__info--tit" title="${item.title}">${ item.title } </h3> </div> </a></div> </li>`;
      } else {
        listDOM = ` <li class="bili-rank-list-video__item"> <div class="bili-rank-list-video__item--wrap"> <span class="bili-rank-list-video__item--index" data-index="${++num}">${num}</span> <a href="//www.bilibili.com/video/${ item.bvid }" class="rank-video-card rank-video-card__concise" target="_blank"> <div class="rank-video-card__info"> <h3 class="rank-video-card__info--tit" title="${ item.title }"> ${ item.title }</h3> </div> </a></div> </li>`;
      }
      listDOMs.append(API.s2d(listDOM));
    });
  }

  var page = 0;
  async function refresh1() {
    page--;
    if (page < 0) page = parseInt(100/8);
    drawCard();
  }
  async function refresh2() {
    page++;
    if (page * 8 > 100) page = 0;
    drawCard();
  }

  async function init() {
    const content = document.querySelector("#i_cecream > main");
    const anchor = document.querySelector("#i_cecream > main > section:nth-child(3)");
    content.insertBefore(API.s2d(DOM), anchor);
    document.querySelector(".refresh1").addEventListener("click", refresh1);
    document.querySelector(".refresh2").addEventListener("click", refresh2);
    videos = await getCards();
    drawCard();
    drawList();    
  }
  init();
})();
