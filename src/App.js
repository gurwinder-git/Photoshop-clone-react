import React, {useState} from 'react';
import Btn from './Btn';
import './App.css';
const defaultOptions = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: "%"
  },
  {
    name: "Gray Scale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: "%"
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: "deg"
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: "px"
  },
]

function App() {
  let [file, setFile] = useState(null);
  let [btnOptions, setBtnOptions] = useState(defaultOptions);
  let [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  let selectedOption = btnOptions[selectedOptionIndex];


  
  function handelImg(e){
    setFile(e.target.files[0])
  }

  function handleRange(e){
    // console.log(e.target.value);

    // update default options
    setBtnOptions((preValues) => {
      return preValues.map((option, index)=>{
        if(selectedOptionIndex !== index)
          return option
        else
          return {...option, value: e.target.value}
      })
    })

    // console.log(btnOptions)
  }

  function getImgStyle(){
    let filters = btnOptions.map((option, index)=>{
      return `${option.property}(${option.value}${option.unit})`
    })
    // console.log(filters);
    return {filter: filters.join(' ')}
  }

  return (
    <>
    <div className="titleDiv">
      <h1>photoshop</h1>
    </div>

    <div className = "main">

      <div className="container">
        <img src={file? URL.createObjectURL(file) : null} alt= {file? file.name : null} style = {getImgStyle()}/>
        <div className="btnsDiv">
          {
            btnOptions.map((data,index)=>(
              <Btn 
                key = {index} 
                name = {data.name} 
                active = {index === selectedOptionIndex}
                handleClick = {()=>{setSelectedOptionIndex(index)}}
                />
            ))
          }
          
        </div>
        <div className = "rangeDiv">
          <p className = "rangeValue">{selectedOption.value} {selectedOption.unit}</p>
          <input 
            type="range"
            min = {selectedOption.range.min}
            max = {selectedOption.range.max}
            value = {selectedOption.value}
            onChange = {handleRange}
            />
        </div>
      </div>

      <div className = "rightDiv">
        <button className = "downloadBtn">Download</button>
        <input type="file" name="srcImg" onChange = {handelImg} accept="image/*"/>
      </div>

    </div>
    <div className="footerDiv">
      <p>All CopyRighs are reseverd</p>
    </div>
    </>
  );
}

export default App;
