export enum InputType {
  text,
  number,
  date,
}

export type SelectItem = {
  value: string;
  title: string;
};

export type CreanceInputItem = {
  isEditable?: boolean;
  placeholder?: string;
  inputType?: InputType;
};

export type CreanceFieldType = {
  name: string;
  inputItem?: CreanceInputItem;
  selectItems?: SelectItem[];
};

export type CreanceDataType = {
  title: string,
  fields: CreanceFieldType[];
  tabs?: CreanceTabType[];
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
