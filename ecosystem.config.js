module.exports = {
    apps: [
      {
        name: 'My Portfolio', // Name of your application
        script: 'node_modules/next/dist/bin/next', // Path to the Next.js start script
        args: 'start', // Argument to run the start command
        instances: 'max', // Use maximum CPU cores for scaling
        exec_mode: 'cluster', // Use cluster mode for better performance
        env: {
          NODE_ENV: 'production', // Set environment to production
          PORT: 3000, // Optional: Set your port
        },
      },
    ],
  };
  