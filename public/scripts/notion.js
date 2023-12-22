// @ts-check

const NotionParse = require('@kodaps/notion-parse');
const dotenv = require('dotenv');

dotenv.config();

const go = async () => {

  if (process.env.NOTION_SECRET) {
    // @ts-ignore
    await NotionParse.parseNotion(process.env.NOTION_SECRET, './src/content', [
      {
        databaseId: process.env.NOTION_PORTFOLIO_DATABASE_ID || '',
        contentType: 'Portfolio'
      },
      // {
      //   databaseId: process.env.NOTION_POST_DATABASE_ID || '',
      //   contentType: 'Post',
      //   languageField: 'lang',
      //   filterFields: [ 'translation', 'createdAt', 'status', 'Type']
      // },
    ])
  } else {
    console.error('No NOTION_SECRET environment variable set');
  }

};

go().then(() => {
  console.log('Done');
});