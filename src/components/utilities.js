import numeral from 'numeral';

export const url = "https://restcountries.com/v3.1";

export default function numberFormat (number) {
    let result = numeral(number).format(0,0);
    return result;
}

