// src/app/create-court/page.tsx
export default function CreateCourt() {
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">Create a New Court</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="courtName" className="block mb-1">Court Name:</label>
            <input
              id="courtName"
              type="text"
              placeholder="Enter court name"
              className="border p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="courtLocation" className="block mb-1">Location:</label>
            <input
              id="courtLocation"
              type="text"
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
  