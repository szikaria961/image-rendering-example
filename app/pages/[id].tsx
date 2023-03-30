async function getFruit(fruitId: string) {
  const response = await fetch(`https://fruityvice.com/api/fruit/${fruitId}`, 
  {
    next: { revalidate: 10 } // 
  });
  const data = await response.json();
  console.log({ data });
  return data;
}

export default async function FruitPage({ params }: any) {
  console.log({ params });
  const fruit = await getFruit(params.id);
  console.log({ fruit });
  return (
    <div>
      <h1>{fruit.id}</h1>
      <div>
        <h3>{fruit.name}</h3>
      </div>
    </div>
  )
}