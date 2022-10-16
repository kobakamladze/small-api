
import { parse } from 'csv-parse';
import fs  from 'fs';

const results = [];

console.log(JSON.stringify(parse));

fs.createReadStream('kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', data => {
        results.push(data);
        console.log(JSON.stringify(data))
    })
    .on('error', error => console.log(error))
    .on('end', () => console.log('Finite la comedia'));