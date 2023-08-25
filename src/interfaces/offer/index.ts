import { TaskInterface } from 'interfaces/task';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface OfferInterface {
  id?: string;
  title: string;
  description: string;
  organization_id: string;
  status: string;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  organization?: OrganizationInterface;
  _count?: {
    task?: number;
  };
}

export interface OfferGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  organization_id?: string;
  status?: string;
}
