import * as fs from 'fs';
import pdf from 'pdf-parse';

let path = "";
let dataBuffer = fs.readFileSync(path);
let categories = {
};

pdf(dataBuffer).then((data: any) => {
    console.log(data.text);
})