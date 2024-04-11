import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Toolbar, Edit, Sort, Filter} from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';

import { Header } from '../components';

const Customers = () => {
  return (
    <div className='m-2 md:mb-10 md:ml-10 p-10 md:pb-10 bg-white rounded-3xl'>
    <Header category='Page' title='Customers' />
    <GridComponent
      id='gridcomp'
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      width='auto'
      editSettings={{ allowDeleting: true, allowEditing: true}}
    >
      <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective 
            key={index}
            {...item}
          />
        ))}
      </ColumnsDirective>
      <Inject 
        services={[Page, Toolbar, Selection, Edit, Sort, Filter]}
      />
    </GridComponent>
  </div>
  )
}

export default Customers
