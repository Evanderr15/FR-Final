function Item({ item, index, onEdit, onDelete }) {
  return (
    <div className={`flex justify-between items-center p-6 rounded-2xl shadow-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-100 to-blue-100 border-cyan-300' : 'from-yellow-100 to-orange-100 border-yellow-300'} backdrop-blur-sm`}>
      <div className="flex-1 flex items-center space-x-2">
        {item.photo && (
          <img src={item.photo} alt={item.name} className="w-27 h-25 object-cover rounded-lg shadow-md" />
        )}
        <div>
          <h3 className="font-bold text-xl text-gray-800 mb-1">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.description}</p>
        </div>
      </div>
      <div className="flex space-x-3">
        <button
          onClick={() => onEdit(item)}
          className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-200 transform hover:scale-110 shadow-md hover:shadow-lg flex items-center space-x-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <span>Edit</span>
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="px-4 py-2 bg-gradient-to-r from-red-400 to-pink-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-pink-600 transition-all duration-200 transform hover:scale-110 shadow-md hover:shadow-lg flex items-center space-x-1"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>Hapus</span>
        </button>
      </div>
    </div>
  );
}

export default Item;