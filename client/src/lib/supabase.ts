import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vnqllfnzygfpvniwkfdd.supabase.co';
const supabaseAnonKey = 'sb_publishable_zIxln8Twju7yHgbpBWelyg_EJLhv707';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
