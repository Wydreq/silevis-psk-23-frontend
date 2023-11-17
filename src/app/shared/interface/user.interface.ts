export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  staffStatus: number;
  studentStatus: number;
  studentNumber: string | null;
  studentProgrammes: StudentProgramme[];
}

interface StudentProgramme {
  id: string;
  programme: string;
}
