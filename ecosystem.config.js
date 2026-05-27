module.exports = {
  apps: [{
    name: 'tradevision-stitch',
    script: 'node_modules/next/dist/bin/next',
    args: 'start --port 3002',
    cwd: '/root/hermes-workspace/tradevision-stitch',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    watch: false,
    max_restarts: 10,
    min_uptime: '10s',
    error_file: '/root/.hermes/profiles/developer/home/.pm2/logs/tradevision-stitch-error.log',
    out_file: '/root/.hermes/profiles/developer/home/.pm2/logs/tradevision-stitch-out.log',
    env: {
      NODE_ENV: 'production',
      PORT: '3002',
      BACKEND_URL: 'http://localhost:8001',
    },
  }],
};
