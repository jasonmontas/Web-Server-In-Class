const { createClient } = require('@supabase/supabase-js');
const products = require('./products.json'); // Path to your JSON file

const supabaseUrl = 'https://ilgyhwokvlfaxuxmwdpz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3lod29rdmxmYXh1eG13ZHB6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA1MTY5NCwiZXhwIjoyMDU5NjI3Njk0fQ.8Y-LPmTjuWrnE5gKibEZqiaEjd9-R4suwI74vHOH6iY';
const supabase = createClient(supabaseUrl, supabaseKey);

async function uploadProducts() {
    for (const product of products.items) {
        const { data, error } = await supabase
            .from('products')
            .insert([product]);

        if (error) {
            console.error('Error inserting product:', error);
        } else {
            console.log('Inserted product:', data);
        }
    }
}

uploadProducts();