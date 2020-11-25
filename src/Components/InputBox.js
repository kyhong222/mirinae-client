import React, {useState} from 'react'

export default function InputBox(){

  
    const [inputData, setInputData] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [result, setResult] = useState("");

    const submitHandler = () => {
      console.log(inputData);
      setShowResult(true);
      setResult("translated:"+inputData);
      return;
    }
    const inputHandler = event => {
      // console.log(event.target.value);
      setInputData(event.target.value);
      // console.log(inputData)
    }

    return(
      <div>
        <form>
          <label>
            <input 
              type="text" 
              name="sourceText" 
              placeholder="type text"
              value={inputData}
              onChange={inputHandler}
              />
          </label>
          <button 
            onClick={() => {submitHandler()}}
            type="button"  
            >submit
          </button>
        </form>
      </div>
    )
}