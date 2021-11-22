### yidash（易大师）

> 基于 lodash 函数库扩展的实用业务方法库

![logo](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALrUExURejl5cvJys3LzOfk5IGDhjk/RGZqbjQ6QKONZcI4OImKjkdMUri3uLq6u8PCw2puck5TWIaIi6SOZqeSbHF0eFhcYXl7f2Vpbbm5uuHe3uTg3t3X0eXh4ODa1uLe2uDb1+Hd2WJmaufk47Ohg9PR0bu6vKWmqDxCR+bj4+Pf3DY7QamUb8i8qsi9q+Xi4Me7p6SPaMS4o+bj4sLAwomLjqenqZKTljk/RY6Pkq+ce5aXmd7Y06aRaq2aeLaliNbNwqaRa6mVcV9jaIKEh+Pg4GRobNfPxcO2odnX2L2ulbiojM/Ft0FGTNnSys7DtKuXdLa1t7Kxs5manT5ESVBVWtHP0Dg+RHN2etXT1KyZd+Th4aCho7Wkh9bOxKiTbtKDg6qWcr6+v8Cym5ydn8a4pLytlObi4eTV1cI5OczBseDd3tzW0LmpjrSihN7Z1LKhguPe26WQadPKva+dfMu/rm9ydujl5OTg3dDGuDpARUZLUElOVNza2t/a1ZCSlUxRV2xvdN/c3OPf3bGfgK6ur+LKylpeY9jW1sRCQsG0ndmhoeDBwcm+rMtkZObe3p+fotaUlEJHTUNJTtXMwburkaioq8nIyX6BhNDHuYuMj87Etejk5cCxmktQVdjRyL6wmOXi47SjhdvVzuLf4I2OkcbFxrCeftB4eICChtvY2VNXXHp8gOfj493a28zKy1VaXsK0nsjHyKurrdqmpturq8M+PtSNjcVFRcpdXczBsshVVdSLi7amidPLv8xmZsM7O965uaqqrOTS0sdQUI6Qk81ra9KBgaSlp9rUzL29vqyYdUBFS9DPz1xgZNzVz9fQxqyrrc/NzqKipLy7vampq9icnJSVmM5wcN22ts5vb8PBw9/d3XZ5fa6usOPh4bOztJqanebd3cC/wNeXl1FVWslaWmdqbru6u+DCwoWHisZMTNyvr8xnZ+bb22hscMlYWM91ddienteamsxpaXt+gdbU1bm4uczLy9LJvALq0REAAAdtSURBVHja7Zt5WBRlGMC/XG1nxZDLQERAMBGBFrwQEFFAQBEwTVEUQ0DUQBEFxQNvTQ3zwjweb/FIUfMqU8s0bzQru+2+L7st/mzmm5lvZhaw3SeW5uV5f//wfu/Ofvv9mP3OAUIQBEEQBEEQBEEQBEEQBEF0z+XjzxByd8UZ8CK/mJZd+vWk6RXQEqvPnFhy2kThRcY/DfdrZWK8eGqZaSVYkXdMGp4AK/KqVmQFWJELWhG4fYQsU3tM+ByuyCm1yGuAx999apEPIE8kapEXAIv8qBY5AVhkiVpkCWCRqnOKx8kqyKut04rI16CXje8pIvtAi5xRRL4ELXJcEXkftMh3ish40CJ3J7ANCfCd7g+yyErgIj/B31VZ7HZXABf5rQnsqjS7Xci7Ksp4k+ncHysngN5ViVz6nZ9ALqy+DF6EeF+NiUnxmQ5bwnNzQRBHcT1b7AtWwze7L6fCpSIfpIZfcG/OApflXgBvxySp9aEV2zbKMRcN7qZEXRdbnpVLu0b+Flepr9yC5dE+iza7sLQryUsu9E/uSjwnRtBU3xRIHl7T+CYXDbhKSFkiHbb6hfkQcqsiVAh9AIls4bg0szeZHjPQhXX0gTHTia85jeN2wplTtnE7a/zIjPJo7aAVXTyD+NX04VLBiGx+nZBd22uNvnwH2b6LHwdC4NySrqX+XD348/0fCj5h/bj7QDs+ADILXLh/waUgU/8e7TiryEeRRlubWCfSDkUai8nWiUTpXqTMOpHJ+l/3NhURH+tEyvS/M7ROpH1TEdH/KsXbOhFfFGksplgn4q17kYVNRcSzaYm41q8gvrRQ/ydBtJ1Ti+vZJAaFxNCfM4CIvES8goNqa4wxe5FkGnnq/9yBtjNM+JKZLb5grrnCfTDT2AuISIU4goWpniv0TpxCk9uBiBjEQx95emTn8IXyFNiHFvOAiBSZpU4wUBYZLXWhYPEmATjcSlP6NU+ELDKSaoRII0CWQf8i5WykDeZV2LlpqB95tJyNyWYAB3Seyljlr17Ut5d6Bz0DDgQgQp5n7c0i2xSRBDKSxdkQPEiZ8kykKlkR2UyKWD4KhIjqK+RjVkRyA1k4CYaHMuRyKQMUkXH5LOwDROQsa3FNtiKSvY6FO4GIjGYtLjYkymGiIZWlC4GIKE+r+LVjaiidRVLl1aLAXiAii1iLB/ClzDH8NJ9A6KNeiQggIns5zQKr3cjoKO0YEA1ORPzVTwm0uFFQRDLZjOiqTmcxkZeBiBA2VKn3T34usBYoAlWL6niew47pp+WBESGTXdlKkZEib3lB/cmWvFgsVVI1UmoiAcU4sdUhSqZYzBTA8iCe4uZjuZIJo4m0QGAiJCVUORai0IWwSwIBR7D6WEjepeTC8yAGYRF8XSkL5yn+fgBFiG8QxxUpRX5Edi0jIJmqfg4iHG5vJEDh94e75DhKXNTDJC+CWyfHCVy0F1gRkt+b/UVpaehVApiJ7Gw0pJyAhn211gH/VxgEQZBG5lD35gJv0cIIZyGOu82Ho5pr6JXB576IU2W+j/x0gaqepEr2ypAdSvq5Y72UN31GV82RNK6MFwqf9KKFdxvgkePbRkoXWlWkWHAnJKOLUctY/uXWFrnwg0msHjdVPkdOto1roXmDcPkwKf5WuOCaVGj230U6SVV1Fgo9xbgD3wSLNhsf4V9+0DJpnN1RviHDVdkjUjIj1uLye3yymRS3Eq54SCo88H+LCDePMkST3VNXUt8ixsNiNQc0yf1iso0OROIt23C7HpFRtJYPtclBtCeTmZYXJzW+CHF2d3d3kPo0H6bfUUQc3NzcSuZJ76uktWwQC1s7SGPEeTo+yVolbiKbSCOI0KG0UhEReFhquHytJNJaiO8EiIWWQmF3tVh4lqSruo4sEqn5QHuJrFcNmfFO2h58PxHipBKRKnEiZLE0mndUidwc/OaO2iJzH+Pp2XAiHlJVQ0cQskmKP7JVpL8YO/M3KlxqpkpEENvaYcP6OxoRDQ0g0naQUW7eUXkuWGyjyFNSz7jGxz+L4QHhkgBta6tX2VOEjJIra7NWCmINNopcEcO1nVXVDePjm5btzbGnCCmxqLR6GLFR5KA0OvXnWSrV0oPPr7Js75od9hQ5NE9b6WJiq0hsHU0ThmXDn5bZo/YUIY7qdZJxA7FZpE0dTXMWh5KSak32L7uKaNZER3Y3pAjPvdtXNrlJU6txsCKS3p0nvWFFDPPZ5wccJlaKOFgpQhlbW6ShJ0TKnNny53eSUzc8PDy+kbooH+5RicQ6Ojp2k7Yuxu73EUlylLnYSCJsWpwvJzoH1O6mdS4aIxWRi90EZisia2td7WFvkY5G1TxN50lrl/GtFJEe9J2PMxFD7av/1q3IrAxbRLYa9CrS5Q1ii8h5olORoT2IDSLDc4jdReK/aiEQ8DHLLG2hwYFfHJO5M5VE+FCn+TlzxGvjwoXMGnGnvp9eFHBMmPFVlw9a2vIGff1JJ5qYRY8tRjjQwrwFeC6HIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIE2bfwB/RKyCpWSqgwAAAABJRU5ErkJggg==)

## 安装

```bash
# 全局安装
npm install --global yidash

# 局部安装
npm install yidash
```

## 使用

### import 方式

```javascript
import { math_Plus, tree_Array2Tree, regexp_TrainNumber, number_ValidNumber } from "yidash";
console.dir(math_Plus(3, 4));
console.dir(
    tree_Array2Tree([
        { id: 1, pid: 0 },
        { id: 2, pid: 1 },
        { id: 3, pid: 2 },
    ])
);
console.dir(regexp_TrainNumber);
let validNumber = number_ValidNumber();
console.log(validNumber(1.111)); // 1.11
console.log(validNumber(1.571333)); // 1.57
console.log(validNumber("1..221333")); // 1.57
console.log(validNumber("1.2213.33")); // 1.57
console.log(validNumber("1.")); // 1.
console.log(validNumber("1.2")); // 1.20
console.log(validNumber("1.2.")); // 1.20
```

### require 方式

```javascript
const { math_Plus, tree_Array2Tree, regexp_TrainNumber, number_ValidNumber } = require("yidash");
console.dir(math_Plus(3, 4));
console.dir(
    tree_Array2Tree([
        { id: 1, pid: 0 },
        { id: 2, pid: 1 },
        { id: 3, pid: 2 },
    ])
);
console.dir(regexp_TrainNumber);
let validNumber = number_ValidNumber();
console.log(validNumber(1.111)); // 1.11
console.log(validNumber(1.571333)); // 1.57
console.log(validNumber("1..221333")); // 1.57
console.log(validNumber("1.2213.33")); // 1.57
console.log(validNumber("1.")); // 1.
console.log(validNumber("1.2")); // 1.20
console.log(validNumber("1.2.")); // 1.20
```

## 文档

[yidash 在线文档地址](https://yidash.chensuiyi.com)

## 仓库

> [github https://github.com/chenbimo/yidash](https://github.com/chenbimo/yidash)

> [gitee https://gitee.com/banshiweichen/yidash](https://gitee.com/banshiweichen/yidash)
