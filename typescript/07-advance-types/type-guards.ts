type FileSource = { path: string };
const fileSource: FileSource = {
  path: 'some/path/to/file.csv',
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + Read file or reach out to database server
  if ('path' in source) {
    // source.path; => Use that to open the file
    return;
  }
  // source.connectionUrl => to reach out to the database
}

// Alternative: Using Discriminated Unions
type FileSourceDiscriminated = { path: string; type: 'file' };
const fileSourceDiscriminated: FileSourceDiscriminated = {
  path: 'some/path/to/file.csv',
  type: 'file',
};

type DBSourceDiscriminated = { connectionUrl: string; type: 'db' };
const dbSourceDiscriminated: DBSourceDiscriminated = {
  connectionUrl: 'some-connection-url',
  type: 'db',
};

type SourceDiscriminated = FileSourceDiscriminated | DBSourceDiscriminated;

function loadDataDiscriminated(source: SourceDiscriminated) {
  // Open + Read file or reach out to database server
  // if ('path' in source) {
  if (source.type === 'file') {
    // source.path; => Use that to open file
    return;
  }
  // source.connectionUrl => to reach out to the database
}

// Alternative: Using Classes
class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}
class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Rohitash');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
  // .join() or .scan();

  if (entity instanceof User) {
    // entity.name;
    // entity.join();
    return;
  }

  // entity.scan();
}

// Outsourcing type guards (Using Type predicate)
function isFile(source: SourceDiscriminated) {
  return source.type === 'file';
}

function loadDataDiscriminatedSource(source: SourceDiscriminated) {
  // Open + Read file or reach out to database server
  // if ('path' in source) {
  if (isFile(source)) {
    // source.path; => Use that to open file
    return;
  }
  // source.connectionUrl => to reach out to the database
}
