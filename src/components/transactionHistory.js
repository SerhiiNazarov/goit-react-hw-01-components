import { TransactionHistoryItem } from './transactionHistoryItem';
import PropTypes from 'prop-types';

export function TransactionHistory(props) {
  const { items } = props;
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{items.map(item => TransactionHistoryItem(item))}</tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.array,
};
