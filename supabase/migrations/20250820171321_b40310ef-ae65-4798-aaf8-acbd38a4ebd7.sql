-- Fix security vulnerability: Restrict profile visibility to own profiles only
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Create secure policy that only allows users to view their own profile
CREATE POLICY "Users can view own profile only" 
ON public.profiles 
FOR SELECT 
USING (auth.uid() = user_id);

-- Allow users to view specific profiles only when needed for app functionality
-- This policy can be extended later if you need users to view other profiles in specific contexts
CREATE POLICY "Allow viewing other profiles for authenticated users in specific contexts" 
ON public.profiles 
FOR SELECT 
USING (
  auth.uid() = user_id 
  OR 
  -- Add specific conditions here if you need users to view other profiles
  -- For now, keeping it restrictive for security
  false
);