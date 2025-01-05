import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import "../css/Currency.css";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_0Ty9MwZARhBzp9u6ljDPZVrWYSGlIC0RrLLiCrBf";

export const Currency = () => {
  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2); //toFixed metodu virgülden sonra kaç basamak görünecek onu ayarlar.
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div>
        <h2>Currency App</h2>
      </div>
      <div className="input-div">
        <input
          type="number"
          className="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
          value={fromCurrency}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowRight />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
          value={toCurrency}
        >
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input type="number" className="result" value={result} />
      </div>

      <div>
        <button onClick={exchange} style={{ cursor: "pointer" }}>
          Çevir
        </button>
      </div>
    </div>
  );
};
