# TodayJS

`TodayJS` is a library, extends you with useful methods for handling today-date in JavaScript.

## Features

`TodayJS` extends you with simple and powerful methods that you can use to handle the today-date, following are some other features.

- Pure JavaScript.
- Very Lightweight, Less Than 2 Kilobytes.
- Easy To Install.
- Easy To Use.

## Installation

### As normal plugin

1. Clone the repo in your PC.
2. Open the repo folder.
3. Copy the `js` folder into your project directory.
4. Include the `today.js` file in your html file.

```html
<script src="js/today.js"></script>
```

> **Notice:** I assume that your html file is in the root directory.

Now, you are all set to use `TodayJS` in your project.

### As NPM package

Install the package in your project.

```
npm install today.js --save
```

Require the package.

```javascript
const TodayJS = require("today.js");
```

Now, you are all set to use `TodayJS` in your project.

## Usage

To use `TodayJS`, you need an instance from the `TodayJS` constructor.

```javascript
const today = new TodayJS();
```

Now, you can use `TodayJS` methods, following is a table of `TodayJS` methods.

| Method         | Params              | Description                                                                                           |
| -------------- | ------------------- | ----------------------------------------------------------------------------------------------------- |
| milliseconds() | Doesn't have param. | Returns milliseconds.                                                                                 |
| seconds()      | Doesn't have param. | Returns seconds.                                                                                      |
| minutes()      | Doesn't have param. | Returns minutes.                                                                                      |
| hours()        | Doesn't have param. | Returns hours.                                                                                        |
| day()          | Accepts one param.  | Returns a day of week or a day of month depending on the value you passed to its param (week, month). |
| month()        | Doesn't have param. | Returns a month.                                                                                      |
| year()         | Doesn't have param. | Returns a year.                                                                                       |

### Usage Example:

```javascript
const TodayJS = require("today.js");
const today = new TodayJS();

console.log(`Today's date is: ${today.day("week")}, ${today.month()} ${today.day("month")}, ${today.year()}`);
```

## Support

Thank you for using `TodayJS`, if you experienced any issue feel free to describe it [here](https://github.com/gitmhd/today.js/issues).
