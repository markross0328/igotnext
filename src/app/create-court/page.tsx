// src/app/create-court/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateCourt() {
  const [courtName, setCourtName] = useState('');
  const [courtLocation, setCourtLocation] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/courts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ courtName, courtLocation }),
    });
    if (res.ok) {
      router.push('/');
    } else {
      alert('Failed to create court');
    }
  };

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create a New Court</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="courtName" className="block mb-1">
            Court Name:
          </label>
          <input
            id="courtName"
            type="text"
            value={courtName}
            onChange={(e) => setCourtName(e.target.value)}
            placeholder="Enter court name"
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="courtLocation" className="block mb-1">
            Location:
          </label>
          <input
            id="courtLocation"
            type="text"
            value={courtLocation}
            onChange={(e) => setCourtLocation(e.target.value)}
            placeholder="Enter location"
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Create Court
        </button>
      </form>
    </main>
  );
}