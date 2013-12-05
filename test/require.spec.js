var path = require('path');

describe('apphome', function(){
    describe('can resolve', function(){

        beforeEach(function(){
            delete require.cache[require.resolve('../lib/apphome')];
        });

        it('name relative to cwd', function(){
            var apphome = require('../lib/apphome');
            var cwd = process.cwd();

            expect(apphome()).toEqual(cwd); 
            expect(apphome('lvl1')).toEqual(cwd + '/lvl1'); 
            expect(apphome('lvl1/lvl2')).toEqual(cwd + '/lvl1/lvl2'); 
            expect(apphome('lvl1/lvl2/lvl3')).toEqual(cwd + '/lvl1/lvl2/lvl3'); 
        });

        it('name relative to APP_HOME', function(){
            process.env.APP_HOME = path.join(process.cwd(), 'spec', 'lvl1');

            var apphome = require('../lib/apphome');

            expect(apphome('lvl2')).toEqual(process.env.APP_HOME + '/lvl2');
            expect(apphome('lvl2/lvl3')).toEqual(process.env.APP_HOME + '/lvl2/lvl3');
        });

        it('name relative to LVL2_HOME', function(){
            process.env.LVL2_HOME = path.join(process.cwd(), 'spec', 'lvl1', 'lvl2');

            var apphome = require('../lib/apphome');

            expect(apphome('lvl3', 'LVL2_HOME')).toEqual(process.env.APP_HOME + '/lvl2/lvl3');
        });
    });
});

