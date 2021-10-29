export interface Content {
    $key: string;
    title: string;
    product: string;
    category: string;
    owner: string;
    status: string;
    format: string;
    location: string;
    link: string;
    date_created: Date;
    date_modified: Date;
    priority: string;
    next_audit_date: Date;
    tasksID: string;
    notesID: string;
}
