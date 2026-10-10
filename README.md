# password-generator-cemilkandemir

Generiert zufällige Passwörter. Länge und Verwendung von Sonderzeichen sind einstellbar.

## Installation

```
npm install password-generator-cemilkandemir
```

## Verwendung

```js
const generatePassword = require('password-generator-cemilkandemir');

generatePassword();          // 10 Zeichen, ohne Sonderzeichen
generatePassword(16);        // 16 Zeichen, ohne Sonderzeichen
generatePassword(16, true);  // 16 Zeichen, mit Sonderzeichen
```

## Parameter

| Parameter       | Typ     | Standard | Beschreibung            |
|-----------------|---------|----------|-------------------------|
| `length`        | number  | `10`     | Länge des Passworts     |
| `sonderzeichen` | boolean | `false`  | Sonderzeichen verwenden |

Bei ungültigen Werten wird ein Fehler geworfen:

- `length` ist keine ganze Zahl größer als 0 → `RangeError`
- `sonderzeichen` ist kein Boolean → `TypeError`

Die Zufallszahlen kommen aus `crypto.randomInt` (kryptografisch sicher, gleichverteilt).

Verwendete Zeichen:

- Buchstaben: `A-Z`, `a-z`
- Ziffern: `0-9`
- Sonderzeichen: `!@#$%^&*()-_=+[]{};:,.<>?/|~`
