export interface Filter {
  price: { min: number, max: number };
  apk: { min: number, max: number };
  alcohol: { min: number, max: number };
  name: string;
  category: string;
}
