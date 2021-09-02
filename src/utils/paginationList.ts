import {IUserItem} from '../types/types';

export default function PaginationList(
    users: IUserItem[],
    pageNumber: number,
    pageSize: number,
): IUserItem[] {
  const stratindex: number = 1 + (pageNumber * pageSize - pageSize);
  const tmpArr = users.slice(stratindex, stratindex + pageSize);
  return tmpArr;
}
