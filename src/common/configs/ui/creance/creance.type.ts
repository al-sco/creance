export enum InputType {
  text,
  number,
}

export type SelectItem = {
  value: string;
  title: string;
};

export type CreanceInputItem = {
  isEditable: boolean;
  placeholder?: string;
  inputType: InputType;
};

export type CreanceFieldType = {
  name: string;
  inputItem?: CreanceInputItem;
  selectItems?: SelectItem[];
};

export type CreanceColumnType = {
  label: string;
  key: string;
};

export type CreanceTabType = {
  tabName: string;
  headers: string[];
  tableContent: CreanceColumnType[];
};
