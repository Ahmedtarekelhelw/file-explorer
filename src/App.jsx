import "./App.css";
import data from "../data.json";
import TreeNode from "./components/TreeNode";
import { useState } from "react";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorer, setExplorer] = useState({ ...data });
  const { insertNode, deleteNode, editNode } = useTraverseTree();

  const handleAdd = (folderId, item) => {
    let finalTree = insertNode(explorer, folderId, item);
    setExplorer(finalTree);
  };

  const handleDeleteNode = (folderId) => {
    let finalTree = deleteNode(explorer, folderId);
    setExplorer(finalTree);
  };

  const handeEdit = (folderId, name) => {
    let finalTree = editNode(explorer, folderId, name);
    setExplorer(finalTree);
  };
  return (
    <TreeNode
      explorer={explorer}
      handleAdd={handleAdd}
      handleDeleteNode={handleDeleteNode}
      handeEdit={handeEdit}
    />
  );
}

export default App;
