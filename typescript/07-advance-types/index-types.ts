type DataStore = {
    [prop: string]: number | boolean;
};

let store: DataStore = {};

store.id = 5;
store.isOpen = false;
// Error: Type 'string' is not assignable to type 'number | boolean'.
// store.name = 'Golden Basket Mart';



// Record Type as alternative to Index Types
type DataStoreRecord = Record<string, number | boolean>;
let storeRecord: DataStoreRecord = {};
storeRecord.id = 5;
storeRecord.isOpen = false;