const {v4: uuidv4} = require('uuid')

const bounties = [
    {
        firstName: 'Darth',
        lastName: 'Revan',
        eliminated: false,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Malgus',
        eliminated: false,
        bountyAmount: 80000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Kao Cen',
        lastName: 'Darach',
        eliminated: true,
        bountyAmount: 60000,
        type: 'Jedi',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Malak',
        eliminated: true,
        bountyAmount: 30000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Bane',
        eliminated: false,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Bastila',
        lastName: 'Shan',
        eliminated: true,
        bountyAmount: 70000,
        type: 'Jedi',
        _id: uuidv4()
    }
]

module.exports = bounties