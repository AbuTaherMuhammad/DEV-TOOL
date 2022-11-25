import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  AimOutlined,
  CloudServerOutlined,
  InfoCircleOutlined,
  UserOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { AutoComplete, Avatar, Col, Input, Layout, Menu, Row, Typography } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Props } from 'next/script';
import React, { useState } from 'react';

const { Header, Sider, Content, Footer } = Layout;

const searchButton = (
  <SearchOutlined
  onClick={console.log}
    style={{
      fontSize: 16,
      // color: "#000"
    }}
  />
)

const AppLayout: React.FC<Props> = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter()

  return (
    <Layout>

      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="brand__logo">
          <Link href="/">
            {collapsed ? (
              <Typography.Title level={4} style={{color: '#FFF'}}>DT</Typography.Title>
            ) : (
            <Typography.Title level={4} style={{color: '#FFF'}}>Dev Tool</Typography.Title>
            )}
          </Link>
        </div>
        
        <Menu
          theme="dark"
          // mode="inline"
          onClick={e => router.push(`/${e.key}`, `/${e.key}`, {shallow: true})}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: 'dns-lookup',
              icon: <AimOutlined />,
              label: 'DNS Lookup',
            },
            {
              key: 'blacklists',
              icon: <AimOutlined />,
              label: 'Blacklists',
            },
            {
              key: 'dmarc',
              icon: <AimOutlined />,
              label: 'DMARC',
            },
            {
              key: 'diagnostics',
              icon: <AimOutlined />,
              label: 'Diagnostics',
            },
            {
              key: 'email-health',
              icon: <AimOutlined />,
              label: 'Email Health',
            },
            {
              key: 'analyze-headers',
              icon: <AimOutlined />,
              label: 'Analyze Headers',
            },
            {
              key: 'smtp',
              icon: <AimOutlined />,
              label: 'SMTP',
              description: "Test mail server"
            },
            {
              key: 'ptr',
              icon: <AimOutlined />,
              label: 'PTR',
              description: "DNS reverse lookup"
            },
            {
              key: 'whois',
              icon: <AimOutlined />,
              label: 'Whois',
              description: "Domain lookup"
            },
            {
              key: 'sfp',
              icon: <AimOutlined />,
              label: 'SFP',
              description: "Sender policy framework"
            },
            {
              key: 'skim',
              icon: <AimOutlined />,
              label: 'Domain Keys Identified Mail',
              description: "Test mail server"
            },
            {
              key: 'smtp',
              icon: <AimOutlined />,
              label: 'SMTP',
              description: "Test mail server"
            },
            {
              key: 'cert',
              icon: <AimOutlined />,
              label: 'CERT',
              description: "CERT Lookup"
            },
            {
              key: 'domain',
              icon: <AimOutlined />,
              label: 'Domain',
              description: "Domain health report"
            },
            {
              key: 'asn',
              icon: <AimOutlined />,
              label: 'ASN',
              description: "ASN Lookup"
            },
            {
              key: 'smtp',
              icon: <AimOutlined />,
              label: 'SMTP',
              description: "Test mail server"
            },
            {
              key: 'http-https',
              icon: <AimOutlined />,
              label: 'HTTP/HTTPS',
              description: "Query lookup"
            },
            {
              key: 'arin',
              icon: <AimOutlined />,
              label: 'Arin',
              description: "Arin"
            },
            {
              key: 'mailflow',
              icon: <AimOutlined />,
              label: 'Mailflow',
              description: "End-to-End mail monitoring"
            },
            {
              key: 'subnet-callculator',
              icon: <AimOutlined />,
              label: 'Subnet Calculator',
              description: "Monitor an entire subnet"
            },
            {
              key: 'email-extraction',
              icon: <AimOutlined />,
              label: 'Email Extraction',
              description: "Extract email from text"
            },
            {
              key: 'bulk-lookup',
              icon: <AimOutlined />,
              label: 'Bulk Lookup',
              description: "Run bulk lookup"
            },
            {
              key: 'email-deliverability',
              icon: <AimOutlined />,
              label: 'Email Deliverability',
              description: "Build your full deliverability report."
            },
            {
              key: 'dns-propagation',
              icon: <AimOutlined />,
              label: 'DNS Propagation',
              description: "DNS Propagation check"
            },
            {
              key: 'password-generator',
              icon: <AimOutlined />,
              label: 'Password Generator',
              description: "Generate strong password."
            },
            {
              key: 'spam-analyzer',
              icon: <AimOutlined />,
              label: 'Spam Analyzer',
              description: "Analyze spam"
            },
            {
              key: 'about',
              icon: <InfoCircleOutlined />,
              label: 'About',
            },
          ]}
        />
      </Sider>

      <Layout className="page">
        <Header className="page__header" >
          <Row justify="space-between">
            <Col span={4}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'main__trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Col>

            {/* Search bar */}
            <Col span={8} >
                <Input suffix={searchButton} placeholder="search" />
                {/* <AutoComplete suffix={searchButton} placeholder="search" /> */}
            </Col>

            <Col span={2} offset={4}>
                <div className='header__avatar'>
                    <Avatar onClick={() => setCollapsed(!collapsed)} icon={<UserOutlined/>} />
                </div>
                        
            </Col>
          </Row>

          

          
        </Header>

        <Content
          className="page__body"
          style={{
            margin: '24px 16px',
          }}
        >
          {children}
        </Content>

        <Footer className='page__footer'>
          <p className='footer__copyright'>Made by <Link href="https://abutahermuhammad.com">Abu Taher Muhammad</Link></p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
