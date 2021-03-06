import {WidgetCollection, Transformation, AnimationOptions, Composite, Selector, Widget} from 'tabris';

let widgetCollection: WidgetCollection<Widget> = new Composite().find();

// Properties
let length: number;

length = widgetCollection.length;

// Methods
class Foo extends Composite {}

let fooCollection: WidgetCollection<Foo>;
let properties: {transform?: Transformation, opacity?: number} = {};
let options: AnimationOptions = {};
let parent: Composite = new Composite();
let selector: Selector = '';
let callback: (widget: Widget, index: number, collection: WidgetCollection<Widget>) => void = () => {};
let widget: Widget;
let foo: Foo;
let widgetArray: Widget[];
let fooArray: Foo[];
let listener: Function = () => {};
let context: WidgetCollection<Widget>;
let property: string = '';
let value: any;
let Properties: Object;
let event: string = '';
let thisReturnValue: WidgetCollection<Widget>;
let voidReturnValue: void;
let anyReturnValue: any;
let booleanReturnValue: boolean;
let numberReturnValue: number;

voidReturnValue = widgetCollection.animate(properties, options);
thisReturnValue = widgetCollection.appendTo(parent);
widgetCollection = widgetCollection.children();
widgetCollection = widgetCollection.children(selector);
fooCollection = widgetCollection.children(Foo);
widgetCollection = fooCollection.children();
widgetCollection = fooCollection.children(selector);
voidReturnValue = widgetCollection.dispose();
widgetCollection = widgetCollection.filter(selector);
fooCollection = fooCollection.filter(selector);
fooCollection = widgetCollection.filter(Foo);
widgetCollection = widgetCollection.find();
widgetCollection = widgetCollection.find(selector);
fooCollection = widgetCollection.find(Foo);
widgetCollection = fooCollection.find();
widgetCollection = fooCollection.find(selector);
widget = widgetCollection.first();
foo = fooCollection.first();
widget = widgetCollection.first(selector);
foo = fooCollection.first(selector);
voidReturnValue = widgetCollection.forEach(callback);
booleanReturnValue = widgetCollection.includes(widget);
numberReturnValue = widgetCollection.indexOf(widget);
widget = widgetCollection.last();
foo = fooCollection.last();
thisReturnValue = widgetCollection.off(event, listener);
thisReturnValue = widgetCollection.on(event, listener);
thisReturnValue = widgetCollection.once(event, listener);
widgetCollection = widgetCollection.parent();
widgetCollection = fooCollection.parent();
thisReturnValue = widgetCollection.set(property, value);
thisReturnValue = widgetCollection.set(properties);
widgetArray = widgetCollection.toArray();
fooArray = fooCollection.toArray();
thisReturnValue = widgetCollection.trigger(event);
anyReturnValue = widgetCollection.get(property);
thisReturnValue = widgetCollection.set(property, value);
widget = widgetCollection[0];
foo = fooCollection[0];
