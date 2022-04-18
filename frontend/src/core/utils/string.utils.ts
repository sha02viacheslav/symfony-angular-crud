import * as _ from 'lodash';

export const toSentenceCase = (str: string = '', decodeSnake: boolean = true): any => {
    // decodeSnake: To remove special characters(undersocre and dash)
    return decodeSnake ? _.upperFirst(_.lowerCase(str)) : _.upperFirst(str.toLocaleLowerCase());
};
