import test from 'node:test';
import assert from 'node:assert/strict';
import {JSDOM} from 'jsdom';
import fs from 'node:fs';


const file = fs.readFileSync('index.html', {encoding: 'utf8'});
const dom = new JSDOM(file);

/**
 * Students tests should be written in this file
 */

test('title is not empty', (t) =>{
    const title = dom.window.document.title;
    assert.equal(title, 'Hello World');
});
