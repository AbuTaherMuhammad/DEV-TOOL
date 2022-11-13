import { Divider, message, notification } from "antd";
import { FC, useState } from "react";
import AppLayout from "../../components/AppLayout";
import DnsDescription from "../../components/dnsLookup/DnsDescription";
import DnsTable from "../../components/dnsLookup/DnsTable";
import InputBox from "../../components/dnsLookup/InputBox";
// import dns from 'dns'

const DnsLookup: FC =() => {
    const [data, setData] = useState(true)
    const [records, setRecords] = useState({})

    const getDNS = (url: string, rrType: string)=> {
        console.log(url, rrType);

        // try {
        //     dns.resolveAny(url, (err, addr) => {
        //         if (err) {
        //             notification.error({
        //                 message: "Inspection Error!",
        //                 description: "Unable to fetch information.",
        //                 placement:'top',
        //             })
        //         } 

        //         setRecords(addr)
        //     })
        // } catch {
            notification.error({
                message: "Inspection Error!",
                description: "Unable to fetch information.",
                placement:'top',
            })
        // }

        return 
    }

    return (
        <AppLayout>
            <InputBox {...{getDNS}}/>

            <Divider style={{margin: 0}}/>
            {data ? <DnsTable /> : <DnsDescription />}
            
                 
        </AppLayout>
    )
}

export default DnsLookup