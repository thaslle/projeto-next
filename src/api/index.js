import fs from 'fs';
import path from 'path';

export const loadData = async (slug = '') => {
  let filePath;

  switch (slug) {
    case 'experiments':
      filePath = path.join(process.cwd(), 'public', 'api', 'experiments.json');
      break;
    case 'projects':
    default:
      filePath = path.join(process.cwd(), 'public', 'api', 'projects.json');
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(fileContents);
    return json;
  } catch (error) {
    console.error('Error reading JSON file:', error);
    return [];
  }
};
