import React from 'react';
import { Table, Panel } from 'rsuite';

const { Column, HeaderCell, Cell } = Table;

const data = [
  {
    id: 1,
    url: 'datasource1',
    visits: '105,253',
    unique: '23,361',
    bounce: '11%'
  },
  {
    id: 2,
    url: 'datasource2',
    visits: '103,643',
    unique: '23,385',
    bounce: '17%'
  },
  {
    id: 3,
    url: 'datasource3',
    visits: '140,013',
    unique: '41,256',
    bounce: '13%'
  },
  {
    id: 4,
    url: 'datasource4',
    visits: '194,532',
    unique: '19,038',
    bounce: '18%'
  },
  {
    id: 5,
    url: 'datasource5',
    visits: '26,353',
    unique: '1,000',
    bounce: '20%'
  },
  {
    id: 6,
    url: 'datasource6',
    visits: '11,973',
    unique: '4,786',
    bounce: '24%'
  }
];

const DataTable = () => {
  return (
    <Panel className="card" header="Recent data checks">
      <Table height={300} data={data} rowKey="id">
        <Column flexGrow={1} minWidth={100}>
          <HeaderCell>DATASOURCE NAME </HeaderCell>
          <Cell>
            {rowData => {
              return (
                <a href={rowData.url} target="_blank" rel="noreferrer">
                  {rowData.url}
                </a>
              );
            }}
          </Cell>
        </Column>
        
        {/** TOOD: review naming */}
        <Column width={130}>
          <HeaderCell>VISITORS</HeaderCell>
          <Cell dataKey="visits" />
        </Column>

        <Column width={100}>
          <HeaderCell>UNIQUE</HeaderCell>
          <Cell dataKey="unique" />
        </Column>

        <Column width={130}>
          <HeaderCell>RATE</HeaderCell>
          <Cell dataKey="bounce" />
        </Column>
      </Table>
    </Panel>
  );
};

export default DataTable;
