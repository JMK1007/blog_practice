'use strict';

const mongolia = document.querySelector('.body__mongolia');
const about = document.querySelector('.body__about');
const vietnam = document.querySelector('.body__vietnam');
const menuBar = document.querySelector('.title__menu');
const menuAbout = document.querySelector('.menu__about');
const menuMongo = document.querySelector('.menu__mongolia');
const menuViet = document.querySelector('.menu__Vietnam');

mongolia.innerHTML = ` <h1>몽골 : 기억에 남은 순간들</h1>
    <img src="mongolia/day1_1.jpg" alt="첫날" />
    <p>
      몽골여행 첫번째 날 <br />
      차강소브라가로 이동하는 길
    </p>
    <img src="mongolia/day1_2.jpg" alt="차강소브라가" />
    <p>차강소브라가에 도착해서 한 장!</p>
    <img src="mongolia/day1_3.jpg" alt="첫날 숙소" />
    <p>허허벌판 위 게르 (자연친화적인 화장실은 덤)</p>
    <img src="mongolia/day2.jpg" alt="욜링암 숙소" />
    <p>
      욜링암 근처 숙소 <br /><br />
      하루종일 비가 내리다가 숙소를 떠나기 직전에서야 <br />
      구름이 걷히기 시작했다.
    </p>
    <img src="mongolia/day3_1.jpg" alt="홍고린엘스" />
    <p>
      홍고린엘스 <br />
      <br />
      그야말로 고진감래 <br />
      올라갈 때는 고통이었지만 정말 아름다웠다.
    </p>
    <img src="mongolia/day3_2.jpg" class="day3_2" alt="홍고린엘스" />
    <p>
      마음에 드는 사진 <br />
      <br />
      자유로워 보여서 좋다.
    </p>
    <img src="mongolia/day3_3.jpg" alt="은하수" />
    <p>
      몽골에 간 궁극적인 이유 : 은하수! <br /><br />
      거의 매일 은하수를 볼 수 있었다. <br />
      별똥별은 물론이고 또렷한 별자리도 보았다.
      <br /><br />
    </p>
    <p>
    <br /><br />
    ...<br /><br />
      이밖에도 바양작, 쳉헤르 온천, 엉깅사원 등 <br />
      많은 곳에서 머물렀다. <br /><br />
      바양작에서는 모래폭풍을 만나는 바람에<br />
      이러다 죽겠다 싶은 순간도 있었고,<br />
      폭우가 쏟아져서 푸르공의 바퀴가 진흙에<br />
      빠지는 일도 있었다.
      <br /><br />
      10박 11일의 길다면 길고 짧다면 짧은 여정이었지만<br />
      정말 소중한 추억으로 남아있다.
    </p>`;

menuBar.addEventListener('click', (e) => {
  const target = e.target;
  if (target == menuAbout) {
    about.classList.remove('invisible');
    mongolia.classList.add('invisible');
    vietnam.classList.add('invisible');
  } else if (target == menuMongo) {
    mongolia.classList.remove('invisible');
    about.classList.add('invisible');
    vietnam.classList.add('invisible');
  } else if (target == menuViet) {
    vietnam.classList.remove('invisible');
    about.classList.add('invisible');
    mongolia.classList.add('invisible');
  }
});
