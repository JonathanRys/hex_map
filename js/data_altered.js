const TILES = [
    {
        name: 'Grassland',
        color: '#00ad2f',
        src: './img/Grassland.png',
        buildable: true,
        passable: true,
        cost: 25,
        points: 1,
        defense_modifier: 0.8,
        attack_modifier: 1.0
    }, {
        name: 'Green Hills',
        color: '#83b92d',
        src: './img/Green_Hills.png',
        buildable: true,
        passable: true,
        cost: 33,
        points: 1,
        defense_modifier: 1.1,
        attack_modifier: 0.9
    }, { // This one is impassable
        name: 'Mountains',
        color: '#777777',
        src: './img/Mountains.png',
        buildable: false,
        passable: false,
        cost: 0,
        points: 0,
        defense_modifier: 0,
        attack_modifier: 0
    }, { // This one is unbuildable
        name: 'Rocky Hills', 
        color: '#999999',
        src: './img/Rocky_Hills.png',
        buildable: false,
        passable: true,
        cost: 38,
        points: 0,
        defense_modifier: 0.7,
        attack_modifier: 1.5
    }, {
        name: 'Forest',
        color: '#237007',
        src: './img/Forest.png',
        buildable: true,
        passable: true,
        cost: 45,
        points: 1,
        defense_modifier: 1.3,
        attack_modifier: 0.7
    }, {
        name: 'Swamp',
        color: '#377e78',
        src: './img/Swamp.png',
        buildable: true,
        passable: true,
        cost: 50,
        points: 1,
        defense_modifier: 1.0,
        attack_modifier: 1.0
    }, {
        name: 'Desert',
        color: '#bba484',
        src: './img/Desert.png',
        buildable: true,
        passable: true,
        cost: 26,
        points: 1,
        defense_modifier: 0.5,
        attack_modifier: 0.8
    }, { // This one is unbuildable
        name: 'Sandy Hills',
        color: '#BB9C87',
        src: './img/Sandy_Hills.png',
        buildable: false,
        passable: true,
        cost: 38,
        points: 0,
        defense_modifier: 0.7,
        attack_modifier: 0.9
    }, { // This one is Impassable
        name: 'Mountains',
        color: '#777777',
        src: './img/Sandy_Mountains.png',
        buildable: false,
        passable: false,
        cost: 0,
        points: 0,
        defense_modifier: 0,
        attack_modifier: 0
    }, {
        name: 'Enchanted Windmill',
        color: '#eeddbb',
        src: './img/Enchanted_Windmill.png',
        buildable: false,
        passable: true,
        cost: 26,
        points: 5,
        defense_modifier: 0.5,
        attack_modifier: 0.8
    }, {
        name: 'Mine',
        color: '#eeeeee',
        src: './img/Mine.png',
        buildable: false,
        passable: true,
        cost: 45,
        points: 1,
        defense_modifier: 1.3, // These might be wrong
        attack_modifier: 0.7 // These might be wrong
    }, {
        name: 'Library',
        color: '#eeeeee',
        src: './img/Library.png',
        buildable: false,
        passable: true,
        cost: 45,
        points: 1,
        defense_modifier: 1.3, // These might be wrong
        attack_modifier: 0.7 // These might be wrong
    }, {
        name: 'Remote Village',
        color: '#eeeeee',
        src: './img/Village.png',
        buildable: false,
        passable: true,
        cost: 45,
        points: 1,
        defense_modifier: 1.3, // These might be wrong
        attack_modifier: 0.7 // These might be wrong
    }, {
        name: 'Yggdrasil',
        color: '#eeeeee',
        src: './img/Yggdrasil.png',
        buildable: false,
        passable: true,
        cost: 45,
        points: 20,
        defense_modifier: 1.3,
        attack_modifier: 0.7
    }, {
        name: 'Boneyard/Manfred',
        color: '#ddeebb',
        src: './img/Boneyard.png',
        buildable: false,
        passable: true,
        cost: 20,
        points: 5,
        defense_modifier: 0.8,
        attack_modifier: 1.0
    }, { // Impassable
        name: 'Water',
        color: '#6495ed',
        src: './img/Water.png',
        buildable: false,
        passable: false,
        cost: 0,
        points: 0,
        defense_modifier: 0,
        attack_modifier: 0
    }, {
        name: 'Unexplored Territory',
        color: '#6f624e',
        src: '',
        buildable: false,
        passable: false,
        cost: 0,
        points: 0,
        defense_modifier: 0,
        attack_modifier: 0
    }, {
        name: 'Void Tile',
        color: '#282828',
        src: '',
        buildable: false,
        passable: false,
        cost: 0,
        points: 0,
        defense_modifier: 0,
        attack_modifier: 0
    }
];
