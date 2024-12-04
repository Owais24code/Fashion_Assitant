export interface Item {
  brand: string;
  item: string;
  price: string;
}

export interface Suggestion {
  category: string;
  items: Item[];
}

export interface Message {
  id: number;
  content: string;
  type: "user" | "bot";
  suggestions?: Suggestion[];
  role?: "user" | "assistant";
}

export interface FashionResponse {
  text: string;
  suggestions: Suggestion[];
}

export interface FashionResponses {
  [key: string]: FashionResponse | string;
}
