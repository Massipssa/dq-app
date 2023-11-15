import React from 'react';
import CatalogTable from './CatalogTable';

import { Breadcrumb, Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Catalogs</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Datasources</Breadcrumb.Item>
            <Breadcrumb.Item active>Catalogs</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <CatalogTable />
    </Panel>
  );
};

export default Page;
