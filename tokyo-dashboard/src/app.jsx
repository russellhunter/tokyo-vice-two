import { useState, useEffect, useRef } from 'preact/hooks';
import './app.css'
import { Sightseeing } from './components/Sightseeing';
import { Expenses } from './components/Expenses';
import { Notes } from './components/Notes';

const LOCAL_STORAGE_KEY = 'tokyo-dashboard-data';

export function App() {
  const [data, setData] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      fetch('/data.json')
        .then(response => response.json())
        .then(initialData => setData(initialData))
        .catch(error => console.error('Error loading initial data:', error));
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  const handleExport = () => {
    if (data) {
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tokyo-dashboard-data.json';
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const importedData = JSON.parse(e.target.result);
          setData(importedData);
        } catch (error) {
          console.error('Error parsing imported JSON:', error);
          alert('Invalid JSON file.');
        }
      };
      reader.readAsText(file);
    }
  };

  const triggerImport = () => {
    fileInputRef.current.click();
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div class="app">
      <header>
        <h1>Tokyo Pocket Helper</h1>
        <div class="data-management">
          <button onClick={handleExport}>Export Data</button>
          <button onClick={triggerImport}>Import Data</button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImport}
            style={{ display: 'none' }}
            accept=".json"
          />
        </div>
      </header>
      <main>
        <Sightseeing
          sights={data.sightseeing}
          setSights={(newSights) => setData({ ...data, sightseeing: newSights })}
        />
        <Expenses
          expenses={data.expenses}
          setExpenses={(newExpenses) => setData({ ...data, expenses: newExpenses })}
        />
        <Notes
          notes={data.notes}
          setNotes={(newNotes) => setData({ ...data, notes: newNotes })}
        />
      </main>
    </div>
  )
}
