import {
  Checkbox,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Tooltip,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import tag from 'antd/es/tag';
import CheckableTag from 'antd/es/tag/CheckableTag';

const tagsData = ['SUN', 'MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT'];
export const General = () => {
  const [form] = Form.useForm();
  const [selectedTags, setSelectedTags] = useState<string[]>(tagsData);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[900px]">
        <Form form={form} layout="vertical">
          <Row gutter={16}>
            <Col span={3} className="flex flex-col justify-between">
              <div>
                <span className="mr-1">Work days:</span>
                <Tooltip title="Work days and work hours will effect absences hour calculation in the employee time sheet.">
                  <QuestionCircleOutlined />
                </Tooltip>
              </div>
              <div>Work hours:</div>
            </Col>

            {tagsData.map((tag) => (
              <Col
                span={3}
                className="flex flex-col justify-center items-center"
              >
                <div>
                  <CheckableTag
                    key={tag}
                    checked={selectedTags.includes(tag)}
                    className="rounded-full w-[36px] h-[36px] flex justify-center items-center text-xs m-0 p-0 border border-solid border-slate-400"
                    onChange={(checked) => handleChange(tag, checked)}
                  >
                    {tag}
                  </CheckableTag>
                </div>
                <Divider type="vertical" />

                <div>
                  <InputNumber
                    className="w-[60px] py-1 rounded-xl "
                    disabled={!selectedTags.includes(tag)}
                  />
                </div>
              </Col>
            ))}
          </Row>

          <Row gutter={16} className="mt-5" align={'middle'}>
            <Col span={6}>Default work day hours:</Col>
            <Col span={3}>
              <Form.Item name="from" label="From">
                <DatePicker
                  picker="time"
                  showSecond={false}
                  minuteStep={30}
                  format={'HH:mm'}
                />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item name="to" label="To">
                <DatePicker
                  picker="time"
                  showSecond={false}
                  minuteStep={30}
                  format={'HH:mm'}
                />
              </Form.Item>
            </Col>
          </Row>
          <Divider />

          <Row className="flex justify-between items-start">
            <div>
              <Checkbox>Daily limit</Checkbox>
              <div className="text-gray-400">
                You'll be notified when a limit is exceeded
              </div>
            </div>

            <div>
              <Form.Item name="dailyLimit">
                <DatePicker
                  picker="time"
                  showSecond={false}
                  minuteStep={30}
                  format={'HH:mm'}
                />
              </Form.Item>
            </div>
          </Row>

          <Row className="flex justify-between items-start">
            <div>
              <Checkbox>Auto Clock Out</Checkbox>
              <div className="text-gray-400">
                Employees exceeding this limit will be automatically clocked out
              </div>
            </div>

            <div>
              <Form.Item name="dailyLimit">
                <DatePicker
                  picker="time"
                  showSecond={false}
                  minuteStep={30}
                  format={'HH:mm'}
                />
              </Form.Item>
            </div>
          </Row>

          <Divider />
        </Form>
      </div>
    </div>
  );
};
