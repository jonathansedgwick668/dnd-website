export default async function Page() {
  const response  = await fetch("https://www.dnd5eapi.co/api/2014/classes/barbarian");
  if (!response.ok) throw new Error("Failed to fetch DND data");

  const classes = await response.json();
  
  return (
    <p>{classes.hit_die}</p>
  )
}