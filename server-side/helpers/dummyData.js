const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const dummyUsers = [];

const usernames = ['james', 'john', 'william', 'paul', 'thomas', 'kevin', 'gary', 'larry', 'dennis', 'roger'];

  dummyUsers.push({
    username: usernames[i],
    email: `${usernames[i]}@gmail.com`,
    userId: uuidv4(),
    password: bcrypt.hashSync('toto', 10),
    createdAt: new Date(),
    updatedAt: new Date()
  })

module.exports = {
  dummyUsers,
  usernames,
}
