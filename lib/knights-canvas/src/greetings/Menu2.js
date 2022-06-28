const Greeting = require("./Menu");
const fs = require('fs')

module.exports = class Welcome extends Greeting {
    constructor() {
        super();
        this.textTitle = "MENU";
        this.textMessage = "{server}";
        this.colorTitle = "#03A9F4";
        this.assent = fs.readFileSync('./bg.jpeg');
    }
};
