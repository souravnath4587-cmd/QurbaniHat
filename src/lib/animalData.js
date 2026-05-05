// export async function getAnimals() {
//   const res = await fetch("http://localhost:5000/animals");
//   const data = await res.json();
//   return data;
// }



export async function getAnimalsDetails(id) {
  const res = await fetch(`http://localhost:5000/animals/${id}`);
  const data = await res.json();
  return data;
}
