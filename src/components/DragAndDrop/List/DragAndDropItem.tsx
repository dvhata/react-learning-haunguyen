import React from "react";
import "../Card/Card.scss";
export interface DragAndDropItemProps {
  item: Object;
  renderItemContent: (item: any) => JSX.Element;
}

export default function DragAndDropItem(props: DragAndDropItemProps) {
  const { renderItemContent, item } = props;

  const onDragStart = React.useCallback((e) => {
    // remove default drag ghost
    e.dataTransfer.effectedAllowed = "moved"; // https://docs.w3cub.com/dom/datatransfer/effectallowed
    e.dataTransfer.setDragImage(e.target, 50000, 50000);
    // custom drag ghost
    let ghostNode = e.target.cloneNode(true);
    ghostNode.style.position = "absolute";
    document.body.prepend(ghostNode);
  }, []);

  const onDragEnd = React.useCallback((e) => {
    console.log(e.target);
  }, []);

  return (
    <li
      className="draggable-list__item"
      draggable
      onDragStart={onDragStart}
      // onDragEnd={onDragEnd}
    >
      {renderItemContent(item)}
    </li>
  );
}
