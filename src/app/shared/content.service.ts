import { Injectable } from '@angular/core';
import { Content } from './content';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ContentService {
    contentsRef: AngularFireList<any>;
    contentRef: AngularFireObject<any>;

constructor(private db: AngularFireDatabase) { }

/* Create Content */
AddContent(content: Content) {
    this.contentsRef.push({
        title: content.title,
        product: content.product,
        category: content.category,
        owner: content.owner,
        status: content.status,
        format: content.format,
        location: content.location,
        link: content.link,
        date_created: content.date_created,
        date_modified: content.date_modified,
        priority: content.priority,
        next_audit_date: content.next_audit_date
        })
.catch(error => {
    this.errorMgmt(error);
})
}

/* Get Content */
GetContent(id: string) {
    this.contentRef = this.db.object('content-list/' + id);
    return this.contentRef;
}

/*Get Content List */
GetContentList() {
    this.contentsRef = this.db.list('content-list');
    return this. contentsRef;
}

/* Update Content */
UpdateContent(id: string, content: Content) {
    this.contentRef.update({
        title: content.title,
        product: content.product,
        category: content.category,
        owner: content.owner,
        status: content.status,
        format: content.format,
        location: content.location,
        link: content.link,
        date_created: content.date_created,
        date_modified: content.date_modified,
        priority: content.priority,
        next_audit_date: content.next_audit_date
        })
        .catch(error => {
    this.errorMgmt(error);
        })
}

/* Delete Content */
DeleteContent(id: string) {
    this.contentRef = this.db.object('content-list/' + id);
    this.contentRef.remove()
        .catch(error => {
    this.errorMgmt(error);
        })
}

//Error Management
private errorMgmt(error: any) {
    console.log(error)
}


}
