interface Photographer {
    year: number;
    name: string;
}

export var PHOTOGRAPHERS : Photographer[] = [
    {born : 1992, name : 'Simon Bergström',
     about: 'It\'s a me, Simon!',
     github: 'https://github.com/menuan',
     img: 'assets/img/sb.jpg'}
];

console.log(PHOTOGRAPHERS);