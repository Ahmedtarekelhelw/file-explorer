const Node = ({
  setExpand,
  setIsFolder,
  setCreate,
  explorer,
  handleDeleteNode,
  handeEdit,
  setEdit,
  edit,
}) => {
  const handleCreate = (e, isFolder = false) => {
    e.stopPropagation();
    setIsFolder(isFolder);
    setExpand(true);
    setCreate(true);
  };

  const handleEditNode = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handeEdit(explorer.id, e.target.value);
      setEdit((prev) => !prev);
    }
  };
  return (
    <div
      onClick={() => setExpand((prev) => !prev)}
      style={{ cursor: "pointer", userSelect: "none" }}
    >
      {explorer.isFolder ? "📁" : "📑"}
      {edit ? (
        <input
          defaultValue={explorer.name}
          autoFocus
          onBlur={() => setEdit((prev) => !prev)}
          onKeyDown={(e) => handleEditNode(e)}
        />
      ) : (
        explorer.name
      )}
      {explorer.isFolder && (
        <>
          <button
            style={{ margin: "0 10px", cursor: "pointer" }}
            onClick={(e) => handleCreate(e)}
          >
            Create file
          </button>
          <button
            onClick={(e) => handleCreate(e, true)}
            style={{ cursor: "pointer" }}
          >
            Create Folder
          </button>
        </>
      )}

      <button
        onClick={() => handleDeleteNode(explorer.id)}
        style={{ margin: "0 10px", cursor: "pointer" }}
      >
        Delete
      </button>
      <button
        onClick={() => setEdit((prev) => !prev)}
        style={{ margin: "0 10px", cursor: "pointer" }}
      >
        Edit
      </button>
    </div>
  );
};

export default Node;
