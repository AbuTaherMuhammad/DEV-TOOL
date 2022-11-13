import { Button, Form, Input, Select, Space, Typography } from "antd";
import { FC } from "react";
import S from './InputBox.module.sass'

interface Props{
  getDNS: (url: string, rrtype: string) => void;
}
interface InputType {
  url: string;
  rrtype: string
}

const selectAfter = (
  <Form.Item 
    name="rrtype" 
    initialValue="RRType" 
    rules={[{required: true, message: "Select preferred record type"}]}
    noStyle>
      <Select className={S.__select__after} defaultValue="RRType">
        <Select.Option value="ANY">ANY</Select.Option>
        <Select.Option value="A">A</Select.Option>
        <Select.Option value="AAAA">AAAA</Select.Option>
        <Select.Option value="CAA">CAA</Select.Option>
        <Select.Option value="CNAME">CNAME</Select.Option>
        <Select.Option value="MX">MX</Select.Option>
        <Select.Option value="NAPTR">NAPTR</Select.Option>
        <Select.Option value="NS">NS</Select.Option>
        <Select.Option value="PTR">PTR</Select.Option>
        <Select.Option value="SOA">SOA</Select.Option>
        <Select.Option value="SRV">SRV</Select.Option>
        <Select.Option value="TXT">TXT</Select.Option>
      </Select>
  </Form.Item>
)

const InputBox: FC<Props> = ({getDNS})  =>{
  const [form] = Form.useForm()

  const onInspect = (e:InputType) => {
    getDNS(e.url, e.rrtype)
    
  }

  return (
    <div className={S.__box}>
      <div className="__container">
        <Space direction="vertical">
          <Typography.Title className={S.__title} level={5}>Domain name</Typography.Title>

          <Form className={S.__form} form={form} layout="inline" onFinish={onInspect} scrollToFirstError>
            <Input.Group compact>
              <Form.Item className={S.__inputItem} noStyle
                name='url'
                rules={[{required: true, message: "Please input your URL"}]}
              >
                <Input className={S.__input} addonAfter={selectAfter} type="url" placeholder="e.g. example.com" />
              </Form.Item>

              <Form.Item className={S.__inputItem} noStyle shouldUpdate>
                {() => (
                  <Button 
                    className={S.__btn} 
                    type="primary" 
                    htmlType="submit" 
                    disabled={
                      !form.isFieldsTouched(true) || 
                      !!form.getFieldsError().filter(({errors}) => errors.length).length
                    }>Inspect</Button>
                )}
                
              </Form.Item>
            </Input.Group>
          </Form>

          <Typography.Text className={S.__inputNote}>
            <strong>Note: </strong>
            Input URL with HTTP protocol. Example: https://example.com. Keep RRType to &quot;ANY&quot; otherwise you&apos;re looking specific records.
          </Typography.Text>
        </Space>
      </div>
    </div>
  );
};

export default InputBox;
