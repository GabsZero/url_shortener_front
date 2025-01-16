'use client'

import { useState } from "react";

export default function Home() {
  async function create(e) {
    e.preventDefault()
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/short_url`, {
      method: 'POST',
      body: JSON.stringify({
        url: url
      }),
      headers: myHeaders
    })

    if (response.status != 201) {

      return
    }

    const result = await response.json()
    setShortUrl(result.short_url)
  }
  const [shortUrl, setShortUrl] = useState(null)
  const [url, setUrl] = useState("")
  return (
    <div className="container mx-auto min-h-screen sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="text-center">
        <h1 className="font-bold p-5 text-2xl">URL SHORTENER</h1>
        <div className="p-10 w-10/12 mx-auto bg-slate-100 shadow-lg">
          <form method="POST" onSubmit={create}>
            <label className="text-lg">Paste here the url to be shortened</label>
            <input name="url" value={url} onChange={(e) => setUrl(e.target.value)} className="w-10/12 border rounded-lg border-blue-300 outline-blue-500 bg-white p-5 text-center" placeholder="https://url.here" />
            <input className="w-36 border rounded-lg p-5 mt-5 hover:bg-blue-300 hover:cursor-pointer bg-white font-bold" type="submit" value="Short url, plz" />
          </form>
          {
            shortUrl ?
              <div>
                <p className="bg-green-300 rounded-lg p-5 mt-5 font-bold text-lg">Your short url is http://localhost:3001/{shortUrl}</p>
              </div>
              : ""
          }
        </div>

      </main>
    </div>
  );
}
