import React from "react";
import "../Card/Card.scss";
export interface DragAndDropItemProps {
  item: Object;
  renderItemContent: (item: any) => JSX.Element;
}

export default function DragAndDropItem(props: DragAndDropItemProps) {
  const { renderItemContent, item } = props;

  const onDragStart = React.useCallback((e) => {
    console.log(e);
  }, []);

  const onDragEnd = React.useCallback((e) => {
    console.log(e);
  }, []);

  return (
    <li
      className="draggable-list__item"
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {renderItemContent(item)}
    </li>
  );
}
