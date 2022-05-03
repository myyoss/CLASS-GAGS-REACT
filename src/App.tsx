import logo from './logo.svg';
import './View/styles/global.scss';

import Box from './View/Components/Box';
import Footer from './View/Components/Footer';

let img1 = <img src="/images/tal.jpg" alt="" />
let img2 = <img src="/images/michael.jpg" alt="" />
const img3 = <img src="/images/mazo.jpg" alt="" />
const img4 = <img src="/images/happy.jpg" alt="" />
const img5 = <img src="/images/eliya1.jpg" alt="" />
const img6 = <img src="/images/shimon.jpg" alt="" />
const img7 = <img src="/images/alone1.jpg" alt="" />
const img8 = <img src="/images/andrew1.jpg" alt="" />
const img9 = <img src="/images/andrew2.jpg" alt="" />
const img10 = <img src="/images/movie1.jpg" alt="" />
const img12 = <img src="./images/night.jpg" alt="" />
const img13 = <img src="./images/zoom.jpg" alt="" />
const img15 = <img src="./images/anoni.jpg" alt="" />



function App() {
  const boxes = [
    { question: 'מה שומעים כשטל שואל "מה קוררררריי?"', answer: 'צרצרים...', img: img1, id: 1 },
    { question: 'איך מיכאל פרנקל מאכיל את הילדים?', answer: 'עם לולאת ()forEach', img: img2, id: 2 },
    { question: 'למה מפתחים טובים הופכים לחסרי ביטחון?', answer: 'try{new Error()}catch(err){err({err.message})!!}', img: img3, id: 3 },
    { question: 'למה חצי מהאנשים בכיתה עזבו?', answer: 'כי יש להם חיים.', img: img13, id: 4 },
    { question: 'איפה אלייה?', answer: "בלע אותו ג'וינט...", img: img5, id: 5 },
    { question: 'מי מתגעגע לשמעון?', answer: 'צרצרים...', img: img6, id: 6 },
    { question: 'למה התלמידים בכיתה מעדיפים לעשות את התרגילים לבד?', answer: 'בשביל להעתיק מגוגל.', img: img7, id: 7 },
    { question: 'מי תמיד פותר את שיעורי הבית?', answer: 'אנדרו.', img: img15, id: 8 },
    { question: 'מי פותר את שיעורי הבית פעמיים?', answer: 'כשאנדרו עובר דירה.', img: img15, id: 9 },
    { question: 'איך אפשר לשנמך עוד קצת את קבצי הוידאו של המכללה?', answer: 'אי אפשר!', img: img10, id: 10 },
    
  ]

  const click = (id: any, img: any) => {
    let audio1 = new Audio('./sound/ding.mp3');
    let audio2 = new Audio('./sound/Cricket.mp3');
    // console.log(img.props.src)
    audio1.volume = 0.6;
    if (id === 1 || id === 6) {
      audio2.play();
    } else {
      audio1.play();
    }
    const stats: any = document.getElementById(`${id}`)
    let newImg: any = document.getElementById(`id${id}`)
    if (stats.style.display === "none") {
      stats.style.display = "block";
      if (id === 1 || id === 6) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/night.jpg" alt=""/></div>`
      } if (id === 4) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/happy.jpg" alt=""/></div>`
      }
      if (id === 5) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/eliya2.jpg" alt=""/></div>`
      }
      if (id === 7) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/alone2.jpg" alt=""/></div>`
      }
      if (id === 8) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/andrew1.jpg" alt=""/></div>`
      }
      if (id === 9) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/andrew2.jpg" alt=""/></div>`
      }
      if (id === 10) {
        newImg.innerHTML = `<div class='newImg' id='id${id}'><img src="./images/movie2.jpg" alt=""/></div>`
      }
    } else {
      stats.style.display = "none";
    }
  }
  return (
    <div className="App">
      <div className="wrapper">
        {boxes.map((box) => (
          <div className='box' key={box.id}>
            <div className='question' >{box.question}
              <div className='newImg' id={`id${box.id}`}>{box.img}</div></div>
            <button onClick={() => click(box.id, box.img)}>תשובה</button>
            <div id={`${box.id}`} className='answer' style={{ display: 'none' }}><p>{box.answer}</p></div>
          </div>
        ))}
      </div>
      <div className='footer'>
      <Footer/>
      </div>
    </div>
  );
}
export default App;
