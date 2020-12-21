import * as RecursiveReaddir from 'recursive-readdir';

async function test () {
    const files = await RecursiveReaddir.default('/etc/cron.d');
    console.log(files);
}

test().catch( (err) => console.log(err) );
