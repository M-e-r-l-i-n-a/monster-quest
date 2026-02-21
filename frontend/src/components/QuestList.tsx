import { useState, useEffect } from 'react';

interface Quest {
  id: number;
  title: string;
  difficulty: number;
  completed: boolean;
}

const QuestList = () => {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/quests')
      .then(response => {
        if (!response.ok) throw new Error('Netzwerk-Antwort war nicht ok');
        return response.json();
      })
      .then(data => setQuests(data))
      .catch(err => setError(err.message));
  }, []);
  
  const handleToggleQuest = (quest: Quest) => {
  fetch(`http://localhost:8080/api/quests/${quest.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...quest,
      completed: !quest.completed // Wert umkehren
    }),
  })
    .then(res => res.json())
    .then(updatedQuest => {
      // Den lokalen State aktualisieren, damit die UI sich sofort ändert
      setQuests(prevQuests => 
        prevQuests.map(q => q.id === updatedQuest.id ? updatedQuest : q)
      );
    })
    .catch(err => setError(err.message));
};

  if (error) return <div style={{color: 'red'}}>Fehler: {error}</div>;

  return (
    <div className="quest-container flex gap-4 justify-center w-150 flex-col md:flex-row">
      {quests.map(quest => (
        <div key={quest.id} className="quest-card flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-md flex-1">
          <h3>{quest.title}</h3>
          <p>Level: {quest.difficulty}</p>
          <span className={quest.completed ? 'text-green-500' : 'text-red-500'}>
            {quest.completed ? 'Abgeschlossen' : 'Offen'}
          </span>
          <button onClick={() => handleToggleQuest(quest)} className="bg-blue-500 p-2 rounded-md">
            {quest.completed ? 'Abgeschlossen zurücksetzen' : 'Abgeschlossen setzen'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default QuestList;