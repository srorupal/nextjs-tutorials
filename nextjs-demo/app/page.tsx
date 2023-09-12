'use client'

export default function Home() {
const makeAPICall = async () => {
    await fetch ('api/hello', {
      method: 'POST',
      body: JSON.stringify({hello : 'world'})
    })
  }

  return (
    <>
    <div>welcome to Home page</div>
    <button onClick={makeAPICall}>Make API Call</button>
    </>
  )
}
