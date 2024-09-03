import React, { useEffect, useState } from 'react'
import logo from '../assets/image.png'

const BuyNow = () => {
  var n = 100;
  const [boxes, setBoxes] = useState(Array(n).fill({value: 0, pos: 0}));
  const [filler, setFiller] = useState(Array(15).fill({value: 0, pos: 0}));
  const [scroll, setScroll] = useState({dirn: "", amount: 0});
  const [letters, setLetters] = useState(Array(23).fill({char: '', angle: 0}));

  useEffect(() => {
    let msg = "ECYOJ AMAM ECYOJ AMAM"
    // let msg = ".............................."
    // let msg = "."

    let temp_angle = 0.36
    let interval = 0.28
    const nextLetters = letters.map((letter, i) => {
      const updatedLetter = {
        ...letter,
        char: msg[i],
        angle: temp_angle
      };
      // console.log(`Initializing ${msg[i]} with angle: ${temp_angle}`);  // Log each letter and angle
      temp_angle = temp_angle + interval;
      return updatedLetter;
    });
    setLetters(nextLetters);
    
    let posX = 0;
    const handleScroll = () => {
      posX = window.scrollY;
      const tempScroll = {...scroll};
      tempScroll.amount = posX
      setScroll(tempScroll);
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <div className='flex-col w-full'>
      <div className='flex mt-7 overflow-auto no-scrollbar -left-48'>
        {boxes.map((box, i) => (
          <div style={{transform: `translateX(${Math.floor(scroll.amount)}px)`}} key = {i} className={`font-bold text-4xl text-mustardSauce mr-10 min-w-fit no-scrollbar`}>BUY NOW</div>
        ))}
      </div>

      <div className='flex w-full p-5'>
        <div className='flex-col px-10 py-16 w-1/4 border-4 border-mustardSauce rounded-[70px]'>
          <h1 className='font-bold text-4xl text-mustardSauce mb-5'>THE JOY OF PEPPA SAUCE</h1>
          <p className='text-4xl text-mustardSauce'>“Mama Joyce” was making this sauce with a hand mill, and has been doing so for almost 50 years for her family and friends.
          Spreading the joy of peppa sauce.</p>
        </div>
        <div className=' h-full relative font-bold text-8xl text-mustardSauce p-5 w-3/5 items-center'>
          <div className=''>
            <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24" cy="24" rx="14" ry="20" fill = "#14142B" stroke="#f7e8dc" strokeWidth="0"></ellipse>
            </svg>
          </div>

          <div className='absolute top-6'>
            <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24" cy="24" rx="16.3" ry="22.6" stroke="#f7e8dc" strokeWidth="0.3"></ellipse>
            </svg>
          </div>

          <div className='absolute top-6'>
            <svg width="800px" height="800px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="24" cy="24" rx="10.8" ry="17" stroke="#f7e8dc" strokeWidth="0.3"></ellipse>
            </svg>
          </div>

          {letters.map((letter, i) => {
            // console.log(letter);
            // console.log(scroll.amount / 150);
            let scroll_add = scroll.amount / 90;
            let curr_angle = (letter.angle + scroll_add) % (2*Math.PI);
            // console.log(410 - 333.5*Math.sin(letter.angle), 350 + 233*Math.cos(letter.angle));
            return (
                <div key = {i} className = ' absolute flex flex-wrap justify-around' style = {{transform: `rotate(${-Math.floor((curr_angle * (180 / Math.PI)) - (90))}deg)`, 
                top: 
                (curr_angle >= Math.PI / 2) && (curr_angle <= Math.PI) ? (364.5 - 305.5*Math.sin(curr_angle) - (45*(curr_angle / 4))) : 
                (curr_angle > Math.PI) && (curr_angle <= 3*(Math.PI / 2)) ? (364.5 - 305.5*Math.sin(curr_angle) + (42/((curr_angle / 4)))) :
                (curr_angle > 3*(Math.PI / 2)) && (curr_angle <= 2*(Math.PI)) ? (364.5 - 305.5*Math.sin(curr_angle) + (42/((curr_angle / 4)))) : 
                (364.5 - 305.5*Math.sin(curr_angle)), 
                left: 
                (curr_angle >= 1.8) && (curr_angle <= Math.PI) ? (410 + 200*Math.cos(curr_angle) - (45*((curr_angle / 4)))) : 
                (curr_angle > Math.PI) && (curr_angle <= 3*(Math.PI / 2)) ? (410 + 200*Math.cos(curr_angle) - (42/((curr_angle / 4)))) :
                (410 + 200*Math.cos(curr_angle))
                }}>

                <div className={'text-mustardSauce font-bold text-7xl w-20 h-20 flex justify-center'}>{letter.char}</div>
              </div>
            );
          })}

          {/* Center */}
          {/* <div class = 'position: absolute top-[364.5px] left-[410px]'>
            <p className='text-blue-500 font-bold text-7xl'>.</p>
          </div> */}
          {/* left */}
          {/* <div class = 'position: absolute top-[364.5px] left-[210px]'>
            <p className='text-blue-500 font-bold text-7xl'>.</p>
          </div> */}
          {/* right */}
          {/* <div class = 'position: absolute top-[364.5px] left-[610px]'>
            <p className='text-blue-500 font-bold text-7xl'>.</p>
          </div> */}
          {/* top */}
          {/* <div class = 'position: absolute top-[59px] left-[410px]'>
            <p className='text-blue-500 font-bold text-7xl'>.</p>
          </div> */}
          {/* bottom */}
          {/* <div class = 'position: absolute top-[660px] left-[410px]'>
            <p className='text-blue-500 font-bold text-7xl'>.</p>
          </div> */}
        </div>

        <div className=' overflow-hidden items-center flex flex-col py-16 w-1/4 border-4 border-mustardSauce rounded-[70px]'>
          <div className='font-bold text-4xl text-mustardSauce w-full border-b-4 flex justify-center p-3'>Blasian hot sauce</div>
          <img className = ' w-[80%] p-2' src = {logo} alt = 'fire' />
          <div className='font-bold text-4xl p-3 text-mustardSauce w-full border-t-4 flex justify-center'>2,400 SHU</div>

        </div>
        {/* {filler.map((box, i) => (
          <div className='text-5xl'>filler</div>
        ))} */}
      </div>

      <div className='flex mt-7 overflow-auto no-scrollbar -right-48'>
      {boxes.map((box, i) => (
        <div style={{transform: `translateX(${Math.floor(-scroll.amount)}px)`}} key = {i} className={` font-bold text-4xl text-mustardSauce mr-10 min-w-fit no-scrollbar`}>BUY NOW</div>
      ))}
      </div>
    </div>
  )
}
//Logic
//When you scroll down, use hover translate x for all the elements in the array continuosly with
//dynamic translate value. Keep increasing the translate value based on vertical scroll
//How to control the translate value using react and tailwind

export default BuyNow
