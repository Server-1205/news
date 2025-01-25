export interface INews {
  author: string;
  category: CategoryType[];
  description: string;
  id: string;
  image: string;
  language: string;
  published: string;
  title: string;
  url: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: CategoryType | null;
  keywords: string;
}

export interface NewsApiResponse {
  news: INews[];
  page: number;
  status: string;
}

export interface CategoryesApiResponse {
  categories: string[];
  description: string;
  status: string;
}

export type ParamsType = Partial<IFilters>;
type CategoryType = string;
export type SkeletonType = 'banner' | 'items';
export type DirectionType = 'row' | 'column';

export interface IPaginationProps {
  totalPages: number;
  handleNextPage: () => void;
  handlePreviousPage: () => void;
  handlePageClick: (page: number) => void;
  currentPage: number;
}

// interface IBanner {
//   bannerId: string;
// }

// const news = {
//   author: 'Server',
//   category: ['all'],
//   description: 'TypeScript',
//   id: 1,
//   image: null,
//   language: 'en',
//   published: '101023',
//   title: 'name',
//   url: 'url',
// };

// type NewsType = typeof news;

// //1. Псевдонимы типоы с обобщениями

// type Container<T> = {
//   value: T;
// };

// const stringContainer: Container<string> = { value: 'Hello' };
// const numberContainer: Container<number> = { value: 1 };

// // 2. Интерфейсы с обобщением типов

// interface Pair<T, U> {
//   first: T;
//   second: U;
// }

// const pair: Pair<string, number> = {
//   first: 'String',
//   second: 123,
// };

// // 3. Функции с обобщением типов

// function echo<T>(item: T): T {
//   return item;
// }

// echo('hello');
// console.log(echo<string>('hello'));
// console.log(echo<number>(111));

// interface IUser {
//   name: string;
// }

// function logName<T extends IUser = IUser>(value: T) {
//   console.log(value.name);
// }

// logName({ name: '' });
