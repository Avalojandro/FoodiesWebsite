
export interface Resp {
  data: Datum[];
  links: Links;
  meta: Meta;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Links {
  first: string;
  last: string;
  prev?: any;
  next: string;
}

export interface Datum {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  category: string;
}