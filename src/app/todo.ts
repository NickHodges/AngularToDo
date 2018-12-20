// Added in Step 5
export class Todo {
  id: number;
  title: string;
  complete: boolean = false;
  editMode: boolean = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
