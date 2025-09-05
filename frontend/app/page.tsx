async function getData() {
  const res = await fetch("http://localhost:8000/api/hello/", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main style={{ padding: 20 }}>
      <h1>{data.message}</h1>
      <ul>
        {data.items.map((num: number) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
    </main>
  );
}
