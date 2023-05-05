export class ContextValue {
  search = '';
  setSearch: (value: string) => void = () => {};

  filter: null | number = null;
  setFilter: (value: null | number) => void = () => {};

  organizer = '';
  setOrganizer: (value: string) => void = () => {};
}
