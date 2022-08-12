import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { getData } from '../selectors/SignUpSelector';
import { Table, Button} from 'antd';
import { LogoutOutlined } from '@ant-design/icons';
import { userGetData, actionDeleteData } from '../actions/userSignUp';
import { useNavigate } from 'react-router-dom';
import "antd/dist/antd.css";

function DisplayData(){
  const [state, setState] = useState();
  const dispatch = useDispatch();
  const getDataSelector = useSelector(getData);
  console.log("getDataSelector:"+ getDataSelector);    
  const navigate = useNavigate();

  const onClickHandle = () => {
  localStorage.removeItem("token");
  window.location.replace("/");
};

useEffect(() => {
  dispatch(userGetData());
},[]);

  const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'fname',
  },
  {
    title: 'Capital',
    dataIndex: 'capital',
    key: 'capital',
  },
  // {
  //   title: 'currencies',
  //   dataIndex: 'currencies',
  //   render: (currencies) => currencies.map(currencies => currencies.name).join(),
  //   key: 'currencies',
  // },
];
return (
  <div className="data-display-background">
    <h1>Data</h1><br/>
      <div>
        <Table dataSource={getDataSelector} columns={columns}/>
      </div>
      <LogoutOutlined onClick={onClickHandle} style={{ fontSize: '20px', color: '#08c' , align: 'right'}}/>
  </div>  
  )
}

export default DisplayData;
