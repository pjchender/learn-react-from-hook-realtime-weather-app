import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

export const getDirName = () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  return __dirname;
}

export const saveFile = async ({
  filePath,
  data,
}) => {
  try {
    const dest = path.resolve(filePath);

    await fs.writeFile(
      dest,
      JSON.stringify(data, null, 2),
    );

  } catch (error) {
    console.error('[saveFile] error', error);
  }
}

export const readJSONFile = async ({
  filePath,
}) => {
  try {
    const data = await fs.readFile(filePath);
    return JSON.parse(data);
  } catch (error) {
    console.error('[readJSONFile] error', error);
  }
}
