const {v4: uuidv4} = require('uuid')

const bounties = [
    {
        firstName: 'Darth',
        lastName: 'Revan',
        living: true,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Malgus',
        living: false,
        bountyAmount: 80000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Kao Cen',
        lastName: 'Darach',
        living: true,
        bountyAmount: 60000,
        type: 'Jedi',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Malak',
        living: false,
        bountyAmount: 30000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Darth',
        lastName: 'Bane',
        living: true,
        bountyAmount: 100000,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Bastila',
        lastName: 'Shan',
        living: false,
        bountyAmount: 70000,
        type: 'Jedi',
        _id: uuidv4()
    }
]

module.exports = bounties