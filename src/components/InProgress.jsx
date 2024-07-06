import React, { useState } from 'react';

function InProgress() {
  const [inputValues, setInputValues] = useState(['']);
  const [number, setNumber] = useState(1);

  const colors = ['#3599ea','#ea492d', '#f0cd14', '#93cd55'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const inputStyle = {
      height: '50px',
      margin: '10px 0',
      border: `1px solid ${randomColor}`,
      borderLeft: `6px solid ${randomColor}`,
      display: 'inline-block',
      transition: '0.2s ease-in',
      paddingLeft: '20px',
      borderRadius: '7px',
      outline: 'none',
  };

  const handleInputChange = (index, event) => {
      const newInputValues = [...inputValues];
      newInputValues[index] = event.target.value;
      setInputValues(newInputValues);
  };

  const handleAddition = () => {
      setNumber(number + 1);
  };

  const handleAddInput = () => {
      setInputValues([...inputValues, '']);
      handleAddition();
  };

  const borderColor = {
      borderBottom: `2px solid ${randomColor}`,
  };

  return (
      <div className="main-div">
          <header style={borderColor} className='header'>
              <h2 className='header-name'>In Progress</h2>
              <div className='line'></div>
              <h2 className='number'>{number}</h2>
          </header>
          <main>
            <div className="all-values">
              <div>
                  {inputValues.map((inputValue, index) => (
                      <input
                          key={index}
                          style={inputStyle}
                          className='input-field'
                          type='text'
                          value={inputValue}
                          onChange={(event) => handleInputChange(index, event)}
                      />
                  ))}
              </div>
              <button className="add-btn" onClick={handleAddInput}>+</button>
            </div>
          </main>
      </div>
  );
}

export default InProgress;