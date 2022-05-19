import {
  TTable,
  THead,
  THeadRow,
  THeadH,
  TBody,
  TBodyRow,
  TCell,
  Pill,
} from "./TasksTable.styles";
import { ArrowCircleRight } from "@styled-icons/fluentui-system-filled";
import { TaskType } from "../../../constants/task-items";
import Router from "next/router";

type TableProps = {
  data: TaskType[];
};

function TasksTable({ data }: TableProps): JSX.Element {
  const keys = Object.keys(data[0]);

  return (
    <TTable>
      <THead>
        <THeadRow>
          <THeadH>TITLE</THeadH>
          <THeadH>STATUS</THeadH>
          <THeadH>PRODUCT</THeadH>
          <THeadH>TYPE</THeadH>
          <THeadH>NR. OF CREATORS</THeadH>
          <THeadH>ASPECT RATIO</THeadH>
          <THeadH>DEADLINE</THeadH>
          <THeadH></THeadH>
        </THeadRow>
      </THead>
      <TBody>
        {data.map((row, index) => (
          <TBodyRow key={index}>
            <TCell>{row.title}</TCell>
            <TCell>{row.status}</TCell>
            <TCell>{row.product}</TCell>
            <TCell>
              <Pill>{row.type}</Pill>
            </TCell>
            <TCell>{row.numberOfCreators}</TCell>
            <TCell>{row.rewardTotal} €</TCell>
            <TCell>{row.deadline}</TCell>
            <TCell>
              <a onClick={() => openSingleTask(row.id)}>
                <ArrowCircleRight />
              </a>
            </TCell>
          </TBodyRow>
        ))}
      </TBody>
    </TTable>
  );
}

function openSingleTask(id: string) {
  const route: string = "tasks/" + id;
  Router.push(route);
}

export default TasksTable;
