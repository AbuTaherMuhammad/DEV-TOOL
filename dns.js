const dns = require('node:dns')
let records = {
        a: [],
        aaaa: [],
        caa: [],
        cname: [],
        mx: [],
        naptr: [],
        ns: [],
        ptr: [],
        soa: [],
        srv: [],
        txt: [],

    };

const info = dns.resolveAny('geeksforgeeks.org', {ttl: true},async (err, addr) => {
    

    if (await err) {
        console.log("ERR",err);
        return await err
    }
    
    // addr.map((e, i) => {
    //         if (e.type === 'a') {
    //             records.a.push(e)
    //         }
            
    //         if (e.type === 'aaaa') {
    //             records.aaaa.push(e)
    //         }

    //         if (e.type === 'caa') {
    //             records.caa.push(e)
    //         }

    //         if (e.type === 'cname') {
    //             records.cname.push(e)
    //         }

    //         if (e.type === 'mx') {
    //             records.mx.push(e)
    //         }

    //         if (e.type === 'naptr') {
    //             records.naptr.push(e)
    //         }

    //         if (e.type === 'ns') {
    //             records.ns.push(e)
    //         }

    //         if (e.type === 'ptr') {
    //             records.ptr.push(e)
    //         }

    //         if (e.type === 'soa') {
    //             records.soa.push(e)
    //         }

    //         if (e.type === 'srv') {
    //             records.s.push(e)
    //         }

    //         if (e.type === 'txt') {
    //             records.txt.push(e)
    //         }

    //     console.log(i, e)
    // });


    console.log("REC",addr);

})

// console.log(info);