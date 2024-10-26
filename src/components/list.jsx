const List = ({ item, data, setData }) => {
  return (
    <div key={item.id} className="flex justify-center">
      <div className="w-96 bg-white rounded-lg p-4 m-4">
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <p>{item.description}</p>
        <div className="flex justify-between items-center mt-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              setData(
                data.map((dataItem) => {
                  if (dataItem.id === item.id) {
                    return {
                      ...dataItem,
                      likes: dataItem.likes + 1,
                    };
                  }
                  return dataItem;
                })
              );
            }}
          >
            Like
          </button>
          <p>{item.likes} likes</p>
        </div>
      </div>
    </div>
  );
};

export default List;
