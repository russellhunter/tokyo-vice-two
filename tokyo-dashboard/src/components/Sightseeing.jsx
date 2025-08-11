import { useState } from 'preact/hooks';

export function Sightseeing({ sights, setSights }) {
  const [newSight, setNewSight] = useState('');

  const addSight = () => {
    if (newSight.trim() !== '') {
      setSights([...sights, { id: Date.now(), name: newSight, visited: false }]);
      setNewSight('');
    }
  };

  const toggleVisited = (id) => {
    setSights(sights.map(sight =>
      sight.id === id ? { ...sight, visited: !sight.visited } : sight
    ));
  };

  const deleteSight = (id) => {
    setSights(sights.filter(sight => sight.id !== id));
  };

  return (
    <section class="sightseeing">
      <h2>Sightseeing</h2>
      <div class="add-item">
        <input
          type="text"
          value={newSight}
          onInput={(e) => setNewSight(e.target.value)}
          placeholder="e.g., Ghibli Museum"
        />
        <button onClick={addSight}>Add</button>
      </div>
      <ul>
        {sights.map(sight => (
          <li key={sight.id} class={sight.visited ? 'visited' : ''}>
            <label>
              <input
                type="checkbox"
                checked={sight.visited}
                onChange={() => toggleVisited(sight.id)}
              />
              {sight.name}
            </label>
            <button class="delete" onClick={() => deleteSight(sight.id)}>×</button>
          </li>
        ))}
      </ul>
    </section>
  );
}
