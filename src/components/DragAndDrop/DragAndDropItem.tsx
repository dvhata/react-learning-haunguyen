export interface DragAndDropItemProps {
  img: any;
  title: string;
}

export default function DragAndDropItem(props: DragAndDropItemProps) {
  const { img, title } = props;
  return <li className="draggable-list__item">{title}</li>;
}
