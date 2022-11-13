import { Table, Tabs, Typography } from "antd";
import Link from "next/link";
import { Props } from "next/script";
import { FC } from "react";
import { genA,genCNAME, genMX, genSOA, genTXT } from "../../../utils/generator.utils";
import S from './DnsTable.module.sass'

const {Title, Text} = Typography
const recs = {
  a: [
    { address: '76.76.21.241', ttl: 60 },
    { address: '76.76.21.142', ttl: 60 },
    { address: '76.76.21.146', ttl: 60 },
    { address: '76.76.21.143', ttl: 60 },
    { address: '76.76.21.144', ttl: 60 },
    { address: '76.76.21.147', ttl: 60 },
  ],
  cname: [
    { value: 'example.com', ttl: 60 },
    { value: 'example.com', ttl: 60 },
    { value: 'example.com', ttl: 60 },
    { value: 'example.com', ttl: 60 },
  ],
  MX: [
    { exchange: 'alt4.aspmx.l.example.com', priority: 50 },
    { exchange: 'alt4.aspmx.l.example.com', priority: 50 },
    { exchange: 'alt4.aspmx.l.example.com', priority: 50 },
    { exchange: 'alt4.aspmx.l.example.com', priority: 50 },
    { exchange: 'alt4.aspmx.l.example.com', priority: 50 },
  ],
  TXT: [
    { entries: [ 'v=spf1 include:_spf.example.com ~all' ] },
    { entries: [ 'v=spf1 include:_spf.example.com ~all' ] },
    { entries: [ 'v=spf1 include:_spf.example.com ~all' ] },
    { entries: [ 'v=spf1 include:_spf.example.com ~all' ] },
    { entries: [ 'v=spf1 include:_spf.example.com ~all' ] },
  ],
  soa: [
    {
      nsname: 'ns1.example.com',
      hostmaster: 'admin.example.com',
      serial: 156696742,
      refresh: 900,
      retry: 900,
      expire: 1800,
      minttl: 60 
    },
    {
      nsname: 'ns1.example.com',
      hostmaster: 'admin.example.com',
      serial: 156696742,
      refresh: 900,
      retry: 900,
      expire: 1800,
      minttl: 60 
    },
    {
      nsname: 'ns1.example.com',
      hostmaster: 'admin.example.com',
      serial: 156696742,
      refresh: 900,
      retry: 900,
      expire: 1800,
      minttl: 60 
    },
    {
      nsname: 'ns1.example.com',
      hostmaster: 'admin.example.com',
      serial: 156696742,
      refresh: 900,
      retry: 900,
      expire: 1800,
      minttl: 60 
    },
  ],
  ns: [
    { value: 'ns-1520.awsdns-62.org', type: 'NS' },
    { value: 'ns-869.awsdns-44.net', type: 'NS' },
    { value: 'ns-245.awsdns-30.com', type: 'NS' },
    { value: 'ns-1569.awsdns-04.co.uk', type: 'NS' }
  ]
}

const a = (
  <Table 
    columns={[
      {
        title: "SL",
        dataIndex: 'key',
        key: 'sl',
        className: S.__sl
      },
      {
        title: "Address",
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: "TTL",
        dataIndex: 'ttl',
        key: 'ttl'
      }
    ]}
    dataSource={genA(recs.a)}
    scroll={{y: 240}}
    size="small"
    bordered
  />
)
const aaaa = (
  <Table 
    columns={[
      {
        title: "SL",
        dataIndex: 'key',
        key: 'sl',
        className: S.__sl
      },
      {
        title: "Address",
        dataIndex: 'address',
        key: 'address'
      },
      {
        title: "TTL",
        dataIndex: 'ttl',
        key: 'ttl'
      }
    ]}
    dataSource={genA(recs.a)}
    scroll={{y: 240}}
    size="small"
    bordered
  />
)
const cname = (
  <Table 
    columns={[
      {
        title: "SL",
        dataIndex: 'key',
        key: 'sl',
        className: S.__sl
      },
      {
        title: "Value",
        dataIndex: 'value',
        key: 'value'
      },
      {
        title: "TTL",
        dataIndex: 'ttl',
        key: 'ttl'
      }
    ]}
    dataSource={genCNAME(recs.cname)}
    scroll={{y: 240}}
    size="small"
    bordered
  />
)
const mx = (
  <Table 
    columns={[
      {
        title: "SL",
        dataIndex: 'key',
        key: 'sl',
        className: S.__sl
      },
      {
        title: "Exchange",
        dataIndex: 'exchange',
        key: 'exchange'
      },
      {
        title: "Priority",
        dataIndex: 'priority',
        key: 'priority'
      }
    ]}
    dataSource={genMX(recs.MX)}
    scroll={{y: 240}}
    size="small"
    bordered
  />
)
const txt = (
  <Table 
    columns={[
      {
        title: "SL",
        dataIndex: 'key',
        key: 'sl',
        className: S.__sl
      },
      {
        title: "Entries",
        dataIndex: 'entries',
        key: 'entries'
      }
    ]}
    dataSource={genTXT(recs.TXT)}
    scroll={{y: 240}}
    size="small"
    bordered
  />
)
const soa = (
  <Table 
    columns={[
      {
        title: "SL",
        dataIndex: 'key',
        key: 'sl',
        className: S.__sl
      },
      {
        title: "Nsname",
        dataIndex: 'nsname',
        key: 'nsname',
      },
      {
        title: "Hostmaster",
        dataIndex: 'hostmaster',
        key: 'hostmaster',
      },
      {
        title: "Serial",
        dataIndex: 'serial',
        key: 'serial',
      },
      {
        title: "Refresh",
        dataIndex: 'refresh',
        key: 'refresh',
      },
      {
        title: "Retry",
        dataIndex: 'retry',
        key: 'retry',
      },
      {
        title: "Expire",
        dataIndex: 'expire',
        key: 'expire',
      },
      {
        title: "Min TTL",
        dataIndex: 'minttl',
        key: 'minttl',
      },
    ]}
    dataSource={genSOA(recs.soa)}
    scroll={{y: 240}}
    size="small"
    bordered
  />
)

const records = (
  <Table>sdf</Table>
)
const information = (
  <div>sdf</div>
)

const DnsTable: FC<Props> = ({className, ...rest}) => {

  return (
    <div className={S.__box}>
      <Tabs title="Lookup Result" defaultActiveKey='records' items={[
        {
          label: "A",
          key: "a",
          children: a
        },
        {
          label: "AAAA",
          key: "aaaa",
          children: aaaa
        },
        // {
        //   label: "CAA",
        //   key: "caa",
        //   children: caa
        // },
        {
          label: "CNAME",
          key: "cname",
          children: cname
        },
        {
          label: "MX",
          key: "mx",
          children: mx
        },
        // {
        //   label: "NAPTR",
        //   key: "naptr",
        //   children: naptr
        // },
        // {
        //   label: "NS",
        //   key: "ns",
        //   children: ns
        // },
        // {
        //   label: "PTR",
        //   key: "ptr",
        //   children: ptr
        // },
        {
          label: "SOA",
          key: "soa",
          children: soa
        },
        // {
        //   label: "SRV",
        //   key: "srv",
        //   children: srv
        // },
        {
          label: "TXT",
          key: "txt",
          children: txt
        }
      ]}/>
    </div>
  );
};

export default DnsTable;
