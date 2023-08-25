import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ScreenshotInterface {
  id?: string;
  task_id: string;
  url: string;
  upload_date: any;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ScreenshotGetQueryInterface extends GetQueryInterface {
  id?: string;
  task_id?: string;
  url?: string;
  status?: string;
  user_id?: string;
}
