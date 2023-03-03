import React from "react";
import { Table } from "antd";
import { useState } from "react";
import user from "../assets/user.jpg";
import { IconEllipsisHorizontal } from "./Icons.com";

const columns = [
  {
    title: "Code",
    dataIndex: "code",
    key: "key",
    sorter: (a, b) => a.code - b.code,
    render:code => <span className="text-base">{code}</span>
   
    
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "key",
    sorter: (a, b) => a.name - b.name,
    width: 160,
    render: (name) => {
      return (
        <div className="flex justify-around items-center">
          <span className="invisible lg:visible">
            <img src={user} className="w-10 rounded-full " />
          </span>
          <span className="text-base"> {name}</span>
        </div>
      );
    },
  },
  {
    title: "Mobile Number",
    key: "key",
    dataIndex: "mobileNumber",
    width: 140,
    sorter: (a, b) => a.mobileNumber - b.mobileNumber,
    render: mobileNumber => <span className="text-base block">{mobileNumber}</span>
  },
  {
    title: "Email",
    key: "key",
    dataIndex: "email",
    sorter: (a, b) => a.email - b.email,
    render:email => <span className="text-base">{email}</span>
  },
  {
    title: "JobTitle",
    key: "key",
    dataIndex: "joptitle",
    width: 120,
    sorter: (a, b) => a.joptitle - b.joptitle,
    render:joptitle => <span className="text-base">{joptitle}</span>
  },
  {
    title: "Authorized module",
    key: "key",
    dataIndex: "authorizedModule",
    width: 150,
    sorter: (a, b) => a.authorizedModule - b.authorizedModule,
    render: authorizedModule => <span className="text-base">{authorizedModule}</span>
  },
  {
    title: "Joining data",
    key: "key",
    dataIndex: "joiningData",
    sorter: (a, b) => a.joiningData - b.joiningData,
    render: joiningData => {
      return (
        <span className="relative ">
          <span className="text-base">{joiningData}</span>
          <span className="absolute -right-7">
            <IconEllipsisHorizontal />
          </span>
        </span>
      );
    }
  },
];

const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    code: `Bodjdhd14`,
    name: `Edward King`,
    mobileNumber: `0111967288${i}`,
    email: `islamalsoultan@gmail.com`,
    joptitle: `Product manager`,
    authorizedModule: `Trustree (CRM)`,
    joiningData: `Mon.5 Nov 2020 10.00am`,
  });
}

function TableUser() {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className="mt-5">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{
        pageSize:10,
        style:{
          color:'red',
          display:'flex',
          justifyContent: 'center',
          margin:'0',
          borderTop:'2px solid #EEE',
          marginTop:'20px'
        }
      }} />
    </div>
  );
}

export default TableUser;
