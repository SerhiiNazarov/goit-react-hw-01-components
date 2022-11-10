import PropTypes from 'prop-types';
import './transactionHistory.css';

export function TransactionHistoryItem(props) {
  const { id, type, amount, currency } = props;
  return (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionHistoryItem.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};
