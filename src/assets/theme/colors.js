export const Colors = {
    text: {
        onPrimary: {
            color: '#fff',
            light: '#111',
            dark: '#fff',
        },
        onSecondary: {
            color: '#fff',
            light: '#fff',
            dark: '#fff',
        },
        onScreen: {
            dark: '#fff',
            ligth: '#111',
        }
    },
    primary: {
        color: '#4CAF50',
        light: '#C8E6C9',
        dark: '#388E3C',
    },
    secondary: {
        color: '#0176c3',
        light: '#5aa4f6',
        dark: '#004b92',
    },
    screen: {
        dark: '#373A3F',
        light: '#fff',
    }
}

function rgba(hex, alpha) {
    hex = hex.replace('#', '');
    var r = parseInt(hex.length == 3 ? hex.slice(0, 1).repeat(2) : hex.slice(0, 2), 16);
    var g = parseInt(hex.length == 3 ? hex.slice(1, 2).repeat(2) : hex.slice(2, 4), 16);
    var b = parseInt(hex.length == 3 ? hex.slice(2, 3).repeat(2) : hex.slice(4, 6), 16);
    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    }
    else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}
