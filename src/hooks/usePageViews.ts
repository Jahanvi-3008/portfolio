import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export function usePageViews() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    supabase
      .rpc('increment_views')
      .then(({ data }) => { if (data != null) setCount(data as number); });
  }, []);

  return count;
}
