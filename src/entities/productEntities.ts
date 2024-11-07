export interface ProductDTO {
  nameProduct: string;
  desc: string;
  categoryId: number;
  stock: number;
  price: number;
  categotyProduct: ICategory;
  image: FileList;
}
export type updateProductDTO = {
  id: number;
  nameProduct: string;
  desc: string;
  stock: number;
  price: number;
  categoryId: number;
  image: FileList;
};
export interface IProduct {
  id: number;
  nameProduct: string;
  desc: string;
  stock: number;
  price: number;
  categoryId: number;
  image: IProductimage[];
}

export interface ICategory {
  id: number;
  name: string;
  userId: number;
}

export interface IProductimage {
  url: string;
}
