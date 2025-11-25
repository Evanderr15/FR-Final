
import { useState, useEffect } from 'react';
import ItemForm from './components/ItemForm';
import ItemList from './components/ItemList';

function App() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(''); 
  const [editingId, setEditingId] = useState(null);

  
  const fetchItems = async () => {
    const response = await fetch('http://localhost:3000/items');
    const data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  
  const addItem = async () => {
    const response = await fetch('http://localhost:3000/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, photo }), 
    });
    if (response.ok) {
      fetchItems();
      setName('');
      setDescription('');
      setPhoto(''); 
    }
  };

 
  const updateItem = async () => {
    const response = await fetch(`http://localhost:3000/items/${editingId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, photo }), 
    });
    if (response.ok) {
      fetchItems();
      setName('');
      setDescription('');
      setPhoto(''); 
      setEditingId(null);
    }
  };

 
  const deleteItem = async (id) => {
    const response = await fetch(`http://localhost:3000/items/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      fetchItems();
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      updateItem();
    } else {
      addItem();
    }
  };

  
  const handleEdit = (item) => {
    setName(item.name);
    setDescription(item.description);
    setPhoto(item.photo || ''); 
    setEditingId(item.id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 relative overflow-hidden">
      {}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-white/20">
          <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8 animate-pulse">
            Outdoor Stock App
          </h1>
          
          {}
          <ItemForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            photo={photo}
            setPhoto={setPhoto}
            editingId={editingId}
            onSubmit={handleSubmit}
          />

          {}
          <ItemList
            items={items}
            onEdit={handleEdit}
            onDelete={deleteItem}
          />
        </div>
      </div>
    </div>
  );
}

export default App;