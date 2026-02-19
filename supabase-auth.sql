-- Enable auth for users
-- Make sure to enable Authentication in Supabase Dashboard → Authentication → Providers → Email

-- Allow users to view their own orders
CREATE POLICY "Users can view own orders" ON orders
FOR SELECT
USING (auth.uid()::text = customer_email);

-- Allow authenticated users to insert orders
CREATE POLICY "Auth users can insert orders" ON orders
FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Allow users to update their own orders
CREATE POLICY "Users can update own orders" ON orders
FOR UPDATE
USING (auth.uid()::text = customer_email)
WITH CHECK (auth.uid()::text = customer_email);
