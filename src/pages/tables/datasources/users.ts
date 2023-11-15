/*
import axios from 'axios';

interface Datasource {
  id: number,
  name: string,
  type: string,
  creationTime: Date,
  updateTime: Date,
  description: string
}

const client = axios.create({
  baseURL: "localhost:8092/api/v1/datasource/jdbc/datasources" 
});

export default client; 
*/

export default [
  {
    id: 1,
    type: 'SQL',
    name: 'datasource1',
    format: 'parquet',
    rating: 820,
    followers: 70
  },
  {
    id: 2,
    type: 'GCS',
    name: 'datasource2',
    format: 'parquet',
    rating: 1200,
    followers: 170
  },
  {
    id: 3,
    type: 'GCS',
    name: 'datasource3',
    format: 'parquet',
    rating: 610,
    followers: 170
  },
  {
    id: 4,
    type: 'ADLS',
    name: 'datasource4',
    format: 'parquet',
    rating: 5322,
    followers: 170
  },
  {
    id: 5,
    type: 'SQL',
    name: 'datasource5',
    format: 'parquet',
    rating: 852,
    followers: 770
  }
];

