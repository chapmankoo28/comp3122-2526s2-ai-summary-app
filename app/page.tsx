'use client'

import { Suspense, useState, useTransition } from 'react'

export default function Home() {
  const [status, setStatus] = useState('Frontend running')
  const [isPending, startTransition] = useTransition()

  async function checkBackend() {
    setStatus('Checking backend...')
    const res = await fetch('/api/health')
    const data = await res.json()
    setStatus(`Backend says: ${data.message}`)
  }

  return (
    <div style={{ fontFamily: 'system-ui', padding: 24, maxWidth: 800 }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1d324b' }}>
        AI Summary App
      </h1>
      <button
        type="button"
        disabled={isPending}
        onClick={() => {
          startTransition(() => {
            checkBackend()
          })
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Check backend
      </button>
      <Suspense fallback={'Checking backend...'}>
        <p style={{ marginTop: 12 }}>{status}</p>
      </Suspense>
    </div>
  )
}
