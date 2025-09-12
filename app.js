import { Amplify } from 'aws-amplify';
import awsconfig from './src/amplifyconfiguration.json'; // Asegúrate de que esta ruta sea correcta

Amplify.configure(awsconfig);   