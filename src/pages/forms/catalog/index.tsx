import React from 'react';
import CatalogTypeForm from './CatalogTypeForm';

import { Breadcrumb, Panel } from 'rsuite';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Catalogs</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Forms</Breadcrumb.Item>
            <Breadcrumb.Item active>Wizard Form</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <CatalogTypeForm />
    </Panel>
  );
};

export default Page;
