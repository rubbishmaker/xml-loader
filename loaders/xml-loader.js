const XML = require("fast-xml-parser");
module.exports = function (soure) {
    const callback = this.async()
    const parser = new XML.XMLParser();
    const convertedObj = JSON.stringify(parser.parse(soure));
    callback(null,`module.exports = ${convertedObj};`)
}