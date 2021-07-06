import { Content } from './../../shared/content';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ContentService } from './../../shared/content.service';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit{
    
dataSource: MatTableDataSource<Content>;
@ViewChild(MatPaginator) paginator: MatPaginator;
ContentData: any = [];
displayedColumns: any[] = [
    {field: 'title', sortable: true },
    {field: 'product'},
    {field: 'category'},
    {field: 'owner'},
    {field: 'status'},
    {field: 'format'},
    {field: 'location'},
    {field: 'link'},
    { headerName: 'Date Created', field: 'date_created', sortable: true},
    {field: 'date_modified', sortable: true},
    {field: 'priority'},
    {field: 'next_audit_date', sortable: true}
];

constructor(private contentApi: ContentService) {
    this.contentApi.GetContentList().snapshotChanges().subscribe(contents => {
    contents.forEach(item => {
let a: any = item.payload.toJSON();
a['$key'] = item.key;
    this.ContentData.push(a as Content)
        })
        /* Data Table */
    this.dataSource = new MatTableDataSource(this.ContentData);
        /* Pagination */
    setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        }, 0);
        })
}

deleteContent(index: number, e: any) {
if(window.confirm('Are You Sure?')){
    const data = this.dataSource.data;
    data.splice((this.paginator.pageIndex * this.paginator.pageSize) + index, 1);
    this.dataSource.data = data;
    this.contentApi.DeleteContent(e.$key)
}
}
    
ngOnInit(): void {};

}
