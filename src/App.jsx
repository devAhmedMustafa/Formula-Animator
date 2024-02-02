import { useEffect, useState } from 'react'
import '@styles/App.css'
import '@styles/grid.css'
import {sin, cos, tan, sec, csc, cot, asin, acos, atan, asec, acsc, acot, sinh, cosh, tanh, sech, csch, coth} from "@utils/MathFunctions.js"
import logo from "@assets/STAR.png"
import blender_logo from "@assets/blender.png"
import blenderScript from './utils/BlenderTemplate'

function App() {

  const [formula, setFormula] = useState("x")
  const [shift, setShift] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [scale, setScale] = useState(100)
  const [error, setError] = useState("")
  const [script, setScript] = useState("")
  const [frames, setFrames] = useState(10)

  const FormulaExtractor = (x)=>{

    var new_f = formula.replace("^","**");
    console.log(eval(new_f))

    try{
      var n = eval(new_f)
      setError("")
      return n;
    }
    catch(err){
      setError('Error in formula: Invalid character or missing parenthesis')
      return 0;
    }
  }

  let t = 0;
  let delta = 0.01;

  useEffect(()=>{
    function FormulaGrapher(){
      let particle = document.querySelector('#particle')
      const width = document.querySelector('#graph').offsetWidth;
      const height = document.querySelector('#graph').offsetHeight;
  
      t+= delta * speed;
  
      let x = t * scale + width/2;
      let y = -FormulaExtractor(t) * scale + height/2;
      
      if (x > width || y < 0 || x < 0 || y > height)
        delta = -delta;
  
      particle.style.left = `${(x)}px`;
      particle.style.top = `${(y)}px`;
      requestAnimationFrame(FormulaGrapher)
    }
    FormulaGrapher();

    setScript(blenderScript(formula, speed, scale/100, frames))
  }, [shift])

  return (
    <div className="parent flex flex-col gap-10 w-full">
          <div className="flex justify-around items-center gap-4 bg-gradient-to-r from-blue-900 to-orange-700 p-5">
            
            <div className='flex items-center gap-4'>
              <img src={blender_logo} width={40} alt="" />
              <p className="title">Formula Animator</p>
            </div>
      

            <div className='mb-auto flex items-center justify-center gap-5 p-2'>
              <p className='lg:block hidden'>Developed by Star Plus Games</p>
              <img src={logo} width={30} alt="" />
            </div>
              
          </div>
          <div className="w-full flex flex-col justify-center gap-8 items-center">

              <div className="flex flex-wrap items-center justify-center gap-2">

                  <label for="form">Formula</label>
                  <input className='text_input w-full' type="text" id="form" value={formula} onChange={(e)=> setFormula(e.target.value)}/>
                  <label for="speed">Speed</label>
                  <input className='text_input w-28' id='speed' type="number" value={speed} onChange={(e)=>setSpeed(e.target.value)}/>
                  <label for="scale">Scale</label>
                  <input className='text_input w-28' id='scale' type="number" value={scale} onChange={(e)=>setScale(e.target.value)}/>
                  <label for="frames">Frames</label>
                  <input className="text_input w-28" id='frames' type='number' value={frames} onChange={(e)=>setFrames(e.target.value)} />

                  <button className='focus:outline-none button' onClick={()=> setShift(!shift)}>Set</button>

                  <span className='text-sm text-red-600 font-bold'>{error}</span>
              </div>

              <div id="graph" className="w-full h-[500px] bg-green-300 relative overflow-hidden">

                <div className='w-full absolute top-[50%] h-[1px] bg-black translate-y-[-50%]'></div>
                <div className='h-full absolute left-[50%] top-0 w-[1px] bg-black translate-x-[-50%]'></div>

                <div className='grid'></div>
                  
                <div id="particle" className="w-5 h-5 bg-pink-500 rounded-full absolute translate-x-[-50%] translate-y-[-50%]"></div>

              </div>

              { script.length > 0 &&

              <div>
                <button className='text-lg flex gap-4 items-center bg-[#2e2e2e] px-4 py-2 rounded-lg border-purple-500 hover:border-2' onClick={()=> navigator.clipboard.writeText(script)}>
                  <p>Blender Script</p>
                  <i class="fa-regular fa-copy"></i>
                </button>
                
              </div>

              }

          </div>

      </div>
  )
}

export default App
