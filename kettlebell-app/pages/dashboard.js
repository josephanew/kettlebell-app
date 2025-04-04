import { useState } from 'react';

const programs = [
  {
    id: 'survival-strength',
    title: 'Survival Strength',
    description: 'A minimalist 3-day kettlebell program for real-world power.',
    goal: 'Strength',
  },
  {
    id: 'aerobic-engine',
    title: 'Aerobic Engine',
    description: 'Low-intensity zone 2 training to build your endurance base.',
    goal: 'Endurance',
  },
  {
    id: 'rehab-reset',
    title: 'Rehab Reset',
    description: 'Restore your movement and resilience post-injury or burnout.',
    goal: 'Rehab',
  },
];

const goals = ['All', 'Strength', 'Endurance', 'Rehab'];

export default function Dashboard() {
  const [selectedGoal, setSelectedGoal] = useState('All');
  const [activeProgramId, setActiveProgramId] = useState(null);

  const filteredPrograms = selectedGoal === 'All'
    ? programs
    : programs.filter(p => p.goal === selectedGoal);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Your Training Programs</h1>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Filter by Goal:</label>
          <select
            value={selectedGoal}
            onChange={(e) => setSelectedGoal(e.target.value)}
            className="p-2 rounded border border-gray-300 bg-white shadow-sm"
          >
            {goals.map(goal => (
              <option key={goal} value={goal}>{goal}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredPrograms.map(program => (
            <div
              key={program.id}
              className={\`p-4 border rounded-xl shadow-sm bg-white flex flex-col justify-between \${program.id === activeProgramId ? 'ring-2 ring-blue-500' : ''}\`}
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{program.title}</h2>
                <p className="text-sm text-gray-600 mb-4">{program.description}</p>
                <span className="text-xs px-2 py-1 bg-gray-200 rounded-full">{program.goal}</span>
              </div>
              <button
                onClick={() => setActiveProgramId(program.id)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                {activeProgramId === program.id ? 'Current Program' : 'Swap In'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
