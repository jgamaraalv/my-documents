export default interface Contract {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  file: FileList;
  parts: string[];
}