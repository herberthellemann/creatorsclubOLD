// app.creatorsclub.world/tasks/[taskId]

import { GetServerSideProps } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";
import { TaskType } from "../../constants/task-items";
import { prisma } from "../../lib/prisma";

type Props = {
  task: TaskType;
};

function TaskPage(props: Props) {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return (
      <>
        <Layout>
          <h1>{props.task.title}</h1>
          <p>Status: {props.task.status}</p>
          <p>Product: {props.task.product}</p>
          <p>Type: {props.task.type}</p>
          <p>Number of Creators: {props.task.numberOfCreators}</p>
          <p>Aspect Ratio: {props.task.aspectRatio}</p>
          <p>Deadline: {props.task.deadline}</p>
        </Layout>
      </>
    );
  }

  if (!session) {
    router.push("/api/auth/signin");
  }
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // Find the unique task from the open URL
  const singleTask = await prisma.task.findUnique({
    where: {
      id: String(params?.taskId),
    },
  });

  // For some reason we need to stringify and parse before returning
  const task = JSON.parse(JSON.stringify(singleTask));
  return {
    props: { task },
  };
};

export default TaskPage;
