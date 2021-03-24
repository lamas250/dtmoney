import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';


createServer(
  {
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: "Transaction Seeder 1",
            type: "deposit",
            category: "DEV",
            amount: 5000,
            createdAt: new Date('2021-02-12 09:00:00')
          },
          {
            id: 2,
            title: "Transaction Seeder 2",
            type: "withdraw",
            category: "FOOD",
            amount: 120,
            createdAt: new Date('2021-02-22 10:00:00')
          }
        ],
      })
    },

    routes(){
      this.namespace = "api";
  
      this.get('/transactions', () => {
        return this.schema.all('transaction')
      });

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction',data);
      })
    }
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
