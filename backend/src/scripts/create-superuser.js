const sequelize = require('../config/database');
const User = require('../models/User');
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt for superuser details
function promptUser(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
}

async function createSuperuser() {
  try {
    // Sync database (creates tables if they don't exist)
    await sequelize.sync();

    // Check if a superuser already exists
    const existingSuperuser = await User.findOne({ 
      where: { username: 'superadmin' } 
    });

    if (existingSuperuser) {
      console.log('Superuser already exists. Please use a different method to modify.');
      sequelize.close();
      rl.close();
      return;
    }

    // Prompt for username and password
    const username = await promptUser('Enter superuser username: ');
    const password = await promptUser('Enter superuser password: ');
    const confirmPassword = await promptUser('Confirm superuser password: ');

    // Validate password
    if (password !== confirmPassword) {
      console.log('Passwords do not match. Aborting.');
      sequelize.close();
      rl.close();
      return;
    }

    // Create superuser
    const superuser = await User.create({
      username,
      password,
      isSuperAdmin: true
    });

    console.log(`Superuser ${username} created successfully!`);

    // Close connections
    sequelize.close();
    rl.close();
  } catch (error) {
    console.error('Error creating superuser:', error);
    sequelize.close();
    rl.close();
  }
}

// Run the script
createSuperuser();
