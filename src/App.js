import React, {useState, useEffect} from 'react';
import Btn from './Btn';
import './App.css';
import {toJpeg } from 'html-to-image';
import * as download from "downloadjs";

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

  useEffect(() => {
      setBtnOptions(defaultOptions)
      setSelectedOptionIndex(0)
  }, [file])
  
  
  function handelImg(e){
    setFile(e.target.files[0])
  }

  function handleRange(e){
    // console.log(e.target.value);

    // update setBtnOptions options not default options
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

  function downloadImg(){
    var node = document.getElementById('image');
    toJpeg(node)
      .then((dataUrl) => {
        console.log(dataUrl)
        download(dataUrl,`${Date.now()}Gurwinder_Singh`)
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  }

  return (
    <>
    <div className = "main">

      <div className="container">
        <h1>photoshop</h1>
        {file? <img id = "image" src={file? URL.createObjectURL(file) : null} alt= {file? file.name : null} style = {getImgStyle()}/>: <h4>Please select image...</h4>}
        
        <div className="btnsDiv">
          {
            btnOptions.map((data,index)=>(
              <Btn 
                key = {index} 
                name = {data.name} 
                handleClick = {()=>{setSelectedOptionIndex(index)}}
                active = {index === selectedOptionIndex}
                isDisable = {file? false: true}
                />
            ))
          }
          
        </div>
        <div className = "rangeDiv">
          <p className = "rangeValue" >{selectedOption.value} {selectedOption.unit}</p>
          <input 
            type="range"
            min = {selectedOption.range.min}
            max = {selectedOption.range.max}
            value = {selectedOption.value}
            onChange = {handleRange}
            disabled = {file? false: true}
            />
        </div>
      </div>

      <div className = "rightDiv">
        <button className = "downloadBtn" onClick = {downloadImg} disabled = {file? false: true}>Download</button>
        <input type="file" name="srcImg" onChange = {handelImg} accept="image/*"/>
      </div>

    </div>
    <div className="footerDiv">
      <p>Created by Gurwinder Singh</p>
    </div>
    </>
  );
}

export default App;
