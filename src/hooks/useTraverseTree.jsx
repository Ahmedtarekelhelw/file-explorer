const useTraverseTree = () => {
  const insertNode = (tree, folderId, item) => {
    if (tree.id === folderId) {
      tree.items.unshift(item);
      return tree;
    } else {
      let lastNode = [];
      lastNode = tree.items.map((obj) => insertNode(obj, folderId, item));
      return { ...tree, items: lastNode };
    }
  };

  const deleteNode = (tree, folderId) => {
    if (tree.id === folderId) {
      return { ...tree };
    }

    const deletedNode = tree.items
      .map((obj) => deleteNode(obj, folderId))
      .filter((item) => item.id !== folderId);
    return { ...tree, items: deletedNode };
  };

  const editNode = (tree, folderId, name) => {
    if (tree.id === folderId) {
      tree.name = name;
      return tree;
    }
    let lastNode = [];
    lastNode = tree.items.map((obj) => editNode(obj, folderId, name));
    return { ...tree, items: lastNode };
  };
  return {
    insertNode,
    deleteNode,
    editNode,
  };
};

export default useTraverseTree;
