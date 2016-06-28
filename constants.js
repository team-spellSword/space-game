gameApp.constant('keyBindingConstants', {
    left: 65, // A
    right: 68, // D
    jump: 32, // space
    act: 74 // J
});
gameApp.constant('environmentConstants', {
    gravityFactor: 0.4
});

gameApp.constant('tileMap', (function() {
    function Tile(argsObject) {
        this.passability = argsObject.passability || 'solid';
        this.damaging = argsObject.damaging || false;
    }

    return {
        cols: 10,
        rows: 8,
        tiles: [
            ['a', '', '', '', '', '', '', '', '', 'a'],
            ['a', '', '', '', '', '', '', 'b', 'b', 'a'],
            ['a', '', '', '', '', '', '', '', '', 'a'],
            ['a', '', 'b', 'b', '', '', '', '', '', 'a'],
            ['a', '', '', '', '', 'b', 'b', '', '', 'a'],
            ['a', '', '', '', '', '', '', '', '', 'a'],
            ['a', '', '', '', '', '', '', '', '', 'a'],
            ['a', 'a', 'a', 'a', 'c', 'c', 'a', 'a', 'a', 'a']
        ],
        keys: {
            'a': new Tile({}), // Need empty object
            'b': new Tile({passability: 'one-way'}),
            'c': new Tile({damaging: true})
        }
    };
})());
