function ItemForm({ name, setName, description, setDescription, photo, setPhoto, editingId, onSubmit }) {
 
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result); 
      };
      reader.readAsDataURL(file); 
    }
  };

  return (
    <form onSubmit={onSubmit} className="mb-8 space-y-6">
      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Nama</label>
        <input
          type="text"
          placeholder="Masukkan nama item"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-4 pl-12 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-300 focus:border-purple-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-lg"
          required
        />
        <div className="absolute left-4 top-12 text-purple-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Harga</label>
        <input
          type="text"
          placeholder="Masukkan harga item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-4 pl-12 border-2 border-pink-200 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-lg"
          required
        />
        <div className="absolute left-4 top-12 text-pink-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Foto</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-4 border-2 border-blue-200 rounded-xl focus:ring-4 focus:ring-blue-300 focus:border-blue-500 focus:outline-none bg-white/80 backdrop-blur-sm transition-all duration-300 shadow-lg"
          required={!editingId}
        />
        {photo && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Preview Foto:</p>
            <img src={photo} alt="Preview" className="w-32 h-32 object-cover rounded-lg shadow-md" />
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white font-bold rounded-xl hover:from-green-500 hover:via-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
      >
        {editingId ? 'Update' : 'Tambah'} Item
      </button>
    </form>
  );
}

export default ItemForm;