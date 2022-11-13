import { Typography } from "antd";
import Link from "next/link";
import { Props } from "next/script";
import { FC } from "react";
import S from './DnsDescription.module.sass'

const {Title, Text} = Typography
const DnsDescription: FC<Props> = ({className, ...rest}) => {
  return (
    <div className={S.__box}>
      <Title className={S.__title} level={5}>About DNS Lookup</Title>
      <Text className={S.__brief} type="secondary" >This test will list DNS records for a domain in priority order. The DNS lookup is done directly against the domain&apos;s authoritative name server, so changes to DNS Records should show up instantly. You can click <Link href="#">Diagnostics</Link>, which will connect to the mail server, verify reverse DNS Records, perform a simple Open Relay check and measure response time performance. You may also check each DNS Record(IP Address) against 105 DNS based <Link href="#">blacklists</Link>. (Commonly called RBLs, DNSBLs)</Text>
    </div>
  );
};

export default DnsDescription;
