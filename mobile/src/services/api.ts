import axios from 'axios';
import { Buffer } from 'buffer'

import { Credentials } from '../hooks/lol-client'

export default function api(credentials: Credentials) {
  const api = axios.create({
    baseURL: 'https://781f4ddc16e7.ngrok.io',
    headers: {
      Authorization: 'Basic ' + Buffer.from(`riot:${credentials?.password}`).toString('base64')
    },
  });

  return api
}
