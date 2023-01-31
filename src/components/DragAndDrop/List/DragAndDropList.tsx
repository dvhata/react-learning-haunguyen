// https://www.youtube.com/watch?v=Qroj1wpWlp8&list=PLyd2_8LXUArHh1SET5TQ3GjBiduXCw9V5&index=16

import DragAndDropItem from "./DragAndDropItem";
import "./DragAndDrop.scss";

export interface DragAndDropListProps {
  listData: any[];
}

export default function DragAndDropList(props: DragAndDropListProps) {
  const { listData } = props;
  return (
    <div className="draggable">
      <ul className="draggable-list">
        {listData.map((item, index) => {
          return <DragAndDropItem title={item?.title} img={item?.img} />;
        })}
      </ul>
    </div>
  );
}
