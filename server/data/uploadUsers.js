const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');

// Supabase credentials
const supabaseUrl = 'https://ilgyhwokvlfaxuxmwdpz.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsZ3lod29rdmxmYXh1eG13ZHB6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDA1MTY5NCwiZXhwIjoyMDU5NjI3Njk0fQ.8Y-LPmTjuWrnE5gKibEZqiaEjd9-R4suwI74vHOH6iY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Read the JSON file
const usersData = JSON.parse(fs.readFileSync('./users.json', 'utf-8')).items;

async function insertUsers() {
    for (const user of usersData) {
        const { data, error } = await supabase
            .from('users')
            .insert([user]);

        if (error) {
            console.error('Error inserting user:', error);
        } else {
            console.log('Inserted user:', data);
        }
    }
}

insertUsers();