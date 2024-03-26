import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getLocalStorage } from '../../utility/SetToLocalStorage';
import { useLoaderData } from 'react-router-dom';
import { SlGameController } from 'react-icons/sl';

const PagesToRead = () => {
    const readBook = getLocalStorage();
    const books = useLoaderData()
    const showReadBook = books.filter( book => readBook.includes(book.bookId))
    
    return (
        <div className='w-full h-96'>
            <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={showReadBook}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="bookName" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="totalPages" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default PagesToRead;