// @ts-check
import { defineConfig, devices } from '@playwright/test';
//import { config } from 'node:process';


const config = ({

  testDir: './tests',
  timeout: 80*1000,
  expect: {
    timeout: 80*1000,
  },
  reporter: 'html',

  use: {
 browserName : 'chromium',
 headless  : false
  },
   
  
});
module.exports= config

