// import React, { useEffect, useState } from 'react';
import Link from 'next/link'


function  FruitsList({ fruits }) {
  /* Before implementing serverside rendering
  const [names, setNames] = useState([]);

  useEffect(()=> {
    const fetchNames = async () => {
      const res = await fetch('https://random-word-api.herokuapp.com/all')
      const data = await res.json();
      setNames(data);
    }
    fetchNames();
  }, [])
  console.log(names);
  */
  return (
    <>
      <h1>List of Fruits</h1>
      {fruits.map(fruit => {
        return (
          <Link key={fruit.id} href= {`/fruits/${fruit.name}`}>
          <p key={fruit.id}>
            Name: {fruit.name} - Sugar: {fruit.nutritions.sugar} - Calories: {fruit.nutritions.calories}
          </p>
          </Link>
        )
      })
      }
    </>
  )
}

export default FruitsList;

export async function getServerSideProps() {
  const res = await fetch('https://fruityvice.com/api/fruit/all')
  const data = await res.json();

  return {
    props: {
      fruits: data,
    }
  }
}