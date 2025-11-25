import Item from './Item';

function ItemList({ items, onEdit, onDelete }) {
  return (
    <div className="space-y-4">
      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg font-medium animate-bounce">Belum ada item. Tambahkan yang pertama!</p>
      ) : (
        items.map((item, index) => (
          <Item
            key={item.id}
            item={item}
            index={index}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default ItemList;