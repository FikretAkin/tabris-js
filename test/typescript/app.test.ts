import {app} from 'tabris';

// Properties
let id: string;
let pinnedCertificates: any[];
let version: string;
let versionCode: number;

id = app.id;
pinnedCertificates = app.pinnedCertificates;
version = app.version;
versionCode = app.versionCode;

app.id = id;
app.pinnedCertificates = pinnedCertificates;
app.version = version;
app.versionCode = versionCode;

// Methods
let path: string = '';
let url: string = '';
let callback: (error: Error|null, patch: any|null) => void = () => {};
let voidReturnValue: void;
let voidPromiseReturnValue: Promise<void>;
let stringReturnValue: string;

stringReturnValue = app.getResourceLocation(path);
voidReturnValue = app.installPatch(url, callback);
voidReturnValue = app.reload();
voidPromiseReturnValue = app.launch(url);

// Events
let preventDefault: () => void;

app.on({
  background: event => {},
  backNavigation: event => preventDefault = event.preventDefault,
  foreground: event => {},
  pause: event => {},
  resume: event => {},
  terminate: event => {}
});
