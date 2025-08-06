type FileData = {
  path: string;
  content: string;
};

type DatabaseData = {
  connectionURL: string;
  credentials: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

type AccessedFileData = FileData & Status;
type AccessedDatabaseData = DatabaseData & Status;

// Alternative: Using Interfaces
interface FileDataInterface {
  path: string;
  content: string;
}

interface DatabaseDataInterface {
  connectionURL: string;
  credentials: string;
}

interface StatusInterface {
  isOpen: boolean;
  errorMessage?: string;
}

interface AccessedFileDataInterface extends FileData, Status {}
interface AccessedDatabaseDataInterface extends DatabaseData, Status {}
