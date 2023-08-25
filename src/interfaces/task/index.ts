import { CreditInterface } from 'interfaces/credit';
import { ScreenshotInterface } from 'interfaces/screenshot';
import { OfferInterface } from 'interfaces/offer';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  title: string;
  description: string;
  offer_id: string;
  status: string;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;
  credit?: CreditInterface[];
  screenshot?: ScreenshotInterface[];
  offer?: OfferInterface;
  _count?: {
    credit?: number;
    screenshot?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  offer_id?: string;
  status?: string;
}
