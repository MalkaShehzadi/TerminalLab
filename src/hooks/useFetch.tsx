import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
};

export default useFetch;
