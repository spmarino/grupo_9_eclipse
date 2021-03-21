const fs = require('fs');

const users = {
    readUsers:JSON.parse(fs.readFileSync(`${__dirname}/user.json`, 'utf-8')),

    writeUsers :(data) => {
        fs.writeFileSync(`${__dirname}/user.json`,JSON.stringify(data,null,2),'utf-8');
    }
}

module.exports = users;