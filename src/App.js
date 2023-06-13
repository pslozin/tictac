import logo from './logo.svg';
import './App.css';

import {styled} from 'styled-components'
import { useState } from 'react';

 
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
`

const Wrapper = styled.div`
height: 300px;
width: 300px;
display: flex;
flex-wrap: wrap;
align-items: center;
background-color: gray;
border: 2px solid;
`

const Plays = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  font-size: 100px;
  border: 1px solid;
  width: 32.5%;
  height: 32.5%;
  
  
`



function App() {

  const [isXnext, setisXnext] = useState(true)

  
  

function Sqr(location)
{
  
  const [val, setVal] =  useState('')
 
 

  function clHandler()
  {
    console.log("LOCATION", location)
    if(val === '' && isXnext === true)
    {
      setVal('X')
      setisXnext(false)
    
    }
    else if (val === '' && isXnext === false)
    {
      setVal('O')
      setisXnext(true)
    }

    else if(val === 'X' && isXnext === false){

    }

  }
  
  return(
    <Plays onClick={clHandler}>
      
      {val}
    
    </Plays>
  )
}
  return (
    <Container>
      <Wrapper>
       {Sqr(1)}
       {Sqr(2)}
       {Sqr(3)}
       {Sqr(4)}
       {Sqr(5)}
       {Sqr(6)}
       {Sqr(7)}
       {Sqr(8)}
       {Sqr(9)}
      </Wrapper>
    </Container>
  );
}

export default App;
