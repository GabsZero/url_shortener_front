'use server'
export default async function create(e) {
  const formData = Object.fromEntries(e.entries())
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const result = await fetch('http://localhost:3001/short_url', {
    method: 'POST',
    body: JSON.stringify({
      url: formData.url
    }),
    headers: myHeaders
  })
  console.log(await result.json())

  return (
    <>maoe</>
  )
}