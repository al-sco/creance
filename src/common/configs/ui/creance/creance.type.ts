import { Signal } from "@preact/signals-react";

export enum InputType {
  text,
  number,
  date,
}

export type SelectItem = {
  value: any;
  title: string;
};

export type CreanceInputItem = {
  isEditable?: boolean;
  placeholder?: string;
  inputType?: InputType;
};

export type CreanceFieldType = {
  name: string;
  key:string,
  onInsert?:(key:string,value:any)=>void
  inputItem?: CreanceInputItem
  selectItems?:()=>Promise<SelectItem[]>
  state?:Signal<{}>
};

export type CreanceDataType = {
  title: string,
  state:Signal<{}>
  fields: CreanceFieldType[];
  tabs?: CreanceTabType[];
};

export type CreanceColumnType = {
  label: string;
  key: string;
};

export type CreanceTabType = {
  tabName: string;
  key:string
  rowCount?: number;
  tableHeaders?: string[];
  tableContent?: CreanceColumnType[] | CreanceFieldType[];
  fields?: CreanceFieldType[]  
};

export type CreanceStaticDataType = {
  value: string,
  label: string
}
