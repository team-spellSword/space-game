gameApp.constant('keyBindingConstants', {
    left: 65, // A
    right: 68, // D
    jump: 32, // space
    act: 74 // J
});
gameApp.constant('environmentConstants', {
    gravityFactor: 0.4
});

gameApp.constant('tileMap', {
    cols: 10,
    rows: 8,
    tiles: [
        ['a', '', '', '', '', '', '', '', '', 'a'],
        ['a', '', '', '', '', '', '', 'b', 'b', 'a'],
        ['a', '', '', '', '', '', '', '', '', 'a'],
        ['a', '', 'b', 'b', '', '', '', '', '', 'a'],
        ['a', 'a', '', '', '', 'b', 'b', '', '', 'a'],
        ['a', '', '', '', '', '', '', '', '', 'a'],
        ['a', '', '', '', '', '', '', '', '', 'a'],
        ['a', 'a', 'a', 'a', 'c', 'c', 'a', 'a', 'a', 'a']
    ],
    keys: {
        'a': {
            passibility: 'solid',
        },
        'b': {
            passability: 'one-way'
        },
        'c': {
            passability: 'solid',
            damaging: true
        }
    }
});
