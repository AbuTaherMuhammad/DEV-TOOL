interface RecordAType {
    key?: string|number;
    address: string;
    ttl: number;
}

export const genA = (data: RecordAType[]) => {
    const result: RecordAType[] = []

    data.forEach((e, i) => {
        result.push({
            key: i+1,
            address: e.address,
            ttl: e.ttl
        })
    })

    return result
}

interface RecordCnameType {
    key?: string|number;
    value: string;
    ttl: number;
}

export const genCNAME = (data: RecordCnameType[]) => {
    const result: RecordCnameType[] = []

    data.forEach((e, i) => {
        result.push({
            key: i+1,
            value: e.value,
            ttl: e.ttl
        })
    })

    return result
}

interface RecordMxType {
    key?: string|number;
    exchange: string;
    priority: number;
}

export const genMX = (data: RecordMxType[]) => {
    const result: RecordMxType[] = []

    data.forEach((e, i) => {
        result.push({
            key: i+1,
            exchange: e.exchange,
            priority: e.priority
        })
    })

    return result
}

// TXT
interface RecordTxtType {
    key?: string|number;
    entries: string[];
}

export const genTXT = (data: RecordTxtType[]) => {
    const result: RecordTxtType[] = []

    data.forEach((e, i) => {
        result.push({
            key: i+1,
            entries: e.entries,
        })
    })

    return result
}

// SOA
interface RecordSoaType {
    key?: string|number;    
    nsname: string,
    hostmaster: string,
    serial: number,
    refresh: number,
    retry: number,
    expire: number,
    minttl: number
}

export const genSOA = (data: RecordSoaType[]) => {
    const result: RecordSoaType[] = []

    data.forEach((e, i) => {
        result.push({
            key: i+1,
            nsname: e.nsname,
            hostmaster: e.hostmaster,
            serial: e.serial,
            refresh: e.refresh,
            retry: e.retry,
            expire: e.expire,
            minttl: e.minttl
        })
    })

    return result
}