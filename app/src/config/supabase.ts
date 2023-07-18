import 'react-native-url-polyfill/auto'

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { MMVKStoreAdapter } from './MMVKStoreAdapter';

// TODO: create env file and use dotenv
const supabaseUrl = 'http://192.168.0.111:8000'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE'
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey, {
  auth:{
    storage: MMVKStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});

export { supabase };
