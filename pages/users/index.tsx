import { useRouter } from "next/router";

import Layout from "../../components/Layout";

import styles from "../../styles/Users.module.css";

interface UsersProps {
  dataUsers: Array<any>;
}

function Users(props: UsersProps) {
  const router = useRouter();

  const { dataUsers } = props;
  console.log("dataUsers:", dataUsers);

  return (
    <Layout pageTitle="User Page">
      {dataUsers.map((user) => {
        return (
          <div
            className={styles.card}
            key={user.id}
            onClick={() => router.push(`users/${user.id}`)}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers: dataUsers,
    },
  };
}
