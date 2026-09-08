import { supabase } from './supabase';

export type CloudLoadResult<T> =
  | { status: 'found'; data: T }
  | { status: 'empty' }
  | { status: 'error'; message: string };

export const loadCloudState = async <T>(userId: string): Promise<CloudLoadResult<T>> => {
  const { data, error } = await supabase
    .from('user_app_state')
    .select('data')
    .eq('user_id', userId)
    .maybeSingle();

  if (error) return { status: 'error', message: error.message };
  if (!data) return { status: 'empty' };
  return { status: 'found', data: data.data as T };
};

export const saveCloudState = async <T>(userId: string, state: T) => {
  const { error } = await supabase
    .from('user_app_state')
    .upsert({ user_id: userId, data: state }, { onConflict: 'user_id' });

  if (error) throw error;
};
