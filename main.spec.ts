import 'mocha';
import { expect } from 'chai';
import {spiralwalk} from "./main";

describe('Spiral Walk Test Suite', () => {
    it('Can walk 0x0 array', () => {
        const arr = [[]] as string[][];

        expect(spiralwalk(arr)).to.equal('');
    })

    it('Can walk a 1x8 array', () => {
        const arr = [
            ['F', 'I', 'R', 'E', 'B', 'A', 'S', 'E'],
        ];

        expect(spiralwalk(arr)).to.equal('FIREBASE');
    })

    it('Can walk a 2x8 array', () => {
        const arr = [
            ['F', 'I', 'R', 'E', 'S', 'T', 'O', 'R'],
            ['!', '!', 'S', 'K', 'D', 'S', ' ', 'E'],
        ];

        expect(spiralwalk(arr)).to.equal('FIRESTORE SDKS!!');
    })

    it('Can walk an 8x2 array', () => {
        const arr = [
            ['F', 'I'],
            ['K', 'R'],
            ['D', 'E'],
            ['S', 'S'],
            ['E', 'T'],
            ['R', 'O'],
        ];

        expect(spiralwalk(arr)).to.equal('FIRESTORESDK');
    })

    it('Can walk a 4x4 array', () => {
        const arr = [
            ['G', 'O', ' ', 'F'],
            ['E', ' ', 'S', 'I'],
            ['R', 'K', 'D', 'R'],
            ['O', 'T', 'S', 'E'],
        ];

        expect(spiralwalk(arr)).to.equal('GO FIRESTORE SDK');
    })

    it('Can walk a 5x5 array', () => {
        const arr = [
            ['G', 'O', ' ', 'F', 'I'],
            ['K', ' ', 'T', 'E', 'R'],
            ['D', 'O', '!', 'A', 'E'],
            ['S', 'G', ' ', 'M', 'S'],
            [' ', 'E', 'R', 'O', 'T'],
        ];

        expect(spiralwalk(arr)).to.equal('GO FIRESTORE SDK TEAM GO!');
    })})
