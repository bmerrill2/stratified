export interface Task {
    taskID: string;
    $key: string;
    task_name: string;
    userId: string;
    stakeholders: Array<string>;
    task_created_date: Date;
    task_description: string;
    due_date: Date;
    status: string;
}
