import { useState } from "react";
import Node from "./Node";
import Input from "./Input";

const TreeNode = ({ explorer, handleAdd, handleDeleteNode, handeEdit }) => {
  const [expand, setExpand] = useState(false);
  const [create, setCreate] = useState(false);
  const [isFolder, setIsFolder] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Node
        setExpand={setExpand}
        setIsFolder={setIsFolder}
        setCreate={setCreate}
        explorer={explorer}
        handleDeleteNode={handleDeleteNode}
        handeEdit={handeEdit}
        setEdit={setEdit}
        edit={edit}
      />

      <div style={expand ? { display: "block" } : { display: "none" }}>
        <Input
          create={create}
          isFolder={isFolder}
          handleAdd={handleAdd}
          explorerId={explorer.id}
          setCreate={setCreate}
        />
        {explorer?.items.map((item, i) => (
          <div key={i} style={{ marginLeft: "15px", marginTop: "10px" }}>
            <TreeNode
              explorer={item}
              key={i}
              handleDeleteNode={handleDeleteNode}
              handleAdd={handleAdd}
              handeEdit={handeEdit}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default TreeNode;
