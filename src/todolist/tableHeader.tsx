import { memo } from "react";
import Button from "../components/button/button";
import words from "../words.json";
import CloseSVG from "../svg/close";
import PlusSVG from "../svg/plus";

interface ITableHeaderProps {
  onCreate: () => void;
  onDelete: () => void;
}

const TableHeader = memo(({ onCreate, onDelete }: ITableHeaderProps) => {
  return (
    <>
      <tr>
        <th>{words.status}</th>
        <th>{words.product}</th>
        <th>{words.id}</th>
        <th>{words.name}</th>
        <th>
          <Button onClick={onCreate}>
            <PlusSVG />
          </Button>
        </th>
      </tr>
      <tr>
        <th>-</th>
        <th>-</th>
        <th>-</th>
        <th>-</th>
        <th>
          <Button onClick={onDelete}>
            <CloseSVG />
          </Button>
        </th>
      </tr>
    </>
  );
});

export default TableHeader;
