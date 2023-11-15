import React, { useState } from 'react';
import { Form, SelectPicker } from 'rsuite';
import Textarea from '@/components/Textarea';


import RadioTile from '@/components/RadioTile';
import { Icon } from '@rsuite/icons';
import { VscNotebookTemplate, VscRepoClone, VscFile } from 'react-icons/vsc';
import FormHeader from './FormHeader';
import { Catalog } from '@/common/Catalogs';

import { Breadcrumb, Panel } from 'rsuite';



const CatalogTypeForm = () => {
  //const [type, setType] = useState('personal');

  return (
    <Panel>
      <Form fluid>
        <FormHeader
          title="Choose catalog type"
          description=""
        />

        <Form.Group controlId="name">
          <Form.ControlLabel>Name</Form.ControlLabel>
          <Form.Control name="name" />
        </Form.Group>

        <Form.Group controlId="type">
          <Form.ControlLabel>Type</Form.ControlLabel>
          <Form.Control
            name="type"
            accepter={SelectPicker}
            data={[
              { value: 1, label: Catalog.KAFKA},
              { value: 2, label: Catalog.MYSQL },
              { value: 3, label: Catalog.POSTGRESL },
            ]}
            block
          />
        </Form.Group>
      </Form>
    </Panel>
  );
};

export default CatalogTypeForm;
