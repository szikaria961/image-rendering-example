"use client";
import React, { useEffect, useState } from 'react';
import getServerSiderProps from './Header';


function Home() {
  /*
  Before implementing serverside rendering
  const [names, setNames] = useState([]);

  useEffect(()=> {
    const fetchNames = async () => {
      const res = await fetch('https://random-word-api.herokuapp.com/all')
      const data = await res.json();
      setNames(data);
    }
    fetchNames();
  }, [])
  */
  return (
    <>
      <div className="font-bold">Image Rendering Example in NextJS</div>
      {/* {props?.length === 0 ? (
          <div>loading...</div>
        ) : (
          props?.map((name: string) => (
            <div>
              <p>
                {name}
              </p>
            </div>
          ))
        )} */}
    </>
  )
}

export default Home;
