import { useRouter } from "next/router";

function FruitPage({ fruits }) {
  const router = useRouter();

  let genus, fruitName;
  const name = router.query.name;

  fruits.map(fruit => {
    if (fruit.name == name) {
      genus = fruit.genus;
      fruitName = fruit.name;
    }
  }); 
  return (
    <div>
      <h1>Fruit Name: {fruitName}</h1>
      <h3>Genus: {genus}</h3>
    </div>
  )
}

export default FruitPage;

export async function getServerSideProps() {
  const res = await fetch('https://fruityvice.com/api/fruit/all')
  const data = await res.json();

  return {
    props: {
      fruits: data,
    }
  }
}