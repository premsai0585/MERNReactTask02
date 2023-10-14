import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Calculator = () => {
    const handleOnClick = (e)=>{
        const calcSpace = document.querySelector('.inp');
        calcSpace.innerHTML += e.target.innerHTML;
    }
    const validateExpression = () =>{
        const calcSpace = document.querySelector('.inp');
        const arr = calcSpace.innerHTML.split(' ').filter((e)=>{
            return e!=='';
          });
        const len = arr.length;
        if(arr[len-1]==='+' ||arr[len-1]==='-'||arr[len-1]==='x'||arr[len-1]==='÷'){
        toast.error('Invalid Expression ending with operator', {
                position: toast.POSITION.TOP_CENTER
        });
        return false;
        }
        else{
         return true;   
        }
    }
    const evalExpression = () =>{
        const calcSpace = document.querySelector('.inp');
        let valid = validateExpression();
        if(!valid){
            return
        }
        if(calcSpace.innerHTML){
            let text=calcSpace.innerHTML;
            if(calcSpace.innerHTML.includes('x')){
                text=calcSpace.innerHTML.replace(/x/g, '*')
            }
            if(calcSpace.innerHTML.includes('÷')){
                text=calcSpace.innerHTML.replace(/÷/g, '/')
          
            }
            console.log(text);
            calcSpace.innerHTML += `<br><br> ${eval(text)}`;
        }
    }
    const deleteExp = ()=>{
        const calcSpace = document.querySelector('.inp');
        let arr = calcSpace.innerHTML.split('');
        console.log(arr);
        let len = arr.length;
        let arr2 = arr.slice(0,len-1);
        calcSpace.innerHTML = arr2.join('');
    }
  return (
    <div className='calc'>
      <div className="topbar">
        <div className="circle"></div>
      </div>
      <div className='inp'></div>
      <div className="keypad">
        <div onClick={handleOnClick} className='keys'>7</div>
        <div onClick={handleOnClick} className='keys'>8</div>
        <div onClick={handleOnClick} className='keys'>9</div>
        <div className='keys spec'><i onClick={deleteExp} class="fa-solid fa-delete-left"></i> <span onClick={handleOnClick}>÷</span></div>
        <div onClick={handleOnClick} className='keys'>4</div>
        <div onClick={handleOnClick} className='keys'>5</div>
        <div onClick={handleOnClick} className='keys'>6</div>
        <div onClick={handleOnClick} className='keys'>x</div>
        <div onClick={handleOnClick} className='keys'>1</div>
        <div onClick={handleOnClick} className='keys'>2</div>
        <div onClick={handleOnClick} className='keys'>3</div>
        <div onClick={handleOnClick} className='keys'>-</div>
        <div onClick={handleOnClick} className='keys'>0</div>
        <div onClick={handleOnClick} className='keys'>.</div>
        <div onClick={evalExpression} className='keys'>=</div>
        <div onClick={handleOnClick} className='keys'>+</div>
      </div>
      <ToastContainer />
    
    </div>
  )
}

export default Calculator
