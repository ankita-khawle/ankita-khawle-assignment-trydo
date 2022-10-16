import './App.css';
import { Card,Row,Col,Button, Select, Form, Input,Checkbox} from 'antd';
import 'antd/dist/antd.css';
import { useState } from 'react';
const { Option } = Select;

function App() {
  const [form] = Form.useForm();
  const [list,setList] = useState([]);
  let wrapperStyle = {
    paddingLeft:"4rem",
    paddingRight:"4rem",
    paddingTop:"2rem",
  }
  let cardStyle = {
    boxShadow: "0 0 10px #f6f3f2",
    borderRadius:"10px"
  }
  let inputStyle = {
    float: "left",
    width:"100%",
    borderRadius:"10px"
  }
  let resultDivStyle = {
    marginTop: "2rem"
  }
  let color = {
    1: "yellow",
    2: "green",
    3: "red",
  }
  const onFinish = (values) => {
    setList([...list,...[{...values,...{id: Math.floor((Math.random() * 100) + 1), checked:false}}]]);
    form.resetFields();
  };
  const checkAction = (e,data) => {
      let buff = list.map(i=>{ if(i.id===data.id) {
        i.checked = e.target.checked;
        return i;
      } else {
        return i;
      }});
      setList(buff)
  }

  const renderList = () => {
    let buff = [];
    for(let item of list) {
      buff.push(
        <Col span={6} className="gutter-row">
          <Card style={cardStyle}>
              <Checkbox style={inputStyle} onChange={(e)=>checkAction(e, item)}>
                <p>
                    <span style={{width:"10px",  height:"100%", backgroundColor: color[item.color]}}>&nbsp;</span>&nbsp;&nbsp;<span style={item.checked ?  {"text-decoration": "line-through", }: null}>{item.taskName}</span>
                </p>
              </Checkbox>
          </Card>
        </Col>
      )
    } 
    return buff;
  };

  return (
  <div className="App" style={wrapperStyle}>
    <h1 style={{textAlign: "left"}}>Task Details</h1> 
    <Card style={cardStyle}>
      <Form form={form} name="basic" layout="vertical" labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
        <Row gutter={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
          <Col span={10} className="gutter-row">
            <Form.Item style={inputStyle} label="Task-To-Do" name="taskName" rules={[{ required: true, message: 'Add a new Task!' }]}>
              <Input size="large" placeholder="Add a task."/>
            </Form.Item>
          </Col>
          <Col span={10} className="gutter-row">
            <Form.Item style={inputStyle} label="Select Task Category" name="color" rules={[{ required: true, message: 'Select a color!' }]}>
              <Select size="large" placeholder="Select a color.">
                <Option value="1">Yellow</Option>
                <Option value="2">green</Option>
                <Option value="3">Red</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={4} className="gutter-row"></Col>
          <Col span={6} >
            <Form.Item style={inputStyle}>
              <Button type="primary" style={{width:"100%", height: "100%"}} htmlType="submit">
                Submit Task
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Card>
    <div style={resultDivStyle}>
      <h1 style={{textAlign: "left"}}>Your tasks</h1> 
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        {list.length ? renderList() : null}
      </Row>
    </div>

      
  </div>
  );
}

export default App;