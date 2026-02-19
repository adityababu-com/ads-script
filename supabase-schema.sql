-- Products table
CREATE TABLE IF NOT EXISTS products (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT,
  image TEXT,
  category TEXT,
  in_stock INTEGER DEFAULT 1,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Orders table  
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  email TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  zip TEXT NOT NULL,
  phone TEXT NOT NULL,
  items JSONB NOT NULL,
  total INTEGER NOT NULL,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Allow public read access to products
CREATE POLICY "Products are viewable by everyone" 
ON products FOR SELECT 
USING (true);

-- Allow public insert access to orders
CREATE POLICY "Orders can be created by everyone"
ON orders FOR INSERT
WITH CHECK (true);

-- Allow owners to view their own orders
CREATE POLICY "Users can view their own orders"
ON orders FOR SELECT
USING (auth.uid()::text = id);

-- Insert sample products
INSERT INTO products (id, name, price, description, image, category) VALUES
('sakura', 'Sakura Berry Pop', 1499, 'Sweet, floral, and bursting with strawberry-cherry notes. Perfect for that soft-girl aesthetic.', 'https://images.unsplash.com/photo-1703905424956-a21a02769117?auto=format&fit=crop&w=1400&q=80', 'Sakura'),
('peach', 'Peach Blossom Glow', 1499, 'Juicy, refreshing peach flavor. Like biting into a summer fruit while listening to upbeat pop.', 'https://images.unsplash.com/photo-1703905424975-e3648cdeff31?auto=format&fit=crop&w=1400&q=80', 'Peach'),
('blueberry', 'Blueberry Starlight', 1599, 'Cool, calming blueberry with a hint of lavender. For the mysterious, dreamy idol vibe.', 'https://images.unsplash.com/photo-1723015973566-1cb80ebe9aa9?auto=format&fit=crop&w=1400&q=80', 'Blueberry');
