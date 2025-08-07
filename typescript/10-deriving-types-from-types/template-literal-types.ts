// General Template literal usage
// const mainUserName = 'Mann';
// const greeting = `Hi there ${mainUserName}`;

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

// Alternative Approach
// type FilePermissions = 'no-read-write' | 'read-no-write' | 'no-read-no-write' | 'read-write';

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventsNames = `${keyof DataFile}Change`;

type DataFileEvents = {
  [Key in DataFileEventsNames]: () => void;
};
