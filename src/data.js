window.D = {
    player: {
        t: 1,  // type : player
        s: 2,  // sprite: 2    
        h: 10, // start health
    }, mobs: [{
        h: [2, 3], // health: between 2 and 5
        i: 6,  // color index 8
        m: 0, // minimal distance from start
        c:70 // change=70%
    },
    {
        h: [4, 4], // health: between 4 and 8
        i: 7, // color index 8
        m: 10, // minimal distance from start
        c: 20 //change 30%        
    },
    {
        h: [6, 6], // health: between 6 and 12
        i: 9,  // color index 8
        m: 30, // minimal distance from start
        c: 10 // change 10%
    }],
    floors: [{
        t: 3, // type: floor
        b: 1, // biome: 1
        s: [1],
        i: [2, 5]
    }],
    items: [
        {
            t: 1,
            n: "heart", //name
            s: 13, //sprite
            i: -1, // palette index
            m: 0, // minimal distance from start
            c: 70, // change of the item spawning
        }, {
            t: 2, // subtype : sword",
            n: "iron Sword", //name
            d: 5, // damage
            s: 5, //sprite
            i: 1, // palette index
            m: 0, // minimal distance from start
            c: 20, // change of the item spawning
            
        }, {
            t: 2, // subtype : sword",
            n: "Golden Sword", //name
            d: 5, // damage
            s: 5, //sprite
            i: 23, // palette index
            m: 0, // minimal distance from start
            c: 10, // change of the item spawning
        }, {
            t: 2, // subtype : sword",
            n: "diamond Sword", //name
            d: 5, // damage
            s: 5, //sprite
            i: 24, // palette index
            m: 0, // minimal distance from start
            c: 2, // change of the item spawning
        }, {
            t: 3, // subtype : shield",
            n: "iron shield", //name
            b: 2, // block value
            s: 4, //sprite
            i: 0, // palette index
            m: 0, // minimal distance from start
            c: 20, // change of the item spawning
        }, {
            t: 3, // subtype : shield",
            n: "golden shield", //name
            b: 4, // block value
            s: 4, //sprite
            i: 23 , // palette index
            m: 0, // minimal distance from start
            c: 10, // change of the item spawning
        }, {
            t: 3, // subtype : shield",
            n: "diamond shield", //name
            b: 7, // block value
            s: 4, //sprite
            i: 24, // palette index
            m: 0, // minimal distance from start
            c: 5, // change of the item spawning
        }],
    objectives: [{

    }]
}