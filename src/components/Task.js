import { Header, Icon, Grid, Segment, Label, Button } from "semantic-ui-react";

export default function Task(props) {
    const {task, deleteTask} = props;
    const {idTask, taskname, categoryTask} = task;

    return(
        <Grid.Column width={8} className="task-container">
            <Segment>
                {categoryTask && (
                    <Label color="teal" ribbon="right"> 
                        {categoryTask}
                    </Label>
                )}
                <Header as="h3" className="header-task">
                    {taskname}
                </Header>
                <Header as="5">{idTask}</Header> 
                <Grid center columns={2}>
                    <Grid.Column>
                        <Button color="red" onClick={deleteTask}>
                            <Icon name="remove circle"/>Eliminar
                        </Button>
                    </Grid.Column>
                </Grid>
            </Segment>
        </Grid.Column>
    );
}