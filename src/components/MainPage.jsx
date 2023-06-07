import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteComponent() {
    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = async () => {
        try {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        
        if (response.status === 200) {
            // console.log(response.data)
            const quoteData = response.data;
            setQuote(quoteData);
            // console.log(quoteData.author);
        }
        } catch (error) {
        console.error('Error fetching quote:', error);
    
        }
    };

    return (
        <div>
        <h1>"{quote.quote}"</h1>
        <h2>-- {quote.author} --</h2>
        <button className="shadow" onClick={fetchRandomQuote}>Generate Random Quote</button>
        </div>
    );
}

export default QuoteComponent;

// https://api.quotable.io/random