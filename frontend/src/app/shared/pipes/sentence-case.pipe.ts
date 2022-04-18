import { Pipe, PipeTransform } from '@angular/core';
import { toSentenceCase } from '@utils';

@Pipe({
    name: 'sentencecase',
})
export class SentenceCasePipe implements PipeTransform {
    transform(str: string = '', decodeSnake: boolean = true): string {
        // decodeSnake: To remove special characters(undersocre and dash)
        return toSentenceCase(str, decodeSnake);
    }
}
