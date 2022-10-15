import './App.css';
import { Card,Row,Col,Button, Select, Form, Input,Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
const { Option } = Select;

function App() {
  const [list,setList] = useState([])
  const onFinish = (values) => {
    setList([...list,...[values]])
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const renderList = () => {
    console.log("---------",list)
    let buff = []
    for(let item of list) {
      buff.push(
        <Col span={6}>
          <Card>
            <Checkbox >{item.taskName}</Checkbox>
          </Card>
        </Col>
      )
    } 
    return buff;

  };

  return (
  <div className="App">
    <h1 style={{textAlign: "left"}}>Task Details</h1> 
    <Card>
      <Form name="basic" layout="vertical" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Row>
          <Col span={12}>
          <Form.Item label="Task-To-Do" name="taskName" rules={[{ required: true, message: 'Add a new Task!' }]}>
            <Input />
          </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Select Task Category" name="color" rules={[{ required: true, message: 'Select a color!' }]}>
              <Select>
                <Option value="1">Yellow</Option>
                <Option value="2">green</Option>
                <Option value="3">Red</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
          <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
    <h1 style={{textAlign: "left"}}>Your tasks</h1> 
    <Row>
    {renderList()}
    </Row>
      
  </div>
  );
}

export default App;