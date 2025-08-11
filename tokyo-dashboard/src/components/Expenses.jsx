import { useState } from 'preact/hooks';

export function Expenses({ expenses, setExpenses }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addExpense = () => {
    const amountNumber = parseFloat(amount);
    if (description.trim() !== '' && !isNaN(amountNumber) && amountNumber > 0) {
      setExpenses([...expenses, { id: Date.now(), description, amount: amountNumber }]);
      setDescription('');
      setAmount('');
    }
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

  return (
    <section class="expenses">
      <h2>Expenses</h2>
      <div class="add-item">
        <input
          type="text"
          value={description}
          onInput={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <input
          type="number"
          value={amount}
          onInput={(e) => setAmount(e.target.value)}
          placeholder="Amount (¥)"
        />
        <button onClick={addExpense}>Add</button>
      </div>
      <ul>
        {expenses.map(expense => (
          <li key={expense.id}>
            <span>{expense.description}</span>
            <span>¥{expense.amount.toLocaleString()}</span>
            <button class="delete" onClick={() => deleteExpense(expense.id)}>×</button>
          </li>
        ))}
      </ul>
      <div class="total">
        <strong>Total:</strong> ¥{totalExpenses.toLocaleString()}
      </div>
    </section>
  );
}
