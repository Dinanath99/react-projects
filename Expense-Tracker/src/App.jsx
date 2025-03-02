import { useState, useEffect } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
      calculateBalance(storedTransactions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
    calculateBalance(transactions);
  }, [transactions]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      const newTransaction = {
        id: Math.floor(Math.random() * 1000),
        description,
        amount: parseFloat(amount),
      };
      setTransactions([newTransaction, ...transactions]);
      setDescription("");
      setAmount("");
    }
  };

  const handleDelete = (id) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== id
    );
    setTransactions(updatedTransactions);
  };

  const calculateBalance = (transactions) => {
    const income = transactions
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, curr) => acc + curr.amount, 0);
    const expenses = transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, curr) => acc + curr.amount, 0);
    setIncome(income);
    setExpenses(Math.abs(expenses));
    setBalance(income + expenses);
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 min-h-screen p-8">
      <Card className="shadow-xl border border-gray-200 rounded-lg">
        <CardContent>
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
            Expense Tracker
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Transaction Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="border-2 border-blue-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <Input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border-2 border-blue-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Add Transaction
            </Button>
          </form>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-4 my-8">
        <Card className="w-full md:w-1/3 p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-xl">
          <CardContent>
            <h3 className="text-lg font-semibold">Balance</h3>
            <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/3 p-4 bg-gradient-to-r from-yellow-400 to-red-500 text-white shadow-xl">
          <CardContent>
            <h3 className="text-lg font-semibold">Income</h3>
            <p className="text-3xl font-bold">${income.toFixed(2)}</p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-1/3 p-4 bg-gradient-to-r from-red-400 to-pink-500 text-white shadow-xl">
          <CardContent>
            <h3 className="text-lg font-semibold">Expenses</h3>
            <p className="text-3xl font-bold">${expenses.toFixed(2)}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-xl border border-gray-200 rounded-lg">
        <CardContent>
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Transaction History
          </h3>
          <ul className="space-y-3">
            {transactions.map((transaction) => (
              <li
                key={transaction.id}
                className={`flex justify-between items-center p-4 bg-gray-50 border-l-4 ${
                  transaction.amount < 0
                    ? "border-red-500 text-red-600"
                    : "border-green-500 text-green-600"
                }`}
              >
                <span>{transaction.description}</span>
                <span>${transaction.amount.toFixed(2)}</span>
                <Button
                  onClick={() => handleDelete(transaction.id)}
                  type="button"
                  className="ml-4 text-sm bg-red-500 hover:bg-red-600 text-white"
                >
                  Delete
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
