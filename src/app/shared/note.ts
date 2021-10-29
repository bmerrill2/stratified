export interface Note {
    noteID: string;
    $key: string;
    note_title: string;
    note_content: string;
    userID: string;
    created_date: Date;
    updated_date: Date;
    description: string;
}
