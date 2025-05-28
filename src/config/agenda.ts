import { Agenda } from 'agenda';
import { config } from './env';



// creating agenda instence
const agenda = new Agenda({
  db: { address: config.DB_URL, collection: 'agendaJobs' },
  processEvery: '30 seconds',
  defaultConcurrency: 10,
});

export default agenda;
