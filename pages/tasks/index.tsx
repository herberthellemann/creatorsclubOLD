// app.creatorsclub.world/tasks

import type { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";
import Layout from "../../components/Layout/Layout";
import TasksTable from "../../components/Tables/TasksTable";
import { TaskType } from "../../constants/task-items";
import { prisma } from "../../lib/prisma";
import taskStyles from "../../styles/Tasks.module.css";

type Props = {
  tasks: TaskType[];
};

function Tasks(props: Props) {
  const { data: session } = useSession();

  // Render all tasks table only if the sesion is validated
  if (session) {
    return (
      <Layout>
        <div className={taskStyles.topWrapper}>
          <p>All tasks</p>
          <div className={taskStyles.buttonWrapper}>
            <button className={taskStyles.button}>New Task</button>
          </div>
        </div>
        <div>
          <TasksTable data={props.tasks} />
        </div>
      </Layout>
    );
  }

  // Push to log in if there is no session active
  /* if (!session) {
    router.push("/api/auth/signin");
  } */

  // Default return if there iss no session active
  return (
    <div>
      <h1>Not signed in</h1>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });

  if (!session) {
    res.statusCode = 403;
    return { props: { drafts: [] } };
  }

  // Fetch the brand from the user
  const user = await prisma.user.findUnique({
    where: {
      email: session.user!.email!,
    },
    include: {
      brand: true,
    },
  });

  // Fetch all tasks from the user's brand
  const brandTasks = await prisma.task.findMany({
    where: {
      brand: {
        name: user?.brand?.name,
      },
    },
  });

  // For some reason we need to stringify and parse before returning
  const tasks = JSON.parse(JSON.stringify(brandTasks));
  return { props: { tasks } };
};

export default Tasks;
