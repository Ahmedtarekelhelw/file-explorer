function Input({ create, isFolder, handleAdd, explorerId, setCreate }) {
  return (
    <>
      {create && (
        <div style={{ marginLeft: "15px", marginTop: "10px" }}>
          {isFolder ? "📁" : "📑"}
          <input
            type="text"
            autoFocus
            onKeyDown={(e) => {
              if (e.keyCode === 13 && e.target.value) {
                handleAdd(explorerId, {
                  id: new Date().getTime(),
                  name: e.target.value,
                  isFolder,
                  items: [],
                });
                setCreate(false);
              }
            }}
            onBlur={() => setCreate(false)}
          />
        </div>
      )}
    </>
  );
}

export default Input;
