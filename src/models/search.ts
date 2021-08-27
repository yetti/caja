export interface SearchResult {
  total: string
  termsofuse: string
  item: Array<SearchResultItem>
}

export interface SearchResultItem {
  type: string
  id: string
  name: ItemName
  yearpublished: YearPublished
}

export interface ItemName {
  type: string
  value: string
}

export interface YearPublished {
  value: string
}
