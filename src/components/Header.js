import { Header as Head, Icon } from "semantic-ui-react";

export default function Header(second) {
  return (
    <div className="header">
      <Head as="h1" icon textAlign="center" color="violet">
        <Icon inverted color="violet" name="List alternate outline" circular />
        <Head.Content>Listado de Tareas</Head.Content>
      </Head>
    </div>
  );
}
