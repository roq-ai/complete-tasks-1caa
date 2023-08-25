import { UserInterface } from 'interfaces/user';
import { TaskInterface } from 'interfaces/task';
import { GetQueryInterface } from 'interfaces';

export interface CreditInterface {
  id?: string;
  user_id: string;
  task_id: string;
  amount: number;
  credit_date: any;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  task?: TaskInterface;
  _count?: {};
}

export interface CreditGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  task_id?: string;
  status?: string;
}
