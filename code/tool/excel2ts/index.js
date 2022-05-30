var fs = require("fs");
var path = require("path");
var xlsx = require('node-xlsx');

let dir = path.resolve(__dirname, '..', '..', 'config')
console.log(dir)
let outDir = path.resolve(__dirname, '..', '..', 'client', "assets", 'script', 'game', 'config')
console.log(outDir)
let excel2tsHandler = function(excel, excelName) {
    if(excel[0].name == 'Sheet1') {
        excelName = excelName.substr(0, excelName.indexOf('.'))
        let excelData = excel[0].data;
        let length = excelData.length;

        let outTsFile = "class " +　excelName + " {\n"

        let paramLength = 0;
        let paramUnits = [];
        let typeUnits = []
        for(i = 1;; i++) {
            let paramUnit = excelData[0][i];
            if(typeof(paramUnit) == "undefined") {
                paramLength = i;
                break;
            }
            paramUnits[i] = paramUnit;
            let type = "string"
            let typeUnit = excelData[1][i];
            switch(typeUnit) {
                case "int":
                    type = "number"
                    break;
                default:
                    type = "string";
                    break;
            }
            typeUnits[i] = type;
            outTsFile = outTsFile + "   ";
            outTsFile = outTsFile + paramUnit + " : " + type + ";\n";
        }
        outTsFile = outTsFile + "}\n\n";
        outTsFile = outTsFile + "let datas : " + excelName + "[] = [\n"

        for(i = 3; i < length; i++) {
            outTsFile = outTsFile + "   { ";
            for(j = 1; j < paramLength; j++) {
                if(j > 1) {
                    outTsFile = outTsFile + ", "
                }
                if (typeUnits[j] == "string") {
                    outTsFile = outTsFile + paramUnits[j] + " : " + "\"" + excelData[i][j] + "\"";
                }
                else{
                    outTsFile = outTsFile +paramUnits[j] + " : " + excelData[i][j];
                }
            }
            outTsFile = outTsFile + " },\n";
        }
        outTsFile = outTsFile + "]\n";
        console.log(outTsFile);
        fs.writeFileSync(outDir + "/" + excelName + ".ts", outTsFile);
    }
}

let excelPath = fs.readdirSync(dir);
excelPath.forEach(function(excelName, index) {
    var obj = xlsx.parse(path.resolve(dir, excelName));
    console.log(obj)
    excel2tsHandler(obj, excelName)
})