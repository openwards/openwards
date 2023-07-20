import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";

const auth = supabase.auth;

export function useCurrentUser(): boolean {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    auth.getSession().then(({ data: { session } }) => setUser(session?.user || null));
    auth.onAuthStateChange((_, session) => setUser(session?.user || null));
  }, []);

  return user;
}
