export async function getAnimals() {
  const res = await fetch("http://localhost:5000/animals");
  const data = await res.json();
  return data;
}
