import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { GoDot } from 'react-icons/go';

import { Stacked, Pie, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-12'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-no-repeat bg-cover bg-center'>
          
        </div>
      </div>
    </div>
  )
}

export default Ecommerce;
