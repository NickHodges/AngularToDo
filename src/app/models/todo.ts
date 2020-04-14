// Added in Step 5
export class Todo {
  _id: string;
  title: string;
  //  note field added for Step 19
  note: string;
  complete: boolean = false;
  editMode: boolean = false;
}
