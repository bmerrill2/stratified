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
    {field: 'title', sortable: true, filter: true },
    {field: 'product', sortable: true, filter: true},
    {field: 'category', sortable: true, filter: true},
    {field: 'owner', sortable: true, filter: true},
    {field: 'status', sortable: true, filter: true},
    {field: 'format', sortable: true, filter: true},
    {field: 'location', sortable: true, filter: true},
    {field: 'link', sortable: true, filter: true},
    { headerName: 'Date Created', field: 'date_created', sortable: true, filter: 'agDateColumnFilter'},
    {field: 'date_modified', sortable: true, filter: 'agDateColumnFilter'},
    {field: 'priority', sortable: true, filter: true},
    {field: 'next_audit_date', sortable: true, filter: 'agDateColumnFilter'}
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
