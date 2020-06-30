export const RECORDS = "RECORDS";
export const SELECTION_OPTIONS = "SELECTION_OPTIONS";

export function getItem(key) {
  try {
    const serialaizedValue = localStorage.getItem(key);
    if (serialaizedValue === null) return undefined;

    return JSON.parse(serialaizedValue);
  } catch (err) {
    return undefined;
  }
}

export function setItem(key, value) {
  try {
    const serialaizedValue = JSON.stringify(value);
    localStorage.setItem(key, serialaizedValue);
  } catch (err) {
    //
  }
}

export const fetchRecords = () => getItem(RECORDS);
export const saveRecords = (records) => setItem(RECORDS, records);

export const fetchSelectionOpts = () => getItem(SELECTION_OPTIONS);
export const saveSelectionOpts = (opts) => setItem(SELECTION_OPTIONS, opts);

export function saveStoreSubscriber(store) {
  let prevState = store.getState();
  return () => {
    const state = store.getState();
    if (prevState.records !== state.records) {
      saveRecords(state.records);
    }
    if (prevState.selectionOptions !== state.selectionOptions) {
      saveSelectionOpts(state.selectionOptions);
    }
    prevState = state;
  };
}
