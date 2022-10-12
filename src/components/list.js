import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import axios from "axios";
function List() {
  //let result =   null;

  const [APIData, setAPIData] = useState([]);
  const navigate = useNavigate();

  const getdata = () => {
    axios.get("https://localhost:7124/Login/all", {}).then((res) => {
      setAPIData(res.data);
      //showRows(APIData);
      // console.log(res.data);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  const update = (row) => {
    navigate("/create", {
      state: row,
    });
  };

  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>username</Table.HeaderCell>
            <Table.HeaderCell>first name Date</Table.HeaderCell>
            <Table.HeaderCell>last name</Table.HeaderCell>
            <Table.HeaderCell>update</Table.HeaderCell>
            <Table.HeaderCell>delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {APIData.map((row) => (
            <Table.Row>
              <Table.Cell>{row.userName}</Table.Cell>
              <Table.Cell>
                <button onClick={update(row)}>update</button>
              </Table.Cell>
              <Table.Cell>
                <button>delete</button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default List;
