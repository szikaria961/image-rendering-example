function  FruitsList({ fruits }) {
  return (
    <>
      <h1>List of Fruits</h1>
      {fruits.map(fruit => {
        return (
          <p key={fruit.id}>
            Name: {fruit.name} - Sugar: {fruit.nutritions.sugar} - Calories: {fruit.nutritions.calories}
          </p>
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