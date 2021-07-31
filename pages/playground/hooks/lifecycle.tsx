import React, { useState, useEffect, useMemo, useCallback, useRef } from "react"
import Button from "../../../components/ModalDemo/Button";
import useConstructor from "../../custom-hooks/useConstructor";
// Destructing
// chay lan dau tien va duy nhat truoc khi render

let isRun = false;

const LifeCycleDemo = () => {
  // = costructor
      
        
  useConstructor(() => {
    console.log("constructor cach 4")
   })
  
    useMemo(() => {
     console.log("constructor cach 3");
   }, []);

    const isRunHook = useRef(false);
    const inputFileEl = useRef(null);
    const [counter, setCounter] = useState(0);
    const [visible, setvisible] = useState(true);
    const [user, setUser ] = useState({
      firstName: 'John',
      lastName: 'Smith'
    });
   
  if(isRunHook.current === false) {
    console.log("constructor cach 2");

    isRunHook.current = true;

  }
  if(isRun === false) {
    // Xu li constructor
    console.log("constructor cach 1");
    isRun = true;
  }
 //   useEffect(() => {
    // Update the document title using the browser API
    // DidMount & DidUpdate
//    console.log("useEffect run");

 //   return () => {
      // componentwillUnmout <=> Component will be remove in DOM
 //   }
//  });
  useEffect(() => {
    console.log("Lang nghe su thay doi cua counter va visible");
  }, [ counter, visible ])

  useEffect(() => {
    // DidMount - Chay 1 lan duy nhat sau khi render lan dau tien
    console.log("userEffect run - empty deps")
  }, [])

  useEffect(() => {
      console.log("Lang nghe su thay doi cua counter");
  }, [counter]);

  useEffect(() => {
    console.log("Lang nghe su thay doi cua visible");
  }, [visible]);

  const fullName = useMemo(() => {
    return user.firstName + ' ' + user.lastName
  }, [user]);

    const handleIncreaseCounter = useCallback(() => {
      setCounter(counter + 1);
    }, [counter])
    return (
        <div className="container">
            <h1>Play Ground - Life Cycle - React Hooks { fullName }</h1>
            <button onClick={handleIncreaseCounter} >Counter Add</button>
            <p>{counter}</p>


          <button onClick ={() => {
            setvisible(false);
          }}>Hide button</button>
          {  
              visible && <Button />
          }
          <hr />

          <input style={{
            opacity: 0,
            visibility :'hidden',
            position: "fixed",
            left: '-1000px'
          }} type="file" />
            
          <button
              onClick = {() => {
                console.log(inputFileEl.current);
                // inputFileEl.current.click();
                const input =  document.querySelector('input[type-"file"') as HTMLInputElement;
              input.click();
              }}
           className="upload">Upload Image</button>
      </div>
    )
}

export default LifeCycleDemo;