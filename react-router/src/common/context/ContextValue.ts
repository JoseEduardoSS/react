export class ContextValue {
  search: string = "";
  setSearch: (value: string) => void = () => {};

  filter: null | number = null;
  setFilter: (value: null | number) => void = () => {};

  organizer: string = "";
  setOrganizer: (value: string) => void = () => {};
}
