const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const BACKUP_PATH = path.join(__dirname, '../backups/');
if (!fs.existsSync(BACKUP_PATH)) fs.mkdirSync(BACKUP_PATH);
const FILE_NAME = 'db_backup_' + new Date().toISOString().replace(/[:.]/g, '-') + '.sql';

try {
  execSync(`pg_dump $DATABASE_URL > ${BACKUP_PATH + FILE_NAME}`);
  console.log('Backup created at:', BACKUP_PATH + FILE_NAME);
} catch (err) {
  console.error('Backup failed:', err.message);
}
