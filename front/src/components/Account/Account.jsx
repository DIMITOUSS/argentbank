import React from 'react';
import './Account.css';

const accountsData = [
  { title: 'Argent Bank Checking', accountNumber: 'x8349', amount: '$2,082.79', description: 'Available Balance' },
  { title: 'Argent Bank Savings', accountNumber: 'x6712', amount: '$10,928.42', description: 'Available Balance' },
  { title: 'Argent Bank Credit Card', accountNumber: 'x8349', amount: '$184.30', description: 'Current Balance' }
];

const AccountSection = () => {
  return (
    <main className="main bg-dark">
      <h2 className="sr-only">Accounts</h2>
      <div className='container'>
        {accountsData.map((account, index) => (
          <section className="account" key={index}>
            <div className="account-content-wrapper">
              <h3 className="account-title">{account.title} ({account.accountNumber})</h3>
              <p className="account-amount">{account.amount}</p>
              <p className="account-amount-description">{account.description}</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}

export default AccountSection;
