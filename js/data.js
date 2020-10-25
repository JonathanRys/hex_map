const TILES = {
    // Tile type
    standard: {
        // Tile Theme
        grass: [
            {
                name: 'Grassland',
                color: '#00ad2f',
                src: './img/standard/grass/Grassland.png',
                buildable: true,
                passable: true,
                cost: 25,
                points: 1,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Green Hills',
                color: '#83b92d',
                src: './img/standard/grass/Green_Hills.png',
                buildable: true,
                passable: true,
                cost: 33,
                points: 1,
                defense_modifier: 1.1,
                attack_modifier: 0.9
            }, { // This one is impassable
                name: 'Mountains',
                color: '#777777',
                src: './img/standard/grass/Mountains.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }, { // This one is unbuildable
                name: 'Rocky Hills', 
                color: '#999999',
                src: './img/standard/grass/Rocky_Hills.png',
                buildable: false,
                passable: true,
                cost: 38,
                points: 0,
                defense_modifier: 0.7,
                attack_modifier: 1.5
            }, {
                name: 'Forest',
                color: '#237007',
                src: './img/standard/grass/Forest.png',
                buildable: true,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }, {
                name: 'Swamp',
                color: '#377e78',
                src: './img/standard/grass/Swamp.png',
                buildable: true,
                passable: true,
                cost: 50,
                points: 1,
                defense_modifier: 1.0,
                attack_modifier: 1.0
            }, { // Impassable
                name: 'Water',
                color: '#6495ed',
                src: './img/standard/grass/Water.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }
        ],
        sand: [
            {
                name: 'Desert',
                color: '#bba484',
                src: './img/standard/sand/Desert.png',
                buildable: true,
                passable: true,
                cost: 26,
                points: 1,
                defense_modifier: 0.5,
                attack_modifier: 0.8
            }, {
                name: 'Green Hills',
                color: '#83b92d',
                src: './img/standard/sand/Green_Hills.png',
                buildable: true,
                passable: true,
                cost: 33,
                points: 1,
                defense_modifier: 1.1,
                attack_modifier: 0.9
            }, { // This one is Impassable
                name: 'Mountains',
                color: '#777777',
                src: './img/standard/sand/Sandy_Mountains.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }, { // This one is unbuildable
                name: 'Sandy Hills',
                color: '#BB9C87',
                src: './img/standard/sand/Sandy_Hills.png',
                buildable: false,
                passable: true,
                cost: 38,
                points: 0,
                defense_modifier: 0.7,
                attack_modifier: 0.9
            }, {
                name: 'Forest',
                color: '#237007',
                src: './img/standard/sand/Forest.png',
                buildable: true,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }, {
                name: 'Swamp',
                color: '#377e78',
                src: './img/standard/sand/Swamp.png',
                buildable: true,
                passable: true,
                cost: 50,
                points: 1,
                defense_modifier: 1.0,
                attack_modifier: 1.0
            }, { // Impassable
                name: 'Water',
                color: '#6495ed',
                src: './img/standard/sand/Water.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }
        ],
        easter: [
            {
                name: 'Spring Meadows',
                color: '#00ad2f',
                src: './img/standard/easter/Spring_Meadows.png',
                buildable: true,
                passable: true,
                cost: 25,
                points: 1,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Springtime Hills',
                color: '#83b92d',
                src: './img/standard/easter/Springtime_Hills.png',
                buildable: true,
                passable: true,
                cost: 33,
                points: 1,
                defense_modifier: 1.1,
                attack_modifier: 0.9
            }, { // This one is impassable
                name: 'Mountains',
                color: '#777777',
                src: './img/standard/easter/Mountains.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }, { // This one is unbuildable
                name: 'Rocky Hills', 
                color: '#999999',
                src: './img/standard/easter/Rocky_Hills.png',
                buildable: false,
                passable: true,
                cost: 38,
                points: 0,
                defense_modifier: 0.7,
                attack_modifier: 1.5
            }, {
                name: 'Woods of Joy',
                color: '#237007',
                src: './img/standard/easter/Woods_of_Joy.png',
                buildable: true,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }, {
                name: 'Daffodil Marsh',
                color: '#377e78',
                src: './img/standard/easter/Daffodil_Marsh.png',
                buildable: true,
                passable: true,
                cost: 50,
                points: 1,
                defense_modifier: 1.0,
                attack_modifier: 1.0
            }, { // Impassable
                name: 'Water',
                color: '#6495ed',
                src: './img/standard/easter/Water.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }
        ],
        halloween: [
            {
                name: 'Withered Meadow',
                color: '#00ad2f',
                src: './img/standard/halloween/Withered_Meadow.png',
                buildable: true,
                passable: true,
                cost: 25,
                points: 1,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Green Hills',
                color: '#83b92d',
                src: './img/standard/halloween/Green_Hills.png',
                buildable: true,
                passable: true,
                cost: 33,
                points: 1,
                defense_modifier: 1.1,
                attack_modifier: 0.9
            }, { // This one is impassable
                name: 'Ghastly Mountain',
                color: '#777777',
                src: './img/standard/halloween/Ghastly_Mountain.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }, { // This one is unbuildable
                name: 'Rocky Hills', 
                color: '#999999',
                src: './img/standard/halloween/Rocky_Hills.png',
                buildable: false,
                passable: true,
                cost: 38,
                points: 0,
                defense_modifier: 0.7,
                attack_modifier: 1.5
            }, {
                name: 'Forest of Despair',
                color: '#237007',
                src: './img/standard/halloween/Forest_of_Despair.png',
                buildable: true,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }, {
                name: 'Swamp of Terror',
                color: '#377e78',
                src: './img/standard/halloween/Swamp_of_Terror.png',
                buildable: true,
                passable: true,
                cost: 63,
                points: 1,
                defense_modifier: 1.0,
                attack_modifier: 1.0
            }, { // Impassable
                name: 'Piranha Resivour',
                color: '#6495ed',
                src: './img/standard/halloween/Piranha_Resivour.png',
                buildable: false,
                passable: false,
                cost: 0,
                points: 0,
                defense_modifier: 0,
                attack_modifier: 0
            }
        ],
        winter: [],
    },
    special: {
        // Tile Theme
        grass: [
            {
                name: 'Enchanted Windmill',
                color: '#ddeebb',
                src: './img/special/grass/Enchanted_Windmill.png',
                buildable: false,
                passable: true,
                cost: 20,
                points: 5,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Boneyard/Manfred',
                color: '#ddeebb',
                src: './img/special/grass/Boneyard.png',
                buildable: false,
                passable: true,
                cost: 20,
                points: 5,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Mysterious Shrine',
                color: '#eeeeee',
                src: './img/special/grass/Mysterious_Shrine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 35,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }, {
                name: 'Yggdrasil',
                color: '#eeeeee',
                src: './img/special/grass/Yggdrasil.png',
                buildable: false,
                passable: true,
                cost: 20,
                points: 35,
                defense_modifier: 0.8,
                attack_modifier: 1.0        
            }
        ],
        sand: [
            {
                name: 'Dragon skull',
                color: '#eeddbb',
                src: './img/special/sand/Dragon_Skull.png',
                buildable: false,
                passable: true,
                cost: 26,
                points: 5,
                defense_modifier: 0.5,
                attack_modifier: 0.8
            }
        ],
        halloween: [
            { 
                color: '#999999',
                src: './img/special/halloween/Pal_Sematary.png',
                buildable: false,
                passable: true,
                cost: 38,
                points: 2,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Haunted Windmill',
                color: '#ddeebb',
                src: './img/special/halloween/Haunted_Windmill.png',
                buildable: false,
                passable: true,
                cost: 25,
                points: 5,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Fields of Misery',
                color: '#eeeeee',
                src: './img/special/halloween/Fields_of_Misery.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 20,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }
        ],
        easter: [
            {
                name: 'Imposing Structure',
                color: '#ddeebb',
                src: './img/special/easter/Imposing_Structure.png',
                buildable: false,
                passable: true,
                cost: 25,
                points: 5,
                defense_modifier: 0.8,
                attack_modifier: 1.0
            }, {
                name: 'Miracle Shrine',
                color: '#eeeeee',
                src: './img/special/easter/Miracle_Shrine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 20,
                defense_modifier: 1.3,
                attack_modifier: 0.7
            }
        ],
        winter: []
    },
    resource: {
        // Tile Theme
        grass: [
            {
                name: 'Mine',
                color: '#eeeeee',
                src: './img/resource/grass/Mine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Library',
                color: '#eeeeee',
                src: './img/resource/grass/Library.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Remote Village',
                color: '#eeeeee',
                src: './img/resource/grass/Village.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }
        ],
        sand: [
            {
                name: 'Mine',
                color: '#eeeeee',
                src: './img/resource/sand/Mine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Library',
                color: '#eeeeee',
                src: './img/resource/sand/Library.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Remote Village',
                color: '#eeeeee',
                src: './img/resource/sand/Village.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }
        ],
        halloween: [
            {
                name: 'Mine',
                color: '#eeeeee',
                src: './img/resource/halloween/Mine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Library',
                color: '#eeeeee',
                src: './img/resource/halloween/Library.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Remote Village',
                color: '#eeeeee',
                src: './img/resource/halloween/Village.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }
        ],
        easter: [
            {
                name: 'Egg Mine',
                color: '#eeeeee',
                src: './img/resource/easter/Egg_Mine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Giant Hare',
                color: '#eeeeee',
                src: './img/resource/easter/Giant_Hare.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Eggsercise Yard',
                color: '#eeeeee',
                src: './img/resource/easter/Eggsercise_Yard.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }
        ],
        winter: [
            {
                name: 'Mine',
                color: '#eeeeee',
                src: './img/resource/winter/Mine.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Library',
                color: '#eeeeee',
                src: './img/resource/winter/Library.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }, {
                name: 'Remote Village',
                color: '#eeeeee',
                src: './img/resource/winter/Village.png',
                buildable: false,
                passable: true,
                cost: 45,
                points: 1,
                defense_modifier: 1.3, // These might be wrong
                attack_modifier: 0.7 // These might be wrong
            }
       ]
    },
    // Should these mock the same format as above?
    blank: [
        {
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
    ],
    // Methods?
    getIndex: (theme, set) => {
        return TILES[theme][set].length
    }
};
