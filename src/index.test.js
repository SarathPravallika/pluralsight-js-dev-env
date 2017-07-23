import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('our first test',() => {
  it('should be true',() => {
    expect(true).to.equal(true);
  })
})

describe('index.html',() => {
  it('should say hello',(done) => {
    const index = fs.readFileSync('./src/index.html','utf-8');
    jsdom.env(index, function(err,window){
      expect(true).to.equal(false);
      const content = window.document.getElementsByTagName('h1')[0];
      expect(content.innerHTML).to.equal('Hello NodeJS!');
      done();
      window.close();
    });
  })
})
