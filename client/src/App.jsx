 return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">FinWise Advisor</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter your income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="border p-2 w-full"
        />
        <input
          type="text"
          placeholder="Enter your financial goals"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
          className="border p-2 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Get Advice
        </button>
      </form>
      {advice && <div className="mt-6 p-4 bg-gray-100 rounded">{advice}</div>}
    </div>
  );

export default App;